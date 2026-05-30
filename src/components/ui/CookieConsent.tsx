"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function grantConsent() {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage:        "granted",
    });
  }
}

function denyConsent() {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage:        "denied",
    });
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("rak-cookie-consent");
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }
    if (stored === "accepted") grantConsent();
    if (stored === "declined") denyConsent();
  }, []);

  function accept() {
    localStorage.setItem("rak-cookie-consent", "accepted");
    grantConsent();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("rak-cookie-consent", "declined");
    denyConsent();
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9998] w-full max-w-2xl px-4"
        >
          <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 md:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg border"
                style={{ background: "#EEF2FF", borderColor: "#C7D2FE" }}
              >
                🍪
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 font-600 text-sm mb-0.5">
                  We use cookies
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  We use cookies to improve your browsing experience and understand how our site is used.
                  Read our{" "}
                  <Link
                    href="/cookies"
                    target="_blank"
                    className="text-indigo-500 hover:underline font-600"
                  >
                    Cookie Policy
                  </Link>
                  {" "}for more details.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <button
                  onClick={decline}
                  className="flex-1 sm:flex-none text-xs font-600 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 cursor-pointer"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="flex-1 sm:flex-none text-xs font-600 px-5 py-2.5 rounded-xl text-white cursor-pointer transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                >
                  Accept All
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
