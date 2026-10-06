"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

const partners = [
  { name: "SAGEA — South African Graduate Employers Association", src: "/partners/sagea.png" },
  { name: "University of the Free State",                          src: "/partners/ufs.jpg" },
];

// Duplicated once so the first half scrolls fully out as the second takes its place.
const track = [...partners, ...partners];

export default function PartnersSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  // JS-driven scroll instead of a CSS marquee: the CSS animation was being
  // frozen on phones in Low Power Mode / Reduce Motion (both make the browser
  // report prefers-reduced-motion: reduce), so the strip sat still. A rAF loop
  // moves it reliably on every device.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    let offset = 0;
    let last = performance.now();

    // Faster on mobile, where the strip is narrow and a slow crawl reads as stalled.
    const speed = () => (window.innerWidth < 768 ? 90 : 45); // px per second

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      offset -= speed() * dt;
      const half = el.scrollWidth / 2;
      if (half > 0 && -offset >= half) offset += half; // seamless wrap
      el.style.transform = `translateX(${offset}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative py-8 md:py-10 bg-white overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="container-editorial px-6 md:px-10 mb-4">
        <p className="text-slate-400 text-xs font-600 tracking-[0.18em] uppercase font-label text-center">
          Our Partners
        </p>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <div ref={trackRef} className="flex w-max will-change-transform">
          {track.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 mx-14 md:mx-20"
              style={{ width: 460, height: 200 }}
            >
              <div className="relative w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:contrast-100 hover:opacity-100 transition-all duration-300">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  className="object-contain"
                  sizes="460px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
