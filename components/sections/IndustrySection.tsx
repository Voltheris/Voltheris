"use client";

import { motion } from "framer-motion";
import type { Industry } from "@/content/industries";
import { Icon } from "@/components/ui/Icon";
import { WorkflowDiagram } from "@/components/ui/WorkflowDiagram";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { fadeUp, fadeUpLarge, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface IndustrySectionProps {
  industry: Industry;
  reverse?: boolean;
  tone?: "ivory" | "sand";
}

/**
 * One full section per industry on /solutions. Layout alternates
 * (copy/diagram swap sides) and background alternates ivory/sand so
 * seven sections in a row still read with rhythm instead of repeating
 * the same block seven times.
 */
export function IndustrySection({ industry, reverse = false, tone = "ivory" }: IndustrySectionProps) {
  return (
    <section
      id={industry.slug}
      className={cn("scroll-mt-28 py-section-y", tone === "ivory" ? "bg-ivory" : "bg-sand")}
    >
      <div className="container-shell">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className={cn(reverse ? "lg:order-2" : "lg:order-1")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={staggerContainer(0.08)}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <Icon name={industry.icon} className="text-2xl text-gold-text" />
              <p className="u-eyebrow">{industry.eyebrow}</p>
            </motion.div>

            <motion.h2
              variants={fadeUpLarge}
              className="mt-5 max-w-content font-display text-display-l text-ink"
            >
              {industry.headline}
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 max-w-prose text-body-l text-ink-soft">
              {industry.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-10 border-y border-hairline py-6"
            >
              {industry.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-display-m text-gold-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 max-w-[20ch] text-caption text-ink-faint">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <Button href="/contact" variant="ghost">
                Talk to us about {industry.name.toLowerCase()}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className={cn(
              "rounded-card border border-hairline p-9",
              reverse ? "lg:order-1" : "lg:order-2",
              tone === "ivory" ? "bg-sand" : "bg-ivory"
            )}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={fadeUp}
          >
            <p className="u-eyebrow mb-8">How it runs</p>
            <WorkflowDiagram steps={industry.steps} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
