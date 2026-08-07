import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TbArrowLeft } from "react-icons/tb";
import { articles } from "@/content/articles";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { CTABand } from "@/components/sections/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";

interface PageProps {
  params: { slug: string };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <main id="main-content">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights" },
          { name: article.title, url: `/insights/${article.slug}` },
        ]}
      />
      <ArticleJsonLd
        headline={article.title}
        description={article.excerpt}
        url={`/insights/${article.slug}`}
        datePublished={article.publishedAt}
        authorName={article.author}
      />
      <article>
        <section className="bg-ivory pb-section-y-tight pt-32 sm:pt-40">
          <div className="container-content">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 font-mono text-caption uppercase tracking-[0.1em] text-ink-faint transition-colors duration-300 hover:text-gold"
            >
              <TbArrowLeft aria-hidden="true" />
              All insights
            </Link>

            <p className="u-eyebrow mt-6">{article.category}</p>
            <h1 className="mt-4 max-w-content font-display text-display-xl text-ink">
              {article.title}
            </h1>
            <p className="mt-6 font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">
              {article.author} · {formatDate(article.publishedAt)} · {article.readingTime}
            </p>
          </div>
        </section>

        <section className="bg-ivory pb-section-y">
          <div className="container-content">
            <div className="max-w-prose space-y-6 border-t border-hairline pt-10">
              {article.body.map((paragraph, i) => (
                <p key={i} className="text-body-l text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="bg-sand py-section-y">
        <div className="container-shell">
          <p className="u-eyebrow">More insights</p>
          <h2 className="mt-3 font-display text-display-l text-ink">
            Worth reading next.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {more.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
