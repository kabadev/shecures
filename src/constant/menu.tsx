import {
  HomeIcon,
  Inbox,
  MessageSquareMore,
  Newspaper,
  ShoppingCart,
} from "lucide-react";
import {
  ZapIcon,
  ChartSplineIcon,
  LifeBuoyIcon,
  PaletteIcon,
  ShieldCheckIcon,
  WaypointsIcon,
} from "lucide-react";
import React from "react";

export const PERKS = [
  {
    icon: MessageSquareMore,
    title: "Community Forum",
    description:
      "A safe and supportive space for women to connect, share experiences, and discuss topics that matter most—from health and wellness to personal growth.",
  },
  {
    icon: Newspaper,
    title: "Resource Center",
    description:
      "Access a comprehensive library of guides, educational materials, and tools to empower, inform, and uplift women across Sierra Leone",
  },
  {
    icon: ChartSplineIcon,
    title: "Marketplace",
    description:
      "Support and shop from women-owned businesses in Sierra Leone. Buy, sell, and promote local products while empowering female entrepreneurs..",
  },
  {
    icon: Inbox,
    title: "Job Board",
    description:
      "Explore job opportunities tailored for women, with resources to help you build your career and achieve financial independence.",
  },

  {
    icon: WaypointsIcon,
    title: "Report Section",
    description:
      "Report incidents of violence, harassment, or legal concerns with full confidentiality, while accessing guidance and support from professionals",
  },
  {
    icon: ZapIcon,
    title: "Real-Time Support",
    description:
      "Get immediate help and counseling through chat or call options, ensuring women have the support they need when they need it most.",
  },
];

export const FooterNav = [
  {
    name: "Home",
    path: "/app",
    icon: <HomeIcon />,
  },
  {
    name: "Forum",
    path: "/app/forum",
    icon: <MessageSquareMore />,
  },
  {
    name: "Shop",
    path: "/app/marketplace",
    icon: <ShoppingCart />,
  },
  {
    name: "Resources",
    path: "/app/resources",
    icon: <Newspaper />,
  },

  {
    name: "Jobs",
    path: "/app/jobs",
    icon: <Inbox />,
  },
];
