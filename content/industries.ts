export interface Industry {
  slug: string;
  name: string;
  icon: string;
  eyebrow: string;
  headline: string;
  description: string;
  steps: string[];
  capabilities: string[];
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
    capabilities: ["Instant inquiry response", "Automatic showing scheduling"],
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
    capabilities: ["Eligibility checked before the call ends", "Appointments confirmed automatically"],
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
    capabilities: ["Inquiries screened against your intake criteria", "Only qualified calls reach a partner"],
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
    capabilities: ["Bids routed to the right estimator automatically", "One accurate pipeline view across offices"],
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
    capabilities: ["Suitability screening before the call is booked", "Audit-ready records from the first contact"],
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
    capabilities: ["Leads scored against your ideal-client profile", "Every touchpoint logged automatically"],
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
    capabilities: ["Built with governance and access control from day one", "Designed to scale across departments"],
  },
];
