export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string; // react-icons key, resolved in components/ui/Icon.tsx
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  summary: string;
  stats: Stat[];
  coverImage: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  coverImage: string;
}

export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract" | "Remote";
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface PricingTier {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  href: string;
  ctaLabel: string;
  featured?: boolean;
}

export interface ComparisonRow {
  feature: string;
  values: (string | boolean)[];
}

export interface ComparisonTableData {
  columns: string[];
  rows: ComparisonRow[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
