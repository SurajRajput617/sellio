"use client";

import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { heroMetrics, heroRevenueSeries } from "@/lib/data";

function TrendPill({ value }: { value: string }) {
  const positive = !value.startsWith("-");
  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${
        positive ? "bg-good/10 text-good" : "bg-bad/10 text-bad"
      }`}
    >
      {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
      {value}
    </span>
  );
}

export default function DashboardPreview() {
  return (
    <div className="relative animate-fade-up [animation-delay:150ms]">
      <div className="absolute -inset-x-6 -inset-y-6 -z-10 rounded-[2rem] bg-coral/10 blur-2xl md:-inset-x-10 md:-inset-y-10" />

      <div className="rounded-3xl border border-border bg-white p-5 shadow-[0_24px_60px_-24px_rgba(16,27,51,0.35)] sm:p-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-mute">Sellio dashboard</p>
            <p className="font-display text-lg font-semibold text-navy">This week</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-good/10 px-3 py-1.5 text-xs font-semibold text-good">
            <TrendingUp className="h-3.5 w-3.5" />
            Trending up
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 py-5">
          <div className="rounded-2xl bg-paper-dim p-4">
            <p className="text-xs font-medium text-navy-mute">Revenue</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="font-display text-2xl font-bold text-navy">{heroMetrics.revenue}</p>
              <TrendPill value={heroMetrics.revenueTrend} />
            </div>
          </div>
          <div className="rounded-2xl bg-paper-dim p-4">
            <p className="text-xs font-medium text-navy-mute">Orders</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="font-display text-2xl font-bold text-navy">{heroMetrics.orders}</p>
              <TrendPill value={heroMetrics.ordersTrend} />
            </div>
          </div>
          <div className="rounded-2xl bg-paper-dim p-4">
            <p className="text-xs font-medium text-navy-mute">Conversion</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="font-display text-2xl font-bold text-navy">{heroMetrics.conversion}</p>
              <TrendPill value={heroMetrics.conversionTrend} />
            </div>
          </div>
          <div className="rounded-2xl bg-paper-dim p-4">
            <p className="text-xs font-medium text-navy-mute">AOV</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="font-display text-2xl font-bold text-navy">{heroMetrics.aov}</p>
              <TrendPill value={heroMetrics.aovTrend} />
            </div>
          </div>
        </div>

        <div className="h-24 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={heroRevenueSeries} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="heroRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff5b45" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#ff5b45" stopOpacity={0} />
                </linearGradient>
              </defs>
              <YAxis hide domain={["dataMin - 400", "dataMax + 400"]} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#ff5b45"
                strokeWidth={2.5}
                fill="url(#heroRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4">
          <div>
            <p className="text-xs font-medium text-navy-mute">Top channel</p>
            <p className="mt-0.5 text-sm font-semibold text-navy">{heroMetrics.topChannel}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-navy-mute">Best seller</p>
            <p className="mt-0.5 text-sm font-semibold text-navy">{heroMetrics.bestSeller}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
