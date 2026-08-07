import { TbArrowRight } from "react-icons/tb";
import type { CaseStudyMetric } from "@/content/caseStudies";
import { cn } from "@/lib/utils";

interface BeforeAfterProps {
  metrics: CaseStudyMetric[];
  tone?: "sand" | "charcoal";
}

export function BeforeAfter({ metrics, tone = "sand" }: BeforeAfterProps) {
  const dark = tone === "charcoal";

  return (
    <div
      className={cn(
        "rounded-card border p-2",
        dark ? "border-ivory/10 bg-charcoal" : "border-hairline bg-sand"
      )}
    >
      <div
        className={cn(
          "grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-3 font-mono text-caption uppercase tracking-[0.1em]",
          dark ? "text-ivory/45" : "text-ink-faint"
        )}
      >
        <span />
        <span>Before</span>
        <span className={dark ? "text-gold" : "text-gold-text"}>After</span>
      </div>
      <div className={cn("divide-y", dark ? "divide-ivory/10" : "divide-hairline")}>
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-5"
          >
            <p className={cn("text-body-s", dark ? "text-ivory/65" : "text-ink-soft")}>
              {metric.label}
            </p>
            <p
              className={cn(
                "text-right font-mono text-body-s line-through",
                dark ? "text-ivory/40 decoration-ivory/30" : "text-ink-faint decoration-ink-faint/50"
              )}
            >
              {metric.before}
            </p>
            <span className="flex items-center gap-2 justify-self-end">
              <TbArrowRight
                className={cn("hidden sm:block", dark ? "text-ivory/40" : "text-ink-faint")}
                aria-hidden="true"
              />
              <span className={cn("font-mono text-display-m", dark ? "text-gold" : "text-gold-text")}>
                {metric.after}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
