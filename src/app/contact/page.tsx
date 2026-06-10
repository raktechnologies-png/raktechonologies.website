"use client";

import { useEffect } from "react";

export default function ContactRedirect() {
  useEffect(() => {
    window.location.replace("/#contact");
  }, []);
  return (
    <div className="pt-[68px] min-h-screen flex items-center justify-center bg-white dark:bg-[#0B0F1A]">
      <p className="text-slate-400 text-sm">Redirecting…</p>
    </div>
  );
}
