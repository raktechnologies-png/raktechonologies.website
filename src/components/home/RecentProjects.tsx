"use client";

import Image from "next/image";
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
      "RAK'ENG is a bold seasonal pop-up restaurant bringing street food culture to rural Limpopo. We built them a full custom website — helping them reach more customers, showcase their menu, and take bookings for events.",
    deliverables: [
      "Brand new website design",
      "Menu & seasonal episodes showcase",
      "Event booking & enquiry system",
      "Mobile-friendly on all devices",
      "Launched & live on the internet",
    ],
    accent: "#D4FF00",
    bg:     "#0A0A0A",
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
    <section className="py-14 md:py-20 relative bg-white">
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
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
                />

                <div className="p-8 md:p-10">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* ── Left: Info ── */}
                    <div className="lg:col-span-7 flex flex-col gap-5">

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="text-xs font-700 px-2.5 py-1 rounded-full"
                          style={{ background: project.accent, color: project.bg }}
                        >
                          {project.status}
                        </span>
                        <span className="text-slate-400 text-xs">{project.industry}</span>
                        <span className="text-slate-300 text-xs">·</span>
                        <span className="text-slate-400 text-xs">{project.location}</span>
                        <span className="text-slate-300 text-xs">·</span>
                        <span className="text-slate-400 text-xs">{project.year}</span>
                      </div>

                      {/* Name & tagline */}
                      <div>
                        <h3
                          className="font-display text-slate-900 font-800 mb-1"
                          style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", letterSpacing: "-0.035em", lineHeight: 1.05 }}
                        >
                          {project.client}
                        </h3>
                        <p className="text-sm font-500 italic text-slate-400">
                          &ldquo;{project.tagline}&rdquo;
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Deliverables */}
                      <div>
                        <p className="text-slate-900 text-xs font-700 tracking-widest uppercase mb-3">
                          What we built
                        </p>
                        <ul className="flex flex-col gap-2">
                          {project.deliverables.map((d, j) => (
                            <li key={j} className="flex items-center gap-2.5 text-sm text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-indigo-400" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-3 pt-1">
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 text-sm font-600 px-5 py-2.5 rounded-xl"
                          style={{ background: project.accent, color: project.bg }}
                        >
                          Visit Website <ArrowUpRight />
                        </motion.a>
                        <span className="text-slate-400 text-xs">{project.displayUrl}</span>
                      </div>
                    </div>

                    {/* ── Right: Logo Visual ── */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex items-center justify-center"
                        style={{ background: project.bg, minHeight: 280 }}
                      >
                        <div className="relative w-48 h-48">
                          <Image
                            src={project.logo}
                            alt={`${project.client} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer note */}
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
