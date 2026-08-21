import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";

export default function MetricCard({
  label,
  value,
  trend,
  icon: Icon,
}: {
  label: string;
  value: string;
  trend: string;
  icon: LucideIcon;
}) {
  const positive = !trend.startsWith("-");

  return (
    <div className="rounded-2xl border border-border bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper-dim text-navy">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold ${
            positive ? "bg-good/10 text-good" : "bg-bad/10 text-bad"
          }`}
        >
          {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {trend}
        </span>
      </div>
      <p className="mt-4 text-sm font-medium text-navy-mute">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold text-navy">{value}</p>
    </div>
  );
}
