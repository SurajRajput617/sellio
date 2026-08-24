import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Globe,
  Info,
  Rocket,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BuyDomainPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-paper text-navy">
        <div className="container-xl grid gap-10 py-12 lg:grid-cols-[250px_minmax(0,1fr)_210px]">
          {/* ===================================================== */}
          {/* LEFT SIDEBAR                                          */}
          {/* ===================================================== */}

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <Link
                href="/documentation"
                className="mb-8 block text-lg font-bold text-navy-mute transition-colors hover:text-coral"
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
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <Rocket className="h-4 w-4 shrink-0" />

                  <span>Overview</span>
                </Link>

                {/* BUY DOMAIN - ACTIVE */}

                <Link
                  href="/documentation/buy-domain"
                  className="flex items-center gap-3 rounded-xl bg-coral/10 px-3 py-2.5 text-sm font-semibold text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    1
                  </span>

                  <span>Buy Your Domain</span>
                </Link>

                {/* ADD DOMAIN */}

                <Link
                  href="/documentation/add-domain"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    2
                  </span>

                  <span>Add Your Domain to Sellio</span>
                </Link>

                {/* COMPANY */}

                <Link
                  href="/documentation/create-company"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    3
                  </span>

                  <span>Creating Your Company</span>
                </Link>

                {/* TERMS */}

                <Link
                  href="/documentation/terms"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    4
                  </span>

                  <span>Adding Your Terms</span>
                </Link>

                {/* PAYMENT */}

                <Link
                  href="/documentation/payment-gateway"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    5
                  </span>

                  <span>Payment Gateway</span>
                </Link>
              </nav>
            </div>
          </aside>

          {/* ===================================================== */}
          {/* MAIN DOCUMENTATION CONTENT                            */}
          {/* ===================================================== */}

          <article className="min-w-0">
            {/* PAGE HEADER */}

            <section>
              <p className="text-sm font-semibold text-coral">
                Getting Started
              </p>

              <div className="mt-4 flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral text-xl font-bold text-white shadow-sm">
                  1
                </span>

                <h1 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
                  Buy Your Domain
                </h1>
              </div>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-navy-mute">
                Your domain is the web address customers use to find your
                online store. Follow this guide to choose and prepare your
                domain before connecting it to Sellio.
              </p>

              {/* INFORMATION BOX */}

              <div className="mt-8 rounded-2xl border border-border bg-white p-6">
                <div className="flex gap-4">
                  <Info className="mt-1 h-5 w-5 shrink-0 text-coral" />

                  <div>
                    <p className="font-semibold text-navy">
                      When setting up your Sellio store, you have two options:
                    </p>

                    <ul className="mt-4 space-y-3 text-sm leading-6 text-navy-mute">
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />

                        <span>
                          <strong className="text-navy">
                            Use a temporary domain
                          </strong>{" "}
                          — you can start preparing your store first and connect
                          your custom domain later.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />

                        <span>
                          <strong className="text-navy">
                            Use your own domain
                          </strong>{" "}
                          — if you already own a domain or want to purchase one
                          before launching your store.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ================================================= */}
            {/* SECTION 1                                         */}
            {/* ================================================= */}

            <section
              id="buy-domain"
              className="scroll-mt-28 border-b border-border py-12"
            >
              <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-navy sm:text-3xl">
                If You Haven&apos;t Bought a Domain Yet
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                If you do not already own a domain, start by choosing one that
                represents your business or brand.
              </p>

              <p className="mt-4 leading-8 text-navy-mute">
                A simple domain that matches your business name makes it easier
                for customers to remember and find your store.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Choose a short and memorable domain name.",
                  "Try to match the domain with your brand or company name.",
                  "Avoid complicated spelling where possible.",
                  "Keep access to the account used to purchase your domain.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-coral" />

                    <p className="leading-7 text-navy-mute">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* DEMO IMAGE */}

              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white">
                <div className="border-b border-border px-5 py-3">
                  <p className="text-sm font-semibold text-navy">
                    Example
                  </p>
                </div>

                <div className="flex min-h-[350px] items-center justify-center bg-navy/5 p-8">
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Globe className="h-6 w-6 text-coral" />
                    </div>

                    <p className="mt-4 font-display text-lg font-bold text-navy">
                      Domain purchase screenshot
                    </p>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-navy-mute">
                      Add your domain purchase screenshot here.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs text-navy-mute">
                Example showing where customers can search for and purchase
                their domain.
              </p>
            </section>

            {/* ================================================= */}
            {/* SECTION 2                                         */}
            {/* ================================================= */}

            <section
              id="connect-domain"
              className="scroll-mt-28 border-b border-border py-12"
            >
              <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-navy sm:text-3xl">
                Connect Your Domain to Sellio
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Once your domain has been purchased, keep your domain provider
                account details available.
              </p>

              <p className="mt-4 leading-8 text-navy-mute">
                You will need access to your domain settings when you move to
                the next step and connect your domain to Sellio.
              </p>

              <div className="mt-7 rounded-2xl bg-coral/10 p-5">
                <p className="text-sm font-semibold text-coral">
                  Already purchased your domain?
                </p>

                <p className="mt-2 text-sm leading-6 text-navy-mute">
                  Continue to Step 2 to connect your domain to your Sellio
                  store.
                </p>

                <Link
                  href="/documentation/add-domain"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-coral"
                >
                  Add Your Domain to Sellio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            {/* ================================================= */}
            {/* VIDEO                                             */}
            {/* ================================================= */}

            <section className="border-b border-border py-12">
              <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-navy sm:text-3xl">
                Video Guide
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Watch the video below for a quick walkthrough of buying and
                preparing your domain.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-navy">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="Buy Your Domain"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <p className="mt-3 text-xs text-navy-mute">
                Replace VIDEO_ID with your YouTube video ID.
              </p>
            </section>

            {/* ================================================= */}
            {/* PREVIOUS / NEXT                                   */}
            {/* ================================================= */}

            <div className="grid gap-4 py-10 sm:grid-cols-2">
              <Link
                href="/documentation"
                className="group rounded-2xl border border-border bg-white p-5 transition-colors hover:border-coral/40"
              >
                <span className="flex items-center gap-2 text-xs font-bold uppercase text-navy-mute">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Previous
                </span>

                <p className="mt-2 font-display text-lg font-bold">
                  Welcome
                </p>
              </Link>

              <Link
                href="/documentation/add-domain"
                className="group rounded-2xl border border-border bg-white p-5 text-right transition-colors hover:border-coral/40"
              >
                <span className="flex items-center justify-end gap-2 text-xs font-bold uppercase text-navy-mute">
                  Next

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>

                <p className="mt-2 font-display text-lg font-bold">
                  Add Your Domain to Sellio
                </p>
              </Link>
            </div>
          </article>

          {/* ===================================================== */}
          {/* RIGHT - ON THIS PAGE                                  */}
          {/* ===================================================== */}

          <aside className="hidden xl:block">
            <div className="sticky top-28 border-l border-border pl-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-mute">
                On This Page
              </p>

              <nav className="mt-5 space-y-4">
                <a
                  href="#buy-domain"
                  className="block text-sm font-semibold leading-6 text-coral"
                >
                  If You Haven&apos;t Bought a Domain Yet
                </a>

                <a
                  href="#connect-domain"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Connect Your Domain to Sellio
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}