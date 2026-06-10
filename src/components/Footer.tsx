"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

// ── Connect section SVG icons ─────────────────────────────────────────────────

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const EmailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);


const WhatsAppIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  icon?: ReactNode;
}

const footerLinks: Record<string, FooterLink[]> = {
  Company: [
    { label: "About Us",    href: "/about" },
    { label: "Solutions",   href: "/solutions" },
    { label: "RAKlytics™",  href: "/analytics" },
    { label: "Pricing",     href: "/#services" },
    { label: "Contact",     href: "/#contact" },
  ],
  Services: [
    { label: "Web Development",     href: "/solutions#web" },
    { label: "Software Development", href: "/solutions#software" },
    { label: "CRM Systems",         href: "/solutions#crm" },
    { label: "RAKlytics™ Analytics", href: "/analytics" },
  ],
  Connect: [
    { label: "Request a Solution",        href: "/#contact",                        icon: <ArrowIcon /> },
    { label: "info@raktechnologies.co.za", href: "mailto:info@raktechnologies.co.za", external: true, icon: <EmailIcon /> },
    { label: "WhatsApp",                  href: "https://wa.link/d8eib5",           external: true, icon: <WhatsAppIcon /> },
  ],
};

// Pebble — parent controls, children react via shared variant keys
const pebble = {
  rest:  { scale: 0, opacity: 0 },
  hover: { scale: 1, opacity: 1 },
};

const iconReveal = {
  rest:  { opacity: 0, x: -5 },
  hover: { opacity: 0.65, x: 0 },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Footer() {
  const [year, setYear] = useState(2025);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="relative border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0B0F1A]">
      {/* Top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(79,70,229,0.3), rgba(124,58,237,0.2), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 py-16">

          {/* Brand col */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm shrink-0">
                <img src="/rak-logo.png" alt="RAK Technologies Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-700 text-slate-900 dark:text-slate-50 text-[15px] tracking-tight">
                RAK<span className="gradient-text">Technologies</span>
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[220px]">
              If it&apos;s tech, trust us — we can build it. Premium IT consulting &amp; software solutions from South Africa.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-slate-400 dark:text-slate-500 text-xs">Pretoria, South Africa</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <h4 className="text-slate-900 dark:text-slate-100 text-xs font-600 tracking-widest uppercase">
                {section}
              </h4>
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <motion.li
                    key={link.label}
                    className="relative"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    {/* Pebble bubble — reveals icon for Connect links */}
                    <motion.div
                      variants={pebble}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute -inset-x-2.5 -inset-y-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 -z-10 pointer-events-none flex items-center justify-end pr-2.5"
                    >
                      {link.icon && (
                        <motion.span
                          variants={iconReveal}
                          transition={{ duration: 0.2, delay: 0.07, ease: "easeOut" }}
                          className="text-indigo-400 flex items-center shrink-0"
                        >
                          {link.icon}
                        </motion.span>
                      )}
                    </motion.div>

                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="relative block text-slate-500 dark:text-slate-400 text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-1.5 break-all"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 dark:border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 dark:text-slate-500 text-xs">
            © {year} RAK Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            {[
              { label: "Privacy Policy",    href: "/privacy" },
              { label: "Cookie Policy",     href: "/cookies" },
              { label: "Terms & Conditions", href: "/terms" },
            ].map((link, i, arr) => (
              <span key={link.href} className="flex items-center gap-1">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 dark:text-slate-500 text-xs hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200 px-1.5"
                >
                  {link.label}
                </a>
                {i < arr.length - 1 && <span className="text-slate-200 dark:text-slate-700 text-xs select-none">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
