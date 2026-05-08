import { Section, Row, Column, Text, Heading, Link, Hr } from "@react-email/components";
import BaseLayout from "../components/BaseLayout";
import {
  colors, font, spacing, radius,
  sectionPad, bodyText, labelStyle, primaryBtn,
  notificationConfig, APP_URL,
} from "../theme";

export type NotificationType = keyof typeof notificationConfig;

export interface StudentNotificationProps {
  studentName:  string;
  type:         NotificationType;
  title:        string;
  message:      string;
  ctaText?:     string;
  ctaLink?:     string;
  courseName?:  string;
  dueDate?:     string;
  score?:       number;
  maxScore?:    number;
  instructorName?: string;
}

const icons: Record<NotificationType, string> = {
  assignment:   "📝",
  grade:        "🏆",
  reminder:     "⏰",
  achievement:  "🌟",
  announcement: "📢",
};

export default function StudentNotification({
  studentName    = "Amahle",
  type           = "assignment",
  title          = "New Assignment: Case Study Analysis",
  message        = "Your instructor has posted a new assignment. Please review the instructions and submit before the deadline.",
  ctaText,
  ctaLink        = APP_URL,
  courseName,
  dueDate,
  score,
  maxScore       = 100,
  instructorName,
}: StudentNotificationProps) {
  const config  = notificationConfig[type];
  const icon    = icons[type];
  const cta     = ctaText ?? (
    type === "assignment"   ? "View Assignment →" :
    type === "grade"        ? "See My Grade →" :
    type === "achievement"  ? "View Achievement →" :
    type === "reminder"     ? "Take Action →" :
                              "View Details →"
  );

  return (
    <BaseLayout
      preview={`${title} — ${message.slice(0, 80)}...`}
      badge={config.label}
    >
      {/* Type banner */}
      <Section style={{
        backgroundColor: config.bg,
        borderBottom:    `1px solid ${config.color}22`,
        padding:         `${spacing.md} 36px`,
      }}>
        <Row>
          <Column style={{ width: "52px", verticalAlign: "middle" }}>
            <Text style={{ fontSize: "32px", margin: "0" }}>{icon}</Text>
          </Column>
          <Column style={{ verticalAlign: "middle" }}>
            <Text style={{
              fontSize:      font.size.xs,
              fontWeight:    font.weight.bold,
              color:         config.color,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              margin:        "0 0 2px",
            }}>
              {config.label}
            </Text>
            <Text style={{
              fontSize:      font.size.md,
              fontWeight:    font.weight.extrabold,
              letterSpacing: "-0.02em",
              color:         colors.foreground,
              margin:        "0",
              lineHeight:    font.leading.snug,
            }}>
              {title}
            </Text>
          </Column>
        </Row>
      </Section>

      {/* Body */}
      <Section style={{ ...sectionPad, paddingTop: spacing.lg, paddingBottom: spacing.md }}>
        <Text style={{ ...bodyText, margin: "0 0 16px" }}>
          Hi {studentName},
        </Text>
        <Text style={bodyText}>{message}</Text>

        {/* Metadata row */}
        {(courseName || dueDate || score !== undefined || instructorName) && (
          <Row style={{
            backgroundColor: colors.surface,
            borderRadius:    radius.md,
            border:          `1px solid ${colors.border}`,
            marginTop:       spacing.sm,
          }}>
            {[
              courseName     && { label: "Course",     value: courseName },
              dueDate        && { label: "Due",         value: dueDate },
              score !== undefined && { label: "Score", value: `${score}/${maxScore} (${Math.round((score/maxScore)*100)}%)` },
              instructorName && { label: "Instructor", value: instructorName },
            ].filter(Boolean).map((item, i, arr) => {
              const d = item as { label: string; value: string };
              return (
                <Column key={d.label} style={{
                  padding:     "14px 16px",
                  borderRight: i < arr.length - 1 ? `1px solid ${colors.border}` : "none",
                  verticalAlign: "top",
                }}>
                  <Text style={labelStyle}>{d.label}</Text>
                  <Text style={{
                    fontSize:   font.size.sm,
                    fontWeight: font.weight.semibold,
                    color:      colors.foreground,
                    margin:     "0",
                  }}>
                    {d.value}
                  </Text>
                </Column>
              );
            })}
          </Row>
        )}

        {/* Achievement badge */}
        {type === "achievement" && (
          <Section style={{
            textAlign:       "center",
            backgroundColor: "#FAF5FF",
            borderRadius:    radius.lg,
            border:          "1px solid #E9D5FF",
            padding:         spacing.lg,
            marginTop:       spacing.md,
          }}>
            <Text style={{ fontSize: "52px", margin: "0 0 8px" }}>🏅</Text>
            <Text style={{
              fontSize:   font.size.lg,
              fontWeight: font.weight.extrabold,
              color:      "#9333EA",
              margin:     "0 0 4px",
            }}>
              Achievement Unlocked!
            </Text>
            <Text style={{ ...bodyText, textAlign: "center", margin: "0", color: "#7C3AED" }}>
              {title}
            </Text>
          </Section>
        )}
      </Section>

      {/* CTA */}
      {ctaLink && (
        <Section style={{ ...sectionPad, paddingBottom: spacing.lg, textAlign: "center" }}>
          <Link href={ctaLink} style={{ ...primaryBtn, background: `linear-gradient(135deg, ${config.color}, ${config.color}CC)` }}>
            {cta}
          </Link>
        </Section>
      )}

      <Hr style={{ borderColor: colors.border, margin: "0 36px" }} />

      <Section style={{ ...sectionPad, paddingTop: spacing.sm, paddingBottom: spacing.md }}>
        <Text style={{ ...bodyText, fontSize: font.size.sm, textAlign: "center", margin: "0" }}>
          Manage your notification preferences in{" "}
          <Link href={`${APP_URL}/settings/notifications`} style={{ color: colors.primary }}>
            account settings
          </Link>.
        </Text>
      </Section>
    </BaseLayout>
  );
}
