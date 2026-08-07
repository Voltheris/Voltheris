"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { pricingTrustBlocks } from "@/content/pricingTrust";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function PricingTrust() {
  return (
    <div className="border-t border-hairline pt-12">
      <motion.div
        className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={staggerContainer(0.08)}
      >
        {pricingTrustBlocks.map((block) => (
          <motion.div key={block.title} variants={fadeUp} className="min-w-0">
            <Icon name={block.icon} className="text-xl text-gold-text" aria-hidden="true" />
            <h4 className="mt-3 font-display text-xl text-ink">{block.title}</h4>
            <p className="mt-2 text-body-s text-ink-soft">{block.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
