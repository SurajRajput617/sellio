"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket } from "lucide-react";

export default function DocumentationSidebar() {
  const pathname = usePathname();

  // Main Getting Started links
  const mainLinkClass = (path: string) => {
    const active = pathname === path;

    return active
      ? "flex items-center gap-3 rounded-xl bg-coral/10 px-4 py-3 text-sm font-semibold text-coral"
      : "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral";
  };

  // Dropdown links
  const subLinkClass = (path: string) => {
    const active = pathname === path;

    return active
      ? "block rounded-lg bg-coral/10 px-3 py-2.5 text-sm font-semibold text-coral"
      : "block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral";
  };

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28">

        {/* ============================================= */}
        {/* GETTING STARTED */}
        {/* ============================================= */}

        <p className="mb-3 px-4 text-xs font-bold uppercase tracking-[0.18em] text-navy">
          Getting Started
        </p>

        <nav className="space-y-1">

          {/* OVERVIEW */}

          <Link
            href="/documentation"
            className={mainLinkClass("/documentation")}
          >
            <Rocket className="h-4 w-4 shrink-0" />

            <span>Overview</span>
          </Link>

          {/* 1 - BUY DOMAIN */}

          <Link
            href="/documentation/buy-domain"
            className={mainLinkClass("/documentation/buy-domain")}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              1
            </span>

            <span>Buy Your Domain</span>
          </Link>

          {/* 2 - ADD DOMAIN */}

          <Link
            href="/documentation/add-domain"
            className={mainLinkClass("/documentation/add-domain")}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              2
            </span>

            <span>Add Your Domain to Sellio</span>
          </Link>

          {/* 3 - CREATE COMPANY */}

          <Link
            href="/documentation/create-company"
            className={mainLinkClass("/documentation/create-company")}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              3
            </span>

            <span>Creating Your Company</span>
          </Link>

          {/* 4 - TERMS */}

          <Link
            href="/documentation/terms"
            className={mainLinkClass("/documentation/terms")}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              4
            </span>

            <span>Adding Your Terms</span>
          </Link>

          {/* 5 - PAYMENT GATEWAY */}

          <Link
            href="/documentation/payment-gateway"
            className={mainLinkClass("/documentation/payment-gateway")}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              5
            </span>

            <span>Payment Gateway</span>
          </Link>

        </nav>

        {/* ============================================= */}
        {/* CREATE YOUR FIRST RAFFLE DROPDOWN */}
        {/* ============================================= */}

        <details className="group mt-8" open>

          <summary
            className="
              flex cursor-pointer list-none items-center justify-between
              rounded-lg border border-border
              px-3 py-3
              text-xs font-bold uppercase tracking-wide text-navy
              transition-colors
              hover:border-coral/50
              [&::-webkit-details-marker]:hidden
            "
          >
            <span>CREATE YOUR FIRST RAFFLE</span>

            {/* DROPDOWN ARROW */}

            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="
                h-4 w-4 shrink-0
                transition-transform duration-200
                group-open:rotate-180
              "
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </summary>

          {/* DROPDOWN ITEMS */}

          <nav className="mt-2 space-y-1">

            <Link
              href="/documentation/create-competition"
              className={subLinkClass(
                "/documentation/create-competition"
              )}
            >
              Create a Competition
            </Link>

            <Link
              href="/documentation/instant-wins"
              className={subLinkClass(
                "/documentation/instant-wins"
              )}
            >
              Add Instant Wins
            </Link>

            <Link
              href="/documentation/product-categories"
              className={subLinkClass(
                "/documentation/product-categories"
              )}
            >
              Product Categories
            </Link>

            <Link
              href="/documentation/hidden-vip-competitions"
              className={subLinkClass(
                "/documentation/hidden-vip-competitions"
              )}
            >
              Hidden VIP Competitions
            </Link>

          </nav>

        </details>

      </div>
    </aside>
  );
}