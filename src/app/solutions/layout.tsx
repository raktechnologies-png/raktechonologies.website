import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Solutions — Website & Software Development Pretoria | South Africa",
  description:
    "RAK Technologies builds affordable websites from R4,500, custom software, CRM systems, and WhatsApp automation for businesses in Pretoria, Johannesburg, Centurion, and across South Africa. Request a free quote.",
  keywords: [
    "website development Pretoria",
    "web design Pretoria",
    "affordable website Pretoria",
    "small business website Pretoria",
    "website design Centurion",
    "website development Johannesburg",
    "website development Sandton",
    "website development Midrand",
    "web design Gauteng",
    "custom software development South Africa",
    "CRM development South Africa",
    "CRM system Pretoria",
    "WhatsApp automation South Africa",
    "WhatsApp Business API South Africa",
    "business automation South Africa",
    "AI integration South Africa",
    "web development company South Africa",
    "affordable website South Africa",
    "e-commerce website South Africa",
    "app development Pretoria",
    "website R4500",
    "cheap website development South Africa",
    "affordable web design Pretoria",
    "React developer South Africa",
    "Next.js development South Africa",
    "Node.js development South Africa",
    "Python development South Africa",
    "cloud solutions South Africa",
    "API development South Africa",
  ],
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions — Website & Software Development Pretoria | RAK Technologies",
    description:
      "Websites from R4,500, CRM systems, WhatsApp automation & custom software for SA businesses. Based in Pretoria. Serving Johannesburg, Centurion, Sandton & Midrand.",
    url: "https://raktechnologies.co.za/solutions",
  },
};

const orgRef = { "@id": "https://raktechnologies.co.za/#organization" };

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://raktechnologies.co.za/solutions#starter-website",
      name: "Starter Website",
      description:
        "A professional, mobile-optimised business website starting from R4,500. Includes up to 5 pages, contact form, Google Maps integration, and basic SEO setup. Ideal for small businesses in Pretoria and across South Africa.",
      provider: orgRef,
      areaServed: [
        { "@type": "City", name: "Pretoria" },
        { "@type": "City", name: "Centurion" },
        { "@type": "City", name: "Johannesburg" },
        { "@type": "State", name: "Gauteng" },
        { "@type": "Country", name: "South Africa" },
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "ZAR",
        price: "4500",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "4500",
          priceCurrency: "ZAR",
        },
        eligibleRegion: { "@type": "Country", name: "South Africa" },
      },
      serviceType: "Website Development",
      url: "https://raktechnologies.co.za/solutions",
    },
    {
      "@type": "Service",
      "@id": "https://raktechnologies.co.za/solutions#business-hub",
      name: "Business Hub",
      description:
        "Full-stack web application with CRM, WhatsApp automation, client portal, lead management, and custom integrations. Built for growing South African businesses ready to scale their operations.",
      provider: orgRef,
      areaServed: { "@type": "Country", name: "South Africa" },
      offers: {
        "@type": "Offer",
        priceCurrency: "ZAR",
        price: "15000",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "15000",
          priceCurrency: "ZAR",
        },
        eligibleRegion: { "@type": "Country", name: "South Africa" },
      },
      serviceType: "Custom Software Development",
      url: "https://raktechnologies.co.za/solutions",
    },
    {
      "@type": "Service",
      "@id": "https://raktechnologies.co.za/solutions#custom-build",
      name: "Custom Build",
      description:
        "End-to-end custom software development for enterprises and scale-ups. AI integrations, data analytics platforms, mobile apps, microservices, and bespoke digital transformation solutions for South African businesses.",
      provider: orgRef,
      areaServed: { "@type": "Country", name: "South Africa" },
      serviceType: "Enterprise Software Development",
      url: "https://raktechnologies.co.za/solutions",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://raktechnologies.co.za" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://raktechnologies.co.za/solutions" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a website cost in South Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RAK Technologies offers professional business websites starting from R4,500. This includes a mobile-optimised, multi-page website with contact form, Google Maps, and basic SEO. Larger projects like CRM systems and custom platforms start from R15,000. Contact us for a free quote tailored to your needs.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software development cost in South Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom software development costs in South Africa vary depending on the complexity, scope, and timeline. RAK Technologies provides tailored proposals after an initial consultation. Simple web applications start from R15,000. Contact us to request a free proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website in Pretoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard business website can be delivered in as little as 5–10 business days. Larger projects with custom functionality, CRM integration, or e-commerce features typically take 3–6 weeks. RAK Technologies is based in Pretoria and serves clients across Gauteng and South Africa.",
      },
    },
    {
      "@type": "Question",
      name: "Does RAK Technologies set up WhatsApp automation for businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. RAK Technologies builds WhatsApp Business API integrations that automate lead capture, customer replies, order confirmations, appointment reminders, and follow-ups — all without manual effort. This is especially popular with South African SMEs looking to reduce response time and convert more leads.",
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
      name: "Is RAK Technologies based in Pretoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. RAK Technologies is a South African software development and IT consulting company headquartered in Pretoria, Gauteng. We serve clients across Pretoria, Centurion, Johannesburg, Sandton, Midrand, and beyond.",
      },
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
