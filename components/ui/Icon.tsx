import {
  TbTargetArrow,
  TbDatabase,
  TbCalendarEvent,
  TbHeadset,
  TbSettingsAutomation,
  TbCpu,
  TbRoute,
  TbBulb,
  TbHome,
  TbStethoscope,
  TbScale,
  TbBuildingSkyscraper,
  TbChartLine,
  TbSpeakerphone,
  TbBriefcase,
  TbFocus2,
  TbShieldCheck,
  TbUsers,
  TbBolt,
  TbBrandLinkedin,
  TbBrandX,
  TbBrandInstagram,
  TbListCheck,
  TbPlugConnected,
} from "react-icons/tb";
import type { IconType } from "react-icons";

const registry: Record<string, IconType> = {
  TbTargetArrow,
  TbDatabase,
  TbCalendarEvent,
  TbHeadset,
  TbSettingsAutomation,
  TbCpu,
  TbRoute,
  TbBulb,
  TbHome,
  TbStethoscope,
  TbScale,
  TbBuildingSkyscraper,
  TbChartLine,
  TbSpeakerphone,
  TbBriefcase,
  TbFocus2,
  TbShieldCheck,
  TbUsers,
  TbBolt,
  TbBrandLinkedin,
  TbBrandX,
  TbBrandInstagram,
  TbListCheck,
  TbPlugConnected,
};

/**
 * Resolves an icon key from content/services.ts (a plain string, so
 * content stays serializable) to its react-icons component. Add new
 * icons to the registry above when a new service is added.
 */
export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = registry[name] ?? TbCpu;
  return <Component className={className} aria-hidden="true" />;
}
