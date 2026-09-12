"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { EASE } from "@/lib/motion";
import LiquidButton from "@/components/ui/LiquidButton";
import { useSEOAudit } from "@/context/SEOAuditContext";

function useTimeGreeting() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening");
  }, []);
  return greeting;
}

export default function Hero() {
  const greeting = useTimeGreeting();
  const { open: openAudit } = useSEOAudit();

  return (
    <section className="relative section-pad bg-white dark:bg-[#0B0F1A]">
      <div className="container-editorial px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div className="flex flex-col items-start text-left">
            {greeting && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
                className="text-slate-400 dark:text-slate-500 text-xs tracking-[0.16em] uppercase font-label mb-4"
              >
                {greeting}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
              className="font-display text-slate-900 dark:text-slate-100 mb-7"
              style={{
                fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
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
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mb-9"
              style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
            >
              From websites and online stores to custom software, automation, and AI —
              we build the technology your business needs to grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: EASE }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <LiquidButton href="/#contact" className="w-full sm:w-auto justify-center">
                Request a Solution →
              </LiquidButton>
              <LiquidButton onClick={openAudit} className="w-full sm:w-auto justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                Free SEO Audit
                <span className="text-[10px] font-700 px-1.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 leading-none">
                  FREE
                </span>
              </LiquidButton>
            </motion.div>
          </div>

          {/* ── Right: image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: EASE }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] lg:max-w-none">
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, rgba(147,51,234,0.12) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100/60 dark:border-slate-700/40"
                style={{ aspectRatio: "3/4", maxHeight: "60vh" }}
              >
                <Image
                  src="/Futuristic AR Glasses.png"
                  alt="Futuristic augmented reality technology"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(255,255,255,0.15) 100%)" }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-lg flex items-center gap-3"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round">
                    <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-slate-50 text-xs font-600 font-figures leading-none mb-0.5">50+ Projects</p>
                  <p className="text-slate-400 dark:text-slate-500 text-[11px]">Delivered across Africa</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
