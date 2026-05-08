/**
 * RAKlytics Email Template System
 *
 * Usage with Resend:
 *
 *   import { render } from "@react-email/render";
 *   import { WelcomeOnboarding } from "@/email";
 *
 *   const html = await render(<WelcomeOnboarding userName="Thabo" />);
 *   await resend.emails.send({ ..., html });
 *
 * Or pass directly to Resend (it auto-renders React Email components):
 *
 *   await resend.emails.send({ ..., react: <WelcomeOnboarding userName="Thabo" /> });
 */

export { default as InstitutionalOutreach } from "./templates/InstitutionalOutreach";
export { default as DemoBooking }           from "./templates/DemoBooking";
export { default as WelcomeOnboarding }     from "./templates/WelcomeOnboarding";
export { default as PasswordReset }         from "./templates/PasswordReset";
export { default as MonthlyAnalytics }      from "./templates/MonthlyAnalytics";
export { default as StudentNotification }   from "./templates/StudentNotification";

// Re-export prop types
export type { InstitutionalOutreachProps } from "./templates/InstitutionalOutreach";
export type { DemoBookingProps }           from "./templates/DemoBooking";
export type { WelcomeOnboardingProps, UserRole } from "./templates/WelcomeOnboarding";
export type { PasswordResetProps }         from "./templates/PasswordReset";
export type { MonthlyAnalyticsProps }      from "./templates/MonthlyAnalytics";
export type { StudentNotificationProps, NotificationType } from "./templates/StudentNotification";

// Re-export theme for external use
export * as emailTheme from "./theme";
