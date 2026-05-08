"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PebbleGrid from "@/components/ui/PebbleGrid";
import LiquidButton from "@/components/ui/LiquidButton";
import { EASE } from "@/lib/motion";

// ── Services ──────────────────────────────────────────────────────────────────
const services = [
  {
    id: "web",
    number: "01",
    title: "Web Development",
    subtitle: "Scalable web platforms built to perform.",
    description:
      "A website is often the first interaction a client has with your business. We build web platforms that are technically excellent and commercially effective — fast, accessible, secure, and designed to convert.",
    outcomes: [
      "High-performance marketing websites and landing pages",
      "Complex web applications and portals",
      "Progressive Web Apps (PWAs)",
      "Headless CMS integrations",
      "API-driven architectures",
      "Ongoing performance monitoring and optimisation",
    ],
    problems: [
      "Our website is too slow and losing us leads",
      "We need a custom portal for our clients",
      "Our current site can't handle our traffic",
      "We're rebuilding from scratch and need a technical partner",
    ],
    accent: "#4F46E5",
    accentLight: "#EEF2FF",
  },
  {
    id: "software",
    number: "02",
    title: "Software Systems",
    subtitle: "Bespoke systems that fit your operations.",
    description:
      "Off-the-shelf software is built for the average use case. If your business has specific workflows, constraints, or scale requirements, you need software built specifically for you. We design and engineer systems from the ground up.",
    outcomes: [
      "Custom internal tools and dashboards",
      "Enterprise resource planning (ERP) systems",
      "Customer relationship management (CRM) tools",
      "Multi-tenant SaaS platform development",
      "Legacy system modernisation",
      "Third-party API integrations",
    ],
    problems: [
      "We're patching together multiple tools that don't talk to each other",
      "Our current software doesn't match how our team works",
      "We need to build a software product and don't have in-house developers",
      "Our legacy system is blocking our growth",
    ],
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
  },
  {
    id: "data",
    number: "03",
    title: "Data & Analytics",
    subtitle: "Turn your data into your competitive advantage.",
    description:
      "Most organisations sit on more data than they use. We build the pipelines, models, and dashboards that transform raw data into clear, actionable intelligence — enabling faster and more confident decision-making.",
    outcomes: [
      "Real-time analytics dashboards",
      "Data pipeline architecture and ETL",
      "Business intelligence (BI) integrations",
      "Predictive analytics and forecasting models",
      "Data warehouse design",
      "Reporting automation",
    ],
    problems: [
      "We have data but can't make sense of it",
      "Our reporting is manual and takes too long",
      "We need to predict trends but don't know where to start",
      "Our data lives in silos and doesn't give us a full picture",
    ],
    accent: "#0284C7",
    accentLight: "#E0F2FE",
  },
  {
    id: "automation",
    number: "04",
    title: "Automation & AI",
    subtitle: "Eliminate repetitive work. Amplify human capability.",
    description:
      "Intelligent automation removes the manual burden from your team and adds AI-powered capabilities to your systems. From robotic process automation (RPA) to machine learning integrations — we make your operations smarter.",
    outcomes: [
      "Robotic Process Automation (RPA) implementation",
      "AI-powered document processing",
      "Intelligent customer service automation",
      "Machine learning model development and integration",
      "Natural Language Processing (NLP) solutions",
      "Workflow orchestration and automation",
    ],
    problems: [
      "Our team spends hours on repetitive manual tasks",
      "We want to add AI features to our existing product",
      "Our customer support is overwhelmed and needs automation",
      "We want to automate our reporting and data entry",
    ],
    accent: "#9333EA",
    accentLight: "#FAF5FF",
  },
  {
    id: "consulting",
    number: "05",
    title: "IT Consulting",
    subtitle: "Strategy that ensures your technology investments pay off.",
    description:
      "Technology decisions made without proper strategy often lead to costly mistakes. Our consultants help you make informed choices — from selecting the right technology stack to planning complex migrations to auditing your existing systems.",
    outcomes: [
      "Technology stack assessment and advisory",
      "Digital transformation roadmaps",
      "Cloud migration strategy and execution",
      "System architecture reviews",
      "IT infrastructure audits",
      "Vendor evaluation and procurement support",
    ],
    problems: [
      "We're not sure which technology to choose for our project",
      "We need an honest assessment of our current systems",
      "We're planning a cloud migration and need guidance",
      "We need a technology roadmap aligned to our business goals",
    ],
    accent: "#059669",
    accentLight: "#ECFDF5",
  },
];

// ── How we work data ───────────────────────────────────────────────────────────
const caseTypes = [
  { title: "Greenfield Build",              description: "You have an idea and need a technical team to bring it to life from scratch. We architect, design, build, and launch.", icon: "◎", accent: "#4F46E5", bg: "#EEF2FF" },
  { title: "System Modernisation",          description: "You have a legacy system that's slowing you down. We audit, plan, and execute the migration to a modern architecture.", icon: "◈", accent: "#7C3AED", bg: "#F5F3FF" },
  { title: "Scaling Existing Systems",      description: "Your system works but can't handle growth. We identify bottlenecks, redesign for scale, and implement without disruption.", icon: "◉", accent: "#0284C7", bg: "#E0F2FE" },
  { title: "Automation of Manual Processes",description: "You have expensive, error-prone manual workflows. We map them, design the automation, and implement RPA or AI solutions.", icon: "◎", accent: "#059669", bg: "#ECFDF5" },
];

const phases = [
  {
    number: "01", title: "Discovery & Problem Definition", duration: "Week 1",
    description: "Every engagement begins with deep listening. We run structured discovery sessions to understand your organisation, your challenge, and what success looks like.",
    deliverables: ["Problem statement document", "Stakeholder map", "Requirements specification", "Preliminary scope"],
    accent: "#4F46E5", accentLight: "#EEF2FF",
  },
  {
    number: "02", title: "Architecture & Technical Design", duration: "Week 1–2",
    description: "Once we understand the problem, we design the right solution. Our architects evaluate technology options, design system architecture, and produce technical specifications.",
    deliverables: ["Technical architecture document", "Technology stack recommendation", "Data model design", "Integration plan"],
    accent: "#7C3AED", accentLight: "#F5F3FF",
  },
  {
    number: "03", title: "Aligned Proposal", duration: "Week 2",
    description: "Before writing a line of code, we present a complete proposal: the solution, the rationale, the delivery timeline, and the commercial agreement.",
    deliverables: ["Solution proposal", "Project timeline", "Commercial agreement", "Risk assessment"],
    accent: "#9333EA", accentLight: "#FAF5FF",
  },
  {
    number: "04", title: "Agile Build & Delivery", duration: "Sprint-based",
    description: "Development proceeds in short sprints with regular demos, testing milestones, and open communication. You see progress weekly.",
    deliverables: ["Weekly sprint demos", "Tested, deployable increments", "Automated test suites", "Progress reports"],
    accent: "#0284C7", accentLight: "#E0F2FE",
  },
  {
    number: "05", title: "Launch & Handover", duration: "Final Sprint",
    description: "We deploy to production, run final acceptance testing, and complete a thorough handover including documentation, training, and source code transfer.",
    deliverables: ["Production deployment", "Technical documentation", "Training session", "Source code handover"],
    accent: "#059669", accentLight: "#ECFDF5",
  },
  {
    number: "06", title: "Ongoing Support & Evolution", duration: "Ongoing",
    description: "A successful system isn't static. We offer ongoing support packages, performance monitoring, and continued development as your needs evolve.",
    deliverables: ["Support SLA", "Performance monitoring", "Feature enhancements", "Quarterly reviews"],
    accent: "#0891B2", accentLight: "#ECFEFF",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SolutionsPage() {
  return (
    <div className="pt-[68px] bg-white">

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <PebbleGrid />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% -5%, rgba(79,70,229,0.06) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-5">
                Services & Solutions
              </p>
              <h1
                className="font-display text-slate-900 mb-6"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.04em" }}
              >
                Technology solutions,{" "}
                <span className="gradient-text">built to solve.</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg mb-8" style={{ letterSpacing: "-0.01em" }}>
                Every service we offer is centred on outcomes — not deliverables. We measure success
                by the problems we solve, the systems we ship, and the impact we create.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <LiquidButton href="/contact">Start a Project →</LiquidButton>
                <a
                  href="#how-we-work"
                  className="flex items-center justify-center gap-2 border border-slate-200 text-slate-600 font-500 px-7 py-4 rounded-xl text-base hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
                >
                  How We Work
                </a>
              </div>
            </motion.div>

            {/* Right — Abstract 3D Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="hidden lg:flex justify-end"
            >
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)", filter: "blur(24px)" }}
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

      {/* ══ SERVICE LIST ══════════════════════════════════════════════════════ */}
      <section className="relative pb-16 md:pb-24 bg-slate-50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 flex flex-col gap-4">
          {services.map((svc) => (
            <ScrollReveal key={svc.id} delay={0.05}>
              <motion.div
                id={svc.id}
                whileHover={{ scale: 1.003 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm card-ring"
              >
                {/* Top accent on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent)` }}
                />
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                    {/* Left */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-300 font-600 text-sm font-display">{svc.number}</span>
                        <div className="w-8 h-px" style={{ background: svc.accent }} />
                      </div>
                      <h2
                        className="font-display text-slate-900 font-800"
                        style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
                      >
                        {svc.title}
                      </h2>
                      <p className="text-sm font-600" style={{ color: svc.accent }}>{svc.subtitle}</p>
                      <p className="text-slate-500 text-sm leading-relaxed mt-1">{svc.description}</p>
                      <LiquidButton href="/contact" className="mt-4">Get Started →</LiquidButton>
                    </div>

                    {/* Right */}
                    <div className="md:col-span-8 grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-3">
                        <p className="text-slate-900 text-xs font-600 tracking-widest uppercase">What we deliver</p>
                        <ul className="flex flex-col gap-2.5">
                          {svc.outcomes.map((o, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: svc.accent }} />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-slate-900 text-xs font-600 tracking-widest uppercase">Problems we solve</p>
                        <ul className="flex flex-col gap-3">
                          {svc.problems.map((p, j) => (
                            <AnimatedCard key={j} hoverY={-2} className="text-sm text-slate-500 italic leading-relaxed px-3 py-2 rounded-lg" style={{ background: svc.accentLight }}>
                              &quot;{p}&quot;
                            </AnimatedCard>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══ HOW WE WORK — CASE TYPES ═════════════════════════════════════════ */}
      <section id="how-we-work" className="py-14 md:py-20 relative bg-white">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <ScrollReveal>
              <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">How We Work</p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              The challenges{" "}
              <span className="gradient-text">we take on.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-500 text-base leading-relaxed mt-4 max-w-2xl">
                Great technology solutions don&apos;t happen by accident. They come from a structured,
                collaborative process that keeps your business goals at the centre of every decision.
              </p>
            </ScrollReveal>
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
                  <h3 className="font-display text-slate-900 font-700 leading-snug" style={{ fontSize: "1rem", letterSpacing: "-0.025em" }}>
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

      {/* ══ PROCESS ══════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-slate-50">
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
              From problem to{" "}
              <span className="gradient-text">production.</span>
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
                    style={{ background: phase.accentLight, borderColor: `${phase.accent}30`, color: phase.accent }}
                  >
                    {phase.number}
                  </div>

                  <div className="flex-1 grid md:grid-cols-3 gap-6 items-start">
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-display text-slate-900 font-700" style={{ fontSize: "1.05rem", letterSpacing: "-0.025em" }}>
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

      {/* ══ BOTTOM CTA ═══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative bg-white">
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
              <LiquidButton href="/contact">Request a Solution →</LiquidButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
