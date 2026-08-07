/**
 * ⚠️ PLACEHOLDER CONTENT — an illustrative founding story written to
 * demonstrate the CompanyTimeline component. Replace with Voltheris'
 * actual history (or trim to whatever's true) before launch.
 */
export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    year: "2019",
    title: "Founded",
    description:
      "Started as a two-person consultancy automating lead intake by hand for local businesses — no product yet, just spreadsheets and long nights.",
  },
  {
    year: "2021",
    title: "First platform built",
    description:
      "Turned repeatable client work into Voltheris’ first reusable AI intake system, deployed for three real estate clients.",
  },
  {
    year: "2023",
    title: "Expanded across industries",
    description:
      "Extended the platform into law, healthcare, and finance — each with its own qualification logic, built on the same underlying system.",
  },
  {
    year: "2025",
    title: "40+ systems in production",
    description:
      "Crossed forty live deployments across six industries, with a dedicated team supporting every one of them.",
  },
];
