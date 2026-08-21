import { ArrowRight, Package } from "lucide-react";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 10%, rgba(255,91,69,0.14) 0%, rgba(250,246,238,0) 70%)",
        }}
      />
      <div className="container-xl grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-coral-dark">
            <Package className="h-3.5 w-3.5" />
            Ecommerce launch platform
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            Launch your ecommerce business without the big upfront cost.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-mute">
            Sellio builds your online store, configures the essentials and gives you the
            dashboard, training and support needed to grow.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(255,91,69,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-coral-dark"
            >
              Start selling
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#everything"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-7 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-paper-dim"
            >
              View packages
            </a>
          </div>

          <p className="mt-8 text-sm font-medium text-navy-mute">
            Built for startups, side hustles and growing ecommerce brands.
          </p>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}
