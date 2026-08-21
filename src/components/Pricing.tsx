import PricingCard from "./PricingCard";
import { pricingPlans } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            One simple monthly price.
          </h2>
          <p className="mt-4 text-[17px] text-navy-mute">
            No large upfront development bill. Choose the plan that fits where your business is today.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-navy-mute">
          Shopify subscription billed separately.
        </p>
      </div>
    </section>
  );
}
