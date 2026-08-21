"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { revenueSeries } from "@/lib/data";

export default function RevenueChart() {
  return (
    <div className="h-64 w-full sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={revenueSeries} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff5b45" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#ff5b45" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#e5ddcd" />
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#6b6a63", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#6b6a63", fontSize: 12 }}
            tickFormatter={(v) => `£${v / 1000}k`}
          />
          <Tooltip
            formatter={(value) => [`£${Number(value).toLocaleString()}`, "Revenue"]}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #e5ddcd",
              fontSize: 13,
            }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#ff5b45"
            strokeWidth={2.5}
            fill="url(#revenueFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
