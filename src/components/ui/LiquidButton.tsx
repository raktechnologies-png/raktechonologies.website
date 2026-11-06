"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  /** Renders as a Link when set; otherwise renders as a <button>. */
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** dark = for use on dark-background sections */
  dark?: boolean;
}

export default function LiquidButton({
  href,
  onClick,
  type = "button",
  disabled = false,
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
    if (!wrapperRef.current || disabled) return;
    const r = wrapperRef.current.getBoundingClientRect();
    setOrigin({
      x: ((e.clientX - r.left) / r.width)  * 100,
      y: ((e.clientY - r.top)  / r.height) * 100,
    });
    setFilled(true);
  };
  const onMouseLeave = () => setFilled(false);

  // Touch — fill from centre on press, release to clear
  const onTouchStart = () => { if (!disabled) { setOrigin({ x: 50, y: 50 }); setFilled(true); } };
  const onTouchEnd   = () => setFilled(false);

  // ── Visual tokens ────────────────────────────────────────────────────────
  // Brand rule: clickable = electric lime. Light sections get a solid lime
  // button that floods navy on hover; dark sections get a lime outline that
  // floods lime. Text on lime is always navy.
  const wrapperBase = dark
    ? "ring-1 ring-inset ring-lime/60 bg-transparent"
    : "bg-lime shadow-sm";

  const textDefault = dark ? "text-lime" : "text-navy";
  const textFilled = dark ? "text-navy" : "text-lime";
  const fillGradient = dark ? "#DBFF00" : "#102C40";

  const innerClassName = `relative z-10 inline-flex items-center justify-center gap-2.5 font-600 px-8 sm:px-9 py-4 text-base transition-colors duration-200 delay-75 ${
    filled ? textFilled : textDefault
  } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`;

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
        animate={filled && !disabled ? { scale: 140, opacity: 1 } : { scale: 0, opacity: 1 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      />

      {href ? (
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external    ? "noopener noreferrer" : undefined}
          className={innerClassName}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={innerClassName}
        >
          {children}
        </button>
      )}
    </div>
  );
}
