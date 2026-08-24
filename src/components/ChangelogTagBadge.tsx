import type { ChangelogTag } from "../lib/changelog-data";

const tagStyles: Record<ChangelogTag, string> = {
  Feature: "bg-coral-light text-coral-dark",
  Improvement: "bg-navy/10 text-navy",
  Dashboard: "bg-good/10 text-good",
  Pricing: "bg-navy text-white",
  Platform: "bg-paper-dim text-navy-mute border border-border",
  Academy: "bg-coral/10 text-coral-dark",
};

interface ChangelogTagBadgeProps {
  tag: ChangelogTag;
}

export default function ChangelogTagBadge({
  tag,
}: ChangelogTagBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${tagStyles[tag]}`}
    >
      {tag}
    </span>
  );
}