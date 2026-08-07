"use client";

import { motion } from "framer-motion";
import { TbCheck } from "react-icons/tb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "@/components/ui/PricingCard";
import type { PricingTier } from "@/content/pricing";
import { includedInEveryTier } from "@/content/pricingIncludes";
import { WorkflowExplainer } from "@/components/sections/WorkflowExplainer";
import { PricingTrust } from "@/components/sections/PricingTrust";
import { Button } from "@/components/ui/Button";
import { fadeUp, fadeUpLarge, staggerContainer } from "@/lib/motion";

export function PricingPreview({ tiers }: { tiers: PricingTier[] }) {
  return (
    <section className="bg-sand py-section-y">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Investment"
          heading="You're hiring us to build a system, not renting software."
          description="Every implementation is custom-built around your business. These packages represent the most common engagement sizes and can be tailored to your operational requirements."
        />

        <div className="mt-16 rounded-card border border-hairline bg-ivory p-8 sm:p-10">
          <WorkflowExplainer />
        </div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.1)}
        >
          {tiers.map((tier) => (
            <motion.div key={tier.name} variants={fadeUp}>
              <PricingCard tier={tier} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.06)}
          className="mx-auto mt-10 max-w-content rounded-card border border-hairline bg-ivory p-8 text-center sm:p-10"
        >
          <motion.p variants={fadeUpLarge} className="font-display text-display-m text-ink">
            Every Implementation Includes
          </motion.p>
          <motion.ul
            variants={staggerContainer(0.04)}
            className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {includedInEveryTier.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-center gap-2 font-mono text-body-s text-ink-soft"
              >
                <TbCheck className="text-gold-text" aria-hidden="true" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <motion.p variants={fadeUp} className="mt-6 text-body-s text-ink-faint">
            Optional monthly optimization plans are available for
            businesses that want continuous improvements, monitoring,
            troubleshooting, and system enhancements.
          </motion.p>
        </motion.div>

        <p className="mt-10 text-center text-body-s text-ink-soft">
          Not sure which fits?{" "}
          <Button href="/contact" variant="ghost" className="ml-2">
            Book a consultation
          </Button>
        </p>

        <div className="mt-16">
          <PricingTrust />
        </div>
      </div>
    </section>
  );
}
