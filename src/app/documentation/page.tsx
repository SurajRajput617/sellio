import Link from "next/link";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CreditCard,
  FileText,
  Globe,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    number: "01",
    title: "Buy Your Domain",
    description:
      "Choose and purchase the domain customers will use to find your online store.",
    href: "/documentation/buy-domain",
    target: "Domain setup",
    icon: Globe,
  },
  {
    number: "02",
    title: "Add Your Domain to Sellio",
    description:
      "Connect your existing domain to your Sellio ecommerce store.",
    href: "/documentation/add-domain",
    target: "Connect domain",
    icon: Store,
  },
  {
    number: "03",
    title: "Creating Your Company",
    description:
      "Prepare your company information and the business details needed for your store.",
    href: "/documentation/create-company",
    target: "Company setup",
    icon: Building2,
  },
  {
    number: "04",
    title: "Adding Your Terms",
    description:
      "Add your store policies, customer terms and other important legal information.",
    href: "/documentation/terms",
    target: "Terms & policies",
    icon: FileText,
  },
  {
    number: "05",
    title: "Payment Gateway",
    description:
      "Connect your payment provider so customers can securely pay for their orders.",
    href: "/documentation/payment-gateway",
    target: "Payments",
    icon: CreditCard,
  },
];

export default function DocumentationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-paper text-navy">
        {/* HERO */}
       

        {/* DOCUMENTATION */}
        <div className="container-xl grid gap-12 py-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:py-16">
          {/* ===================================================== */}
          {/* LEFT SIDEBAR - KEPT FROM YOUR CURRENT DESIGN          */}
          {/* ===================================================== */}
          <aside>
            <div className="sticky top-28">
              <Link
                href="/documentation"
                className="mb-8 block text-lg font-bold text-coral"
              >
                Welcome
              </Link>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-navy">
                Getting Started
              </p>

              <nav className="space-y-1">
                {/* OVERVIEW */}
                <Link
                  href="/documentation"
                  className="flex items-center gap-3 rounded-xl bg-coral/10 px-4 py-3 text-sm font-semibold text-coral transition-colors"
                >
                  <Rocket className="h-4 w-4 shrink-0" />

                  <span>Overview</span>
                </Link>

                {/* 1 */}
                <Link
                  href="/documentation/buy-domain"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    1
                  </span>

                  <span>Buy Your Domain</span>
                </Link>

                {/* 2 */}
                <Link
                  href="/documentation/add-domain"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    2
                  </span>

                  <span>Add Your Domain to Sellio</span>
                </Link>

                {/* 3 */}
                <Link
                  href="/documentation/create-company"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    3
                  </span>

                  <span>Creating Your Company</span>
                </Link>

                {/* 4 */}
                <Link
                  href="/documentation/terms"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    4
                  </span>

                  <span>Adding Your Terms</span>
                </Link>

                {/* 5 */}
                <Link
                  href="/documentation/payment-gateway"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    5
                  </span>

                  <span>Payment Gateway</span>
                </Link>
                {/* ===================================================== */}
{/* CREATE YOUR FIRST RAFFLE DROPDOWN */}
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
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Create a Competition
    </Link>

    <Link
      href="/documentation/instant-wins"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Add Instant Wins
    </Link>

    <Link
      href="/documentation/product-categories"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Product Categories
    </Link>

    <Link
      href="/documentation/hidden-vip-competitions"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Hidden VIP Competitions
    </Link>

  </nav>
</details>
{/* ===================================================== */}
{/* CUSTOMISE YOUR SITE DROPDOWN */}
{/* ===================================================== */}

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

    <span>CUSTOMISE YOUR SITE </span>


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
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Add Your Logo
    </Link>



    <Link
      href="/documentation/site-colours"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
    >
      Choose Site Colours
    </Link>



    <Link
      href="/documentation/homepage-setup"
      className="
        block rounded-lg px-3 py-2
        text-sm font-medium text-navy-mute
        transition-colors
        hover:bg-coral/10 hover:text-coral
      "
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

{/* ===================================================== */}
{/* INSTANT WIN GAMES DROPDOWN */}
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

    <Link href="/documentation/overview"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Overview
    </Link>


    <Link href="/documentation/test-a-game-type"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Test a Game Type
    </Link>


    <Link href="/documentation/spin-the-wheel"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Spin the Wheel
    </Link>


    <Link href="/documentation/slots"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Slots
    </Link>


    <Link href="/documentation/scratch-card"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Scratch Card
    </Link>


    <Link href="/documentation/pop"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Pop
    </Link>


    <Link href="/documentation/pinata"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Piñata
    </Link>


    <Link href="/documentation/safe-cracker"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Safe Cracker
    </Link>


    <Link href="/documentation/loot-boxes"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Loot Boxes
    </Link>


    <Link href="/documentation/instant-reveal"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Instant Reveal
    </Link>


    {/* <Link href="/documentation/pot-drop"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Pot Drop
    </Link>


    <Link href="/documentation/whack-a-mole"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Whack-a-Mole
    </Link>


    <Link href="/documentation/one-line-bingo"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      One Line Bingo
    </Link>


    <Link href="/documentation/plinko"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Plinko
    </Link>


    <Link href="/documentation/gems"
      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
    >
      Gems
    </Link> */}

  </nav>

</details>

              </nav>
            </div>
          </aside>

          {/* ===================================================== */}
          {/* WELCOME CONTENT                                      */}
          {/* ===================================================== */}
          <article className="min-w-0">
            {/* WELCOME */}
            <section>
              <div className="flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-coral">
                    Getting Started
                  </p>

                  <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
                    Welcome
                  </h2>
                </div>

                <Link
                  href="/documentation/buy-domain"
                  className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-coral/40 hover:text-coral"
                >
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 max-w-4xl space-y-5 text-base leading-8 text-navy-mute">
                <p>
                  Welcome to the Sellio knowledge base. Everything you need to
                  prepare, launch and manage your ecommerce store can be found
                  here.
                </p>

                <p>
                  This guide walks you through the important setup steps, from
                  choosing your domain and creating your company to adding your
                  terms and connecting your payment gateway.
                </p>
              </div>

              {/* TIP BOX */}
              <div className="mt-8 flex gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                </div>

                <div>
                  <p className="font-semibold text-emerald-950">
                    Start with the steps in order
                  </p>

                  <p className="mt-1 text-sm leading-6 text-emerald-900/70">
                    If this is your first time setting up your Sellio store,
                    begin with Buy Your Domain and work through each section
                    until your payment gateway is connected.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-6 text-navy-mute">
                Prefer to browse? Pick a section below to jump directly to the
                information you need.
              </p>
            </section>

            {/* ================================================= */}
            {/* BROWSE BY SECTION                                 */}
            {/* ================================================= */}
            <section className="pt-14">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-coral">
                    Documentation
                  </p>

                  <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-navy sm:text-4xl">
                    Browse by section
                  </h2>
                </div>

                <ShoppingBag className="hidden h-7 w-7 text-navy-mute sm:block" />
              </div>

              {/* CARDS */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {sections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <Link
                      key={section.href}
                      href={section.href}
                      className="group flex min-h-[220px] flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-coral/40 hover:shadow-lg"
                    >
                      {/* CARD TOP */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-navy-mute">
                          Section
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral/10 text-coral">
                          <Icon className="h-4 w-4" />
                        </span>
                      </div>

                      {/* TITLE */}
                      <div className="mt-5 flex items-start gap-3">
                        <span className="font-display text-sm font-bold text-coral">
                          {section.number}
                        </span>

                        <h3 className="font-display text-lg font-bold leading-6 text-navy transition-colors group-hover:text-coral">
                          {section.title}
                        </h3>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="mt-3 text-sm leading-6 text-navy-mute">
                        {section.description}
                      </p>

                      {/* TARGET */}
                      <div className="mt-auto pt-6">
                        <p className="text-xs font-medium text-navy-mute">
                          Target
                        </p>

                        <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-coral">
                          <span>{section.target}</span>

                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  );
                })}

                {/* EXTRA OVERVIEW CARD */}
                <div className="flex min-h-[220px] flex-col rounded-2xl border border-border bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-navy-mute">
                      Section
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral/10 text-coral">
                      <Sparkles className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-5 flex items-start gap-3">
                    <span className="font-display text-sm font-bold text-coral">
                      06
                    </span>

                    <h3 className="font-display text-lg font-bold leading-6 text-navy">
                      Launch Your Store
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-navy-mute">
                    Complete your setup and prepare your Sellio store for
                    launch.
                  </p>

                  <div className="mt-auto pt-6">
                    <p className="text-xs font-medium text-navy-mute">
                      Target
                    </p>

                    <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-coral">
                      <ShieldCheck className="h-4 w-4" />
                      Ready to launch
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ================================================= */}
            {/* QUICK START                                       */}
            {/* ================================================= */}
            <section className="mt-16 border-t border-border pt-12">
              <div className="rounded-3xl bg-navy p-7 text-white sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Rocket className="h-5 w-5 text-coral" />
                </div>

                <h2 className="mt-6 font-display text-3xl font-bold tracking-[-0.03em]">
                  Ready to get started?
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                  Start with your domain and follow each setup step. The
                  documentation will guide you through everything needed to
                  prepare your Sellio store.
                </p>

                <Link
                  href="/documentation/buy-domain"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Buy Your Domain
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}