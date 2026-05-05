"use client";

/**
 * AnimatedSection — scroll-triggered stagger container.
 * Children receive staggered fade-up entrance when the section enters the viewport.
 *
 * Usage:
 *   <AnimatedSection stagger={0.08}>
 *     <p>Animated child 1</p>
 *     <p>Animated child 2</p>
 *   </AnimatedSection>
 */

import { motion, useInView } from "framer-motion";
import React, { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  stagger?: number;      // delay between each child (seconds)
  delay?: number;        // initial delay before stagger starts
  duration?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

const containerVariants = (stagger: number, delay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const EASE = [0.22, 1, 0.36, 1] as const;

const childVariants = (duration: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: EASE },
  },
});

export function AnimatedSectionItem({
  children,
  className,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div variants={childVariants(duration)} className={className}>
      {children}
    </motion.div>
  );
}

export default function AnimatedSection({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  duration = 0.6,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Re-export childVariants for consumers that wrap manually */}
      {children}
    </motion.div>
  );
}

/* Named export of child variant so consumers can use `motion.div variants={itemVariants}` */
export { childVariants as itemVariants };
