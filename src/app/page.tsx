import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyUsSection from "@/components/home/WhyUsSection";
import CTABanner from "@/components/home/CTABanner";
import SectionNav from "@/components/ui/SectionNav";

const sections = [
  { id: "hero",     label: "Home" },
  { id: "trust",    label: "About" },
  { id: "services", label: "Services" },
  { id: "why-us",   label: "Why Us" },
  { id: "cta",      label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <SectionNav sections={sections} />

      <div id="hero"><Hero /></div>
      <div id="trust"><TrustSection /></div>
      <div id="services"><ServicesOverview /></div>
      <div id="why-us"><WhyUsSection /></div>
      <div id="cta"><CTABanner /></div>
    </>
  );
}
