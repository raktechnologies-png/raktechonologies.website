"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import LiquidButton from "@/components/ui/LiquidButton";

const projects = [
  {
    client:     "RAK'ENG",
    logo:       "/RAK'ENG.jpeg",
    url:        "https://www.rakeng.co.za",
    displayUrl: "www.rakeng.co.za",
    industry:   "Food & Beverage",
    location:   "Ga-Mphahlele, Limpopo",
    year:       "2025",
    tagline:    "Urban Street Food. Rural Heart.",
    description:
      "RAK'ENG is a bold seasonal pop-up restaurant bringing street food culture to rural Limpopo. We designed and built their full website — giving them a strong online presence and a way to reach customers and event bookings across the region.",
    accent: "#D4FF00",
    bg:     "#D4FF00",
    status: "Live",
  },
];

const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

export default function RecentProjects() {
  return (
    <section className="py-14 md:py-20 relative bg-slate-50">
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-12">
          <ScrollReveal>
            <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">
              Recent Work
            </p>
          </ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              Projects we&apos;ve{" "}
              <span className="gradient-text">shipped.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Real clients. Real businesses. Built and launched by RAK Technologies.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.003 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm card-ring"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
                />

                <div className="grid lg:grid-cols-2">

                  {/* ── Left: Info ── */}
                  <div className="p-8 md:p-12 flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-5">

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="text-xs font-700 px-2.5 py-1 rounded-full"
                          style={{ background: project.accent, color: "#0A0A0A" }}
                        >
                          {project.status}
                        </span>
                        <span className="text-slate-400 text-xs">{project.industry}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-400 text-xs">{project.location}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-400 text-xs">{project.year}</span>
                      </div>

                      {/* Name */}
                      <div>
                        <h3
                          className="font-display text-slate-900 font-800 mb-2"
                          style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
                        >
                          {project.client}
                        </h3>
                        <p className="text-sm text-slate-400 italic">
                          &ldquo;{project.tagline}&rdquo;
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-500 text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3">
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 text-sm font-700 px-6 py-3 rounded-xl"
                        style={{ background: project.accent, color: "#0A0A0A" }}
                      >
                        Visit Website <ArrowUpRight />
                      </motion.a>
                      <span className="text-slate-300 text-xs">{project.displayUrl}</span>
                    </div>
                  </div>

                  {/* ── Right: Brand Visual ── */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex flex-col items-center justify-center min-h-[320px] lg:min-h-0 gap-4"
                    style={{ background: project.accent }}
                  >
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0.08) 0%, transparent 70%)" }}
                    />
                    <div className="relative z-10 text-center px-10">
                      <p
                        className="font-display font-900 leading-none mb-3"
                        style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)", letterSpacing: "-0.04em", color: "#0A0A0A" }}
                      >
                        RAK&apos;ENG
                      </p>
                      <p className="text-xs font-600 tracking-widest uppercase" style={{ color: "rgba(0,0,0,0.45)" }}>
                        Est. 2021 · Limpopo, South Africa
                      </p>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
            <p className="text-slate-400 text-sm">
              More client projects coming soon.
            </p>
            <LiquidButton href="/contact">Start Your Project →</LiquidButton>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
