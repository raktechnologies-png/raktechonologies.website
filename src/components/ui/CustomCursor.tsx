"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { SPRING } from "@/lib/motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot — nearly instant, just enough spring to feel physical
  const dotX = useSpring(mouseX, SPRING.cursor);
  const dotY = useSpring(mouseY, SPRING.cursor);

  // Ring — noticeably lagging for premium feel
  const ringX = useSpring(mouseX, SPRING.ring);
  const ringY = useSpring(mouseY, SPRING.ring);

  // Prevent setState thrash — only update when pointer state flips
  const pointerRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const isClickable = (el: Element): boolean => {
      const tag = el.tagName;
      if (["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"].includes(tag)) return true;
      if (el.getAttribute("role") === "button") return true;
      if (el.closest("a, button, [role='button']")) return true;
      return false;
    };

    // Track latest viewport coords so scroll handler can reuse them
    const lastPos = { x: -200, y: -200 };

    const onMove = (e: MouseEvent) => {
      lastPos.x = e.clientX;
      lastPos.y = e.clientY;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const next = el ? isClickable(el) : false;
      if (next !== pointerRef.current) {
        pointerRef.current = next;
        setIsPointer(next);
      }
    };

    // Reposition dot/ring when page scrolls without mouse movement
    const onScroll = () => {
      if (lastPos.x === -200) return;
      mouseX.set(lastPos.x);
      mouseY.set(lastPos.y);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll",    onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll",    onScroll);
    };
  }, [mouseX, mouseY]);

  if (!mounted || isTouch) return null;

  return (
    <>
      {/* Ring — laggy outer circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-indigo-400/50"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale:   isPointer ? 1.45 : 1,
          opacity: isPointer ? 0.75 : 0.4,
          width:   32,
          height:  32,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />

      {/* Dot — snappy inner fill */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-indigo-500"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width:  8,
          height: 8,
        }}
        animate={{
          scale:           isPointer ? 1.7 : 1,
          backgroundColor: isPointer ? "#7C3AED" : "#4F46E5",
        }}
        transition={{ duration: 0.14, ease: "easeOut" }}
      />
    </>
  );
}
