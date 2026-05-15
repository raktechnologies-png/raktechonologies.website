import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";
import "./globals.css";

// Plus Jakarta Sans → body copy
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// DM Sans → display headings (clean geometric — closer to Neue Haas Grotesk than Syne)
const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "RAK Technologies — IT Consulting & Software Solutions | South Africa",
    template: "%s | RAK Technologies",
  },
  description:
    "RAK Technologies is a premium IT consulting and software development company based in Pretoria, South Africa. We build custom software, AI integrations, data analytics platforms, and digital transformation solutions for businesses across South Africa.",
  keywords: [
    "software development company South Africa",
    "IT consulting South Africa",
    "custom software development Pretoria",
    "AI integration South Africa",
    "software companies in South Africa",
    "web development company South Africa",
    "data analytics South Africa",
    "business automation South Africa",
    "digital transformation South Africa",
    "tech company Pretoria",
    "IT solutions South Africa",
    "enterprise software South Africa",
    "software house South Africa",
    "IT outsourcing South Africa",
    "software development Pretoria",
    "RAK Technologies",
  ],
  authors: [{ name: "RAK Technologies", url: "https://raktechnologies.co.za" }],
  creator: "RAK Technologies",
  publisher: "RAK Technologies",
  metadataBase: new URL("https://raktechnologies.co.za"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "RAK Technologies — IT Consulting & Software Solutions | South Africa",
    description:
      "Premium IT consulting and custom software development in Pretoria, South Africa. We build AI integrations, data platforms, web systems, and automation solutions.",
    url: "https://raktechnologies.co.za",
    siteName: "RAK Technologies",
    locale: "en_ZA",
    type: "website",
    images: [{ url: "/RAK Technologies Logo.png", width: 800, height: 800, alt: "RAK Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAK Technologies — IT Consulting & Software Solutions",
    description: "Premium IT consulting and custom software development in South Africa.",
    images: ["/RAK Technologies Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const GTM_ID = "GTM-NSPFH9TG";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {/* GTM noscript fallback — must be first child of body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PageLoader />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: "RAK Technologies",
              legalName: "RAK Technologies (Pty) Ltd",
              url: "https://raktechnologies.co.za",
              logo: "https://raktechnologies.co.za/rak-logo.png",
              image: "https://raktechnologies.co.za/RAK Technologies Logo.png",
              description:
                "Premium IT consulting and custom software development company based in Pretoria, South Africa. Specialising in AI integration, web development, data analytics, and digital transformation.",
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pretoria",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@raktechnologies.co.za",
                contactType: "customer service",
                areaServed: "ZA",
                availableLanguage: "English",
              },
              areaServed: { "@type": "Country", name: "South Africa" },
              serviceType: [
                "IT Consulting",
                "Custom Software Development",
                "AI Integration",
                "Web Development",
                "Data Analytics",
                "Business Automation",
                "Digital Transformation",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Web Development",
                "Software Engineering",
                "Data Analytics",
                "Cloud Computing",
                "Business Automation",
              ],
            }),
          }}
        />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </body>
    </html>
  );
}
