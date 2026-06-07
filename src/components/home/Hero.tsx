"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { EASE } from "@/lib/motion";
import PebbleGrid from "@/components/ui/PebbleGrid";
import LiquidButton from "@/components/ui/LiquidButton";

const metrics = [
  { value: "50+",  label: "Projects Delivered" },
  { value: "100%", label: "Client Retention" },
  { value: "5",    label: "Technology Domains" },
  { value: "3+",   label: "Years of Excellence" },
];

function useTimeGreeting() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening");
  }, []);
  return greeting;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY       = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const imageY         = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const greeting = useTimeGreeting();

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <PebbleGrid />
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 700, height: 700,
            top: "-20%", left: "35%",
            background: "radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Main grid: text left, image right ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full grid lg:grid-cols-2 gap-8 lg:gap-8 items-center pt-20 sm:pt-24 md:pt-28 pb-8 md:pb-12"
      >
        {/* ── Left: copy ── */}
        <div className="flex flex-col items-start text-left">
          {/* Greeting + badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            className="mb-5 sm:mb-7 flex flex-col gap-2"
          >
            {greeting && (
              <p className="text-slate-400 text-xs tracking-[0.16em] uppercase">
                {greeting}
              </p>
            )}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-xs font-500 tracking-wide shadow-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shrink-0" />
              South Africa&apos;s Premier IT Consulting Firm
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: EASE }}
            className="font-display text-slate-900 mb-5 sm:mb-7"
            style={{
              fontSize: "clamp(2rem, 7vw, 6.5rem)",
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
            }}
          >
            If it&apos;s tech,{" "}
            <span className="gradient-text">trust us</span>
            <br />
            <span className="text-slate-900">we can </span>
            <span className="gradient-text">build it.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8 sm:mb-10"
            style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            From websites and online stores to custom software, automation, and AI —
            we build the technology your business needs to grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: EASE }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
          >
            <LiquidButton href="/contact" className="w-full sm:w-auto justify-center">
              Request a Solution →
            </LiquidButton>
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 border border-slate-200 text-slate-600 font-500 px-7 py-4 rounded-xl text-base hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* ── Right: Futuristic AR Glasses image ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
          style={{ y: imageY }}
          className="flex items-center justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0"
        >
          <div className="relative w-full max-w-[480px] lg:max-w-none">
            {/* Glow behind */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, rgba(147,51,234,0.12) 0%, transparent 70%)",
                filter: "blur(24px)",
              }}
            />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100/60"
              style={{ aspectRatio: "3/4", maxHeight: "60vh" }}
            >
              <Image
                src="/Futuristic AR Glasses.png"
                alt="Futuristic augmented reality technology"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Edge fade — blends into white bg */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 60%, rgba(255,255,255,0.15) 100%)",
                }}
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
              className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-white border border-slate-100 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-lg flex items-center gap-3"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 text-xs font-600 leading-none mb-0.5">50+ Projects</p>
                <p className="text-slate-400 text-[11px]">Delivered across Africa</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Metrics strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-12 md:pb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-white px-4 sm:px-6 py-5 sm:py-6 flex flex-col gap-1 hover:bg-slate-50 transition-colors duration-200"
            >
              <span
                className="font-display gradient-text leading-none"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
              >
                {m.value}
              </span>
              <span className="text-slate-500 text-xs sm:text-sm">{m.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator — hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-slate-300 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(79,70,229,0.4), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
