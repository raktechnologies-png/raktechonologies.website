"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/ui/AnimatedCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidButton from "@/components/ui/LiquidButton";
import { EASE } from "@/lib/motion";

const metrics = [
  { value: "87.4%", label: "Avg Employment Rate",  color: "#4F46E5" },
  { value: "1,247", label: "Students Tracked",      color: "#7C3AED" },
  { value: "34d",   label: "Avg Time-to-Hire",      color: "#0284C7" },
  { value: "Real-time", label: "Live Analytics",    color: "#059669" },
];


export default function RAKlyticsSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-white">
      <div className="section-divider absolute top-0 inset-x-0" />

      {/* Subtle background tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(79,70,229,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-xs font-600 tracking-wide mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shrink-0" />
                Flagship Platform
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2
                className="font-display text-slate-900 mb-5"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  fontWeight: 900,
                  lineHeight: 1.02,
                  letterSpacing: "-0.04em",
                }}
              >
                RAK<span className="gradient-text">lytics</span>
                <sup
                  style={{ fontSize: "0.38em", verticalAlign: "super", lineHeight: 0 }}
                  className="text-slate-400 font-normal ml-[0.05em]"
                >
                  ™
                </sup>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg mb-8" style={{ letterSpacing: "-0.01em" }}>
                Track graduate outcomes, career progression, and institutional impact — all in one platform.
                Built for universities, bursaries, and NGOs.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.22}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <LiquidButton href="/analytics" className="w-full sm:w-auto justify-center">
                  Explore Analytics →
                </LiquidButton>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 border border-slate-200 text-slate-600 font-500 px-7 py-4 rounded-xl text-base hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 w-full sm:w-auto"
                >
                  Request a Demo
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — metric cards grid */}
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m, i) => (
              <AnimatedCard
                key={m.label}
                delay={i * 0.09}
                hoverY={-5}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm card-ring flex flex-col gap-3"
              >
                <p
                  className="font-display font-800 leading-none"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.03em", color: m.color }}
                >
                  {m.value}
                </p>
                <p className="text-slate-500 text-sm leading-snug">{m.label}</p>
                <div className="mt-auto h-0.5 w-8 rounded-full" style={{ background: m.color }} />
              </AnimatedCard>
            ))}

            {/* Wide card: brand tagline */}
            <AnimatedCard
              delay={0.36}
              hoverY={-4}
              className="col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm card-ring card-shimmer flex items-center justify-between gap-4"
            >
              <div className="flex flex-col gap-1">
                <p className="font-display font-800 text-slate-900" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", letterSpacing: "-0.02em" }}>
                  Student & Alumni Intelligence
                </p>
                <p className="text-slate-400 text-sm">Built for universities, bursaries, NGOs & more</p>
              </div>
              <motion.a
                href="/analytics"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 flex items-center gap-1.5 text-indigo-600 font-600 text-sm"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
