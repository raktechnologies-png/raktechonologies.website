import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ActSci™AI — Your Actuarial Answers, Marked Live | South Africa",
  description:
    "ActSci™AI by RAK Technologies marks your actuarial exam answers in real time as you write — no submit button. Get exact marks, an AI exam coach, and a prediction of how many weeks until you're ready to pass. Free for 7 days, no card required.",
  keywords: [
    "actuarial exam prep South Africa",
    "actuarial exam practice questions",
    "AI marking actuarial exams",
    "actuarial past papers South Africa",
    "actuarial science study platform",
    "actuarial exam feedback AI",
    "A311 actuarial risk management",
    "actuarial tuition alternative South Africa",
    "actuarial exam pass rate South Africa",
    "ActSci AI",
    "AI exam coach actuarial",
    "actuarial candidate study tool",
    "actuarial readiness prediction",
    "command verb analysis actuarial",
    "RAK Technologies actuarial",
  ],
  alternates: { canonical: "/actsci" },
  openGraph: {
    title: "ActSci™AI — Your Actuarial Answers, Marked Live | RAK Technologies",
    description:
      "Write your answer — your mark appears in real time. No submit button. AI marking, an exam coach, and a readiness prediction for South African actuarial students.",
    url: "https://raktechnologies.co.za/actsci",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://raktechnologies.co.za" },
    { "@type": "ListItem", position: 2, name: "ActSci™AI", item: "https://raktechnologies.co.za/actsci" },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://raktechnologies.co.za/actsci#actsci-ai",
  name: "ActSci™AI",
  alternateName: "ActSci AI",
  applicationCategory: "EducationApplication",
  operatingSystem: "Web",
  description:
    "ActSci™AI marks actuarial exam answers in real time as candidates write them — no submit button. It provides exact mark breakdowns, an AI exam coach, command verb analysis, and a prediction of how many weeks until a candidate is exam-ready.",
  url: "https://actsci.co.za",
  offers: {
    "@type": "Offer",
    priceCurrency: "ZAR",
    description: "Free 7-day trial, no card required. EFT billing after trial.",
    availability: "https://schema.org/InStock",
    seller: { "@id": "https://raktechnologies.co.za/#organization" },
  },
  author: { "@id": "https://raktechnologies.co.za/#organization" },
  publisher: { "@id": "https://raktechnologies.co.za/#organization" },
  featureList: [
    "Real-time AI marking as you write, no submit button",
    "Exact mark breakdown with reasons for lost marks",
    "AI exam coach that answers follow-up questions on your answer",
    "Readiness prediction — weeks until pass mark",
    "Command verb analysis",
    "Unlimited AI-generated practice questions",
    "Study activity tracker and shareable performance card",
    "Employer verification portal",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Actuarial exam candidates, actuarial students",
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
