"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PebbleGrid from "@/components/ui/PebbleGrid";
import LiquidButton from "@/components/ui/LiquidButton";
import { EASE } from "@/lib/motion";

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

// ── Animated dashboard mockup ─────────────────────────────────────────────────
function DashboardMockup() {
  const topics = [
    { label: "ALM",           pct: 85, color: "#4F46E5" },
    { label: "CAPM",          pct: 65, color: "#7C3AED" },
    { label: "Mortality",     pct: 45, color: "#0284C7" },
    { label: "Pension Funds", pct: 35, color: "#059669" },
  ];

  return (
    <div className="relative" style={{ width: "100%", maxWidth: 440, height: 490 }}>
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none rounded-3xl"
        style={{
          inset: "-28px",
          background: "radial-gradient(ellipse at 50% 50%, rgba(79,70,229,0.13) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      {/* Top card: AI-marked score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5, ease: EASE }}
        className="absolute inset-x-0 top-0 bg-white rounded-2xl border border-slate-100 shadow-xl p-5 z-10"
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-slate-400 text-[11px] font-600 tracking-[0.14em] uppercase">
            AI-Marked Exam Score
          </p>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-600 border border-emerald-100 flex items-center gap-1">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            +5.2%
          </span>
        </div>
        <div className="flex items-end gap-3 mb-4">
          <span
            className="font-display gradient-text leading-none"
            style={{ fontSize: "2.8rem", fontWeight: 900, letterSpacing: "-0.04em" }}
          >
            78<span style={{ fontSize: "0.55em" }}>%</span>
          </span>
          <div className="flex flex-col gap-0.5 pb-1 text-slate-400" style={{ fontSize: "11px" }}>
            <span>benchmarked to</span>
            <span>the official memo</span>
          </div>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "78%" }}
            transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #4F46E5, #7C3AED)" }}
          />
        </div>
      </motion.div>

      {/* Small metric cards */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.75, ease: EASE }}
        className="absolute bg-white rounded-xl border border-slate-100 shadow-lg p-4 z-10"
        style={{ top: "42%", left: 0, width: "47%" }}
      >
        <p className="text-slate-400 font-500 mb-2" style={{ fontSize: "11px" }}>Exam Questions</p>
        <p
          className="font-display gradient-text"
          style={{ fontSize: "1.75rem", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em" }}
        >
          186
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.85, ease: EASE }}
        className="absolute bg-white rounded-xl border border-slate-100 shadow-lg p-4 z-10"
        style={{ top: "42%", right: 0, width: "47%" }}
      >
        <p className="text-slate-400 font-500 mb-2" style={{ fontSize: "11px" }}>Notes Indexed</p>
        <p
          className="font-display"
          style={{ fontSize: "1.75rem", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em", color: "#7C3AED" }}
        >
          500+
        </p>
      </motion.div>

      {/* Bottom: topic mastery chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
        className="absolute inset-x-0 bottom-0 bg-white rounded-2xl border border-slate-100 shadow-xl p-5 z-10"
      >
        <p className="text-slate-400 font-600 tracking-[0.14em] uppercase mb-3" style={{ fontSize: "11px" }}>
          Topic Mastery
        </p>
        <div className="flex flex-col gap-2.5">
          {topics.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span className="text-slate-500 font-500 w-20 shrink-0" style={{ fontSize: "11px" }}>{item.label}</span>
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ duration: 0.9, delay: 1.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{ background: item.color }}
                />
              </div>
              <span className="text-slate-400 font-500 w-7 text-right" style={{ fontSize: "11px" }}>{item.pct}%</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const candidates = [
  { icon: "🎓", title: "First-Time Candidates",             desc: "Build exam technique from day one with AI feedback on every practice answer, before the real exam.", accent: "#4F46E5", bg: "#EEF2FF", border: "#C7D2FE" },
  { icon: "🔁", title: "Repeat Sitters",                     desc: "Pinpoint exactly which topics cost you marks last time and drill them until they're mastered.", accent: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  { icon: "💼", title: "Working Actuarial Analysts",         desc: "Study around a full-time job with an always-available AI coach and unlimited generated practice.", accent: "#0284C7", bg: "#E0F2FE", border: "#BAE6FD" },
  { icon: "👥", title: "Study Groups & Peer Tutors",         desc: "Share a growing, exam-standard question bank instead of relying on a handful of past papers.", accent: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  { icon: "🏫", title: "Universities & Actuarial Societies", desc: "Group licensing to prepare entire cohorts of candidates for professional exams.", accent: "#9333EA", bg: "#FAF5FF", border: "#E9D5FF" },
  { icon: "🧮", title: "Career-Changers",                    desc: "Learn the exact marking convention examiners use, without the cost of years of in-person tuition.", accent: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC" },
  { icon: "⚡", title: "Any Actuarial Exam Candidate",       desc: "The platform adapts to whichever subject and exam body you're preparing for, grounded in your own notes.", accent: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
];

const problems = [
  "Expensive in-person tuition is the only reliable path to exam-standard feedback",
  "Self-study with past-paper PDFs comes with zero feedback on written answers",
  "Actuarial exam pass rates remain notoriously low across South Africa",
  "Candidates rarely get to practise under real exam conditions before the exam that counts",
  "Generic AI tools give plausible-sounding answers that don't match how examiners actually mark",
];

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    title: "AI Exam Engine",
    desc: "Answer professional-standard questions under timed conditions, with every command verb — Define, Describe, Explain, Discuss, Assess.",
    accent: "#4F46E5", bg: "#EEF2FF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Official-Standard Memoranda",
    desc: "186 questions, each with a full examiner-standard memo in exact • [statement] [½] format.",
    accent: "#7C3AED", bg: "#F5F3FF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "AI Feedback & Marking",
    desc: "Streamed feedback benchmarked against the official memorandum, with specific gap analysis on every submission.",
    accent: "#0284C7", bg: "#E0F2FE",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "AI Question Generator",
    desc: "Generate original exam-standard questions for any topic, constrained strictly to your uploaded course notes.",
    accent: "#059669", bg: "#ECFDF5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
      </svg>
    ),
    title: "RAG-Powered Study Intelligence",
    desc: "500+ chunks of course notes embedded in Supabase pgvector — every AI interaction grounded in your syllabus.",
    accent: "#9333EA", bg: "#FAF5FF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M18 17V9M13 17V5M8 17v-3" />
      </svg>
    ),
    title: "Topic Mastery Tracking",
    desc: "Topic-by-topic mastery scores and personalised study recommendations based on your weakest areas.",
    accent: "#D97706", bg: "#FFFBEB",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
    title: "AI Study Coach",
    desc: "An always-available tutor for conceptual questions, constrained to your own course material — precise, on-syllabus answers.",
    accent: "#0891B2", bg: "#ECFEFF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "Session History & Progression",
    desc: "Full session history and mark progression tracked over time, so improvement is visible, not just felt.",
    accent: "#DC2626", bg: "#FEF2F2",
  },
];

const feedbackFeatures = [
  { title: "Streamed Examiner-Style Feedback", desc: "AI feedback that mirrors how a human examiner would critique your response, delivered in real time.", accent: "#4F46E5" },
  { title: "Mark Benchmarking",                desc: "Every answer marked out of the available marks, benchmarked against the official memorandum.", accent: "#7C3AED" },
  { title: "Gap Analysis",                     desc: "Specific breakdowns of which points were missed, which were vague, and what earns credit in the real exam.", accent: "#059669" },
  { title: "Command-Verb Aware Marking",       desc: "Define, Describe, Explain, Discuss, Assess — every verb enforces the exact convention examiners use.", accent: "#0284C7" },
  { title: "Memo-Grounded Accuracy",           desc: "Every memorandum is grounded in real South African actuarial practice — SAM, Prudential Authority, FSCA, JSE, Regulation 28.", accent: "#9333EA" },
  { title: "Half-Mark Precision",              desc: "Every half mark is earned with a precise, examinable statement — just like the real exam.", accent: "#D97706" },
];

const studyFeatures = [
  { icon: "📊", title: "Topic Mastery Scores",          desc: "See exactly which topics you've mastered and which need more work, updated after every session.", accent: "#4F46E5", bg: "#EEF2FF", border: "#C7D2FE" },
  { icon: "🎯", title: "Personalised Recommendations",  desc: "Study suggestions generated from your weakest areas — no guessing what to revise next.", accent: "#9333EA", bg: "#FAF5FF", border: "#E9D5FF" },
  { icon: "🧬", title: "AI Question Generator",         desc: "Generate original exam-standard questions on any topic, constrained strictly to your own course notes.", accent: "#0284C7", bg: "#E0F2FE", border: "#BAE6FD" },
  { icon: "🧑‍🏫", title: "AI Study Coach",               desc: "An always-available tutor that answers conceptual questions using only your uploaded course material.", accent: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  { icon: "🔍", title: "RAG-Powered Search",            desc: "500+ chunks of course notes embedded and searchable — every answer grounded in your syllabus.", accent: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
  { icon: "📈", title: "Progress & Session History",    desc: "Track mark progression and session history over time, so improvement is visible, not just felt.", accent: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC" },
];

const customTech = [
  "Custom Portals & Internal Systems",
  "Automation & Workflow Solutions",
  "Analytics Platforms & Dashboards",
  "Web Applications & SaaS Products",
  "AI-Enhanced Business Systems",
  "API Development & Integrations",
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ActSciPage() {
  return (
    <div className="pt-[68px] bg-white dark:bg-[#0B0F1A]">

      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0B0F1A]" style={{ minHeight: "88vh" }}>
        <PebbleGrid />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(79,70,229,0.07) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-20 md:py-28 flex items-center" style={{ minHeight: "88vh" }}>
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">

            {/* Left — copy */}
            <div className="flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-600 tracking-wide shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shrink-0" />
                  Flagship Platform · RAK Technologies
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
                className="font-display text-slate-900 dark:text-slate-100 mb-6"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.04em" }}
              >
                Practise Like an
                <br className="hidden sm:block" />
                Examiner{" "}
                <span className="gradient-text">Marks.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38, ease: EASE }}
                className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-lg mb-8"
                style={{ letterSpacing: "-0.01em" }}
              >
                <span className="font-display font-800 text-slate-900 dark:text-slate-100">
                  ActSci<AISup />
                </span>{" "}
                is South Africa&apos;s first AI-native actuarial exam prep platform — combining
                official-standard exam questions, AI-powered marking, and personalised study
                intelligence in a single product.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
              >
                <LiquidButton href="https://actsci.co.za" className="w-full sm:w-auto justify-center">
                  Start Free 7-Day Trial →
                </LiquidButton>
                <a
                  href="#capabilities"
                  className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-500 px-7 py-4 rounded-xl text-base hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 w-full sm:w-auto"
                >
                  Explore Capabilities
                </a>
              </motion.div>
            </div>

            {/* Right — dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="hidden lg:flex justify-end items-center"
            >
              <DashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 2. WHO IT'S BUILT FOR ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <ScrollReveal>
              <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">Who It&apos;s Built For</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900 dark:text-slate-100"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              Designed for candidates{" "}
              <span className="gradient-text">who refuse to guess.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-2xl mt-4">
                The platform adapts to whichever subject and professional exam body you&apos;re preparing
                for — grounded in your own uploaded course notes.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {candidates.map((c, i) => (
              <AnimatedCard
                key={c.title}
                delay={i * 0.07}
                hoverY={-5}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-4 shadow-sm card-ring card-shimmer"
              >
                <span
                  className="text-2xl w-11 h-11 rounded-xl flex items-center justify-center border shrink-0"
                  style={{ background: c.bg, borderColor: c.border }}
                >
                  {c.icon}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-slate-900 dark:text-slate-100 font-700 leading-snug" style={{ fontSize: "0.95rem", letterSpacing: "-0.025em" }}>
                    {c.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
                <div className="mt-auto w-6 h-0.5 group-hover:w-10 transition-all duration-400" style={{ background: c.accent }} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. THE CORE PROBLEM ══════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-white dark:bg-[#0B0F1A]">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left — headline */}
            <div>
              <ScrollReveal>
                <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">The Problem</p>
              </ScrollReveal>
              <AnimatedHeading
                delay={0.1}
                className="font-display text-slate-900 dark:text-slate-100"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
              >
                Self-study is flying{" "}
                <span className="gradient-text">blind.</span>
              </AnimatedHeading>
              <ScrollReveal delay={0.15}>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mt-5 max-w-lg">
                  Actuarial candidates in South Africa historically had two options: expensive
                  in-person tuition, or self-study with past-paper PDFs and no feedback at all.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mt-3 max-w-lg">
                  Candidates don&apos;t struggle because they lack knowledge — they struggle because
                  they can&apos;t practise under exam conditions and get meaningful feedback before the
                  real exam. ActSci<span className="gradient-text font-display font-800">AI</span> closes
                  that gap entirely.
                </p>
              </ScrollReveal>
            </div>

            {/* Right — pain points */}
            <div className="flex flex-col gap-3">
              {problems.map((problem, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-5 shadow-sm card-ring group"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                      style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                      </svg>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{problem}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. PLATFORM CAPABILITIES ═════════════════════════════════════════ */}
      <section id="capabilities" className="py-14 md:py-20 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <ScrollReveal>
              <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">Platform Capabilities</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900 dark:text-slate-100"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              Everything your exam prep{" "}
              <span className="gradient-text">needs, in one place.</span>
            </AnimatedHeading>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <AnimatedCard
                key={cap.title}
                delay={i * 0.06}
                hoverY={-6}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-4 shadow-sm card-ring"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-110"
                  style={{ color: cap.accent, background: cap.bg, borderColor: `${cap.accent}20` }}
                >
                  <div className="w-5 h-5">{cap.icon}</div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-slate-900 dark:text-slate-100 font-700 leading-snug" style={{ fontSize: "0.95rem", letterSpacing: "-0.025em" }}>
                    {cap.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
                </div>
                <div className="mt-auto w-6 h-0.5 group-hover:w-10 transition-all duration-400" style={{ background: cap.accent }} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. AI FEEDBACK & MARKING ═════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-white dark:bg-[#0B0F1A]">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left — features list */}
            <div>
              <ScrollReveal>
                <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">AI Feedback & Marking</p>
              </ScrollReveal>
              <AnimatedHeading
                delay={0.1}
                className="font-display text-slate-900 dark:text-slate-100"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
              >
                Feedback that reads like{" "}
                <span className="gradient-text">an examiner marked it.</span>
              </AnimatedHeading>
              <ScrollReveal delay={0.15}>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mt-5 max-w-lg">
                  Stop guessing what earns marks. ActSci<span className="gradient-text font-display font-800">AI</span> gives
                  every candidate a clear, memorandum-grounded picture of exactly where their answer
                  gained or lost marks — updated the moment they submit.
                </p>
              </ScrollReveal>

              <div className="flex flex-col gap-3 mt-8">
                {feedbackFeatures.map((f, i) => (
                  <ScrollReveal key={f.title} delay={i * 0.07}>
                    <div className="flex items-start gap-4 group">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-2.5 transition-all duration-300 group-hover:scale-150"
                        style={{ background: f.accent }}
                      />
                      <div>
                        <p className="text-slate-900 dark:text-slate-100 font-600 text-sm mb-0.5">{f.title}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right — mock reporting visual */}
            <ScrollReveal delay={0.2} direction="left">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(24px)" }}
                />
                <div className="relative bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
                  {/* Header bar */}
                  <div className="bg-slate-900 px-5 py-4 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 h-5 rounded bg-slate-800 mx-4 flex items-center px-3">
                      <span className="text-slate-500 text-[10px] font-mono">actsci.co.za/exam-review</span>
                    </div>
                  </div>

                  {/* Mock dashboard content */}
                  <div className="p-5 flex flex-col gap-4">
                    {/* Report header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-900 font-700 text-sm">Exam Review · Attempt #14</p>
                        <p className="text-slate-400 text-xs mt-0.5">SAM Framework · CA1 Paper</p>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 font-600 border border-emerald-100">Live</span>
                    </div>

                    {/* 4 metric tiles */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { label: "Questions Answered", value: "142",   color: "#4F46E5" },
                        { label: "Latest Mark",         value: "78%",   color: "#059669" },
                        { label: "Avg Marking Time",    value: "8s",    color: "#7C3AED" },
                        { label: "Topics Covered",      value: "18",    color: "#0284C7" },
                      ].map((metric) => (
                        <div key={metric.label} className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                          <p className="text-slate-400 text-[10px] font-500 mb-1.5 uppercase tracking-wide">{metric.label}</p>
                          <p className="font-display font-800" style={{ fontSize: "1.35rem", letterSpacing: "-0.03em", color: metric.color, lineHeight: 1 }}>
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Mini bar chart */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <p className="text-slate-500 text-[10px] font-600 uppercase tracking-[0.12em] mb-3">Topic Mastery</p>
                      <div className="flex flex-col gap-2">
                        {[
                          { label: "ALM",       w: "78%", color: "#4F46E5" },
                          { label: "CAPM",      w: "62%", color: "#7C3AED" },
                          { label: "Mortality", w: "44%", color: "#0284C7" },
                          { label: "Pensions",  w: "32%", color: "#059669" },
                        ].map((bar) => (
                          <div key={bar.label} className="flex items-center gap-2">
                            <span className="text-slate-400 text-[10px] w-16 shrink-0">{bar.label}</span>
                            <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: bar.w, background: bar.color }} />
                            </div>
                            <span className="text-slate-400 text-[10px] w-6 text-right">{bar.w}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Export button row */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                        <span className="text-white text-[11px] font-600">Export Feedback Report</span>
                      </div>
                      <div className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center shrink-0">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round">
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ 6. STUDY INTELLIGENCE ════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <ScrollReveal>
              <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">Study Intelligence</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900 dark:text-slate-100"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              More than a question bank.{" "}
              <span className="gradient-text">A study intelligence engine.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mt-5 max-w-2xl">
                ActSci<span className="gradient-text font-display font-800">AI</span> is built on a
                Retrieval-Augmented Generation system on Supabase pgvector — every AI interaction
                grounded in your own course notes, not generic internet knowledge.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studyFeatures.map((feature, i) => (
              <AnimatedCard
                key={feature.title}
                delay={i * 0.07}
                hoverY={-5}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-4 shadow-sm card-ring card-shimmer"
              >
                <span
                  className="text-2xl w-11 h-11 rounded-xl flex items-center justify-center border shrink-0"
                  style={{ background: feature.bg, borderColor: feature.border }}
                >
                  {feature.icon}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-slate-900 dark:text-slate-100 font-700" style={{ fontSize: "0.95rem", letterSpacing: "-0.025em" }}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
                <div className="mt-auto w-6 h-0.5 group-hover:w-10 transition-all duration-400" style={{ background: feature.accent }} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. CUSTOM TECHNOLOGY ══════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-white dark:bg-[#0B0F1A]">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">Beyond ActSci AI</p>
              </ScrollReveal>
              <AnimatedHeading
                delay={0.1}
                className="font-display text-slate-900 dark:text-slate-100"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
              >
                Need something{" "}
                <span className="gradient-text">custom?</span>
              </AnimatedHeading>
              <ScrollReveal delay={0.15}>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mt-5 max-w-lg">
                  RAK Technologies also designs and develops fully custom technology solutions — from
                  internal portals to AI-enhanced business systems.{" "}
                  <span className="text-slate-900 dark:text-slate-100 font-600">If it&apos;s tech, trust us — we can build it.</span>
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="mt-8">
                  <LiquidButton href="/solutions">Explore Our Services →</LiquidButton>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {customTech.map((item, i) => (
                <ScrollReveal key={item} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4 shadow-sm card-ring group"
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg, #EEF2FF, #F5F3FF)", border: "1px solid #C7D2FE" }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round">
                        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <span className="text-slate-600 dark:text-slate-400 text-sm font-500 leading-snug">{item}</span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. CTA ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-5">Get Started</p>
            <h2
              className="font-display text-slate-900 dark:text-slate-100 mb-5 mx-auto"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08, maxWidth: "680px" }}
            >
              Ready to pass with{" "}
              <span className="gradient-text">confidence?</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-lg mx-auto mb-10">
              Start a free 7-day trial — no card required — and see how ActSci<span className="gradient-text font-display font-800">AI</span> turns
              practice into a real mark improvement before the exam that counts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <LiquidButton href="https://actsci.co.za">Start Free Trial →</LiquidButton>
              <a
                href="/#contact"
                className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-500 px-7 py-4 rounded-xl text-base hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
              >
                Talk to RAK Technologies
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
