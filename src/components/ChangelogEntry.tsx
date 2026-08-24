import type {
  ChangelogEntry as ChangelogEntryType,
} from "../lib/changelog-data";

import ChangelogTagBadge from "./ChangelogTagBadge";

interface ChangelogEntryProps {
  entry: ChangelogEntryType;
}

export default function ChangelogEntry({
  entry,
}: ChangelogEntryProps) {
  return (
    <article className="border-b border-border py-7 first:pt-0 last:border-b-0">
      <div className="flex flex-wrap items-center gap-2.5">
        {entry.tags.map((tag) => (
          <ChangelogTagBadge key={tag} tag={tag} />
        ))}

        <span className="text-sm font-medium text-navy-mute">
          {entry.date}
        </span>
      </div>

      <h3 className="mt-3 font-display text-xl font-semibold text-navy sm:text-[1.35rem]">
        {entry.title}
      </h3>

      <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-navy-mute">
        {entry.description}
      </p>
    </article>
  );
}