import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MissionVision } from "@/components/sections/MissionVision";
import { Philosophy } from "@/components/sections/Philosophy";
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
    "Voltheris' mission, vision, values, and founding story — a newly founded AI automation consultancy built on the idea that the best systems are the quietest.",
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
        description="Voltheris is a newly founded automation consultancy — launched in 2026, led directly by its founder. That's by design, not a gap to apologize for: every early engagement gets hands-on attention from the person who built the system, not a handoff down an account team."
        actions={
          <>
            <Button href="/contact">Book a consultation</Button>
            <Button href="/services" variant="ghost">
              See what we build
            </Button>
          </>
        }
      />

      <MissionVision />

      <Philosophy />

      <FounderStory />

      <section className="bg-ivory py-section-y">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Values"
            heading="Four principles, held on every engagement."
            description="Tap any of these to see what it looks like in practice — not just as a line on a wall."
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
