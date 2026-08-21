"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { salesByDaySeries } from "@/lib/data";

export default function SalesChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={salesByDaySeries} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
          <CartesianGrid vertical={false} stroke="#e5ddcd" />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "#6b6a63", fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "#6b6a63", fontSize: 12 }} />
          <Tooltip
            formatter={(value) => [`£${Number(value).toLocaleString()}`, "Sales"]}
            contentStyle={{ borderRadius: 12, border: "1px solid #e5ddcd", fontSize: 13 }}
          />
          <Bar dataKey="sales" fill="#101b33" radius={[6, 6, 0, 0]} maxBarSize={36} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
