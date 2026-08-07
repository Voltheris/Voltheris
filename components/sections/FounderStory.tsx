"use client";

import { motion } from "framer-motion";
import { founder } from "@/content/founder";
import { useTilt } from "@/hooks/useTilt";
import { fadeUp, fadeUpLarge, staggerContainer } from "@/lib/motion";

/**
 * No stock photography — a monogram card with a subtle 3D tilt stands
 * in for a portrait, consistent with the rest of the site's
 * icon-over-imagery approach.
 */
export function FounderStory() {
  const tilt = useTilt<HTMLDivElement>(5);

  return (
    <section className="bg-sand py-section-y">
      <div className="container-shell">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            ref={tilt.ref}
            onPointerMove={tilt.onPointerMove}
            onPointerLeave={tilt.onPointerLeave}
            style={{ transformStyle: "preserve-3d" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={fadeUp}
            className="mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-card border border-gold/50 bg-ivory will-change-transform"
          >
            <span className="font-display text-display-2xl text-gold-text">
              {founder.initials}
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={staggerContainer(0.1)}
          >
            <motion.p variants={fadeUp} className="u-eyebrow">
              Founder’s philosophy
            </motion.p>
            <motion.p
              variants={fadeUpLarge}
              className="mt-5 max-w-content font-display text-display-m italic text-ink"
            >
              “{founder.quote}”
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 space-y-4">
              {founder.bio.map((paragraph) => (
                <p key={paragraph} className="max-w-prose text-body text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-mono text-caption uppercase tracking-[0.1em] text-ink-faint"
            >
              {founder.name} — {founder.role}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
