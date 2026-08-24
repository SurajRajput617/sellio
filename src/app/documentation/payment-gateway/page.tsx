import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  ExternalLink,
  FileText,
  Info,
  Play,
  Rocket,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PaymentGatewayPage() {
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

                {/* OVERVIEW */}

                <Link
                  href="/documentation"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <Rocket className="h-4 w-4 shrink-0" />
                  <span>Overview</span>
                </Link>

                {/* STEP 1 */}

                <Link
                  href="/documentation/buy-domain"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    1
                  </span>

                  <span>Buy Your Domain</span>
                </Link>

                {/* STEP 2 */}

                <Link
                  href="/documentation/add-domain"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    2
                  </span>

                  <span>Add Your Domain to Sellio</span>
                </Link>

                {/* STEP 3 */}

                <Link
                  href="/documentation/create-company"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    3
                  </span>

                  <span>Creating Your Company</span>
                </Link>

                {/* STEP 4 */}

                <Link
                  href="/documentation/terms"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-mute transition-colors hover:bg-coral/10 hover:text-coral"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coral text-xs font-bold text-white">
                    4
                  </span>

                  <span>Adding Your Terms</span>
                </Link>

                {/* STEP 5 - ACTIVE */}

                <Link
                  href="/documentation/payment-gateway"
                  className="flex items-center gap-3 rounded-xl bg-coral/10 px-3 py-2.5 text-sm font-semibold text-coral"
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
          {/* MAIN ARTICLE */}
          {/* ===================================================== */}

          <article className="min-w-0">

            {/* =================================================== */}
            {/* HEADER */}
            {/* =================================================== */}

            <section id="payment-gateway" className="scroll-mt-28">

              <p className="text-sm font-semibold text-coral">
                Getting Started
              </p>

              <div className="mt-4 flex items-center gap-4">

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral text-xl font-bold text-white">
                  5
                </span>

                <h1 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
                  Payment Gateway
                </h1>

              </div>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-navy-mute">
                Connect your payment provider so your Sellio store can process
                customer payments securely.
              </p>

            </section>

            {/* =================================================== */}
            {/* GET STARTED */}
            {/* =================================================== */}

            <section
              id="get-started"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Get Started
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                To begin your payment gateway setup, complete the application
                or onboarding process provided by your chosen payment
                provider.
              </p>

              {/* DEMO EXTERNAL LINK */}

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-coral underline underline-offset-4"
              >
                Payment gateway application

                <ExternalLink className="h-4 w-4" />
              </a>

              <p className="mt-6 leading-8 text-navy-mute">
                Once you have submitted your application, your payment provider
                may contact you directly if they need any additional
                information.
              </p>


            </section>

            {/* =================================================== */}
            {/* WHAT YOU NEED */}
            {/* =================================================== */}

            <section
              id="requirements"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                What You&apos;ll Need
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Before applying for a payment gateway, make sure your business
                information and store setup are ready.
              </p>

              <div className="mt-7 space-y-4">

                {[
                  "Your business or company information.",
                  "Your business bank account details.",
                  "Your Sellio store and domain.",
                  "Your store terms and policies.",
                  "Any additional information requested by your payment provider.",
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

            </section>

            {/* =================================================== */}
            {/* TERMS REQUIRED */}
            {/* =================================================== */}

            <section
              id="terms"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Make Sure Your Terms Are Ready
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Before continuing with your payment gateway application, make
                sure the required terms and policy pages have been added to
                your Sellio store.
              </p>

              {/* SAME LINK CARD STYLE AS REFERENCE */}

              <Link
                href="/documentation/terms"
                className="group mt-7 flex items-center justify-between rounded-xl border border-border bg-white px-5 py-4 transition-colors hover:border-coral/40"
              >

                <div className="flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-coral/10">
                    <FileText className="h-4 w-4 text-coral" />
                  </span>

                  <span className="font-semibold text-navy">
                    Adding Your Terms
                  </span>

                </div>

                <ArrowRight className="h-4 w-4 text-navy-mute transition-transform group-hover:translate-x-1 group-hover:text-coral" />

              </Link>

            </section>

            {/* =================================================== */}
            {/* STORE REVIEW */}
            {/* =================================================== */}

            <section
              id="store-review"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Prepare Your Store for Review
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Your payment provider may review your Sellio store as part of
                the application process.
              </p>

              <p className="mt-4 leading-8 text-navy-mute">
                Make sure your store information is complete and that the
                products or services you plan to sell are clearly presented.
              </p>

              <div className="mt-7 space-y-4">

                {[
                  "Check your company information.",
                  "Make sure your domain is working.",
                  "Check your store terms and policies.",
                  "Review your product information and pricing.",
                  "Make sure your contact details are correct.",
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

            </section>

            {/* =================================================== */}
            {/* APPROVAL */}
            {/* =================================================== */}

            <section
              id="approval"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                After Your Account Is Approved
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Once your payment account has been approved, your provider
                will give you the information required to connect your account
                to Sellio.
              </p>

              <p className="mt-4 leading-8 text-navy-mute">
                Add the provided account details or integration keys to the
                payment settings in your Sellio dashboard.
              </p>

              <div className="mt-8 flex gap-4 rounded-xl border border-border bg-white p-5">

                <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-coral" />

                <div>

                  <p className="font-semibold text-navy">
                    Keep your payment credentials private
                  </p>

                  <p className="mt-2 text-sm leading-6 text-navy-mute">
                    Payment account credentials should only be entered into the
                    appropriate secure settings in your Sellio account. Do not
                    publish them on your website.
                  </p>

                </div>

              </div>

            </section>

            {/* =================================================== */}
            {/* INTEGRATION VIDEO */}
            {/* =================================================== */}

            <section
              id="integration"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <div className="flex items-center gap-3">

                <Play className="h-5 w-5 text-coral" />

                <p className="text-sm font-bold uppercase tracking-[0.14em] text-coral">
                  Video Guide
                </p>

              </div>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                How to Integrate Your Payment Account
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Watch the walkthrough below to see how to connect your approved
                payment account to your Sellio store.
              </p>

              {/* YOUTUBE VIDEO */}

              <div className="mt-8 overflow-hidden rounded-xl border border-border bg-navy shadow-sm">

                <div className="aspect-video">

                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="Sellio Payment Gateway Integration"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                </div>

              </div>

              <p className="mt-3 text-xs leading-5 text-navy-mute">
                Replace VIDEO_ID with your payment integration YouTube video
                ID.
              </p>

            </section>

            {/* =================================================== */}
            {/* COMPLETE */}
            {/* =================================================== */}

            <section
              id="complete"
              className="scroll-mt-28 py-12"
            >

              <div className="flex gap-4">

                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-coral" />

                <div>

                  <h2 className="font-display text-2xl font-bold text-navy">
                    Payment setup complete
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-navy-mute">
                    Once your payment provider has been connected successfully,
                    your payment setup is ready and you can continue building
                    your Sellio store.
                  </p>

                </div>

              </div>

            </section>

            {/* =================================================== */}
            {/* PREVIOUS / NEXT */}
            {/* =================================================== */}

            <div className="grid gap-4 border-t border-border py-10 sm:grid-cols-2">

              {/* PREVIOUS */}

              <Link
                href="/documentation/terms"
                className="group rounded-2xl border border-border bg-white p-5 transition-colors hover:border-coral/40"
              >

                <span className="flex items-center gap-2 text-xs font-bold uppercase text-navy-mute">

                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

                  Previous

                </span>

                <p className="mt-2 font-display text-lg font-bold text-navy">
                  Adding Your Terms
                </p>

              </Link>

              {/* NEXT */}

              <Link
                href="#"
                className="group rounded-2xl border border-border bg-white p-5 text-right transition-colors hover:border-coral/40"
              >

                <span className="flex items-center justify-end gap-2 text-xs font-bold uppercase text-navy-mute">

                  Next

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                </span>

                <p className="mt-2 font-display text-lg font-bold text-navy">
                  Create a Competition
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
                  href="#get-started"
                  className="block text-sm font-semibold leading-6 text-coral"
                >
                  Get Started
                </a>

                <a
                  href="#requirements"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  What You&apos;ll Need
                </a>

                <a
                  href="#terms"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Adding Your Terms
                </a>

                <a
                  href="#store-review"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Prepare Your Store
                </a>

                <a
                  href="#approval"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  After Approval
                </a>

                <a
                  href="#integration"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Integration Video
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
