"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/content/caseStudies";
import { Icon } from "@/components/ui/Icon";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { fadeUp, fadeUpLarge, staggerContainer } from "@/lib/motion";

export function FeaturedCaseStudy({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <section className="bg-ivory py-section-y">
      <div className="container-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.08)}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <Icon name={caseStudy.icon} className="text-2xl text-gold-text" />
            <p className="u-eyebrow">Featured — {caseStudy.industry}</p>
          </motion.div>

          <motion.h2
            variants={fadeUpLarge}
            className="mt-5 max-w-content font-display text-display-l text-ink"
          >
            {caseStudy.client}
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 max-w-prose text-body-l text-ink-soft">
            {caseStudy.summary}
          </motion.p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
          >
            <p className="u-eyebrow mb-6">Before / after</p>
            <BeforeAfter metrics={caseStudy.metrics} tone="sand" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="flex flex-col justify-between"
          >
            <div className="rounded-card border border-gold/50 bg-sand p-8">
              <p className="font-mono text-display-2xl leading-none text-gold-text">
                <AnimatedCounter value={caseStudy.roi.value} suffix={caseStudy.roi.suffix} />
              </p>
              <p className="mt-3 max-w-[28ch] text-body-s text-ink-soft">{caseStudy.roi.label}</p>
            </div>

            <div className="mt-8">
              <Button href={`/portfolio/${caseStudy.slug}`}>
                Read the full case study
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-10">
          <TestimonialCard testimonial={caseStudy.testimonial} tone="sand" />
        </div>
      </div>
    </section>
  );
}
