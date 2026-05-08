/**
 * RAKlytics Email Design System
 * Single source of truth for all email template styles.
 * Mirrors the RAK Technologies website visual language.
 */

export const SITE_URL    = "https://raktechnologies.co.za";
export const APP_URL     = "https://app.raklytics.co.za";
export const LOGO_URL    = `${SITE_URL}/rak-logo.png`;
export const SUPPORT_EMAIL = "info@raktechnologies.co.za";

// ── Brand colors ─────────────────────────────────────────────────────────────
export const colors = {
  // Primary accent — indigo → violet (matches website gradient)
  primary:      "#4F46E5",
  secondary:    "#7C3AED",
  primaryLight: "#EEF2FF",
  primaryBorder:"#C7D2FE",

  // Neutrals
  bg:       "#FFFFFF",
  surface:  "#F8FAFC",
  surface2: "#F1F5F9",
  border:   "#E2E8F0",
  border2:  "#CBD5E1",

  // Typography
  foreground: "#0F172A",
  muted:      "#64748B",
  muted2:     "#94A3B8",

  // Dark header/CTA (matching website CTABanner)
  dark:        "#0B0F1A",
  darkSurface: "#111827",
  darkBorder:  "rgba(99,102,241,0.25)",
  darkText:    "#E2E8F0",
  darkMuted:   "#94A3B8",

  // Status
  success:      "#059669",
  successLight: "#ECFDF5",
  warning:      "#D97706",
  warningLight: "#FFFBEB",
  info:         "#0284C7",
  infoLight:    "#E0F2FE",
  danger:       "#DC2626",
  dangerLight:  "#FEF2F2",
} as const;

// ── Typography ────────────────────────────────────────────────────────────────
export const font = {
  family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  size: {
    "2xs": "10px",
    xs:    "11px",
    sm:    "13px",
    base:  "15px",
    md:    "17px",
    lg:    "20px",
    xl:    "26px",
    "2xl": "32px",
    "3xl": "40px",
  },
  weight: {
    normal:    "400",
    medium:    "500",
    semibold:  "600",
    bold:      "700",
    extrabold: "800",
  },
  leading: {
    none:    "1",
    tight:   "1.1",
    snug:    "1.3",
    normal:  "1.5",
    relaxed: "1.65",
  },
} as const;

// ── Spacing ───────────────────────────────────────────────────────────────────
export const spacing = {
  "2xs": "4px",
  xs:    "8px",
  sm:    "14px",
  md:    "20px",
  lg:    "32px",
  xl:    "48px",
  "2xl": "64px",
} as const;

// ── Border radius ─────────────────────────────────────────────────────────────
export const radius = {
  sm:   "6px",
  md:   "10px",
  lg:   "14px",
  xl:   "18px",
  full: "9999px",
} as const;

// ── Reusable style objects ────────────────────────────────────────────────────

/** Outer page background wrapper */
export const pageStyle: React.CSSProperties = {
  backgroundColor: colors.surface2,
  fontFamily:      font.family,
  padding:         "40px 0",
};

/** Main email container */
export const containerStyle: React.CSSProperties = {
  maxWidth:        "600px",
  margin:          "0 auto",
  backgroundColor: colors.bg,
  borderRadius:    radius.xl,
  overflow:        "hidden",
  boxShadow:       "0 4px 24px rgba(15,23,42,0.08)",
};

/** Section horizontal padding */
export const sectionPad: React.CSSProperties = {
  padding: "0 36px",
};

/** Primary CTA button — use on anchor tags */
export const primaryBtn: React.CSSProperties = {
  display:         "inline-block",
  background:      "linear-gradient(135deg, #4F46E5, #7C3AED)",
  color:           "#FFFFFF",
  fontFamily:      font.family,
  fontSize:        font.size.base,
  fontWeight:      font.weight.semibold,
  lineHeight:      font.leading.none,
  textDecoration:  "none",
  padding:         "14px 28px",
  borderRadius:    radius.lg,
  letterSpacing:   "0",
};

/** Secondary outline button */
export const secondaryBtn: React.CSSProperties = {
  display:         "inline-block",
  backgroundColor: "transparent",
  color:           colors.primary,
  fontFamily:      font.family,
  fontSize:        font.size.sm,
  fontWeight:      font.weight.medium,
  textDecoration:  "none",
  padding:         "10px 20px",
  borderRadius:    radius.lg,
  border:          `1px solid ${colors.border}`,
};

/** Ghost button for dark backgrounds */
export const ghostBtn: React.CSSProperties = {
  display:         "inline-block",
  backgroundColor: "transparent",
  color:           colors.darkText,
  fontFamily:      font.family,
  fontSize:        font.size.sm,
  fontWeight:      font.weight.medium,
  textDecoration:  "none",
  padding:         "10px 20px",
  borderRadius:    radius.lg,
  border:          `1px solid rgba(255,255,255,0.2)`,
};

/** Label / overline text */
export const labelStyle: React.CSSProperties = {
  fontSize:      font.size.xs,
  fontWeight:    font.weight.bold,
  color:         colors.muted2,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  margin:        "0 0 8px",
};

/** Body paragraph */
export const bodyText: React.CSSProperties = {
  fontSize:   font.size.base,
  lineHeight: font.leading.relaxed,
  color:      colors.muted,
  margin:     "0 0 16px",
};

/** Footer text */
export const footerText: React.CSSProperties = {
  fontSize:   font.size.sm,
  lineHeight: font.leading.normal,
  color:      colors.muted2,
  margin:     "0",
};

// ── Notification type config ──────────────────────────────────────────────────
export const notificationConfig = {
  assignment:   { color: colors.primary,  bg: colors.primaryLight, label: "Assignment" },
  grade:        { color: colors.success,  bg: colors.successLight,  label: "Grade Posted" },
  reminder:     { color: colors.warning,  bg: colors.warningLight,  label: "Reminder" },
  achievement:  { color: "#9333EA",       bg: "#FAF5FF",            label: "Achievement" },
  announcement: { color: colors.info,     bg: colors.infoLight,     label: "Announcement" },
} as const;
