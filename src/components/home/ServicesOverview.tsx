"use client";

import Link from "next/link";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidButton from "@/components/ui/LiquidButton";

const services = [
  {
    id: "01",
    slug: "web",
    title: "Web Development",
    tagline: "Websites that work for your business",
    description:
      "Business websites, e-commerce stores, booking platforms, and web apps — designed to look great, load fast, and bring in clients.",
    accent: "#4F46E5",
    accentBg: "#EEF2FF",
    accentBorder: "#C7D2FE",
  },
  {
    id: "02",
    slug: "software",
    title: "Software Systems",
    tagline: "Built the way your business works",
    description:
      "Custom tools, dashboards, and platforms built from scratch — when off-the-shelf software doesn't fit your workflow.",
    accent: "#7C3AED",
    accentBg: "#F5F3FF",
    accentBorder: "#DDD6FE",
  },
  {
    id: "03",
    slug: "data",
    title: "Data & Analytics",
    tagline: "Know your numbers, make better decisions",
    description:
      "We turn your raw data into clear dashboards and reports so you always know how your business is performing.",
    accent: "#0284C7",
    accentBg: "#E0F2FE",
    accentBorder: "#BAE6FD",
  },
  {
    id: "04",
    slug: "automation",
    title: "Automation & AI",
    tagline: "Cut manual work, work smarter",
    description:
      "We automate the repetitive tasks your team handles daily and add AI features that make your business faster and smarter.",
    accent: "#9333EA",
    accentBg: "#FAF5FF",
    accentBorder: "#E9D5FF",
  },
  {
    id: "05",
    slug: "consulting",
    title: "IT Consulting",
    tagline: "Expert advice before you spend a cent",
    description:
      "Not sure what technology to use? We give you honest advice and a clear plan before you commit to building anything.",
    accent: "#059669",
    accentBg: "#ECFDF5",
    accentBorder: "#A7F3D0",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-12 md:py-20 relative bg-white">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10">
          <div>
            <ScrollReveal>
              <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-3">
                What We Build
              </p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900 leading-[1.03] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 800 }}
            >
              End-to-End Technology
              <br />
              <span className="gradient-text">Solutions.</span>
            </AnimatedHeading>
          </div>
          <ScrollReveal delay={0.15} direction="left">
            <div className="flex items-center gap-3">
              <LiquidButton href="/contact" className="shrink-0">
                Get Started →
              </LiquidButton>
              <Link
                href="/solutions"
                className="group flex items-center gap-2 border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 font-500 px-5 py-3 rounded-xl text-sm transition-all duration-200 shrink-0"
              >
                View All
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-12 gap-3">
          {services.map((svc, i) => {
            const isWide = i === 0 || i === 3;
            return (
              <AnimatedCard
                key={svc.id}
                delay={i * 0.07}
                hoverY={-4}
                hoverScale={1.01}
                className={`group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm card-ring card-shimmer ${
                  isWide ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                <div className="relative z-10 p-5 md:p-7 flex flex-col gap-3">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-600 tracking-wide px-3 py-1 rounded-full border"
                      style={{ color: svc.accent, background: svc.accentBg, borderColor: svc.accentBorder }}
                    >
                      {svc.tagline}
                    </span>
                    <span className="text-slate-300 text-xs font-600 font-display">{svc.id}</span>
                  </div>

                  {/* Title + description */}
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className="font-display text-slate-900 font-700 leading-tight"
                      style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{svc.description}</p>
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-400"
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
