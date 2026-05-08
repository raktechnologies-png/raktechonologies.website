import { Section, Row, Column, Text, Heading, Link, Hr } from "@react-email/components";
import BaseLayout from "../components/BaseLayout";
import {
  colors, font, spacing, radius,
  sectionPad, bodyText, labelStyle, primaryBtn, secondaryBtn,
  APP_URL, SITE_URL,
} from "../theme";

export type UserRole = "admin" | "instructor" | "student";

export interface WelcomeOnboardingProps {
  userName:          string;
  dashboardLink?:    string;
  organizationName?: string;
  role?:             UserRole;
}

const steps: Record<UserRole, { icon: string; title: string; body: string; href: string }[]> = {
  admin: [
    { icon: "🏫", title: "Set Up Your Institution", body: "Configure your institution profile, add departments, and import your course catalogue.", href: `${APP_URL}/setup/institution` },
    { icon: "👥", title: "Invite Your Team",        body: "Add instructors and administrators who will use RAKlytics alongside you.",             href: `${APP_URL}/setup/team` },
    { icon: "📊", title: "Connect Your LMS",        body: "Link your learning management system to start pulling live data into your dashboard.", href: `${APP_URL}/setup/integrations` },
  ],
  instructor: [
    { icon: "📚", title: "Explore Your Courses",    body: "View all courses you're assigned to and see your students' current engagement data.", href: `${APP_URL}/courses` },
    { icon: "🎯", title: "Set Learning Goals",      body: "Define completion targets and performance benchmarks for each of your modules.",       href: `${APP_URL}/goals` },
    { icon: "🔔", title: "Configure Alerts",        body: "Get notified when students fall below engagement or performance thresholds.",           href: `${APP_URL}/alerts` },
  ],
  student: [
    { icon: "🗂️", title: "View Your Courses",       body: "See all enrolled courses, upcoming assessments, and your current progress at a glance.", href: `${APP_URL}/courses` },
    { icon: "📈", title: "Track Your Performance",  body: "Your personal analytics dashboard shows trends, strengths, and areas to focus on.",      href: `${APP_URL}/progress` },
    { icon: "💬", title: "Connect With Support",    body: "Reach your instructor or the support team directly from within the platform.",           href: `${APP_URL}/support` },
  ],
};

const roleLabel: Record<UserRole, string> = {
  admin:      "Institution Administrator",
  instructor: "Instructor",
  student:    "Student",
};

export default function WelcomeOnboarding({
  userName          = "Thabo",
  dashboardLink     = APP_URL,
  organizationName  = "RAKlytics",
  role              = "admin",
}: WelcomeOnboardingProps) {
  const userSteps = steps[role];

  return (
    <BaseLayout
      preview={`Welcome to RAKlytics, ${userName}! Your ${organizationName} analytics workspace is ready.`}
      badge="Welcome"
    >
      {/* Hero */}
      <Section style={{
        background:   "linear-gradient(160deg, #F5F3FF 0%, #EEF2FF 100%)",
        padding:      `${spacing.lg} 36px`,
        textAlign:    "center",
        borderBottom: `1px solid ${colors.border}`,
      }}>
        <Text style={{ fontSize: "48px", margin: "0 0 8px" }}>🎉</Text>
        <Heading style={{
          fontSize:      font.size["2xl"],
          fontWeight:    font.weight.extrabold,
          letterSpacing: "-0.03em",
          color:         colors.foreground,
          margin:        "0 0 8px",
        }}>
          Welcome, {userName}!
        </Heading>
        <Text style={{
          fontSize:   font.size.base,
          color:      colors.muted,
          margin:     "0",
          lineHeight: font.leading.relaxed,
        }}>
          You're now part of {organizationName} on RAKlytics.<br />
          Your role: <strong style={{ color: colors.primary }}>{roleLabel[role]}</strong>
        </Text>
      </Section>

      {/* Getting started */}
      <Section style={{ ...sectionPad, paddingTop: spacing.lg, paddingBottom: spacing.sm }}>
        <Text style={labelStyle}>Get Started in 3 Steps</Text>
        {userSteps.map((step, i) => (
          <Row key={step.title} style={{
            marginBottom:    spacing.sm,
            backgroundColor: colors.surface,
            borderRadius:    radius.md,
            border:          `1px solid ${colors.border}`,
            overflow:        "hidden",
          }}>
            <Column style={{ width: "56px", textAlign: "center", padding: "16px 0 16px 16px", verticalAlign: "top" }}>
              <Text style={{
                width:        "32px",
                height:       "32px",
                borderRadius: radius.full,
                background:   `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                color:        "#FFFFFF",
                fontSize:     font.size.sm,
                fontWeight:   font.weight.bold,
                textAlign:    "center",
                lineHeight:   "32px",
                margin:       "0 auto 6px",
                display:      "block",
              }}>
                {i + 1}
              </Text>
              <Text style={{ fontSize: "18px", margin: "0", textAlign: "center" }}>{step.icon}</Text>
            </Column>
            <Column style={{ padding: "16px 16px 16px 8px", verticalAlign: "top" }}>
              <Text style={{
                fontSize:   font.size.base,
                fontWeight: font.weight.semibold,
                color:      colors.foreground,
                margin:     "0 0 4px",
              }}>
                {step.title}
              </Text>
              <Text style={{ ...bodyText, margin: "0 0 8px", fontSize: font.size.sm }}>
                {step.body}
              </Text>
              <Link href={step.href} style={{
                fontSize:      font.size.sm,
                color:         colors.primary,
                fontWeight:    font.weight.semibold,
                textDecoration:"none",
              }}>
                Get started →
              </Link>
            </Column>
          </Row>
        ))}
      </Section>

      {/* CTA */}
      <Section style={{ ...sectionPad, paddingBottom: spacing.lg, paddingTop: spacing.md, textAlign: "center" }}>
        <Link href={dashboardLink} style={primaryBtn}>Go to Your Dashboard →</Link>
      </Section>

      <Hr style={{ borderColor: colors.border, margin: "0 36px" }} />

      {/* Help */}
      <Section style={{ ...sectionPad, paddingTop: spacing.md, paddingBottom: spacing.lg }}>
        <Text style={{ ...bodyText, fontSize: font.size.sm, textAlign: "center", margin: "0" }}>
          Questions? Visit our{" "}
          <Link href={`${SITE_URL}/contact`} style={{ color: colors.primary }}>Help Centre</Link>{" "}
          or reply to this email — we respond within 24 hours.
        </Text>
      </Section>
    </BaseLayout>
  );
}
