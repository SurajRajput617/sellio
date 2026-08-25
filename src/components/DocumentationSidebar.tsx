"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket } from "lucide-react";


export default function DocumentationSidebar() {

  const pathname = usePathname();


  const mainLinkClass = (path: string) => {
    const active = pathname === path;

    return active
      ? "flex items-center gap-3 rounded-xl bg-coral/10 px-4 py-3 text-sm font-semibold text-coral"
      : "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral";
  };


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



          {/* 1 */}

          <Link
            href="/documentation/buy-domain"
            className={mainLinkClass("/documentation/buy-domain")}
          >

            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              1
            </span>

            <span>Buy Your Domain</span>

          </Link>



          {/* 2 */}

          <Link
            href="/documentation/add-domain"
            className={mainLinkClass("/documentation/add-domain")}
          >

            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              2
            </span>

            <span>Add Your Domain to Sellio</span>

          </Link>



          {/* 3 */}

          <Link
            href="/documentation/create-company"
            className={mainLinkClass("/documentation/create-company")}
          >

            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              3
            </span>

            <span>Creating Your Company</span>

          </Link>



          {/* 4 */}

          <Link
            href="/documentation/terms"
            className={mainLinkClass("/documentation/terms")}
          >

            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              4
            </span>

            <span>Adding Your Terms</span>

          </Link>



          {/* 5 */}

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
        {/* CREATE YOUR FIRST RAFFLE */}
        {/* ============================================= */}


        <details className="group mt-7" open>


          <summary
            className="
              flex cursor-pointer list-none items-center justify-between
              rounded-lg border border-border
              px-3 py-3
              text-xs font-bold uppercase tracking-wide text-navy
              transition-colors
              hover:border-coral/40
              [&::-webkit-details-marker]:hidden
            "
          >

            <span>CREATE YOUR FIRST RAFFLE</span>


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



          <nav className="mt-1 space-y-1">


            <Link
              href="/documentation/create-competition"
              className={subLinkClass("/documentation/create-competition")}
            >
              Create a Competition
            </Link>



            <Link
              href="/documentation/instant-wins"
              className={subLinkClass("/documentation/instant-wins")}
            >
              Add Instant Wins
            </Link>



            <Link
              href="/documentation/product-categories"
              className={subLinkClass("/documentation/product-categories")}
            >
              Product Categories
            </Link>



            <Link
              href="/documentation/hidden-vip-competitions"
              className={subLinkClass("/documentation/hidden-vip-competitions")}
            >
              Hidden VIP Competitions
            </Link>


          </nav>


        </details>
                {/* ============================================= */}
        {/* CUSTOMISE YOUR SITE DROPDOWN */}
        {/* ============================================= */}


        <details className="group mt-7" open>


          <summary
            className="
              flex cursor-pointer list-none items-center justify-between
              rounded-lg border border-border
              px-3 py-2.5
              text-xs font-bold uppercase tracking-wide text-navy
              transition-colors
              hover:border-coral/40
              [&::-webkit-details-marker]:hidden
            "
          >

            <span>CUSTOMISE YOUR SITE</span>


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



          <nav className="mt-1 space-y-1">


            <Link
              href="/documentation/add-logo"
              className={subLinkClass("/documentation/add-logo")}
            >
              Add Your Logo
            </Link>



            <Link
              href="/documentation/site-colours"
              className={subLinkClass("/documentation/site-colours")}
            >
              Choose Site Colours
            </Link>



            <Link
              href="/documentation/homepage-setup"
              className={subLinkClass("/documentation/homepage-setup")}
            >
              Set Up Your Homepage
            </Link>


          </nav>


        </details>

{/* ===================================================== */}
{/* ESSENTIAL SETTINGS DROPDOWN */}
{/* ===================================================== */}

<details className="group mt-7" open>
  <summary
    className="
      flex cursor-pointer list-none items-center justify-between
      rounded-lg border border-border px-3 py-2.5
      text-xs font-bold uppercase tracking-wide text-navy
      transition-colors
      hover:border-coral/40
      [&::-webkit-details-marker]:hidden
    "
  >
    <span>ESSENTIAL SETTINGS</span>

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


  <nav className="mt-1 space-y-1">

    <Link
      href="/documentation/connect-social-accounts"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Connect Your Social Accounts
    </Link>


    <Link
      href="/documentation/email-setup"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Email Setup
    </Link>


    <Link
      href="/documentation/wallet-withdrawals"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Wallet & Withdrawals
    </Link>


    <Link
      href="/documentation/terms-conditions"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Add Terms & Conditions
    </Link>

  </nav>
</details>

{/* ===================================================== */}
{/* ADDITIONAL SETTINGS DROPDOWN */}
{/* ===================================================== */}

<details className="group mt-7" open>
  <summary
    className="
      flex cursor-pointer list-none items-center justify-between
      rounded-lg border border-border px-3 py-2.5
      text-xs font-bold uppercase tracking-wide text-navy
      transition-colors
      hover:border-coral/40
      [&::-webkit-details-marker]:hidden
    "
  >
    <span>ADDITIONAL SETTINGS</span>

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


  <nav className="mt-1 space-y-1">

    <Link
      href="/documentation/entry-list-display"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Entry List Display
    </Link>


    <Link
      href="/documentation/order-cart-settings"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Order & Cart Settings
    </Link>


    <Link
      href="/documentation/free-entry"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Free Entry
    </Link>


    <Link
      href="/documentation/site-credit-wallets"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Site Credit & Wallets
    </Link>


    <Link
      href="/documentation/payouts"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Payouts
    </Link>


    <Link
      href="/documentation/safe-play-setting"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Safe Play Setting
    </Link>


    <Link
      href="/documentation/leaderboards"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Leaderboards
    </Link>

  </nav>
</details>

{/* SETTINGS DROPDOWN */}

<details className="group mt-1">

  <summary
    className="
      flex cursor-pointer list-none items-center justify-between
      rounded-lg px-3 py-2
      text-sm font-medium text-navy-mute
      transition-colors
      hover:bg-coral/10 hover:text-coral
      [&::-webkit-details-marker]:hidden
    "
  >
    <span>Settings</span>

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


  <nav className="ml-3 mt-1 border-l border-border pl-5">

    <Link
      href="/documentation/integrations"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Integrations
    </Link>

  </nav>

</details>

      </div>

    </aside>

  );

}