"use client";

import { useState } from "react";
import { ChevronDown, Bell, Calendar } from "lucide-react";

const stores = ["Everyday Goods Co.", "Northside Prints", "Loom & Leaf"];
const ranges = ["Last 7 days", "Last 30 days", "This quarter", "Year to date"];

export default function DashboardTopbar() {
  const [store, setStore] = useState(stores[0]);
  const [range, setRange] = useState(ranges[1]);
  const [storeOpen, setStoreOpen] = useState(false);
  const [rangeOpen, setRangeOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-white px-4 py-4 sm:px-6">
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="relative">
          <button
            type="button"
            onClick={() => setStoreOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full border border-border bg-paper px-4 py-2 text-sm font-medium text-navy"
          >
            {store}
            <ChevronDown className="h-4 w-4 text-navy-mute" />
          </button>
          {storeOpen && (
            <div className="absolute left-0 top-full z-20 mt-2 w-56 rounded-xl border border-border bg-white p-1.5 shadow-lg">
              {stores.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setStore(s);
                    setStoreOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm text-navy hover:bg-paper-dim"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setRangeOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full border border-border bg-paper px-4 py-2 text-sm font-medium text-navy"
          >
            <Calendar className="h-4 w-4 text-navy-mute" />
            {range}
            <ChevronDown className="h-4 w-4 text-navy-mute" />
          </button>
          {rangeOpen && (
            <div className="absolute left-0 top-full z-20 mt-2 w-48 rounded-xl border border-border bg-white p-1.5 shadow-lg">
              {ranges.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRange(r);
                    setRangeOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm text-navy hover:bg-paper-dim"
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy"
          aria-label="Notifications"
        >
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-coral" />
        </button>
        <div className="flex items-center gap-2.5 rounded-full border border-border py-1.5 pl-1.5 pr-3.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-coral">
            JR
          </span>
          <span className="text-sm font-medium text-navy">Jordan Reyes</span>
        </div>
      </div>
    </div>
  );
}
