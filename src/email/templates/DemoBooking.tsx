import { Section, Row, Column, Text, Heading, Link, Hr } from "@react-email/components";
import BaseLayout from "../components/BaseLayout";
import {
  colors, font, spacing, radius,
  sectionPad, bodyText, labelStyle, primaryBtn,
  APP_URL,
} from "../theme";

export interface DemoBookingProps {
  recipientName: string;
  demoDate:      string;
  demoTime:      string;
  demoLink:      string;
  hostName:      string;
  hostTitle?:    string;
  addCalendarLink?: string;
}

const agenda = [
  "Platform walkthrough tailored to your institution",
  "Live analytics dashboard demonstration",
  "Q&A — bring your toughest questions",
];

export default function DemoBooking({
  recipientName   = "Dr. Mokoena",
  demoDate        = "Wednesday, 14 May 2025",
  demoTime        = "10:00 AM SAST",
  demoLink        = "https://app.raklytics.co.za/demo/join",
  hostName        = "Kgoane Agreement",
  hostTitle       = "Founder, RAKlytics",
  addCalendarLink,
}: DemoBookingProps) {
  return (
    <BaseLayout
      preview={`Your RAKlytics demo is confirmed for ${demoDate} at ${demoTime}. Here's everything you need.`}
      badge="Confirmed"
    >
      {/* Hero */}
      <Section style={{
        background:   "linear-gradient(160deg, #F5F3FF 0%, #EEF2FF 100%)",
        padding:      `${spacing.lg} 36px`,
        textAlign:    "center",
        borderBottom: `1px solid ${colors.border}`,
      }}>
        <Text style={{ fontSize: "40px", margin: "0 0 8px" }}>📅</Text>
        <Heading style={{
          fontSize:      font.size.xl,
          fontWeight:    font.weight.extrabold,
          letterSpacing: "-0.025em",
          color:         colors.foreground,
          margin:        "0 0 6px",
        }}>
          Your Demo is Confirmed
        </Heading>
        <Text style={{ ...bodyText, margin: "0", textAlign: "center", fontSize: font.size.md }}>
          We're looking forward to meeting you, {recipientName}.
        </Text>
      </Section>

      {/* Details card */}
      <Section style={{ ...sectionPad, paddingTop: spacing.lg, paddingBottom: spacing.md }}>
        <Row style={{
          backgroundColor: colors.surface,
          borderRadius:    radius.lg,
          border:          `1px solid ${colors.border}`,
          overflow:        "hidden",
        }}>
          {[
            { label: "Date",  value: demoDate },
            { label: "Time",  value: demoTime },
            { label: "Host",  value: hostName + (hostTitle ? `\n${hostTitle}` : "") },
          ].map((item, i, arr) => (
            <Column key={item.label} style={{
              padding:     "18px 20px",
              borderRight: i < arr.length - 1 ? `1px solid ${colors.border}` : "none",
              textAlign:   "center",
              verticalAlign: "top",
            }}>
              <Text style={labelStyle}>{item.label}</Text>
              <Text style={{
                fontSize:   font.size.base,
                fontWeight: font.weight.semibold,
                color:      colors.foreground,
                margin:     "0",
                lineHeight: font.leading.snug,
                whiteSpace: "pre-line",
              }}>
                {item.value}
              </Text>
            </Column>
          ))}
        </Row>
      </Section>

      {/* Agenda */}
      <Section style={{ ...sectionPad, paddingBottom: spacing.md }}>
        <Text style={labelStyle}>What to Expect</Text>
        {agenda.map((item, i) => (
          <Row key={i} style={{ marginBottom: "10px" }}>
            <Column style={{ width: "28px", verticalAlign: "top", paddingTop: "1px" }}>
              <Text style={{
                width:        "20px",
                height:       "20px",
                borderRadius: radius.full,
                background:   colors.primaryLight,
                color:        colors.primary,
                fontSize:     font.size.xs,
                fontWeight:   font.weight.bold,
                textAlign:    "center",
                lineHeight:   "20px",
                margin:       "0",
              }}>
                {i + 1}
              </Text>
            </Column>
            <Column>
              <Text style={{ ...bodyText, margin: "0" }}>{item}</Text>
            </Column>
          </Row>
        ))}
      </Section>

      {/* CTA */}
      <Section style={{ ...sectionPad, paddingBottom: spacing.lg, textAlign: "center" }}>
        <Link href={demoLink} style={primaryBtn}>Join the Demo →</Link>

        {addCalendarLink && (
          <Text style={{ marginTop: spacing.sm }}>
            <Link href={addCalendarLink} style={{ color: colors.muted, fontSize: font.size.sm, textDecoration: "underline" }}>
              + Add to Google Calendar
            </Link>
          </Text>
        )}

        <Text style={{ ...bodyText, fontSize: font.size.sm, marginTop: spacing.md, textAlign: "center" }}>
          Need to reschedule?{" "}
          <Link href={`${APP_URL}/demo/reschedule`} style={{ color: colors.primary }}>Click here</Link>{" "}
          or simply reply to this email.
        </Text>
      </Section>

      <Hr style={{ borderColor: colors.border, margin: "0 36px" }} />

      <Section style={{ ...sectionPad, paddingTop: spacing.md, paddingBottom: spacing.lg }}>
        <Text style={{ ...bodyText, fontSize: font.size.sm, marginBottom: "0" }}>
          See you soon,<br />
          <strong style={{ color: colors.foreground }}>{hostName}</strong>
          {hostTitle && <span style={{ color: colors.muted }}> — {hostTitle}</span>}
        </Text>
      </Section>
    </BaseLayout>
  );
}
