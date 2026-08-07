/**
 * ⚠️ PLACEHOLDER CONTENT — read before launch.
 *
 * Every case study below (client names, challenge/solution copy,
 * metrics, ROI figures, timelines, and testimonial quotes) is
 * illustrative content written to demonstrate the Portfolio page
 * design. None of these are real Voltheris clients or real results.
 *
 * Publishing this as-is on a live domain would mean presenting
 * fabricated client names and testimonials as genuine — replace every
 * entry with real client data (with the client's permission to use
 * their name and figures) before launch. The `featuredCaseStudy`
 * export and every stat derived from this file elsewhere in the site
 * (StatsBand, PortfolioPreview, content/stats.ts) inherit this same
 * caveat.
 */
export interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
}

export interface TimelinePhase {
  phase: string;
  duration: string;
  description: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface CaseStudyStat {
  value: number;
  suffix: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  icon: string;
  summary: string;
  challenge: string;
  solution: string;
  previewStats: { value: string; label: string }[];
  heroStat: CaseStudyStat;
  roi: CaseStudyStat;
  metrics: CaseStudyMetric[];
  timeline: TimelinePhase[];
  testimonial: CaseStudyTestimonial;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "harrow-realty-group",
    client: "Harrow Realty Group",
    industry: "Real Estate",
    icon: "TbHome",
    featured: true,
    summary:
      "Replaced three inbox-checking hours a day with an AI intake system that qualifies buyers before an agent ever sees the lead.",
    challenge:
      "Harrow’s five agents were losing hours a day to unqualified inquiries — sorting form-fills and voicemails by hand before a single showing could get booked.",
    solution:
      "Voltheris built an AI intake layer that scores every inquiry against Harrow’s buyer criteria in real time, then routes qualified leads straight to the right agent’s calendar.",
    previewStats: [
      { value: "58%", label: "More showings booked" },
      { value: "6 hrs", label: "Saved per agent, weekly" },
    ],
    heroStat: { value: 58, suffix: "%", label: "More showings booked, first quarter" },
    roi: { value: 312, suffix: "%", label: "ROI within six months" },
    metrics: [
      { label: "Time to first response", before: "4.2 hrs", after: "38 sec" },
      { label: "Showings booked / month", before: "31", after: "49" },
      { label: "Agent hours on intake", before: "9 hrs/wk", after: "3 hrs/wk" },
    ],
    timeline: [
      { phase: "Discovery", duration: "Week 1", description: "Mapped Harrow’s buyer-qualification criteria and existing CRM structure." },
      { phase: "Build", duration: "Weeks 2–3", description: "Intake AI, scoring logic, and calendar routing built and tested against six months of historical leads." },
      { phase: "Launch", duration: "Week 4", description: "Live across all five agents, running in parallel with manual intake for one week as a safety check." },
      { phase: "Result", duration: "Month 3", description: "Manual intake fully retired; showings up 58% with no increase in headcount." },
    ],
    testimonial: {
      quote: "We stopped losing leads to slow response times in the first week. It paid for itself before the first invoice was due.",
      name: "Dana Whitfield",
      role: "Managing Broker, Harrow Realty Group",
    },
  },
  {
    slug: "meridian-law-partners",
    client: "Meridian Law Partners",
    industry: "Law",
    icon: "TbScale",
    summary:
      "Built an intake-and-scheduling layer that screens consultation requests against case criteria automatically, before they reach a partner’s calendar.",
    challenge:
      "Partners were fielding consultation requests directly, many of which didn’t meet the firm’s case criteria — an expensive use of senior time.",
    solution:
      "An AI intake system now screens every inquiry against case type, jurisdiction, and conflict criteria before it reaches a partner’s calendar.",
    previewStats: [
      { value: "3.4x", label: "Consultation-to-client rate" },
      { value: "0", label: "Unqualified calls booked" },
    ],
    heroStat: { value: 3.4, suffix: "x", label: "Consultation-to-client conversion" },
    roi: { value: 268, suffix: "%", label: "ROI within four months" },
    metrics: [
      { label: "Unqualified consultations", before: "12 / mo", after: "0 / mo" },
      { label: "Partner hours on intake", before: "7 hrs/wk", after: "0.5 hrs/wk" },
      { label: "Consultation-to-client rate", before: "18%", after: "61%" },
    ],
    timeline: [
      { phase: "Discovery", duration: "Week 1", description: "Defined intake criteria across case type, jurisdiction, and conflict checks with each practice group." },
      { phase: "Build", duration: "Weeks 2–4", description: "Screening logic and partner-calendar routing built, tested against a year of historical inquiries." },
      { phase: "Launch", duration: "Week 5", description: "Rolled out firm-wide, with partners reviewing screened-out inquiries weekly for the first month." },
      { phase: "Result", duration: "Month 4", description: "Zero unqualified consultations booked; conversion rate more than tripled." },
    ],
    testimonial: {
      quote: "Every consultation on our calendar now is one we actually want. That alone changed how we plan our week.",
      name: "Robert Ianelli",
      role: "Managing Partner, Meridian Law Partners",
    },
  },
  {
    slug: "birchfield-construction",
    client: "Birchfield Construction",
    industry: "Construction",
    icon: "TbBuildingSkyscraper",
    summary:
      "Automated bid-request triage and CRM updates across four regional offices, giving leadership one accurate pipeline view.",
    challenge:
      "Bid requests came in through four regional offices with no shared system — leadership had no single, reliable view of the pipeline.",
    solution:
      "Voltheris centralized intake across all offices, routing bids to the right estimator automatically and syncing every update to one CRM.",
    previewStats: [
      { value: "31%", label: "Faster bid turnaround" },
      { value: "100%", label: "CRM records kept current" },
    ],
    heroStat: { value: 31, suffix: "%", label: "Faster bid turnaround, company-wide" },
    roi: { value: 190, suffix: "%", label: "ROI within eight months" },
    metrics: [
      { label: "Bid response time", before: "5.1 days", after: "3.5 days" },
      { label: "CRM records current", before: "~60%", after: "100%" },
      { label: "Bids lost to slow response", before: "14%", after: "4%" },
    ],
    timeline: [
      { phase: "Discovery", duration: "Weeks 1–2", description: "Audited intake processes across all four regional offices to find where bids were stalling." },
      { phase: "Build", duration: "Weeks 3–5", description: "Centralized routing and CRM-sync logic built and piloted in the largest office." },
      { phase: "Launch", duration: "Weeks 6–7", description: "Rolled out to the remaining three offices in staggered weekly waves." },
      { phase: "Result", duration: "Month 6", description: "Full pipeline visibility for leadership for the first time; bid turnaround down 31%." },
    ],
    testimonial: {
      quote: "For the first time, our four offices are actually looking at the same numbers.",
      name: "Carla Nakamura",
      role: "VP of Operations, Birchfield Construction",
    },
  },
  {
    slug: "ashcombe-health-partners",
    client: "Ashcombe Health Partners",
    industry: "Healthcare",
    icon: "TbStethoscope",
    summary:
      "Automated patient intake and insurance-eligibility verification, cutting booking time from over twenty minutes to under five.",
    challenge:
      "Front-desk staff spent most mornings on the phone confirming insurance eligibility before patients could even be scheduled.",
    solution:
      "Voltheris automated intake and eligibility verification, so patients are scheduled the same day they call — with eligibility already confirmed.",
    previewStats: [
      { value: "44%", label: "Fewer missed appointments" },
      { value: "3.1x", label: "Faster intake to booking" },
    ],
    heroStat: { value: 44, suffix: "%", label: "Fewer missed appointments" },
    roi: { value: 225, suffix: "%", label: "ROI within five months" },
    metrics: [
      { label: "Intake to booking time", before: "22 min", after: "4 min" },
      { label: "Missed appointments", before: "14%", after: "7.8%" },
      { label: "Front-desk hours on intake", before: "26 hrs/wk", after: "9 hrs/wk" },
    ],
    timeline: [
      { phase: "Discovery", duration: "Week 1", description: "Reviewed eligibility-verification workflows and payer requirements with front-desk staff." },
      { phase: "Build", duration: "Weeks 2–3", description: "Eligibility-check automation and scheduling logic built and validated against real payer responses." },
      { phase: "Launch", duration: "Week 4", description: "Live at the flagship clinic, then extended to two satellite locations two weeks later." },
      { phase: "Result", duration: "Month 5", description: "Missed appointments down 44%; front-desk time reclaimed for patient-facing work." },
    ],
    testimonial: {
      quote: "Our staff finally have time to actually talk to patients instead of chasing insurance cards.",
      name: "Dr. Priya Malhotra",
      role: "Practice Director, Ashcombe Health Partners",
    },
  },
  {
    slug: "lindqvist-capital-advisors",
    client: "Lindqvist Capital Advisors",
    industry: "Finance",
    icon: "TbChartLine",
    summary:
      "Cut client-onboarding time in half by automating suitability screening ahead of the first advisor conversation.",
    challenge:
      "Prospective-client onboarding took nearly two weeks, most of it spent on manual suitability screening and paperwork chasing.",
    solution:
      "Voltheris screens prospects against suitability and compliance criteria automatically and schedules qualified leads directly with an advisor.",
    previewStats: [
      { value: "37%", label: "More qualified consultations" },
      { value: "9 days", label: "Faster onboarding cycle" },
    ],
    heroStat: { value: 37, suffix: "%", label: "More qualified consultations" },
    roi: { value: 204, suffix: "%", label: "ROI within six months" },
    metrics: [
      { label: "Onboarding cycle", before: "18 days", after: "9 days" },
      { label: "Advisor hours on screening", before: "11 hrs/wk", after: "2 hrs/wk" },
      { label: "Consultation show-rate", before: "64%", after: "91%" },
    ],
    timeline: [
      { phase: "Discovery", duration: "Weeks 1–2", description: "Documented suitability and compliance criteria alongside Lindqvist’s compliance team." },
      { phase: "Build", duration: "Weeks 3–5", description: "Screening and scheduling automation built with full audit logging for compliance review." },
      { phase: "Launch", duration: "Week 6", description: "Rolled out to the advisory team after a two-week shadow period alongside manual screening." },
      { phase: "Result", duration: "Month 6", description: "Onboarding cycle cut in half; qualified-consultation volume up 37%." },
    ],
    testimonial: {
      quote: "Compliance was our biggest hesitation going in. It turned out to be the easiest part.",
      name: "Owen Faraday",
      role: "Managing Director, Lindqvist Capital Advisors",
    },
  },
  {
    slug: "fernwood-growth-marketing",
    client: "Fernwood Growth Marketing",
    industry: "Marketing",
    icon: "TbSpeakerphone",
    summary:
      "Stopped strategist time going to discovery calls with leads that didn’t match Fernwood’s ideal client profile.",
    challenge:
      "Fernwood’s strategists were spending hours a week on discovery calls with leads that didn’t fit their ideal client profile.",
    solution:
      "Voltheris scores every inbound lead against Fernwood’s ICP and routes only budget- and fit-qualified prospects to a strategist.",
    previewStats: [
      { value: "52%", label: "Fewer unqualified calls" },
      { value: "2.8x", label: "Proposal-to-close rate" },
    ],
    heroStat: { value: 52, suffix: "%", label: "Fewer unqualified discovery calls" },
    roi: { value: 241, suffix: "%", label: "ROI within five months" },
    metrics: [
      { label: "Unqualified discovery calls", before: "19 / mo", after: "9 / mo" },
      { label: "Proposal-to-close rate", before: "22%", after: "61%" },
      { label: "Strategist hours reclaimed", before: "0 hrs/wk", after: "7 hrs/wk" },
    ],
    timeline: [
      { phase: "Discovery", duration: "Week 1", description: "Defined Fernwood’s ideal-client profile across budget, industry, and engagement scope." },
      { phase: "Build", duration: "Weeks 2–3", description: "Lead-scoring model and strategist-routing logic built and tuned against past won and lost deals." },
      { phase: "Launch", duration: "Week 4", description: "Live across all inbound channels, with weekly scoring reviews for the first month." },
      { phase: "Result", duration: "Month 5", description: "Discovery-call volume down, close rate up — strategists spend time only on deals worth winning." },
    ],
    testimonial: {
      quote: "We finally stopped writing proposals for people who were never going to sign.",
      name: "Talia Brennan",
      role: "Founder, Fernwood Growth Marketing",
    },
  },
];

export const featuredCaseStudy: CaseStudy = caseStudies.find((cs) => cs.featured) ?? caseStudies[0]!;
