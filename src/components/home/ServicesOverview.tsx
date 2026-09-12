"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Modern, fast, responsive websites built with Next.js and Tailwind CSS. From landing pages to full-stack web applications.",
    accent: "#4F46E5",
  },
  {
    id: "02",
    title: "CRM Systems",
    description:
      "Purpose-built CRM platforms that manage your clients, projects, invoices, and workflows — all in one place.",
    accent: "#0284C7",
  },
  {
    id: "03",
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business. From internal tools and dashboards to full-stack applications.",
    accent: "#7C3AED",
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-pad relative bg-white dark:bg-[#0B0F1A]">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="container-editorial px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* Sticky left — title */}
          <div className="lg:w-[34%] lg:sticky lg:top-[150px] shrink-0">
            <ScrollReveal>
              <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase font-label mb-4">
                What We Build
              </p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display text-slate-900 dark:text-slate-100 leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)", fontWeight: 800 }}
            >
              Everything your business needs{" "}
              <span className="text-indigo-600 dark:text-indigo-400">to thrive.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-xs mb-8">
                Three focused service areas, each scoped to your project during a short discovery call.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="/#contact"
                className="inline-block text-sm font-600 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                We also offer IT Consulting &amp; Advisory →
              </a>
            </ScrollReveal>
          </div>

          {/* Right — borderless card stack */}
          <div className="flex-1 w-full flex flex-col">
            {services.map((svc) => (
              <ScrollReveal key={svc.id}>
                <div className="flex flex-col gap-3 py-9 border-t border-slate-200 dark:border-slate-800 last:border-b">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-700 font-label" style={{ color: svc.accent }}>
                      {svc.id}
                    </span>
                    <h3
                      className="font-display text-slate-900 dark:text-slate-50 font-800 leading-tight"
                      style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
                    >
                      {svc.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-xl">
                    {svc.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
