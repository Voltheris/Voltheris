import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import type { Article } from "@/content/articles";
import { categories } from "@/content/articles";
import { Icon } from "@/components/ui/Icon";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function ArticleCard({ article }: { article: Article }) {
  const icon = categories.find((c) => c.name === article.category)?.icon ?? "TbBulb";

  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-card border border-hairline bg-sand p-8 transition-colors duration-300 ease-signature hover:border-gold"
    >
      <Icon
        name={icon}
        className="pointer-events-none absolute -right-4 -top-4 text-[6rem] text-ink/[0.04] transition-all duration-600 ease-signature group-hover:scale-110 group-hover:text-gold/[0.12]"
      />

      <div className="relative z-10">
        <p className="font-mono text-caption uppercase tracking-[0.1em] text-gold-text">
          {article.category}
        </p>
        <h3 className="mt-3 font-display text-display-m text-ink">{article.title}</h3>
        <p className="mt-3 max-w-[42ch] text-body-s text-ink-soft">{article.excerpt}</p>
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-between gap-4 border-t border-hairline pt-5">
        <p className="font-mono text-caption text-ink-faint">
          {formatDate(article.publishedAt)} · {article.readingTime}
        </p>
        <TbArrowUpRight
          aria-hidden="true"
          className="shrink-0 text-lg text-ink-faint transition-all duration-300 ease-signature group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold"
        />
      </div>
    </Link>
  );
}
