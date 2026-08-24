import { GraduationCap, BookOpen, Search, MailCheck, LineChart, Headset } from "lucide-react";
import { supportItems } from "@/lib/data";

const icons = [GraduationCap, BookOpen, Search, MailCheck, LineChart, Headset];

export default function Support() {
  return (
    <section id="support" className="border-t border-border bg-paper-dim py-20 md:py-28">
      <div className="container-xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">Documentation</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            You&apos;re not left figuring it out alone.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="rounded-2xl border border-border bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-coral-light text-coral-dark">
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
