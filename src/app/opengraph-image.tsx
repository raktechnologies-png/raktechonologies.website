import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RAK Technologies — IT Consulting & Software Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "#F7FAFC",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#DBFF00",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse at top right, rgba(16,44,64,0.08), transparent 70%)",
          }}
        />

        {/* Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "28px",
            background: "#EEF4F8",
            border: "1px solid #BCD2E2",
            borderRadius: "100px",
            padding: "8px 20px",
          }}
        >
          <span style={{ color: "#102C40", fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em" }}>
            PRETORIA, SOUTH AFRICA
          </span>
        </div>

        {/* Heading */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 900,
            color: "#102C40",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          RAK{" "}
          <span style={{ color: "#102C40" }}>Technologies</span>
        </div>

        {/* Subheading */}
        <div
          style={{
            fontSize: "24px",
            color: "#627A8D",
            marginBottom: "48px",
            letterSpacing: "-0.01em",
          }}
        >
          IT Consulting & Custom Software Development
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["AI Integration", "Web Development", "Data Analytics", "Automation", "IT Consulting"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#F7FAFC",
                border: "1px solid #E1E9EF",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "15px",
                color: "#455D70",
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            top: "72px",
            right: "80px",
            fontSize: "16px",
            color: "#93A7B7",
            letterSpacing: "0.02em",
          }}
        >
          raktechnologies.co.za
        </div>
      </div>
    ),
    { ...size }
  );
}
