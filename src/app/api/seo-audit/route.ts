export const runtime    = "nodejs";
export const maxDuration = 30;

import { Resend } from "resend";
import { rateLimit, getIp } from "@/lib/rateLimit";

// ── helpers ───────────────────────────────────────────────────────────────────

function san(v: unknown): string {
  if (typeof v !== "string") return "";
  return v.replace(/<[^>]*>/g, "").replace(/[\x00-\x1F]/g, "").trim();
}

function isEmail(e: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

function normaliseUrl(raw: string): string {
  const u = raw.trim();
  return /^https?:\/\//i.test(u) ? u : `https://${u}`;
}

function isValidUrl(u: string): boolean {
  try { const p = new URL(u); return p.protocol === "http:" || p.protocol === "https:"; }
  catch { return false; }
}

// ── Result type ───────────────────────────────────────────────────────────────

export interface AuditResult {
  url:     string;
  scores:  { performance: number; seo: number; accessibility: number; bestPractices: number };
  metrics: Array<{ label: string; value: string }>;
  issues:  { title: string }[];
}

// ── HTML-based audit (no external API key required) ───────────────────────────

async function runAudit(url: string): Promise<AuditResult> {
  const start = Date.now();

  const res = await fetch(url, {
    signal:  AbortSignal.timeout(15_000),
    headers: {
      "User-Agent":      "Mozilla/5.0 (compatible; RAKTechnologies-SEO-Audit/1.0)",
      "Accept":          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });

  const responseTime = Date.now() - start;

  if (!res.ok) throw new Error(`HTTP ${res.status} — server returned an error for that URL.`);

  const ct = res.headers.get("content-type") ?? "";
  if (!ct.includes("html")) throw new Error("That URL does not serve an HTML page.");

  const html = await res.text();
  const isHttps = url.startsWith("https://");

  // ── extract ──────────────────────────────────────────────────────────────

  const get = (re: RegExp) => { const m = html.match(re); return m ? (m[1] ?? "").trim() : ""; };
  const has = (re: RegExp) => re.test(html);

  const title    = get(/<title[^>]*>([^<]{1,200})<\/title>/i);
  const metaDesc =
    get(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']{1,300})/i) ||
    get(/<meta[^>]+content=["']([^"']{1,300})[^>]+name=["']description["']/i);

  const viewport  = has(/<meta[^>]+name=["']viewport["']/i);
  const canonical = has(/<link[^>]+rel=["']canonical["']/i);
  const langMatch = html.match(/<html[^>]+lang=["']([^"']+)/i);
  const lang      = langMatch ? (langMatch[1] ?? "") : "";
  const isNoIndex = /noindex/i.test(get(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)/i));
  const hasOg     = has(/<meta[^>]+property=["']og:title["']/i) &&
                    has(/<meta[^>]+property=["']og:description["']/i) &&
                    has(/<meta[^>]+property=["']og:image["']/i);
  const hasTwitter = has(/<meta[^>]+name=["']twitter:card["']/i);
  const hasJsonLd  = has(/application\/ld\+json/i);
  const hasCharset = has(/<meta[^>]+charset/i);
  const hasFavicon = has(/<link[^>]+(rel=["'][^"']*icon[^"']*["']|type=["']image\/x-icon["'])/i);

  const h1s  = (html.match(/<h1[^>]*>/gi)  ?? []).length;
  const h2s  = (html.match(/<h2[^>]*>/gi)  ?? []).length;
  const h3s  = (html.match(/<h3[^>]*>/gi)  ?? []).length;
  const imgs = html.match(/<img[^>]+>/gi)  ?? [];
  const imgsMissingAlt = imgs.filter(t => !/alt=/i.test(t)).length;
  const pageSizeKB     = Math.round(html.length / 1024);

  // ── scores ───────────────────────────────────────────────────────────────

  // SEO
  let seo = 0;
  if (title)  { seo += 15; if (title.length >= 30 && title.length <= 70) seo += 5; }
  if (metaDesc) { seo += 15; if (metaDesc.length >= 100 && metaDesc.length <= 170) seo += 5; }
  if (h1s === 1) seo += 15; else if (h1s > 1) seo += 7;
  if (viewport)   seo += 10;
  if (canonical)  seo += 8;
  if (lang)       seo += 7;
  if (!isNoIndex) seo += 10;
  if (hasOg)      seo += 10;

  // Accessibility
  let acc = 0;
  if (imgs.length === 0) acc += 30;
  else acc += Math.round(((imgs.length - imgsMissingAlt) / imgs.length) * 30);
  if (lang)      acc += 20;
  if (viewport)  acc += 20;
  if (h1s > 0)   acc += 15;
  if (title)     acc += 15;

  // Best Practices
  let bp = 0;
  if (isHttps)   bp += 25;
  if (hasCharset) bp += 10;
  if (canonical)  bp += 10;
  if (hasFavicon) bp += 10;
  if (hasJsonLd)  bp += 15;
  if (hasOg)      bp += 10;
  if (hasTwitter) bp += 5;
  if (h1s === 1)  bp += 10;
  if (!isNoIndex) bp += 5;

  // Performance (based on response time + page size)
  let perf = 100;
  if      (responseTime > 3000) perf -= 50;
  else if (responseTime > 2000) perf -= 35;
  else if (responseTime > 1500) perf -= 25;
  else if (responseTime > 1000) perf -= 15;
  else if (responseTime > 500)  perf -= 5;
  if      (pageSizeKB > 500)    perf -= 20;
  else if (pageSizeKB > 300)    perf -= 10;
  else if (pageSizeKB > 200)    perf -= 5;

  // ── issues ───────────────────────────────────────────────────────────────

  const issues: { title: string }[] = [];
  if (!title)                              issues.push({ title: "Missing title tag" });
  else if (title.length < 30)              issues.push({ title: "Title is too short — aim for 30–70 characters" });
  else if (title.length > 70)              issues.push({ title: "Title is too long — trim to under 70 characters" });
  if (!metaDesc)                           issues.push({ title: "Missing meta description" });
  else if (metaDesc.length < 100)          issues.push({ title: "Meta description too short — aim for 100–170 characters" });
  else if (metaDesc.length > 170)          issues.push({ title: "Meta description too long — trim to under 170 characters" });
  if (h1s === 0)                           issues.push({ title: "No H1 heading found on the page" });
  else if (h1s > 1)                        issues.push({ title: `Multiple H1 tags (${h1s}) — use exactly one per page` });
  if (!viewport)                           issues.push({ title: "Missing viewport meta tag — may not be mobile-friendly" });
  if (!canonical)                          issues.push({ title: "No canonical URL set — risk of duplicate content" });
  if (!lang)                               issues.push({ title: "HTML tag is missing a lang attribute" });
  if (!isHttps)                            issues.push({ title: "Site is not served over HTTPS" });
  if (imgsMissingAlt > 0)                  issues.push({ title: `${imgsMissingAlt} image${imgsMissingAlt > 1 ? "s" : ""} missing alt text` });
  if (!hasOg)                              issues.push({ title: "Incomplete Open Graph tags — poor social sharing previews" });
  if (!hasJsonLd)                          issues.push({ title: "No structured data (JSON-LD) — missing rich snippet potential" });

  const metrics: Array<{ label: string; value: string }> = [
    { label: "Response Time",     value: `${responseTime} ms` },
    { label: "Page Size",         value: `${pageSizeKB} KB` },
    { label: "Title Length",      value: title ? `${title.length} chars` : "Missing" },
    { label: "Headings H1/H2/H3", value: `${h1s} / ${h2s} / ${h3s}` },
    { label: "Images Missing Alt",value: imgs.length === 0 ? "No images" : `${imgsMissingAlt} of ${imgs.length}` },
  ];

  return {
    url,
    scores: {
      performance:   Math.min(100, Math.max(5, perf)),
      seo:           Math.min(100, seo),
      accessibility: Math.min(100, acc),
      bestPractices: Math.min(100, bp),
    },
    metrics,
    issues: issues.slice(0, 6),
  };
}

// ── Email HTML ────────────────────────────────────────────────────────────────

function scoreColor(s: number) { return s >= 90 ? "#10B981" : s >= 50 ? "#F59E0B" : "#EF4444"; }
function scoreLabel(s: number) { return s >= 90 ? "Good" : s >= 50 ? "Needs Work" : "Poor"; }

function buildEmail(
  contact: { name: string; email: string; phone: string },
  result:  AuditResult,
): string {
  const { scores: sc } = result;

  const gauge = (label: string, score: number, last = false) =>
    `<td align="center" style="padding:18px 8px;${!last ? "border-right:1px solid #E2E8F0;" : ""}">
      <div style="font-size:32px;font-weight:800;color:${scoreColor(score)};line-height:1;">${score}</div>
      <div style="font-size:10px;font-weight:700;color:${scoreColor(score)};text-transform:uppercase;letter-spacing:.08em;margin-top:2px;">${scoreLabel(score)}</div>
      <div style="font-size:11px;color:#64748B;margin-top:4px;font-weight:500;">${label}</div>
    </td>`;

  const mRow = (label: string, val: string, top = false) =>
    `<tr${top ? "" : ' style="border-top:1px solid #E2E8F0;"'}>
      <td style="padding:9px 16px;width:42%;background:#F8FAFC;border-right:1px solid #E2E8F0;color:#64748B;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;">${label}</td>
      <td style="padding:9px 16px;color:#0F172A;font-size:14px;">${val}</td>
    </tr>`;

  const cRow = (label: string, val: string, top = false) =>
    `<tr${top ? "" : ' style="border-top:1px solid #E2E8F0;"'}>
      <td style="padding:9px 16px;width:35%;background:#F8FAFC;border-right:1px solid #E2E8F0;color:#64748B;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;">${label}</td>
      <td style="padding:9px 16px;color:#0F172A;font-size:14px;">${val}</td>
    </tr>`;

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:40px 0;">
<tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <tr><td style="background:linear-gradient(135deg,#4F46E5,#7C3AED);border-radius:16px 16px 0 0;padding:34px 36px 26px;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td><span style="font-size:21px;font-weight:800;color:#fff;">RAK<span style="color:#C7D2FE;">Technologies</span></span></td>
      <td align="right"><span style="background:rgba(255,255,255,.15);color:#E0E7FF;font-size:11px;font-weight:600;padding:4px 12px;border-radius:99px;">FREE SEO AUDIT</span></td>
    </tr></table>
    <p style="margin:14px 0 0;color:#C7D2FE;font-size:14px;line-height:1.5;">
      A free SEO audit was requested via the RAK Technologies website.
    </p>
  </td></tr>

  <tr><td style="background:#fff;padding:28px 36px 0;">

    <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:.12em;">Lead Details</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;border-collapse:collapse;">
      ${cRow("Name",    contact.name,  true)}
      ${cRow("Email",   `<a href="mailto:${contact.email}" style="color:#4F46E5;text-decoration:none;">${contact.email}</a>`)}
      ${contact.phone   ? cRow("Phone",   contact.phone) : ""}
      ${cRow("Website", `<a href="${result.url}" style="color:#4F46E5;text-decoration:none;">${result.url}</a>`)}
    </table>

    <p style="margin:24px 0 10px;font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:.12em;">Scores</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;border-collapse:collapse;">
      <tr>
        ${gauge("Performance",   sc.performance)}
        ${gauge("SEO",           sc.seo)}
        ${gauge("Accessibility", sc.accessibility)}
        ${gauge("Best Practices", sc.bestPractices, true)}
      </tr>
    </table>

    <p style="margin:24px 0 10px;font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:.12em;">Page Metrics</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;border-collapse:collapse;">
      ${result.metrics.map((m, i) => mRow(m.label, m.value, i === 0)).join("")}
    </table>

    ${result.issues.length > 0 ? `
    <p style="margin:24px 0 10px;font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:.12em;">Issues Found (${result.issues.length})</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;border-collapse:collapse;">
      ${result.issues.map((iss, i) => `
      <tr${i > 0 ? ' style="border-top:1px solid #E2E8F0;"' : ""}>
        <td style="padding:10px 16px;font-size:13px;color:#0F172A;">
          <span style="color:#F59E0B;margin-right:8px;">⚠</span>${iss.title}
        </td>
      </tr>`).join("")}
    </table>` : ""}

    <div style="padding:28px 0 32px;text-align:center;">
      <a href="mailto:${contact.email}?subject=${encodeURIComponent(`Your Free SEO Audit — ${result.url}`)}"
         style="display:inline-block;background:linear-gradient(135deg,#4F46E5,#7C3AED);color:#fff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:10px;text-decoration:none;">
        Follow Up with ${contact.name} →
      </a>
    </div>
  </td></tr>

  <tr><td style="background:#F8FAFC;border-top:1px solid #E2E8F0;border-radius:0 0 16px 16px;padding:18px 36px;text-align:center;color:#94A3B8;font-size:12px;">
    RAK Technologies · Pretoria, South Africa ·
    <a href="https://raktechnologies.co.za" style="color:#6366F1;text-decoration:none;">raktechnologies.co.za</a>
  </td></tr>

</table></td></tr></table>
</body></html>`;
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  const ip = getIp(request);
  const { allowed } = rateLimit(ip);
  if (!allowed) {
    return Response.json({ error: "Too many requests — please wait a few minutes." }, { status: 429 });
  }

  let raw: unknown;
  try { raw = await request.json(); }
  catch { return Response.json({ error: "Invalid JSON" }, { status: 400 }); }

  if (!raw || typeof raw !== "object") return Response.json({ error: "Invalid body" }, { status: 400 });

  const b          = raw as Record<string, unknown>;
  const name       = san(b.name);
  const email      = san(b.email);
  const phone      = san(b.phone);
  const websiteUrl = normaliseUrl(san(b.websiteUrl));

  if (!name || name.length < 2)  return Response.json({ error: "Please enter your full name." },         { status: 422 });
  if (!isEmail(email))           return Response.json({ error: "Please enter a valid email address." },  { status: 422 });
  if (!isValidUrl(websiteUrl))   return Response.json({ error: "Please enter a valid website URL." },    { status: 422 });

  let result: AuditResult;
  try {
    result = await runAudit(websiteUrl);
  } catch (err) {
    console.error("SEO audit error:", err);
    const msg       = err instanceof Error ? err.message : "";
    const isTimeout = /timeout|abort/i.test(msg);
    return Response.json(
      {
        error: isTimeout
          ? "The audit timed out — your website may be slow to respond. Please try again."
          : "Could not reach that URL. Please make sure it is publicly accessible and try again.",
      },
      { status: 422 }
    );
  }

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: emailError } = await resend.emails.send({
      from:    process.env.RESEND_FROM   ?? "RAK Technologies <onboarding@resend.dev>",
      to:     [process.env.CONTACT_EMAIL ?? "info@raktechnologies.co.za"],
      replyTo: email,
      subject: `Free SEO Audit — ${name} — ${websiteUrl}`,
      html:    buildEmail({ name, email, phone }, result),
    });
    if (emailError) {
      console.error("[seo-audit] Resend error:", JSON.stringify(emailError));
    } else {
      console.log("[seo-audit] Email sent to", process.env.CONTACT_EMAIL ?? "info@raktechnologies.co.za");
    }
  } else {
    console.warn("[seo-audit] RESEND_API_KEY not set — email skipped");
  }

  return Response.json({ success: true, result });
}
