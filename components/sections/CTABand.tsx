"use client";

import { motion } from "framer-motion";
import { fadeUpLarge } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

export function CTABand() {
  return (
    <section className="bg-charcoal py-section-y text-ivory">
      <motion.div
        className="container-content text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        variants={fadeUpLarge}
      >
        <p className="u-eyebrow text-gold-dim">Get started</p>
        <h2 className="mx-auto mt-5 max-w-content font-display text-display-l text-ivory">
          Let&rsquo;s see what&rsquo;s worth automating.
        </h2>
        <p className="mx-auto mt-5 max-w-prose text-body-l text-ivory/65">
          A 30-minute call is enough to tell you whether this is worth
          pursuing — and if it is, what to build first.
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="onDark">
            Book a consultation
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
