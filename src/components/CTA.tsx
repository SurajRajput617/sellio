import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-center sm:px-12 md:py-20">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-coral/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-coral/15 blur-3xl"
            aria-hidden
          />

          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start selling with clarity, support and a site built to grow.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
            Build your ecommerce business without the confusing setup or massive upfront website bill.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(255,91,69,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-coral-dark"
            >
              Start selling
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#support"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
