"use client";

import Image from "next/image";

const partners = [
  { name: "SAGEA — South African Graduate Employers Association", src: "/partners/sagea.png" },
  { name: "University of the Free State",                          src: "/partners/ufs.jpg" },
];

// Duplicated exactly once — must match the shared -50% marquee-track keyframe
// (tripling this broke the loop: the seam landed mid-cycle instead of on a repeat)
const track = [...partners, ...partners];

export default function PartnersSection() {
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

        <div className="flex w-max marquee-track" style={{ animationDuration: "28s" }}>
          {track.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 mx-14 md:mx-20"
              style={{ width: 460, height: 200 }}
            >
              <div
                className="relative w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:contrast-100 hover:opacity-100 transition-all duration-300"
              >
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
