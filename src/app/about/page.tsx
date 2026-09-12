"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PebbleGrid from "@/components/ui/PebbleGrid";
import LiquidButton from "@/components/ui/LiquidButton";
import WhyUsSection from "@/components/home/WhyUsSection";

const values = [
  {
    number: "01",
    title: "Integrity First",
    description:
      "We say what we'll do and do what we say. No overpromising, no black-box processes — just honest, transparent delivery.",
  },
  {
    number: "02",
    title: "Engineering Excellence",
    description:
      "We hold our work to the highest technical standard. Every system we build is clean, documented, tested, and maintainable.",
  },
  {
    number: "03",
    title: "Impact Over Output",
    description:
      "Lines of code don't measure success — business outcomes do. We focus on solutions that move the needle for your organisation.",
  },
  {
    number: "04",
    title: "Continuous Growth",
    description:
      "The technology landscape never stops evolving. Neither do we. Our team continuously learns to bring you the best solutions available.",
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

const tabs = [
  { id: "story", label: "Our Story" },
  { id: "values", label: "What We Value" },
  { id: "capabilities", label: "What We're Capable Of" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function TabPanel({ active }: { active: TabId }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {active === "story" && (
          <div className="flex flex-col gap-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
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
            <div className="flex items-center gap-3 pt-2">
              <div className="w-8 h-0.5" style={{ background: "linear-gradient(90deg, #4F46E5, #7C3AED)" }} />
              <span className="text-slate-400 dark:text-slate-500 text-sm">Est. 2024 · Pretoria, South Africa</span>
            </div>
          </div>
        )}

        {active === "values" && (
          <div className="flex flex-col max-w-xl">
            {values.map((v) => (
              <div key={v.number} className="flex items-start gap-5 py-6 border-t border-slate-200 dark:border-slate-800 last:border-b">
                <span className="font-label text-indigo-400 dark:text-indigo-500 text-sm pt-0.5 shrink-0">{v.number}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-slate-900 dark:text-slate-100 font-700 text-[1.05rem]">{v.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {active === "capabilities" && (
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-xl">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-center gap-2.5 text-base text-slate-600 dark:text-slate-400 py-2 border-t border-slate-200 dark:border-slate-800">
                {cap}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default function AboutPage() {
  const [active, setActive] = useState<TabId>("story");

  return (
    <div className="pt-[68px] bg-white dark:bg-[#0B0F1A]">

      {/* ── Hero — asymmetric offset ── */}
      <section className="section-pad relative overflow-hidden bg-white dark:bg-[#0B0F1A]">
        <PebbleGrid />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% -5%, rgba(79,70,229,0.06) 0%, transparent 70%)" }}
        />
        <div className="container-editorial px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pr-[22%] xl:pr-[32%]"
          >
            <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase font-label mb-5">
              About RAK Technologies
            </p>
            <h1
              className="font-display text-slate-900 dark:text-slate-100 mb-8"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
              }}
            >
              Technology that serves{" "}
              <span className="text-indigo-600 dark:text-indigo-400">people and purpose.</span>
            </h1>
            <p
              className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed"
              style={{ fontWeight: 400, letterSpacing: "-0.015em" }}
            >
              RAK Technologies is a South African IT consulting and software development firm
              built on the belief that technology should solve real problems — not create new ones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Tabbed: Story / Values / Capabilities ── */}
      <section className="section-pad relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="container-editorial px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left — heavy column: tabs + panel */}
            <div className="lg:w-[58%]">
              <div className="flex items-center gap-8 mb-10 border-b border-slate-200 dark:border-slate-800">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`relative pb-4 text-sm font-600 tracking-wide transition-opacity duration-200 cursor-pointer ${
                      active === t.id
                        ? "text-slate-900 dark:text-slate-100 opacity-100"
                        : "text-slate-400 dark:text-slate-500 opacity-70 hover:opacity-100"
                    }`}
                  >
                    {t.label}
                    {active === t.id && (
                      <motion.span
                        layoutId="about-tab-underline"
                        className="absolute left-0 right-0 -bottom-px h-[2px] bg-indigo-500"
                      />
                    )}
                  </button>
                ))}
              </div>

              <TabPanel active={active} />
            </div>

            {/* Right — light column: constant image */}
            <ScrollReveal delay={0.15} direction="left" className="lg:w-[42%]">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(79,70,229,0.08) 0%, transparent 70%)", filter: "blur(20px)" }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/Organized Server Rack.png"
                    alt="RAK Technologies infrastructure and engineering capability"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.12) 0%, transparent 60%)" }} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why RAK Technologies */}
      <WhyUsSection />

      {/* CTA */}
      <section className="section-pad relative bg-white dark:bg-[#0B0F1A]">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="container-editorial px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2
              className="font-display text-slate-900 dark:text-slate-100 leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800 }}
            >
              Work with a team that <span className="text-indigo-600 dark:text-indigo-400">cares.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto">
              Let&apos;s discuss your project and show you what thoughtful technology consulting looks like.
            </p>
            <div className="flex justify-center">
              <LiquidButton href="/#contact">
                Request a Solution →
              </LiquidButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
