'use client'

/* ── ASH CURSOR ───────────────────────────────────────────────────────
   A fluid-simulation smoke trail that follows the pointer, plus a dot and
   a lagging ring in place of the arrow.

   The simulation itself is MIT-licensed work by Pavel Dobryakov, adapted
   in lib/vendor/ash-cursor.js — see that file's header for the licence and
   for what we changed.

   Scope is deliberate. This runs on the landing page only, on pointer
   devices only, and never when the visitor asks for reduced motion:

   - There is no hover cursor on a phone, so the trail would never show,
     and a full-viewport fluid sim is a real battery and fill-rate cost.
   - It must not follow anyone into the exam interface. A student writing
     an answer against the clock does not need smoke under their hands.

   The ring eases toward the pointer with a lerp on the animation frame.
   The effect is usually done with GSAP; six lines of arithmetic gets the
   same easing without another dependency in the bundle.
─────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useReducedMotion } from 'framer-motion'
import { useMobile } from '@/hooks/useMobile'

/** How quickly the ring catches up, per frame. Lower lags further behind. */
const EASE = 0.14

type Props = {
  /** True on the dark theme. The smoke only runs there — see below. */
  dark: boolean
  /** Replace the system arrow with the dot and ring. Off by default: the
   *  reference site keeps the arrow, and hiding it costs more in usability
   *  on a page full of links than the effect gains. */
  hideNativeCursor?: boolean
  /** Render this component's own dot-and-ring cursor replacement. Set to
   *  false when the host page already has its own cursor component, so the
   *  two don't render on top of each other. */
  showCursorDot?: boolean
}

export function AshCursor({ dark, hideNativeCursor = false, showCursorDot = true }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotRef    = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<HTMLDivElement>(null)
  const reduce    = useReducedMotion()
  const isMobile  = useMobile()

  /* Everything here is portalled to document.body, and that is load-bearing
     rather than tidiness. The landing page's outer wrapper carries an
     animated opacity, which makes it a stacking context and an isolated
     group. A mix-blend-mode inside an isolated group blends against that
     group's own backdrop, which starts empty — so difference blending had
     nothing to difference against and the opaque canvas showed through as
     a flat grey sheet over the entire page. Outside the wrapper, its
     backdrop is the page, and the blend does what it should. */
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const enabled = !reduce && !isMobile
  /* Gated on `mounted` too: the canvas only exists once the portal has
     rendered, and without this the simulation effect ran first, found a
     null ref and silently never started. */
  const smoke   = enabled && mounted

  /* Compositing differs by theme, because the simulation's display pass
     derives alpha from brightness and so can only ever add light.

     On dark, that is exactly right: a transparent canvas composited
     normally puts pale ash on a near-black ground.

     On light it is useless on its own, and the fix is the one the
     reference site uses. Turn TRANSPARENT off so the render pass paints
     black over the frame first. The canvas is then opaque: black where
     there is no smoke, grey where there is. Difference-blend that and
     black leaves the page untouched, because difference against black is
     the backdrop unchanged, while the grey wisps darken into soot. The
     low opacity is what keeps it a haze rather than a wash — the
     reference sets 0.17, and this is in that region.

     An earlier attempt at difference failed because the canvas was
     transparent: premultiplied alpha under a blend mode greyed the whole
     viewport. Opaque is the part that makes it work. */
  const composite = dark
    ? { transparent: true,  blend: 'normal'     as const, opacity: 0.55, ash: 0.52, tint: 0.24 }
    : { transparent: false, blend: 'difference' as const, opacity: 0.18, ash: 0.8,  tint: 0.20 }

  /* The simulation. Mounted once, torn down on unmount. */
  useEffect(() => {
    if (!smoke) return
    const canvas = canvasRef.current
    if (!canvas) return

    let teardown: (() => void) | undefined
    let cancelled = false

    /* Loaded on demand. The simulation is ~50KB of shader source and
       should not sit in the bundle that renders the page. */
    import('@/lib/vendor/ash-cursor')
      .then(({ initAshCursor }) => {
        if (cancelled || !canvasRef.current) return
        try {
          teardown = initAshCursor(canvasRef.current, {
            ash: composite.ash,
            tint: composite.tint,
            config: {
              TRANSPARENT: composite.transparent,
              BACK_COLOR: { r: 0, g: 0, b: 0 },
            },
          })
        } catch {
          /* No WebGL, a blocked context, a driver that will not compile the
             shaders. The page is unaffected; there is simply no trail. */
        }
      })
      .catch(() => { /* chunk failed to load; no trail, no error surfaced */ })

    return () => { cancelled = true; teardown?.() }
  }, [smoke, composite.ash, composite.tint, composite.transparent])

  /* The dot and the ring. One frame loop, and it only runs after the
     pointer has actually moved, so an untouched page costs nothing. */
  useEffect(() => {
    if (!enabled || !showCursorDot) return

    let raf: number | null = null
    let tx = -100, ty = -100          // where the pointer is
    let rx = -100, ry = -100          // where the ring has got to
    let moved = false

    const frame = () => {
      rx += (tx - rx) * EASE
      ry += (ty - ry) * EASE
      const dot = dotRef.current
      const ring = ringRef.current
      if (dot)  dot.style.transform  = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`
      if (ring) ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(frame)
    }

    const onMove = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY
      if (!moved) {
        moved = true
        rx = tx; ry = ty                       // start under the pointer, not at the corner
        document.documentElement.classList.add('ash-on')
        raf = requestAnimationFrame(frame)
      }
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf != null) cancelAnimationFrame(raf)
      document.documentElement.classList.remove('ash-on')
    }
  }, [enabled])

  if (!enabled || !mounted) return null

  return createPortal(
    <>
      <style>{`
        /* The dot and ring are hidden until the pointer moves, so they do
           not sit parked in a corner on a page nobody has touched yet. */
        .ash-dot, .ash-ring {
          position: fixed;
          top: 0;
          left: 0;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          z-index: 10000;
          /* Difference blending is what gives it the inverse look, and it
             is also what makes one colour work on both themes: white over
             the dark page stays white, white over the light page reads
             black. No per-theme colour needed. */
          mix-blend-mode: difference;
          will-change: transform;
        }
        .ash-on .ash-dot, .ash-on .ash-ring { opacity: 1; transition: opacity .3s ease; }

        /* A filled dot with a larger filled follower behind it, which is
           how the reference does it. An outlined ring read as a bubble with
           a shadow rather than as a cursor. */
        .ash-dot  { width: 10px; height: 10px; background: rgba(255,255,255,0.78); }
        .ash-ring { width: 22px; height: 22px; background: rgba(255,255,255,0.20); }

        ${hideNativeCursor ? `
        /* Scoped to the landing page. The arrow stays everywhere else, and
           keyboard focus rings are untouched either way. */
        .ash-cursor-page, .ash-cursor-page * { cursor: none !important; }
        ` : ''}

        @media (prefers-reduced-motion: reduce) {
          .ash-dot, .ash-ring { display: none; }
        }
      `}</style>

      {smoke && (
        <canvas
          /* A fresh element per theme, which is not cosmetic. Teardown
             force-loses the WebGL context, and a canvas whose context has
             been lost cannot be given a working one again. Reusing the
             element across a theme change therefore left the simulation
             dead on a canvas still holding its last opaque frame, which
             the difference blend turned into a grey wash over the page.
             Keying it makes React mount a new canvas instead. */
          key={dark ? 'ash-dark' : 'ash-light'}
          ref={canvasRef}
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9998,
            mixBlendMode: composite.blend,
            opacity: composite.opacity,
          }}
        />
      )}
      {showCursorDot && <div ref={dotRef}  className="ash-dot"  aria-hidden />}
      {showCursorDot && <div ref={ringRef} className="ash-ring" aria-hidden />}
    </>,
    document.body,
  )
}
