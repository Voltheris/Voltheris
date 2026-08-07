"use client";

import { motion } from "framer-motion";
import { WorkflowDiagram } from "@/components/ui/WorkflowDiagram";
import { exampleWorkflow } from "@/content/workflowExample";
import { fadeUp, fadeUpLarge, staggerContainer } from "@/lib/motion";

/**
 * Sits above the pricing cards specifically so "1 workflow" vs. "4
 * workflows" means something concrete by the time a visitor reaches
 * them, rather than being an undefined unit of measure.
 */
export function WorkflowExplainer() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        variants={staggerContainer(0.08)}
      >
        <motion.p variants={fadeUp} className="u-eyebrow">
          What&rsquo;s a workflow?
        </motion.p>
        <motion.h3
          variants={fadeUpLarge}
          className="mt-3 font-display text-display-m text-ink"
        >
          One complete sequence, start to finish.
        </motion.h3>
        <motion.p variants={fadeUp} className="mt-4 max-w-prose text-body-s text-ink-soft">
          When a tier below says &ldquo;1 workflow&rdquo; or &ldquo;4
          workflows,&rdquo; this is what one of them actually looks like
          — a complete sequence like this one, running on its own every
          time it&rsquo;s triggered.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={fadeUp}
        className="rounded-card border border-hairline bg-ivory p-8"
      >
        <WorkflowDiagram steps={exampleWorkflow.map((step) => step.label)} />
      </motion.div>
    </div>
  );
}
