import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "RAKlytics™ — Student & Alumni Intelligence Platform | South Africa",
  description:
    "RAKlytics™ by RAK Technologies tracks graduate outcomes, employment rates, alumni engagement, and cohort performance for universities, bursaries, NGOs, and career services across South Africa. Request a demo.",
  keywords: [
    "student tracking system South Africa",
    "alumni management software South Africa",
    "graduate outcomes tracking South Africa",
    "university student intelligence platform",
    "bursary management system South Africa",
    "student analytics platform South Africa",
    "alumni engagement software South Africa",
    "graduate employment tracking South Africa",
    "higher education analytics South Africa",
    "career services software South Africa",
    "NGO student management system South Africa",
    "RAKlytics",
    "student data platform South Africa",
    "alumni tracking Pretoria",
    "student monitoring system South Africa",
    "university data analytics South Africa",
    "graduate tracking software South Africa",
    "RAK Technologies analytics",
  ],
  alternates: { canonical: "/analytics" },
  openGraph: {
    title: "RAKlytics™ — Student & Alumni Intelligence Platform | RAK Technologies",
    description:
      "Track graduate outcomes, employment rates, and alumni engagement with RAKlytics™. The student intelligence platform built for South African universities, bursaries, and NGOs.",
    url: "https://raktechnologies.co.za/analytics",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://raktechnologies.co.za" },
    { "@type": "ListItem", position: 2, name: "RAKlytics™", item: "https://raktechnologies.co.za/analytics" },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://raktechnologies.co.za/analytics#raklytics",
  name: "RAKlytics™",
  alternateName: "RAKlytics",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "RAKlytics™ is a student and alumni intelligence platform for tracking graduate outcomes, employment rates, cohort performance, and alumni engagement. Built for South African universities, bursaries, NGOs, and career services.",
  url: "https://raktechnologies.co.za/analytics",
  offers: {
    "@type": "Offer",
    priceCurrency: "ZAR",
    availability: "https://schema.org/InStock",
    seller: { "@id": "https://raktechnologies.co.za/#organization" },
  },
  author: { "@id": "https://raktechnologies.co.za/#organization" },
  publisher: { "@id": "https://raktechnologies.co.za/#organization" },
  featureList: [
    "Graduate outcome tracking",
    "Alumni employment rate dashboards",
    "Cohort performance analytics",
    "Alumni engagement monitoring",
    "Bursary recipient tracking",
    "Career services reporting",
    "Automated alumni surveys",
    "Custom data exports",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Universities, Bursary organisations, NGOs, Career services, Higher education institutions",
    geographicArea: { "@type": "Country", name: "South Africa" },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
    </>
  );
}
