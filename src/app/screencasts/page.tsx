// src/app/screencasts/page.tsx

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Mail,
  Play,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const videos = [
  {
    number: "01",
    category: "Getting started",
    title: "Launching your Sellio store",
    description:
      "A simple walkthrough of your new ecommerce store, dashboard and the tools included with Sellio.",
    duration: "6 min",
    icon: ShoppingBag,
  },
  {
    number: "02",
    category: "Your dashboard",
    title: "Understanding your numbers",
    description:
      "Learn how to read revenue, orders, conversion rate and your best-selling products without getting lost in analytics.",
    duration: "5 min",
    icon: BarChart3,
  },
  {
    number: "03",
    category: "Growth",
    title: "What needs attention this week",
    description:
      "Use Sellio Insights to understand what happened, why it happened and what you should do next.",
    duration: "7 min",
    icon: Sparkles,
  },
  {
    number: "04",
    category: "Marketing",
    title: "Email automations made simple",
    description:
      "See how your core email automations work and how they can help turn visitors into returning customers.",
    duration: "5 min",
    icon: Mail,
  },
  {
    number: "05",
    category: "SEO",
    title: "Getting found on Google",
    description:
      "Learn the SEO basics for products, collections and pages using a practical, non-technical approach.",
    duration: "8 min",
    icon: Search,
  },
  {
    number: "06",
    category: "Store management",
    title: "Managing your store day to day",
    description:
      "Products, stock, orders and common changes — the everyday tasks you need to confidently run your store.",
    duration: "9 min",
    icon: BookOpen,
  },
];

const topics = [
  "Getting your first products live",
  "Managing orders and customers",
  "Understanding revenue and conversion",
  "Finding your best-selling products",
  "Improving product pages",
  "Using Sellio Insights",
  "Email marketing basics",
  "Google and Meta foundations",
];

export default function ScreencastsPage() {
  return (
    <>
      {/* =========================================
          SAME NAVBAR AS MAIN WEBSITE
      ========================================== */}
      <Navbar />

      <main className="overflow-hidden bg-paper text-navy">
        {/* =========================================
            HERO
        ========================================== */}
        <section className="relative overflow-hidden border-b border-border">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-coral/10 blur-3xl" />

          <div className="container-xl relative grid gap-14 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
            {/* Hero content */}
            <div className="flex flex-col justify-center">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-coral/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-coral">
                  Sellio screencasts
                </span>

                <span className="flex items-center gap-2 text-xs font-semibold text-navy-mute">
                  <span className="h-2 w-2 rounded-full bg-coral" />
                  Training academy
                </span>
              </div>

              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-navy sm:text-6xl lg:text-7xl">
                Run your store like{" "}
                <span className="text-coral">
                  you&apos;ve done it for years.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-navy-mute">
                Short, practical videos that show you how to manage your Sellio
                store, understand your numbers and know what to do next.
              </p>

              {/* Hero buttons */}
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#episodes"
                  className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_-5px_rgba(255,91,69,0.5)] transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
                >
                  <Play className="h-4 w-4" fill="currentColor" />
                  Browse screencasts
                </a>

                <Link
                  href="/#pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-[15px] font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy/30"
                >
                  Start selling
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Benefits */}
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-navy-mute">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-coral" />
                  Short practical videos
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-coral" />
                  Plain-English guidance
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-coral" />
                  Built for store owners
                </span>
              </div>
            </div>

            {/* =========================================
                FEATURED VIDEO
            ========================================== */}
            <div className="relative flex items-center">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-coral/10" />

              <div className="relative w-full overflow-hidden rounded-[32px] bg-navy p-4 shadow-2xl shadow-navy/20">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[24px] bg-navy">
                  {/* Fake dashboard shapes */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute left-[10%] top-[14%] h-24 w-40 rounded-xl bg-white" />
                    <div className="absolute right-[10%] top-[14%] h-24 w-40 rounded-xl bg-white" />
                    <div className="absolute bottom-[15%] left-[10%] right-[10%] h-32 rounded-xl bg-white" />
                  </div>

                  <button
                    type="button"
                    aria-label="Play introduction"
                    className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-coral text-white shadow-xl transition-transform hover:scale-105 hover:bg-coral-dark"
                  >
                    <Play
                      className="ml-1 h-7 w-7"
                      fill="currentColor"
                    />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-coral">
                      Start here
                    </span>

                    <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                      Welcome to Sellio
                    </h2>

                    <p className="mt-1 text-sm text-white/60">
                      Your store, dashboard and support — explained in 6
                      minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SCREENCAST EPISODES
        ========================================== */}
        <section
          id="episodes"
          className="container-xl scroll-mt-24 py-20 lg:py-24"
        >
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-coral">
                Training academy
              </span>

              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
                Learn Sellio in minutes,
                <br />
                not manuals.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-navy-mute">
              Work through the series from the beginning or jump straight to
              the part of your ecommerce business you need help with.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => {
              const Icon = video.icon;

              return (
                <article
                  key={video.number}
                  className="group rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral/40 hover:shadow-xl hover:shadow-navy/5"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral/10 text-coral">
                      <Icon className="h-[22px] w-[22px]" />
                    </div>

                    <span className="text-xs font-bold text-navy-mute/60">
                      {video.number}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.13em] text-coral">
                    {video.category}
                  </span>

                  <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.025em] text-navy">
                    {video.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-navy-mute">
                    {video.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                    <button
                      type="button"
                      className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-coral"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white transition-colors group-hover:bg-coral">
                        <Play
                          className="h-3 w-3"
                          fill="currentColor"
                        />
                      </span>

                      Watch episode
                    </button>

                    <span className="text-xs font-medium text-navy-mute">
                      {video.duration}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =========================================
            WHAT YOU'LL LEARN
        ========================================== */}
        <section className="bg-navy">
          <div className="container-xl grid gap-14 py-20 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-coral">
                What you&apos;ll learn
              </span>

              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                Everything you need to start selling online.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-white/60">
                Sellio is designed to remove the confusing parts of ecommerce.
                The academy gives you straightforward guidance whenever you
                need it.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {topics.map((topic, index) => (
                <div
                  key={topic}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.07]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral/15 text-xs font-bold text-coral">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-semibold text-white">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            EMAIL SIGNUP
        ========================================== */}
        <section className="container-xl py-20 lg:py-24">
          <div className="overflow-hidden rounded-[32px] bg-coral/10">
            <div className="grid items-center gap-12 px-7 py-12 sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-16">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-coral">
                  New lessons
                </span>

                <h2 className="mt-3 max-w-lg font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-navy sm:text-5xl">
                  Get new screencasts in your inbox.
                </h2>

                <p className="mt-5 max-w-lg leading-7 text-navy-mute">
                  Practical Sellio lessons, product updates and ecommerce
                  guidance. No complicated newsletters.
                </p>
              </div>

              <form className="rounded-3xl bg-white p-5 shadow-lg shadow-navy/5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-navy"
                >
                  Email address
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="email"
                    type="email"
                    placeholder="you@yourcompany.co.uk"
                    className="min-w-0 flex-1 rounded-xl border border-border bg-paper px-4 py-4 text-sm text-navy outline-none transition placeholder:text-navy-mute/60 focus:border-coral"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
                  >
                    Keep me updated
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-3 text-xs leading-5 text-navy-mute">
                  Sellio product news and new training videos. Unsubscribe any
                  time.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* =========================================
            FINAL CTA
        ========================================== */}
        <section className="border-t border-border bg-white">
          <div className="container-xl flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center lg:py-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-coral">
                Sell online. Simply.
              </p>

              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Start selling with clarity and support.
              </h2>

              <p className="mt-3 max-w-xl text-[15px] leading-6 text-navy-mute">
                Everything you need to launch, manage and grow your online
                store without unnecessary complexity.
              </p>
            </div>

            <Link
              href="/#pricing"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-4px_rgba(255,91,69,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-coral-dark"
            >
              Start selling
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* =========================================
          SAME FOOTER AS MAIN WEBSITE
      ========================================== */}
      <Footer />
    </>
  );
}