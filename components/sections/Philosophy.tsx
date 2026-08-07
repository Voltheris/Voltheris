"use client";

import { motion } from "framer-motion";
import { fadeUpLarge } from "@/lib/motion";

export function Philosophy() {
  return (
    <section className="bg-ivory py-section-y">
      <div className="container-content text-center">
        <motion.p
          className="u-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUpLarge}
        >
          The approach
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-content font-display text-display-l text-ink"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUpLarge}
        >
          Most automation is loud about how much it does. Voltheris is
          built to be quiet about it — a system that runs your pipeline
          so precisely that the only thing anyone notices is the result.
        </motion.p>
      </div>
    </section>
  );
}
