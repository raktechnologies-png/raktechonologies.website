import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact — Get a Free Website or Software Quote | RAK Technologies Pretoria",
  description:
    "Contact RAK Technologies in Pretoria, South Africa. Get a free quote for your website, custom software, CRM system, or WhatsApp automation. We respond within 24 hours. Serving Johannesburg, Centurion, Sandton & Midrand.",
  keywords: [
    "contact RAK Technologies",
    "website quote Pretoria",
    "web design quote South Africa",
    "website development quote Pretoria",
    "free website quote South Africa",
    "hire web developer Pretoria",
    "hire software developers South Africa",
    "IT consulting quote South Africa",
    "software development quote Pretoria",
    "request software solution South Africa",
    "software project enquiry South Africa",
    "IT consulting contact South Africa",
    "custom software quote South Africa",
    "WhatsApp automation quote South Africa",
    "CRM development quote South Africa",
    "get in touch RAK Technologies",
    "RAK Technologies contact Pretoria",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact RAK Technologies — Free Website & Software Quote | Pretoria",
    description:
      "Get a free quote for your website, custom software, CRM, or WhatsApp automation. RAK Technologies — based in Pretoria, serving all of South Africa.",
    url: "https://raktechnologies.co.za/contact",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://raktechnologies.co.za" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://raktechnologies.co.za/contact" },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://raktechnologies.co.za/contact#webpage",
  name: "Contact RAK Technologies",
  url: "https://raktechnologies.co.za/contact",
  description:
    "Get in touch with RAK Technologies in Pretoria for a free quote on website development, custom software, CRM systems, or WhatsApp automation.",
  mainEntity: { "@id": "https://raktechnologies.co.za/#organization" },
  breadcrumb: { "@id": "https://raktechnologies.co.za/contact#breadcrumb" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
    </>
  );
}
