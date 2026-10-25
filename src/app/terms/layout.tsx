import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for RAK Technologies website, software and IT consulting services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | RAK Technologies",
    description: "Terms and conditions for RAK Technologies website, software and IT consulting services.",
    url: "https://raktechnologies.co.za/terms",
    siteName: "RAK Technologies",
    locale: "en_ZA",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
