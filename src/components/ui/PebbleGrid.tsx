"use client";

/**
 * PebbleGrid — canvas-rendered dot grid that repels from the cursor.
 * Each dot lerps back to its origin when the cursor moves away.
 * Uses requestAnimationFrame, IntersectionObserver (pauses off-screen),
 * and ResizeObserver. Fully pointer-events-none so it never blocks UI.
 */

import { useEffect, useRef } from "react";

// ── Tuning constants ─────────────────────────────────────────────────────────
const GAP    = 38;   // px between dot origins
const R0     = 1.5;  // base dot radius
const R1     = 6.5;  // max dot radius when cursor is closest
const FIELD  = 95;   // repulsion radius in px
const PUSH   = 24;   // max push distance in px
const SPD    = 0.14; // lerp coefficient per frame (0–1)
const O0     = 0.14; // base dot opacity
const O1     = 0.52; // max dot opacity when cursor is closest

interface Dot {
  ox: number; oy: number;  // origin
  x:  number; y:  number;  // current position (lerped)
  tx: number; ty: number;  // target position
  r:  number; tr: number;  // current / target radius
  o:  number; to: number;  // current / target opacity
}

interface Props {
  className?: string;
  /** Dot color as "R,G,B". Default: "79,70,229" (indigo for light bg). Use "165,180,252" for dark bg. */
  color?: string;
}

export default function PebbleGrid({ className, color = "79,70,229" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let animId  = 0;
    let running = false;
    const mouse = { x: -9999, y: -9999 };

    // ── Build the dot grid centred in the canvas ──────────────────────────
    const buildDots = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cols = Math.ceil(w / GAP) + 1;
      const rows = Math.ceil(h / GAP) + 1;
      const offX = (w - (cols - 1) * GAP) / 2;
      const offY = (h - (rows - 1) * GAP) / 2;
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offX + c * GAP;
          const y = offY + r * GAP;
          dots.push({ ox: x, oy: y, x, y, tx: x, ty: y, r: R0, tr: R0, o: O0, to: O0 });
        }
      }
    };

    // ── Resize handler ────────────────────────────────────────────────────
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width  = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      buildDots();
    };

    // ── Animation loop ────────────────────────────────────────────────────
    const tick = () => {
      if (!running) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouse.x;
      const my = mouse.y;

      for (const d of dots) {
        const dx   = d.ox - mx;
        const dy   = d.oy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < FIELD) {
          // Quadratic falloff — closer = stronger
          const f = (1 - dist / FIELD) ** 2;
          const ang = Math.atan2(dy, dx);
          d.tx = d.ox + Math.cos(ang) * f * PUSH;
          d.ty = d.oy + Math.sin(ang) * f * PUSH;
          d.tr = R0 + f * (R1 - R0);
          d.to = O0 + f * (O1 - O0);
        } else {
          d.tx = d.ox;  d.ty = d.oy;
          d.tr = R0;    d.to = O0;
        }

        // Lerp everything toward targets
        d.x += (d.tx - d.x) * SPD;
        d.y += (d.ty - d.y) * SPD;
        d.r += (d.tr - d.r) * SPD;
        d.o += (d.to - d.o) * SPD;

        ctx.beginPath();
        ctx.arc(d.x, d.y, Math.max(0.1, d.r), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${d.o.toFixed(3)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (running) return;
      running = true;
      animId = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      running = false;
      cancelAnimationFrame(animId);
    };

    // ── Global mouse tracker (window-level so it works under overlapping UI) ──
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    // ── Pause when off-screen ─────────────────────────────────────────────
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startLoop();
      } else {
        stopLoop();
        mouse.x = -9999;
        mouse.y = -9999;
      }
    }, { threshold: 0 });

    // ── Setup ─────────────────────────────────────────────────────────────
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement ?? canvas);

    // Skip animation loop on touch-only / reduced-motion devices
    const hasFinePonter = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFinePonter || prefersReduced) {
      resize();
      return () => { ro.disconnect(); };
    }

    resize();
    io.observe(canvas);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      stopLoop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
