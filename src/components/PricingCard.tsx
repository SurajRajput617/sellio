import { Check } from "lucide-react";
import type { pricingPlans } from "@/lib/data";

type Plan = (typeof pricingPlans)[number];

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border p-7 sm:p-8 ${
        plan.featured
          ? "border-navy bg-navy text-white shadow-[0_30px_60px_-24px_rgba(16,27,51,0.5)] lg:-translate-y-3"
          : "border-border bg-white text-navy"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
          {plan.badge}
        </span>
      )}

      <h3 className={`font-display text-xl font-semibold ${plan.featured ? "text-white" : "text-navy"}`}>
        {plan.name}
      </h3>
      <p className={`mt-1 text-sm ${plan.featured ? "text-white/70" : "text-navy-mute"}`}>
        {plan.description}
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold">{plan.price}</span>
        {plan.period && (
          <span className={`text-sm font-medium ${plan.featured ? "text-white/70" : "text-navy-mute"}`}>
            {plan.period}
          </span>
        )}
      </div>

      <a
        href="#"
        className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-[15px] font-semibold transition-transform hover:-translate-y-0.5 ${
          plan.featured
            ? "bg-coral text-white shadow-[0_10px_24px_-8px_rgba(255,91,69,0.6)] hover:bg-coral-dark"
            : "border border-navy/15 text-navy hover:bg-paper-dim"
        }`}
      >
        {plan.cta}
      </a>

      <ul className="mt-8 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[15px]">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-coral" : "text-coral-dark"}`} />
            <span className={plan.featured ? "text-white/90" : "text-navy-mute"}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
