import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ActSci™AI — AI Actuarial Exam Prep Platform | South Africa",
  description:
    "ActSci™AI by RAK Technologies is South Africa's first AI-native actuarial exam prep platform — official-standard exam questions, AI marking benchmarked against real memoranda, and study intelligence grounded in your own course notes. Start a free 7-day trial.",
  keywords: [
    "actuarial exam prep South Africa",
    "actuarial exam practice questions",
    "AI marking actuarial exams",
    "actuarial past papers South Africa",
    "actuarial science study platform",
    "actuarial exam feedback AI",
    "SAM framework exam prep",
    "actuarial memoranda South Africa",
    "actuarial tuition alternative South Africa",
    "actuarial exam pass rate South Africa",
    "ActSci AI",
    "AI study coach actuarial",
    "actuarial candidate study tool",
    "actuarial exam co-pilot",
    "RAG actuarial study platform",
    "actuarial exam questions and memos",
    "RAK Technologies actuarial",
  ],
  alternates: { canonical: "/actsci" },
  openGraph: {
    title: "ActSci™AI — AI Actuarial Exam Prep Platform | RAK Technologies",
    description:
      "Official-standard exam questions, AI marking, and personalised study intelligence — all grounded in your own course notes. South Africa's first AI-native actuarial exam platform.",
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
    "ActSci™AI is South Africa's first AI-native actuarial exam prep platform, combining official-standard exam questions, AI-powered marking, and personalised study intelligence for candidates sitting professional actuarial examinations.",
  url: "https://actsci.co.za",
  offers: {
    "@type": "Offer",
    price: "500",
    priceCurrency: "ZAR",
    availability: "https://schema.org/InStock",
    seller: { "@id": "https://raktechnologies.co.za/#organization" },
  },
  author: { "@id": "https://raktechnologies.co.za/#organization" },
  publisher: { "@id": "https://raktechnologies.co.za/#organization" },
  featureList: [
    "AI exam engine with timed, command-verb-aware questions",
    "186 official-standard marking memoranda",
    "Streamed AI feedback benchmarked against examiner memos",
    "AI question generator grounded in uploaded course notes",
    "RAG-powered study intelligence via Supabase pgvector",
    "Topic mastery and progress tracking",
    "Always-available AI study coach",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Actuarial exam candidates, actuarial students, actuarial societies, universities",
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
