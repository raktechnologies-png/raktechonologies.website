"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import LiquidButton from "@/components/ui/LiquidButton";

const projects = [
  {
    client:     "RAK'ENG",
    url:        "https://www.rakeng.co.za",
    displayUrl: "www.rakeng.co.za",
    industry:   "Food & Beverage",
    location:   "Ga-Mphahlele, Limpopo",
    year:       "2025",
    tagline:    "Urban Street Food. Rural Heart.",
    description:
      "RAK'ENG is a bold seasonal pop-up restaurant bringing street food culture to rural Limpopo. We designed and built their full website — giving them a strong online presence and a way to reach customers and event bookings across the region.",
    accent: "#D4FF00",
    status: "Live",
  },
  {
    client:     "SonKhoz Advisory",
    url:        "https://www.sonkhozadvisory.co.za",
    displayUrl: "www.sonkhozadvisory.co.za",
    industry:   "Financial Advisory",
    location:   "Midrand, Johannesburg",
    year:       "2025",
    tagline:    "Where Data Meets Strategic Foresight.",
    description:
      "SonKhoz Advisory is a Midrand-based financial consulting firm delivering institutional-grade financial modelling, business valuation, and pricing strategy. We designed and built their full website — giving them a polished digital presence to engage start-ups, SMEs, and financial services firms across South Africa.",
    accent: "#C2A476",
    status: "Live",
  },
];

const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

export default function RecentProjects() {
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  return (
    <section className="py-14 md:py-20 relative bg-slate-50 dark:bg-slate-900/50">
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-10">
          <ScrollReveal>
            <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">
              Recent Work
            </p>
          </ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900 dark:text-slate-100"
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
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.003 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm card-ring flex flex-col"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 z-10"
                  style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
                />

                {/* Website preview screenshot */}
                {project.url && (
                  <div className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-800" style={{ height: "200px" }}>
                    {failed[i] ? (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}08)` }}
                      >
                        <span
                          className="font-display font-800 text-2xl"
                          style={{ color: project.accent, letterSpacing: "-0.02em" }}
                        >
                          {project.client}
                        </span>
                      </div>
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={`/api/screenshot?url=${encodeURIComponent(project.url)}`}
                        alt={`${project.client} website preview`}
                        className="w-full h-full object-cover object-top"
                        style={{ display: "block" }}
                        onError={() => setFailed((prev) => ({ ...prev, [i]: true }))}
                      />
                    )}
                    {/* Fade bottom edge */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                      style={{ background: "linear-gradient(to bottom, transparent, white)" }}
                    />
                  </div>
                )}

                {/* Info */}
                <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="text-xs font-700 px-2.5 py-1 rounded-full"
                      style={{ background: project.accent, color: "#0A0A0A" }}
                    >
                      {project.status}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 text-xs">{project.industry}</span>
                    <span className="text-slate-300 dark:text-slate-600">·</span>
                    <span className="text-slate-400 dark:text-slate-500 text-xs">{project.location}</span>
                    <span className="text-slate-300 dark:text-slate-600">·</span>
                    <span className="text-slate-400 dark:text-slate-500 text-xs">{project.year}</span>
                  </div>

                  {/* Name + tagline */}
                  <div>
                    <h3
                      className="font-display text-slate-900 dark:text-slate-50 font-800 mb-1.5"
                      style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.04em", lineHeight: 1.05 }}
                    >
                      {project.client}
                    </h3>
                    <p className="text-sm text-slate-400 dark:text-slate-500 italic">
                      &ldquo;{project.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* CTA */}
                  {project.url && (
                    <div className="flex items-center gap-3 pt-1">
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 text-sm font-700 px-5 py-2.5 rounded-xl"
                        style={{ background: project.accent, color: "#0A0A0A" }}
                      >
                        Visit Website <ArrowUpRight />
                      </motion.a>
                      <span className="text-slate-300 dark:text-slate-600 text-xs">{project.displayUrl}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
            <p className="text-slate-400 dark:text-slate-500 text-sm">
              More client projects coming soon.
            </p>
            <LiquidButton href="/#contact">Start Your Project →</LiquidButton>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
