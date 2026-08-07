"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { GSAP_EASE } from "@/lib/motion";
import { milestones } from "@/content/timeline";
import { SectionHeader } from "@/components/ui/SectionHeader";

const GRID_COLS: Record<number, string> = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
};

/**
 * Horizontal on desktop, connected by the signature Current line —
 * the About-page counterpart to ProcessCurrent, but keyed by year
 * rather than step number. Each node brightens on hover as a small
 * interactive touch.
 */
export function CompanyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(pathRef.current, { strokeDashoffset: 0 });
        return;
      }
      gsap.set(pathRef.current, { strokeDashoffset: 1 });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: GSAP_EASE.signature,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ivory py-section-y">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Since 2019"
          heading="Six years, six industries, one pattern."
          align="center"
        />

        <div className="relative mt-20">
          <svg
            className="pointer-events-none absolute left-0 top-6 hidden w-full md:block"
            height="2"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={pathRef}
              d="M20 1 H980"
              className="the-current"
              pathLength={1}
              strokeDasharray="1"
            />
          </svg>

          <ol
            className={`grid grid-cols-1 gap-10 md:gap-8 ${
              GRID_COLS[milestones.length] ?? "md:grid-cols-4"
            }`}
          >
            {milestones.map((milestone) => (
              <li
                key={milestone.year}
                className="group relative min-w-0 border-l border-hairline pl-6 md:border-l-0 md:pl-0 md:text-center"
              >
                <div className="relative z-10 mx-auto flex h-12 w-16 items-center justify-center rounded-full border border-gold bg-ivory font-mono text-body-s text-gold-text transition-colors duration-300 group-hover:bg-gold group-hover:text-ivory">
                  {milestone.year}
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">
                  {milestone.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[30ch] text-body-s text-ink-soft">
                  {milestone.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
