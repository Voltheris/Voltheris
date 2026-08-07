import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";

interface FAQProps {
  eyebrow?: string;
  heading?: string;
  items: AccordionEntry[];
}

export function FAQ({ eyebrow = "Questions", heading = "Before you ask.", items }: FAQProps) {
  return (
    <section className="bg-ivory py-section-y">
      <div className="container-content">
        <SectionHeader eyebrow={eyebrow} heading={heading} align="center" />
        <div className="mt-14">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
