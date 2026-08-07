"use client";

import { motion } from "framer-motion";
import { heroStats, type StatItem } from "@/content/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StatsBandProps {
  stats?: StatItem[];
  eyebrow?: string;
  heading?: string;
}

/**
 * Full-width animated stat band, on the light (sand) surface. Defaults
 * to the homepage's headline stats; pass `stats` (and optionally
 * `eyebrow`/`heading`) to reuse it for a different aggregate — e.g.
 * Portfolio's results-wide numbers.
 */
export function StatsBand({ stats = heroStats, eyebrow, heading }: StatsBandProps) {
  return (
    <section className="bg-sand py-section-y">
      <div className="container-shell">
        {(eyebrow || heading) && (
          <div className="mb-14 max-w-content">
            {eyebrow && <p className="u-eyebrow">{eyebrow}</p>}
            {heading && (
              <h2 className={cn("font-display text-display-l text-ink", eyebrow && "mt-3")}>
                {heading}
              </h2>
            )}
          </div>
        )}
        <motion.div
          className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.1)}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <p className="font-mono text-display-l text-gold-text">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 max-w-[24ch] text-body-s text-ink-soft">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
