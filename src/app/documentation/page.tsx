// src/app/docs/page.tsx

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  CreditCard,
  LayoutDashboard,
  Mail,
  Rocket,
  Search,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DocsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-paper text-navy">
        {/* HERO */}
        <section className="border-b border-border bg-white">
          <div className="container-xl py-14 lg:py-20">
            <div className="flex items-center gap-2 text-sm text-navy-mute">
              <Link href="/">Sellio</Link>

              <ChevronRight className="h-4 w-4" />

              <span className="text-navy">Documentation</span>
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.15em] text-coral">
              Sellio documentation
            </p>

            <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-[-0.05em] text-navy lg:text-7xl">
              Sell online.
              <span className="text-coral"> Simply.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy-mute">
              Everything you need to launch, manage and grow your ecommerce
              store with Sellio.
            </p>
          </div>
        </section>

        {/* DOCS */}
        <div className="container-xl grid gap-12 py-16 lg:grid-cols-[240px_1fr]">
          
          {/* LEFT NAVIGATION */}
          <aside>
            <div className="sticky top-28">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-navy-mute">
                Getting started
              </p>

              <nav className="space-y-1">
                <a
                  href="#introduction"
                  className="flex items-center gap-3 rounded-xl bg-coral/10 px-4 py-3 text-sm font-semibold text-coral"
                >
                  <BookOpen className="h-4 w-4" />
                  Introduction
                </a>

                <a
                  href="#what-is-sellio"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
                >
                  <CircleHelp className="h-4 w-4" />
                  What is Sellio?
                </a>

                <a
                  href="#how-it-works"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
                >
                  <Rocket className="h-4 w-4" />
                  How it works
                </a>

                <a
                  href="#dashboard"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </a>

                <a
                  href="#insights"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
                >
                  <Sparkles className="h-4 w-4" />
                  Sellio Insights
                </a>

                <a
                  href="#onboarding"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy-mute hover:bg-coral/10 hover:text-coral"
                >
                  <Users className="h-4 w-4" />
                  Onboarding
                </a>
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <article className="min-w-0">
            
            {/* INTRODUCTION */}
            <section
              id="introduction"
              className="scroll-mt-28 border-b border-border pb-16"
            >
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-coral">
                Getting started
              </p>

              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
                Introduction
              </h2>

              <p className="mt-6 text-lg leading-8 text-navy-mute">
                Sellio is a fully guided ecommerce launch system for founders
                who do not know where to start.
              </p>

              <div className="mt-8 rounded-3xl bg-navy p-8 text-white">
                <Sparkles className="h-6 w-6 text-coral" />

                <p className="mt-5 font-display text-2xl font-bold leading-9">
                  “Give us your brand, products and business details. We build
                  the selling system.”
                </p>
              </div>
            </section>

            {/* WHAT IS SELLIO */}
            <section
              id="what-is-sellio"
              className="scroll-mt-28 border-b border-border py-16"
            >
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-coral">
                Overview
              </p>

              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em]">
                What is Sellio?
              </h2>

              <p className="mt-6 text-base leading-8 text-navy-mute">
                Sellio sits between DIY Shopify and a traditional ecommerce
                agency. You get a professionally configured ecommerce store
                without having to work out every technical step yourself.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-border bg-white p-6">
                  <ShoppingBag className="h-6 w-6 text-navy-mute" />

                  <h3 className="mt-5 font-display text-xl font-bold">
                    DIY Shopify
                  </h3>

                  <p className="mt-2 text-sm text-navy-mute">
                    Cheap but confusing.
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-coral bg-coral/5 p-6">
                  <Store className="h-6 w-6 text-coral" />

                  <h3 className="mt-5 font-display text-xl font-bold">
                    Sellio
                  </h3>

                  <p className="mt-2 text-sm text-navy-mute">
                    Done-for-you launch, dashboard, training and support.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-white p-6">
                <Store className="h-6 w-6 text-navy-mute" />

                  <h3 className="mt-5 font-display text-xl font-bold">
                    Agency build
                  </h3>

                  <p className="mt-2 text-sm text-navy-mute">
                    Professional but expensive.
                  </p>
                </div>
              </div>
            </section>

            {/* HOW IT WORKS */}
            <section
              id="how-it-works"
              className="scroll-mt-28 border-b border-border py-16"
            >
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-coral">
                Process
              </p>

              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em]">
                How Sellio works
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Apply Sellio master theme",
                  "Upload logo and colours",
                  "Add product photos and descriptions",
                  "Connect Shopify apps and socials",
                  "Install Sellio dashboard",
                  "Launch with guides and support",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 rounded-2xl border border-border bg-white p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral/10 text-sm font-bold text-coral">
                      {index + 1}
                    </span>

                    <p className="font-semibold text-navy">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-coral/10 p-5 text-sm font-semibold text-coral">
                Target launch time after assets are received: 1 to 2 weeks.
              </div>
            </section>

            {/* DASHBOARD */}
            <section
              id="dashboard"
              className="scroll-mt-28 border-b border-border py-16"
            >
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-coral">
                Dashboard
              </p>

              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em]">
                A dashboard that makes sense
              </h2>

              <p className="mt-6 text-base leading-8 text-navy-mute">
                Shopify has data. Sellio turns that data into plain-English
                actions a business owner can understand.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Revenue", "£28,540"],
                  ["Orders", "1,285"],
                  ["Conversion rate", "2.64%"],
                  ["Best seller", "Everyday Hoodie"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-border bg-white p-6"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-mute">
                      {label}
                    </p>

                    <p className="mt-2 font-display text-2xl font-bold text-navy">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* INSIGHTS */}
            <section
              id="insights"
              className="scroll-mt-28 border-b border-border py-16"
            >
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-coral">
                Sellio Insights
              </p>

              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em]">
                Know what to do next
              </h2>

              <div className="mt-8 rounded-3xl bg-navy p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-coral" />

                  <h3 className="font-display text-2xl font-bold text-white">
                    Sellio Insights
                  </h3>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    "Your mobile conversion rate dropped this week.",
                    "Everyday Hoodie generated 21.8% of sales.",
                    "47 customers bought Product A but not Product B.",
                    "Email generated 22% of total revenue this month.",
                    "12 product pages need stronger meta descriptions.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.05] p-4 text-sm text-white/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-7 font-display text-lg font-bold text-coral">
                  What happened, why did it happen, and what should I do next?
                </p>
              </div>
            </section>

            {/* ONBOARDING */}
            <section id="onboarding" className="scroll-mt-28 py-16">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-coral">
                Onboarding
              </p>

              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em]">
                What we need from you
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {[
                  "Logo, colours and brand notes",
                  "Product images",
                  "Product descriptions",
                  "Prices, variants, stock and SKUs",
                  "Shipping and returns details",
                  "Domain access",
                  "Google, Meta and social logins",
                  "Business and legal details",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border bg-white p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-coral" />

                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* BOTTOM NAVIGATION */}
            <div className="grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
              <Link
                href="/"
                className="rounded-2xl border border-border bg-white p-5 transition-colors hover:border-coral/40"
              >
                <span className="flex items-center gap-2 text-xs font-bold uppercase text-navy-mute">
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </span>

                <p className="mt-2 font-display text-lg font-bold">
                  Sellio home
                </p>
              </Link>

              <Link
                href="/screencasts"
                className="rounded-2xl border border-border bg-white p-5 text-right transition-colors hover:border-coral/40"
              >
                <span className="flex items-center justify-end gap-2 text-xs font-bold uppercase text-navy-mute">
                  Next
                  <ArrowRight className="h-4 w-4" />
                </span>

                <p className="mt-2 font-display text-lg font-bold">
                  Screencasts
                </p>
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}