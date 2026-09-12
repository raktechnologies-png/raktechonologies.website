"use client";

import { useState } from "react";
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
    accent: "#D4FF00",
  },
  {
    client:     "SonKhoz Advisory",
    url:        "https://www.sonkhozadvisory.co.za",
    displayUrl: "www.sonkhozadvisory.co.za",
    industry:   "Financial Advisory",
    location:   "Midrand, Johannesburg",
    year:       "2025",
    tagline:    "Where Data Meets Strategic Foresight.",
    accent: "#C2A476",
  },
];

export default function RecentProjects() {
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  return (
    <section className="section-pad relative bg-white dark:bg-[#0B0F1A]">
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="container-editorial px-6 md:px-10">

        {/* Header */}
        <div className="mb-16">
          <ScrollReveal>
            <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase font-label mb-4">
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
              <span className="text-indigo-600 dark:text-indigo-400">shipped.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Real clients. Real businesses. Built and launched by RAK Technologies.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Balanced 50/50 grid — image-led, no borders or shadows */}
        <div className="grid md:grid-cols-2 gap-x-[40px] gap-y-16">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div
                  className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-800"
                  style={{ aspectRatio: "16/10" }}
                >
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
                      style={{
                        display: "block",
                        transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                      onError={() => setFailed((prev) => ({ ...prev, [i]: true }))}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                  )}
                </div>

                {/* Title — 20px below image */}
                <div style={{ marginTop: "20px" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-slate-400 dark:text-slate-500 text-xs">{project.industry}</span>
                    <span className="text-slate-300 dark:text-slate-600">·</span>
                    <span className="text-slate-400 dark:text-slate-500 text-xs">{project.location}</span>
                    <span className="text-slate-300 dark:text-slate-600">·</span>
                    <span className="text-slate-400 dark:text-slate-500 text-xs">{project.year}</span>
                  </div>
                  <h3
                    className="font-display text-slate-900 dark:text-slate-50 font-800 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)", letterSpacing: "-0.03em" }}
                  >
                    {project.client}
                  </h3>
                  <p className="text-sm text-slate-400 dark:text-slate-500 italic">
                    &ldquo;{project.tagline}&rdquo;
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4">
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
