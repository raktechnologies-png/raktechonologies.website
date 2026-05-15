import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "RAKlytics™ — Student & Alumni Intelligence Platform",
  description:
    "RAKlytics™ is a student and alumni intelligence platform by RAK Technologies. Track graduate outcomes, employment rates, engagement, and cohort performance. Built for universities, bursaries, NGOs, and career services across South Africa.",
  keywords: [
    "student tracking system South Africa",
    "alumni management software South Africa",
    "graduate outcomes tracking",
    "university student intelligence platform",
    "bursary management system South Africa",
    "student analytics platform",
    "alumni engagement software",
    "graduate employment tracking South Africa",
    "higher education analytics South Africa",
    "career services software South Africa",
    "NGO student management system",
    "RAKlytics",
    "student data platform South Africa",
  ],
  alternates: { canonical: "/analytics" },
  openGraph: {
    title: "RAKlytics™ — Student & Alumni Intelligence Platform | RAK Technologies",
    description:
      "Track graduate outcomes, employment rates, and alumni engagement with RAKlytics™. The student intelligence platform built for South African universities, bursaries, and NGOs.",
    url: "https://raktechnologies.co.za/analytics",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
