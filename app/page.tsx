import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhyVoltheris } from "@/components/sections/WhyVoltheris";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessCurrent } from "@/components/sections/ProcessCurrent";
import { StatsBand } from "@/components/sections/StatsBand";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <WhyVoltheris />
      <TrustSignals />
      <ServicesPreview />
      <ProcessCurrent />
      <StatsBand />
      <PortfolioPreview />
      <CTABand />
    </main>
  );
}
