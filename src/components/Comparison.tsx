import { Check, AlertCircle, ArrowRight } from "lucide-react";
import { diyList, sellioHandles } from "@/lib/data";

export default function Comparison() {
  return (
    <section className="border-y border-border bg-paper-dim py-20 md:py-28">
      <div className="container-xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">The difference</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Doing it yourself vs. doing it with Sellio.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* DIY side - deliberately cluttered */}
          <div className="rounded-3xl border border-border bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-bad" />
              <h3 className="font-display text-xl font-semibold text-navy">Doing it yourself</h3>
            </div>
            <p className="mt-2 text-sm text-navy-mute">
              A tangle of tools, tutorials and trial and error before you sell a single thing.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {diyList.map((item, i) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-navy/20 bg-paper px-3 py-2 text-sm font-medium text-navy-mute"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * ((i % 3) + 0.5)}deg)` }}
                >
                  {item}
                  <ArrowRight className="h-3.5 w-3.5 text-navy/30" />
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium text-bad">
              …and still no one to ask when something breaks.
            </p>
          </div>

          {/* Sellio side - calm and organised */}
          <div className="relative overflow-hidden rounded-3xl border border-navy bg-navy p-6 text-white sm:p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-coral/25 blur-3xl"
              aria-hidden
            />
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-coral" />
              <h3 className="font-display text-xl font-semibold text-white">With Sellio</h3>
            </div>

            <p className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-[1.7rem]">
              Give us your brand, products and business details. We build the selling system.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2.5">
              {sellioHandles.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-medium"
                >
                  <Check className="h-4 w-4 shrink-0 text-coral" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
