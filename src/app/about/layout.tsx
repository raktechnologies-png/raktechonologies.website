import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us — IT Company in Pretoria, South Africa | RAK Technologies",
  description:
    "RAK Technologies is a software development and IT consulting company founded in 2024 and based in Pretoria, Gauteng. We build websites, custom software, CRM systems, and AI automation for businesses across South Africa.",
  keywords: [
    "about RAK Technologies",
    "IT company Pretoria",
    "IT company Pretoria South Africa",
    "software company Pretoria",
    "tech company Pretoria",
    "South African tech company",
    "software development company Pretoria",
    "software development team South Africa",
    "IT consulting firm Pretoria",
    "technology company Pretoria South Africa",
    "website development company Pretoria",
    "web design company Pretoria",
    "IT company Gauteng",
    "software company Gauteng",
    "digital agency Pretoria",
    "who is RAK Technologies",
    "RAK Technologies Pretoria",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About RAK Technologies — IT Company in Pretoria, South Africa",
    description:
      "Founded in 2024 in Pretoria, RAK Technologies builds websites, custom software, CRM systems, and AI automation for businesses across South Africa.",
    url: "https://raktechnologies.co.za/about",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://raktechnologies.co.za" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://raktechnologies.co.za/about" },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://raktechnologies.co.za/about#webpage",
  name: "About RAK Technologies",
  url: "https://raktechnologies.co.za/about",
  description:
    "RAK Technologies is a Pretoria-based software development and IT consulting company. We build websites, custom software, CRM systems, and AI automation for businesses across South Africa.",
  about: { "@id": "https://raktechnologies.co.za/#organization" },
  breadcrumb: { "@id": "https://raktechnologies.co.za/about#breadcrumb" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
    </>
  );
}
