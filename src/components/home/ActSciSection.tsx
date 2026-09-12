"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidButton from "@/components/ui/LiquidButton";

const metrics = [
  { value: "< 60s", label: "Live Feedback" },
  { value: "10+",   label: "Smart Features" },
  { value: "7-Day", label: "Free Trial" },
];

export default function ActSciSection() {
  return (
    <section className="py-14 md:py-20 relative bg-white dark:bg-[#0B0F1A]">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="container-editorial px-6 md:px-10">
        <div className="max-w-2xl">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-600 tracking-wide mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shrink-0" />
              Flagship Platform
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2
              className="font-display text-slate-900 dark:text-slate-100 mb-4"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em" }}
            >
              ActSci
              <sup style={{ fontSize: "0.42em", verticalAlign: "super", lineHeight: 0 }} className="gradient-text ml-[0.05em]">
                AI
              </sup>
              <span className="text-slate-400 dark:text-slate-500 font-500"> — marked live.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6">
              Write your answer — your mark appears in real time. No submit button. An AI coach
              and a prediction of how many weeks until you&apos;re ready to pass.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-7 text-sm text-slate-500 dark:text-slate-400">
              {metrics.map((m) => (
                <span key={m.label}>
                  <span className="font-display font-figures font-700 text-slate-800 dark:text-slate-200">{m.value}</span> {m.label}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.22}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <LiquidButton href="/actsci">Explore ActSci AI →</LiquidButton>
              <a
                href="/#contact"
                className="text-sm font-600 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                Let&apos;s Talk →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
