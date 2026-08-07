import type { CaseStudyTestimonial } from "@/content/caseStudies";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: CaseStudyTestimonial;
  tone?: "sand" | "charcoal";
}

export function TestimonialCard({ testimonial, tone = "sand" }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-card border p-9",
        tone === "sand"
          ? "border-hairline bg-sand"
          : "border-ivory/10 bg-charcoal text-ivory"
      )}
    >
      <p
        className={cn(
          "font-display text-display-m italic",
          tone === "sand" ? "text-ink" : "text-ivory"
        )}
      >
        “{testimonial.quote}”
      </p>
      <p
        className={cn(
          "mt-6 font-mono text-caption uppercase tracking-[0.1em]",
          tone === "sand" ? "text-ink-faint" : "text-ivory/50"
        )}
      >
        {testimonial.name} — {testimonial.role}
      </p>
    </div>
  );
}
