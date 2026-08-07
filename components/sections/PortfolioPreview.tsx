"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/content/caseStudies";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

const preview = caseStudies.slice(0, 3);

export function PortfolioPreview() {
  return (
    <section className="bg-ivory py-section-y">
      <div className="container-shell">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="min-w-0">
            <p className="u-eyebrow">Results</p>
            <h2 className="mt-3 max-w-content font-display text-display-l text-ink">
              Proof, not promises.
            </h2>
          </div>
          <Button href="/portfolio" variant="ghost" className="shrink-0">
            Full portfolio
          </Button>
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.1)}
        >
          {preview.map((cs) => (
            <motion.div key={cs.slug} variants={fadeUp}>
              <CaseStudyCard caseStudy={cs} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
