import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Timeline → days offset ──────────────────────────────────────────────────
const TIMELINE_DAYS: Record<string, number> = {
  "As soon as possible": 7,
  "Within 1 month":      30,
  "1 – 3 months":        60,
  "3 – 6 months":        120,
  "6+ months":           180,
};

function buildICS(title: string, description: string, dueDate: Date): string {
  const pad  = (n: number) => String(n).padStart(2, "0");
  const fmt  = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}` +
    `T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;

  const end  = new Date(dueDate.getTime() + 60 * 60 * 1000); // 1-hour event
  const safe = (s: string) => s.replace(/\n/g, "\\n").replace(/,/g, "\\,");
  const now  = new Date();

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//RAK Technologies//Project Form//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `DTSTART:${fmt(dueDate)}`,
    `DTEND:${fmt(end)}`,
    `DTSTAMP:${fmt(now)}`,
    `SUMMARY:${safe(title)}`,
    `DESCRIPTION:${safe(description)}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

// ── HTML email template ──────────────────────────────────────────────────────
function buildHTML(data: {
  name: string;
  email: string;
  company: string;
  solutionType: string;
  description: string;
  budget: string;
  timeline: string;
}): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;width:38%;background:#F8FAFC;border-right:1px solid #E2E8F0;
                     color:#64748B;font-size:12px;font-weight:600;text-transform:uppercase;
                     letter-spacing:0.08em;vertical-align:top;">${label}</td>
          <td style="padding:10px 16px;color:#0F172A;font-size:14px;vertical-align:top;">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Project Request</title></head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#4F46E5,#7C3AED);border-radius:16px 16px 0 0;padding:36px 36px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="font-size:22px;font-weight:800;color:#FFFFFF;letter-spacing:-0.03em;">
                  RAK<span style="color:#C7D2FE;">Technologies</span>
                </span>
              </td>
              <td align="right">
                <span style="background:rgba(255,255,255,0.15);color:#E0E7FF;font-size:11px;
                             font-weight:600;padding:4px 12px;border-radius:99px;letter-spacing:0.06em;">
                  NEW REQUEST
                </span>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0;color:#C7D2FE;font-size:14px;line-height:1.5;">
            A new project request was submitted via the website contact form.
          </p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#FFFFFF;padding:0;">

          <!-- Client section -->
          <div style="padding:28px 36px 0;">
            <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#94A3B8;
                      text-transform:uppercase;letter-spacing:0.12em;">Client Details</p>
          </div>
          <table width="100%" cellpadding="0" cellspacing="0"
                 style="border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;
                        margin:0 36px;width:calc(100% - 72px);border-collapse:collapse;">
            ${row("Full Name",    data.name)}
            ${row("Email",        `<a href="mailto:${data.email}" style="color:#4F46E5;text-decoration:none;">${data.email}</a>`)}
            ${row("Company",      data.company || "—")}
          </table>

          <!-- Project section -->
          <div style="padding:24px 36px 0;">
            <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#94A3B8;
                      text-transform:uppercase;letter-spacing:0.12em;">Project Details</p>
          </div>
          <table width="100%" cellpadding="0" cellspacing="0"
                 style="border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;
                        margin:0 36px;width:calc(100% - 72px);border-collapse:collapse;">
            ${row("Solution Type", data.solutionType || "—")}
            ${row("Budget Range",  data.budget       || "—")}
            ${row("Timeline",      data.timeline     || "—")}
          </table>

          <!-- Description -->
          <div style="padding:24px 36px;">
            <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#94A3B8;
                      text-transform:uppercase;letter-spacing:0.12em;">Problem / Idea</p>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;
                        padding:16px 18px;color:#0F172A;font-size:14px;line-height:1.7;
                        white-space:pre-wrap;">${data.description}</div>
          </div>

          <!-- CTA -->
          <div style="padding:0 36px 32px;text-align:center;">
            <a href="mailto:${data.email}?subject=Re: Your Project Request — ${encodeURIComponent(data.solutionType || "General")}"
               style="display:inline-block;background:linear-gradient(135deg,#4F46E5,#7C3AED);
                      color:#FFFFFF;font-size:14px;font-weight:600;padding:12px 28px;
                      border-radius:10px;text-decoration:none;letter-spacing:0.01em;">
              Reply to ${data.name} →
            </a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#F8FAFC;border-top:1px solid #E2E8F0;
                       border-radius:0 0 16px 16px;padding:20px 36px;
                       text-align:center;color:#94A3B8;font-size:12px;">
          RAK Technologies · Johannesburg, South Africa ·
          <a href="https://raktechnologies.co.za" style="color:#6366F1;text-decoration:none;">
            raktechnologies.co.za
          </a>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Route handler ────────────────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const body = await request.json() as {
      name: string;
      email: string;
      company: string;
      solutionType: string;
      description: string;
      budget: string;
      timeline: string;
    };

    const { name, email, solutionType, timeline } = body;

    const attachments: { filename: string; content: Buffer }[] = [];

    const daysOffset = TIMELINE_DAYS[timeline];
    if (daysOffset) {
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + daysOffset);

      const icsTitle = `RAK Project: ${solutionType || "New Project"} — ${name}`;
      const icsDesc  =
        `Client: ${name} (${email})\n` +
        `Budget: ${body.budget || "Not specified"}\n` +
        `Timeline: ${timeline}\n\n` +
        `Description:\n${body.description}`;

      const icsContent = buildICS(icsTitle, icsDesc, dueDate);
      attachments.push({
        filename: "project-due-date.ics",
        content:  Buffer.from(icsContent, "utf-8"),
      });
    }

    const from    = process.env.RESEND_FROM    ?? "RAK Technologies <onboarding@resend.dev>";
    const to      = process.env.CONTACT_EMAIL  ?? "info@raktechnologies.co.za";
    const subject = `New Project Request — ${solutionType || "General"} | ${name}`;

    const { error } = await resend.emails.send({
      from,
      to:       [to],
      replyTo:  email,
      subject,
      html:     buildHTML(body),
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
