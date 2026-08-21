import {
  ShoppingBag,
  Palette,
  CreditCard,
  Truck,
  Mail,
  BarChart3,
  Search,
  Globe2,
  Megaphone,
  GraduationCap,
  LifeBuoy,
  TrendingUp,
} from "lucide-react";
import { everythingYouNeed } from "@/lib/data";

const icons = [
  ShoppingBag,
  Palette,
  CreditCard,
  Truck,
  Mail,
  BarChart3,
  Search,
  Globe2,
  Megaphone,
  GraduationCap,
  LifeBuoy,
  TrendingUp,
];

export default function Features() {
  return (
    <section id="everything" className="py-20 md:py-28">
      <div className="container-xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">What&apos;s included</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Everything you need to start selling online.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {everythingYouNeed.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_20px_40px_-24px_rgba(16,27,51,0.25)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-coral transition-colors group-hover:bg-coral group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-mute">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
