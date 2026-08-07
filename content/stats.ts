/**
 * ⚠️ PLACEHOLDER CONTENT — read before launch.
 *
 * These figures are illustrative, written to demonstrate the stats-band
 * component design. "6 industries served" and the ROI range are the
 * only ones directly derived from content/caseStudies.ts (also
 * placeholder — see the flag at the top of that file); "11–18 days to
 * launch" mirrors the same claim already stated as methodology in
 * content/faq.ts. None of this should be presented as measured,
 * audited results until it's replaced with real client data.
 */
export interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export const heroStats: StatItem[] = [
  { value: 6, suffix: "", label: "Industries served, real estate to finance" },
  { value: 11, suffix: "–18 days", label: "Typical time to first system live" },
  { value: 190, suffix: "–312%", label: "ROI range across published case studies" },
  { value: 4, suffix: "", label: "Structured phases — discovery to launch support" },
];

