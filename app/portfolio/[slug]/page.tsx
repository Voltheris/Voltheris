import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TbArrowLeft, TbArrowUpRight } from "react-icons/tb";
import { caseStudies } from "@/content/caseStudies";
import { Icon } from "@/components/ui/Icon";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { CaseTimeline } from "@/components/ui/CaseTimeline";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.client} — Case Study`,
    description: caseStudy.summary,
    alternates: {
      canonical: `/portfolio/${caseStudy.slug}`,
    },
    openGraph: {
      title: `${caseStudy.client} — Case Study`,
      description: caseStudy.summary,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  if (!caseStudy) notFound();

  const more = caseStudies.filter((cs) => cs.slug !== caseStudy.slug).slice(0, 3);

  return (
    <main id="main-content">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
          { name: caseStudy.client, url: `/portfolio/${caseStudy.slug}` },
        ]}
      />
      <ArticleJsonLd
        headline={`${caseStudy.client} — Case Study`}
        description={caseStudy.summary}
        url={`/portfolio/${caseStudy.slug}`}
      />
      <section className="bg-ivory pb-section-y-tight pt-32 sm:pt-40">
        <div className="container-content">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-caption uppercase tracking-[0.1em] text-ink-faint transition-colors duration-300 hover:text-gold"
          >
            <TbArrowLeft aria-hidden="true" />
            All case studies
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <Icon name={caseStudy.icon} className="text-2xl text-gold-text" />
            <p className="u-eyebrow">{caseStudy.industry}</p>
          </div>

          <h1 className="mt-4 max-w-content font-display text-display-xl text-ink">
            {caseStudy.client}
          </h1>
          <p className="mt-6 max-w-prose text-body-l text-ink-soft">{caseStudy.summary}</p>
        </div>
      </section>

      <section className="bg-sand py-section-y">
        <div className="container-shell grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="u-eyebrow">The challenge</p>
            <p className="mt-4 max-w-prose text-body-l text-ink">{caseStudy.challenge}</p>
          </div>
          <div>
            <p className="u-eyebrow">The solution</p>
            <p className="mt-4 max-w-prose text-body-l text-ink">{caseStudy.solution}</p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-section-y">
        <div className="container-shell">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="u-eyebrow mb-6">Before / after</p>
              <BeforeAfter metrics={caseStudy.metrics} />
            </div>
            <div className="rounded-card border border-gold/50 bg-sand p-9">
              <p className="u-eyebrow">Return on investment</p>
              <p className="mt-4 font-mono text-display-2xl leading-none text-gold-text">
                <AnimatedCounter value={caseStudy.roi.value} suffix={caseStudy.roi.suffix} />
              </p>
              <p className="mt-4 max-w-[32ch] text-body text-ink-soft">{caseStudy.roi.label}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-section-y">
        <div className="container-content">
          <p className="u-eyebrow">How it went</p>
          <h2 className="mt-3 max-w-content font-display text-display-l text-ink">
            From first call to measurable result.
          </h2>
          <div className="mt-14">
            <CaseTimeline phases={caseStudy.timeline} />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-section-y">
        <div className="container-content">
          <TestimonialCard testimonial={caseStudy.testimonial} />
        </div>
      </section>

      <section className="bg-sand py-section-y">
        <div className="container-shell">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="min-w-0">
              <p className="u-eyebrow">More work</p>
              <h2 className="mt-3 font-display text-display-l text-ink">
                Other engagements worth a look.
              </h2>
            </div>
            <Button href="/portfolio" variant="ghost" className="shrink-0">
              Full portfolio
              <TbArrowUpRight aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {more.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
