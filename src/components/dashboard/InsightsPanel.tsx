import { AlertTriangle, CheckCircle2, Info, Sparkles } from "lucide-react";
import { sellioInsights } from "@/lib/data";

const toneStyles = {
  warn: { icon: AlertTriangle, className: "bg-bad/10 text-bad" },
  good: { icon: CheckCircle2, className: "bg-good/10 text-good" },
  info: { icon: Info, className: "bg-navy/10 text-navy" },
};

export default function InsightsPanel() {
  return (
    <div className="rounded-3xl border border-navy bg-navy p-6 text-white sm:p-7">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-coral" />
        <h3 className="font-display text-lg font-semibold">Sellio Insights</h3>
      </div>

      <ul className="mt-5 space-y-3">
        {sellioInsights.map((insight) => {
          const { icon: Icon, className } = toneStyles[insight.tone];
          return (
            <li key={insight.text} className="flex items-start gap-3 rounded-xl bg-white/5 p-3.5">
              <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${className}`}>
                <Icon className="h-3.5 w-3.5" />
              </span>
              <p className="text-sm leading-relaxed text-white/90">{insight.text}</p>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 rounded-xl border border-coral/40 bg-coral/10 p-4">
        <p className="font-display text-[15px] font-semibold leading-snug text-white">
          What happened? Why did it happen? What should I do next?
        </p>
      </div>
    </div>
  );
}
