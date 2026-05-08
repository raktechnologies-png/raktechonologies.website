import { Section, Row, Column, Text, Heading, Link, Hr } from "@react-email/components";
import BaseLayout from "../components/BaseLayout";
import {
  colors, font, spacing, radius,
  sectionPad, bodyText, labelStyle, primaryBtn, secondaryBtn,
  SITE_URL,
} from "../theme";

export interface InstitutionalOutreachProps {
  recipientName:  string;
  recipientTitle?: string;
  institutionName: string;
  senderName:     string;
  senderTitle?:   string;
  ctaLink:        string;
  customMessage?: string;
}

const benefits = [
  {
    icon:  "📊",
    title: "Real-Time Learning Analytics",
    body:  "Live dashboards that surface exactly where students are struggling — before it becomes a problem.",
  },
  {
    icon:  "🎯",
    title: "Outcome-Driven Insights",
    body:  "Align curriculum data with learning outcomes and institutional KPIs in one unified view.",
  },
  {
    icon:  "⚡",
    title: "Zero Infrastructure Overhead",
    body:  "Fully hosted and managed. Your institution is live within 48 hours, with dedicated onboarding support.",
  },
];

export default function InstitutionalOutreach({
  recipientName   = "Dr. Nkosi",
  recipientTitle  = "Head of Academic Affairs",
  institutionName = "University of Johannesburg",
  senderName      = "Kgoane Agreement",
  senderTitle     = "Founder, RAKlytics",
  ctaLink         = "https://app.raklytics.co.za/demo",
  customMessage,
}: InstitutionalOutreachProps) {
  return (
    <BaseLayout
      preview={`Transforming learning analytics at ${institutionName} — a 20-min conversation could change how you see student performance.`}
      badge="Outreach"
    >
      {/* Greeting section */}
      <Section style={{ ...sectionPad, paddingTop: spacing.lg, paddingBottom: spacing.md }}>
        <Text style={labelStyle}>Personal Introduction</Text>
        <Heading style={{
          fontSize:      font.size.xl,
          fontWeight:    font.weight.extrabold,
          letterSpacing: "-0.025em",
          lineHeight:    font.leading.snug,
          color:         colors.foreground,
          margin:        `0 0 ${spacing.md}`,
        }}>
          Helping {institutionName} see student performance clearly.
        </Heading>

        <Text style={bodyText}>
          Dear {recipientTitle ? `${recipientTitle} ` : ""}{recipientName},
        </Text>
        <Text style={bodyText}>
          {customMessage ?? (
            `My name is ${senderName}${senderTitle ? `, ${senderTitle}` : ""}. I'm reaching out because institutions like yours are sitting on valuable learning data that rarely gets turned into timely, actionable insight — and I believe we can change that.`
          )}
        </Text>
        <Text style={bodyText}>
          RAKlytics is a learning analytics platform built specifically for South African higher education. It connects to your existing LMS and surfaces the insights your academic staff need — without adding to their workload.
        </Text>
      </Section>

      {/* Benefits */}
      <Section style={{ ...sectionPad, paddingBottom: spacing.md }}>
        <Text style={labelStyle}>What We Bring</Text>
        {benefits.map((b) => (
          <Row key={b.title} style={{ marginBottom: spacing.sm }}>
            <Column style={{
              width:         "48px",
              verticalAlign: "top",
              paddingTop:    "2px",
            }}>
              <Text style={{ fontSize: "22px", margin: "0" }}>{b.icon}</Text>
            </Column>
            <Column>
              <Text style={{
                fontSize:   font.size.base,
                fontWeight: font.weight.semibold,
                color:      colors.foreground,
                margin:     "0 0 3px",
              }}>
                {b.title}
              </Text>
              <Text style={{ ...bodyText, margin: "0" }}>{b.body}</Text>
            </Column>
          </Row>
        ))}
      </Section>

      {/* Social proof band */}
      <Section style={{
        backgroundColor: colors.primaryLight,
        padding:         `${spacing.md} 36px`,
        margin:          "0",
      }}>
        <Text style={{
          fontSize:   font.size.base,
          color:      colors.primary,
          fontStyle:  "italic",
          margin:     "0",
          lineHeight: font.leading.relaxed,
        }}>
          "RAKlytics gave us visibility into student engagement we never had before — we identified at-risk students three weeks earlier than our previous system allowed."
        </Text>
        <Text style={{
          fontSize:   font.size.sm,
          color:      colors.secondary,
          fontWeight: font.weight.semibold,
          margin:     "8px 0 0",
        }}>
          — Academic Director, Partner Institution
        </Text>
      </Section>

      {/* CTA */}
      <Section style={{ ...sectionPad, padding: spacing.lg + " 36px", textAlign: "center" }}>
        <Text style={{ ...bodyText, textAlign: "center", marginBottom: spacing.md }}>
          I'd love to show you a 20-minute live demo tailored to {institutionName}'s specific use case — no commitment required.
        </Text>
        <Link href={ctaLink} style={primaryBtn}>Book a 30-Minute Demo →</Link>
        <Text style={{ ...bodyText, fontSize: font.size.sm, marginTop: spacing.sm, textAlign: "center" }}>
          Or reply directly to this email — I respond within the same business day.
        </Text>
      </Section>

      <Hr style={{ borderColor: colors.border, margin: "0 36px" }} />

      {/* Sender sign-off */}
      <Section style={{ ...sectionPad, paddingTop: spacing.md, paddingBottom: spacing.lg }}>
        <Text style={{ ...bodyText, marginBottom: "4px" }}>Warm regards,</Text>
        <Text style={{
          fontSize:   font.size.base,
          fontWeight: font.weight.bold,
          color:      colors.foreground,
          margin:     "0 0 2px",
        }}>
          {senderName}
        </Text>
        {senderTitle && (
          <Text style={{ ...bodyText, fontSize: font.size.sm, margin: "0 0 12px" }}>{senderTitle}</Text>
        )}
        <Link href={`${SITE_URL}`} style={{ color: colors.primary, fontSize: font.size.sm }}>
          raktechnologies.co.za
        </Link>
      </Section>
    </BaseLayout>
  );
}
