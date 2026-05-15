import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Solutions — Custom Software & AI Development in South Africa",
  description:
    "RAK Technologies builds custom web applications, enterprise software systems, AI integrations, data analytics platforms, and automation solutions for businesses in South Africa. Get a tailored tech solution today.",
  keywords: [
    "custom software development South Africa",
    "web development company South Africa",
    "AI integration South Africa",
    "data analytics solutions South Africa",
    "business automation South Africa",
    "IT solutions Pretoria",
    "enterprise software development South Africa",
    "software development services South Africa",
    "digital transformation company South Africa",
    "React developer South Africa",
    "Node.js development South Africa",
    "Python development South Africa",
    "cloud solutions South Africa",
    "API development South Africa",
  ],
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions — Custom Software & AI Development | RAK Technologies South Africa",
    description:
      "Custom web apps, AI integrations, data analytics, and automation solutions built for South African businesses. End-to-end software development from Pretoria.",
    url: "https://raktechnologies.co.za/solutions",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does custom software development cost in South Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom software development costs in South Africa vary depending on the complexity, scope, and timeline of the project. RAK Technologies provides tailored proposals after an initial consultation — there is no fixed pricing as every project is unique. Contact us to request a free proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a custom software solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on the scope of the project. RAK Technologies follows a structured 6-phase process: Discovery (Week 1), Architecture (Week 1–2), Aligned Proposal (Week 2), Agile Build (sprint-based), Launch (final sprint), and Ongoing Support. Simple projects can launch in 4–6 weeks, while larger enterprise systems may take 3–6 months.",
      },
    },
    {
      "@type": "Question",
      name: "Does RAK Technologies integrate AI into existing business systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. RAK Technologies specialises in AI integration for South African businesses — including intelligent automation, machine learning pipelines, natural language processing, predictive analytics, and AI-powered workflows integrated into your existing software systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups and small businesses in South Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, RAK Technologies works with businesses of all sizes — from early-stage startups to established enterprises. We tailor our approach and scope to suit your budget and growth stage.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does RAK Technologies use for software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RAK Technologies uses modern, production-grade technologies including React, Next.js, Node.js, Python, TypeScript, PostgreSQL, cloud platforms (AWS, Vercel, GCP), and various AI/ML frameworks depending on project requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support after the software is launched?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. RAK Technologies provides ongoing support, maintenance, performance monitoring, and iterative improvements after launch. We treat every client engagement as a long-term partnership, not a once-off project.",
      },
    },
    {
      "@type": "Question",
      name: "Is RAK Technologies based in South Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. RAK Technologies is a South African software development and IT consulting company headquartered in Pretoria, Gauteng. We serve clients across South Africa and beyond.",
      },
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
