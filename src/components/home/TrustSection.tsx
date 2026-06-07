"use client";

import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticSection from "@/components/ui/MagneticSection";
import LiquidButton from "@/components/ui/LiquidButton";

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Scalable Architecture",
    description: "We architect systems that grow with your business — no costly rewrites as you scale.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "End-to-End Delivery",
    description: "From requirement gathering to deployment and beyond — one team owns your entire project.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
      </svg>
    ),
    title: "Proven Outcomes",
    description: "We measure success by the impact we create — not just the code we ship.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Rapid Delivery",
    description: "Agile methodologies and tight feedback loops mean faster launches without compromised quality.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-12 md:py-20 relative bg-slate-50">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left — headline */}
          <MagneticSection className="flex flex-col gap-6" maxX={12} maxY={6}>
            <ScrollReveal>
              <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase">
                Our Commitment
              </p>
            </ScrollReveal>
            <AnimatedHeading
              delay={0.1}
              className="font-display leading-[1.06] tracking-tight text-slate-900"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", fontWeight: 800 }}
            >
              We turn ideas into{" "}
              <span className="gradient-text">scalable systems.</span>
            </AnimatedHeading>
            <ScrollReveal delay={0.22}>
              <p className="hidden md:block text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg">
                Every business problem has a technology solution. We partner with
                organisations to understand the challenge, architect the right approach,
                and build systems that deliver measurable results.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.32}>
              <div className="hidden md:flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {["A", "B", "C"].map((l) => (
                    <div
                      key={l}
                      className="w-9 h-9 rounded-full border-2 border-slate-50 flex items-center justify-center text-xs font-600 text-white shadow-sm"
                      style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-base">
                  Trusted by <span className="text-slate-900 font-600">50+ clients</span> across industries
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <LiquidButton href="/contact">
                Start Your Project →
              </LiquidButton>
            </ScrollReveal>
          </MagneticSection>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 gap-3">
            {pillars.map((pillar, i) => (
              <AnimatedCard
                key={i}
                delay={i * 0.08}
                direction="left"
                hoverY={-3}
                hoverScale={1.005}
                className="group flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-6 shadow-sm card-ring"
              >
                <div className="w-11 h-11 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 group-hover:text-violet-600 group-hover:bg-violet-50 group-hover:border-violet-100 transition-all duration-300 shrink-0">
                  {pillar.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-slate-900 text-base font-600">{pillar.title}</h3>
                  <p className="hidden md:block text-slate-500 text-base leading-relaxed">{pillar.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
