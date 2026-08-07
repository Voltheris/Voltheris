export interface TrustBlock {
  icon: string;
  title: string;
  description: string;
}

/**
 * Every line here is traceable to real content elsewhere on the site
 * (content/faq.ts, content/industries.ts, content/engagementProcess.ts)
 * — no invented certifications, numbers, or claims. This sits directly
 * under pricing specifically to answer objections at the moment
 * they're most likely to come up, not to pad the page.
 */
export const pricingTrustBlocks: TrustBlock[] = [
  {
    icon: "TbCalendarEvent",
    title: "Implementation timeline",
    description:
      "Most single-workflow builds go live in 11 to 18 days. Multi-workflow engagements typically take four to six weeks, staged so the first workflow is running before the rest are finished.",
  },
  {
    icon: "TbShieldCheck",
    title: "Security & privacy",
    description:
      "Data encrypted in transit and at rest. Every qualification decision is logged and explainable — never a black-box score you can't audit.",
  },
  {
    icon: "TbPlugConnected",
    title: "Compatible software",
    description:
      "HubSpot, Salesforce, Pipedrive, and GoHighLevel out of the box. On something less common? We check feasibility during discovery, free of charge.",
  },
  {
    icon: "TbRoute",
    title: "Industries served",
    description:
      "Real estate, law, healthcare, construction, finance, marketing, and enterprise operations — each with its own qualification logic, built on the same underlying system.",
  },
];
