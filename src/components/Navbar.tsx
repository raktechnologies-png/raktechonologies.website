"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EASE } from "@/lib/motion";

const navLinks = [
  { label: "About",     href: "/about" },
  { label: "Services",  href: "/services" },
  { label: "Solutions", href: "/solutions" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [mounted,   setMounted]   = useState(false);
  const pathname  = usePathname();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const headerBg = mounted && scrolled
    ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm"
    : "bg-white/0";

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-[68px] flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <motion.div
              className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 bg-white shadow-sm shrink-0"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
              whileHover={{ scale: 1.07 }}
            >
              <img
                src="/rak-logo.png"
                alt="RAK Technologies Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.span
              className="font-display font-700 text-slate-900 text-[15px] tracking-tight hidden sm:inline"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
            >
              RAK<span className="gradient-text">Technologies</span>
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                    active
                      ? "text-indigo-600 bg-indigo-50 font-500"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-500"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 text-sm font-500 px-5 py-2.5 rounded-xl text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-md active:scale-[0.97] shadow-sm"
              style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
            >
              Request a Solution
            </Link>

            {/* Burger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col gap-[5px] p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block w-[22px] h-[1.5px] bg-slate-800 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-[22px] h-[1.5px] bg-slate-800 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-[22px] h-[1.5px] bg-slate-800 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Full-screen mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 50% at 0% 100%, rgba(79,70,229,0.05) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.025]"
              style={{
                backgroundImage: "radial-gradient(circle, #94A3B8 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Close */}
            <motion.button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.18, duration: 0.35, ease: EASE }}
              className="absolute top-5 right-4 sm:right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors z-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Nav items */}
            <div className="flex flex-col justify-center h-full px-6 sm:px-12 gap-1 pt-16">
              {[...navLinks, { label: "Contact", href: "/contact" }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 32 }}
                  transition={{ delay: 0.06 + i * 0.07, duration: 0.48, ease: EASE }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-baseline justify-between py-4 border-b border-slate-50 hover:border-indigo-100 transition-colors duration-200"
                  >
                    <span
                      className={`font-display font-800 leading-tight tracking-tight transition-all duration-300 ${
                        link.href === "/contact"
                          ? "gradient-text"
                          : "text-slate-800 group-hover:gradient-text"
                      }`}
                      style={{ fontSize: "clamp(1.75rem, 9vw, 3.25rem)" }}
                    >
                      {link.label}
                    </span>
                    <span className="text-slate-200 group-hover:text-indigo-400 text-2xl ml-4 transition-all duration-200 group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.45 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-white font-600 px-8 py-4 rounded-xl text-base shadow-md w-full sm:w-auto sm:self-start"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                >
                  Request a Solution
                </Link>
                <div className="flex flex-wrap items-center gap-3 text-slate-400 text-[13px]">
                  <a href="mailto:info@raktechnologies.co.za" className="hover:text-indigo-500 transition-colors duration-200 truncate">
                    info@raktechnologies.co.za
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
