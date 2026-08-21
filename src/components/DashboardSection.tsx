import { DollarSign, ShoppingCart, Percent, Receipt } from "lucide-react";
import MetricCard from "./dashboard/MetricCard";
import RevenueChart from "./dashboard/RevenueChart";
import TrafficSourcesChart from "./dashboard/TrafficSourcesChart";
import BestSellers from "./dashboard/BestSellers";
import InsightsPanel from "./dashboard/InsightsPanel";
import { heroMetrics } from "@/lib/data";

export default function DashboardSection() {
  return (
    <section id="dashboard" className="py-20 md:py-28">
      <div className="container-xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">Dashboard</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            A dashboard that actually makes sense.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-navy-mute">
            Your ecommerce store already produces data. Sellio turns that data into information
            you can actually use.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] border border-border bg-white p-4 shadow-[0_30px_70px_-32px_rgba(16,27,51,0.25)] sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <MetricCard label="Revenue" value={heroMetrics.revenue} trend={heroMetrics.revenueTrend} icon={DollarSign} />
            <MetricCard label="Orders" value={heroMetrics.orders} trend={heroMetrics.ordersTrend} icon={ShoppingCart} />
            <MetricCard label="Conversion Rate" value={heroMetrics.conversion} trend={heroMetrics.conversionTrend} icon={Percent} />
            <MetricCard label="Average Order Value" value={heroMetrics.aov} trend={heroMetrics.aovTrend} icon={Receipt} />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-paper-dim/60 p-5 lg:col-span-2">
              <h3 className="font-display text-base font-semibold text-navy">Revenue</h3>
              <RevenueChart />
            </div>
            <div className="rounded-2xl border border-border bg-paper-dim/60 p-5">
              <h3 className="font-display text-base font-semibold text-navy">Traffic sources</h3>
              <div className="mt-4">
                <TrafficSourcesChart />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-paper-dim/60 p-5 lg:col-span-2">
              <h3 className="font-display text-base font-semibold text-navy">Top products</h3>
              <div className="mt-3">
                <BestSellers />
              </div>
            </div>
            <InsightsPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
