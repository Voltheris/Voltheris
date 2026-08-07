import type { ReactNode } from "react";

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-display-m text-ink">{heading}</h2>
      <div className="mt-3 space-y-3 text-body text-ink-soft">{children}</div>
    </div>
  );
}
