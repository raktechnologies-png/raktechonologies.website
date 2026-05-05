"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    id: "01",
    slug: "web",
    title: "Web Development",
    tagline: "Digital presence that converts",
    description:
      "From high-performance marketing sites to complex web applications, we engineer online platforms that are fast, accessible, and built to grow.",
    outcomes: ["Scalable architecture", "SEO-optimised", "Mobile-first"],
    accent: "#4F46E5",
    accentBg: "#EEF2FF",
    accentBorder: "#C7D2FE",
  },
  {
    id: "02",
    slug: "software",
    title: "Software Systems",
    tagline: "Custom-built, business-fit",
    description:
      "Off-the-shelf software rarely fits perfectly. We design and develop bespoke systems tailored to your exact operational requirements.",
    outcomes: ["Process automation", "System integration", "API development"],
    accent: "#7C3AED",
    accentBg: "#F5F3FF",
    accentBorder: "#DDD6FE",
  },
  {
    id: "03",
    slug: "data",
    title: "Data & Analytics",
    tagline: "Intelligence from your data",
    description:
      "Transform raw data into actionable intelligence. We build analytics pipelines, dashboards, and reporting systems that surface the insights you need.",
    outcomes: ["Real-time dashboards", "Predictive analytics", "Data pipelines"],
    accent: "#0284C7",
    accentBg: "#E0F2FE",
    accentBorder: "#BAE6FD",
  },
  {
    id: "04",
    slug: "automation",
    title: "Automation & AI",
    tagline: "Work smarter, not harder",
    description:
      "Eliminate repetitive tasks and accelerate decision-making with intelligent automation and AI-powered solutions tailored to your workflows.",
    outcomes: ["Process automation", "AI integrations", "Workflow optimisation"],
    accent: "#9333EA",
    accentBg: "#FAF5FF",
    accentBorder: "#E9D5FF",
  },
  {
    id: "05",
    slug: "consulting",
    title: "IT Consulting",
    tagline: "Strategy before execution",
    description:
      "Before writing a line of code, we align on strategy. Our consultants help you choose the right technologies, plan migrations, and optimise existing systems.",
    outcomes: ["Tech stack advisory", "System audits", "Digital roadmaps"],
    accent: "#059669",
    accentBg: "#ECFDF5",
    accentBorder: "#A7F3D0",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-36 relative bg-white">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <ScrollReveal>
              <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-4">
                What We Build
              </p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900 leading-[1.03] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 800 }}
            >
              End-to-End Technology
              <br />
              <span className="gradient-text">Solutions.</span>
            </AnimatedHeading>
          </div>
          <ScrollReveal delay={0.15} direction="left">
            <Link
              href="/services"
              className="group flex items-center gap-2 border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 font-500 px-6 py-3 rounded-xl text-sm transition-all duration-200 shrink-0"
            >
              View All Services
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </ScrollReveal>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-12 gap-4">
          {services.map((svc, i) => {
            const isWide = i === 0 || i === 3;
            return (
              <AnimatedCard
                key={svc.id}
                delay={i * 0.07}
                hoverY={-6}
                hoverScale={1.01}
                className={`group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm card-ring card-shimmer ${
                  isWide ? "md:col-span-7" : "md:col-span-5"
                }`}
                style={{ minHeight: isWide ? "clamp(160px, 25vw, 320px)" : "clamp(140px, 22vw, 280px)" }}
              >
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${svc.accent}12, transparent 70%)`,
                    transform: "translate(30%, -30%)",
                    filter: "blur(20px)",
                  }}
                />

                <div className="relative z-10 p-8 flex flex-col gap-5 h-full">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-600 tracking-wide uppercase px-3 py-1 rounded-full border"
                      style={{
                        color: svc.accent,
                        background: svc.accentBg,
                        borderColor: svc.accentBorder,
                      }}
                    >
                      {svc.tagline}
                    </span>
                    <span className="text-slate-300 text-xs font-600 font-display">{svc.id}</span>
                  </div>

                  {/* Title + description */}
                  <div className="flex flex-col gap-2.5">
                    <h3
                      className="font-display text-slate-900 font-700 leading-tight"
                      style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="hidden md:block text-slate-500 text-base leading-relaxed">{svc.description}</p>
                  </div>

                  {/* Outcomes */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {svc.outcomes.map((o) => (
                      <span
                        key={o}
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-100"
                      >
                        {o}
                      </span>
                    ))}
                  </div>

                  {/* Learn more */}
                  <div className="flex items-center gap-2 text-slate-300 group-hover:text-slate-700 transition-colors duration-300 mt-1">
                    <Link href={`/services#${svc.slug}`} className="text-sm font-500">
                      Learn more
                    </Link>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent)` }}
                />
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
