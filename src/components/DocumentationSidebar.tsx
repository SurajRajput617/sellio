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
              className={subLinkClass(
                "/documentation/hidden-vip-competitions"
              )}
            >
              Hidden VIP Competitions
            </Link>

          </nav>
        </details>

        {/* ============================================= */}
        {/* CUSTOMISE YOUR SITE */}
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
        {/* ESSENTIAL SETTINGS */}
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
              className={subLinkClass(
                "/documentation/connect-social-accounts"
              )}
            >
              Connect Your Social Accounts
            </Link>

            <Link
              href="/documentation/email-setup"
              className={subLinkClass("/documentation/email-setup")}
            >
              Email Setup
            </Link>

            <Link
              href="/documentation/wallet-withdrawals"
              className={subLinkClass("/documentation/wallet-withdrawals")}
            >
              Wallet & Withdrawals
            </Link>

            <Link
              href="/documentation/terms-conditions"
              className={subLinkClass("/documentation/terms-conditions")}
            >
              Add Terms & Conditions
            </Link>

          </nav>
        </details>

        {/* ===================================================== */}
        {/* ADDITIONAL SETTINGS */}
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
              className={subLinkClass("/documentation/entry-list-display")}
            >
              Entry List Display
            </Link>

            <Link
              href="/documentation/order-cart-settings"
              className={subLinkClass(
                "/documentation/order-cart-settings"
              )}
            >
              Order & Cart Settings
            </Link>

            <Link
              href="/documentation/free-entry"
              className={subLinkClass("/documentation/free-entry")}
            >
              Free Entry
            </Link>

            <Link
              href="/documentation/site-credit-wallets"
              className={subLinkClass(
                "/documentation/site-credit-wallets"
              )}
            >
              Site Credit & Wallets
            </Link>

            <Link
              href="/documentation/payouts"
              className={subLinkClass("/documentation/payouts")}
            >
              Payouts
            </Link>

            <Link
              href="/documentation/safe-play-setting"
              className={subLinkClass("/documentation/safe-play-setting")}
            >
              Safe Play Setting
            </Link>

            <Link
              href="/documentation/leaderboards"
              className={subLinkClass("/documentation/leaderboards")}
            >
              Leaderboards
            </Link>

          </nav>
        </details>

        {/* ============================================= */}
        {/* SETTINGS DROPDOWN */}
        {/* ============================================= */}

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
              className={subLinkClass("/documentation/integrations")}
            >
              Integrations
            </Link>
          </nav>
        </details>

        {/* ===================================================== */}
        {/* INSTANT WIN GAMES */}
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
            <span>INSTANT WIN GAMES</span>

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
              href="/documentation/overview"
              className={subLinkClass("/documentation/overview")}
            >
              Overview
            </Link>

            <Link
              href="/documentation/test-a-game-type"
              className={subLinkClass("/documentation/test-a-game-type")}
            >
              Test a Game Type
            </Link>

            <Link
              href="/documentation/spin-the-wheel"
              className={subLinkClass("/documentation/spin-the-wheel")}
            >
              Spin the Wheel
            </Link>

            <Link
              href="/documentation/slots"
              className={subLinkClass("/documentation/slots")}
            >
              Slots
            </Link>

            <Link
              href="/documentation/scratch-card"
              className={subLinkClass("/documentation/scratch-card")}
            >
              Scratch Card
            </Link>

            <Link
              href="/documentation/pop"
              className={subLinkClass("/documentation/pop")}
            >
              Pop
            </Link>

            <Link
              href="/documentation/pinata"
              className={subLinkClass("/documentation/pinata")}
            >
              Piñata
            </Link>

            <Link
              href="/documentation/safe-cracker"
              className={subLinkClass("/documentation/safe-cracker")}
            >
              Safe Cracker
            </Link>

            <Link
              href="/documentation/loot-boxes"
              className={subLinkClass("/documentation/loot-boxes")}
            >
              Loot Boxes
            </Link>

            <Link
              href="/documentation/instant-reveal"
              className={subLinkClass("/documentation/instant-reveal")}
            >
              Instant Reveal
            </Link>

            <Link
              href="/documentation/pot-drop"
              className={subLinkClass("/documentation/pot-drop")}
            >
              Pot Drop
            </Link>

            <Link
              href="/documentation/whack-a-mole"
              className={subLinkClass("/documentation/whack-a-mole")}
            >
              Whack-a-Mole
            </Link>

            <Link
              href="/documentation/one-line-bingo"
              className={subLinkClass("/documentation/one-line-bingo")}
            >
              One Line Bingo
            </Link>

            <Link
              href="/documentation/plinko"
              className={subLinkClass("/documentation/plinko")}
            >
              Plinko
            </Link>

            <Link
              href="/documentation/gems"
              className={subLinkClass("/documentation/gems")}
            >
              Gems
            </Link>

          </nav>
        </details>
{/* ===================================================== */}
{/* DRAWING WINNERS */}
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
    <span>DRAWING WINNERS</span>

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
      href="/documentation/truenorth-setup"
      className={subLinkClass("/documentation/truenorth-setup")}
    >
      TrueNorth Setup
    </Link>

    <Link
      href="/documentation/truenorth-autodraws"
      className={subLinkClass("/documentation/truenorth-autodraws")}
    >
      TrueNorth Autodraws
    </Link>

    <Link
      href="/documentation/truenorth-live-stream-draws"
      className={subLinkClass(
        "/documentation/truenorth-live-stream-draws"
      )}
    >
      TrueNorth Live Stream Draws
    </Link>

    <Link
      href="/documentation/manual-draw"
      className={subLinkClass("/documentation/manual-draw")}
    >
      Manual Draw
    </Link>

    <Link
      href="/documentation/managing-instant-winners"
      className={subLinkClass(
        "/documentation/managing-instant-winners"
      )}
    >
      Managing Instant Winners
    </Link>

    <Link
      href="/documentation/add-daily-instant-winner-stats"
      className={subLinkClass(
        "/documentation/add-daily-instant-winner-stats"
      )}
    >
      Add Daily Instant Winner Stats
    </Link>

    <Link
      href="/documentation/managing-layouts"
      className={subLinkClass("/documentation/managing-layouts")}
    >
      Managing Layouts
    </Link>
   </nav>
        </details>
{/* ===================================================== */}
{/* MARKETING */}
{/* ===================================================== */}

<div className="mt-7">

  <h3
    className="
      mb-3
      px-3
      text-xs
      font-bold
      uppercase
      tracking-wide
      text-[#ff5b45]
    "
  >
    MARKETING
  </h3>


  <details className="group" open>

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

      <span>
        Website tools
      </span>


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
        href="/documentation/promos-and-discounts"
        className={subLinkClass(
          "/documentation/promos-and-discounts"
        )}
      >
        Promos and Discounts
      </Link>


      <Link
        href="/documentation/upsell"
        className={subLinkClass(
          "/documentation/upsell"
        )}
      >
        Upsell
      </Link>


      <Link
        href="/documentation/dropped-basket-recovery"
        className={subLinkClass(
          "/documentation/dropped-basket-recovery"
        )}
      >
        Dropped Basket Recovery
      </Link>


      <Link
        href="/documentation/seo-settings"
        className={subLinkClass(
          "/documentation/seo-settings"
        )}
      >
        SEO Settings
      </Link>


      <Link
        href="/documentation/top-banner-text"
        className={subLinkClass(
          "/documentation/top-banner-text"
        )}
      >
        Top Banner Text
      </Link>
  </nav>
        </details>
{/* ===================================================== */}
{/* SMS & EMAIL */}
{/* ===================================================== */}

<div className="mt-7">

  <details className="group" open>

    <summary
      className="
        flex cursor-pointer list-none items-center justify-between
        rounded-md border border-[#e5ddcd]
        px-3 py-2
        text-sm font-semibold text-[#101b33]
        transition-colors
         hover:border-coral/40
        [&::-webkit-details-marker]:hidden
      "
    >

      <span>
        SMS & Email
      </span>


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


    <nav className="mt-2 space-y-1">


      <Link
        href="/documentation/sms"
        className={subLinkClass("/documentation/sms")}
      >
        SMS
      </Link>


      <Link
        href="/documentation/setup-email-marketing"
        className={subLinkClass(
          "/documentation/setup-email-marketing"
        )}
      >
        Set Up Email Marketing
      </Link>


      <Link
        href="/documentation/sending-an-email-with-notify"
        className={subLinkClass(
          "/documentation/sending-an-email-with-notify"
        )}
      >
        Sending an Email with Notify
      </Link>


      <Link
        href="/documentation/klaviyo-integration"
        className={subLinkClass(
          "/documentation/klaviyo-integration"
        )}
      >
        Klaviyo Integration
      </Link>


    </nav>

  </details>

{/* --- */}

{/* ===================================================== */}
{/* FACEBOOK & META */}
{/* ===================================================== */}

<div className="mt-7">

  <details className="group" open>

    <summary
      className="
        flex cursor-pointer list-none items-center justify-between
        rounded-md border border-[#e5ddcd]
        px-3 py-2
        text-sm font-semibold text-[#101b33]
        transition-colors
        hover:border-[#ff5b45]/40
        [&::-webkit-details-marker]:hidden
      "
    >

      <span>
        Facebook & Meta
      </span>


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


    <nav className="mt-2 space-y-1">

      <Link
        href="/documentation/advertising"
        className={subLinkClass(
          "/documentation/advertising"
        )}
      >
        Advertising
      </Link>


      <Link
        href="/documentation/tracking"
        className={subLinkClass(
          "/documentation/tracking"
        )}
      >
        Tracking
      </Link>


      <Link
        href="/documentation/product-catalogue"
        className={subLinkClass(
          "/documentation/product-catalogue"
        )}
      >
        Product Catalogue
      </Link>


    </nav>

  </details>
{/* ===================================================== */}
{/* AFFILIATE REFERRAL SCHEME */}
{/* ===================================================== */}

<div className="mt-7">

  <details className="group" open>

    <summary
      className="
        flex cursor-pointer list-none items-center justify-between
        rounded-md border border-[#e5ddcd]
        px-3 py-2
        text-sm font-semibold text-[#101b33]
        transition-colors
        hover:border-[#ff5b45]/40
        [&::-webkit-details-marker]:hidden
      "
    >

      <span>
        AFFILIATE REFERRAL SCHEME
      </span>


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


    <nav className="mt-2 space-y-1">


      <Link
        href="/documentation/affiliate-overview"
        className={subLinkClass(
          "/documentation/affiliate-overview"
        )}
      >
        Overview
      </Link>


      <Link
        href="/documentation/setting-up-the-scheme"
        className={subLinkClass(
          "/documentation/setting-up-the-scheme"
        )}
      >
        Setting Up the Scheme
      </Link>


      <Link
        href="/documentation/how-users-participate"
        className={subLinkClass(
          "/documentation/how-users-participate"
        )}
      >
        How Users Participate
      </Link>


      <Link
        href="/documentation/managing-referrals"
        className={subLinkClass(
          "/documentation/managing-referrals"
        )}
      >
        Managing Referrals
      </Link>


    </nav>

  </details>
{/* ===================================================== */}
{/* DOWNLOADS & REPORTS */}
{/* ===================================================== */}

<div className="mt-7">

  <details className="group" open>

    <summary
      className="
        flex cursor-pointer list-none items-center justify-between
      rounded-md border border-[#e5ddcd]
        px-3 py-2
        text-sm font-semibold text-[#101b33]
        transition-colors
        hover:border-[#ff5b45]/40
        [&::-webkit-details-marker]:hidden
      "
    >

      <span>
        DOWNLOADS & REPORTS
      </span>


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


    <nav className="mt-2 space-y-1">


      <Link
        href="/documentation/downloads-reports-overview"
        className={subLinkClass(
          "/documentation/downloads-reports-overview"
        )}
      >
        Overview
      </Link>


    </nav>

  </details>
{/* ===================================================== */}
{/* STANDARDS */}
{/* ===================================================== */}

<div className="mt-7">
  <details className="group" open>
    <summary
      className="
        flex cursor-pointer list-none items-center justify-between
        rounded-md border border-[#4a5875]
        px-3 py-2
        text-sm font-semibold text-[#101b33]
        transition-colors
        hover:border-[#ff5b45]/40
        [&::-webkit-details-marker]:hidden
      "
    >
      <span>STANDARDS</span>

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

    <nav className="mt-2 space-y-1">

      {/* Overview */}
      <Link
        href="/documentation/standards-overview"
        className={subLinkClass(
          "/documentation/standards-overview"
        )}
      >
        ⚖ <span className="ml-2">Overview</span>
      </Link>

      {/* Player Protections */}
      <Link
        href="/documentation/player-protections"
        className={subLinkClass(
          "/documentation/player-protections"
        )}
      >
        ♡ <span className="ml-2">Player Protections</span>
      </Link>

      {/* Transparency */}
      <Link
        href="/documentation/transparency"
        className={subLinkClass(
          "/documentation/transparency"
        )}
      >
        ◉ <span className="ml-2">Transparency</span>
      </Link>

      {/* Accountability */}
      <Link
        href="/documentation/accountability"
        className={subLinkClass(
          "/documentation/accountability"
        )}
      >
        ☑ <span className="ml-2">Accountability</span>
      </Link>

    </nav>
  </details>


{/* ===================================================== */}
{/* ADVANCED */}
{/* ===================================================== */}

<div className="mt-7">
  <details className="group" open>
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
      <span>ADVANCED</span>

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

    <nav className="mt-2 space-y-1 pl-5">

      {/* Conversion Event Tracking */}
      <Link
        href="/documentation/conversion-event-tracking"
        className={subLinkClass(
          "/documentation/conversion-event-tracking"
        )}
      >
        Conversion Event Tracking
      </Link>

    </nav>
  </details>
</div>

{/* ===================================================== */}
{/* TWIG TEMPLATING */}
{/* ===================================================== */}

<div className="mt-7">

  <details className="group" open>

    <summary
      className="
        flex cursor-pointer list-none items-center justify-between
        rounded-md border border-[#4a5875]
        px-3 py-2
        text-sm font-semibold text-[#101b33]
        transition-colors
        hover:border-[#ff5b45]/40
        [&::-webkit-details-marker]:hidden
      "
    >
      <span>
        TWIG TEMPLATING
      </span>

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


    <nav className="mt-2 space-y-1">

      <Link
        href="/documentation/custom-twig-block"
        className={subLinkClass(
          "/documentation/custom-twig-block"
        )}
      >
        Custom Twig Block
      </Link>


      <Link
        href="/documentation/custom-twig-product-grid"
        className={subLinkClass(
          "/documentation/custom-twig-product-grid"
        )}
      >
        Custom Twig Product Grid
      </Link>


      <Link
        href="/documentation/custom-twig-slider"
        className={subLinkClass(
          "/documentation/custom-twig-slider"
        )}
      >
        Custom Twig Slider
      </Link>


      <Link
        href="/documentation/settings-variables"
        className={subLinkClass(
          "/documentation/settings-variables"
        )}
      >
        Settings Variables
      </Link>

    </nav>

  </details>
{/* ===================================================== */}
{/* HELPFUL INFO */}
{/* ===================================================== */}

<div className="mt-7">

  <details className="group" open>

    <summary
      className="
        flex cursor-pointer list-none items-center justify-between
        rounded-md border border-[#4a5875]
        px-3 py-2
        text-sm font-semibold text-[#101b33]
        transition-colors
        hover:border-[#ff5b45]/40
        [&::-webkit-details-marker]:hidden
      "
    >
      <span>
        HELPFUL INFO
      </span>

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


    <nav className="mt-2 space-y-1">

      <Link
        href="/documentation/analytics"
        className={subLinkClass("/documentation/analytics")}
      >
        Analytics
      </Link>

      <Link
        href="/documentation/google-analytics"
        className={subLinkClass("/documentation/google-analytics")}
      >
        Google Analytics
      </Link>

      <Link
        href="/documentation/what-google-analytics-tracks"
        className={subLinkClass(
          "/documentation/what-google-analytics-tracks"
        )}
      >
        What Google Analytics Tracks
      </Link>

      <Link
        href="/documentation/utm-tags"
        className={subLinkClass("/documentation/utm-tags")}
      >
        UTM Tags
      </Link>

      <Link
        href="/documentation/creating-a-free-entry-competition"
        className={subLinkClass(
          "/documentation/creating-a-free-entry-competition"
        )}
      >
        Creating a Free Entry Competition
      </Link>

      <Link
        href="/documentation/ensure-www-loads-your-site"
        className={subLinkClass(
          "/documentation/ensure-www-loads-your-site"
        )}
      >
        Ensure www. Loads Your Site
      </Link>

      {/* <Link
        href="/documentation/pci-compliance-scan"
        className={subLinkClass(
          "/documentation/pci-compliance-scan"
        )}
      >
        PCI Compliance Scan
      </Link>

      <Link
        href="/documentation/pending-tickets"
        className={subLinkClass(
          "/documentation/pending-tickets"
        )}
      >
        Pending Tickets
      </Link>

      <Link
        href="/documentation/set-up-email-inbox"
        className={subLinkClass(
          "/documentation/set-up-email-inbox"
        )}
      >
        Set Up Email Inbox
      </Link>

      <Link
        href="/documentation/image-size-guide"
        className={subLinkClass(
          "/documentation/image-size-guide"
        )}
      >
        Image Size Guide
      </Link>

      <Link
        href="/documentation/reset-password"
        className={subLinkClass(
          "/documentation/reset-password"
        )}
      >
        Reset Password
      </Link>

      <Link
        href="/documentation/checklist"
        className={subLinkClass("/documentation/checklist")}
      >
        Checklist
      </Link> */}

    </nav>

  </details>
</div>

</div>
</div>
</div>
</div>
</div>

</div>


</div>

      </div>
    </aside>
  );
}