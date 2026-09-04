"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Check,
  Info,
  Copy,
  Megaphone,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

/* ============================================================
   ON THIS PAGE
============================================================ */

const sections = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "quick-setup",
    label: "Quick Setup Guide",
  },
  {
    id: "campaign-settings",
    label: "Campaign Settings",
  },
  {
    id: "promotion-rules",
    label: "Promotion Rules",
  },
];


/* ============================================================
   PAGE
============================================================ */

export default function CreatingFreePromotionalCampaignPage() {
  const [activeSection, setActiveSection] =
    useState("overview");

  const [copied, setCopied] =
    useState(false);


  /* ============================================================
     SCROLL SPY
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      const position =
        window.scrollY + 180;

      let current =
        sections[0].id;

      sections.forEach((section) => {
        const element =
          document.getElementById(section.id);

        if (!element) return;

        if (
          element.offsetTop <= position
        ) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };


    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  /* ============================================================
     EXAMPLE CONFIGURATION
  ============================================================ */

  const campaignExample = `{
  "name": "Spring Store Promotion",
  "type": "promotional",
  "status": "active",
  "price": 0,
  "audience": "all_customers"
}`;


  /* ============================================================
     COPY
  ============================================================ */

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(
        campaignExample
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);

    } catch {
      setCopied(false);
    }
  };


  return (
    <>
      {/* ======================================================
          SELLIO HEADER
      ====================================================== */}

      <Navbar />


      {/* ======================================================
          DOCUMENTATION MAIN
      ====================================================== */}

      <main
        className="
          min-h-screen
          bg-paper
          text-navy
        "
      >

        <div
          className="
            container-xl
            grid
            gap-10
            py-12
            lg:grid-cols-[250px_minmax(0,1fr)_210px]
          "
        >

          {/* ==================================================
              LEFT SIDEBAR
          ================================================== */}

          <DocumentationSidebar />


          {/* ==================================================
              MAIN ARTICLE
          ================================================== */}

          <article
            className="
              min-w-0
            "
          >

            {/* ==================================================
                PAGE HEADER / OVERVIEW
            ================================================== */}

            <section
              id="overview"
              className="
                scroll-mt-28
                border-b
                border-border
                pb-8
              "
            >

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-coral
                "
              >
                Helpful Info
              </p>


              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-tight
                "
              >
                Creating a Free Promotional Campaign
              </h1>


              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Free promotions can help you attract new
                customers, highlight products, or give
                existing customers another reason to visit
                your Sellio store.
              </p>


              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                This guide explains how to create a simple
                promotional campaign and configure the
                settings that control how it is presented
                to customers.
              </p>


              {/* ==================================================
                  INFO CALLOUT
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-4
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >

                  <Info
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />


                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    A promotional campaign should have a
                    clear purpose and simple rules so
                    customers understand what the offer
                    provides.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                QUICK SETUP GUIDE
            ================================================== */}

            <section
              id="quick-setup"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2
                className="
                  text-xl
                  font-bold
                "
              >
                Quick Setup Guide
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Follow these steps to create a basic
                promotional campaign in your Sellio store.
              </p>


              <ol
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Open the Promotions area from your Sellio dashboard.",
                  "Choose the option to create a new promotion.",
                  "Enter a clear name for your campaign.",
                  "Choose the products or customers the promotion should apply to.",
                  "Set the promotional value or benefit.",
                  "Review the campaign settings.",
                  "Save the promotion.",
                ].map((item, index) => (

                  <li
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >

                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        bg-black/5
                        text-xs
                        font-semibold
                        text-coral
                      "
                    >
                      {index + 1}
                    </span>


                    <span>
                      {item}
                    </span>

                  </li>

                ))}

              </ol>


              {/* ==================================================
                  SUCCESS CALLOUT
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-4
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >

                  <Check
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />


                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Before publishing, check the promotion
                    name, value, eligibility, and active
                    dates so customers receive the offer
                    you intended.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                CAMPAIGN SETTINGS
            ================================================== */}

            <section
              id="campaign-settings"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2
                className="
                  text-xl
                  font-bold
                "
              >
                Campaign Settings
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Give your promotion settings that are easy
                for you and your customers to understand.
                Clear configuration also makes it easier to
                review campaigns later.
              </p>


              {/* ==================================================
                  SETTINGS CARDS
              ================================================== */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  {
                    title: "Campaign Name",
                    text:
                      "Use a short name that clearly identifies the promotion in your dashboard.",
                  },
                  {
                    title: "Promotion Value",
                    text:
                      "Define the benefit customers receive from the campaign.",
                  },
                  {
                    title: "Eligible Products",
                    text:
                      "Select which products or categories should be included when your promotion supports product-level targeting.",
                  },
                  {
                    title: "Customer Eligibility",
                    text:
                      "Choose the audience that should be able to use the promotion when customer targeting is available.",
                  },
                  {
                    title: "Campaign Dates",
                    text:
                      "Set the period during which the promotion should be available.",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="
                      rounded-lg
                      border
                      border-border
                      p-5
                    "
                  >

                    <h3
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      {item.title}
                    </h3>


                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>


              {/* ==================================================
                  EXAMPLE CONFIGURATION
              ================================================== */}

              <div
                className="
                  mt-7
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                  bg-[#101a2c]
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    px-4
                    py-3
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <Megaphone
                      className="
                        h-4
                        w-4
                        text-white/60
                      "
                    />


                    <span
                      className="
                        text-xs
                        text-white/70
                      "
                    >
                      Example campaign
                    </span>

                  </div>


                  <button
                    type="button"
                    onClick={copyCode}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-md
                      border
                      border-white/10
                      px-3
                      py-1.5
                      text-xs
                      text-white/70
                      transition-colors
                      hover:border-white/30
                      hover:text-white
                    "
                  >

                    {copied ? (
                      <>
                        <Check
                          className="h-3.5 w-3.5"
                        />

                        Copied
                      </>
                    ) : (
                      <>
                        <Copy
                          className="h-3.5 w-3.5"
                        />

                        Copy
                      </>
                    )}

                  </button>

                </div>


                <pre
                  className="
                    overflow-x-auto
                    p-5
                    text-sm
                    leading-7
                    text-white/85
                  "
                >
                  <code>
                    {campaignExample}
                  </code>
                </pre>

              </div>

            </section>


                     {/* ==================================================
                PROMOTION RULES
            ================================================== */}

            <section
              id="promotion-rules"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2
                className="
                  text-xl
                  font-bold
                "
              >
                Promotion Rules
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Promotion rules define when an offer is
                available and which customers or products
                can qualify. Keep these rules simple so the
                campaign is easy to manage and customers
                know what to expect.
              </p>


              {/* ==================================================
                  RULE CARDS
              ================================================== */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >

                  <h3
                    className="
                      text-sm
                      font-semibold
                    "
                  >
                    Eligibility
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Define who can receive or use the
                    promotion. If the campaign targets a
                    specific customer group, make that
                    audience clear before publishing.
                  </p>

                </div>


                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >

                  <h3
                    className="
                      text-sm
                      font-semibold
                    "
                  >
                    Product Scope
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Choose whether the promotion applies to
                    selected products, categories, or the
                    wider store when those options are
                    available.
                  </p>

                </div>


                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >

                  <h3
                    className="
                      text-sm
                      font-semibold
                    "
                  >
                    Start and End Dates
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Set clear start and end dates for
                    time-limited campaigns. Check the dates
                    before publishing so the promotion runs
                    during the period you intended.
                  </p>

                </div>


                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >

                  <h3
                    className="
                      text-sm
                      font-semibold
                    "
                  >
                    Promotion Limits
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    If your promotion supports usage limits,
                    choose limits that match your campaign
                    goals and clearly communicate any
                    restrictions to customers.
                  </p>

                </div>

              </div>


              {/* ==================================================
                  IMPORTANT NOTE
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-4
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >

                  <Info
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />


                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Make sure your promotion rules match
                    the message customers see. Clear
                    expectations help prevent confusion
                    about how an offer works.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                REVIEW BEFORE PUBLISHING
            ================================================== */}

            <section
              id="review-before-publishing"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2
                className="
                  text-xl
                  font-bold
                "
              >
                Review Before Publishing
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Take a moment to review the campaign before
                making it available to customers. A short
                checklist can help catch configuration
                mistakes before the promotion starts.
              </p>


              {/* ==================================================
                  CHECKLIST
              ================================================== */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Confirm the campaign name is easy to recognize.",
                  "Check the products or categories included in the promotion.",
                  "Review the customer eligibility settings.",
                  "Confirm the promotional value or benefit.",
                  "Check the campaign start and end dates.",
                  "Review any usage limits or restrictions.",
                  "Save the campaign after all settings are correct.",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-lg
                      border
                      border-border
                      px-4
                      py-3
                    "
                  >

                    <Check
                      className="
                        mt-0.5
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />


                    <span
                      className="
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>


              {/* ==================================================
                  PUBLISH CALLOUT
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-5
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >

                  <Check
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />


                  <div>

                    <p
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      Ready to publish
                    </p>


                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Once the campaign details have been
                      reviewed, save or publish the promotion
                      using the available Sellio controls.
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* ==================================================
                CAMPAIGN BEST PRACTICES
            ================================================== */}

            <section
              id="campaign-best-practices"
              className="
                scroll-mt-28
                py-8
              "
            >

              <h2
                className="
                  text-xl
                  font-bold
                "
              >
                Campaign Best Practices
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A successful promotion does not need to be
                complicated. Focus on a clear offer, a
                defined audience, and a campaign period that
                matches your marketing plan.
              </p>


              <ul
                className="
                  mt-6
                  list-disc
                  space-y-3
                  pl-5
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >

                <li>
                  Give each campaign a clear and recognizable
                  name.
                </li>

                <li>
                  Keep promotional rules easy to understand.
                </li>

                <li>
                  Use dates that match your marketing
                  schedule.
                </li>

                <li>
                  Review the campaign before publishing it.
                </li>

                <li>
                  Check campaign performance after it has
                  been active.
                </li>

                <li>
                  Update or end promotions when they are no
                  longer relevant.
                </li>

              </ul>


              {/* ==================================================
                  FINAL TIP
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-4
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >

                  <Info
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />


                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                  "
                  >
                    Keep a consistent naming system for your
                    campaigns. It makes your promotions easier
                    to find and manage as your store grows.
                  </p>

                </div>

              </div>

                  </section>

            {/* ==================================================
                NEED HELP

            ================================================== */}

            <section
              id="need-help"
              className="
                scroll-mt-28
                border-t
                border-border
                py-8
              "
            >

              <div
                className="
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-6
                "
              >

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-coral
                  "
                >
                  Support
                </p>

                <h2
                  className="
                    mt-2
                    text-xl
                    font-bold
                  "
                >
                  Need Help?
                </h2>

                <p
                  className="
                    mt-3
                    max-w-2xl
                    text-sm
                    leading-7
                    text-navy-mute
                  "
                >
                  If your promotional campaign is not working
                  as expected, review the campaign settings,
                  eligibility rules, dates, and products
                  included in the promotion.
                </p>

                <p
                  className="
                    mt-3
                    max-w-2xl
                    text-sm
                    leading-7
                    text-navy-mute
                  "
                >
                  If you have reviewed the settings and still
                  need assistance, contact Sellio support for
                  help with your store configuration.
                </p>

                <Link
                  href="/#contact"
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-md
                    bg-coral
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-opacity
                    hover:opacity-90
                  "
                >
                  Contact Support

                  <ArrowRight
                    className="h-4 w-4"
                  />
                </Link>

              </div>

            </section>


            {/* ==================================================
                RELATED GUIDES
            ================================================== */}

            <section
              className="
                border-t
                border-border
                py-8
              "
            >

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-coral
                "
              >
                Continue Learning
              </p>

              <h2
                className="
                  mt-2
                  text-xl
                  font-bold
                "
              >
                Related Guides
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                Continue exploring Sellio documentation for
                more information about promotions, products,
                and store management.
              </p>


              <div
                className="
                  mt-5
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >

                {/* ==================================================
                    PRODUCTS
                ================================================== */}

                <Link
                  href=""
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                    p-5
                    transition-colors
                    hover:border-coral
                  "
                >

                  <p
                    className="
                      text-xs
                      text-navy-mute
                    "
                  >
                    Store Management
                  </p>

                  <h3
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      group-hover:text-coral
                    "
                  >
                    Products
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Learn more about managing products in
                    your Sellio store.
                  </p>


                </Link>


                {/* ==================================================
                    MARKETING
                ================================================== */}

                <Link
                  href=""
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                    p-5
                    transition-colors
                    hover:border-coral
                  "
                >

                  <p
                    className="
                      text-xs
                      text-navy-mute
                    "
                  >
                    Marketing
                  </p>

                  <h3
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      group-hover:text-coral
                    "
                  >
                    Email Marketing
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Explore ways to use customer communication
                    as part of your store marketing.
                  </p>

                

                </Link>

              </div>

            </section>


            {/* ==================================================
                PREVIOUS / NEXT
            ================================================== */}

            <div
              className="
                grid
                gap-4
                border-t
                border-border
                pt-6
                sm:grid-cols-2
              "
            >

              {/* ==================================================
                  PREVIOUS
              ================================================== */}

              <Link
                href="/documentation/utm-tags"
                className="
                  group
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-4
                  transition-colors
                  hover:border-coral
                "
              >

                <p
                  className="
                    text-xs
                    text-navy-mute
                  "
                >
                  Previous
                </p>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    group-hover:text-coral
                  "
                >

                  <ArrowLeft
                    className="h-4 w-4"
                  />

                  UTM Tags

                </div>

              </Link>


              {/* ==================================================
                  NEXT
              ================================================== */}

              <Link
                href="/documentation/ensure-www-loads-your-site"
                className="
                  group
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-4
                  text-right
                  transition-colors
                  hover:border-coral
                "
              >

                <p
                  className="
                    text-xs
                    text-navy-mute
                  "
                >
                  Next
                </p>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    justify-end
                    gap-2
                    text-sm
                    font-semibold
                    group-hover:text-coral
                  "
                >

                 Ensure www. Loads Your Site

                  <ArrowRight
                    className="h-4 w-4"
                  />

                </div>

              </Link>

            </div>


            {/* ==================================================
                LAST UPDATED
            ================================================== */}

            <div
              className="
                py-6
                text-xs
                text-navy-mute
              "
            >
              Last updated recently
            </div>

          </article>


     

          {/* ==================================================
              RIGHT SIDE TOC
          ================================================== */}

          <aside
            className="
              hidden
              xl:block
            "
          >

            <div
              className="
                sticky
                top-28
                border-l
                border-border
                pl-6
              "
            >

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-navy-mute
                "
              >
                On This Page
              </p>


              <nav
                className="
                  mt-5
                  space-y-3
                "
              >

                {sections.map((section) => {

                  const isActive =
                    activeSection ===
                    section.id;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(event) => {

                        event.preventDefault();

                        document
                          .getElementById(
                            section.id
                          )
                          ?.scrollIntoView({
                            behavior:
                              "smooth",
                            block:
                              "start",
                          });

                        setActiveSection(
                          section.id
                        );

                      }}
                      className={`
                        block
                        border-l-2
                        py-1
                        pl-3
                        text-sm
                        leading-5
                        transition-colors

                        ${
                          isActive
                            ? `
                              border-coral
                              font-medium
                              text-coral
                            `
                            : `
                              border-transparent
                              text-navy-mute
                              hover:border-coral/40
                              hover:text-coral
                            `
                        }
                      `}
                    >
                      {section.label}
                    </a>
                  );

                })}

              </nav>

            </div>

          </aside>

        </div>

      </main>


      {/* ======================================================
          SELLIO FOOTER
      ====================================================== */}

      <Footer />

    </>
  );
}