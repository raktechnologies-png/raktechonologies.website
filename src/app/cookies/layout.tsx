import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How the RAK Technologies website uses cookies and similar technologies.",
  alternates: { canonical: "/cookies" },
  openGraph: {
    title: "Cookie Policy | RAK Technologies",
    description: "How the RAK Technologies website uses cookies and similar technologies.",
    url: "https://raktechnologies.co.za/cookies",
    siteName: "RAK Technologies",
    locale: "en_ZA",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
