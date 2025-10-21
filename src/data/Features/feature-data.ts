import {
  Clock,
  QrCode,
  BellRing,
  ShieldCheck,
  MessageSquare,
  CalendarCheck,
  BarChart3,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureData: Feature[] = [
  {
    icon: Clock,
    title: "Real-time Appointment Tracking",
    description:
      "Monitor and update appointments in real time to ensure efficient scheduling and minimal delays.",
  },
  {
    icon: QrCode,
    title: "QR Code-Based Check-ins",
    description:
      "Enable seamless appointment verification and attendance through quick QR code scanning.",
  },
  {
    icon: BellRing,
    title: "Automated Reminders",
    description:
      "Automatically send reminders and notifications to reduce missed appointments and improve engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control",
    description:
      "Protect sensitive information by assigning permissions based on user roles and responsibilities.",
  },
  {
    icon: MessageSquare,
    title: "Feedback Redirection",
    description:
      "Collect and redirect feedback efficiently to counselors or staff for continuous improvement.",
  },
  {
    icon: CalendarCheck,
    title: "Personalized Scheduling",
    description:
      "Allow staff and counselors to customize scheduling options that best fit their availability and workflow.",
  },
  {
    icon: BarChart3,
    title: "Data Visualization & Reports",
    description:
      "Gain actionable insights with analytics dashboards and visual reports for performance tracking.",
  },
];

export default FeatureData;
