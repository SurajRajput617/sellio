"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { trafficSources } from "@/lib/data";

export default function TrafficSourcesChart() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
      <div className="mx-auto h-40 w-40 shrink-0 sm:mx-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={trafficSources}
              dataKey="value"
              nameKey="name"
              innerRadius={48}
              outerRadius={70}
              paddingAngle={2}
              strokeWidth={0}
            >
              {trafficSources.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value}%`, name]}
              contentStyle={{ borderRadius: 12, border: "1px solid #e5ddcd", fontSize: 13 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex-1 space-y-2.5">
        {trafficSources.map((source) => (
          <div key={source.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: source.color }} />
              <span className="font-medium text-navy">{source.name}</span>
            </div>
            <span className="font-semibold text-navy-mute">{source.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
