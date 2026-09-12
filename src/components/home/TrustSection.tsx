"use client";

import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticSection from "@/components/ui/MagneticSection";
import LiquidButton from "@/components/ui/LiquidButton";

const pillars = [
  {
    number: "01",
    title: "Modern Tech",
    description: "We use the latest high-performance frameworks and tools — no outdated, slow, or bloated templates.",
  },
  {
    number: "02",
    title: "Partner, Not Vendor",
    description: "We work integrated alongside your business workflow, not just for you. Your business goals guide our infrastructure.",
  },
  {
    number: "03",
    title: "You Own Everything",
    description: "Full source code access, secure direct database configurations, and absolute project ownership with zero vendor lock-in.",
  },
  {
    number: "04",
    title: "Built to Scale",
    description: "Every architecture layer is optimized to grow with your business — agile methodologies and tight feedback loops ensure faster launches, never holding you back.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-12 md:py-20 relative bg-slate-50 dark:bg-slate-900/50">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left — headline */}
          <MagneticSection className="flex flex-col gap-6" maxX={12} maxY={6}>
            <ScrollReveal>
              <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase font-label">
                Our Commitment
              </p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display leading-[1.06] tracking-tight text-slate-900 dark:text-slate-100"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", fontWeight: 800 }}
            >
              We turn ideas into{" "}
              <span className="text-indigo-600 dark:text-indigo-400">scalable systems.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.22}>
              <p className="hidden md:block text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg">
                Every business problem has a technology solution. We partner with
                organisations to understand the challenge, architect the right approach,
                and build systems that deliver measurable results.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.32}>
              <div className="hidden md:flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {["A", "B", "C"].map((l) => (
                    <div
                      key={l}
                      className="w-9 h-9 rounded-full border-2 border-slate-50 flex items-center justify-center text-xs font-600 text-white shadow-sm"
                      style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-base">
                  Trusted by <span className="text-slate-900 dark:text-slate-50 font-600 font-figures">50+ clients</span> across industries
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <LiquidButton href="/#contact">
                Start Your Project →
              </LiquidButton>
            </ScrollReveal>
          </MagneticSection>

          {/* Right — pillars, editorial list */}
          <div className="flex flex-col">
            {pillars.map((pillar, i) => (
              <AnimatedCard
                key={i}
                delay={i * 0.08}
                direction="left"
                hoverY={0}
                className="group flex items-start gap-5 py-5 border-t border-slate-200 dark:border-slate-800 last:border-b"
              >
                <span className="font-label text-indigo-400 dark:text-indigo-500 text-sm pt-0.5 shrink-0">{pillar.number}</span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-slate-900 dark:text-slate-100 text-base font-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">{pillar.title}</h3>
                  <p className="hidden md:block text-slate-500 dark:text-slate-400 text-base leading-relaxed">{pillar.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
