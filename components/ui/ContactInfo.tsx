import { TbMail, TbPhone, TbMapPin, TbClock } from "react-icons/tb";
import { company } from "@/content/company";
import { socialLinks } from "@/content/social";
import { Icon } from "@/components/ui/Icon";

const details = [
  { icon: TbMail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: TbPhone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/[^+\d]/g, "")}` },
  { icon: TbMapPin, label: "Office", value: company.addressLines.join(", ") },
  { icon: TbClock, label: "Hours", value: company.hours },
];

export function ContactInfo() {
  return (
    <div className="flex h-full flex-col justify-between rounded-card border border-hairline bg-sand p-8">
      <div>
        <p className="u-eyebrow">Company details</p>
        <ul className="mt-6 space-y-6">
          {details.map((detail) => (
            <li key={detail.label} className="flex items-start gap-4">
              <detail.icon className="mt-1 shrink-0 text-lg text-gold-text" aria-hidden="true" />
              <div>
                <p className="font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">
                  {detail.label}
                </p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="mt-1 block text-body-s text-ink transition-colors duration-300 hover:text-gold"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-1 text-body-s text-ink">{detail.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 border-t border-hairline pt-6">
        <p className="font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">
          Follow
        </p>
        <ul className="mt-4 flex gap-4">
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="-m-2 inline-flex p-2 text-lg text-ink-faint transition-colors duration-300 hover:text-gold"
              >
                <Icon name={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
