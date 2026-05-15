import type { Metadata } from "next";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "RAK Technologies — Software Development & IT Consulting South Africa",
  description:
    "RAK Technologies builds custom software, AI integrations, web applications, and data analytics platforms for businesses in South Africa. Based in Pretoria. If it's tech, trust us — we can build it.",
  keywords: [
    "software development company South Africa",
    "IT consulting South Africa",
    "AI integration South Africa",
    "software companies in South Africa",
    "custom software development Pretoria",
    "web development South Africa",
    "data analytics South Africa",
    "tech company South Africa",
    "digital transformation South Africa",
    "business automation South Africa",
    "software development Pretoria",
    "IT solutions South Africa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "RAK Technologies — Software Development & IT Consulting South Africa",
    description:
      "Custom software, AI integrations, web apps, and data platforms for South African businesses. Based in Pretoria. If it's tech, trust us — we can build it.",
    url: "https://raktechnologies.co.za",
  },
};
import TrustSection from "@/components/home/TrustSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import RAKlyticsSection from "@/components/home/RAKlyticsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import CTABanner from "@/components/home/CTABanner";
import SectionNav from "@/components/ui/SectionNav";

const sections = [
  { id: "hero",      label: "Home" },
  { id: "trust",     label: "About" },
  { id: "services",  label: "Solutions" },
  { id: "raklytics", label: "Analytics" },
  { id: "why-us",    label: "Why Us" },
  { id: "cta",       label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <SectionNav sections={sections} />

      <div id="hero"><Hero /></div>
      <div id="trust"><TrustSection /></div>
      <div id="services"><ServicesOverview /></div>
      <div id="raklytics"><RAKlyticsSection /></div>
      <div id="why-us"><WhyUsSection /></div>
      <div id="cta"><CTABanner /></div>
    </>
  );
}
