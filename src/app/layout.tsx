import type { Metadata } from "next";
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
  title: "RAK Technologies — IT Consulting & Software Solutions",
  description:
    "If it's tech, trust us — we can build it. RAK Technologies delivers custom software systems, IT consulting, data analytics, automation, and digital transformation solutions.",
  keywords:
    "IT consulting, software development, custom applications, digital transformation, South Africa, automation, data analytics",
  openGraph: {
    title: "RAK Technologies — IT Consulting & Software Solutions",
    description: "If it's tech, trust us — we can build it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jakarta.variable}`} suppressHydrationWarning>
    <head>
     <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NSPFH9TG');</script>
            <!-- End Google Tag Manager -->
    </head>
    <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NSPFH9TG"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <PageLoader />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
