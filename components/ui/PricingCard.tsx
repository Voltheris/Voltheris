"use client";

import { TbCheck } from "react-icons/tb";
import type { PricingTier } from "@/content/pricing";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * Price is the visual focus here, by design — it's the first and
 * largest thing on the card after the name. Shared boilerplate ("no
 * obligation," what's included, the ongoing-optimization explanation)
 * deliberately does NOT live here — it's stated once in
 * PricingPreview, below all three cards, not repeated per card.
 */
export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-card border p-8",
        tier.featured
          ? "border-gold bg-charcoal text-ivory"
          : "border-hairline bg-ivory text-ink hover:border-gold/60"
      )}
    >
      {tier.featured && (
        <p className="mb-4 inline-flex w-fit items-center rounded-full border border-gold px-3 py-1 font-mono text-caption uppercase tracking-[0.1em] text-gold">
          Most requested
        </p>
      )}

      <p className={cn("font-mono text-caption uppercase tracking-[0.1em]", tier.featured ? "text-ivory/50" : "text-ink-faint")}>
        {tier.workflowCount}
      </p>
      <h3 className="mt-2 font-display text-display-m">{tier.name}</h3>
      <p className={cn("mt-2 text-body-s", tier.featured ? "text-ivory/65" : "text-ink-soft")}>
        {tier.description}
      </p>

      <div className={cn("mt-6 border-t pt-6", tier.featured ? "border-ivory/10" : "border-hairline")}>
        <p className={cn("font-mono text-caption uppercase tracking-[0.1em]", tier.featured ? "text-ivory/50" : "text-ink-faint")}>
          Project investment
        </p>
        <p className={cn("mt-1 font-display text-display-l", tier.featured ? "text-gold" : "text-gold-text")}>
          {tier.implementationPrice}
        </p>
        {tier.usageCapNote && (
          <p className={cn("mt-2 text-caption italic", tier.featured ? "text-ivory/45" : "text-ink-faint")}>
            {tier.usageCapNote}
          </p>
        )}
      </div>

      <ul className="mt-6 flex-1 space-y-2.5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-body-s">
            <TbCheck className={cn("shrink-0", tier.featured ? "text-gold" : "text-gold-text")} aria-hidden="true" />
            <span className={tier.featured ? "text-ivory/85" : "text-ink-soft"}>{feature}</span>
          </li>
        ))}
      </ul>

      <div className={cn("mt-6 border-t pt-4", tier.featured ? "border-ivory/10" : "border-hairline")}>
        <p className={cn("font-mono text-caption uppercase tracking-[0.1em]", tier.featured ? "text-ivory/40" : "text-ink-faint")}>
          Optional ongoing optimization
        </p>
        <p className={cn("mt-1 text-body-s", tier.featured ? "text-ivory/60" : "text-ink-soft")}>
          {tier.ongoingPrice}
        </p>
      </div>

      <div className="mt-6">
        <Button
          href={tier.ctaHref}
          variant={tier.featured ? "onDark" : "ghost"}
          className="w-full justify-center"
        >
          {tier.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
