import { Section, Row, Column, Text, Heading, Link, Hr } from "@react-email/components";
import BaseLayout from "../components/BaseLayout";
import MetricCard from "../components/MetricCard";
import {
  colors, font, spacing, radius,
  sectionPad, bodyText, labelStyle, primaryBtn,
  APP_URL,
} from "../theme";

export interface MonthlyAnalyticsProps {
  institutionName:  string;
  adminName:        string;
  period:           string;
  metrics: {
    activeStudents:  number;
    completionRate:  number;
    avgScore:        number;
    totalCourses:    number;
    prevActiveStudents?:  number;
    prevCompletionRate?:  number;
    prevAvgScore?:        number;
  };
  topCourse?:        string;
  topCourseScore?:   number;
  insight?:          string;
  atRiskCount?:      number;
  dashboardLink?:    string;
}

function trend(current: number, prev?: number): "up" | "down" | "neutral" {
  if (prev === undefined) return "neutral";
  return current > prev ? "up" : current < prev ? "down" : "neutral";
}

export default function MonthlyAnalytics({
  institutionName  = "University of Pretoria",
  adminName        = "Prof. Dlamini",
  period           = "April 2025",
  metrics          = { activeStudents: 1247, completionRate: 78, avgScore: 71, totalCourses: 34 },
  topCourse        = "Introduction to Data Science",
  topCourseScore   = 89,
  insight,
  atRiskCount,
  dashboardLink    = APP_URL,
}: MonthlyAnalyticsProps) {
  const defaultInsight = insight ?? `Completion rates at ${institutionName} are ${
    metrics.completionRate >= 75 ? "tracking above the national average" : "below the target threshold — intervention may be needed"
  } this period.`;

  return (
    <BaseLayout
      preview={`${institutionName} — ${period} Analytics Summary: ${metrics.activeStudents} active students, ${metrics.completionRate}% completion rate.`}
      badge="Monthly Report"
    >
      {/* Header */}
      <Section style={{ ...sectionPad, paddingTop: spacing.lg, paddingBottom: spacing.sm }}>
        <Text style={labelStyle}>{period} · Analytics Summary</Text>
        <Heading style={{
          fontSize:      font.size.xl,
          fontWeight:    font.weight.extrabold,
          letterSpacing: "-0.025em",
          color:         colors.foreground,
          margin:        "0 0 8px",
        }}>
          {institutionName}
        </Heading>
        <Text style={{ ...bodyText, margin: "0" }}>
          Dear {adminName}, here is your institution's learning analytics summary for <strong>{period}</strong>.
        </Text>
      </Section>

      {/* Metrics grid */}
      <Section style={{ ...sectionPad, paddingTop: spacing.md, paddingBottom: spacing.md }}>
        <Text style={labelStyle}>Performance Overview</Text>
        <Row style={{
          border:       `1px solid ${colors.border}`,
          borderRadius: radius.lg,
          overflow:     "hidden",
        }}>
          <MetricCard
            label="Active Students"
            value={metrics.activeStudents.toLocaleString()}
            trend={trend(metrics.activeStudents, metrics.prevActiveStudents)}
            accent={colors.primary}
          />
          <MetricCard
            label="Completion Rate"
            value={metrics.completionRate}
            unit="%"
            trend={trend(metrics.completionRate, metrics.prevCompletionRate)}
            accent={metrics.completionRate >= 75 ? colors.success : colors.warning}
          />
          <MetricCard
            label="Avg. Score"
            value={metrics.avgScore}
            unit="%"
            trend={trend(metrics.avgScore, metrics.prevAvgScore)}
            accent={colors.secondary}
          />
          <MetricCard
            label="Active Courses"
            value={metrics.totalCourses}
            accent={colors.info}
          />
        </Row>
      </Section>

      {/* Insight callout */}
      <Section style={{ ...sectionPad, paddingBottom: spacing.md }}>
        <Row style={{
          backgroundColor: colors.primaryLight,
          borderRadius:    radius.md,
          border:          `1px solid ${colors.primaryBorder}`,
          padding:         spacing.md,
        }}>
          <Column style={{ width: "28px", verticalAlign: "top", paddingTop: "2px" }}>
            <Text style={{ fontSize: "18px", margin: "0" }}>💡</Text>
          </Column>
          <Column>
            <Text style={{
              fontSize:   font.size.base,
              color:      colors.primary,
              fontWeight: font.weight.semibold,
              margin:     "0 0 4px",
            }}>
              Key Insight
            </Text>
            <Text style={{ ...bodyText, color: colors.secondary, margin: "0" }}>
              {defaultInsight}
            </Text>
          </Column>
        </Row>
      </Section>

      {/* Top course + at-risk */}
      <Section style={{ ...sectionPad, paddingBottom: spacing.md }}>
        <Row>
          {topCourse && (
            <Column style={{ paddingRight: "8px" }}>
              <Text style={labelStyle}>Top Performing Course</Text>
              <Row style={{
                backgroundColor: colors.successLight,
                borderRadius:    radius.md,
                border:          `1px solid #A7F3D0`,
                padding:         "14px 16px",
              }}>
                <Column>
                  <Text style={{
                    fontSize:   font.size.sm,
                    fontWeight: font.weight.semibold,
                    color:      colors.success,
                    margin:     "0 0 3px",
                  }}>
                    {topCourse}
                  </Text>
                  {topCourseScore !== undefined && (
                    <Text style={{ fontSize: font.size.xl, fontWeight: font.weight.extrabold, color: colors.success, margin: "0", lineHeight: "1" }}>
                      {topCourseScore}%
                    </Text>
                  )}
                </Column>
              </Row>
            </Column>
          )}

          {atRiskCount !== undefined && (
            <Column style={{ paddingLeft: "8px" }}>
              <Text style={labelStyle}>At-Risk Students</Text>
              <Row style={{
                backgroundColor: colors.dangerLight,
                borderRadius:    radius.md,
                border:          "1px solid #FECACA",
                padding:         "14px 16px",
              }}>
                <Column>
                  <Text style={{ fontSize: font.size.xl, fontWeight: font.weight.extrabold, color: colors.danger, margin: "0 0 3px", lineHeight: "1" }}>
                    {atRiskCount}
                  </Text>
                  <Text style={{ fontSize: font.size.sm, color: colors.danger, fontWeight: font.weight.semibold, margin: "0" }}>
                    Students need attention
                  </Text>
                </Column>
              </Row>
            </Column>
          )}
        </Row>
      </Section>

      {/* CTA */}
      <Section style={{ ...sectionPad, paddingBottom: spacing.lg, textAlign: "center" }}>
        <Hr style={{ borderColor: colors.border, margin: "0 0 24px" }} />
        <Link href={dashboardLink} style={primaryBtn}>View Full Dashboard →</Link>
        <Text style={{ ...bodyText, fontSize: font.size.sm, marginTop: spacing.sm, textAlign: "center" }}>
          This report is generated automatically each month. You can customise what appears here in your{" "}
          <Link href={`${APP_URL}/settings/reports`} style={{ color: colors.primary }}>report settings</Link>.
        </Text>
      </Section>
    </BaseLayout>
  );
}
