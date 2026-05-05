"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidButton from "@/components/ui/LiquidButton";
import PebbleGrid from "@/components/ui/PebbleGrid";

export default function CTABanner() {
  return (
    /* Dark-inverse section for maximum contrast after a light page */
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ background: "#0B0F1A" }}
    >
      {/* Live pebble grid — light lavender dots on dark bg */}
      <PebbleGrid color="165,180,252" className="opacity-40" />
      {/* Indigo glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(79,70,229,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.004 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl overflow-hidden border"
            style={{
              background: "linear-gradient(135deg, #111827 0%, #1E1B4B 50%, #111827 100%)",
              borderColor: "rgba(99,102,241,0.2)",
            }}
          >
            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(167,139,250,0.4), transparent)",
              }}
            />
            {/* Inner bloom */}
            <div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)",
                filter: "blur(60px)",
              }}
            />

            <div className="relative z-10 px-10 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
              {/* Left */}
              <div className="flex flex-col gap-4 max-w-2xl">
                <p className="text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase">
                  Ready to start?
                </p>
                <h2
                  className="font-display leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800 }}
                >
                  <span className="gradient-text-dark">Tell us your problem.</span>
                  <br />
                  <span className="gradient-text">We build the solution.</span>
                </h2>
                <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                  Whether you&apos;re starting from scratch, scaling an existing system, or automating
                  operations — share your challenge and we&apos;ll respond with a tailored technical approach.
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-4 items-center md:items-end shrink-0">
                <LiquidButton href="/contact" dark>
                  Request a Solution →
                </LiquidButton>
                <a
                  href="https://wa.link/d8eib5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 px-8 py-4 rounded-xl text-sm font-500 transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <p className="text-slate-600 text-xs">
                  We respond within 24h with a tailored technical approach
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
