import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";
import CookieConsent from "@/components/ui/CookieConsent";
import { ThemeProvider } from "@/context/ThemeContext";
import { SEOAuditProvider } from "@/context/SEOAuditContext";
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
    default: "RAK Technologies — Website & Software Development Pretoria | South Africa",
    template: "%s | RAK Technologies",
  },
  description:
    "RAK Technologies builds websites, custom software, CRM systems, and AI automation for businesses in Pretoria, Johannesburg, and across South Africa. Affordable, fast, and built to grow your business. From R4,500.",
  keywords: [
    // Core local intent
    "website development Pretoria",
    "web design Pretoria",
    "website design Pretoria",
    "software development Pretoria",
    "IT company Pretoria",
    "IT consulting Pretoria",
    "tech company Pretoria",
    // Surrounding cities
    "website development Centurion",
    "website development Midrand",
    "website development Sandton",
    "website development Johannesburg",
    "software development Johannesburg",
    "IT consulting Johannesburg",
    "web design Centurion",
    "web design Sandton",
    "IT company Gauteng",
    "software company Tshwane",
    // Services
    "custom software development South Africa",
    "CRM development South Africa",
    "WhatsApp automation South Africa",
    "business automation South Africa",
    "AI integration South Africa",
    "web development company South Africa",
    "affordable website South Africa",
    "small business website Pretoria",
    "e-commerce website South Africa",
    "app development Pretoria",
    // Brand
    "RAK Technologies",
    "RAK Technologies Pretoria",
    "software companies in South Africa",
    "IT solutions South Africa",
    "digital transformation South Africa",
  ],
  authors: [{ name: "RAK Technologies", url: "https://raktechnologies.co.za" }],
  creator: "RAK Technologies",
  publisher: "RAK Technologies",
  metadataBase: new URL("https://raktechnologies.co.za"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "RAK Technologies — Website & Software Development Pretoria | South Africa",
    description:
      "Websites, custom software, CRM systems & AI automation for SA businesses. Based in Pretoria. Serving Johannesburg, Centurion, Sandton & beyond. From R4,500.",
    url: "https://raktechnologies.co.za",
    siteName: "RAK Technologies",
    locale: "en_ZA",
    type: "website",
    images: [{ url: "/RAK Technologies Logo.png", width: 800, height: 800, alt: "RAK Technologies — IT Consulting & Software Development Pretoria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAK Technologies — Website & Software Development Pretoria",
    description: "Websites, custom software, CRM & AI automation for SA businesses. Based in Pretoria. From R4,500.",
    images: ["/RAK Technologies Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
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
      <head>
        {/* Anti-FOUC: apply saved theme before React hydrates */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('rak-theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}` }} />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <ThemeProvider>
        <SEOAuditProvider>
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
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
              "@id": "https://raktechnologies.co.za/#organization",
              name: "RAK Technologies",
              legalName: "RAK Technologies (Pty) Ltd",
              url: "https://raktechnologies.co.za",
              logo: {
                "@type": "ImageObject",
                url: "https://raktechnologies.co.za/rak-logo.png",
                width: 500,
                height: 500,
              },
              image: "https://raktechnologies.co.za/RAK Technologies Logo.png",
              description:
                "RAK Technologies builds websites, custom software, CRM systems, WhatsApp automation, and AI integrations for businesses in Pretoria, Johannesburg, and across South Africa. Affordable, fast delivery. From R4,500.",
              slogan: "If it's tech, trust us — we can build it.",
              foundingDate: "2024",
              priceRange: "R$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pretoria",
                addressRegion: "Gauteng",
                postalCode: "0001",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -25.7479,
                longitude: 28.2293,
              },
              hasMap: "https://maps.google.com/maps?q=Pretoria,+Gauteng,+South+Africa",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "info@raktechnologies.co.za",
                  contactType: "customer service",
                  areaServed: "ZA",
                  availableLanguage: ["English"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  url: "https://wa.link/d8eib5",
                  availableLanguage: ["English"],
                },
              ],
              sameAs: ["https://wa.link/d8eib5"],
              areaServed: [
                { "@type": "City", name: "Pretoria" },
                { "@type": "City", name: "Centurion" },
                { "@type": "City", name: "Johannesburg" },
                { "@type": "City", name: "Sandton" },
                { "@type": "City", name: "Midrand" },
                { "@type": "City", name: "Tshwane" },
                { "@type": "State", name: "Gauteng" },
                { "@type": "Country", name: "South Africa" },
              ],
              serviceType: [
                "Website Development",
                "Web Design",
                "Custom Software Development",
                "CRM Development",
                "WhatsApp Automation",
                "AI Integration",
                "Business Automation",
                "Data Analytics",
                "IT Consulting",
                "Digital Transformation",
              ],
              knowsAbout: [
                "Website Development",
                "Web Design",
                "React",
                "Next.js",
                "Artificial Intelligence",
                "WhatsApp Business API",
                "CRM Systems",
                "Software Engineering",
                "Data Analytics",
                "Cloud Computing",
                "Business Automation",
              ],
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 1,
                maxValue: 10,
              },
              currenciesAccepted: "ZAR",
              paymentAccepted: "EFT, Bank Transfer",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://raktechnologies.co.za/#website",
              name: "RAK Technologies",
              url: "https://raktechnologies.co.za",
              description: "Website development, custom software, CRM systems and AI automation for South African businesses.",
              publisher: { "@id": "https://raktechnologies.co.za/#organization" },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://raktechnologies.co.za/contact?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Default consent — denied until user accepts */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'analytics_storage':'denied','ad_storage':'denied','wait_for_update':500});`}
        </Script>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        </SEOAuditProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
