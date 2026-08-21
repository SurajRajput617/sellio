import { marketingPerformance } from "@/lib/data";

export default function MarketingPerformance() {
  return (
    <div className="space-y-3">
      {marketingPerformance.map((row) => (
        <div
          key={row.channel}
          className="flex items-center justify-between rounded-xl border border-border bg-paper px-4 py-3"
        >
          <p className="text-sm font-semibold text-navy">{row.channel}</p>
          <div className="flex items-center gap-5 text-right text-xs text-navy-mute">
            <div>
              <p className="font-medium text-navy">{row.spend}</p>
              <p>Spend</p>
            </div>
            <div>
              <p className="font-medium text-navy">{row.revenue}</p>
              <p>Revenue</p>
            </div>
            <div>
              <p className="font-medium text-navy">{row.roas}</p>
              <p>ROAS</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
