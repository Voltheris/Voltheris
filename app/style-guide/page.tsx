/**
 * Internal reference only — not linked from site navigation.
 * Renders every design token so changes to tailwind.config.ts are
 * visible immediately. Delete or gate behind auth before production
 * deploy if it shouldn't be public.
 */

const swatches = [
  { name: "Ivory", role: "Primary background", className: "bg-ivory", text: "text-ink" },
  { name: "Sand", role: "Secondary section background", className: "bg-sand", text: "text-ink" },
  { name: "Ink", role: "Primary text", className: "bg-ink", text: "text-ivory" },
  { name: "Ink Soft", role: "Secondary text", className: "bg-ink-soft", text: "text-ivory" },
  { name: "Charcoal", role: "Dark sections / footer", className: "bg-charcoal", text: "text-ivory" },
  { name: "Gold", role: "Primary accent — use sparingly", className: "bg-gold", text: "text-ivory" },
  { name: "Gold Bright", role: "Accent hover / active", className: "bg-gold-bright", text: "text-ivory" },
  { name: "Gold Text", role: "Gold text/icons on light bg", className: "bg-gold-text", text: "text-ivory" },
  { name: "Hairline", role: "Rules & dividers", className: "bg-hairline", text: "text-ink" },
];

export default function StyleGuide() {
  return (
    <main className="bg-ivory">
      <section className="container-shell section-y">
        <p className="u-eyebrow">Design System</p>
        <h1 className="mt-3 font-display text-display-l">Voltheris tokens</h1>
        <p className="mt-4 max-w-content text-body-l text-ink-soft">
          Quiet luxury, made literal: warm neutrals do the work, gold marks
          only what matters, and a single hairline current threads the page
          together.
        </p>
      </section>

      {/* Color */}
      <section className="container-shell pb-section-y">
        <h2 className="font-display text-display-m">Color</h2>
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded md:grid-cols-4">
          {swatches.map((s) => (
            <div key={s.name} className={`${s.className} ${s.text} flex h-40 flex-col justify-end p-5`}>
              <span className="font-mono text-caption uppercase tracking-[0.1em] opacity-70">
                {s.role}
              </span>
              <span className="mt-1 font-display text-display-m">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Type */}
      <section className="bg-sand py-section-y">
        <div className="container-shell">
          <h2 className="font-display text-display-m">Type</h2>

          <div className="mt-10 border-t border-hairline pt-8">
            <p className="u-eyebrow">Display — Fraunces</p>
            <p className="mt-3 font-display text-display-2xl">Voltheris</p>
          </div>

          <div className="mt-10 border-t border-hairline pt-8">
            <p className="u-eyebrow">Display L / M — section headlines</p>
            <p className="mt-3 font-display text-display-l">Automate the work that automates growth.</p>
            <p className="mt-3 font-display text-display-m">Every lead, qualified before it reaches a human.</p>
          </div>

          <div className="mt-10 border-t border-hairline pt-8">
            <p className="u-eyebrow">Body — Manrope</p>
            <p className="mt-3 max-w-prose text-body-l text-ink">
              Voltheris builds AI systems that handle lead generation,
              qualification, CRM management, and appointment booking — so
              your team spends its time closing, not chasing.
            </p>
            <p className="mt-3 max-w-prose text-body text-ink-soft">
              Set in Manrope at 1.0625rem with a 1.7 line-height for long-form
              reading comfort across the Insights and About pages.
            </p>
          </div>

          <div className="mt-10 border-t border-hairline pt-8">
            <p className="u-eyebrow">Utility — IBM Plex Mono</p>
            <div className="mt-3 flex flex-wrap gap-8">
              <span className="font-mono text-display-m text-ink">42%</span>
              <span className="font-mono text-display-m text-ink">3.2x</span>
              <span className="font-mono text-display-m text-ink">11 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature element */}
      <section className="bg-charcoal py-section-y text-ivory">
        <div className="container-shell">
          <p className="u-eyebrow text-gold-dim">Signature element — &ldquo;The Current&rdquo;</p>
          <h2 className="mt-3 font-display text-display-m text-ivory">
            One gold line, doing the connecting.
          </h2>
          <p className="mt-4 max-w-content text-body text-ivory/70">
            The same hairline stroke that underlines the hero wordmark
            reappears as the connective thread between process steps,
            timeline nodes, and workflow diagrams — literalizing the idea of
            an automated current running through the business, without ever
            resorting to circuitry clichés.
          </p>

          <svg
            viewBox="0 0 800 120"
            className="mt-10 w-full max-w-2xl"
            aria-hidden="true"
          >
            <path
              d="M 10 60 C 200 10, 300 110, 400 60 S 600 10, 790 60"
              className="the-current animate-current-pulse"
              pathLength={1}
              strokeDasharray="1"
            />
            {[10, 400, 790].map((x) => (
              <circle key={x} cx={x} cy={60} r={4} fill="#B08D57" />
            ))}
          </svg>
        </div>
      </section>

      {/* Spacing & radius */}
      <section className="container-shell py-section-y">
        <h2 className="font-display text-display-m">Spacing &amp; radius</h2>
        <p className="mt-4 max-w-content text-body text-ink-soft">
          Section padding uses the fluid <code className="font-mono text-body-s">section-y</code> token
          (5rem → 10rem). Corners stay near-sharp everywhere except portfolio
          and testimonial cards, which use <code className="font-mono text-body-s">rounded-card</code> (10px) —
          reserved, not default.
        </p>
        <div className="mt-8 flex flex-wrap items-end gap-6">
          <div className="h-16 w-16 rounded-none border border-hairline bg-sand" />
          <div className="h-16 w-16 rounded-sm border border-hairline bg-sand" />
          <div className="h-16 w-16 rounded border border-hairline bg-sand" />
          <div className="h-16 w-16 rounded-card border border-hairline bg-sand" />
        </div>
      </section>
    </main>
  );
}
