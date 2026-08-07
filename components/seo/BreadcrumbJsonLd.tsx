const BASE_URL = "https://getvoltheris.com";

export interface Crumb {
  name: string;
  url: string; // path only, e.g. "/portfolio"
}

/**
 * Renders schema.org BreadcrumbList JSON-LD. Doesn't render any visible
 * UI — this is purely for search engines (Google surfaces this as the
 * breadcrumb trail under a result instead of the raw URL). Pair with a
 * visible breadcrumb trail where one already exists in the page (e.g.
 * the "All case studies" back-link) rather than duplicating nav UI.
 */
export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
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
