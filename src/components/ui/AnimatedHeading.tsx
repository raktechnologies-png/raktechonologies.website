"use client";

/**
 * AnimatedHeading — scroll-triggered heading with optional gradient highlight.
 *
 * Usage:
 *   <AnimatedHeading as="h2" gradient="partial">
 *     We turn ideas into <span>scalable systems.</span>
 *   </AnimatedHeading>
 */

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, type ElementType } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: ElementType;
  delay?: number;
  duration?: number;
}

export default function AnimatedHeading({
  children,
  className,
  style,
  as: Tag = "h2",
  delay = 0,
  duration = 0.75,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag className={className} style={style}>{children}</Tag>
    </motion.div>
  );
}
