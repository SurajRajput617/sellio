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
      <div className="sticky top-28 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
        {/* Fixed Sidebar Button */}
        <div className="sticky top-0 z-50 bg-[#faf6ee] pt-5 pb-5">
          <div className="flex justify-start bg-[#faf6ee]">
            <Link
              href="/"
              className="
    flex 
    w-[180px] 
    items-start 
    justify-start 
    gap-2 
    rounded-full 
    bg-[#ff5b45] 
    px-5 
    py-3 
    text-sm 
    font-bold 
    text-white 
    shadow-md 
    transition 
    duration-300
    hover:-translate-y-1
    hover:bg-[#e0432f]
  "
            >
              Back To Sellio ↗
            </Link>
          </div>
        </div>


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
            href="/getting-started/buy-domain"
            className={mainLinkClass("/getting-started/buy-domain")}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              1
            </span>
            <span>Buy Your Domain</span>
          </Link>

          {/* 2 */}
          <Link
            href="/getting-started/add-domain"
            className={mainLinkClass("/getting-started/add-domain")}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              2
            </span>
            <span>Add Your Domain to Sellio</span>
          </Link>

          {/* 3 */}
          <Link
            href="/getting-started/create-company"
            className={mainLinkClass("/getting-started/create-company")}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              3
            </span>
            <span>Creating Your Company</span>
          </Link>

          {/* 4 */}
          <Link
            href="/getting-started/terms"
            className={mainLinkClass("/getting-started/terms")}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
              4
            </span>
            <span>Adding Your Terms</span>
          </Link>

          {/* 5 */}
          <Link
            href="/getting-started/payment-gateway"
            className={mainLinkClass("/getting-started/payment-gateway")}
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
              href="/create-your-first-raffle/create-competition"
              className={subLinkClass("/create-your-first-raffle/create-competition")}
            >
              Create a Competition
            </Link>

            <Link
              href="/create-your-first-raffle/instant-wins"
              className={subLinkClass("/create-your-first-raffle/instant-wins")}
            >
              Add Instant Wins
            </Link>

            <Link
              href="/create-your-first-raffle/product-categories"
              className={subLinkClass("/create-your-first-raffle/product-categories")}
            >
              Product Categories
            </Link>

            <Link
              href="/create-your-first-raffle/hidden-vip-competitions"
              className={subLinkClass(
                "/create-your-first-raffle/hidden-vip-competitions"
              )}
            >
              Hidden VIP Competitions
            </Link>

          </nav>
        </details>

        {/* ============================================= */}
        {/* CUSTOMIZE YOUR SITE */}
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
            <span>CUSTOMIZE YOUR SITE</span>

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
              href="/customize-your-site/add-logo"
              className={subLinkClass("/customize-your-site/add-logo")}
            >
              Add Your Logo
            </Link>

            <Link
              href="/customize-your-site/site-colours"
              className={subLinkClass("/customize-your-site/site-colours")}
            >
              Choose Site Colours
            </Link>

            <Link
              href="/customize-your-site/homepage-setup"
              className={subLinkClass("/customize-your-site/homepage-setup")}
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
              href="/essential-settings/connect-social-accounts"
              className={subLinkClass(
                "/essential-settings/connect-social-accounts"
              )}
            >
              Connect Your Social Accounts
            </Link>

            <Link
              href="/essential-settings/email-setup"
              className={subLinkClass("/essential-settings/email-setup")}
            >
              Email Setup
            </Link>

            <Link
              href="/essential-settings/wallet-withdrawals"
              className={subLinkClass("/essential-settings/wallet-withdrawals")}
            >
              Wallet & Withdrawals
            </Link>

            <Link
              href="/essential-settings/terms-conditions"
              className={subLinkClass("/essential-settings/terms-conditions")}
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
              href="/additional-settings/entry-list-display"
              className={subLinkClass("/additional-settings/entry-list-display")}
            >
              Entry List Display
            </Link>

            <Link
              href="/additional-settings/order-cart-settings"
              className={subLinkClass(
                "/additional-settings/order-cart-settings"
              )}
            >
              Order & Cart Settings
            </Link>

            <Link
              href="/additional-settings/free-entry"
              className={subLinkClass("/additional-settings/free-entry")}
            >
              Free Entry
            </Link>

            <Link
              href="/additional-settings/site-credit-wallets"
              className={subLinkClass(
                "/additional-settings/site-credit-wallets"
              )}
            >
              Site Credit & Wallets
            </Link>

            <Link
              href="/additional-settings/payouts"
              className={subLinkClass("/additional-settings/payouts")}
            >
              Payouts
            </Link>

            <Link
              href="/additional-settings/safe-play-setting"
              className={subLinkClass("/additional-settings/safe-play-setting")}
            >
              Safe Play Setting
            </Link>

            <Link
              href="/additional-settings/leaderboards"
              className={subLinkClass("/additional-settings/leaderboards")}
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
              href="/additional-settings/integrations"
              className={subLinkClass("/additional-settings/integrations")}
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
              href="/instant-win-games/overview"
              className={subLinkClass("/instant-win-games/overview")}
            >
              Overview
            </Link>

            <Link
              href="/instant-win-games/test-a-game-type"
              className={subLinkClass("/instant-win-games/test-a-game-type")}
            >
              Test a Game Type
            </Link>

            <Link
              href="/instant-win-games/spin-the-wheel"
              className={subLinkClass("/instant-win-games/spin-the-wheel")}
            >
              Spin the Wheel
            </Link>

            <Link
              href="/instant-win-games/slots"
              className={subLinkClass("/instant-win-games/slots")}
            >
              Slots
            </Link>

            <Link
              href="/instant-win-games/scratch-card"
              className={subLinkClass("/instant-win-games/scratch-card")}
            >
              Scratch Card
            </Link>

            <Link
              href="/instant-win-games/pop"
              className={subLinkClass("/instant-win-games/pop")}
            >
              Pop
            </Link>

            <Link
              href="/instant-win-games/pinata"
              className={subLinkClass("/instant-win-games/pinata")}
            >
              Piñata
            </Link>

            <Link
              href="/instant-win-games/safe-cracker"
              className={subLinkClass("/instant-win-games/safe-cracker")}
            >
              Safe Cracker
            </Link>

            <Link
              href="/instant-win-games/loot-boxes"
              className={subLinkClass("/instant-win-games/loot-boxes")}
            >
              Loot Boxes
            </Link>

            <Link
              href="/instant-win-games/instant-reveal"
              className={subLinkClass("/instant-win-games/instant-reveal")}
            >
              Instant Reveal
            </Link>

            <Link
              href="/instant-win-games/pot-drop"
              className={subLinkClass("/instant-win-games/pot-drop")}
            >
              Pot Drop
            </Link>

            <Link
              href="/instant-win-games/whack-a-mole"
              className={subLinkClass("/instant-win-games/whack-a-mole")}
            >
              Whack-a-Mole
            </Link>

            <Link
              href="/instant-win-games/one-line-bingo"
              className={subLinkClass("/instant-win-games/one-line-bingo")}
            >
              One Line Bingo
            </Link>

            <Link
              href="/instant-win-games/plinko"
              className={subLinkClass("/instant-win-games/plinko")}
            >
              Plinko
            </Link>

            <Link
              href="/instant-win-games/gems"
              className={subLinkClass("/instant-win-games/gems")}
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
              href="/drawing-winners/truenorth-setup"
              className={subLinkClass("/drawing-winners/truenorth-setup")}
            >
              TrueNorth Setup
            </Link>

            <Link
              href="/drawing-winners/truenorth-autodraws"
              className={subLinkClass("/drawing-winners/truenorth-autodraws")}
            >
              TrueNorth Autodraws
            </Link>

            <Link
              href="/drawing-winners/truenorth-live-stream-draws"
              className={subLinkClass(
                "/drawing-winners/truenorth-live-stream-draws"
              )}
            >
              TrueNorth Live Stream Draws
            </Link>

            <Link
              href="/drawing-winners/manual-draw"
              className={subLinkClass("/drawing-winners/manual-draw")}
            >
              Manual Draw
            </Link>

            <Link
              href="/drawing-winners/managing-instant-winners"
              className={subLinkClass(
                "/drawing-winners/managing-instant-winners"
              )}
            >
              Managing Instant Winners
            </Link>

            <Link
              href="/drawing-winners/add-daily-instant-winner-stats"
              className={subLinkClass(
                "/drawing-winners/add-daily-instant-winner-stats"
              )}
            >
              Add Daily Instant Winner Stats
            </Link>

            <Link
              href="/drawing-winners/managing-layouts"
              className={subLinkClass("/drawing-winners/managing-layouts")}
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
                href="/marketing/website-tools/promos-and-discounts"
                className={subLinkClass(
                  "/marketing/website-tools/promos-and-discounts"
                )}
              >
                Promos and Discounts
              </Link>


              <Link
                href="/marketing/website-tools/upsell"
                className={subLinkClass(
                  "/marketing/website-tools/upsell"
                )}
              >
                Upsell
              </Link>


              <Link
                href="/marketing/website-tools/dropped-basket-recovery"
                className={subLinkClass(
                  "/marketing/website-tools/dropped-basket-recovery"
                )}
              >
                Dropped Basket Recovery
              </Link>


              <Link
                href="/marketing/website-tools/seo-settings"
                className={subLinkClass(
                  "/marketing/website-tools/seo-settings"
                )}
              >
                SEO Settings
              </Link>


              <Link
                href="/marketing/website-tools/top-banner-text"
                className={subLinkClass(
                  "/marketing/website-tools/top-banner-text"
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
                  href="/marketing/sms-and-email/sms"
                  className={subLinkClass("/marketing/sms-and-email/sms")}
                >
                  SMS
                </Link>


                <Link
                  href="/marketing/sms-and-email/setup-email-marketing"
                  className={subLinkClass(
                    "/marketing/sms-and-email/setup-email-marketing"
                  )}
                >
                  Set Up Email Marketing
                </Link>


                <Link
                  href="/marketing/sms-and-email/sending-an-email-with-notify"
                  className={subLinkClass(
                    "/marketing/sms-and-email/sending-an-email-with-notify"
                  )}
                >
                  Sending an Email with Notify
                </Link>


                <Link
                  href="/marketing/sms-and-email/klaviyo-integration"
                  className={subLinkClass(
                    "/marketing/sms-and-email/klaviyo-integration"
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
                    href="/marketing/facebook-and-meta/advertising"
                    className={subLinkClass(
                      "/marketing/facebook-and-meta/advertising"
                    )}
                  >
                    Advertising
                  </Link>


                  <Link
                    href="/marketing/facebook-and-meta/tracking"
                    className={subLinkClass(
                      "/marketing/facebook-and-meta/tracking"
                    )}
                  >
                    Tracking
                  </Link>


                  <Link
                    href="/marketing/facebook-and-meta/product-catalogue"
                    className={subLinkClass(
                      "/marketing/facebook-and-meta/product-catalogue"
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
                      href="/affiliate-referral-scheme/affiliate-overview"
                      className={subLinkClass(
                        "/affiliate-referral-scheme/affiliate-overview"
                      )}
                    >
                      Overview
                    </Link>


                    <Link
                      href="/affiliate-referral-scheme/setting-up-the-scheme"
                      className={subLinkClass(
                        "/affiliate-referral-scheme/setting-up-the-scheme"
                      )}
                    >
                      Setting Up the Scheme
                    </Link>


                    <Link
                      href="/affiliate-referral-scheme/how-users-participate"
                      className={subLinkClass(
                        "/affiliate-referral-scheme/how-users-participate"
                      )}
                    >
                      How Users Participate
                    </Link>


                    <Link
                      href="/affiliate-referral-scheme/managing-referrals"
                      className={subLinkClass(
                        "/affiliate-referral-scheme/managing-referrals"
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
                        href="/downloads-and-reports/downloads-reports-overview"
                        className={subLinkClass(
                          "/downloads-and-reports/downloads-reports-overview"
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
        rounded-md border border-[#e5ddcd]
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
        rounded-md border border-[#e5ddcd]
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
        rounded-md border border-[#e5ddcd]
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

                            <Link
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
                            </Link>

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