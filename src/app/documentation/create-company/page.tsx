import Link from "next/link";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Info,
  Play,
  Rocket,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

export default function CreateCompanyPage() {
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
            {/* PAGE HEADER */}
            {/* =================================================== */}

            <section>
              <p className="text-sm font-semibold text-coral">
                Getting Started
              </p>

              <div className="mt-4 flex items-center gap-4">

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral text-xl font-bold text-white">
                  3
                </span>

                <h1 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
                  Creating Your Company
                </h1>

              </div>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-navy-mute">
                Set up your company information so your Sellio store has the
                correct business details before you continue with the rest of
                your store setup.
              </p>
            </section>

            {/* =================================================== */}
            {/* IMPORTANT NOTICE */}
            {/* =================================================== */}

            <section className="pt-8">

              <div className="flex gap-4 rounded-xl border border-coral/20 bg-coral/5 p-5">

                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-coral" />

                <div>
                  <p className="font-semibold text-coral">
                    Important
                  </p>

                  <p className="mt-2 text-sm leading-6 text-navy-mute">
                    Make sure the company information you enter is accurate.
                    Your business details may be used throughout your Sellio
                    store and related account settings.
                  </p>
                </div>

              </div>

            </section>

            {/* =================================================== */}
            {/* WHAT YOU NEED */}
            {/* =================================================== */}

            <section
              id="what-you-need"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                What You&apos;ll Need
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Before creating your company profile, have your basic business
                information ready.
              </p>

              <div className="mt-7 space-y-3">

                {[
                  "Your company or business name.",
                  "Your business contact email.",
                  "Your company address.",
                  "Your main contact information.",
                  "Any other business information required during setup.",
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
            {/* CREATE COMPANY */}
            {/* =================================================== */}

            <section
              id="create-company"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Create Your Company
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
                    Open your company settings
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Sign in to your Sellio account and open the company or
                    business settings for your store.
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
                    Enter your company name
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Enter the business or company name you want associated
                    with your Sellio store.
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
                    Add your company details
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Complete the required business information, including your
                    contact and company details.
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
                    Save your company
                  </h3>

                  <p className="mt-5 leading-8 text-navy-mute">
                    Review the information you entered and save your company
                    details when everything is correct.
                  </p>

                </div>

              </div>

            </section>

            {/* =================================================== */}
            {/* COMPANY INFORMATION */}
            {/* =================================================== */}

            <section
              id="company-information"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Company Information
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                When completing your company profile, carefully check each
                field before saving.
              </p>

              {/* ITEM 1 */}

              <div className="mt-8">

                <h3 className="font-display text-xl font-bold text-navy">
                  Company Name
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Enter the name of the company or business operating your
                  Sellio store.
                </p>

              </div>

              {/* ITEM 2 */}

              <div className="mt-8">

                <h3 className="font-display text-xl font-bold text-navy">
                  Business Email
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Add an email address that can be used for your business
                  communications.
                </p>

              </div>

              {/* ITEM 3 */}

              <div className="mt-8">

                <h3 className="font-display text-xl font-bold text-navy">
                  Business Address
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Enter your company address carefully and check that all
                  details are correct.
                </p>

              </div>

              {/* ITEM 4 */}

              <div className="mt-8">

                <h3 className="font-display text-xl font-bold text-navy">
                  Contact Information
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Complete any additional contact details required for your
                  company profile.
                </p>

              </div>

            </section>

            {/* =================================================== */}
            {/* REVIEW DETAILS */}
            {/* =================================================== */}

            <section
              id="review-details"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Review Your Details
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Before continuing, review your company information and make
                sure everything has been entered correctly.
              </p>

              <div className="mt-7 space-y-3">

                {[
                  "Check the spelling of your company name.",
                  "Make sure your business email is correct.",
                  "Review your company address.",
                  "Check your contact information.",
                  "Save any changes before leaving the page.",
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

                <Info className="mt-0.5 h-5 w-5 shrink-0 text-coral" />

                <p className="text-sm leading-6 text-navy-mute">
                  If any of your company information changes later, make sure
                  you update your Sellio company profile so your store details
                  remain accurate.
                </p>

              </div>

            </section>

            {/* =================================================== */}
            {/* VIDEO GUIDE */}
            {/* =================================================== */}

            <section
              id="video-guide"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <div className="flex items-center gap-3">

                <Play className="h-5 w-5 text-coral" />

                <p className="text-sm font-bold uppercase tracking-[0.14em] text-coral">
                  Video Guide
                </p>

              </div>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-navy">
                Learn How to Create Your Company
              </h2>

              <p className="mt-5 leading-8 text-navy-mute">
                Watch the video below for a walkthrough of setting up your
                company information for your Sellio store.
              </p>

              {/* YOUTUBE DEMO */}

              <div className="mt-8 overflow-hidden rounded-xl border border-border bg-navy">

                <div className="aspect-video">

                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="How to create your company in Sellio"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                </div>

              </div>

              <p className="mt-3 text-xs text-navy-mute">
                Replace VIDEO_ID with your YouTube video ID.
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
                    Company setup complete
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-navy-mute">
                    Once your company information has been added and checked,
                    you&apos;re ready to continue to the next part of your
                    Sellio store setup.
                  </p>

                </div>

              </div>

            </section>

            {/* =================================================== */}
            {/* PREVIOUS / NEXT */}
            {/* =================================================== */}

            <div className="grid gap-4 border-t border-border py-10 sm:grid-cols-2">

              <Link
                href="/documentation/add-domain"
                className="group rounded-2xl border border-border bg-white p-5 transition-colors hover:border-coral/40"
              >

                <span className="flex items-center gap-2 text-xs font-bold uppercase text-navy-mute">

                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

                  Previous

                </span>

                <p className="mt-2 font-display text-lg font-bold">
                  Add Your Domain to Sellio
                </p>

              </Link>

              <Link
                href="/documentation/terms"
                className="group rounded-2xl border border-border bg-white p-5 text-right transition-colors hover:border-coral/40"
              >

                <span className="flex items-center justify-end gap-2 text-xs font-bold uppercase text-navy-mute">

                  Next

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                </span>

                <p className="mt-2 font-display text-lg font-bold">
                  Adding Your Terms
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
                  href="#what-you-need"
                  className="block text-sm font-semibold leading-6 text-coral"
                >
                  What You&apos;ll Need
                </a>

                <a
                  href="#create-company"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Create Your Company
                </a>

                <a
                  href="#company-information"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Company Information
                </a>

                <a
                  href="#review-details"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Review Your Details
                </a>

                <a
                  href="#video-guide"
                  className="block text-sm leading-6 text-navy-mute transition-colors hover:text-coral"
                >
                  Video Guide
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