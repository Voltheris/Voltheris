import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessCurrent } from "@/components/sections/ProcessCurrent";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FAQ } from "@/components/sections/FAQ";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FAQJsonLd } from "@/components/seo/FAQJsonLd";
import { engagementSteps } from "@/content/engagementProcess";
import { pricingTiers } from "@/content/pricing";
import { servicesFAQ } from "@/content/faq";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI systems for lead generation, qualification, CRM automation, appointment booking, and business workflows — built around how your business actually runs.",
  alternates: {
    canonical: "/services",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI business process automation",
  provider: {
    "@type": "Organization",
    name: "Voltheris",
    url: "https://getvoltheris.com",
  },
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Voltheris automation services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.summary,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]} />
      <FAQJsonLd items={servicesFAQ} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <PageHero
        eyebrow="Services"
        heading="The systems that run your pipeline while you run the business."
        description="Every engagement is built around a specific point of friction — not a generic bundle of features. Explore what each system does, then talk to us about which one to build first."
        actions={
          <>
            <Button href="/contact">Book a consultation</Button>
            <Button href="/portfolio" variant="ghost">
              See results
            </Button>
          </>
        }
      />

      <ServicesGrid />

      <InlineCTA heading="Already know which one you need?" tone="ivory" />

      <PricingPreview tiers={pricingTiers} />

      <ProcessCurrent
        eyebrow="How it works"
        heading="From assessment to a live system, six clear steps."
        steps={engagementSteps}
      />

      <FAQ eyebrow="Questions" heading="Before you ask." items={servicesFAQ} />

      <CTABand />
    </main>
  );
}
