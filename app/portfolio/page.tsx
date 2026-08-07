import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { caseStudies, featuredCaseStudy } from "@/content/caseStudies";
import type { StatItem } from "@/content/stats";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real Voltheris deployments across real estate, law, construction, healthcare, finance, and marketing — with the before-and-after numbers behind each one.",
  alternates: {
    canonical: "/portfolio",
  },
};

// Derived directly from content/caseStudies.ts rather than invented —
// see the placeholder warning at the top of that file. Recompute this
// if the underlying case studies change.
const roiValues = caseStudies.map((cs) => cs.roi.value);
const avgRoi = Math.round(roiValues.reduce((sum, v) => sum + v, 0) / roiValues.length);
const industryCount = new Set(caseStudies.map((cs) => cs.industry)).size;

const portfolioStats: StatItem[] = [
  { value: caseStudies.length, suffix: "", label: "Case studies published" },
  { value: avgRoi, suffix: "%", label: "Average ROI across published engagements" },
  { value: Math.min(...roiValues), suffix: "%", label: "Lowest ROI across published engagements" },
  { value: industryCount, suffix: " industries", label: "Represented across current case studies" },
];

const rest = caseStudies.filter((cs) => cs.slug !== featuredCaseStudy.slug);

export default function PortfolioPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Portfolio", url: "/portfolio" }]} />

      <PageHero
        eyebrow="Portfolio"
        heading="Proof, not promises."
        description="Six engagements, six industries, one pattern: find where the time is going, and take it back. Here's what that looked like in practice."
        actions={
          <>
            <Button href="/contact">Book a consultation</Button>
            <Button href="/services" variant="ghost">
              See services
            </Button>
          </>
        }
      />

      <StatsBand
        stats={portfolioStats}
        eyebrow="Across every engagement"
        heading="The numbers hold up at scale, not just in a single case."
      />

      <FeaturedCaseStudy caseStudy={featuredCaseStudy} />

      <InlineCTA
        eyebrow="Wondering what this looks like for you?"
        heading="These are six examples — your industry has its own qualification logic."
      />

      <section className="bg-ivory py-section-y">
        <div className="container-shell">
          <SectionHeader
            eyebrow="More work"
            heading="Five more systems, five more industries."
            description="Each one built around a different point of friction — not a generic bundle of automation features."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
