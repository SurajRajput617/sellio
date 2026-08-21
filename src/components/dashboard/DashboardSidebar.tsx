"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  BarChart3,
  ShoppingCart,
  Package,
  Users,
  Megaphone,
  Sparkles,
  GraduationCap,
  LifeBuoy,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Analytics", icon: BarChart3 },
  { label: "Orders", icon: ShoppingCart },
  { label: "Products", icon: Package },
  { label: "Customers", icon: Users },
  { label: "Marketing", icon: Megaphone },
  { label: "Sellio Insights", icon: Sparkles },
  { label: "Academy", icon: GraduationCap },
  { label: "Support", icon: LifeBuoy },
];

export default function DashboardSidebar({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (label: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const content = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const isActive = item.label === active;
        return (
          <button
            key={item.label}
            type="button"
            onClick={() => {
              onSelect(item.label);
              setOpen(false);
            }}
            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-[14px] font-medium transition-colors ${
              isActive ? "bg-navy text-white" : "text-navy-mute hover:bg-paper-dim hover:text-navy"
            }`}
          >
            <item.icon className="h-4.5 w-4.5 shrink-0" />
            {item.label}
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border bg-white p-5 lg:flex lg:flex-col">
        <Link href="/" className="flex items-center gap-2 px-1 font-display text-lg font-bold text-navy">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-coral">
            <span className="font-display text-sm font-bold">S</span>
          </span>
          Sellio
        </Link>
        <div className="mt-8">{content}</div>

        <div className="mt-auto rounded-2xl bg-paper-dim p-4">
          <p className="text-xs font-semibold text-navy-mute">Prototype dashboard</p>
          <p className="mt-1 text-xs leading-relaxed text-navy-mute">
            All data shown is illustrative sample data.
          </p>
        </div>
      </aside>

      {/* Mobile top bar with drawer */}
      <div className="flex items-center justify-between border-b border-border bg-white px-4 py-3 lg:hidden">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-navy">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy text-coral">
            <span className="font-display text-xs font-bold">S</span>
          </span>
          Sellio
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-navy"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-navy/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 bg-white p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold text-navy">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-navy"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-6">{content}</div>
          </div>
        </div>
      )}
    </>
  );
}
