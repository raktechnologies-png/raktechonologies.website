"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/ui/AnimatedCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidButton from "@/components/ui/LiquidButton";
import { EASE } from "@/lib/motion";

const metrics = [
  { value: "< 60s", label: "Live Feedback",   color: "#4F46E5" },
  { value: "10+",   label: "Smart Features",  color: "#7C3AED" },
  { value: "4",     label: "AI Checkpoints",  color: "#0284C7" },
  { value: "7-Day", label: "Free Trial, No Card", color: "#059669" },
];


export default function ActSciSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-white dark:bg-[#0B0F1A]">
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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-600 tracking-wide mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shrink-0" />
                Flagship Platform
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2
                className="font-display text-slate-900 dark:text-slate-100 mb-5"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  fontWeight: 900,
                  lineHeight: 1.02,
                  letterSpacing: "-0.04em",
                }}
              >
                ActSci
                <sup
                  style={{ fontSize: "0.42em", verticalAlign: "super", lineHeight: 0 }}
                  className="gradient-text ml-[0.05em]"
                >
                  AI
                </sup>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-lg mb-8" style={{ letterSpacing: "-0.01em" }}>
                Write your answer — your mark appears in real time. No submit button. Exact
                feedback, an AI exam coach, and a prediction of how many weeks until you&apos;re
                ready to pass.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.22}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <LiquidButton href="/actsci" className="w-full sm:w-auto justify-center">
                  Explore ActSci AI →
                </LiquidButton>
                <a
                  href="https://actsci.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-500 px-7 py-4 rounded-xl text-base hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 w-full sm:w-auto"
                >
                  Visit actsci.co.za
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
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm card-ring flex flex-col gap-3"
              >
                <p
                  className="font-display font-800 leading-none"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.03em", color: m.color }}
                >
                  {m.value}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-snug">{m.label}</p>
                <div className="mt-auto h-0.5 w-8 rounded-full" style={{ background: m.color }} />
              </AnimatedCard>
            ))}

            {/* Wide card: brand tagline */}
            <AnimatedCard
              delay={0.36}
              hoverY={-4}
              className="col-span-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm card-ring card-shimmer flex items-center justify-between gap-4"
            >
              <div className="flex flex-col gap-1">
                <p className="font-display font-800 text-slate-900 dark:text-slate-50" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", letterSpacing: "-0.02em" }}>
                  Your actuarial answers, marked live.
                </p>
                <p className="text-slate-400 dark:text-slate-500 text-sm">Built for actuarial candidates across South Africa</p>
              </div>
              <motion.a
                href="/actsci"
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
