"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectForm from "@/components/contact/ProjectForm";
import PebbleGrid from "@/components/ui/PebbleGrid";

const contactDetails = [
  {
    label: "Email",
    value: "info@raktechnologies.co.za",
    href: "mailto:info@raktechnologies.co.za",
    accent: "#4F46E5",
    accentLight: "#EEF2FF",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "Chat instantly",
    href: "https://wa.link/d8eib5",
    external: true,
    accent: "#059669",
    accentLight: "#ECFDF5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const whyContact = [
  "We respond with a tailored technical approach — not a template",
  "No sales calls unless you want one — email is our default",
  "Budget information is strictly confidential",
  "We'll tell you honestly if we're not the right fit",
];

export default function ContactPage() {
  return (
    <div className="pt-[68px] bg-white dark:bg-[#0B0F1A]">
      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-white dark:bg-[#0B0F1A]">
        <PebbleGrid />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% -5%, rgba(79,70,229,0.06) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-indigo-500 dark:text-indigo-400 text-xs font-600 tracking-[0.18em] uppercase mb-5">
              Get In Touch
            </p>
            <h1
              className="font-display text-slate-900 dark:text-slate-100 mb-6"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
              }}
            >
              Tell us your problem.
              <br />
              <span className="gradient-text">We build the solution.</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed" style={{ letterSpacing: "-0.01em" }}>
              Submit your project request below and our team will respond with a
              tailored technical approach — no generic quotes, no templates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-28 md:pb-36 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12">
          <div className="grid md:grid-cols-5 gap-8 items-start">

            {/* Sidebar */}
            <div className="md:col-span-2 flex flex-col gap-4 md:sticky md:top-24">
              {contactDetails.map((c) => (
                <AnimatedCard
                  key={c.label}
                  direction="right"
                  hoverY={-3}
                  className="group flex items-center gap-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-5 shadow-sm card-ring"
                >
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 w-full"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                      style={{ color: c.accent, background: c.accentLight, borderColor: `${c.accent}20` }}
                    >
                      {c.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-slate-400 dark:text-slate-500 text-xs mb-0.5">{c.label}</span>
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-500 truncate">{c.value}</span>
                    </div>
                    <span className="ml-auto text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 group-hover:translate-x-1 transition-all duration-200 text-sm">→</span>
                  </a>
                </AnimatedCard>
              ))}

              <ScrollReveal delay={0.2} direction="right">
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-6 flex flex-col gap-4 shadow-sm">
                  <p className="text-slate-900 dark:text-slate-100 text-xs font-600 tracking-widest uppercase">
                    What to expect
                  </p>
                  <ul className="flex flex-col gap-3">
                    {whyContact.map((w, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <ScrollReveal className="md:col-span-3" delay={0.1}>
              <motion.div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm card-ring">
                <div className="px-8 pt-8 pb-0">
                  <AnimatedHeading
                    className="font-display text-slate-900 dark:text-slate-100 font-700 text-xl mb-1"
                  >
                    Project Request Form
                  </AnimatedHeading>
                  <p className="text-slate-400 dark:text-slate-500 text-sm">
                    Fill in as much or as little as you know. We&apos;ll clarify the rest on a call.
                  </p>
                </div>
                <div className="h-px bg-slate-100 dark:bg-slate-800 mt-6" />
                <ProjectForm />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
