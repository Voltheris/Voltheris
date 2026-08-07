"use client";

import { useState, type FormEvent } from "react";
import { TbCheck } from "react-icons/tb";
import { useMagnetic } from "@/hooks/useMagnetic";

/**
 * Presentational only — there's no email provider wired up yet. Swap
 * the onSubmit handler for a real API call (or a provider embed) when
 * one is chosen; the success state below is what should show once that
 * call resolves.
 */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const magnetic = useMagnetic<HTMLButtonElement>(0.2);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="bg-sand py-section-y">
      <div className="container-content">
        <div className="rounded-card border border-hairline bg-ivory p-10 sm:p-14">
          <p className="u-eyebrow">Stay current</p>
          <h2 className="mt-3 max-w-content font-display text-display-l text-ink">
            One note a month. No noise.
          </h2>
          <p className="mt-4 max-w-prose text-body-l text-ink-soft">
            What we’re learning across live deployments — nothing you’d have
            to unsubscribe from later.
          </p>

          {submitted ? (
            <p className="mt-8 flex items-center gap-2 font-mono text-body-s text-gold-text">
              <TbCheck aria-hidden="true" />
              You’re on the list — first note lands next month.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:max-w-md"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded border border-hairline bg-sand px-5 py-3.5 text-body-s text-ink placeholder:text-ink-faint transition-colors duration-300 focus:border-gold focus:outline-none"
              />
              <button
                ref={magnetic.ref}
                onPointerMove={magnetic.onPointerMove}
                onPointerLeave={magnetic.onPointerLeave}
                onPointerDown={magnetic.onPointerDown}
                onPointerUp={magnetic.onPointerUp}
                type="submit"
                className="shrink-0 rounded bg-ink px-7 py-3.5 font-mono text-eyebrow uppercase tracking-[0.1em] text-ivory transition-colors duration-300 ease-signature hover:bg-gold"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
