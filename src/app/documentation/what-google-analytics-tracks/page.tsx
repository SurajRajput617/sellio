"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Copy,
  Check,
  Info,
  BarChart3,
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
    id: "tracking-visibility",
    label: "Where Your Tracking Tag Lives",
  },
  {
    id: "automatic-data",
    label: "What Analytics Collects Automatically",
  },
  {
    id: "not-tracked",
    label: "What Is Not Tracked Automatically",
  },
  {
    id: "data-layer",
    label: "The Data Layer",
  },
  {
    id: "improve-tracking",
    label: "Improve Your Google Analytics Tracking",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function WhatGoogleAnalyticsTracksPage() {
  const [activeSection, setActiveSection] =
    useState("overview");

  const [copied, setCopied] =
    useState(false);

  /* ============================================================
     SCROLL SPY
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 180;

      let currentSection =
        sections[0].id;

      sections.forEach((section) => {
        const element =
          document.getElementById(section.id);

        if (!element) return;

        if (
          element.offsetTop <=
          scrollPosition
        ) {
          currentSection =
            section.id;
        }
      });

      setActiveSection(
        currentSection
      );
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
     EXAMPLE EVENT
  ============================================================ */

  const eventExample = `{
  "event": "product_view",
  "product_id": "SL-1048",
  "product_name": "Example Product",
  "value": 42.00,
  "currency": "GBP"
}`;

  /* ============================================================
     COPY
  ============================================================ */

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(
        eventExample
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
          DOCUMENTATION PAGE
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
              LEFT DOCUMENTATION SIDEBAR
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
                OVERVIEW
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
                Analytics
              </p>


              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-tight
                "
              >
                What Google Analytics Tracks
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
                Google Analytics helps you understand how
                visitors interact with your Sellio
                storefront and which parts of the customer
                journey receive the most activity.
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
                This guide explains the types of website
                activity that can be measured and how that
                information can help you make better
                decisions about your store.
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
                    Analytics information is useful when
                    viewed as a complete customer journey,
                    rather than as a collection of individual
                    numbers.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                WHERE TRACKING TAG LIVES
            ================================================== */}

            <section
              id="tracking-visibility"
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
                Where Your Tracking Tag Lives
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Your analytics tracking configuration needs
                to be available across the pages you want
                to measure. For a Sellio storefront, this
                normally means placing the configuration in
                the site's global tracking area.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A correctly configured tracking setup allows
                analytics tools to receive activity as
                customers browse your storefront.
              </p>


              <ol
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Open your Sellio store settings.",
                  "Locate the available analytics or tracking configuration.",
                  "Add the measurement information supplied by Google Analytics.",
                  "Save the configuration and open your storefront.",
                  "Use your analytics reporting tools to verify incoming activity.",
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
                  NOTE
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

                <p
                  className="
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  If your tracking configuration is added
                  only to one page, analytics may not receive
                  activity from the rest of your storefront.
                </p>

              </div>

            </section>


            {/* ==================================================
                AUTOMATIC DATA
            ================================================== */}

            <section
              id="automatic-data"
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
                What Analytics Collects Automatically
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Once your analytics setup is working,
                standard website activity can provide useful
                information about how visitors move through
                your Sellio store.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Depending on your configuration, this can
                include information such as:
              </p>


              <ul
                className="
                  mt-5
                  list-disc
                  space-y-2
                  pl-5
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >

                <li>
                  Pages that visitors view.
                </li>

                <li>
                  The general source of website visits.
                </li>

                <li>
                  Interactions with important storefront
                  pages.
                </li>

                <li>
                  Product and ecommerce activity when
                  appropriate tracking is configured.
                </li>

                <li>
                  Information that helps you understand
                  visitor engagement.
                </li>

              </ul>


              {/* ==================================================
                  AUTOMATIC DATA CARDS
              ================================================== */}

              <div
                className="
                  mt-6
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >

                {[
                  {
                    title: "Page activity",
                    text:
                      "Understand which areas of your storefront receive visitor activity.",
                  },
                  {
                    title: "Traffic sources",
                    text:
                      "See where visitors are coming from and compare different acquisition sources.",
                  },
                  {
                    title: "Product activity",
                    text:
                      "Measure product interactions when ecommerce tracking is configured.",
                  },
                  {
                    title: "Customer journey",
                    text:
                      "Use multiple events together to understand how visitors move toward a purchase.",
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

            </section>


            {/* ==================================================
                NOT TRACKED AUTOMATICALLY
            ================================================== */}

            <section
              id="not-tracked"
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
                What Is Not Tracked Automatically
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Standard analytics tracking does not mean
                every business-specific action will be
                measured automatically. Some actions require
                additional configuration or custom event
                tracking.
              </p>


              <ul
                className="
                  mt-5
                  list-disc
                  space-y-2
                  pl-5
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >

                <li>
                  Custom interactions that are unique to
                  your storefront.
                </li>

                <li>
                  Business-specific actions that are not
                  part of standard website measurement.
                </li>

                <li>
                  Custom values that require additional
                  event configuration.
                </li>

                <li>
                  Internal store information that you have
                  not intentionally configured for analytics.
                </li>

              </ul>


              {/* ==================================================
                  CUSTOM EVENT CODE
              ================================================== */}

              <div
                className="
                  mt-6
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

                    <BarChart3
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
                      Example event
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
                          className="
                            h-3.5
                            w-3.5
                          "
                        />

                        Copied
                      </>
                    ) : (
                      <>
                        <Copy
                          className="
                            h-3.5
                            w-3.5
                          "
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
                    {eventExample}
                  </code>
                </pre>

              </div>

            </section>
                        {/* ==================================================
                THE DATA LAYER
            ================================================== */}

            <section
              id="data-layer"
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
                The Data Layer
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                If you need more control over the information
                sent to your analytics platform, a data layer
                can provide a structured way to pass useful
                ecommerce details with an event.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                For Sellio stores, this can be useful when
                you want analytics reports to contain more
                context about products, orders, or customer
                actions.
              </p>


              {/* ==================================================
                  DATA TABLE
              ================================================== */}

              <div
                className="
                  mt-6
                  overflow-x-auto
                  rounded-lg
                  border
                  border-border
                "
              >

                <table
                  className="
                    w-full
                    min-w-[650px]
                    text-left
                    text-sm
                  "
                >

                  <thead
                    className="
                      bg-black/5
                    "
                  >

                    <tr>

                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        Field
                      </th>

                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        Purpose
                      </th>

                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        Example
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    <tr
                      className="
                        border-t
                        border-border
                      "
                    >

                      <td
                        className="
                          px-4
                          py-4
                          font-mono
                          text-xs
                          text-coral
                        "
                      >
                        event
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Identifies the customer action.
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          font-mono
                          text-xs
                          text-navy-mute
                        "
                      >
                        product_view
                      </td>

                    </tr>


                    <tr
                      className="
                        border-t
                        border-border
                      "
                    >

                      <td
                        className="
                          px-4
                          py-4
                          font-mono
                          text-xs
                          text-coral
                        "
                      >
                        product_id
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Identifies the product associated
                        with the event.
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          font-mono
                          text-xs
                          text-navy-mute
                        "
                      >
                        SL-1048
                      </td>

                    </tr>


                    <tr
                      className="
                        border-t
                        border-border
                      "
                    >

                      <td
                        className="
                          px-4
                          py-4
                          font-mono
                          text-xs
                          text-coral
                        "
                      >
                        value
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Represents the monetary value
                        associated with the event.
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          font-mono
                          text-xs
                          text-navy-mute
                        "
                      >
                        42.00
                      </td>

                    </tr>


                    <tr
                      className="
                        border-t
                        border-border
                      "
                    >

                      <td
                        className="
                          px-4
                          py-4
                          font-mono
                          text-xs
                          text-coral
                        "
                      >
                        currency
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Identifies the currency used
                        for the value.
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          font-mono
                          text-xs
                          text-navy-mute
                        "
                      >
                        GBP
                      </td>

                    </tr>


                    <tr
                      className="
                        border-t
                        border-border
                      "
                    >

                      <td
                        className="
                          px-4
                          py-4
                          font-mono
                          text-xs
                          text-coral
                        "
                      >
                        items
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Contains information about
                        products involved in the event.
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          font-mono
                          text-xs
                          text-navy-mute
                        "
                      >
                        Product data
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>


              {/* ==================================================
                  DATA LAYER EXAMPLE
              ================================================== */}

              <div
                className="
                  mt-6
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                  bg-[#101a2c]
                "
              >

                <div
                  className="
                    border-b
                    border-white/10
                    px-4
                    py-3
                  "
                >

                  <span
                    className="
                      text-xs
                      text-white/70
                    "
                  >
                    Example data
                  </span>

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
                  <code>{`window.dataLayer =
  window.dataLayer || [];

window.dataLayer.push({
  event: "product_view",
  product_id: "SL-1048",
  product_name: "Example Product",
  value: 42.00,
  currency: "GBP"
});`}</code>
                </pre>

              </div>


              <div
                className="
                  mt-5
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
                    Only send information that you have a
                    legitimate reason and permission to use
                    for analytics. Avoid putting sensitive
                    customer information into analytics
                    events.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                IMPROVE GOOGLE ANALYTICS TRACKING
            ================================================== */}

            <section
              id="improve-tracking"
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
                Improve Your Google Analytics Tracking
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A basic tracking setup is a good starting
                point, but you can get more useful reports
                by making sure your important ecommerce
                actions are measured consistently.
              </p>


              <div
                className="
                  mt-6
                  space-y-4
                "
              >

                {/* ==================================================
                    STEP 1
                ================================================== */}

                <div
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-coral
                      text-xs
                      font-bold
                      text-white
                    "
                  >
                    1
                  </span>


                  <div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      Measure important customer actions
                    </h3>


                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Focus on actions that help you
                      understand how visitors move through
                      your store.
                    </p>

                  </div>

                </div>


                {/* ==================================================
                    STEP 2
                ================================================== */}

                <div
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-coral
                      text-xs
                      font-bold
                      text-white
                    "
                  >
                    2
                  </span>


                  <div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      Keep event names consistent
                    </h3>


                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Use clear and consistent event names
                      so reports remain easier to understand
                      over time.
                    </p>

                  </div>

                </div>


                {/* ==================================================
                    STEP 3
                ================================================== */}

                <div
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-coral
                      text-xs
                      font-bold
                      text-white
                    "
                  >
                    3
                  </span>


                  <div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      Connect events with ecommerce data
                    </h3>


                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Include useful product and transaction
                      context when your tracking setup
                      requires it.
                    </p>

                  </div>

                </div>


                {/* ==================================================
                    STEP 4
                ================================================== */}

                <div
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-coral
                      text-xs
                      font-bold
                      text-white
                    "
                  >
                    4
                  </span>


                  <div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      Review your reports regularly
                    </h3>


                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Look for changes in traffic, product
                      activity, customer behavior, and
                      conversions.
                    </p>

                  </div>

                </div>

              </div>


              {/* ==================================================
                  BEST PRACTICE CALLOUT
              ================================================== */}

              <div
                className="
                  mt-7
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

                  <Info
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
                      Keep your analytics setup focused
                    </p>


                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Tracking more information is not
                      always better. Start with the metrics
                      that directly support your store goals
                      and expand your setup when you have a
                      clear reason to do so.
                    </p>

                  </div>

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
                  If your Google Analytics reports do not
                  show the activity you expect, first check
                  your measurement ID and tracking
                  configuration.
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
                  If the setup still does not work as
                  expected, contact Sellio support for help
                  reviewing your analytics configuration.
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
                    className="
                      h-4
                      w-4
                    "
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
                Continue exploring Sellio documentation
                for more information about analytics and
                ecommerce tracking.
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
                    CONVERSION TRACKING
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
                    Analytics
                  </p>


                  <h3
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      group-hover:text-coral
                    "
                  >
                    Conversion Event Tracking
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Learn how important ecommerce actions
                    can help you understand customer
                    activity.
                  </p>



                </Link>


                {/* ==================================================
                    DASHBOARD
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
                    Analytics
                  </p>


                  <h3
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      group-hover:text-coral
                    "
                  >
                    Dashboard Overview
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Learn how to review important store
                    metrics and understand your Sellio
                    analytics.
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
                href="/documentation/google-analytics"
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
                    className="
                      h-4
                      w-4
                    "
                  />

                  Google Analytics

                </div>

              </Link>


              {/* ==================================================
                  NEXT
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

                 UTM Tags

                  <ArrowRight
                    className="
                      h-4
                      w-4
                    "
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
              RIGHT SIDE — ON THIS PAGE
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
                      onClick={() =>
                        setActiveSection(
                          section.id
                        )
                      }
                      className={`
                        block
                        border-l-2
                        py-1
                        pl-3
                        text-sm
                        leading-5
                        transition-colors
                        duration-200

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