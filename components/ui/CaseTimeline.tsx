"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { GSAP_EASE } from "@/lib/motion";
import type { TimelinePhase } from "@/content/caseStudies";

/**
 * A fuller vertical timeline than WorkflowDiagram — each phase carries
 * a duration badge and a description, for the engagement narrative on
 * a case study detail page. Same signature Current line, drawn once
 * with GSAP the first time it scrolls into view.
 */
export function CaseTimeline({ phases }: { phases: TimelinePhase[] }) {
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
        duration: 1.3,
        ease: GSAP_EASE.signature,
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 70%",
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
        className="absolute left-5 top-5 w-px bg-gold"
        style={{ height: "calc(100% - 40px)" }}
        aria-hidden="true"
      />
      <ol className="space-y-10">
        {phases.map((phase, i) => (
          <li key={phase.phase} className="relative flex gap-6">
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-ivory font-mono text-body-s text-gold-text">
              {i + 1}
            </span>
            <div className="pb-2">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h4 className="font-display text-display-m text-ink">{phase.phase}</h4>
                <span className="font-mono text-caption uppercase tracking-[0.1em] text-gold-text">
                  {phase.duration}
                </span>
              </div>
              <p className="mt-2 max-w-prose text-body-s text-ink-soft">{phase.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
