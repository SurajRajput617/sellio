import type { ChangelogMonth } from "@/lib/changelog-data";
import ChangelogEntry from "./ChangelogEntry";

export default function ChangelogMonthGroup({ group }: { group: ChangelogMonth }) {
  return (
    <section id={group.slug} className="scroll-mt-28 pb-14">
      <div className="flex items-baseline justify-between border-b border-border pb-3">
        <h2 className="font-display text-2xl font-bold text-navy">{group.month}</h2>
        <span className="text-sm font-medium text-navy-mute">
          {group.entries.length} update{group.entries.length === 1 ? "" : "s"}
        </span>
      </div>

      <div>
        {group.entries.map((entry) => (
          <ChangelogEntry key={entry.title} entry={entry} />
        ))}
      </div>
    </section>
  );
}
