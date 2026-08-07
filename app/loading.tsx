/**
 * Shown by Next.js as a Suspense fallback while a route segment is
 * loading — e.g. the brief window between clicking a nav link and the
 * next page's content being ready. Deliberately minimal: a single
 * pulsing Current line, not a spinner or skeleton screen, so it reads
 * as "the brand, briefly paused" rather than a generic loading state.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-screen flex-col items-center justify-center gap-5 bg-ivory"
    >
      <p className="font-display text-display-m tracking-tight text-ink">Voltheris</p>
      <svg viewBox="0 0 160 6" className="h-1.5 w-40" aria-hidden="true">
        <path d="M2 3 H158" className="the-current animate-current-pulse" />
      </svg>
    </div>
  );
}
