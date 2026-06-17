import type { Metadata } from "next";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "RAK Technologies — Website & Software Development Pretoria | South Africa",
  description:
    "RAK Technologies builds websites from R4,500, custom software, CRM systems, and AI automation for businesses in Pretoria, Johannesburg, Centurion, and across South Africa. If it's tech, trust us — we can build it.",
  keywords: [
    // Hyperlocal intent
    "website development Pretoria",
    "web design Pretoria",
    "website design Pretoria",
    "IT company Pretoria",
    "software development Pretoria",
    "tech company Pretoria",
    "IT consulting Pretoria",
    "website development Centurion",
    "website development Midrand",
    "website development Sandton",
    "website development Johannesburg",
    "web design Centurion",
    "IT company Gauteng",
    "software company Tshwane",
    // Services
    "affordable website South Africa",
    "small business website Pretoria",
    "WhatsApp automation South Africa",
    "CRM development South Africa",
    "custom software development South Africa",
    "AI integration South Africa",
    "business automation South Africa",
    "e-commerce website South Africa",
    "app development Pretoria",
    // Brand
    "RAK Technologies",
    "RAK Technologies Pretoria",
    "software companies in South Africa",
    "IT solutions South Africa",
    "digital transformation South Africa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "RAK Technologies — Website & Software Development Pretoria | South Africa",
    description:
      "Websites from R4,500, custom software, CRM systems & AI automation for SA businesses. Based in Pretoria. Serving Johannesburg, Centurion, Sandton & beyond.",
    url: "https://raktechnologies.co.za",
  },
};
import TrustSection from "@/components/home/TrustSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import RAKlyticsSection from "@/components/home/RAKlyticsSection";
import RecentProjects from "@/components/home/RecentProjects";
import HomeContactSection from "@/components/home/HomeContactSection";
import SectionNav from "@/components/ui/SectionNav";

const sections = [
  { id: "hero",      label: "Home" },
  { id: "trust",     label: "About" },
  { id: "services",  label: "Services" },
  { id: "raklytics", label: "Analytics" },
  { id: "projects",  label: "Projects" },
  { id: "contact",   label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <SectionNav sections={sections} />

      <div id="hero"><Hero /></div>
      <div id="trust"><TrustSection /></div>
      <div id="services"><ServicesOverview /></div>
      <div id="raklytics"><RAKlyticsSection /></div>
      <div id="projects"><RecentProjects /></div>
      <div id="contact"><HomeContactSection /></div>
    </>
  );
}
