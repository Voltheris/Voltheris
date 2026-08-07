"use client";

import { AnimatePresence, motion } from "framer-motion";
import { TbArrowUpRight, TbPlus } from "react-icons/tb";
import type { Service } from "@/types";
import { Icon } from "@/components/ui/Icon";
import { EASE, DURATION } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  open: boolean;
  onToggle: () => void;
}

/**
 * Click-to-expand rather than hover-to-expand — works identically on
 * touch and desktop, and keeps the interaction keyboard-accessible via
 * a real <button>. Only one card is expanded at a time (state lives in
 * the parent grid), matching the Accordion pattern used for FAQs.
 */
export function ServiceCard({ service, open, onToggle }: ServiceCardProps) {
  return (
    <div
      id={service.slug}
      className={cn(
        "scroll-mt-32 rounded border transition-colors duration-300 ease-signature",
        open ? "border-gold bg-ivory" : "border-hairline bg-sand hover:border-gold/50"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 p-7 text-left"
      >
        <div className="flex min-w-0 flex-1 items-start gap-5">
          <Icon name={service.icon} className={cn("mt-1 shrink-0 text-2xl", open ? "text-gold-text" : "text-gold-text/80")} />
          <div className="min-w-0">
            <h3 className="font-display text-display-m text-ink">{service.title}</h3>
            <p className="mt-2 text-body-s text-ink-soft">{service.summary}</p>
          </div>
        </div>
        <TbPlus
          className={cn(
            "mt-2 shrink-0 text-xl text-gold-text transition-transform duration-300 ease-signature",
            open && "rotate-45"
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.signature }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-6 border-t border-hairline px-7 pb-7 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-prose text-body text-ink-soft">{service.description}</p>
              <a
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 font-mono text-eyebrow uppercase tracking-[0.1em] text-ink transition-colors duration-300 hover:text-gold"
              >
                Discuss this
                <TbArrowUpRight className="text-base transition-transform duration-300 ease-signature group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
