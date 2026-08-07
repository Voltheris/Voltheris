"use client";

import { motion } from "framer-motion";
import { TbClockHour4, TbHeartHandshake, TbTrendingUp } from "react-icons/tb";
import { fadeUp, fadeUpLarge, staggerContainer } from "@/lib/motion";

const pillars = [
  {
    icon: TbClockHour4,
    title: "Time back",
    description: "Repetitive intake, qualification, and scheduling work — handled without a person doing it by hand.",
  },
  {
    icon: TbHeartHandshake,
    title: "Better experience",
    description: "Faster responses and fewer dropped handoffs, for the people on the other end of your pipeline.",
  },
  {
    icon: TbTrendingUp,
    title: "Measurable value",
    description: "Every engagement is scoped against a number that matters — not a vague promise to \"modernize.\"",
  },
];

/**
 * Sits near the top of the homepage, right after the hero — the
 * explicit "we don't sell AI, we solve operational problems" framing,
 * distinct from the more editorial Philosophy statement that follows.
 */
export function WhyVoltheris() {
  return (
    <section className="bg-ivory py-section-y">
      <div className="container-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={staggerContainer(0.08)}
        >
          <motion.p variants={fadeUp} className="u-eyebrow">
            Why Voltheris
          </motion.p>
          <motion.h2
            variants={fadeUpLarge}
            className="mt-4 max-w-content font-display text-display-l text-ink"
          >
            We don&rsquo;t sell AI. We solve operational problems.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-prose text-body-l text-ink-soft">
            Every implementation is scoped around a specific point of
            friction in how your business runs — not a bundle of
            features labeled &ldquo;AI-powered.&rdquo; The technology is
            how we get there; it&rsquo;s never the pitch.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-8 border-t border-hairline pt-10 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.1)}
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={fadeUp}>
              <pillar.icon className="text-2xl text-gold-text" aria-hidden="true" />
              <h3 className="mt-4 font-display text-display-m text-ink">{pillar.title}</h3>
              <p className="mt-2 max-w-[32ch] text-body-s text-ink-soft">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
