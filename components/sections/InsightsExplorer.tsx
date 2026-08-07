"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbSearch, TbX } from "react-icons/tb";
import { articles, categories } from "@/content/articles";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Client-side search + category filter over the static articles array.
 * No backend involved — this filters what's already on the page, which
 * is all "search" means until Insights has enough volume to warrant a
 * real index.
 */
export function InsightsExplorer() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = !activeCategory || article.category === activeCategory;
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <section className="bg-ivory py-section-y">
      <div className="container-shell">
        <div className="flex flex-col gap-6 border-b border-hairline pb-8 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <p className="u-eyebrow">All insights</p>
            <h2 className="mt-3 font-display text-display-l text-ink">
              Notes on running the pipeline.
            </h2>
          </div>

          <div className="relative w-full md:w-72">
            <TbSearch
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              aria-label="Search articles"
              className="w-full rounded border border-hairline bg-sand py-3 pl-11 pr-10 text-body-s text-ink placeholder:text-ink-faint transition-colors duration-300 focus:border-gold focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-ink-faint transition-colors duration-300 hover:text-ink"
              >
                <TbX />
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-caption uppercase tracking-[0.1em] transition-colors duration-300",
              !activeCategory
                ? "border-gold bg-gold text-ivory"
                : "border-hairline text-ink-soft hover:border-gold/50"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveCategory(category.name)}
              aria-pressed={activeCategory === category.name}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-caption uppercase tracking-[0.1em] transition-colors duration-300",
                activeCategory === category.name
                  ? "border-gold bg-gold text-ivory"
                  : "border-hairline text-ink-soft hover:border-gold/50"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((article) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE.signature }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="sr-only" role="status" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"} shown
        </p>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-body text-ink-soft">
            No articles match “{query}” yet — try another search or category.
          </p>
        )}
      </div>
    </section>
  );
}
