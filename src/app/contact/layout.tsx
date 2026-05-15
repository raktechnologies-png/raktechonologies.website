import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact — Request a Custom Software Solution",
  description:
    "Get in touch with RAK Technologies to discuss your software project. We provide IT consulting, custom software development, AI integration, and data analytics solutions in South Africa. Request a proposal today.",
  keywords: [
    "contact RAK Technologies",
    "hire software developers South Africa",
    "IT consulting quote South Africa",
    "software development quote Pretoria",
    "request software solution South Africa",
    "software project enquiry South Africa",
    "IT consulting contact South Africa",
    "custom software quote South Africa",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact RAK Technologies — Request a Software Solution",
    description:
      "Ready to build something? Contact RAK Technologies in Pretoria, South Africa for custom software development, AI integration, and IT consulting services.",
    url: "https://raktechnologies.co.za/contact",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
