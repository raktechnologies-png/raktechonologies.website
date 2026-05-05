"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

interface NavSection {
  id: string;
  label: string;
}

export default function SectionNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        // Section is "active" when it occupies the middle 20% of the viewport
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sections]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  if (!mounted) return null;

  return (
    <nav
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-5"
      aria-label="Page sections"
    >
      {sections.map(({ id, label }) => {
        const isActive = id === active;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group flex items-center gap-3"
            aria-label={`Scroll to ${label}`}
          >
            {/* Line indicator */}
            <motion.div
              animate={{
                width:           isActive ? 22 : 8,
                backgroundColor: isActive ? "#4F46E5" : "#CBD5E1",
                opacity:         isActive ? 1 : 0.6,
              }}
              transition={{ duration: 0.35, ease: EASE }}
              className="h-[1.5px] rounded-full shrink-0"
            />

            {/* Label — visible when active, fades in on group hover */}
            <span
              className={`text-[9px] font-600 tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-250 select-none ${
                isActive
                  ? "text-indigo-600 opacity-100 translate-x-0"
                  : "text-slate-400 opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
