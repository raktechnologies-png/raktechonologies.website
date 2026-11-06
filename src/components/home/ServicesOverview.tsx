"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Modern, fast, responsive websites built with Next.js and Tailwind CSS. From landing pages to full-stack web applications.",
    tags: ["Business sites", "Online stores", "SEO-ready"],
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 8h18M8 21h8M12 18v3" />
      </>
    ),
  },
  {
    id: "02",
    title: "CRM Systems",
    description:
      "Purpose-built CRM platforms that manage your clients, projects, invoices, and workflows — all in one place.",
    tags: ["Clients", "Invoicing", "Pipelines"],
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19c.7-3 2.9-4.6 5.5-4.6s4.8 1.6 5.5 4.6" />
        <path d="M16 6.5h5M16 10h5M17.5 13.5H21" />
      </>
    ),
  },
  {
    id: "03",
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business. From internal tools and dashboards to full-stack applications.",
    tags: ["Dashboards", "Automation", "AI"],
    icon: (
      <>
        <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
      </>
    ),
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-pad relative bg-cloud dark:bg-[#102C40]">
      <div className="container-editorial px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

          {/* Sticky left — title */}
          <div className="lg:w-[34%] lg:sticky lg:top-[150px] shrink-0">
            <ScrollReveal>
              <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase font-label mb-4">
                What We Build
              </p>
            </ScrollReveal>
            <AnimatedHeading
              as="h2"
              delay={0.1}
              className="font-display text-slate-900 dark:text-slate-100 leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 3.2vw, 2.75rem)", fontWeight: 800 }}
            >
              Everything your business needs{" "}
              <span className="text-indigo-600 dark:text-indigo-400">to thrive.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-sm mb-6">
                Three focused service areas, each scoped to your project during a short discovery call.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="/solutions"
                className="inline-block text-sm font-600 text-slate-900 dark:text-slate-100 underline decoration-lime decoration-2 underline-offset-[6px] hover:decoration-[3px]"
              >
                We also offer IT Consulting &amp; Advisory →
              </a>
            </ScrollReveal>
          </div>

          {/* Right — service cards */}
          <div className="flex-1 w-full grid gap-4 md:gap-5">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.id} delay={i * 0.06}>
                <article className="group relative rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/5">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-navy dark:bg-cloud flex items-center justify-center shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="text-cloud dark:text-navy" aria-hidden="true">
                        {svc.icon}
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-700 font-label tracking-[0.14em] text-slate-400">{svc.id}</span>
                      <h3
                        className="font-display text-slate-900 dark:text-slate-50 font-800 leading-tight mt-0.5 mb-2"
                        style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)" }}
                      >
                        {svc.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-[15px] md:text-base leading-relaxed">
                        {svc.description}
                      </p>
                      <ul className="flex flex-wrap gap-2 mt-4">
                        {svc.tags.map((t) => (
                          <li key={t} className="text-xs font-500 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 rounded-full px-3 py-1">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
