"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

// What we build, as two rows of words drifting in opposite directions,
// followed by the three service areas as clickable tiles.
const ROW_A = ["Websites", "Online Stores", "Landing Pages", "SEO", "Business Sites", "Web Apps", "Booking Systems"];
const ROW_B = ["CRM Systems", "Custom Software", "Business Automation", "AI Integration", "Power BI Dashboards", "Client Portals", "Invoicing"];

const services = [
  {
    id: "01",
    title: "Web Development",
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
    icon: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  },
];

/**
 * One drifting row. Moved with requestAnimationFrame rather than a CSS
 * animation: phones in Low Power Mode / Reduce Motion report
 * prefers-reduced-motion and freeze CSS marquees (same fix as Partners).
 */
function DriftRow({ words, direction }: { words: string[]; direction: 1 | -1 }) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    let offset = direction === 1 ? -el.scrollWidth / 2 : 0;
    const speed = () => (window.innerWidth < 768 ? 38 : 30); // px per second

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const half = el.scrollWidth / 2;
      offset += direction * speed() * dt;
      if (half > 0) {
        if (direction === -1 && -offset >= half) offset += half;
        if (direction === 1 && offset >= 0) offset -= half;
      }
      el.style.transform = `translateX(${offset}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

  const chip = (w: string, i: number, hidden: boolean) => (
    <li
      key={`${hidden ? "b" : "a"}-${i}`}
      aria-hidden={hidden || undefined}
      className="shrink-0 mx-1.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 md:px-6 md:py-3 font-display font-600 text-cloud text-base md:text-xl tracking-tight whitespace-nowrap"
    >
      {w}
    </li>
  );

  return (
    <div className="overflow-hidden">
      <ul ref={ref} className="flex w-max will-change-transform">
        {words.map((w, i) => chip(w, i, false))}
        {words.map((w, i) => chip(w, i, true))}
      </ul>
    </div>
  );
}

export default function ServicesOverview() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy">
      {/* Header */}
      <div className="container-editorial px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <ScrollReveal>
              <p className="text-[#9DBDD4] text-xs font-600 tracking-[0.18em] uppercase font-label mb-4">
                What We Build
              </p>
            </ScrollReveal>
            <AnimatedHeading
              as="h2"
              delay={0.1}
              className="font-display !text-cloud leading-[1.05] tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800 }}
            >
              Everything your business needs{" "}
              <span className="!text-[#9DBDD4]">to thrive.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.15}>
              <p className="text-slate-300 text-base leading-relaxed">
                Three focused service areas, each scoped to your project during a short discovery call.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Link
              href="/solutions"
              className="inline-block shrink-0 text-sm font-600 text-cloud underline decoration-lime decoration-2 underline-offset-[6px] hover:text-lime"
            >
              We also offer IT Consulting &amp; Advisory →
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* Drifting rows — full bleed, faded at the edges */}
      <div className="relative mt-10 md:mt-14 flex flex-col gap-3" aria-label="Services we offer">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 z-10 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 z-10 bg-gradient-to-l from-navy to-transparent" />
        <DriftRow words={ROW_A} direction={-1} />
        <DriftRow words={ROW_B} direction={1} />
      </div>

      {/* Service tiles — clickable, so they light up lime */}
      <div className="container-editorial px-6 md:px-10 mt-10 md:mt-14">
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.id} delay={i * 0.06}>
              <Link
                href="/solutions"
                className="group flex items-center gap-4 rounded-2xl bg-white/[0.06] hover:bg-lime p-4 md:p-5 transition-colors duration-200"
              >
                <span className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-lime group-hover:bg-navy flex items-center justify-center shrink-0 transition-colors duration-200">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-navy group-hover:text-lime transition-colors duration-200" aria-hidden="true">
                    {svc.icon}
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-700 font-label tracking-[0.14em] text-slate-400 group-hover:text-navy/60">{svc.id}</span>
                  <span className="block font-display font-800 text-cloud group-hover:text-navy text-lg md:text-xl leading-tight">{svc.title}</span>
                </span>
                <span className="ml-auto text-lime group-hover:text-navy text-xl transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
