"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show on the very first load per browser session
    if (!sessionStorage.getItem("rak-loader")) {
      sessionStorage.setItem("rak-loader", "1");
      setShow(true);
      const t = setTimeout(() => setShow(false), 2200);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-8"
          style={{ willChange: "opacity" }}
        >
          {/* Subtle ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(79,70,229,0.05) 0%, transparent 70%)" }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.65, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Halo ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.35, opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-indigo-200"
            />
            <div className="w-20 h-20 rounded-full overflow-hidden border border-slate-200 bg-white shadow-xl">
              <img
                src="/rak-logo.png"
                alt="RAK Technologies"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-1"
          >
            <span
              className="font-display font-800 text-slate-900 tracking-tight"
              style={{ fontSize: "1.35rem", letterSpacing: "-0.03em" }}
            >
              RAK
              <span
                style={{
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Technologies
              </span>
            </span>
            <span className="text-slate-400 text-xs tracking-[0.18em] uppercase">
              Premium IT Consulting
            </span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="w-36 h-0.5 bg-slate-100 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full rounded-full"
              style={{ background: "linear-gradient(90deg, #4F46E5, #7C3AED)" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
