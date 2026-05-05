"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidButton from "@/components/ui/LiquidButton";
import { EASE } from "@/lib/motion";

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

const stats = [
  { v: "50+",  l: "Projects Completed" },
  { v: "100%", l: "Client Satisfaction" },
  { v: "24h",  l: "Average Response Time" },
  { v: "5",    l: "Technology Domains" },
];

export default function WhyUsSection() {
  return (
    <section className="py-16 md:py-36 relative bg-slate-50 overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-20">
          <ScrollReveal>
            <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">
              Why RAK Technologies
            </p>
          </ScrollReveal>
          <AnimatedHeading
            delay={0.1}
            className="font-display text-slate-900 leading-[1.04] tracking-tight mx-auto"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 800, maxWidth: "660px" }}
          >
            The consulting partner that{" "}
            <span className="gradient-text">actually delivers.</span>
          </AnimatedHeading>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-20">
          {differentiators.map((d, i) => (
            <AnimatedCard
              key={i}
              delay={i * 0.07}
              hoverY={-5}
              className="group relative bg-white border border-slate-100 rounded-2xl p-8 flex flex-col gap-5 shadow-sm card-ring overflow-hidden"
            >
              {/* Ghost number */}
              <span
                className="absolute -top-1 -right-2 font-display text-slate-100 select-none group-hover:text-slate-50 transition-colors duration-300"
                style={{ fontSize: "5.5rem", fontWeight: 800, lineHeight: 1 }}
              >
                {d.number}
              </span>

              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="font-display text-slate-900 font-700 text-[1.15rem] leading-snug">
                  {d.title}
                </h3>
                <p className="hidden md:block text-slate-500 text-base leading-relaxed">{d.description}</p>
              </div>

              <div className="mt-auto w-8 h-0.5 bg-slate-100 group-hover:w-14 group-hover:bg-indigo-400 transition-all duration-400" />
            </AnimatedCard>
          ))}
        </div>

        {/* Stats band — pebble glow on hover */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="relative bg-white px-6 py-7 overflow-hidden"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Radial glow pebble */}
                <motion.div
                  variants={{
                    rest:  { scale: 0, opacity: 0 },
                    hover: { scale: 2.2, opacity: 1 },
                  }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(79,70,229,0.07), transparent 70%)",
                  }}
                />
                <span
                  className="relative block font-display gradient-text leading-none mb-1.5"
                  style={{ fontSize: "clamp(1.85rem, 2.5vw, 2.5rem)", fontWeight: 800 }}
                >
                  {s.v}
                </span>
                <span className="relative text-slate-500 text-sm">{s.l}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LiquidButton href="/contact">
              Work With Us →
            </LiquidButton>
            <a
              href="/about"
              className="flex items-center gap-2 border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 font-500 px-6 py-4 rounded-xl text-sm transition-all duration-200"
            >
              Learn About Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
