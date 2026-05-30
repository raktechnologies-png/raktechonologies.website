"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import LiquidButton from "@/components/ui/LiquidButton";

const projects = [
  {
    client:      "RAK'ENG",
    url:         "https://www.rakeng.co.za",
    displayUrl:  "www.rakeng.co.za",
    industry:    "Food & Beverage",
    sub:         "Seasonal Pop-Up Restaurant",
    location:    "Ga-Mphahlele, Seleteng, Limpopo",
    year:        "2025",
    tagline:     "Urban Street Food. Rural Heart.",
    description:
      "RAK'ENG is a bold seasonal pop-up restaurant operating since 2021 in rural Limpopo. RAK Technologies built them a full custom website capturing their high-energy street food brand — bringing their urban identity to life online and enabling event bookings across Limpopo and beyond.",
    deliverables: [
      "Custom website design & development",
      "Brand identity integration (black, white & lime)",
      "Menu showcase with seasonal episodes",
      "Event booking & enquiry system",
      "Mobile-first responsive layout",
      "SEO optimisation for local search",
    ],
    stack:  ["Next.js 14", "Tailwind CSS", "Bebas Neue", "Vercel"],
    brand:  { primary: "#D4FF00", bg: "#0A0A0A", text: "#FFFFFF" },
    status: "Live",
  },
];

// Arrow icon
const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                Real clients. Real problems. Real results — delivered end-to-end by RAK Technologies.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.003 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm card-ring"
              >
                {/* Top accent bar using client's brand colour */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${project.brand.primary}, transparent)` }}
                />

                <div className="p-8 md:p-10">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* ── Left: Project Info ─────────────────── */}
                    <div className="lg:col-span-7 flex flex-col gap-5">

                      {/* Client meta */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span
                          className="text-xs font-700 px-2.5 py-1 rounded-full"
                          style={{ background: project.brand.primary, color: project.brand.bg }}
                        >
                          {project.status}
                        </span>
                        <span className="text-slate-400 text-xs">{project.industry} · {project.sub}</span>
                        <span className="text-slate-300 text-xs">·</span>
                        <span className="text-slate-400 text-xs">{project.location}</span>
                        <span className="text-slate-300 text-xs">·</span>
                        <span className="text-slate-400 text-xs">{project.year}</span>
                      </div>

                      {/* Client name + tagline */}
                      <div>
                        <h3
                          className="font-display text-slate-900 font-800 mb-1"
                          style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", letterSpacing: "-0.035em", lineHeight: 1.05 }}
                        >
                          {project.client}
                        </h3>
                        <p className="text-sm font-600 italic" style={{ color: project.brand.primary === "#D4FF00" ? "#84910A" : project.brand.primary }}>
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
                          What we delivered
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                          {project.deliverables.map((d, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                              <span
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: project.brand.primary === "#D4FF00" ? "#84910A" : project.brand.primary }}
                              />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-600 px-3 py-1.5 rounded-lg border text-slate-500"
                            style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-3 pt-1">
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 text-sm font-600 px-5 py-2.5 rounded-xl transition-all duration-200"
                          style={{
                            background: project.brand.primary,
                            color: project.brand.bg,
                          }}
                        >
                          View Live Site <ArrowUpRight />
                        </motion.a>
                        <span className="text-slate-400 text-xs">{project.displayUrl}</span>
                      </div>
                    </div>

                    {/* ── Right: Brand Visual ────────────────── */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.02, rotate: -0.5 }}
                        transition={{ duration: 0.4 }}
                        className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100"
                        style={{ background: project.brand.bg, minHeight: 280 }}
                      >
                        {/* Brand card — mimics client's website aesthetic */}
                        <div className="p-8 flex flex-col h-full" style={{ minHeight: 280 }}>

                          {/* Top bar */}
                          <div className="flex items-center justify-between mb-8">
                            <div className="flex gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#333" }} />
                              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#333" }} />
                              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#333" }} />
                            </div>
                            <span
                              className="text-xs font-700 px-2.5 py-1 rounded-full"
                              style={{ background: project.brand.primary, color: project.brand.bg, letterSpacing: "0.05em" }}
                            >
                              LIVE
                            </span>
                          </div>

                          {/* Brand name */}
                          <div className="flex-1 flex flex-col justify-center gap-3">
                            <div
                              className="text-5xl font-900 leading-none tracking-tight"
                              style={{
                                color: project.brand.primary,
                                fontFamily: "'DM Sans', sans-serif",
                                letterSpacing: "-0.04em",
                                textShadow: `0 0 40px ${project.brand.primary}40`,
                              }}
                            >
                              RAK&apos;ENG
                            </div>
                            <div
                              className="text-xs font-600 tracking-widest uppercase"
                              style={{ color: "rgba(255,255,255,0.4)" }}
                            >
                              Urban Street Food · Rural Heart
                            </div>

                            {/* Colour palette */}
                            <div className="flex gap-2 mt-4">
                              {["#D4FF00", "#0A0A0A", "#FFFFFF"].map((c) => (
                                <div key={c} className="flex flex-col items-center gap-1.5">
                                  <div
                                    className="w-8 h-8 rounded-lg border"
                                    style={{ background: c, borderColor: "rgba(255,255,255,0.1)" }}
                                  />
                                  <span className="text-[9px] font-600" style={{ color: "rgba(255,255,255,0.3)" }}>
                                    {c}
                                  </span>
                                </div>
                              ))}
                              <div className="flex flex-col items-center gap-1.5 ml-2">
                                <div
                                  className="h-8 px-2.5 rounded-lg flex items-center border"
                                  style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}
                                >
                                  <span className="text-[10px] font-700" style={{ color: project.brand.primary, fontFamily: "sans-serif" }}>
                                    Aa
                                  </span>
                                </div>
                                <span className="text-[9px] font-600" style={{ color: "rgba(255,255,255,0.3)" }}>
                                  Bebas
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Footer URL */}
                          <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                              {project.displayUrl}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
            <p className="text-slate-400 text-sm">
              More projects coming soon as we grow our client portfolio.
            </p>
            <LiquidButton href="/contact">Start Your Project →</LiquidButton>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
