"use client";

/**
 * AnimatedCard — scroll-reveal wrapper with hover lift effect.
 * Composes ScrollReveal entrance + Framer Motion whileHover.
 *
 * Usage:
 *   <AnimatedCard delay={0.1} className="bg-white rounded-2xl border border-slate-100 p-8">
 *     ...content
 *   </AnimatedCard>
 */

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  hoverY?: number;
  hoverScale?: number;
  duration?: number;
}

export default function AnimatedCard({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
  hoverY = -5,
  hoverScale = 1.01,
  duration = 0.6,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const offsets = {
    up:    { y: 28, x: 0 },
    left:  { y: 0, x: 28 },
    right: { y: 0, x: -28 },
    none:  { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...offsets[direction] }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: hoverY, scale: hoverScale }}
      style={{ willChange: "transform", ...style }}
    >
      {children}
    </motion.div>
  );
}
