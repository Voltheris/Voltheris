import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col items-center justify-center bg-ivory px-gutter text-center">
      <p className="u-eyebrow">404</p>
      <h1 className="mt-4 max-w-content font-display text-display-l text-ink">
        This page didn’t make it to production.
      </h1>
      <svg viewBox="0 0 200 6" className="mx-auto mt-6 h-1.5 w-36" aria-hidden="true">
        <path d="M2 3 H198" className="the-current" />
      </svg>
      <p className="mx-auto mt-6 max-w-prose text-body-l text-ink-soft">
        The link may be outdated, or the page may have moved. Here are a
        couple of places that definitely exist.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="ghost">
          Book a consultation
        </Button>
      </div>
    </main>
  );
}
