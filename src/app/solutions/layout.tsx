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

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
