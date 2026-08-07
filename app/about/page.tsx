import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MissionVision } from "@/components/sections/MissionVision";
import { Philosophy } from "@/components/sections/Philosophy";
import { CompanyTimeline } from "@/components/sections/CompanyTimeline";
import { FounderStory } from "@/components/sections/FounderStory";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValuesGrid } from "@/components/ui/ValuesGrid";
import { Button } from "@/components/ui/Button";
import { values } from "@/content/values";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "About",
  description:
    "Voltheris' mission, vision, values, and founding story — an AI automation company built on the idea that the best systems are the quietest.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />

      <PageHero
        eyebrow="About"
        heading="Built on the idea that the best systems are the quietest."
        description="Voltheris started as a two-person consultancy solving one client's intake problem by hand. Six years later, the underlying belief hasn't changed — automation should disappear into the business, not announce itself."
        actions={
          <>
            <Button href="/portfolio">See the results</Button>
            <Button href="/contact" variant="ghost">
              Book a consultation
            </Button>
          </>
        }
      />

      <MissionVision />

      <Philosophy />

      <CompanyTimeline />

      <FounderStory />

      <section className="bg-ivory py-section-y">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Values"
            heading="Four principles, held on every engagement."
            description="Tap any of these to see what it looks like in an actual client system, not just on a wall."
          />
          <div className="mt-14">
            <ValuesGrid values={values} />
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
