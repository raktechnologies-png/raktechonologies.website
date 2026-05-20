import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent browsers from guessing content type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Disallow embedding in iframes (clickjacking protection)
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers leaking full referrer URL to third parties
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable access to sensitive browser APIs
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  // Force HTTPS for 1 year (only active in production)
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // Basic XSS filter for older browsers
  { key: "X-XSS-Protection", value: "1; mode=block" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/solutions",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
