export interface FAQJsonLdItem {
  question: string;
  answer: string;
}

/**
 * Renders schema.org FAQPage JSON-LD from the same content already
 * shown in a visible Accordion — pass the same array to both rather
 * than maintaining separate copy, so structured data can never drift
 * from what's actually on the page (Google penalizes JSON-LD that
 * doesn't match visible content).
 */
export function FAQJsonLd({ items }: { items: FAQJsonLdItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
