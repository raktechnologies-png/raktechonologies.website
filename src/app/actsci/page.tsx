"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PebbleGrid from "@/components/ui/PebbleGrid";
import LiquidButton from "@/components/ui/LiquidButton";
import { EASE } from "@/lib/motion";

const SIGNUP_URL = "https://actsci.co.za";

// ── Inline brand mark ─────────────────────────────────────────────────────────
function AISup() {
  return (
    <sup
      style={{ fontSize: "0.42em", verticalAlign: "super", lineHeight: 0, letterSpacing: 0 }}
      className="gradient-text font-display font-800 ml-[0.05em]"
    >
      AI
    </sup>
  );
}

// ── Small icon primitives ─────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l4.5 4.5 9-9" />
  </svg>
);
const CrossIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

// ── Hero ticker pills ─────────────────────────────────────────────────────────
const tickerPills = [
  "Live AI Marking",
  "South Africa",
  "Actuarial Students",
  "A311 · F102 · F103",
  "No Submit Button",
  "Real-Time Feedback",
  "7 Days Free",
  "Readiness Prediction",
  "Command Verb Intelligence",
  "Exam Coach AI",
];

// ── Stats row ─────────────────────────────────────────────────────────────────
const stats = [
  { value: "< 60s",  label: "Live feedback",     sub: "from the moment you pause",          color: "#4F46E5" },
  { value: "10+",    label: "Smart features",    sub: "built into every session",           color: "#7C3AED" },
  { value: "4",      label: "AI checkpoints",    sub: "per answer, every time",              color: "#0284C7" },
  { value: "7 days", label: "Free trial",        sub: "full access, no card needed",         color: "#059669" },
];

// ── Set the record straight — comparison rows ─────────────────────────────────
const comparisons = [
  { bad: "Submit, then wait to see your mark",              good: "Mark updates in real time as you write" },
  { bad: "Generic feedback copied from a template",         good: "Feedback on your exact answer — nothing generic" },
  { bad: "“Great effort!” on a technically wrong answer", good: "Exact marks: what you got, what you missed, why" },
  { bad: "No signal on whether you'll pass",                good: "Predicted weeks until you hit the pass mark" },
  { bad: "Repeat the same past papers until memorised",     good: "Unlimited fresh questions on any topic, instantly" },
  { bad: "Guessing what the examiner actually wants",       good: "Command verb intelligence — flagged when your answer misses the mark" },
];

// ── What you get — feature grid ───────────────────────────────────────────────
const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Readiness Prediction",
    desc: "See how many weeks until you hit the pass mark — based on your real improvement rate, not guesswork.",
    accent: "#4F46E5", bg: "#EEF2FF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20l4-1 10-10a2.1 2.1 0 00-3-3L5 16l-1 4z" /><path d="M13 7l3 3" />
      </svg>
    ),
    title: "Command Verb Analysis",
    desc: "Find out which verbs cost you most — Discuss, Outline, Calculate — and know exactly where to focus.",
    accent: "#7C3AED", bg: "#F5F3FF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3l4 4-4 4" /><path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 21l-4-4 4-4" /><path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
    title: "AI Question Generator",
    desc: "Never run out of practice material. Generate new exam-style questions for any topic, instantly.",
    accent: "#0284C7", bg: "#E0F2FE",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: "Study Activity Tracker",
    desc: "A visual calendar of every day you studied. See your consistency grow and build the exam-passing habit.",
    accent: "#059669", bg: "#ECFDF5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" /><circle cx="9" cy="12" r="2.5" />
        <path d="M15 10h4M15 14h4" />
      </svg>
    ),
    title: "Performance Card",
    desc: "Generate a shareable results card and send it to study groups, mentors, or paste it in your LinkedIn.",
    accent: "#D97706", bg: "#FFFBEB",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <path d="M9 13a2 2 0 104 0 2 2 0 00-4 0z" />
      </svg>
    ),
    title: "Employer Portal",
    desc: "Employers verify your actuarial exam preparation from a single link — no spreadsheets, no back-and-forth.",
    accent: "#0891B2", bg: "#ECFEFF",
  },
];

// ── Coverage — subjects ───────────────────────────────────────────────────────
const subjects = [
  { code: "A311", name: "Actuarial Risk Management", status: "OPEN" },
  { code: "F102", name: "Life Insurance",             status: "SOON" },
  { code: "F103", name: "General Insurance",          status: "SOON" },
  { code: "F105", name: "Finance & Investment",       status: "SOON" },
  { code: "F106", name: "Enterprise Risk",            status: "SOON" },
  { code: "F108", name: "Health & Benefits",          status: "SOON" },
];

// ── Final CTA — feature chips ─────────────────────────────────────────────────
const closingFeatures = [
  "Live AI feedback",
  "7-day free trial",
  "AI Exam Coach",
  "Readiness prediction",
  "Employer portal",
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ActSciPage() {
  return (
    <div className="pt-[68px] bg-white dark:bg-[#0B0F1A]">

      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0B0F1A]">
        <PebbleGrid />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(79,70,229,0.07) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 w-full pt-20 md:pt-28 pb-14 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-600 tracking-[0.14em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shrink-0" />
              South Africa · Actuarial Exams
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
            className="font-display text-slate-900 dark:text-slate-100 mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 900, lineHeight: 1.03, letterSpacing: "-0.04em" }}
          >
            Your actuarial answers,{" "}
            <span className="gradient-text">marked live.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: EASE }}
            className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mb-9"
            style={{ letterSpacing: "-0.01em" }}
          >
            Write your answer — your mark appears in real time. No submit button. No waiting.
            You get feedback on exactly what you wrote, an AI coach that answers every follow-up
            question, and a dashboard that tracks how many weeks until you&apos;re ready to pass.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <LiquidButton href={SIGNUP_URL} className="w-full sm:w-auto justify-center">
              Begin Free Trial →
            </LiquidButton>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 font-500 text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Sign In
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="text-slate-400 dark:text-slate-500 text-xs mt-5"
          >
            Free for 7 days · No card required · EFT billing after trial
          </motion.p>
        </div>

        {/* Ticker marquee */}
        <div className="relative z-10 border-y border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 py-4 overflow-hidden">
          <div className="flex w-max marquee-track">
            {[...tickerPills, ...tickerPills].map((pill, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-5 text-slate-400 dark:text-slate-500 text-xs font-600 tracking-[0.1em] uppercase shrink-0"
              >
                {pill}
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 2. STATS ═════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 relative bg-white dark:bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <AnimatedCard
                key={s.label}
                delay={i * 0.08}
                hoverY={-4}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm card-ring flex flex-col gap-1.5"
              >
                <p className="font-display font-800" style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.03em", color: s.color }}>
                  {s.value}
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-sm font-600">{s.label}</p>
                <p className="text-slate-400 dark:text-slate-500 text-xs leading-snug">{s.sub}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. SET THE RECORD STRAIGHT ═══════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <ScrollReveal>
              <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">Set The Record Straight</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900 dark:text-slate-100 mx-auto"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              AI-powered{" "}
              <span className="text-slate-300 dark:text-slate-700 line-through decoration-2">tutoring</span>{" "}
              <span className="gradient-text">exam prep.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-2xl mx-auto mt-5">
                We don&apos;t explain content. We grade your answer, tell you exactly which marks you
                lost and why, then predict how many weeks until you&apos;re exam-ready. No one ever
                passed by watching a 2-hour video. Just saying.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-3">
            <p className="text-slate-400 dark:text-slate-500 text-xs font-600 tracking-[0.16em] uppercase pl-1">Elsewhere</p>
            <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.16em] uppercase pl-1 hidden sm:block">With ActSci AI</p>
          </div>

          <div className="flex flex-col gap-3">
            {comparisons.map((row, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4">
                    <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-3 h-3"><CrossIcon /></span>
                    </span>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{row.bad}</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900 rounded-xl p-4 shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-500 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-3 h-3"><CheckIcon /></span>
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed font-500">{row.good}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <p className="text-slate-400 dark:text-slate-500 text-sm text-center mt-8">
              No flashcards. No videos. No &ldquo;good job&rdquo; for getting it wrong.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 4. WHAT YOU GET ══════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-white dark:bg-[#0B0F1A]">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <ScrollReveal>
              <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">What You Get</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900 dark:text-slate-100"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              Every tool you need.{" "}
              <span className="gradient-text">Nothing you don&apos;t.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-2xl mt-4">
                Features built specifically for actuarial exams — not adapted from generic study apps.
              </p>
            </ScrollReveal>
          </div>

          {/* Two large showcase panels */}
          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            {/* Live marking mock */}
            <ScrollReveal>
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 md:p-7 shadow-sm card-ring h-full flex flex-col">
                <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-600 tracking-[0.1em] uppercase border border-emerald-100 dark:border-emerald-900 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live — Updates As You Type
                </span>
                <h3 className="font-display text-slate-900 dark:text-slate-100 font-700 mb-2" style={{ fontSize: "1.35rem", letterSpacing: "-0.02em" }}>
                  Your mark appears before you finish writing
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  No submit button. The moment you pause, four independent AI checks run —
                  marking breadth, depth, command verb compliance, and calculations. Your mark
                  updates in real time.
                </p>

                <div className="mt-auto bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 rounded-xl p-4">
                  <p className="text-slate-400 dark:text-slate-500 text-[10px] font-600 tracking-[0.14em] uppercase mb-2">Your Answer</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    &ldquo;The risk transfer mechanism works by shifting the financial impact of...&rdquo;
                  </p>
                  <div className="flex items-end justify-between border-t border-slate-200 dark:border-slate-700 pt-3">
                    <span className="text-slate-400 dark:text-slate-500 text-xs">Live score</span>
                    <span className="font-display gradient-text font-800" style={{ fontSize: "1.6rem", letterSpacing: "-0.03em" }}>
                      7.5<span className="text-slate-300 dark:text-slate-600 text-base font-500"> / 10</span>
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* AI coach mock */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 md:p-7 shadow-sm card-ring h-full flex flex-col">
                <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-[10px] font-600 tracking-[0.1em] uppercase border border-indigo-100 dark:border-indigo-900 mb-4">
                  AI Exam Coach
                </span>
                <h3 className="font-display text-slate-900 dark:text-slate-100 font-700 mb-2" style={{ fontSize: "1.35rem", letterSpacing: "-0.02em" }}>
                  A coach that knows exactly what you wrote
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Ask it what you missed. It knows the question, the marks, and your answer — so
                  every response is specific.
                </p>

                <div className="mt-auto flex flex-col gap-3">
                  <div className="self-end max-w-[85%] bg-indigo-600 text-white text-sm rounded-2xl rounded-br-sm px-4 py-3 leading-relaxed">
                    I got 5/8 — what am I missing?
                  </div>
                  <div className="self-start max-w-[92%] bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-2xl rounded-bl-sm px-4 py-3 leading-relaxed">
                    Link the three lines of defence to board accountability and reference the SA
                    regulatory angle — those 3 marks come from applying it locally.
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Smaller feature grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {features.map((f, i) => (
              <AnimatedCard
                key={f.title}
                delay={i * 0.06}
                hoverY={-5}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-4 shadow-sm card-ring"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-110"
                  style={{ color: f.accent, background: f.bg, borderColor: `${f.accent}20` }}
                >
                  <div className="w-5 h-5">{f.icon}</div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-slate-900 dark:text-slate-100 font-700 leading-snug" style={{ fontSize: "0.95rem", letterSpacing: "-0.025em" }}>
                    {f.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
                <div className="mt-auto w-6 h-0.5 group-hover:w-10 transition-all duration-400" style={{ background: f.accent }} />
              </AnimatedCard>
            ))}
          </div>

          {/* Trial CTA banner */}
          <ScrollReveal>
            <div className="rounded-2xl border border-indigo-100 dark:border-indigo-900 bg-indigo-50/60 dark:bg-indigo-950/40 p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
              <div>
                <p className="font-display text-slate-900 dark:text-slate-100 font-700" style={{ fontSize: "1.15rem", letterSpacing: "-0.02em" }}>
                  Try everything free for 7 days
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Full access to all features. No card required. Cancel any time.
                </p>
              </div>
              <LiquidButton href={SIGNUP_URL} className="shrink-0 w-full sm:w-auto justify-center">
                Start Free →
              </LiquidButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 5. COVERAGE ══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <ScrollReveal>
              <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">Coverage</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900 dark:text-slate-100"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              Built for actuarial{" "}
              <span className="gradient-text">examinations</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-2xl mt-4">
                More subjects added each semester.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((s, i) => {
              const open = s.status === "OPEN";
              return (
                <AnimatedCard
                  key={s.code}
                  delay={i * 0.06}
                  hoverY={open ? -5 : 0}
                  className={`rounded-2xl p-6 flex flex-col gap-3 border ${
                    open
                      ? "bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-800 shadow-sm card-ring card-shimmer"
                      : "bg-white/60 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <p className="font-display font-800 text-slate-900 dark:text-slate-100" style={{ fontSize: "1.5rem", letterSpacing: "-0.03em" }}>
                      {s.code}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-600 tracking-[0.1em] uppercase border ${
                        open
                          ? "bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900"
                          : "bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-100 dark:border-slate-700"
                      }`}
                    >
                      {open && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                      {s.status}
                    </span>
                  </div>
                  <p className={`text-sm ${open ? "text-slate-600 dark:text-slate-300" : "text-slate-400 dark:text-slate-500"}`}>
                    {s.name}
                  </p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 6. WHO BUILT THIS ════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-white dark:bg-[#0B0F1A]">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-6 text-center">Who Built This</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-2xl p-8 md:p-10">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-indigo-200 dark:text-indigo-900 mb-5">
                <path d="M0 24V13.6C0 5.4 4.6 0.6 12 0L13 3.4C8.4 4.6 6.2 7.4 6 11.2H12V24H0ZM18 24V13.6C18 5.4 22.6 0.6 30 0L31 3.4C26.4 4.6 24.2 7.4 24 11.2H30V24H18Z" fill="currentColor" />
              </svg>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-4">
                ActSci was built by an actuarial science graduate, currently working as an actuarial
                analyst — someone who has walked the exact same path and is in the later stages of
                qualifying.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-4">
                The problem was never the content. It was writing an answer with no idea whether it
                was good enough, losing marks for reasons that were never explained, and repeating
                the same mistakes because there was no real feedback. This platform exists to fix
                that — instant, structured, examiner-style marking for every answer you write, built
                by someone who needed exactly this and couldn&apos;t find it.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                And while ActSci<AISup /> is AI-powered, there is constant human oversight behind the
                scenes — ensuring every piece of feedback stays grounded in the syllabus, nothing
                more, nothing less.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Actuarial Science Graduate", "Practicing Actuarial Analyst", "In The Later Stages Of Qualifying"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs font-600 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 7. START TODAY ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-5">Start Today</p>
            <h2
              className="font-display text-slate-900 dark:text-slate-100 mb-5 mx-auto"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08, maxWidth: "680px" }}
            >
              Ready to{" "}
              <span className="gradient-text">pass?</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-lg mx-auto mb-10">
              7 days free. Full access. No card. Cancel before the trial ends and you pay nothing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              <LiquidButton href={SIGNUP_URL}>Create Free Account →</LiquidButton>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {closingFeatures.map((f) => (
                <span key={f} className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                  <span className="w-4 h-4 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-500 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <span className="w-2.5 h-2.5"><CheckIcon /></span>
                  </span>
                  {f}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 8. BEYOND ACTSCI AI ══════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-white dark:bg-[#0B0F1A]">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">Beyond ActSci AI</p>
          </ScrollReveal>
          <AnimatedHeading
            delay={0.1}
            className="font-display text-slate-900 dark:text-slate-100 mx-auto"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1, maxWidth: "640px" }}
          >
            Need something{" "}
            <span className="gradient-text">custom?</span>
          </AnimatedHeading>
          <ScrollReveal delay={0.15}>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-lg mx-auto mt-5 mb-8">
              ActSci<AISup /> was designed and built by RAK Technologies. We build custom platforms,
              AI systems, and software for businesses across South Africa too.{" "}
              <span className="text-slate-900 dark:text-slate-100 font-600">If it&apos;s tech, trust us — we can build it.</span>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <LiquidButton href="/solutions">Explore Our Services →</LiquidButton>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
