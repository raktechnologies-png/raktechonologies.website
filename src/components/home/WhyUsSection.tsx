"use client";

import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidButton from "@/components/ui/LiquidButton";

const differentiators = [
  {
    number: "01",
    title: "Problem-First Thinking",
    description:
      "We don't start with technology — we start with your problem. Our consultants deeply understand the challenge before recommending any solution.",
  },
  {
    number: "02",
    title: "Built for Africa",
    description:
      "We understand South African market dynamics, regulatory landscapes, and infrastructure realities. Our solutions are designed to work here.",
  },
  {
    number: "03",
    title: "Full-Stack Capability",
    description:
      "From frontend interfaces to backend systems, cloud infrastructure to AI integration — we cover the full technology stack without outsourcing.",
  },
  {
    number: "04",
    title: "Transparent Partnership",
    description:
      "No black boxes. You see our progress, ask questions at every stage, and own everything we build for you — code, data, and IP.",
  },
  {
    number: "05",
    title: "Quality at Speed",
    description:
      "Agile sprints, CI/CD pipelines, and rigorous code reviews mean you get production-quality work delivered fast — not one at the expense of the other.",
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    description:
      "We invest in your success beyond the launch. Ongoing support, optimisation, and strategic technology advice as you grow.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="section-pad relative bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="container-editorial px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <ScrollReveal>
            <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase font-label mb-4">
              Why RAK Technologies
            </p>
          </ScrollReveal>
          <AnimatedHeading
            delay={0.1}
            className="font-display text-slate-900 dark:text-slate-100 leading-[1.04] tracking-tight mx-auto"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 800, maxWidth: "660px" }}
          >
            The consulting partner that{" "}
            <span className="text-indigo-600 dark:text-indigo-400">actually delivers.</span>
          </AnimatedHeading>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
          {differentiators.map((d, i) => (
            <AnimatedCard
              key={i}
              delay={i * 0.07}
              hoverY={-5}
              className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-8 flex flex-col gap-5 shadow-sm card-ring overflow-hidden"
            >
              {/* Ghost number */}
              <span
                className="absolute -top-1 -right-2 font-display text-slate-100 dark:text-slate-800 select-none group-hover:text-slate-50 dark:group-hover:text-slate-700 transition-colors duration-300"
                style={{ fontSize: "5.5rem", fontWeight: 800, lineHeight: 1 }}
              >
                {d.number}
              </span>

              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="font-display text-slate-900 dark:text-slate-100 font-700 text-[1.15rem] leading-snug">
                  {d.title}
                </h3>
                <p className="hidden md:block text-slate-500 dark:text-slate-400 text-base leading-relaxed">{d.description}</p>
              </div>

              <div className="mt-auto w-8 h-0.5 bg-slate-100 dark:bg-slate-700 group-hover:w-14 group-hover:bg-indigo-400 transition-all duration-400" />
            </AnimatedCard>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LiquidButton href="/#contact">
              Work With Us →
            </LiquidButton>
            <LiquidButton href="/about">
              Learn About Us
            </LiquidButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
