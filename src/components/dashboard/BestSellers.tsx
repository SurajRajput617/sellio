import { bestSellers } from "@/lib/data";

export default function BestSellers() {
  return (
    <div className="divide-y divide-border">
      {bestSellers.map((product, i) => (
        <div key={product.name} className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper-dim font-display text-sm font-bold text-navy">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-semibold text-navy">{product.name}</p>
              <p className="text-xs text-navy-mute">{product.units} units sold</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-navy">{product.revenue}</p>
            <p className="text-xs text-navy-mute">{product.share} of sales</p>
          </div>
        </div>
      ))}
    </div>
  );
}
