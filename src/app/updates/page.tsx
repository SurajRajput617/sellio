import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChangelogSidebar from "@/components/ChangelogSidebar";
import ChangelogMonthGroup from "@/components/ChangelogMonthGroup";
import { changelog } from "@/lib/changelog-data";

export const metadata: Metadata = {
  title: "Changelog | Sellio",
  description:
    "What shipped, and when. New features, dashboard improvements and platform updates across Sellio's ecommerce launch platform.",
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="py-14 md:py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">
Latest Updates
</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              See what we&apos;ve been shipping.
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-mute">
              New features, dashboard improvements and platform updates across Sellio, month by month.
            </p>
          </div>

          <div className="mt-14 flex gap-12">
            <ChangelogSidebar />
            <div className="min-w-0 flex-1">
              {changelog.map((group) => (
                <ChangelogMonthGroup key={group.slug} group={group} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
