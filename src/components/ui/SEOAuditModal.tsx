"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AuditResult } from "@/app/api/seo-audit/route";

type Step = "form" | "loading" | "results" | "error";

interface SEOFormData {
  name: string;
  email: string;
  phone: string;
  websiteUrl: string;
}

const EMPTY: SEOFormData = { name: "", email: "", phone: "", websiteUrl: "" };
const CIRCUMFERENCE = 2 * Math.PI * 40;

function scoreColor(s: number) {
  return s >= 90 ? "#10B981" : s >= 50 ? "#F59E0B" : "#EF4444";
}

function scoreLabel(s: number) {
  return s >= 90 ? "Good" : s >= 50 ? "Needs Work" : "Poor";
}

function CircleGauge({ score, label, delay = 0 }: { score: number; label: string; delay?: number }) {
  const color = scoreColor(score);
  const offset = CIRCUMFERENCE * (1 - score / 100);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle
            cx="50" cy="50" r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="9"
            className="text-slate-100 dark:text-slate-800"
          />
          <motion.circle
            cx="50" cy="50" r="40"
            fill="none"
            stroke={color}
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
          />
        </svg>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
        >
          <span className="font-display font-800 text-lg leading-none" style={{ color }}>
            {score}
          </span>
        </motion.div>
      </div>
      <div className="text-center">
        <p className="text-slate-600 dark:text-slate-400 text-[11px] font-600 leading-tight">{label}</p>
        <p className="text-[10px] font-700 uppercase tracking-wide mt-0.5" style={{ color }}>{scoreLabel(score)}</p>
      </div>
    </div>
  );
}

export default function SEOAuditModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep]     = useState<Step>("form");
  const [form, setForm]     = useState<SEOFormData>(EMPTY);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError]   = useState<string | null>(null);

  // Reset state after close animation
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStep("form");
        setForm(EMPTY);
        setResult(null);
        setError(null);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const set = (field: keyof SEOFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");
    setError(null);
    try {
      const res  = await fetch("/api/seo-audit", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const json = await res.json() as { success: boolean; result?: AuditResult; error?: string };
      if (!json.success) throw new Error(json.error ?? "Audit failed");
      setResult(json.result!);
      setStep("results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStep("error");
    }
  };

  const domain = (() => {
    try {
      const raw = form.websiteUrl.trim();
      return new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`).hostname;
    } catch { return form.websiteUrl || "your website"; }
  })();

  const inputClass =
    "w-full bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-300 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-50 dark:focus:ring-indigo-950 transition-all duration-200";

  const labelClass = "text-slate-600 dark:text-slate-400 text-xs font-600 tracking-wide block mb-2";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal wrapper — centres the card */}
          <div className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              {/* Sticky header */}
              <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-indigo-500 dark:text-indigo-400 text-[10px] font-700 tracking-[0.18em] uppercase mb-0.5">Free Tool</p>
                  <h2 className="font-display text-slate-900 dark:text-slate-50 font-800 text-lg leading-tight">
                    SEO Audit
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer"
                  aria-label="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <AnimatePresence mode="wait">

                {/* ── FORM ── */}
                {step === "form" && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                  >
                    <div className="px-6 pt-5 pb-3">
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        Get a free Google Lighthouse audit — performance, SEO, accessibility &amp; best practices. Results land in your inbox within 40 seconds.
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 pb-7 pt-2">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={form.name}
                            onChange={set("name")}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={form.email}
                            onChange={set("email")}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>
                          Phone Number{" "}
                          <span className="text-slate-300 dark:text-slate-600 font-400">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+27 12 345 6789"
                          value={form.phone}
                          onChange={set("phone")}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>Website URL *</label>
                        <input
                          type="text"
                          required
                          placeholder="https://yourwebsite.co.za"
                          value={form.websiteUrl}
                          onChange={set("websiteUrl")}
                          className={inputClass}
                        />
                        <p className="text-slate-400 dark:text-slate-600 text-[11px] mt-1.5 leading-relaxed">
                          Must be publicly accessible. Audit runs on mobile using Google Lighthouse.
                        </p>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="mt-1 w-full py-3.5 rounded-xl text-white font-600 text-sm transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                        style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                      >
                        Run Free Audit →
                      </motion.button>

                      <p className="text-slate-400 dark:text-slate-500 text-[11px] text-center leading-relaxed">
                        Takes 30–40 seconds · Results emailed to you · No spam, ever
                      </p>
                    </form>
                  </motion.div>
                )}

                {/* ── LOADING ── */}
                {step === "loading" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                    className="flex flex-col items-center justify-center gap-8 px-6 py-16"
                  >
                    {/* Spinner */}
                    <div className="relative w-20 h-20">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-[3px] border-indigo-100 dark:border-indigo-950 border-t-indigo-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round">
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.35-4.35" />
                        </svg>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-slate-800 dark:text-slate-200 font-600 text-base mb-1">
                        Auditing <span className="text-indigo-500">{domain}</span>
                      </p>
                      <p className="text-slate-400 dark:text-slate-500 text-sm">Running Google Lighthouse…</p>
                    </div>

                    <p className="text-slate-400 dark:text-slate-500 text-xs text-center max-w-[260px] leading-relaxed">
                      Fetching and analysing your page — checking SEO, accessibility, best practices &amp; performance.
                    </p>
                  </motion.div>
                )}

                {/* ── RESULTS ── */}
                {step === "results" && result && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                    className="px-6 pb-8 pt-5"
                  >
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                      Audit complete for{" "}
                      <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                        {domain}
                      </a>
                    </p>

                    {/* Score gauges */}
                    <div className="grid grid-cols-4 gap-2 mb-7">
                      <CircleGauge score={result.scores.performance}   label="Performance"    delay={0} />
                      <CircleGauge score={result.scores.seo}           label="SEO"            delay={0.1} />
                      <CircleGauge score={result.scores.accessibility} label="Accessibility"  delay={0.2} />
                      <CircleGauge score={result.scores.bestPractices} label="Best Practices" delay={0.3} />
                    </div>

                    {/* Page Metrics */}
                    <p className="text-[10px] font-700 text-slate-400 dark:text-slate-500 uppercase tracking-[0.14em] mb-3">
                      Page Metrics
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {result.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl px-3 py-2.5"
                        >
                          <p className="text-slate-400 dark:text-slate-500 text-[10px] font-600 uppercase tracking-wide mb-0.5 leading-tight">
                            {m.label}
                          </p>
                          <p className="text-slate-800 dark:text-slate-200 text-sm font-700 font-display">{m.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Issues */}
                    {result.issues.length > 0 && (
                      <>
                        <p className="text-[10px] font-700 text-slate-400 dark:text-slate-500 uppercase tracking-[0.14em] mb-3">
                          Issues Found ({result.issues.length})
                        </p>
                        <div className="flex flex-col gap-2 mb-6">
                          {result.issues.map((issue, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + i * 0.07 }}
                              className="flex items-start gap-2.5 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-xl px-3.5 py-2.5"
                            >
                              <span className="text-amber-500 shrink-0 mt-px">⚠</span>
                              <p className="text-slate-700 dark:text-slate-300 text-xs font-500 leading-snug">{issue.title}</p>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    )}

                    {/* CTA */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-2xl p-5 text-center">
                      <p className="text-slate-700 dark:text-slate-300 font-600 text-sm mb-1">
                        Want us to fix these issues?
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 leading-relaxed">
                        Our team can improve your scores, optimise your site, and help you rank higher on Google.
                      </p>
                      <a
                        href="/#contact"
                        onClick={onClose}
                        className="inline-flex items-center gap-2 text-white font-600 text-sm px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                        style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                      >
                        Let&apos;s Talk →
                      </a>
                    </div>

                    <p className="text-slate-400 dark:text-slate-500 text-[11px] text-center mt-4">
                      Full report sent to {form.email}
                    </p>
                  </motion.div>
                )}

                {/* ── ERROR ── */}
                {step === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                    className="flex flex-col items-center text-center gap-5 px-6 py-14"
                  >
                    <div className="w-14 h-14 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-800 dark:text-slate-200 font-600 mb-2">Audit Failed</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs leading-relaxed">
                        {error ?? "Could not complete the audit. Make sure your website is publicly accessible and try again."}
                      </p>
                    </div>
                    <button
                      onClick={() => { setStep("form"); setError(null); }}
                      className="text-sm font-600 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      ← Try Again
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
