"use client";

import { motion } from "framer-motion";
import { fadeUpLarge, staggerContainer } from "@/lib/motion";

const pillars = [
  {
    eyebrow: "Mission",
    statement:
      "To give ambitious businesses back the hours they lose to repetitive, high-volume work — without asking them to change how they operate.",
  },
  {
    eyebrow: "Vision",
    statement:
      "A future where every growing business runs on systems as precise as its best employee — quietly, in the background.",
  },
];

export function MissionVision() {
  return (
    <section className="bg-sand py-section-y">
      <div className="container-shell">
        <motion.div
          className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={staggerContainer(0.15)}
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.eyebrow} variants={fadeUpLarge}>
              <p className="u-eyebrow">{pillar.eyebrow}</p>
              <p className="mt-5 max-w-content font-display text-display-m text-ink">
                {pillar.statement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
