"use client";

import { changelog } from "../lib/changelog-data";

export default function ChangelogSidebar() {
  return (
    <nav className="hidden w-44 shrink-0 lg:block">
      <div className="sticky top-28 flex flex-col gap-1">
        {changelog.map((group) => (
          <a
            key={group.slug}
            href={`#${group.slug}`}
            className="rounded-lg px-3 py-2 text-[14px] font-medium text-navy-mute transition-colors hover:bg-paper-dim hover:text-navy"
          >
            {group.month}
          </a>
        ))}
      </div>
    </nav>
  );
}