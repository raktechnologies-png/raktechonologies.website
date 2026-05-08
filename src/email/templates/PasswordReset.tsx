import { Section, Row, Column, Text, Heading, Link, Hr } from "@react-email/components";
import BaseLayout from "../components/BaseLayout";
import {
  colors, font, spacing, radius,
  sectionPad, bodyText, primaryBtn,
  APP_URL, SITE_URL,
} from "../theme";

export interface PasswordResetProps {
  userName:       string;
  resetLink:      string;
  expiresInHours?: number;
  ipAddress?:     string;
  location?:      string;
}

export default function PasswordReset({
  userName       = "Naledi",
  resetLink      = "https://app.raklytics.co.za/reset/token",
  expiresInHours = 1,
  ipAddress,
  location,
}: PasswordResetProps) {
  return (
    <BaseLayout
      preview="Reset your RAKlytics password — this link expires in 1 hour."
      badge="Security"
    >
      {/* Icon banner */}
      <Section style={{
        backgroundColor: colors.warningLight,
        borderBottom:    `1px solid #FDE68A`,
        padding:         `${spacing.md} 36px`,
        textAlign:       "center",
      }}>
        <Text style={{ fontSize: "36px", margin: "0 0 6px" }}>🔐</Text>
        <Text style={{
          fontSize:   font.size.sm,
          color:      colors.warning,
          fontWeight: font.weight.semibold,
          margin:     "0",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}>
          Password Reset Request
        </Text>
      </Section>

      {/* Body */}
      <Section style={{ ...sectionPad, paddingTop: spacing.lg, paddingBottom: spacing.md }}>
        <Heading style={{
          fontSize:      font.size.xl,
          fontWeight:    font.weight.extrabold,
          letterSpacing: "-0.025em",
          color:         colors.foreground,
          margin:        `0 0 ${spacing.md}`,
        }}>
          Reset your password, {userName}
        </Heading>

        <Text style={bodyText}>
          We received a request to reset the password for your RAKlytics account. Click the button below to create a new password.
        </Text>
        <Text style={{ ...bodyText, fontWeight: font.weight.semibold, color: colors.warning }}>
          This link expires in {expiresInHours} hour{expiresInHours !== 1 ? "s" : ""}.
        </Text>
      </Section>

      {/* CTA */}
      <Section style={{ textAlign: "center", padding: `${spacing.sm} 36px ${spacing.lg}` }}>
        <Link href={resetLink} style={primaryBtn}>Reset My Password →</Link>
      </Section>

      {/* Fallback URL */}
      <Section style={{ ...sectionPad, paddingBottom: spacing.md }}>
        <Text style={{ ...bodyText, fontSize: font.size.sm }}>
          If the button doesn't work, copy and paste this link into your browser:
        </Text>
        <Text style={{
          fontSize:        font.size.xs,
          color:           colors.muted,
          backgroundColor: colors.surface2,
          padding:         "10px 14px",
          borderRadius:    radius.sm,
          wordBreak:       "break-all",
          margin:          "0",
          fontFamily:      "monospace",
        }}>
          {resetLink}
        </Text>
      </Section>

      <Hr style={{ borderColor: colors.border, margin: "0 36px" }} />

      {/* Security notice */}
      <Section style={{
        ...sectionPad,
        paddingTop:    spacing.md,
        paddingBottom: spacing.lg,
      }}>
        <Text style={{
          ...bodyText,
          fontSize:        font.size.sm,
          backgroundColor: colors.surface,
          padding:         "14px 16px",
          borderRadius:    radius.md,
          border:          `1px solid ${colors.border}`,
          margin:          "0 0 12px",
        }}>
          🛡️ <strong>Didn't request this?</strong> If you didn't request a password reset, you can safely ignore this email. Your password will not change unless you click the button above.
        </Text>

        {(ipAddress || location) && (
          <Text style={{ ...bodyText, fontSize: font.size.sm, color: colors.muted2, margin: "0" }}>
            This request was made from{" "}
            {location && <strong style={{ color: colors.muted }}>{location}</strong>}
            {ipAddress && location && " "}
            {ipAddress && <span>({ipAddress})</span>}. If this wasn't you, please{" "}
            <Link href={`${SITE_URL}/contact`} style={{ color: colors.danger }}>
              contact support immediately
            </Link>.
          </Text>
        )}
      </Section>
    </BaseLayout>
  );
}
