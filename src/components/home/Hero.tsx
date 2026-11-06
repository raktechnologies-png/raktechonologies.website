"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LiquidButton from "@/components/ui/LiquidButton";

function useTimeGreeting() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening");
  }, []);
  return greeting;
}

// Entrance animations are CSS (.rise) rather than framer-motion, so the
// headline and image paint immediately instead of waiting for hydration.
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  const greeting = useTimeGreeting();

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#102C40] pt-[92px] pb-14 md:pt-[110px] md:pb-[88px] lg:pt-[120px] lg:pb-[120px]">
      <div className="container-editorial px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Copy ── */}
          <div className="flex flex-col items-start text-left">
            <p
              className="rise text-slate-400 dark:text-slate-500 text-xs tracking-[0.16em] uppercase font-label mb-4 min-h-[1.2em]"
              style={delay(0)}
            >
              {greeting || " "}
            </p>

            <h1
              className="rise font-display text-slate-900 dark:text-slate-100 mb-6"
              style={{
                ...delay(80),
                fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
              }}
            >
              If it&apos;s tech,{" "}
              <span className="gradient-text">trust us</span>
              <br />
              <span className="text-slate-900 dark:text-slate-100">we can </span>
              <span className="gradient-text">build it.</span>
            </h1>

            <p
              className="rise text-slate-500 dark:text-slate-400 text-[17px] sm:text-lg leading-relaxed max-w-lg mb-8"
              style={{ ...delay(180), fontWeight: 400, letterSpacing: "-0.01em" }}
            >
              From websites and online stores to custom software, automation, and AI —
              we build the technology your business needs to grow. Based in Pretoria,
              working with businesses across South Africa.
            </p>

            <div className="rise flex items-center gap-6 w-full sm:w-auto" style={delay(260)}>
              <LiquidButton href="/#contact" className="flex-1 sm:flex-none justify-center">
                Request a Solution →
              </LiquidButton>
              <a
                href="/#projects"
                className="shrink-0 text-[15px] font-600 text-slate-900 dark:text-slate-100 underline decoration-lime decoration-2 underline-offset-[6px] hover:decoration-[3px]"
              >
                See our work
              </a>
            </div>
          </div>

          {/* ── Image ── */}
          <div className="rise flex items-center justify-center lg:justify-end" style={delay(200)}>
            <div className="relative w-full max-w-[520px] lg:max-w-none pr-3 pb-3 lg:pr-0 lg:pb-0">
              {/* Offset navy frame — gives the card depth on small screens */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-navy dark:bg-slate-800 lg:hidden" aria-hidden="true" />

              <div className="relative rounded-3xl lg:rounded-2xl overflow-hidden shadow-2xl aspect-[5/4] lg:aspect-[3/4] lg:max-h-[60vh]">
                <Image
                  src="/futuristic-ar-glasses.webp"
                  alt="Augmented-reality technology — custom software and AI by RAK Technologies"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[50%_30%]"
                  priority
                  fetchPriority="high"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(16,44,64,0.78) 0%, rgba(16,44,64,0.15) 45%, transparent 70%)" }}
                />

                {/* Stat — inside the image on every screen size */}
                <div className="absolute left-4 right-4 bottom-4 sm:left-5 sm:bottom-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cloud flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#102C40" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-base font-700 font-figures leading-none mb-1">50+ Projects</p>
                    <p className="text-slate-200 text-xs">Delivered across Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
