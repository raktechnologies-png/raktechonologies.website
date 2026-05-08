"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PebbleGrid from "@/components/ui/PebbleGrid";
import LiquidButton from "@/components/ui/LiquidButton";
import { EASE } from "@/lib/motion";

// ── Inline brand mark ─────────────────────────────────────────────────────────
function TM() {
  return (
    <sup
      style={{ fontSize: "0.42em", verticalAlign: "super", lineHeight: 0, letterSpacing: 0 }}
      className="text-slate-400 font-normal ml-[0.05em]"
    >
      ™
    </sup>
  );
}

// ── Animated dashboard mockup ─────────────────────────────────────────────────
function DashboardMockup() {
  const industries = [
    { label: "Technology", pct: 85, color: "#4F46E5" },
    { label: "Finance",    pct: 65, color: "#7C3AED" },
    { label: "Education",  pct: 45, color: "#0284C7" },
    { label: "Healthcare", pct: 35, color: "#059669" },
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

      {/* Top card: employment rate */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5, ease: EASE }}
        className="absolute inset-x-0 top-0 bg-white rounded-2xl border border-slate-100 shadow-xl p-5 z-10"
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-slate-400 text-[11px] font-600 tracking-[0.14em] uppercase">
            Graduate Employment Rate
          </p>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-600 border border-emerald-100 flex items-center gap-1">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            +3.2%
          </span>
        </div>
        <div className="flex items-end gap-3 mb-4">
          <span
            className="font-display gradient-text leading-none"
            style={{ fontSize: "2.8rem", fontWeight: 900, letterSpacing: "-0.04em" }}
          >
            87.4<span style={{ fontSize: "0.55em" }}>%</span>
          </span>
          <div className="flex flex-col gap-0.5 pb-1 text-slate-400" style={{ fontSize: "11px" }}>
            <span>of 2024 cohort</span>
            <span>employed within 6mo</span>
          </div>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "87.4%" }}
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
        <p className="text-slate-400 font-500 mb-2" style={{ fontSize: "11px" }}>Active Students</p>
        <p
          className="font-display gradient-text"
          style={{ fontSize: "1.75rem", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em" }}
        >
          1,247
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.85, ease: EASE }}
        className="absolute bg-white rounded-xl border border-slate-100 shadow-lg p-4 z-10"
        style={{ top: "42%", right: 0, width: "47%" }}
      >
        <p className="text-slate-400 font-500 mb-2" style={{ fontSize: "11px" }}>Active Cohorts</p>
        <p
          className="font-display"
          style={{ fontSize: "1.75rem", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em", color: "#7C3AED" }}
        >
          12
        </p>
      </motion.div>

      {/* Bottom: industry chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
        className="absolute inset-x-0 bottom-0 bg-white rounded-2xl border border-slate-100 shadow-xl p-5 z-10"
      >
        <p className="text-slate-400 font-600 tracking-[0.14em] uppercase mb-3" style={{ fontSize: "11px" }}>
          Top Graduate Industries
        </p>
        <div className="flex flex-col gap-2.5">
          {industries.map((item, i) => (
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
const orgs = [
  { icon: "🎓", title: "Universities & Colleges",   desc: "Track student progression, graduation rates, and long-term alumni outcomes across every faculty.", accent: "#4F46E5", bg: "#EEF2FF", border: "#C7D2FE" },
  { icon: "💼", title: "Bursary Programmes",         desc: "Monitor the career impact of your investment across every beneficiary cohort in real time.", accent: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  { icon: "🏢", title: "Career Services Depts",      desc: "Measure placement success, track employer relationships, and report graduate outcomes to leadership.", accent: "#0284C7", bg: "#E0F2FE", border: "#BAE6FD" },
  { icon: "📚", title: "Training Institutions",      desc: "Manage course completions, certifications, and learner progression records in one place.", accent: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  { icon: "🤝", title: "Internship Programmes",      desc: "Track placement outcomes, conversion rates, and host-organisation data across all cohorts.", accent: "#9333EA", bg: "#FAF5FF", border: "#E9D5FF" },
  { icon: "🌍", title: "NGOs & Foundations",         desc: "Demonstrate impact to funders with verified graduate outcome data and sponsor-ready reports.", accent: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC" },
  { icon: "⚡", title: "Any Student-Focused Org",   desc: "The platform adapts to the specific reporting, operational, and engagement needs of your organisation.", accent: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
];

const problems = [
  "Maintaining up-to-date graduate contact and employment records",
  "Tracking career outcomes and employment rates after programme completion",
  "Staying connected with alumni for engagement, events, and re-engagement",
  "Monitoring student progression across multiple cohorts simultaneously",
  "Producing reliable impact reports for sponsors, funders, and stakeholders",
];

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    title: "Employment Tracking",
    desc: "Track employment status and career progression for every graduate in your system.",
    accent: "#4F46E5", bg: "#EEF2FF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7z" /><circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Graduate Locations",
    desc: "See where your graduates are currently employed — by company, city, or sector.",
    accent: "#7C3AED", bg: "#F5F3FF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Industry Analytics",
    desc: "Analyse top industries, job roles, and employer trends across your graduate population.",
    accent: "#0284C7", bg: "#E0F2FE",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Outcome Monitoring",
    desc: "Monitor graduation, employment, and progression metrics for every cohort in real time.",
    accent: "#059669", bg: "#ECFDF5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    title: "Academic Calendar",
    desc: "Manage test dates, exam periods, important milestones, and cohort timelines centrally.",
    accent: "#9333EA", bg: "#FAF5FF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
    title: "Smart Messaging",
    desc: "Send announcements, exam wishes, and birthday messages automatically at scale.",
    accent: "#D97706", bg: "#FFFBEB",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Alumni Engagement",
    desc: "Improve engagement, plan events, and build lasting alumni networks at institutional scale.",
    accent: "#0891B2", bg: "#ECFEFF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "Centralised Records",
    desc: "Maintain updated student and alumni records in one unified, accessible system.",
    accent: "#DC2626", bg: "#FEF2F2",
  },
];

const reportingFeatures = [
  { title: "Built-in Dashboards",      desc: "Visual analytics for all key metrics — no setup or configuration required.", accent: "#4F46E5" },
  { title: "Exportable Reports",        desc: "Generate PDF and Excel reports for leadership, sponsors, and funders.", accent: "#7C3AED" },
  { title: "Employment Insights",       desc: "Track graduate employment rates, time-to-hire, and industry placement data.", accent: "#059669" },
  { title: "Industry Trend Analysis",   desc: "Understand where your graduates are going and which sectors are growing.", accent: "#0284C7" },
  { title: "Sponsor-Ready Reports",     desc: "Pre-formatted impact reports aligned to common funder requirements.", accent: "#9333EA" },
  { title: "Data-Driven Decisions",     desc: "Move from intuition to evidence across every institutional decision you make.", accent: "#D97706" },
];

const crmFeatures = [
  { icon: "📢", title: "Announcements",        desc: "Broadcast updates to students, graduates, or specific cohorts instantly.", accent: "#4F46E5", bg: "#EEF2FF", border: "#C7D2FE" },
  { icon: "🎂", title: "Birthday Wishes",      desc: "Automated personalised birthday messages sent to every graduate.", accent: "#9333EA", bg: "#FAF5FF", border: "#E9D5FF" },
  { icon: "📅", title: "Exam Reminders",       desc: "Timely exam and deadline reminders delivered directly to students.", accent: "#0284C7", bg: "#E0F2FE", border: "#BAE6FD" },
  { icon: "🤝", title: "Alumni Re-engagement", desc: "Re-engage lost alumni through targeted, timely outreach campaigns.", accent: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  { icon: "🎉", title: "Event Planning",       desc: "Plan and communicate alumni events, reunions, and industry meetups.", accent: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
  { icon: "💬", title: "Communication Tools",  desc: "Manage all student and alumni communication from one central interface.", accent: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC" },
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
export default function RaklyticsPage() {
  return (
    <div className="pt-[68px] bg-white">

      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white" style={{ minHeight: "88vh" }}>
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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-xs font-600 tracking-wide shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shrink-0" />
                  Flagship Platform · RAK Technologies
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
                className="font-display text-slate-900 mb-6"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.04em" }}
              >
                Student & Alumni
                <br className="hidden sm:block" />
                Intelligence,{" "}
                <span className="gradient-text">Reimagined.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38, ease: EASE }}
                className="text-slate-500 text-lg leading-relaxed max-w-lg mb-8"
                style={{ letterSpacing: "-0.01em" }}
              >
                <span className="font-display font-800 text-slate-900">
                  RAK<span className="gradient-text">lytics</span><TM />
                </span>{" "}
                is a centralised intelligence platform that helps organisations track student
                progression, graduate outcomes, engagement, and institutional impact — all in one
                unified system.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
              >
                <LiquidButton href="/contact" className="w-full sm:w-auto justify-center">
                  Request a Demo →
                </LiquidButton>
                <a
                  href="#capabilities"
                  className="flex items-center justify-center gap-2 border border-slate-200 text-slate-600 font-500 px-7 py-4 rounded-xl text-base hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 w-full sm:w-auto"
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
      <section className="py-14 md:py-20 relative bg-slate-50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <ScrollReveal>
              <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">Who It&apos;s Built For</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              Designed for organisations{" "}
              <span className="gradient-text">that shape futures.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-500 text-base leading-relaxed max-w-2xl mt-4">
                The platform can be fully tailored to fit the operational and reporting needs of each
                organisation — regardless of size, structure, or sector.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {orgs.map((org, i) => (
              <AnimatedCard
                key={org.title}
                delay={i * 0.07}
                hoverY={-5}
                className="group bg-white border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm card-ring card-shimmer"
              >
                <span
                  className="text-2xl w-11 h-11 rounded-xl flex items-center justify-center border shrink-0"
                  style={{ background: org.bg, borderColor: org.border }}
                >
                  {org.icon}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-slate-900 font-700 leading-snug" style={{ fontSize: "0.95rem", letterSpacing: "-0.025em" }}>
                    {org.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{org.desc}</p>
                </div>
                <div className="mt-auto w-6 h-0.5 group-hover:w-10 transition-all duration-400" style={{ background: org.accent }} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. THE CORE PROBLEM ══════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-white">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left — headline */}
            <div>
              <ScrollReveal>
                <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">The Problem</p>
              </ScrollReveal>
              <AnimatedHeading
                delay={0.1}
                className="font-display text-slate-900"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
              >
                Institutions are flying{" "}
                <span className="gradient-text">blind.</span>
              </AnimatedHeading>
              <ScrollReveal delay={0.15}>
                <p className="text-slate-500 text-base leading-relaxed mt-5 max-w-lg">
                  Fragmented spreadsheets, disconnected systems, and outdated records make it nearly
                  impossible for organisations to understand what&apos;s happening with their students and
                  graduates — let alone report on it meaningfully.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-slate-500 text-base leading-relaxed mt-3 max-w-lg">
                  The result: poor engagement, missed opportunities, and impact reports that don&apos;t
                  tell the full story. RAK<span className="gradient-text font-display font-800">lytics</span><TM /> fixes this.
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
                    className="flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-5 shadow-sm card-ring group"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                      style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                      </svg>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{problem}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. PLATFORM CAPABILITIES ═════════════════════════════════════════ */}
      <section id="capabilities" className="py-14 md:py-20 relative bg-slate-50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <ScrollReveal>
              <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">Platform Capabilities</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              Everything your institution{" "}
              <span className="gradient-text">needs to know.</span>
            </AnimatedHeading>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <AnimatedCard
                key={cap.title}
                delay={i * 0.06}
                hoverY={-6}
                className="group bg-white border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm card-ring"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-110"
                  style={{ color: cap.accent, background: cap.bg, borderColor: `${cap.accent}20` }}
                >
                  <div className="w-5 h-5">{cap.icon}</div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-slate-900 font-700 leading-snug" style={{ fontSize: "0.95rem", letterSpacing: "-0.025em" }}>
                    {cap.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
                </div>
                <div className="mt-auto w-6 h-0.5 group-hover:w-10 transition-all duration-400" style={{ background: cap.accent }} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. DASHBOARDS & REPORTING ════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-white">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left — features list */}
            <div>
              <ScrollReveal>
                <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">Dashboards & Reporting</p>
              </ScrollReveal>
              <AnimatedHeading
                delay={0.1}
                className="font-display text-slate-900"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
              >
                Real-time intelligence{" "}
                <span className="gradient-text">at scale.</span>
              </AnimatedHeading>
              <ScrollReveal delay={0.15}>
                <p className="text-slate-500 text-base leading-relaxed mt-5 max-w-lg">
                  Stop guessing. RAK<span className="gradient-text font-display font-800">lytics</span><TM /> gives
                  leadership, administrators, and sponsors a clear, verified picture of institutional
                  impact — updated in real time.
                </p>
              </ScrollReveal>

              <div className="flex flex-col gap-3 mt-8">
                {reportingFeatures.map((f, i) => (
                  <ScrollReveal key={f.title} delay={i * 0.07}>
                    <div className="flex items-start gap-4 group">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-2.5 transition-all duration-300 group-hover:scale-150"
                        style={{ background: f.accent }}
                      />
                      <div>
                        <p className="text-slate-900 font-600 text-sm mb-0.5">{f.title}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
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
                      <span className="text-slate-500 text-[10px] font-mono">app.raklytics.co.za/reports</span>
                    </div>
                  </div>

                  {/* Mock dashboard content */}
                  <div className="p-5 flex flex-col gap-4">
                    {/* Report header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-900 font-700 text-sm">Impact Report · Q2 2025</p>
                        <p className="text-slate-400 text-xs mt-0.5">University of Johannesburg · Bursary Division</p>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 font-600 border border-emerald-100">Live</span>
                    </div>

                    {/* 4 metric tiles */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { label: "Graduates Tracked", value: "2,841", color: "#4F46E5" },
                        { label: "Employment Rate",   value: "87.4%", color: "#059669" },
                        { label: "Avg Time-to-Hire",  value: "34 days", color: "#7C3AED" },
                        { label: "Active Cohorts",    value: "12",     color: "#0284C7" },
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
                      <p className="text-slate-500 text-[10px] font-600 uppercase tracking-[0.12em] mb-3">Industry Placement</p>
                      <div className="flex flex-col gap-2">
                        {[
                          { label: "Technology",  w: "78%", color: "#4F46E5" },
                          { label: "Finance",     w: "62%", color: "#7C3AED" },
                          { label: "Education",   w: "44%", color: "#0284C7" },
                          { label: "Healthcare",  w: "32%", color: "#059669" },
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
                        <span className="text-white text-[11px] font-600">Export PDF Report</span>
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

      {/* ══ 6. ENGAGEMENT & LIFECYCLE CRM ════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-slate-50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <ScrollReveal>
              <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">Engagement & Lifecycle</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              More than a dashboard.{" "}
              <span className="gradient-text">A relationship engine.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-500 text-base leading-relaxed mt-5 max-w-2xl">
                RAK<span className="gradient-text font-display font-800">lytics</span><TM /> acts as an intelligent
                institutional CRM layer — keeping your organisation connected with students and alumni at
                every stage of their journey, automatically.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {crmFeatures.map((feature, i) => (
              <AnimatedCard
                key={feature.title}
                delay={i * 0.07}
                hoverY={-5}
                className="group bg-white border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm card-ring card-shimmer"
              >
                <span
                  className="text-2xl w-11 h-11 rounded-xl flex items-center justify-center border shrink-0"
                  style={{ background: feature.bg, borderColor: feature.border }}
                >
                  {feature.icon}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-slate-900 font-700" style={{ fontSize: "0.95rem", letterSpacing: "-0.025em" }}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
                <div className="mt-auto w-6 h-0.5 group-hover:w-10 transition-all duration-400" style={{ background: feature.accent }} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. CUSTOM TECHNOLOGY ══════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-white">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">Beyond RAKlytics™</p>
              </ScrollReveal>
              <AnimatedHeading
                delay={0.1}
                className="font-display text-slate-900"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
              >
                Need something{" "}
                <span className="gradient-text">custom?</span>
              </AnimatedHeading>
              <ScrollReveal delay={0.15}>
                <p className="text-slate-500 text-base leading-relaxed mt-5 max-w-lg">
                  RAK Technologies also designs and develops fully custom technology solutions — from
                  internal portals to AI-enhanced business systems.{" "}
                  <span className="text-slate-900 font-600">If it&apos;s tech, trust us — we can build it.</span>
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="mt-8">
                  <LiquidButton href="/services">Explore Our Services →</LiquidButton>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {customTech.map((item, i) => (
                <ScrollReveal key={item} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm card-ring group"
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg, #EEF2FF, #F5F3FF)", border: "1px solid #C7D2FE" }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round">
                        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <span className="text-slate-600 text-sm font-500 leading-snug">{item}</span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. CTA ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative bg-slate-50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-5">Get Started</p>
            <h2
              className="font-display text-slate-900 mb-5 mx-auto"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08, maxWidth: "680px" }}
            >
              Ready to modernise student & alumni{" "}
              <span className="gradient-text">intelligence?</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-lg mx-auto mb-10">
              Book a demo and see how RAK<span className="gradient-text font-display font-800">lytics</span><TM /> can
              transform the way your organisation tracks, engages, and reports on student outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <LiquidButton href="/contact">Request a Demo →</LiquidButton>
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 border border-slate-200 text-slate-600 font-500 px-7 py-4 rounded-xl text-base hover:border-slate-300 hover:bg-white transition-all duration-200"
              >
                Speak With Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
