"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** dark = for use on dark-background sections */
  dark?: boolean;
}

export default function LiquidButton({
  href,
  children,
  className,
  external,
  dark = false,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [filled, setFilled] = useState(false);

  // Mouse — desktop liquid fill from cursor entry point
  const onMouseEnter = (e: React.MouseEvent) => {
    if (!wrapperRef.current) return;
    const r = wrapperRef.current.getBoundingClientRect();
    setOrigin({
      x: ((e.clientX - r.left) / r.width)  * 100,
      y: ((e.clientY - r.top)  / r.height) * 100,
    });
    setFilled(true);
  };
  const onMouseLeave = () => setFilled(false);

  // Touch — fill from centre on press, release to clear
  const onTouchStart = () => { setOrigin({ x: 50, y: 50 }); setFilled(true); };
  const onTouchEnd   = () => setFilled(false);

  // ── Visual tokens ────────────────────────────────────────────────────────
  const wrapperBase = dark
    ? "border border-white/20 bg-transparent"
    : "border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-900 shadow-sm";

  const textDefault = dark ? "text-white" : "text-indigo-600 dark:text-indigo-400";
  const fillGradient = "linear-gradient(135deg, #4F46E5, #7C3AED)";

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-flex overflow-hidden rounded-xl ${wrapperBase} ${className ?? ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Liquid fill circle */}
      <motion.span
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full"
        style={{
          left:       `${origin.x}%`,
          top:        `${origin.y}%`,
          translateX: "-50%",
          translateY: "-50%",
          background: fillGradient,
          width:  10,
          height: 10,
        }}
        animate={filled ? { scale: 60, opacity: 1 } : { scale: 0, opacity: 1 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      />

      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external    ? "noopener noreferrer" : undefined}
        className={`relative z-10 inline-flex items-center justify-center gap-2.5 font-600 px-8 sm:px-9 py-4 text-base transition-colors duration-200 delay-75 ${
          filled ? "text-white" : textDefault
        }`}
      >
        {children}
      </Link>
    </div>
  );
}
