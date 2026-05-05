"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PebbleGrid from "@/components/ui/PebbleGrid";
import LiquidButton from "@/components/ui/LiquidButton";

const phases = [
  {
    number: "01",
    title: "Discovery & Problem Definition",
    duration: "Week 1",
    description:
      "Every engagement begins with deep listening. We run structured discovery sessions to understand your organisation, your challenge, and what success looks like.",
    deliverables: ["Problem statement document", "Stakeholder map", "Requirements specification", "Preliminary scope"],
    accent: "#4F46E5",
    accentLight: "#EEF2FF",
  },
  {
    number: "02",
    title: "Architecture & Technical Design",
    duration: "Week 1–2",
    description:
      "Once we understand the problem, we design the right solution. Our architects evaluate technology options, design system architecture, and produce technical specifications.",
    deliverables: ["Technical architecture document", "Technology stack recommendation", "Data model design", "Integration plan"],
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
  },
  {
    number: "03",
    title: "Aligned Proposal",
    duration: "Week 2",
    description:
      "Before writing a line of code, we present a complete proposal: the solution, the rationale, the delivery timeline, and the commercial agreement.",
    deliverables: ["Solution proposal", "Project timeline", "Commercial agreement", "Risk assessment"],
    accent: "#9333EA",
    accentLight: "#FAF5FF",
  },
  {
    number: "04",
    title: "Agile Build & Delivery",
    duration: "Sprint-based",
    description:
      "Development proceeds in short sprints with regular demos, testing milestones, and open communication. You see progress weekly.",
    deliverables: ["Weekly sprint demos", "Tested, deployable increments", "Automated test suites", "Progress reports"],
    accent: "#0284C7",
    accentLight: "#E0F2FE",
  },
  {
    number: "05",
    title: "Launch & Handover",
    duration: "Final Sprint",
    description:
      "We deploy to production, run final acceptance testing, and complete a thorough handover including documentation, training, and source code transfer.",
    deliverables: ["Production deployment", "Technical documentation", "Training session", "Source code handover"],
    accent: "#059669",
    accentLight: "#ECFDF5",
  },
  {
    number: "06",
    title: "Ongoing Support & Evolution",
    duration: "Ongoing",
    description:
      "A successful system isn't static. We offer ongoing support packages, performance monitoring, and continued development as your needs evolve.",
    deliverables: ["Support SLA", "Performance monitoring", "Feature enhancements", "Quarterly reviews"],
    accent: "#0891B2",
    accentLight: "#ECFEFF",
  },
];

const caseTypes = [
  { title: "Greenfield Build", description: "You have an idea and need a technical team to bring it to life from scratch. We architect, design, build, and launch.", icon: "◎", accent: "#4F46E5", bg: "#EEF2FF" },
  { title: "System Modernisation", description: "You have a legacy system that's slowing you down. We audit, plan, and execute the migration to a modern architecture.", icon: "◈", accent: "#7C3AED", bg: "#F5F3FF" },
  { title: "Scaling Existing Systems", description: "Your system works but can't handle growth. We identify bottlenecks, redesign for scale, and implement without disruption.", icon: "◉", accent: "#0284C7", bg: "#E0F2FE" },
  { title: "Automation of Manual Processes", description: "You have expensive, error-prone manual workflows. We map them, design the automation, and implement RPA or AI solutions.", icon: "◎", accent: "#059669", bg: "#ECFDF5" },
];

export default function SolutionsPage() {
  return (
    <div className="pt-[68px] bg-white">
      {/* ── Hero ── */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <PebbleGrid />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% -5%, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-5">
                How We Work
              </p>
              <h1
                className="font-display text-slate-900 mb-6"
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
                  fontWeight: 900,
                  lineHeight: 1.02,
                  letterSpacing: "-0.04em",
                }}
              >
                Our approach to solving{" "}
                <span className="gradient-text">complex problems.</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg mb-8" style={{ letterSpacing: "-0.01em" }}>
                Great technology solutions don&apos;t happen by accident. They happen through a structured,
                collaborative process that keeps your business goals at the centre of every decision.
              </p>
              <LiquidButton href="/contact">
                Start the Process →
              </LiquidButton>
            </motion.div>

            {/* Right — Abstract 3D illustration */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex justify-end"
            >
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-3xl pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)",
                    filter: "blur(24px)",
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100"
                  style={{ width: 440, height: 500 }}
                >
                  <Image
                    src="/Abstract 3D Illustration.png"
                    alt="Abstract 3D architecture illustration"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Case types ── */}
      <section className="py-20 md:py-28 relative bg-slate-50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <ScrollReveal>
              <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">Types of Engagements</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              The challenges we take on.
            </AnimatedHeading>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseTypes.map((ct, i) => (
              <AnimatedCard
                key={i}
                delay={i * 0.08}
                hoverY={-5}
                className="group bg-white border border-slate-100 rounded-2xl p-7 flex flex-col gap-4 shadow-sm card-ring"
              >
                <span
                  className="text-2xl w-10 h-10 rounded-xl flex items-center justify-center border"
                  style={{ color: ct.accent, background: ct.bg, borderColor: `${ct.accent}20` }}
                >
                  {ct.icon}
                </span>
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-display text-slate-900 font-700 leading-snug"
                    style={{ fontSize: "1rem", letterSpacing: "-0.025em" }}
                  >
                    {ct.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{ct.description}</p>
                </div>
                <div className="mt-auto w-6 h-0.5 group-hover:w-12 transition-all duration-400" style={{ background: ct.accent }} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 md:py-28 relative bg-white">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <ScrollReveal>
              <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">The Process</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              From problem to <span className="gradient-text">production.</span>
            </AnimatedHeading>
          </div>

          <div className="flex flex-col gap-4">
            {phases.map((phase, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex gap-6 bg-white border border-slate-100 rounded-2xl p-7 md:p-9 shadow-sm card-ring"
                >
                  {/* Phase bubble */}
                  <div
                    className="relative z-10 w-11 h-11 rounded-full border-2 flex items-center justify-center shrink-0 font-display font-700 text-sm transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: phase.accentLight,
                      borderColor: `${phase.accent}30`,
                      color: phase.accent,
                    }}
                  >
                    {phase.number}
                  </div>

                  <div className="flex-1 grid md:grid-cols-3 gap-6 items-start">
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3
                          className="font-display text-slate-900 font-700"
                          style={{ fontSize: "1.05rem", letterSpacing: "-0.025em" }}
                        >
                          {phase.title}
                        </h3>
                        <span
                          className="text-xs px-2.5 py-0.5 rounded-full border font-500"
                          style={{ color: phase.accent, borderColor: `${phase.accent}30`, background: phase.accentLight }}
                        >
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{phase.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-slate-900 text-xs font-600 tracking-widest uppercase">Deliverables</p>
                      <ul className="flex flex-col gap-1.5">
                        {phase.deliverables.map((d, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: phase.accent }} />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 relative bg-slate-50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2
              className="font-display text-slate-900 mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1 }}
            >
              Ready to <span className="gradient-text">start the process?</span>
            </h2>
            <p className="text-slate-500 text-base mb-8 max-w-md mx-auto">
              Submit your project request and we&apos;ll respond with a tailored technical approach within 24 hours.
            </p>
            <div className="flex justify-center">
              <LiquidButton href="/contact">
                Request a Solution →
              </LiquidButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
