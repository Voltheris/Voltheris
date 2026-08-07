"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbPlus } from "react-icons/tb";
import { EASE, DURATION } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: ReactNode;
  open: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, open, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-display-m text-ink">{question}</span>
        <TbPlus
          className={cn(
            "shrink-0 text-xl text-gold-text transition-transform duration-300 ease-signature",
            open && "rotate-45"
          )}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.signature }}
            className="overflow-hidden"
          >
            <p className="max-w-prose pb-6 text-body text-ink-soft">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export interface AccordionEntry {
  question: string;
  answer: ReactNode;
}

/**
 * A single-open accordion list. Used for FAQs, but generic enough for
 * any question/answer or expandable-summary content.
 */
export function Accordion({ items }: { items: AccordionEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          open={openIndex === i}
          onToggle={() => setOpenIndex((current) => (current === i ? null : i))}
        />
      ))}
    </div>
  );
}
