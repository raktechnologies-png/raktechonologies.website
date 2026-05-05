// Shared motion constants — import these instead of inlining magic numbers.

export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT = [0, 0, 0.2, 1] as const;
export const EASE_IN = [0.4, 0, 1, 1] as const;

export const DURATION = {
  fast:   0.3,
  base:   0.5,
  slow:   0.65,
  vslow:  0.85,
} as const;

export const SPRING = {
  snappy:  { stiffness: 600,  damping: 40,  mass: 0.3 },
  smooth:  { stiffness: 200,  damping: 28,  mass: 0.5 },
  gentle:  { stiffness: 120,  damping: 20,  mass: 0.8 },
  cursor:  { stiffness: 2000, damping: 80,  mass: 0.2 },
  ring:    { stiffness: 180,  damping: 22,  mass: 0.6 },
} as const;

// Reusable fade-up variant factory
export const fadeUp = (delay = 0, duration = DURATION.slow) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration, delay, ease: EASE } },
});

// Stagger container factory
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden:  {},
  visible: { transition: { staggerChildren, delayChildren } },
});
