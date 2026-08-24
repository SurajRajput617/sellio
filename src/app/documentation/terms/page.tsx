import Link from "next/link";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Info,
  Rocket,
  Scale,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-paper text-navy">
        <div className="container-xl grid gap-10 py-12 lg:grid-cols-[250px_minmax(0,1fr)_210px]">

          {/* ===================================================== */}
          {/* LEFT SIDEBAR */}
          {/* ===================================================== */}

       <DocumentationSidebar />
       
          {/* ===================================================== */}
          {/* MAIN CONTENT */}
          {/* ===================================================== */}

          <article className="min-w-0">

            {/* =================================================== */}
            {/* HEADER */}
            {/* =================================================== */}

            <section>
              <p className="text-sm font-semibold text-coral">
                Getting Started
              </p>

              <div className="mt-4 flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral text-xl font-bold text-white">
                  4
                </span>

                <h1 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
                  Adding Your Terms
                </h1>
              </div>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-navy-mute">
                Add the important policy and terms pages your customers may
                need when using or purchasing from your Sellio store.
              </p>
            </section>

            {/* =================================================== */}
            {/* NOTICE */}
            {/* =================================================== */}

            <section className="pt-8">
              <div className="flex gap-4 rounded-xl border border-coral/20 bg-coral/5 p-5">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-coral" />

                <div>
                  <p className="font-semibold text-coral">
                    Important
                  </p>

                  <p className="mt-2 text-sm leading-6 text-navy-mute">
                    Sellio does not provide legal advice. Your terms and
                    policies should reflect your own business, products and
                    customer requirements. Consider getting appropriate
                    professional advice if you are unsure what your business
                    needs.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================== */}
            {/* TWO WAYS */}
            {/* =================================================== */}

            <section
              id="ways-to-add-terms"
              className="scroll-mt-28 border-b border-border py-12"
            >
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Two Ways to Add Your Terms
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                You can prepare your store policies yourself or use
                professionally prepared documents that are appropriate for
                your business.
              </p>

              {/* OPTION 1 */}

              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    1
                  </span>

                  <h3 className="font-display text-2xl font-bold text-navy">
                    Create Your Own Terms
                  </h3>
                </div>

                <p className="mt-5 leading-8 text-navy-mute">
                  You can create the policy pages needed for your Sellio store
                  based on how your business operates.
                </p>

                <p className="mt-4 leading-8 text-navy-mute">
                  Make sure the information is accurate, easy for customers to
                  understand and relevant to the products or services you
                  provide.
                </p>
              </div>

              {/* OPTION 2 */}

              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    2
                  </span>

                  <h3 className="font-display text-2xl font-bold text-navy">
                    Use Professionally Prepared Terms
                  </h3>
                </div>

                <p className="mt-5 leading-8 text-navy-mute">
                  You may choose to have your policies prepared or reviewed by
                  an appropriate professional.
                </p>

                <p className="mt-4 leading-8 text-navy-mute">
                  This can help make sure the documents you publish are
                  suitable for your particular business.
                </p>
              </div>
            </section>

            {/* =================================================== */}
            {/* POLICIES */}
            {/* =================================================== */}

            <section
              id="policies"
              className="scroll-mt-28 border-b border-border py-12"
            >
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Prepare Your Store Policies
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                The exact policies you need depend on your business. Common
                pages you may want to prepare include:
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Terms and Conditions",
                  "Privacy Policy",
                  "Refund or Returns Policy",
                  "Shipping or Delivery Information",
                  "Contact Information",
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
            {/* ADDING TO WEBSITE */}
            {/* =================================================== */}

            <section
              id="adding-to-website"
              className="scroll-mt-28 border-b border-border py-12"
            >
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Adding the Terms to Your Website
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Once your policy content is ready, add each document to the
                appropriate page in your Sellio store.
              </p>

              {/* STEP 1 */}

              <div className="mt-10 grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    1
                  </span>

                  <div className="mt-2 h-full w-px bg-border" />
                </div>

                <div className="pb-10">
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Open your Sellio dashboard
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Sign in to Sellio and open the dashboard for the store you
                    want to update.
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
                    Go to your pages
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Open the area where you manage the content pages displayed
                    on your Sellio website.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}

              <div className="grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    3
                  </span>

                  <div className="mt-2 h-full w-px bg-border" />
                </div>

                <div className="pb-10">
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Choose the policy page
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Select the page you want to edit, such as your Terms,
                    Privacy Policy or Returns Policy.
                  </p>
                </div>
              </div>

              {/* STEP 4 */}

              <div className="grid grid-cols-[44px_minmax(0,1fr)]">
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                    4
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Add your content and save
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Add the relevant policy content, review it carefully and
                    save your changes.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================== */}
            {/* SELLIO DEMO ILLUSTRATION */}
            {/* =================================================== */}

            <section
              id="example"
              className="scroll-mt-28 border-b border-border py-12"
            >
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Example: Adding a Terms Page
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Your Sellio dashboard may look similar to the example below
                when managing your website pages.
              </p>

              {/* ================================================= */}
              {/* DEMO SELLIO DASHBOARD IMAGE / UI */}
              {/* ================================================= */}

              <div className="mt-8 overflow-hidden rounded-xl border border-border bg-white shadow-sm">

                {/* TOP BAR */}

                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <div className="flex items-center gap-3">

                    {/* SELLIO LOGO DEMO */}

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral text-sm font-bold text-white">
                      S
                    </div>

                    <div>
                      <p className="font-display text-base font-bold text-navy">
                        Sellio
                      </p>

                      <p className="text-[11px] text-navy-mute">
                        Store Dashboard
                      </p>
                    </div>
                  </div>

                  <span className="rounded-lg bg-coral/10 px-3 py-1.5 text-xs font-semibold text-coral">
                    Admin
                  </span>
                </div>

                {/* DASHBOARD */}

                <div className="grid min-h-[440px] grid-cols-[150px_minmax(0,1fr)] sm:grid-cols-[190px_minmax(0,1fr)]">

                  {/* DEMO LEFT MENU */}

                  <div className="border-r border-border bg-navy/[0.025] p-4">

                    <p className="px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-navy-mute">
                      Website
                    </p>

                    <div className="mt-3 space-y-1">

                      <div className="rounded-lg px-3 py-2 text-xs text-navy-mute">
                        Dashboard
                      </div>

                      <div className="flex items-center gap-2 rounded-lg bg-coral/10 px-3 py-2 text-xs font-semibold text-coral">
                        <FileText className="h-3.5 w-3.5" />
                        Pages
                      </div>

                      <div className="rounded-lg px-3 py-2 text-xs text-navy-mute">
                        Navigation
                      </div>

                      <div className="rounded-lg px-3 py-2 text-xs text-navy-mute">
                        Settings
                      </div>

                    </div>
                  </div>

                  {/* DEMO PAGE EDITOR */}

                  <div className="p-5 sm:p-7">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs font-medium text-coral">
                          Website
                        </p>

                        <h3 className="mt-1 font-display text-2xl font-bold text-navy">
                          Pages
                        </h3>
                      </div>

                      <button
                        type="button"
                        className="rounded-lg bg-coral px-3 py-2 text-xs font-semibold text-white"
                      >
                        Save
                      </button>

                    </div>

                    <div className="mt-7">

                      <label className="text-xs font-semibold text-navy">
                        Page
                      </label>

                      <div className="mt-2 rounded-lg border border-border bg-paper px-4 py-3 text-sm text-navy">
                        Terms & Conditions
                      </div>

                    </div>

                    <div className="mt-5">

                      <label className="text-xs font-semibold text-navy">
                        Page title
                      </label>

                      <div className="mt-2 rounded-lg border border-border bg-paper px-4 py-3 text-sm text-navy">
                        Terms & Conditions
                      </div>

                    </div>

                    <div className="mt-5">

                      <label className="text-xs font-semibold text-navy">
                        Content
                      </label>

                      <div className="mt-2 min-h-[135px] rounded-lg border border-border bg-paper p-4">

                        <div className="h-2 w-4/5 rounded bg-navy/10" />

                        <div className="mt-3 h-2 w-full rounded bg-navy/10" />

                        <div className="mt-3 h-2 w-11/12 rounded bg-navy/10" />

                        <div className="mt-3 h-2 w-3/4 rounded bg-navy/10" />

                        <div className="mt-6 h-2 w-1/2 rounded bg-coral/20" />

                      </div>

                    </div>

                  </div>

                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-navy-mute">
                Demo illustration for documentation purposes. Replace this
                with a real Sellio dashboard screenshot when available.
              </p>
            </section>

            {/* =================================================== */}
            {/* REVIEW */}
            {/* =================================================== */}

            <section
              id="review"
              className="scroll-mt-28 border-b border-border py-12"
            >
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Review Before Publishing
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Before publishing your policy pages, check that the content is
                complete and that customers can easily find it.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Check each policy page for missing information.",
                  "Make sure the page titles are clear.",
                  "Check that the content is readable on mobile.",
                  "Make sure customers can navigate to the pages.",
                  "Save and publish your latest changes.",
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

              <div className="mt-8 flex gap-4 rounded-xl border border-border bg-white p-5">
                <Scale className="mt-0.5 h-5 w-5 shrink-0 text-coral" />

                <p className="text-sm leading-6 text-navy-mute">
                  Review your policies whenever your business, products,
                  delivery methods or customer processes change.
                </p>
              </div>
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
                    Terms added
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-navy-mute">
                    Once your required policy pages are ready and available on
                    your store, continue to the payment gateway setup.
                  </p>
                </div>

              </div>
            </section>

            {/* =================================================== */}
            {/* PREVIOUS / NEXT */}
            {/* =================================================== */}

            <div className="grid gap-4 border-t border-border py-10 sm:grid-cols-2">

              <Link
                href="/documentation/create-company"
                className="group rounded-2xl border border-border bg-white p-5 transition-colors hover:border-coral/40"
              >
                <span className="flex items-center gap-2 text-xs font-bold uppercase text-navy-mute">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

                  Previous
                </span>

                <p className="mt-2 font-display text-lg font-bold">
                  Creating Your Company
                </p>
              </Link>

              <Link
                href="/documentation/payment-gateway"
                className="group rounded-2xl border border-border bg-white p-5 text-right transition-colors hover:border-coral/40"
              >
                <span className="flex items-center justify-end gap-2 text-xs font-bold uppercase text-navy-mute">
                  Next

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>

                <p className="mt-2 font-display text-lg font-bold">
                  Payment Gateway
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
                  href="#ways-to-add-terms"
                  className="block text-sm font-semibold leading-6 text-coral"
                >
                  Two Ways to Add Your Terms
                </a>

                <a
                  href="#policies"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Prepare Your Store Policies
                </a>

                <a
                  href="#adding-to-website"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Adding Terms to Your Website
                </a>

                <a
                  href="#example"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Example
                </a>

                <a
                  href="#review"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Review Before Publishing
                </a>

                <a
                  href="#complete"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Complete
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