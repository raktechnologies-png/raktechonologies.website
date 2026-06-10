"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PebbleGrid from "@/components/ui/PebbleGrid";
import LiquidButton from "@/components/ui/LiquidButton";

const values = [
  {
    title: "Integrity First",
    description:
      "We say what we'll do and do what we say. No overpromising, no black-box processes — just honest, transparent delivery.",
    icon: "◈",
    accent: "#4F46E5",
    bg: "#EEF2FF",
  },
  {
    title: "Engineering Excellence",
    description:
      "We hold our work to the highest technical standard. Every system we build is clean, documented, tested, and maintainable.",
    icon: "◉",
    accent: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    title: "Impact Over Output",
    description:
      "Lines of code don't measure success — business outcomes do. We focus on solutions that move the needle for your organisation.",
    icon: "◎",
    accent: "#0284C7",
    bg: "#E0F2FE",
  },
  {
    title: "Continuous Growth",
    description:
      "The technology landscape never stops evolving. Neither do we. Our team continuously learns to bring you the best solutions available.",
    icon: "◈",
    accent: "#059669",
    bg: "#ECFDF5",
  },
];

const capabilities = [
  "Custom Web Applications",
  "Enterprise Software Development",
  "Cloud Architecture",
  "Data Pipelines & Analytics",
  "AI & Machine Learning Integration",
  "Process Automation (RPA)",
  "API Design & Integration",
  "IT Strategy & Consulting",
  "System Audits & Optimisation",
  "Digital Transformation Roadmaps",
];

export default function AboutPage() {
  return (
    <div className="pt-[68px] bg-white dark:bg-[#0B0F1A]">
      {/* ── Hero ── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white dark:bg-[#0B0F1A]">
        <PebbleGrid />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% -5%, rgba(79,70,229,0.06) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-5">
              About RAK Technologies
            </p>
            <h1
              className="font-display text-slate-900 dark:text-slate-100 mb-8"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
              }}
            >
              Technology that serves{" "}
              <span className="gradient-text">people and purpose.</span>
            </h1>
            <p
              className="text-slate-500 dark:text-slate-400 text-xl md:text-2xl leading-relaxed max-w-2xl"
              style={{ fontWeight: 400, letterSpacing: "-0.015em" }}
            >
              RAK Technologies is a South African IT consulting and software development firm
              built on the belief that technology should solve real problems — not create new ones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 md:py-20 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <ScrollReveal>
              <div className="flex flex-col gap-6">
                <AnimatedHeading
                  className="font-display text-slate-900 dark:text-slate-100"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.035em" }}
                >
                  A firm built on outcomes,{" "}
                  <span className="gradient-text">not outputs.</span>
                </AnimatedHeading>
                <div className="flex flex-col gap-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                  <p>
                    We started RAK Technologies with a straightforward premise: South African businesses
                    deserve access to world-class technology consulting — without the world-class price
                    tag that often comes with it. Founded in 2024 and based in Pretoria, we serve
                    clients across South Africa and beyond.
                  </p>
                  <p>
                    Our team brings together expertise across software engineering, data science,
                    cloud infrastructure, and business consulting. This cross-disciplinary depth means
                    we can tackle complex challenges that span technical and organisational boundaries.
                  </p>
                  <p>
                    We&apos;ve worked with healthcare providers, financial services firms, retail brands,
                    and government-adjacent organisations — each with unique constraints, each
                    requiring a tailored approach.
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-8 h-0.5" style={{ background: "linear-gradient(90deg, #4F46E5, #7C3AED)" }} />
                  <span className="text-slate-400 dark:text-slate-500 text-sm">Est. 2024 · Pretoria, South Africa</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="left">
              <div className="flex flex-col gap-5">
                {/* Server rack image */}
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-3xl pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(79,70,229,0.08) 0%, transparent 70%)", filter: "blur(20px)" }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <Image
                      src="/Organized Server Rack.png"
                      alt="RAK Technologies infrastructure and engineering capability"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.12) 0%, transparent 60%)" }} />
                  </motion.div>
                </div>

                {/* Capabilities list below the image */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <p className="text-slate-400 dark:text-slate-500 text-xs font-600 tracking-[0.15em] uppercase mb-4">
                    What we&apos;re capable of
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 md:py-20 relative bg-white dark:bg-[#0B0F1A]">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-4">
                What We Stand For
              </p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900 dark:text-slate-100 leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800 }}
            >
              Our <span className="gradient-text">Values</span>
            </AnimatedHeading>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <AnimatedCard
                key={i}
                delay={i * 0.08}
                hoverY={-5}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-7 flex flex-col gap-4 shadow-sm card-ring"
              >
                <span
                  className="text-2xl w-11 h-11 rounded-xl flex items-center justify-center border"
                  style={{ color: v.accent, background: v.bg, borderColor: `${v.accent}20` }}
                >
                  {v.icon}
                </span>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-display text-slate-900 dark:text-slate-100 font-700 text-[1.1rem]">{v.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">{v.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-10 md:p-14 text-center shadow-sm">
              <h2
                className="font-display text-slate-900 dark:text-slate-100 leading-[1.05] tracking-tight mb-5"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800 }}
              >
                Work with a team that <span className="gradient-text">cares.</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto">
                Let&apos;s discuss your project and show you what thoughtful technology consulting looks like.
              </p>
              <div className="flex justify-center">
                <LiquidButton href="/contact">
                  Request a Solution →
                </LiquidButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
