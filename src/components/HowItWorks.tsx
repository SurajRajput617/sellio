import { Clock } from "lucide-react";
import { howItWorksSteps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container-xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">Features</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            From idea to online store in weeks, not months.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {howItWorksSteps.map((step, i) => (
            <div key={step.title} className="relative pl-14">
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-coral">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-navy-mute">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 inline-flex items-center gap-3 rounded-2xl border border-coral/30 bg-coral-light px-6 py-4">
          <Clock className="h-5 w-5 shrink-0 text-coral-dark" />
          <p className="text-[15px] font-semibold text-navy">
            Target launch time: 1–2 weeks after receiving all required assets.
          </p>
        </div>
      </div>
    </section>
  );
}
