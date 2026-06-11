"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

function LiquidAccentButton({
  href,
  accent,
  accentBg,
  accentBorder,
  children,
}: {
  href: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [filled, setFilled] = useState(false);

  const onMouseEnter = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setOrigin({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    setFilled(true);
  };

  return (
    <div
      ref={ref}
      className="relative inline-flex overflow-hidden rounded-xl w-full"
      style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setFilled(false)}
      onTouchStart={() => { setOrigin({ x: 50, y: 50 }); setFilled(true); }}
      onTouchEnd={() => setFilled(false)}
    >
      <motion.span
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full"
        style={{ left: `${origin.x}%`, top: `${origin.y}%`, translateX: "-50%", translateY: "-50%", background: accent, width: 10, height: 10 }}
        animate={filled ? { scale: 60, opacity: 1 } : { scale: 0, opacity: 1 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      />
      <a
        href={href}
        className={`relative z-10 inline-flex items-center justify-center gap-2 text-sm font-600 px-5 py-2.5 w-full transition-colors duration-200 delay-75 ${filled ? "text-white" : ""}`}
        style={filled ? {} : { color: accent }}
      >
        {children}
      </a>
    </div>
  );
}

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Modern, fast, responsive websites built with Next.js and Tailwind CSS. From landing pages to full-stack web applications.",
    features: ["Custom Design", "Mobile-First", "SEO Optimised", "Lightning Fast"],
    pricePrefix: "From",
    price: "R4,500",
    priceNote: "Starter websites & landing pages",
    accent: "#4F46E5",
    accentBg: "#EEF2FF",
    accentBorder: "#C7D2FE",
  },
  {
    id: "02",
    title: "CRM Systems",
    description:
      "Purpose-built CRM platforms that manage your clients, projects, invoices, and workflows — all in one place.",
    features: ["Client Management", "Invoicing", "Project Tracking", "Analytics & Reports"],
    pricePrefix: "From",
    price: "R15,000",
    priceNote: "Full business hub & CRM",
    accent: "#0284C7",
    accentBg: "#E0F2FE",
    accentBorder: "#BAE6FD",
  },
  {
    id: "03",
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business. From internal tools and dashboards to full-stack applications.",
    features: ["Custom Applications", "API Development", "System Integration", "Scalable Architecture"],
    pricePrefix: null,
    price: "Custom",
    priceNote: "Scoped to your project",
    accent: "#7C3AED",
    accentBg: "#F5F3FF",
    accentBorder: "#DDD6FE",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-12 md:py-20 relative bg-white dark:bg-[#0B0F1A]">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <ScrollReveal>
            <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-3">
              What We Build
            </p>
          </ScrollReveal>
          <AnimatedHeading
            delay={0.1}
            className="font-display text-slate-900 dark:text-slate-100 leading-[1.03] tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.25rem)", fontWeight: 800 }}
          >
            Everything your business needs{" "}
            <span className="gradient-text">to thrive.</span>
          </AnimatedHeading>
          <ScrollReveal delay={0.15}>
            <p className="text-slate-400 dark:text-slate-500 text-sm">
              Transparent starting prices — final scope confirmed during discovery.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-column horizontal cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <AnimatedCard
              key={svc.id}
              delay={i * 0.1}
              hoverY={-6}
              className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm card-ring card-shimmer flex flex-col"
            >
              {/* Top accent bar */}
              <div
                className="h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent)` }}
              />

              <div className="flex flex-col flex-1 p-7 gap-5">
                {/* Number + title + description */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-700 font-display" style={{ color: svc.accent }}>
                    {svc.id}
                  </span>
                  <h3
                    className="font-display text-slate-900 dark:text-slate-50 font-800 leading-tight"
                    style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                {/* Feature checklist */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {svc.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: svc.accentBg, border: `1px solid ${svc.accentBorder}` }}
                      >
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke={svc.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 text-xs font-500">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price block */}
                <div className="mt-auto">
                  <div className="h-px bg-slate-100 dark:bg-slate-800 mb-4" />
                  <div className="flex items-baseline gap-1.5 mb-0.5">
                    {svc.pricePrefix && (
                      <span className="text-slate-400 dark:text-slate-500 text-xs font-500">{svc.pricePrefix}</span>
                    )}
                    <span
                      className="font-display font-800 leading-none tracking-tight"
                      style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: svc.accent }}
                    >
                      {svc.price}
                    </span>
                  </div>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mb-4">{svc.priceNote}</p>

                  <LiquidAccentButton
                    href="/#contact"
                    accent={svc.accent}
                    accentBg={svc.accentBg}
                    accentBorder={svc.accentBorder}
                  >
                    Get Started
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </LiquidAccentButton>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* IT Consulting callout */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-5">
            <div className="flex items-start gap-4">
              <span className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900 flex items-center justify-center shrink-0 text-indigo-500 dark:text-indigo-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                </svg>
              </span>
              <div>
                <p className="text-slate-800 dark:text-slate-200 text-sm font-600">We also offer IT Consulting &amp; Advisory</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
                  Need something custom or not sure where to start? Reach out and let&apos;s talk.
                </p>
              </div>
            </div>
            <a
              href="/#contact"
              className="shrink-0 text-sm font-600 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors whitespace-nowrap"
            >
              Let&apos;s Talk →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
