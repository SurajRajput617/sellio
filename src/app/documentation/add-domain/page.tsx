import Link from "next/link";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Info,
  Rocket,
  XCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AddDomainPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-paper text-navy">
        <div className="container-xl grid gap-10 py-12 lg:grid-cols-[250px_minmax(0,1fr)_210px]">
          {/* ===================================================== */}
          {/* LEFT SIDEBAR */}
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
                <Link
                  href="/documentation"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <Rocket className="h-4 w-4 shrink-0" />
                  <span>Overview</span>
                </Link>

                <Link
                  href="/documentation/buy-domain"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    1
                  </span>

                  <span>Buy Your Domain</span>
                </Link>

                <Link
                  href="/documentation/add-domain"
                  className="flex items-center gap-3 rounded-xl bg-coral/10 px-3 py-2.5 text-sm font-semibold text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    2
                  </span>

                  <span>Add Your Domain to Sellio</span>
                </Link>

                <Link
                  href="/documentation/create-company"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    3
                  </span>

                  <span>Creating Your Company</span>
                </Link>

                <Link
                  href="/documentation/terms"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    4
                  </span>

                  <span>Adding Your Terms</span>
                </Link>

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
          {/* MAIN CONTENT */}
          {/* ===================================================== */}

          <article className="min-w-0">
            {/* PAGE HEADER */}

            <section>
              <p className="text-sm font-semibold text-coral">
                Getting Started
              </p>

              <div className="mt-4 flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral text-xl font-bold text-white">
                  2
                </span>

                <h1 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
                  Add Your Domain to Sellio
                </h1>
              </div>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-navy-mute">
                Once you have purchased your domain, the next step is to
                connect it to your Sellio store.
              </p>

              <div className="mt-8 flex gap-4 rounded-xl border border-border bg-white p-5">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-coral" />

                <div>
                  <p className="font-semibold text-navy">
                    Before you continue
                  </p>

                  <p className="mt-2 text-sm leading-6 text-navy-mute">
                    Make sure you can log in to the account where your domain
                    is registered. You will need access to your domain settings
                    to complete the connection.
                  </p>
                </div>
              </div>
            </section>

            {/* ================================================= */}
            {/* CREATE CLOUDFLARE ACCOUNT */}
            {/* ================================================= */}

            <section
              id="create-cloudflare-account"
              className="scroll-mt-28 py-12"
            >
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Create a Cloudflare Account
              </h2>

              {/* STEP 1 */}

              <div className="mt-8 grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    1
                  </span>

                  <div className="mt-2 h-full w-px bg-border" />
                </div>

                <div className="pb-10">
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Open Cloudflare
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Go to the Cloudflare website and open the account
                    registration page.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}

              <div className="grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    2
                  </span>

                  <div className="mt-2 h-full w-px bg-border" />
                </div>

                <div className="pb-10">
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Sign up
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Create your account using the email address you want to use
                    for managing your domain.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}

              <div className="grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    3
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Verify your email
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Check your inbox and complete the email verification
                    process.
                  </p>
                </div>
              </div>
            </section>

            {/* ================================================= */}
            {/* ADD YOUR DOMAIN */}
            {/* ================================================= */}

            <section
              id="add-domain"
              className="scroll-mt-28 border-t border-border py-12"
            >
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Add Your Domain
              </h2>

              {/* STEP 1 */}

              <div className="mt-8 grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    1
                  </span>

                  <div className="mt-2 h-full w-px bg-border" />
                </div>

                <div className="pb-10">
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Log in to Cloudflare
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Sign in to your Cloudflare account.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}

              <div className="grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    2
                  </span>

                  <div className="mt-2 h-full w-px bg-border" />
                </div>

                <div className="pb-10">
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Add your website
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Choose the option to add your website or domain to your
                    account.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}

              <div className="grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    3
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Enter your domain
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Enter the domain that you want to connect to your Sellio
                    store.
                  </p>
                </div>
              </div>
            </section>

            {/* ================================================= */}
            {/* CONNECT DOMAIN */}
            {/* ================================================= */}

            <section
              id="connect-domain"
              className="scroll-mt-28 border-t border-border py-12"
            >
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Connect Your Domain to Sellio
              </h2>

              {/* STEP 1 */}

              <div className="mt-8 grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    1
                  </span>

                  <div className="mt-2 h-full w-px bg-border" />
                </div>

                <div className="pb-10">
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Open your domain settings
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Open the DNS settings for the domain you have added.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}

              <div className="grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    2
                  </span>

                  <div className="mt-2 h-full w-px bg-border" />
                </div>

                <div className="pb-10">
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Add your Sellio details
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Add the domain connection details provided for your Sellio
                    store.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}

              <div className="grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    3
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Save your changes
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Save your DNS changes and allow time for the new settings
                    to update.
                  </p>
                </div>
              </div>
            </section>

            {/* ================================================= */}
            {/* VERIFICATION AND COMPLETION */}
            {/* ================================================= */}

            <section
              id="verification"
              className="scroll-mt-28 border-t border-border py-12"
            >
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Verification and Completion
              </h2>

              {/* STEP 1 */}

              <div className="mt-8 grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    1
                  </span>

                  <div className="mt-2 h-full w-px bg-border" />
                </div>

                <div className="pb-10">
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Allow the DNS records to update
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    After saving your DNS changes, allow some time for the
                    records to update before continuing.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}

              <div className="grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    2
                  </span>

                  <div className="mt-2 h-full w-px bg-border" />
                </div>

                <div className="pb-10">
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Return to Sellio
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Return to your Sellio store setup and check your domain
                    connection.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}

              <div className="grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    3
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Confirm your domain
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Once the domain is connected, open it in your browser and
                    make sure your Sellio store loads correctly.
                  </p>
                </div>
              </div>

              {/* WARNING */}

              <div className="mt-8 flex gap-4 rounded-xl border border-coral/20 bg-coral/5 p-5">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-coral" />

                <p className="text-sm leading-6 text-navy-mute">
                  Domain and DNS changes may take some time to become active.
                  If the connection does not appear immediately, check again
                  later before changing your settings.
                </p>
              </div>
            </section>

            {/* ================================================= */}
            {/* COMMON ERRORS TO AVOID */}
            {/* ================================================= */}

            <section
              id="common-errors"
              className="scroll-mt-28 border-t border-border py-12"
            >
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Common Errors to Avoid
              </h2>

              {/* ERROR 1 */}

              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 shrink-0 text-coral" />

                  <h3 className="font-display text-xl font-bold text-navy">
                    A Record Still Present
                  </h3>
                </div>

                <p className="mt-4 leading-8 text-navy-mute">
                  Check your existing DNS records before adding new settings.
                  Old or conflicting records can prevent your domain from
                  connecting correctly.
                </p>
              </div>

              {/* ERROR 2 */}

              <div className="mt-9">
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 shrink-0 text-coral" />

                  <h3 className="font-display text-xl font-bold text-navy">
                    Incorrect CNAME for www
                  </h3>
                </div>

                <p className="mt-4 leading-8 text-navy-mute">
                  Make sure the www record uses the correct destination
                  supplied for your Sellio domain connection.
                </p>
              </div>

              {/* ERROR 3 */}

              <div className="mt-9">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-coral" />

                  <h3 className="font-display text-xl font-bold text-navy">
                    Missing _acme-challenge TXT Record
                  </h3>
                </div>

                <p className="mt-4 leading-8 text-navy-mute">
                  If your setup provides a verification TXT record, make sure
                  it has been entered correctly and has not been removed.
                </p>
              </div>

              {/* TIPS */}

              <div className="mt-10">
                <h3 className="font-display text-xl font-bold text-navy">
                  To Be Safe
                </h3>

                <ul className="mt-5 space-y-3">
                  {[
                    "Copy domain records carefully.",
                    "Check the record name and destination before saving.",
                    "Do not remove records unless the setup guide requires it.",
                    "Allow time for DNS changes to update.",
                    "Check your domain again after the changes have updated.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-navy-mute"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />

                      <span className="leading-7">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 leading-8 text-navy-mute">
                This should result in your domain pointing correctly to your
                Sellio store.
              </p>
            </section>

            {/* ================================================= */}
            {/* COMPLETE */}
            {/* ================================================= */}

            <section className="border-t border-border py-12">
              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-coral" />

                <div>
                  <h2 className="font-display text-2xl font-bold text-navy">
                    Domain setup complete
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-navy-mute">
                    Once your domain is connected and your Sellio store loads
                    correctly, you can continue to the next setup step.
                  </p>
                </div>
              </div>
            </section>

            {/* ================================================= */}
            {/* PREVIOUS / NEXT */}
            {/* ================================================= */}

            <div className="grid gap-4 border-t border-border py-10 sm:grid-cols-2">
              <Link
                href="/documentation/buy-domain"
                className="group rounded-2xl border border-border bg-white p-5 transition-colors hover:border-coral/40"
              >
                <span className="flex items-center gap-2 text-xs font-bold uppercase text-navy-mute">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

                  Previous
                </span>

                <p className="mt-2 font-display text-lg font-bold">
                  Buy Your Domain
                </p>
              </Link>

              <Link
                href="/documentation/create-company"
                className="group rounded-2xl border border-border bg-white p-5 text-right transition-colors hover:border-coral/40"
              >
                <span className="flex items-center justify-end gap-2 text-xs font-bold uppercase text-navy-mute">
                  Next

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>

                <p className="mt-2 font-display text-lg font-bold">
                  Creating Your Company
                </p>
              </Link>
            </div>
          </article>

          {/* ===================================================== */}
          {/* RIGHT SIDEBAR */}
          {/* ===================================================== */}

          <aside className="hidden xl:block">
            <div className="sticky top-28 border-l border-border pl-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-mute">
                On This Page
              </p>

              <nav className="mt-5 space-y-4">
                <a
                  href="#create-cloudflare-account"
                  className="block text-sm font-semibold leading-6 text-coral"
                >
                  Create a Cloudflare Account
                </a>

                <a
                  href="#add-domain"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Add Your Domain
                </a>

                <a
                  href="#connect-domain"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Connect Your Domain to Sellio
                </a>

                <a
                  href="#verification"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Verification and Completion
                </a>

                <a
                  href="#common-errors"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Common Errors to Avoid
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