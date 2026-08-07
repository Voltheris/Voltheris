import type { ReactNode } from "react";

/**
 * ⚠️ Shared by /privacy, /terms, and /cookies. The content on those
 * pages is a standard, generic template — it is NOT a substitute for
 * review by an actual attorney familiar with where Voltheris operates
 * and what data it actually collects. Have counsel review and adjust
 * before relying on any of these pages as your real policy.
 */
export function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <main id="main-content">
      <section className="bg-ivory pb-section-y pt-32 sm:pt-40">
        <div className="container-content">
          <p className="u-eyebrow">{eyebrow}</p>
          <h1 className="mt-4 font-display text-display-l text-ink">{title}</h1>
          <p className="mt-4 font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">
            Last updated {lastUpdated}
          </p>

          <div className="mt-12 max-w-prose space-y-10 border-t border-hairline pt-10">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
