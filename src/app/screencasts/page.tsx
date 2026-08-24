// src/app/screencasts/page.tsx
// Single-page Sellio screencasts page.
// Structure inspired by the supplied Rafflex screencasts reference.
// Content adapted from the supplied Sellio concept deck.

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Mail,
  Play,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

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
    <main className="min-h-screen bg-[#fbf8f4] text-[#111a2c]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#111a2c]/10 bg-[#fbf8f4]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-black tracking-tight"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff5c55] text-xl font-black text-white">
              S
            </span>
            <span>sellio</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            <Link
              href="/#how-it-works"
              className="transition hover:text-[#ff5c55]"
            >
              Features
            </Link>
            <Link href="/#pricing" className="transition hover:text-[#ff5c55]">
              Pricing
            </Link>
            <Link href="/updates" className="transition hover:text-[#ff5c55]">
              Latest Updates
            </Link>
            <Link href="/screencasts" className="text-[#ff5c55]">
              Screencasts
            </Link>
            <Link href="/#support" className="transition hover:text-[#ff5c55]">
              Documentation
            </Link>
            <Link href="/#contact" className="transition hover:text-[#ff5c55]">
              Contact
            </Link>
          </nav>

          <Link
            href="/dashboard"
            className="hidden items-center gap-2 rounded-xl bg-[#111a2c] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ff5c55] sm:flex"
          >
            View dashboard
            <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#111a2c]/10">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#ff5c55]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-7 flex items-center gap-3">
              <span className="rounded-full bg-[#ff5c55]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#ff5c55]">
                Sellio screencasts
              </span>

              <span className="flex items-center gap-2 text-xs font-bold text-[#667085]">
                <span className="h-2 w-2 rounded-full bg-[#ff5c55]" />
                Training academy
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Run your store like
              <span className="text-[#ff5c55]"> you&apos;ve done it for years.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#667085]">
              Short, practical videos that show you how to manage your Sellio
              store, understand your numbers and know what to do next.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#episodes"
                className="flex items-center gap-2 rounded-xl bg-[#ff5c55] px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#ff5c55]/20 transition hover:-translate-y-0.5"
              >
                <Play size={17} fill="currentColor" />
                Browse screencasts
              </a>

              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-xl border border-[#111a2c]/15 bg-white px-6 py-4 text-sm font-black transition hover:border-[#111a2c]"
              >
                Explore the dashboard
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#667085]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#ff5c55]" />
                Short practical videos
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#ff5c55]" />
                Plain-English guidance
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#ff5c55]" />
                Built for store owners
              </span>
            </div>
          </div>

          {/* Featured video */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-[#ff5c55]/10" />

            <div className="relative overflow-hidden rounded-[32px] bg-[#111a2c] p-4 shadow-2xl shadow-[#111a2c]/20">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1c2940] to-[#111a2c]">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute left-[10%] top-[14%] h-24 w-40 rounded-xl bg-white" />
                  <div className="absolute right-[10%] top-[14%] h-24 w-40 rounded-xl bg-white" />
                  <div className="absolute bottom-[15%] left-[10%] right-[10%] h-32 rounded-xl bg-white" />
                </div>

                <button
                  type="button"
                  aria-label="Play introduction"
                  className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#ff5c55] text-white shadow-xl transition hover:scale-105"
                >
                  <Play className="ml-1" size={30} fill="currentColor" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-[#ff7b75]">
                    Start here
                  </span>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-white">
                    Welcome to Sellio
                  </h2>
                  <p className="mt-1 text-sm text-white/60">
                    Your store, dashboard and support — explained in 6 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section id="episodes" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.15em] text-[#ff5c55]">
              Training academy
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Learn Sellio in minutes,
              <br />
              not manuals.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#667085]">
            Work through the series from the beginning or jump straight to the
            part of your ecommerce business you need help with.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => {
            const Icon = video.icon;

            return (
              <article
                key={video.number}
                className="group rounded-[24px] border border-[#111a2c]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff5c55]/40 hover:shadow-xl hover:shadow-[#111a2c]/5"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0ee] text-[#ff5c55]">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-black text-[#98a2b3]">
                    {video.number}
                  </span>
                </div>

                <span className="text-xs font-black uppercase tracking-[0.13em] text-[#ff5c55]">
                  {video.category}
                </span>

                <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.025em]">
                  {video.title}
                </h3>

                <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#667085]">
                  {video.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#111a2c]/10 pt-5">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-sm font-black transition group-hover:text-[#ff5c55]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111a2c] text-white transition group-hover:bg-[#ff5c55]">
                      <Play size={12} fill="currentColor" />
                    </span>
                    Watch episode
                  </button>

                  <span className="text-xs font-bold text-[#98a2b3]">
                    {video.duration}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Topics */}
      <section className="bg-[#111a2c]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.15em] text-[#ff6962]">
              What you&apos;ll learn
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Everything you need to start selling online.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-white/60">
              Sellio is designed to remove the confusing parts of ecommerce.
              The academy gives you straightforward guidance whenever you need
              it.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {topics.map((topic, index) => (
              <div
                key={topic}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff5c55]/15 text-xs font-black text-[#ff6962]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-bold text-white">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email signup */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-[#ffe3df]">
          <div className="grid items-center gap-12 px-7 py-12 sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-16">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.15em] text-[#ff5c55]">
                New lessons
              </span>

              <h2 className="mt-3 max-w-lg text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                Get new screencasts in your inbox.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-[#667085]">
                Practical Sellio lessons, product updates and ecommerce
                guidance. No complicated newsletters.
              </p>
            </div>

            <form className="rounded-[24px] bg-white p-5 shadow-lg shadow-[#111a2c]/5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-black"
              >
                Email address
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="email"
                  type="email"
                  placeholder="you@yourcompany.co.uk"
                  className="min-w-0 flex-1 rounded-xl border border-[#111a2c]/15 bg-[#fbf8f4] px-4 py-4 text-sm outline-none transition placeholder:text-[#98a2b3] focus:border-[#ff5c55]"
                />

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#ff5c55] px-6 py-4 text-sm font-black text-white transition hover:bg-[#ef4f49]"
                >
                  Keep me updated
                  <ArrowRight size={16} />
                </button>
              </div>

              <p className="mt-3 text-xs leading-5 text-[#98a2b3]">
                Sellio product news and new training videos. Unsubscribe any
                time.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#111a2c]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#ff5c55]">
              Sell online. Simply.
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-[-0.03em]">
              Start selling with clarity and support.
            </h2>
          </div>

          <Link
            href="/#pricing"
            className="flex items-center gap-3 rounded-xl bg-[#111a2c] px-7 py-4 text-sm font-black text-white transition hover:bg-[#ff5c55]"
          >
            See packages
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111a2c] text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-10 sm:flex-row sm:items-center lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-xl font-black">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff5c55]">
              S
            </span>
            sellio
          </Link>

          <p className="text-sm text-white/45">
            Ecommerce launch platform for startups and small businesses.
          </p>

          <div className="flex gap-6 text-sm font-semibold text-white/65">
            <Link href="/#pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="/#support" className="hover:text-white">
              Support
            </Link>
            <Link href="/#contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}