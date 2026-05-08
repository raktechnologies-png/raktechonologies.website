import {
  Html, Head, Preview, Body, Container,
  Section, Row, Column, Text, Link, Hr, Img,
} from "@react-email/components";
import type { ReactNode } from "react";
import {
  colors, font, spacing, radius,
  pageStyle, containerStyle, sectionPad,
  footerText, LOGO_URL, SITE_URL, APP_URL,
} from "../theme";

interface Props {
  preview:     string;
  children:    ReactNode;
  badge?:      string;
  footerLinks?: { label: string; href: string }[];
}

// ── RAKlytics wordmark (used in header) ──────────────────────────────────────
// "RAK" = white bold | "lytics" = #A5B4FC (indigo-300) to mimic the
// gradient "Technologies" treatment on the website.
function Wordmark({ dark = true }: { dark?: boolean }) {
  const rakColor     = dark ? "#FFFFFF" : colors.foreground;
  const lyticsColor  = dark ? "#A5B4FC" : colors.secondary;
  return (
    <Text style={{
      fontSize:      "22px",
      fontWeight:    font.weight.extrabold,
      letterSpacing: "-0.03em",
      lineHeight:    font.leading.none,
      margin:        "0",
      color:         rakColor,
    }}>
      RAK<span style={{ color: lyticsColor }}>lytics</span>
    </Text>
  );
}

export default function BaseLayout({ preview, children, badge, footerLinks }: Props) {
  const links = footerLinks ?? [
    { label: "Dashboard",   href: APP_URL },
    { label: "Help Centre", href: `${SITE_URL}/contact` },
    { label: "Website",     href: SITE_URL },
  ];

  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Body style={pageStyle}>
        <Container style={containerStyle}>

          {/* ── Dark header ─────────────────────────────────────── */}
          <Section style={{
            background:   "linear-gradient(135deg, #0B0F1A 0%, #1E1B4B 60%, #0B0F1A 100%)",
            padding:      "28px 36px 24px",
            borderBottom: `1px solid ${colors.darkBorder}`,
          }}>
            <Row>
              <Column>
                <Row>
                  {/* Logo avatar */}
                  <Column style={{ width: "42px", verticalAlign: "middle" }}>
                    <Img
                      src={LOGO_URL}
                      alt="RAKlytics"
                      width={36}
                      height={36}
                      style={{ borderRadius: radius.full, border: "1px solid rgba(255,255,255,0.15)" }}
                    />
                  </Column>
                  {/* Wordmark */}
                  <Column style={{ verticalAlign: "middle" }}>
                    <Wordmark dark />
                  </Column>
                  {/* Optional badge */}
                  {badge && (
                    <Column style={{ textAlign: "right", verticalAlign: "middle" }}>
                      <Text style={{
                        display:       "inline-block",
                        background:    "rgba(255,255,255,0.12)",
                        color:         "#E0E7FF",
                        fontSize:      font.size.xs,
                        fontWeight:    font.weight.bold,
                        padding:       "3px 10px",
                        borderRadius:  radius.full,
                        letterSpacing: "0.07em",
                        margin:        "0",
                      }}>
                        {badge.toUpperCase()}
                      </Text>
                    </Column>
                  )}
                </Row>
              </Column>
            </Row>
          </Section>

          {/* ── Top accent line ─────────────────────────────────── */}
          <Section style={{ padding: "0", lineHeight: "0", fontSize: "0" }}>
            <div style={{
              height:     "2px",
              background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.8), rgba(167,139,250,0.6), transparent)",
            }} />
          </Section>

          {/* ── Content ─────────────────────────────────────────── */}
          {children}

          {/* ── Footer ──────────────────────────────────────────── */}
          <Hr style={{ borderColor: colors.border, margin: "0" }} />
          <Section style={{ backgroundColor: colors.surface, padding: "24px 36px 28px" }}>
            <Row>
              <Column style={{ textAlign: "center" }}>
                {/* Wordmark light */}
                <Wordmark dark={false} />

                {/* Links */}
                <Text style={{ ...footerText, marginTop: spacing.sm }}>
                  {links.map((l, i) => (
                    <span key={l.href}>
                      <Link href={l.href} style={{ color: colors.primary, textDecoration: "none", fontSize: font.size.sm }}>
                        {l.label}
                      </Link>
                      {i < links.length - 1 && (
                        <span style={{ color: colors.border2, padding: "0 8px" }}>·</span>
                      )}
                    </span>
                  ))}
                </Text>

                {/* Legal */}
                <Text style={{ ...footerText, marginTop: spacing.xs, fontSize: font.size.xs }}>
                  RAK Technologies · Johannesburg, South Africa
                </Text>
                <Text style={{ ...footerText, fontSize: font.size["2xs"], marginTop: "4px", color: colors.border2 }}>
                  You received this email because you have an account with RAKlytics.{" "}
                  <Link href={`${APP_URL}/unsubscribe`} style={{ color: colors.muted2, textDecoration: "underline" }}>
                    Unsubscribe
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
