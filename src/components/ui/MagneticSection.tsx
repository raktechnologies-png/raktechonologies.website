"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Max horizontal shift in px (default 14) */
  maxX?: number;
  /** Max vertical shift in px (default 8) */
  maxY?: number;
}

export default function MagneticSection({
  children,
  className,
  style,
  maxX = 14,
  maxY = 8,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const tX = useTransform(rawX, [-0.5, 0.5], [-maxX, maxX]);
  const tY = useTransform(rawY, [-0.5, 0.5], [-maxY, maxY]);

  const x = useSpring(tX, { stiffness: 80, damping: 22, mass: 0.9 });
  const y = useSpring(tY, { stiffness: 80, damping: 22, mass: 0.9 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width  - 0.5);
    rawY.set((e.clientY - r.top)  / r.height - 0.5);
  };

  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div style={{ x, y }}>
        {children}
      </motion.div>
    </div>
  );
}
