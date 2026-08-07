"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbPlus } from "react-icons/tb";
import type { Value } from "@/content/values";
import { Icon } from "@/components/ui/Icon";
import { EASE, DURATION } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ValueCard({ value, open, onToggle }: { value: Value; open: boolean; onToggle: () => void }) {
  return (
    <div
      className={cn(
        "rounded border transition-colors duration-300 ease-signature",
        open ? "border-gold bg-ivory" : "border-hairline bg-sand hover:border-gold/50"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 p-7 text-left"
      >
        <div className="min-w-0 flex-1">
          <Icon name={value.icon} className={cn("text-2xl", open ? "text-gold-text" : "text-gold-text/80")} />
          <h3 className="mt-5 font-display text-display-m text-ink">{value.title}</h3>
          <p className="mt-2 text-body-s text-ink-soft">{value.statement}</p>
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
            key="example"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.signature }}
            className="overflow-hidden"
          >
            <div className="border-t border-hairline px-7 pb-7 pt-5">
              <p className="font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">
                In practice
              </p>
              <p className="mt-2 max-w-prose text-body-s text-ink-soft">{value.example}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ValuesGrid({ values }: { values: Value[] }) {
  const [openTitle, setOpenTitle] = useState<string | null>(values[0]?.title ?? null);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {values.map((value) => (
        <ValueCard
          key={value.title}
          value={value}
          open={openTitle === value.title}
          onToggle={() => setOpenTitle((current) => (current === value.title ? null : value.title))}
        />
      ))}
    </div>
  );
}
