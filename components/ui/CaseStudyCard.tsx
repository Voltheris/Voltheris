"use client";

import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import type { CaseStudy } from "@/content/caseStudies";
import { Icon } from "@/components/ui/Icon";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useTilt } from "@/hooks/useTilt";

/**
 * The immersive-hover grid card used on the homepage portfolio preview
 * and the full Portfolio index: a subtle 3D pointer-tilt, a faint
 * oversized icon watermark that brightens on hover, and an animated
 * hero stat that counts up the first time it scrolls into view.
 */
export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const tilt = useTilt<HTMLAnchorElement>(6);

  return (
    <Link
      href={`/portfolio/${caseStudy.slug}`}
      ref={tilt.ref}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-card border border-hairline bg-sand p-8 transition-colors duration-300 ease-signature will-change-transform hover:border-gold"
    >
      <Icon
        name={caseStudy.icon}
        className="pointer-events-none absolute -right-4 -top-4 text-[7rem] text-ink/[0.04] transition-all duration-600 ease-signature group-hover:scale-110 group-hover:text-gold/[0.12]"
      />

      <div className="relative z-10">
        <p className="font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">
          {caseStudy.industry}
        </p>
        <h3 className="mt-3 font-display text-display-m text-ink">{caseStudy.client}</h3>
        <p className="mt-3 max-w-[42ch] text-body-s text-ink-soft">{caseStudy.summary}</p>
      </div>

      <div className="relative z-10 mt-10 flex items-end justify-between gap-4 border-t border-hairline pt-6">
        <div>
          <p className="font-mono text-display-m text-gold-text">
            <AnimatedCounter value={caseStudy.heroStat.value} suffix={caseStudy.heroStat.suffix} />
          </p>
          <p className="mt-1 max-w-[20ch] text-caption text-ink-faint">
            {caseStudy.heroStat.label}
          </p>
        </div>
        <TbArrowUpRight
          aria-hidden="true"
          className="shrink-0 text-xl text-ink-faint transition-all duration-300 ease-signature group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold"
        />
      </div>
    </Link>
  );
}
