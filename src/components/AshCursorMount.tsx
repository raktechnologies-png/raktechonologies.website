"use client";

import { useTheme } from "@/context/ThemeContext";
import { AshCursor } from "@/components/AshCursor";

export default function AshCursorMount() {
  const { isDark } = useTheme();
  return <AshCursor dark={isDark} showCursorDot={false} />;
}
