import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us — IT Consulting Company in Pretoria",
  description:
    "Learn about RAK Technologies — a software development and IT consulting company founded in 2024 and based in Pretoria, South Africa. We build custom tech solutions for businesses across South Africa.",
  keywords: [
    "about RAK Technologies",
    "IT company Pretoria",
    "South African tech company",
    "software development team South Africa",
    "IT consulting firm Pretoria",
    "technology company Pretoria South Africa",
    "software company founded 2024",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About RAK Technologies — IT Consulting Company in Pretoria, South Africa",
    description:
      "Founded in 2024 in Pretoria, RAK Technologies delivers premium software development, AI integration, and IT consulting solutions to businesses across South Africa.",
    url: "https://raktechnologies.co.za/about",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
