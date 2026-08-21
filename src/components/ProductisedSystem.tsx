import { LayoutGrid } from "lucide-react";
import { productisedSystem } from "@/lib/data";

export default function ProductisedSystem() {
  return (
    <section className="border-y border-border bg-paper-dim py-20 md:py-28">
      <div className="container-xl grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">Our approach</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            One proven system. Many brands.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-navy-mute">
            Instead of rebuilding every website from scratch, Sellio uses a refined ecommerce
            framework that&apos;s been tested across dozens of stores — so you get a site that&apos;s
            proven to convert, launched faster and maintained more reliably.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2 text-navy-mute">
            <LayoutGrid className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">The Sellio framework</span>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {productisedSystem.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border bg-paper px-4 py-3 text-sm font-medium text-navy"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
