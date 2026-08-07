export interface IndustryStat {
  value: number;
  suffix: string;
  label: string;
}

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  eyebrow: string;
  headline: string;
  description: string;
  steps: string[];
  stats: IndustryStat[];
}

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "TbHome",
    eyebrow: "Real Estate",
    headline: "Every inquiry answered before the listing goes cold.",
    description:
      "Voltheris qualifies buyers and sellers the moment they reach out, books showings automatically, and keeps every agent's pipeline current without a single manual update.",
    steps: ["Capture the inquiry", "Qualify buyer intent", "Book the showing"],
    stats: [
      { value: 58, suffix: "%", label: "More showings booked" },
      { value: 6, suffix: " hrs", label: "Saved per agent, weekly" },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "TbStethoscope",
    eyebrow: "Healthcare",
    headline: "Patients scheduled, records updated, nothing falls through.",
    description:
      "From first contact to confirmed appointment, Voltheris handles intake, insurance-eligibility screening, and scheduling — so front-desk time goes to patients, not phone trees.",
    steps: ["Capture patient inquiry", "Verify eligibility", "Confirm appointment"],
    stats: [
      { value: 44, suffix: "%", label: "Fewer missed appointments" },
      { value: 3.1, suffix: "x", label: "Faster intake to booking" },
    ],
  },
  {
    slug: "law",
    name: "Law",
    icon: "TbScale",
    eyebrow: "Law Firms",
    headline: "Consultation requests, screened before they reach a partner.",
    description:
      "Voltheris filters inbound case inquiries against your intake criteria automatically, so partners only spend time on the calls that are actually worth taking.",
    steps: ["Capture case inquiry", "Screen against criteria", "Book consultation"],
    stats: [
      { value: 3.4, suffix: "x", label: "Consultation-to-client rate" },
      { value: 0, suffix: "", label: "Unqualified calls booked" },
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "TbBuildingSkyscraper",
    eyebrow: "Construction",
    headline: "Bids triaged and tracked across every regional office.",
    description:
      "Automated intake routes bid requests to the right estimator, keeps CRM records current across offices, and gives leadership one accurate view of the pipeline.",
    steps: ["Capture bid request", "Route to estimator", "Update CRM automatically"],
    stats: [
      { value: 31, suffix: "%", label: "Faster bid turnaround" },
      { value: 100, suffix: "%", label: "CRM records kept current" },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "TbChartLine",
    eyebrow: "Finance",
    headline: "Client onboarding that never waits on a human.",
    description:
      "Voltheris screens prospective clients against your compliance and suitability criteria, schedules advisor consultations, and keeps every record audit-ready.",
    steps: ["Capture prospect inquiry", "Screen for suitability", "Schedule advisor call"],
    stats: [
      { value: 37, suffix: "%", label: "More qualified consultations" },
      { value: 9, suffix: " days", label: "Faster onboarding cycle" },
    ],
  },
  {
    slug: "marketing",
    name: "Marketing",
    icon: "TbSpeakerphone",
    eyebrow: "Marketing Agencies",
    headline: "Client leads qualified before they hit your inbox.",
    description:
      "Voltheris screens inbound leads against your ideal-client profile, routes budget-fit prospects to a strategist, and keeps every touchpoint logged in your CRM.",
    steps: ["Capture inbound lead", "Score against ICP", "Route to strategist"],
    stats: [
      { value: 52, suffix: "%", label: "Fewer unqualified calls" },
      { value: 2.8, suffix: "x", label: "Proposal-to-close rate" },
    ],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    icon: "TbBriefcase",
    eyebrow: "Enterprise",
    headline: "One system, deployed across every team that needs it.",
    description:
      "For organizations running automation at scale, Voltheris designs a custom system across departments — with the governance, integrations, and support an enterprise requires.",
    steps: ["Map cross-team workflows", "Deploy with governance", "Monitor at scale"],
    stats: [
      { value: 12, suffix: "+", label: "Departments automated, avg." },
      { value: 99.9, suffix: "%", label: "System uptime SLA" },
    ],
  },
];
