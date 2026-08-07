"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { GSAP_EASE } from "@/lib/motion";

/**
 * A compact, vertical version of the Current line — the same signature
 * motif as ProcessCurrent, scaled down to sit inside a two-column
 * industry section instead of spanning the full page width. Draws in
 * once (not scrubbed) the first time it scrolls into view.
 */
export function WorkflowDiagram({ steps }: { steps: string[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(lineRef.current, { scaleY: 1 });
        return;
      }
      gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top" });
      gsap.to(lineRef.current, {
        scaleY: 1,
        duration: 1.1,
        ease: GSAP_EASE.signature,
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <div
        ref={lineRef}
        className="absolute left-4 top-4 w-px bg-gold"
        style={{ height: "calc(100% - 32px)" }}
        aria-hidden="true"
      />
      <ol className="space-y-8">
        {steps.map((step, i) => (
          <li key={step} className="relative flex items-start gap-4">
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold bg-ivory font-mono text-caption text-gold-text">
              {i + 1}
            </span>
            <span className="mt-1.5 text-body-s text-ink-soft">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
