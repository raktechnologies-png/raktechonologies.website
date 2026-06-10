"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PebbleGrid from "@/components/ui/PebbleGrid";
import { EASE } from "@/lib/motion";

const LAST_UPDATED = "9 May 2026";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      `RAK Technologies (Pty) Ltd ("RAK Technologies", "we", "us", or "our") is committed to protecting the personal information of all individuals who interact with our website and services. This Privacy Policy explains how we collect, use, store, and protect your personal information in compliance with the Protection of Personal Information Act 4 of 2013 (POPIA) and other applicable South African privacy legislation.`,
      "By using our website at raktechnologies.co.za or submitting any information through our contact forms, you acknowledge that you have read and understood this Privacy Policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: [
      "We collect personal information that you voluntarily provide to us when you:",
    ],
    list: [
      "Submit a project request or enquiry through our contact form (name, email address, company name, project description, budget range, and preferred timeline)",
      "Communicate with us via email at info@raktechnologies.co.za",
      "Interact with us through WhatsApp or other communication channels",
      "Subscribe to any communications we may offer in future",
    ],
    content2: [
      "We may also collect limited technical information automatically when you visit our website, including your browser type, IP address, pages visited, and time spent on the site. This information is used solely to maintain and improve the website and is not linked to any personally identifiable information.",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: [
      "We use the personal information we collect for the following purposes:",
    ],
    list: [
      "To respond to your project requests, enquiries, and messages",
      "To provide you with tailored technical proposals and solutions",
      "To communicate with you about your project or engagement with RAK Technologies",
      "To send administrative information such as confirmations and follow-ups",
      "To improve our website, services, and client experience",
      "To comply with legal and regulatory obligations",
    ],
    content2: [
      "We will not use your personal information for unsolicited marketing without your explicit consent.",
    ],
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing",
    content: [
      "We process your personal information on the following lawful grounds under POPIA:",
    ],
    list: [
      "Contractual necessity — processing is required to respond to your project enquiry and potentially enter into a service agreement",
      "Legitimate interest — we have a legitimate business interest in processing enquiries and improving our services",
      "Consent — where you have given explicit consent for a specific purpose",
      "Legal obligation — where processing is required to comply with applicable law",
    ],
  },
  {
    id: "sharing",
    title: "5. Sharing Your Information",
    content: [
      "We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:",
    ],
    list: [
      "Service providers: We use Resend (resend.com) to process and deliver emails. Your email address and message content may be transmitted through their infrastructure solely to facilitate communication with you",
      "Legal requirements: If required by law, court order, or regulatory authority, we may disclose your information to the relevant authority",
      "Business transfers: In the event of a merger, acquisition, or sale of business assets, personal information may be transferred as part of that transaction — you will be notified in advance",
    ],
    content2: [
      "Any third parties with whom we share personal information are required to handle it in accordance with applicable privacy law and our data protection standards.",
    ],
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: [
      "We retain your personal information only for as long as is necessary to fulfil the purpose for which it was collected, or as required by law. Project enquiry data is typically retained for a period of 36 months from the date of collection, after which it is securely deleted unless an ongoing contractual relationship exists.",
    ],
  },
  {
    id: "security",
    title: "7. Information Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. These measures include secure communication channels (HTTPS), restricted access to personal data, and the use of reputable third-party service providers with strong security practices.",
      "No method of transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.",
    ],
  },
  {
    id: "rights",
    title: "8. Your Rights Under POPIA",
    content: [
      "As a data subject under POPIA, you have the following rights regarding your personal information:",
    ],
    list: [
      "Right to access — you may request a copy of the personal information we hold about you",
      "Right to correction — you may request that we correct inaccurate or incomplete personal information",
      "Right to deletion — you may request that we delete your personal information, subject to our legal retention obligations",
      "Right to object — you may object to the processing of your personal information in certain circumstances",
      "Right to lodge a complaint — you may lodge a complaint with the Information Regulator of South Africa if you believe your rights have been violated",
    ],
    content2: [
      "To exercise any of these rights, please contact us at info@raktechnologies.co.za. We will respond to all requests within a reasonable timeframe and in accordance with POPIA requirements.",
    ],
  },
  {
    id: "information-regulator",
    title: "9. Information Regulator",
    content: [
      "If you are not satisfied with our response to any privacy concern, you have the right to contact the Information Regulator of South Africa:",
    ],
    list: [
      "Website: www.inforegulator.org.za",
      "Email: inforeg@justice.gov.za",
      "Address: JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make significant changes, we will update the 'Last Updated' date at the top of this page. We encourage you to review this policy periodically.",
    ],
  },
  {
    id: "contact",
    title: "11. Contact Us",
    content: [
      "If you have any questions, concerns, or requests relating to this Privacy Policy or our data practices, please contact us:",
    ],
    list: [
      "Email: info@raktechnologies.co.za",
      "WhatsApp: wa.link/d8eib5",
      "Address: Pretoria, South Africa",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-[68px] bg-white dark:bg-[#0B0F1A]">

      {/* ── Hero ── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white dark:bg-[#0B0F1A]">
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
              className="font-display text-slate-900 dark:text-slate-100 mb-6"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.04em" }}
            >
              Privacy{" "}
              <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl" style={{ letterSpacing: "-0.01em" }}>
              We take your privacy seriously. This policy explains exactly what personal information
              we collect, how we use it, and the rights you have under South African law.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-12 md:py-16 relative bg-white dark:bg-[#0B0F1A]">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <ScrollReveal key={section.id} delay={i * 0.04}>
                <div id={section.id} className="flex flex-col gap-4">
                  <h2
                    className="font-display text-slate-900 dark:text-slate-100 font-800"
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
                        <li key={j} className="flex items-start gap-3 text-slate-500 text-base leading-relaxed">
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
                  <div className="mt-10 h-px bg-slate-100 dark:bg-slate-800" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer note ── */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "#EEF2FF", border: "1px solid #C7D2FE" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 dark:text-slate-100 font-600 text-sm mb-1">Questions about your data?</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Contact us anytime at{" "}
                  <a href="mailto:info@raktechnologies.co.za" className="text-indigo-600 hover:underline">
                    info@raktechnologies.co.za
                  </a>{" "}
                  and we will respond within 2 business days.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
