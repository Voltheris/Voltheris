export interface PricingTier {
  name: string;
  workflowCount: string;
  description: string;
  implementationPrice: string; // e.g. "Starting at $2,500" or "Custom Proposal"
  ongoingPrice: string; // e.g. "Starting at $300/month" or "Quoted separately"
  features: string[]; // short, scannable — 2-4 words each, no periods
  usageCapNote?: string; // fair-use software-licensing cap, shown as small sub-text under the price
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
}

/**
 * Pricing leads with the implementation fee — a one-time engagement to
 * build the system — with ongoing optimization as a secondary,
 * optional line per card. The product being sold is a built system,
 * not a software subscription.
 *
 * Kept deliberately short: one description sentence, 4-5 scannable
 * feature tags, one price. Shared information (what every tier
 * includes, the ongoing-optimization explanation) lives ONCE, below
 * all three cards in PricingPreview — not repeated per card.
 *
 * CTA labels are intentionally DIFFERENT per tier here ("Book
 * Assessment" / "Schedule Consultation" / "Request Proposal") — a
 * deliberate three-tier differentiation matching each tier's context,
 * not an accident. This is distinct from the site's other CTAs
 * elsewhere, which stay consolidated to "Book a consultation."
 */
export const pricingTiers: PricingTier[] = [
  {
    name: "Lead Capture System",
    workflowCount: "1 workflow",
    description: "Perfect for businesses that want to automate lead capture, follow-up, and appointment booking.",
    implementationPrice: "Starting at $3,500",
    ongoingPrice: "Starting at $497/month",
    features: [
      "24/7 AI lead response",
      "Automatic lead qualification",
      "Frictionless appointment booking",
      "Fully managed CRM sync — HubSpot, Make & Calendly included",
    ],
    usageCapNote: "Includes software licensing for up to 500 lead conversations/month.",
    ctaLabel: "Book Assessment",
    ctaHref: "/contact",
  },
  {
    name: "Business Operations System",
    workflowCount: "Up to 4 workflows",
    description: "Designed for businesses ready to automate their core operations and eliminate repetitive manual work.",
    implementationPrice: "Starting at $7,500",
    ongoingPrice: "Starting at $897/month",
    features: [
      "Up to 4 custom workflows",
      "Advanced CRM & pipeline sync",
      "Hands-free client onboarding",
      "Automated team notifications",
      "AI-assisted cross-platform integrations",
    ],
    usageCapNote: "Includes software licensing for up to 10,000 tasks & 1,500 AI conversations/month.",
    featured: true,
    ctaLabel: "Schedule Consultation",
    ctaHref: "/contact",
  },
  {
    name: "Enterprise Automation",
    workflowCount: "Unlimited workflows",
    description: "For organizations requiring custom automation across multiple departments, locations, or business systems.",
    implementationPrice: "Custom Proposal",
    ongoingPrice: "Quoted separately",
    features: [
      "Unlimited workflows",
      "Dedicated implementation lead",
      "Custom integrations",
      "SLA-backed support",
      "Enterprise documentation & training",
    ],
    ctaLabel: "Request Proposal",
    ctaHref: "/contact",
  },
];
