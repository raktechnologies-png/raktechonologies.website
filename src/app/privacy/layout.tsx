import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RAK Technologies collects, uses and protects your personal information in line with POPIA.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | RAK Technologies",
    description: "How RAK Technologies collects, uses and protects your personal information in line with POPIA.",
    url: "https://www.raktechnologies.co.za/privacy",
    siteName: "RAK Technologies",
    locale: "en_ZA",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
