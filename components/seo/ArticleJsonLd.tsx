const BASE_URL = "https://getvoltheris.com";

interface ArticleJsonLdProps {
  headline: string;
  description: string;
  url: string; // path only, e.g. "/insights/some-slug"
  datePublished?: string; // ISO date
  authorName?: string;
}

/**
 * schema.org Article JSON-LD, used for both Insights posts (true
 * articles) and case study detail pages (close enough in shape —
 * schema.org has no dedicated "CaseStudy" type, and Article is what
 * Google's own guidance recommends for this kind of long-form,
 * dated, byline content).
 */
export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  authorName = "Voltheris",
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${BASE_URL}${url}`,
    ...(datePublished ? { datePublished } : {}),
    author: {
      "@type": authorName === "Voltheris" ? "Organization" : "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Voltheris",
      url: BASE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
