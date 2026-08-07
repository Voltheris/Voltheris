"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface InlineCTAProps {
  eyebrow?: string;
  heading: string;
  ctaLabel?: string;
  ctaHref?: string;
  tone?: "ivory" | "sand";
}

/**
 * A single-line, low-friction conversion point for the middle of a
 * long page — deliberately smaller and quieter than CTABand (which is
 * the full-width closing moment). Use at most once or twice per page,
 * at a natural pause in the content (e.g. after the reader has enough
 * context to act, but before you've made your full case) — not
 * stacked with other CTAs, which is what tips "more CTAs" into spam.
 */
export function InlineCTA({
  eyebrow = "Not ready to read the whole page?",
  heading,
  ctaLabel = "Book a consultation",
  ctaHref = "/contact",
  tone = "sand",
}: InlineCTAProps) {
  return (
    <section className={cn("py-section-y-tight", tone === "ivory" ? "bg-ivory" : "bg-sand")}>
      <div className="container-content">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-6 rounded-card border border-hairline bg-ivory p-8 sm:flex-row sm:items-center sm:p-10"
        >
          <div>
            <p className="font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">
              {eyebrow}
            </p>
            <p className="mt-2 max-w-content font-display text-display-m text-ink">{heading}</p>
          </div>
          <Button href={ctaHref} className="shrink-0">
            {ctaLabel}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
