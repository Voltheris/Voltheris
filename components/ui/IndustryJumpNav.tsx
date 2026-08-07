"use client";

import { useEffect, useState } from "react";
import { industries } from "@/content/industries";
import { cn } from "@/lib/utils";

/**
 * Sticky wayfinding strip for the seven industry sections below.
 * Highlights the section currently in view via IntersectionObserver
 * rather than scroll-position math — cheaper and immune to Lenis'
 * smoothing offset.
 */
export function IndustryJumpNav() {
  const [active, setActive] = useState(industries[0]?.slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    industries.forEach((industry) => {
      const el = document.getElementById(industry.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-24 z-40 border-y border-hairline bg-ivory/90 backdrop-blur-md">
      <div className="container-shell overflow-x-auto">
        <nav className="flex w-max gap-x-8 gap-y-3 py-4 lg:w-full lg:flex-wrap">
          {industries.map((industry) => (
            <a
              key={industry.slug}
              href={`#${industry.slug}`}
              aria-current={active === industry.slug ? "true" : undefined}
              className={cn(
                "shrink-0 font-mono text-caption uppercase tracking-[0.1em] transition-colors duration-300",
                active === industry.slug ? "text-gold-text" : "text-ink-faint hover:text-ink"
              )}
            >
              {industry.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
