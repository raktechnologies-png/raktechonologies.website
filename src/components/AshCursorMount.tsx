"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/context/ThemeContext";

// Loaded after the page is interactive — the fluid sim is decoration, not content.
const AshCursor = dynamic(() => import("@/components/AshCursor").then((m) => m.AshCursor), { ssr: false });

export default function AshCursorMount() {
  const { isDark } = useTheme();
  return <AshCursor dark={isDark} showCursorDot={false} />;
}
