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

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l4.5 4.5 9-9" />
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
];

// ── Stats row ─────────────────────────────────────────────────────────────────
const stats = [
  { value: "< 60s",  label: "Live feedback", sub: "from the moment you pause",  color: "#4F46E5" },
  { value: "10+",    label: "Smart features", sub: "built into every session", color: "#7C3AED" },
  { value: "4",      label: "AI checkpoints", sub: "per answer, every time",    color: "#0284C7" },
  { value: "7 days", label: "Free trial",    sub: "full access, no card needed", color: "#059669" },
];

// ── What you get — condensed checklist ────────────────────────────────────────
const checklist = [
  "Mark updates in real time as you write — no submit button",
  "Exact marks: what you got, what you missed, why",
  "Predicted weeks until you hit the pass mark",
  "Unlimited fresh practice questions on any topic, instantly",
  "Command verb intelligence flags what your answer is missing",
  "An AI coach that knows the question, the marks, and your answer",
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
            An AI coach answers every follow-up question, and a dashboard tracks how many weeks
            until you&apos;re ready to pass.
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

      {/* ══ 3. WHY IT'S DIFFERENT ════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* Left — copy + checklist */}
            <div>
              <ScrollReveal>
                <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">Why It&apos;s Different</p>
              </ScrollReveal>
              <AnimatedHeading
                delay={0.1}
                className="font-display text-slate-900 dark:text-slate-100"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
              >
                AI-powered{" "}
                <span className="text-slate-300 dark:text-slate-700 line-through decoration-2">tutoring</span>{" "}
                <span className="gradient-text">exam prep.</span>
              </AnimatedHeading>
              <ScrollReveal delay={0.15}>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mt-5 mb-8">
                  We don&apos;t explain content. We grade your answer and tell you exactly which
                  marks you lost and why. No one ever passed by watching a 2-hour video.
                </p>
              </ScrollReveal>

              <div className="flex flex-col gap-3">
                {checklist.map((item, i) => (
                  <ScrollReveal key={item} delay={0.2 + i * 0.05}>
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-500 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-3 h-3"><CheckIcon /></span>
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{item}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right — single live-marking mock */}
            <ScrollReveal delay={0.15} direction="left">
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 md:p-7 shadow-sm card-ring">
                <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-600 tracking-[0.1em] uppercase border border-emerald-100 dark:border-emerald-900 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live — Updates As You Type
                </span>
                <h3 className="font-display text-slate-900 dark:text-slate-100 font-700 mb-2" style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
                  Your mark appears before you finish writing
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  The moment you pause, four independent AI checks run — breadth, depth, command
                  verb compliance, and calculations.
                </p>

                <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 rounded-xl p-4">
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
          </div>
        </div>
      </section>

      {/* ══ 4. COVERAGE + WHO BUILT THIS ═════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-white dark:bg-[#0B0F1A]">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Coverage */}
            <ScrollReveal>
              <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-2xl p-7 h-full flex flex-col">
                <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-3">Coverage</p>
                <h3 className="font-display text-slate-900 dark:text-slate-100 font-700 mb-2" style={{ fontSize: "1.3rem", letterSpacing: "-0.02em" }}>
                  Built for actuarial examinations
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  More subjects added each semester.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {subjects.map((s) => {
                    const open = s.status === "OPEN";
                    return (
                      <span
                        key={s.code}
                        title={s.name}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-600 border ${
                          open
                            ? "bg-white dark:bg-slate-800 border-indigo-200 dark:border-indigo-800 text-slate-800 dark:text-slate-200"
                            : "bg-white/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500"
                        }`}
                      >
                        {open && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                        {s.code}
                      </span>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Who built this */}
            <ScrollReveal delay={0.1}>
              <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-2xl p-7 h-full flex flex-col">
                <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-3">Who Built This</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  ActSci<AISup /> was built by an actuarial science graduate working as an actuarial
                  analyst, in the later stages of qualifying — someone who lost marks with no
                  explanation and built the feedback loop that was missing.
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  It&apos;s AI-powered, with constant human oversight keeping every piece of feedback
                  grounded in the syllabus.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Actuarial Science Graduate", "Practicing Analyst"].map((tag) => (
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
        </div>
      </section>

      {/* ══ 5. START TODAY ═══════════════════════════════════════════════════ */}
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <LiquidButton href={SIGNUP_URL}>Create Free Account →</LiquidButton>
            </div>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-500 text-sm hover:gap-2.5 transition-all duration-200"
            >
              See every feature at actsci.co.za
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 6. BEYOND ACTSCI AI ══════════════════════════════════════════════ */}
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
