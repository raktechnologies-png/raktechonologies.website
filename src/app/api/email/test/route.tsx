export const runtime = "nodejs";

/**
 * TEST ROUTE — remove before going to production.
 * Visit: http://localhost:3000/api/email/test?template=welcome
 *
 * ?template= options:
 *   welcome | password-reset | demo | outreach | analytics | student
 */

import { Resend }  from "resend";
import { render }  from "@react-email/render";
import {
  WelcomeOnboarding,
  PasswordReset,
  DemoBooking,
  InstitutionalOutreach,
  MonthlyAnalytics,
  StudentNotification,
} from "@/email";

export async function GET(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "RESEND_API_KEY not set in .env.local" }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const template = searchParams.get("template") ?? "welcome";

  // ── Always send to your own Gmail (required while domain is unverified) ──
  const TO = "agreementkgoane@gmail.com";
  const FROM = process.env.RESEND_FROM ?? "RAK Technologies <onboarding@resend.dev>";

  const resend = new Resend(process.env.RESEND_API_KEY);

  type TemplateResult = { subject: string; html: string };

  const templates: Record<string, () => Promise<TemplateResult>> = {
    "welcome": async () => ({
      subject: "✅ TEST — Welcome to RAKlytics",
      html: await render(
        <WelcomeOnboarding
          userName="Kgoane"
          role="admin"
          organizationName="RAK Demo University"
          dashboardLink="https://app.raklytics.co.za"
        />
      ),
    }),

    "password-reset": async () => ({
      subject: "✅ TEST — Reset your RAKlytics password",
      html: await render(
        <PasswordReset
          userName="Kgoane"
          resetLink="https://app.raklytics.co.za/reset/test-token-123"
          expiresInHours={1}
          ipAddress="196.2.1.10"
          location="Johannesburg, ZA"
        />
      ),
    }),

    "demo": async () => ({
      subject: "✅ TEST — Your RAKlytics Demo is Confirmed",
      html: await render(
        <DemoBooking
          recipientName="Dr. Nkosi"
          demoDate="Wednesday, 14 May 2025"
          demoTime="10:00 AM SAST"
          demoLink="https://app.raklytics.co.za/demo/join"
          hostName="Kgoane Agreement"
          hostTitle="Founder, RAKlytics"
        />
      ),
    }),

    "outreach": async () => ({
      subject: "✅ TEST — Institutional Outreach",
      html: await render(
        <InstitutionalOutreach
          recipientName="Dr. Mokoena"
          recipientTitle="Head of Academic Affairs"
          institutionName="University of Johannesburg"
          senderName="Kgoane Agreement"
          senderTitle="Founder, RAKlytics"
          ctaLink="https://app.raklytics.co.za/demo"
        />
      ),
    }),

    "analytics": async () => ({
      subject: "✅ TEST — April 2025 Analytics Report",
      html: await render(
        <MonthlyAnalytics
          institutionName="RAK Demo University"
          adminName="Prof. Dlamini"
          period="April 2025"
          metrics={{
            activeStudents:     1247,
            completionRate:     78,
            avgScore:           71,
            totalCourses:       34,
            prevActiveStudents: 1180,
            prevCompletionRate: 74,
            prevAvgScore:       68,
          }}
          topCourse="Introduction to Data Science"
          topCourseScore={89}
          atRiskCount={23}
          dashboardLink="https://app.raklytics.co.za/dashboard"
        />
      ),
    }),

    "student": async () => ({
      subject: "✅ TEST — Student Notification",
      html: await render(
        <StudentNotification
          studentName="Amahle"
          type="grade"
          title="Your assignment has been graded"
          message="Your instructor has reviewed and graded your Case Study Analysis submission."
          courseName="Business Analytics 201"
          score={84}
          maxScore={100}
          instructorName="Dr. Sithole"
          ctaLink="https://app.raklytics.co.za/courses/ba201"
        />
      ),
    }),
  };

  const builder = templates[template];
  if (!builder) {
    return Response.json({
      error:     `Unknown template "${template}"`,
      available: Object.keys(templates),
    }, { status: 400 });
  }

  try {
    const { subject, html } = await builder();
    const { data, error }   = await resend.emails.send({ from: FROM, to: [TO], subject, html });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({
      success:  true,
      template,
      to:       TO,
      messageId: data?.id,
      message:  `Email sent! Check ${TO} — it should arrive within 30 seconds.`,
    });
  } catch (err) {
    console.error("Template render error:", err);
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
