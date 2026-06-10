"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutionTypes = [
  "RAKlytics™ System",
  "Web Development",
  "Custom Software System",
  "Data & Analytics",
  "Automation & AI",
  "IT Consulting / Advisory",
  "System Modernisation / Migration",
  "Mobile Application",
  "API Development & Integration",
  "Other / Not Sure Yet",
];

const budgetRanges = [
  "Under R20,000",
  "R20,000 – R50,000",
  "R50,000 – R150,000",
  "R150,000 – R500,000",
  "R500,000+",
  "Prefer not to say",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Flexible / Not sure",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  solutionType: string;
  description: string;
  budget: string;
  timeline: string;
}

const empty: FormData = {
  name: "", email: "", company: "",
  solutionType: "", description: "", budget: "", timeline: "",
};

export default function ProjectForm() {
  const [form, setForm]           = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const [calAdded, setCalAdded]   = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const json = await res.json() as { success: boolean; error?: string };

      if (!json.success) throw new Error(json.error ?? "Unknown error");
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or reach us on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-300 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-50 dark:focus:ring-indigo-950 transition-all duration-200";

  const labelClass = "text-slate-600 dark:text-slate-400 text-xs font-600 tracking-wide block mb-2";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center gap-5 py-16 px-8"
        >
          {/* Checkmark */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 14 }}
            className="w-16 h-16 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l4.5 4.5 9-9" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          <div className="flex flex-col gap-2">
            <h3 className="font-display text-slate-900 dark:text-slate-100 font-700 text-xl">Request Received!</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs leading-relaxed">
              Your request has been sent directly to our team. We&apos;ll respond with a tailored technical
              approach within <span className="text-slate-700 dark:text-slate-300 font-600">24 hours</span>.
            </p>
          </div>

          {/* Calendar nudge — only show when a specific timeline was chosen */}
          {form.timeline && form.timeline !== "Flexible / Not sure" && !calAdded && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-indigo-100 bg-indigo-50 max-w-xs w-full"
            >
              <p className="text-indigo-700 text-xs font-600">A calendar invite was emailed to us.</p>
              <p className="text-indigo-500 text-xs leading-relaxed">
                Want to add the project deadline to your own calendar too?
              </p>
              <button
                onClick={() => {
                  const days: Record<string, number> = {
                    "As soon as possible": 7,
                    "Within 1 month": 30,
                    "1 – 3 months": 60,
                    "3 – 6 months": 120,
                    "6+ months": 180,
                  };
                  const offset = days[form.timeline] ?? 30;
                  const due    = new Date();
                  due.setDate(due.getDate() + offset);
                  const fmt = (d: Date) =>
                    `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}`;
                  const title = encodeURIComponent(`RAK Project: ${form.solutionType || "New Project"}`);
                  window.open(
                    `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(due)}/${fmt(due)}&details=${encodeURIComponent(`Project with RAK Technologies\nTimeline: ${form.timeline}\nBudget: ${form.budget}`)}`,
                    "_blank"
                  );
                  setCalAdded(true);
                }}
                className="flex items-center gap-1.5 text-xs font-600 text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Add to Google Calendar →
              </button>
            </motion.div>
          )}

          {calAdded && (
            <p className="text-indigo-500 text-xs">Event opened in Google Calendar ✓</p>
          )}

          <a
            href="https://wa.link/d8eib5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-500 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#25d366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Or chat on WhatsApp
          </a>

          <button
            onClick={() => { setForm(empty); setSubmitted(false); setCalAdded(false); }}
            className="text-slate-300 text-xs hover:text-slate-500 transition-colors cursor-pointer"
          >
            Submit another request
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-8"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Full Name *</label>
              <input type="text" required placeholder="John Doe" value={form.name} onChange={set("name")} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Email Address *</label>
              <input type="email" required placeholder="john@company.com" value={form.email} onChange={set("email")} className={inputClass} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Company <span className="text-slate-300 font-400">(optional)</span></label>
              <input type="text" placeholder="Acme Corp" value={form.company} onChange={set("company")} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Type of Solution Needed *</label>
              <select required value={form.solutionType} onChange={set("solutionType")} className={`${inputClass} appearance-none cursor-pointer`}>
                <option value="">Select a solution type…</option>
                {solutionTypes.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Describe Your Problem or Idea *</label>
            <textarea
              required rows={5}
              placeholder="Tell us about the challenge you're facing or the idea you want to build. The more detail, the better our initial response will be…"
              value={form.description} onChange={set("description")}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>
                Budget Range <span className="text-slate-300 font-400">(optional, confidential)</span>
              </label>
              <select value={form.budget} onChange={set("budget")} className={`${inputClass} appearance-none cursor-pointer`}>
                <option value="">Select a range…</option>
                {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Timeline <span className="text-slate-300 font-400">(optional)</span></label>
              <select value={form.timeline} onChange={set("timeline")} className={`${inputClass} appearance-none cursor-pointer`}>
                <option value="">Select a timeline…</option>
                {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm text-center bg-red-50 border border-red-100 rounded-xl px-4 py-3"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={!loading ? { scale: 1.015 } : {}}
            whileTap={!loading ? { scale: 0.985 } : {}}
            className="mt-2 w-full py-4 rounded-xl text-white font-600 text-base transition-all duration-200 disabled:opacity-60 cursor-pointer shadow-md hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Sending…
              </span>
            ) : (
              "Submit Project Request →"
            )}
          </motion.button>

          <p className="text-slate-400 text-xs text-center leading-relaxed">
            Your request is sent directly to our team — no middleman.{" "}
            Budget information is confidential and never shared.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
