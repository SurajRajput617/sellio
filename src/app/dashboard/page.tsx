"use client";

import { useState } from "react";
import {
  DollarSign,
  ShoppingCart,
  Percent,
  Receipt,
  GraduationCap,
  PlayCircle,
  FileText,
  LifeBuoy,
  Mail,
  MessageCircle,
  Users,
} from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";
import MetricCard from "@/components/dashboard/MetricCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import SalesChart from "@/components/dashboard/SalesChart";
import TrafficSourcesChart from "@/components/dashboard/TrafficSourcesChart";
import BestSellers from "@/components/dashboard/BestSellers";
import RecentOrders from "@/components/dashboard/RecentOrders";
import MarketingPerformance from "@/components/dashboard/MarketingPerformance";
import InsightsPanel from "@/components/dashboard/InsightsPanel";
import { heroMetrics, bestSellers, recentOrders } from "@/lib/data";

const panelClass = "rounded-2xl border border-border bg-white p-5 sm:p-6";

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">{title}</h1>
      <p className="mt-1.5 text-[15px] text-navy-mute">{description}</p>
    </div>
  );
}

function OverviewPanel() {
  return (
    <div className="space-y-6">
      <SectionHeading
        title="Overview"
        description="Everyday Goods Co. — a snapshot of how your store is performing."
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard label="Revenue" value={heroMetrics.revenue} trend={heroMetrics.revenueTrend} icon={DollarSign} />
        <MetricCard label="Orders" value={heroMetrics.orders} trend={heroMetrics.ordersTrend} icon={ShoppingCart} />
        <MetricCard label="Conversion Rate" value={heroMetrics.conversion} trend={heroMetrics.conversionTrend} icon={Percent} />
        <MetricCard label="Average Order Value" value={heroMetrics.aov} trend={heroMetrics.aovTrend} icon={Receipt} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className={`${panelClass} lg:col-span-2`}>
          <h2 className="font-display text-base font-semibold text-navy">Revenue</h2>
          <RevenueChart />
        </div>
        <div className={panelClass}>
          <h2 className="font-display text-base font-semibold text-navy">Traffic sources</h2>
          <div className="mt-4">
            <TrafficSourcesChart />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className={panelClass}>
          <h2 className="font-display text-base font-semibold text-navy">Sales this week</h2>
          <SalesChart />
        </div>
        <div className={panelClass}>
          <h2 className="font-display text-base font-semibold text-navy">Best sellers</h2>
          <div className="mt-2">
            <BestSellers />
          </div>
        </div>
        <InsightsPanel />
      </div>

      <div className={panelClass}>
        <h2 className="font-display text-base font-semibold text-navy">Recent orders</h2>
        <div className="mt-4">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}

function AnalyticsPanel() {
  return (
    <div className="space-y-6">
      <SectionHeading title="Analytics" description="How revenue and traffic are trending over time." />
      <div className={panelClass}>
        <h2 className="font-display text-base font-semibold text-navy">Revenue, last 8 weeks</h2>
        <RevenueChart />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className={panelClass}>
          <h2 className="font-display text-base font-semibold text-navy">Sales by day</h2>
          <SalesChart />
        </div>
        <div className={panelClass}>
          <h2 className="font-display text-base font-semibold text-navy">Traffic sources</h2>
          <div className="mt-4">
            <TrafficSourcesChart />
          </div>
        </div>
      </div>
    </div>
  );
}

function OrdersPanel() {
  return (
    <div className="space-y-6">
      <SectionHeading title="Orders" description={`${recentOrders.length} most recent orders across your store.`} />
      <div className={panelClass}>
        <RecentOrders />
      </div>
    </div>
  );
}

function ProductsPanel() {
  return (
    <div className="space-y-6">
      <SectionHeading title="Products" description="Your best performing products this month." />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className={panelClass}>
          <h2 className="font-display text-base font-semibold text-navy">Best sellers</h2>
          <div className="mt-2">
            <BestSellers />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {bestSellers.map((product) => (
            <div key={product.name} className={panelClass}>
              <p className="text-sm font-semibold text-navy">{product.name}</p>
              <p className="mt-2 font-display text-xl font-bold text-navy">{product.revenue}</p>
              <p className="mt-1 text-xs text-navy-mute">{product.units} units · {product.share} of sales</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CustomersPanel() {
  const stats = [
    { label: "Total customers", value: "2,940", icon: Users },
    { label: "Returning customers", value: "38%", icon: Users },
    { label: "Avg. lifetime value", value: "£126", icon: Users },
  ];
  return (
    <div className="space-y-6">
      <SectionHeading title="Customers" description="A snapshot of who's buying from your store." />
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className={panelClass}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper-dim text-navy">
              <stat.icon className="h-4.5 w-4.5" />
            </span>
            <p className="mt-4 text-sm font-medium text-navy-mute">{stat.label}</p>
            <p className="mt-1 font-display text-2xl font-bold text-navy">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className={panelClass}>
        <h2 className="font-display text-base font-semibold text-navy">Recent customers</h2>
        <div className="mt-4">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}

function MarketingPanel() {
  return (
    <div className="space-y-6">
      <SectionHeading title="Marketing" description="Spend and return across your active channels." />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className={panelClass}>
          <h2 className="font-display text-base font-semibold text-navy">Channel performance</h2>
          <div className="mt-4">
            <MarketingPerformance />
          </div>
        </div>
        <div className={panelClass}>
          <h2 className="font-display text-base font-semibold text-navy">Traffic sources</h2>
          <div className="mt-4">
            <TrafficSourcesChart />
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightsFullPanel() {
  return (
    <div className="space-y-6">
      <SectionHeading title="Sellio Insights" description="Patterns Sellio has spotted in your store data." />
      <InsightsPanel />
    </div>
  );
}

function AcademyPanel() {
  const lessons = [
    { title: "Getting started with your Sellio store", icon: PlayCircle },
    { title: "Writing product descriptions that sell", icon: FileText },
    { title: "Reading your dashboard", icon: GraduationCap },
    { title: "Running your first email campaign", icon: Mail },
  ];
  return (
    <div className="space-y-6">
      <SectionHeading title="Academy" description="Short lessons to help you run and grow your store." />
      <div className="grid gap-4 sm:grid-cols-2">
        {lessons.map((lesson) => (
          <div key={lesson.title} className={`${panelClass} flex items-center gap-4`}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral-light text-coral-dark">
              <lesson.icon className="h-5 w-5" />
            </span>
            <p className="text-sm font-semibold text-navy">{lesson.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportPanel() {
  return (
    <div className="space-y-6">
      <SectionHeading title="Support" description="Reach the Sellio team when you need a hand." />
      <div className={`${panelClass} flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between`}>
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-coral">
            <LifeBuoy className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-navy">Message the Sellio team</p>
            <p className="text-sm text-navy-mute">Average response time: under 4 hours.</p>
          </div>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white">
          <MessageCircle className="h-4 w-4" />
          Start a conversation
        </button>
      </div>
    </div>
  );
}

const panels: Record<string, React.ComponentType> = {
  Overview: OverviewPanel,
  Analytics: AnalyticsPanel,
  Orders: OrdersPanel,
  Products: ProductsPanel,
  Customers: CustomersPanel,
  Marketing: MarketingPanel,
  "Sellio Insights": InsightsFullPanel,
  Academy: AcademyPanel,
  Support: SupportPanel,
};

export default function DashboardPage() {
  const [active, setActive] = useState("Overview");
  const ActivePanel = panels[active];

  return (
    <div className="flex min-h-screen bg-paper">
      <DashboardSidebar active={active} onSelect={setActive} />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <ActivePanel />
        </main>
      </div>
    </div>
  );
}
