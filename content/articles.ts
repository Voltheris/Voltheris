/**
 * ⚠️ PLACEHOLDER CONTENT — the `author` field throughout reuses the
 * same placeholder founder name as content/founder.ts ("Julian
 * Marsh"). Update both together if you replace it.
 */
export interface Category {
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { name: "Automation", icon: "TbSettingsAutomation" },
  { name: "Strategy", icon: "TbBulb" },
  { name: "Industry Notes", icon: "TbRoute" },
  { name: "Product", icon: "TbCpu" },
];

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string; // ISO date
  readingTime: string;
  body: string[];
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: "why-crm-automation-fails-in-90-days",
    title: "Why Most CRM Automation Fails in the First 90 Days",
    excerpt:
      "Not because the workflow is wrong, but because it’s built for the demo, not the exceptions.",
    category: "Automation",
    author: "Julian Marsh",
    publishedAt: "2026-03-14",
    readingTime: "7 min read",
    featured: true,
    body: [
      "Most CRM automation projects don’t fail at launch. They fail about ninety days in, once the initial excitement wears off and the exceptions start piling up — the lead that doesn’t fit any of the qualification rules, the duplicate record nobody wants to own, the edge case the demo never covered.",
      "The systems that survive past that point share one trait: they were built expecting to be wrong sometimes, not just to be right most of the time. That means logging every decision, making the qualification logic inspectable, and building in a fast path for a human to overrule the system without breaking it.",
      "It also means treating launch as the beginning of the work, not the end of it. Every Voltheris engagement includes a review cadence for exactly this reason — the workflow that was correct on day one is rarely the workflow that’s still correct on day ninety.",
    ],
  },
  {
    slug: "the-case-for-boring-automation",
    title: "The Case for Boring Automation",
    excerpt:
      "The best-performing systems we’ve built are the ones nobody talks about at the dinner table.",
    category: "Strategy",
    author: "Julian Marsh",
    publishedAt: "2026-02-21",
    readingTime: "5 min read",
    body: [
      "There’s a version of AI automation that’s built to be shown off — flashy dashboards, chatbots with personality, demos designed to get a reaction in a sales meeting. None of that is what actually moves a business’s numbers.",
      "The systems that move numbers are boring by design. They answer the phone faster. They stop a lead from sitting in an inbox overnight. They make sure the CRM record matches reality. Nobody posts about that on social media, but it's the difference between a pipeline that runs and one that leaks.",
      "We’ve started treating “this is boring” as a compliment during design reviews. If a workflow is exciting to look at, we ask what it's compensating for.",
    ],
  },
  {
    slug: "what-40-deployments-taught-us",
    title: "What 40 Deployments Taught Us About Lead Qualification",
    excerpt:
      "Every industry insists its leads are different. Most of the time, the difference is smaller than it looks.",
    category: "Industry Notes",
    author: "Julian Marsh",
    publishedAt: "2026-01-30",
    readingTime: "8 min read",
    featured: true,
    body: [
      "Every client we onboard tells us, correctly, that their leads are different from everyone else's. A law firm's intake criteria really don't look like a real estate agency's. But after forty deployments across six industries, the underlying shape of the problem turns out to be remarkably consistent.",
      "In almost every case, qualification comes down to three questions: does this person have the authority to decide, do they have the budget or eligibility to proceed, and is the timeline realistic. The specific criteria change; the shape of the decision doesn't.",
      "That consistency is exactly why a platform approach works — the qualification logic is industry-specific, but the system underneath it doesn't need to be reinvented for every client.",
    ],
  },
  {
    slug: "hidden-cost-of-a-slow-crm",
    title: "The Hidden Cost of a Slow CRM",
    excerpt:
      "Response time isn't a customer-service metric. For most businesses, it's the single biggest lever on revenue.",
    category: "Automation",
    author: "Julian Marsh",
    publishedAt: "2026-01-09",
    readingTime: "6 min read",
    body: [
      "Ask most sales leaders what their biggest lever on revenue is, and they’ll talk about lead volume, or messaging, or pricing. Almost nobody says response time — and almost every study on the subject says they should.",
      "A lead contacted within the first minute converts at dramatically higher rates than one contacted an hour later. Past thirty minutes, the odds drop close to zero. Most CRMs aren't slow because of technology; they're slow because a human has to notice the lead exists before anything happens.",
      "Automating that first response — not replacing the salesperson, just removing the gap between inquiry and acknowledgment — is consistently the highest-ROI change we make in a new engagement.",
    ],
  },
  {
    slug: "why-we-dont-sell-ai-as-the-headline",
    title: "Why We Don’t Sell “AI” as the Headline",
    excerpt:
      "Clients don't buy artificial intelligence. They buy a calendar that fills itself and a CRM that stays honest.",
    category: "Strategy",
    author: "Julian Marsh",
    publishedAt: "2025-12-11",
    readingTime: "4 min read",
    body: [
      "“AI-powered” has become a headline you can put on almost anything, which means it's stopped meaning very much. We build with AI because it's the right tool for the qualification and scheduling problems we solve — not because the label itself is the pitch.",
      "When we talk to a prospective client, we lead with the outcome: fewer unqualified calls, faster response times, a CRM that reflects reality. The technology underneath is a means, not the message.",
      "It's a small distinction, but it changes what we build. A system designed to sound impressive in a sales deck and a system designed to run quietly for two years are rarely the same system.",
    ],
  },
  {
    slug: "inside-a-voltheris-discovery-call",
    title: "Inside a Voltheris Discovery Call",
    excerpt:
      "What we actually ask in the first thirty minutes — and why it's rarely about technology at all.",
    category: "Product",
    author: "Julian Marsh",
    publishedAt: "2025-11-18",
    readingTime: "5 min read",
    body: [
      "Most discovery calls we run don't mention software until at least twenty minutes in. We spend the first part of the call mapping the actual workflow as it exists today — every handoff, every place a lead or a record sits waiting on a person.",
      "That map is more useful than any feature list. It tells us where automation will actually change a number, versus where it would just move the same bottleneck one step downstream.",
      "By the time we do talk about the system itself, the scope is usually narrower than the client expected — and more precisely aimed at the thing that's actually costing them time.",
    ],
  },
  {
    slug: "healthcare-intake-without-hold-music",
    title: "Healthcare Intake Without the Hold Music",
    excerpt:
      "Patients don't want a chatbot. They want to be scheduled without waiting on hold to prove they have insurance.",
    category: "Industry Notes",
    author: "Julian Marsh",
    publishedAt: "2025-10-27",
    readingTime: "6 min read",
    body: [
      "Healthcare automation has a reputation problem, largely earned by chatbots that try to replace a human conversation entirely. That's not what moves the needle for a clinic's front desk, and it's not what we build.",
      "The actual bottleneck in most practices is eligibility verification — a process that's tedious for staff and invisible to the patient until it delays their appointment. Automating that one step, quietly, in the background, is what actually shortens time-to-booking.",
      "The patient never talks to an AI. They call, they get an appointment, and the eligibility check happens before they've hung up the phone.",
    ],
  },
  {
    slug: "the-metric-that-predicts-churn",
    title: "The Metric That Actually Predicts Churn in Automated Systems",
    excerpt:
      "It isn't uptime, and it isn't lead volume. It's how often a human has to override the system.",
    category: "Product",
    author: "Julian Marsh",
    publishedAt: "2025-09-15",
    readingTime: "6 min read",
    body: [
      "When we review an underperforming engagement, the first number we check isn't uptime or lead volume — it's override frequency. How often is someone on the client's team manually stepping in because the system got something wrong.",
      "A healthy system gets overridden occasionally, as qualification criteria evolve. A system trending toward churn gets overridden constantly, because the logic no longer matches how the business actually operates.",
      "Tracking that number early lets us fix a workflow before the client's trust in the system erodes — which is a much cheaper problem to solve than winning that trust back after the fact.",
    ],
  },
];
