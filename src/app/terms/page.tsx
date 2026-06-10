"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PebbleGrid from "@/components/ui/PebbleGrid";
import { EASE } from "@/lib/motion";

const LAST_UPDATED = "9 May 2026";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction and Acceptance",
    content: [
      `These Terms and Conditions ("Terms") govern your use of the RAK Technologies website located at raktechnologies.co.za and any services offered by RAK Technologies (Pty) Ltd ("RAK Technologies", "we", "us", or "our"), a company registered in South Africa and headquartered in Pretoria.`,
      "By accessing our website or engaging our services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.",
    ],
  },
  {
    id: "services",
    title: "2. Services",
    content: [
      "RAK Technologies provides IT consulting, custom software development, data analytics, automation, and related technology services to businesses and organisations. The specific scope, deliverables, timeline, and commercial terms of any engagement are set out in a separate Statement of Work (SOW) or Service Agreement agreed between the parties.",
      "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice where contractually obligated.",
    ],
  },
  {
    id: "enquiries",
    title: "3. Website Enquiries and Contact Forms",
    content: [
      "When you submit a project enquiry through our website contact form, you are expressing interest in our services. Submitting an enquiry does not constitute a binding contract and does not obligate either party to enter into a service engagement.",
      "We will respond to enquiries within a reasonable timeframe, typically within 24 business hours. All enquiry data is handled in accordance with our Privacy Policy.",
    ],
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: [
      "All content on this website, including but not limited to text, graphics, logos, images, design elements, and code, is the property of RAK Technologies or its content suppliers and is protected by applicable copyright and intellectual property laws.",
      "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material from our website without our prior written consent.",
    ],
    subsections: [
      {
        title: "4.1 Client Deliverables",
        content: "Unless otherwise specified in the relevant Statement of Work or Service Agreement, upon full payment of all fees, clients receive full ownership of custom-developed deliverables created specifically for them. RAK Technologies retains ownership of all proprietary tools, frameworks, templates, and pre-existing intellectual property incorporated into deliverables, and grants the client a non-exclusive, perpetual licence to use such components as part of the deliverable.",
      },
    ],
  },
  {
    id: "confidentiality",
    title: "5. Confidentiality",
    content: [
      "Both parties acknowledge that during the course of an engagement, each may disclose confidential information to the other. Each party agrees to hold all confidential information of the other in strict confidence, not to disclose it to third parties without prior written consent, and to use it only for the purposes of the engagement.",
      "This obligation of confidentiality does not apply to information that is publicly available, independently developed, or required to be disclosed by law or regulatory authority.",
    ],
  },
  {
    id: "payment",
    title: "6. Payment Terms",
    content: [
      "Specific payment terms, including fees, milestone schedules, and payment methods, are set out in the relevant Statement of Work or Service Agreement. General payment principles applicable to all engagements are:",
    ],
    list: [
      "Invoices are issued as per the agreed milestone or retainer schedule",
      "Payment is due within the timeframe specified in the invoice, typically 7 to 30 days from the invoice date",
      "Late payments may incur interest at the applicable prime lending rate plus 2% per annum",
      "RAK Technologies reserves the right to suspend services in the event of non-payment",
    ],
  },
  {
    id: "warranties",
    title: "7. Warranties and Representations",
    content: [
      "RAK Technologies warrants that its services will be performed in a professional and workmanlike manner, consistent with generally accepted industry standards and practices.",
      "The website and its content are provided on an 'as is' and 'as available' basis. RAK Technologies makes no representations or warranties of any kind, express or implied, regarding the website's content, accuracy, reliability, availability, or fitness for a particular purpose beyond what is expressly stated.",
    ],
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable South African law, RAK Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profit, loss of data, loss of goodwill, or business interruption, arising out of or in connection with your use of the website or our services.",
      "RAK Technologies' total liability for any claim arising out of or relating to our services shall not exceed the total amount paid by the client to RAK Technologies in the three (3) months preceding the event giving rise to the claim.",
      "Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be limited or excluded by law.",
    ],
  },
  {
    id: "indemnity",
    title: "9. Indemnity",
    content: [
      "You agree to indemnify, defend, and hold harmless RAK Technologies and its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with your use of the website, your violation of these Terms, or your violation of any third-party rights.",
    ],
  },
  {
    id: "third-party",
    title: "10. Third-Party Links and Services",
    content: [
      "Our website may contain links to third-party websites or services that are not owned or controlled by RAK Technologies. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We recommend reviewing the terms and privacy policy of any third-party site you visit.",
    ],
  },
  {
    id: "governing-law",
    title: "11. Governing Law and Jurisdiction",
    content: [
      "These Terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of the Republic of South Africa.",
      "In the event of a dispute, the parties agree to first attempt to resolve the matter amicably through good-faith negotiation before initiating any formal legal proceedings.",
    ],
  },
  {
    id: "changes",
    title: "12. Changes to These Terms",
    content: [
      "RAK Technologies reserves the right to update or modify these Terms at any time without prior notice. Changes will be effective immediately upon posting to the website. The 'Last Updated' date at the top of this page will reflect the most recent revision.",
      "Your continued use of the website or services following any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.",
    ],
  },
  {
    id: "severability",
    title: "13. Severability",
    content: [
      "If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.",
    ],
  },
  {
    id: "contact",
    title: "14. Contact Information",
    content: [
      "If you have any questions or concerns about these Terms and Conditions, please contact us:",
    ],
    list: [
      "Email: info@raktechnologies.co.za",
      "WhatsApp: wa.link/d8eib5",
      "Address: Pretoria, South Africa",
    ],
  },
];

export default function TermsPage() {
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
              Terms &{" "}
              <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl" style={{ letterSpacing: "-0.01em" }}>
              Please read these terms carefully before using our website or engaging our services.
              They govern the relationship between you and RAK Technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Quick summary cards ── */}
      <section className="py-12 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="text-indigo-500 text-xs font-600 tracking-[0.18em] uppercase mb-6">Key Points</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🤝", title: "Fair Engagement", desc: "Project terms are agreed upfront. No surprises — scope, timeline, and costs are documented before work begins.", accent: "#4F46E5", bg: "#EEF2FF", border: "#C7D2FE" },
              { icon: "🔒", title: "IP Ownership", desc: "Upon full payment, you own what we build for you. We retain ownership of reusable frameworks and tools.", accent: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
              { icon: "⚖️", title: "South African Law", desc: "These terms are governed by South African law. Any disputes will be resolved under South African jurisdiction.", accent: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
            ].map((card) => (
              <ScrollReveal key={card.title} delay={0.07}>
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col gap-3 card-ring h-full">
                  <span
                    className="text-xl w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                    style={{ background: card.bg, borderColor: card.border }}
                  >
                    {card.icon}
                  </span>
                  <div>
                    <p className="font-display text-slate-900 dark:text-slate-100 font-700 text-sm mb-1" style={{ letterSpacing: "-0.02em" }}>{card.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full terms content ── */}
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
                  {"subsections" in section && section.subsections?.map((sub) => (
                    <div key={sub.title} className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-5 flex flex-col gap-2">
                      <p className="font-display text-slate-900 dark:text-slate-100 font-700 text-sm" style={{ letterSpacing: "-0.02em" }}>{sub.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{sub.content}</p>
                    </div>
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
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "#EEF2FF", border: "1px solid #C7D2FE" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 dark:text-slate-100 font-600 text-sm mb-1">Have a question about our terms?</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Contact us at{" "}
                  <a href="mailto:info@raktechnologies.co.za" className="text-indigo-600 hover:underline">
                    info@raktechnologies.co.za
                  </a>
                  {" "}and our team will be happy to clarify any aspect of these terms before you engage.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
