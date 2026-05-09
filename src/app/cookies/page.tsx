"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PebbleGrid from "@/components/ui/PebbleGrid";
import { EASE } from "@/lib/motion";

const LAST_UPDATED = "9 May 2026";

const cookieTypes = [
  {
    name: "Strictly Necessary",
    badge: "Always Active",
    badgeColor: "#059669",
    badgeBg: "#ECFDF5",
    badgeBorder: "#A7F3D0",
    description:
      "These cookies are essential for the website to function properly. They enable core features such as security, session management, and accessibility. These cookies cannot be disabled.",
    examples: [
      "Session state cookies required for page navigation",
      "Security cookies that prevent cross-site request forgery",
      "Load balancing cookies to ensure service stability",
    ],
  },
  {
    name: "Functional",
    badge: "Optional",
    badgeColor: "#0284C7",
    badgeBg: "#E0F2FE",
    badgeBorder: "#BAE6FD",
    description:
      "These cookies enable enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we use. If you disable these cookies, some features may not work as intended.",
    examples: [
      "Preferences cookies that remember your language or region settings",
      "Cookies that retain form field values to improve your experience",
    ],
  },
  {
    name: "Analytics",
    badge: "Optional",
    badgeColor: "#7C3AED",
    badgeBg: "#F5F3FF",
    badgeBorder: "#DDD6FE",
    description:
      "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the site's content, structure, and performance.",
    examples: [
      "Page view and session duration tracking",
      "Referral source tracking to understand how visitors find us",
      "Error and performance monitoring cookies",
    ],
  },
];

const sections = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies?",
    content: [
      "Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently, to remember your preferences, and to provide information to website owners.",
      "Cookies set by us (RAK Technologies) are called 'first-party cookies'. Cookies set by parties other than us are called 'third-party cookies'. Third-party cookies enable third-party features or functionality to be provided on or through the website.",
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Cookies",
    content: [
      "RAK Technologies uses cookies and similar tracking technologies to operate and improve our website, understand visitor behaviour, and ensure a secure and efficient browsing experience. We aim to use the minimum number of cookies necessary to deliver a high-quality experience.",
      "We do not use cookies to display targeted advertising, track you across third-party websites, or sell your data to any party.",
    ],
  },
  {
    id: "third-party",
    title: "4. Third-Party Cookies",
    content: [
      "Our website may include content or functionality from trusted third-party services. These services may set their own cookies on your device. We do not control the cookies set by third parties and recommend reviewing their respective privacy and cookie policies:",
    ],
    list: [
      "Google Fonts — used to serve premium typefaces; may set performance cookies",
      "Vercel — our hosting provider; may set analytics and performance cookies for infrastructure monitoring",
    ],
    content2: [
      "We review third-party integrations regularly and aim to minimise any non-essential data collection through third-party services.",
    ],
  },
  {
    id: "managing",
    title: "5. Managing and Disabling Cookies",
    content: [
      "You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, and set preferences for certain websites. Please note that disabling cookies may affect the functionality of our website.",
    ],
    list: [
      "Google Chrome: Settings → Privacy and security → Cookies and other site data",
      "Safari: Preferences → Privacy → Manage Website Data",
      "Mozilla Firefox: Options → Privacy & Security → Cookies and Site Data",
      "Microsoft Edge: Settings → Cookies and site permissions → Cookies and site data",
    ],
    content2: [
      "For more information about managing cookies, visit www.allaboutcookies.org.",
    ],
  },
  {
    id: "consent",
    title: "6. Your Consent",
    content: [
      "By continuing to use our website, you consent to our use of strictly necessary cookies. For optional cookies (functional and analytics), we will seek your explicit consent where required by applicable law.",
      "You may withdraw your consent at any time by adjusting your browser settings or by contacting us directly. Withdrawing consent will not affect the lawfulness of any processing carried out prior to withdrawal.",
    ],
  },
  {
    id: "updates",
    title: "7. Updates to This Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in technology, law, or our data practices. When we make material changes, we will update the 'Last Updated' date at the top of this page.",
    ],
  },
  {
    id: "contact",
    title: "8. Contact Us",
    content: [
      "If you have any questions about our use of cookies or this policy, please contact us at info@raktechnologies.co.za.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <div className="pt-[68px] bg-white">

      {/* ── Hero ── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <PebbleGrid />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% -5%, rgba(79,70,229,0.06) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-xs font-600 tracking-wide">
                Legal
              </span>
              <span className="text-slate-400 text-xs">Last updated: {LAST_UPDATED}</span>
            </div>
            <h1
              className="font-display text-slate-900 mb-6"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.04em" }}
            >
              Cookie{" "}
              <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl" style={{ letterSpacing: "-0.01em" }}>
              This policy explains how RAK Technologies uses cookies and similar technologies on
              our website — what they do, why we use them, and how you can manage them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Cookie type cards ── */}
      <section className="py-12 relative bg-slate-50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-6">
              Cookie Categories
            </p>
          </ScrollReveal>
          <div className="flex flex-col gap-4">
            {cookieTypes.map((type, i) => (
              <ScrollReveal key={type.name} delay={i * 0.07}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm card-ring">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-slate-900 font-700" style={{ fontSize: "1rem", letterSpacing: "-0.02em" }}>
                      {type.name}
                    </h3>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full border font-600 shrink-0"
                      style={{ color: type.badgeColor, background: type.badgeBg, borderColor: type.badgeBorder }}
                    >
                      {type.badge}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{type.description}</p>
                  <div className="flex flex-col gap-2">
                    {type.examples.map((ex, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: type.badgeColor }} />
                        <span className="text-slate-400 text-xs leading-relaxed">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content sections ── */}
      <section className="py-12 md:py-16 relative bg-white">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <ScrollReveal key={section.id} delay={i * 0.04}>
                <div id={section.id} className="flex flex-col gap-4">
                  <h2
                    className="font-display text-slate-900 font-800"
                    style={{ fontSize: "1.2rem", letterSpacing: "-0.025em", lineHeight: 1.2 }}
                  >
                    {section.title}
                  </h2>
                  {section.content.map((para, j) => (
                    <p key={j} className="text-slate-500 text-base leading-relaxed">{para}</p>
                  ))}
                  {section.list && (
                    <ul className="flex flex-col gap-2.5 ml-1">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.content2?.map((para, j) => (
                    <p key={j} className="text-slate-500 text-base leading-relaxed">{para}</p>
                  ))}
                </div>
                {i < sections.length - 1 && (
                  <div className="mt-10 h-px bg-slate-100" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer note ── */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "#EEF2FF", border: "1px solid #C7D2FE" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 font-600 text-sm mb-1">Questions about cookies?</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Reach us at{" "}
                  <a href="mailto:info@raktechnologies.co.za" className="text-indigo-600 hover:underline">
                    info@raktechnologies.co.za
                  </a>{" "}
                  and we will be happy to clarify anything about how we use cookies on this website.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
