"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  Info,
  ShoppingCart,
  TrendingUp,
  BarChart3,
  Code2,
  CircleCheck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

/* ============================================================
   ON THIS PAGE
============================================================ */

const sections = [
  { id: "overview", label: "Overview" },
  {
    id: "why-conversion-tracking",
    label: "Why Conversion Tracking Matters",
  },
  {
    id: "core-events",
    label: "Core Ecommerce Events",
  },
  {
    id: "customer-journey",
    label: "Example Customer Journey",
  },
  {
    id: "purchase-tracking",
    label: "Purchase Tracking",
  },
  {
    id: "marketing-integrations",
    label: "Marketing Integrations",
  },
  {
    id: "conversion-data",
    label: "Viewing Conversion Data",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
  },
  {
    id: "need-help",
    label: "Need Help?",
  },
];

/* ============================================================
   EVENT DATA
============================================================ */

const ecommerceEvents = [
  {
    event: "product_view",
    description:
      "Records when a customer views a product.",
    when:
      "When a product detail page is viewed.",
  },
  {
    event: "add_to_cart",
    description:
      "Records when a customer adds a product to their cart.",
    when:
      "When an item is added to the shopping cart.",
  },
  {
    event: "begin_checkout",
    description:
      "Records when a customer starts the checkout process.",
    when:
      "When checkout begins.",
  },
  {
    event: "purchase",
    description:
      "Records a completed order and its value.",
    when:
      "After an order is successfully completed.",
  },
  {
    event: "email_signup",
    description:
      "Records when a visitor subscribes to email updates.",
    when:
      "When an email subscription is completed.",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function ConversionEventTrackingPage() {
  const [activeSection, setActiveSection] =
    useState("overview");

  const [copied, setCopied] = useState(false);

  const [openFaq, setOpenFaq] = useState<string | null>(
    null
  );

  /* ============================================================
     ACTIVE SECTION
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 180;

      let current = sections[0].id;

      sections.forEach((item) => {
        const element =
          document.getElementById(item.id);

        if (
          element &&
          element.offsetTop <= position
        ) {
          current = item.id;
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
     COPY CODE
  ============================================================ */

  const eventPayload = `{
  "event": "purchase",
  "order_id": "SL-1048",
  "value": 84.00,
  "currency": "GBP",
  "items": 2
}`;

  const copyPayload = async () => {
    try {
      await navigator.clipboard.writeText(
        eventPayload
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
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          PAGE
      ===================================================== */}

      <main className="min-h-screen bg-paper text-navy">

        <div
          className="
            container-xl
            grid
            gap-10
            py-12
            lg:grid-cols-[250px_minmax(0,1fr)_210px]
          "
        >

          {/* =================================================
              LEFT DOCUMENTATION SIDEBAR
          ================================================= */}

          <DocumentationSidebar />


          {/* =================================================
              MAIN ARTICLE
          ================================================= */}

          <article className="min-w-0">


            {/* =================================================
                INTRO
            ================================================= */}

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
                Advanced Analytics
              </p>


              <h1
                className="
                  mt-3
                  text-4xl
                  font-bold
                  tracking-tight
                "
              >
                Conversion Event Tracking
              </h1>


              <p
                className="
                  mt-4
                  max-w-3xl
                  text-base
                  leading-7
                  text-navy-mute
                "
              >
                Learn how Sellio tracks important
                ecommerce actions and how conversion
                events can help you understand what
                customers do before completing a
                purchase.
              </p>


              {/* INTRO CALLOUT */}

              <div
                className="
                  mt-6
                  flex
                  items-start
                  gap-3
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-4
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
                  Conversion events turn customer
                  actions into useful data that can
                  help you understand how visitors
                  move through your store.
                </p>

              </div>

            </section>


            {/* =================================================
                WHY CONVERSION TRACKING MATTERS
            ================================================= */}

            <section
              id="why-conversion-tracking"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2 className="text-xl font-bold">
                Why Conversion Tracking Matters
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Conversion tracking gives you a clearer
                picture of what happens between a visitor
                arriving at your store and completing an
                order.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Instead of looking only at final sales,
                you can understand the actions customers
                take along the way.
              </p>


              {/* QUESTIONS CARD */}

              <div
                className="
                  mt-6
                  rounded-xl
                  border
                  border-border
                  bg-white/40
                  p-5
                "
              >

                <div className="flex items-start gap-3">

                  <TrendingUp
                    className="
                      mt-0.5
                      h-5
                      w-5
                      shrink-0
                      text-coral
                    "
                  />

                  <div>

                    <h3 className="font-semibold">
                      What can conversion data tell you?
                    </h3>


                    <ul
                      className="
                        mt-4
                        space-y-3
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >

                      <li>
                        • Which products generate the
                        most purchases?
                      </li>

                      <li>
                        • Where are customers leaving
                        the buying journey?
                      </li>

                      <li>
                        • Which marketing channels
                        generate revenue?
                      </li>

                      <li>
                        • Are visitors adding products
                        to cart but not purchasing?
                      </li>

                      <li>
                        • Which pages could be improved?
                      </li>

                    </ul>

                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                CORE EVENTS
            ================================================= */}

            <section
              id="core-events"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2 className="text-xl font-bold">
                Core Ecommerce Events
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Sellio conversion tracking can be
                organized around common ecommerce
                actions. Each event represents a
                meaningful step in the customer journey.
              </p>


              {/* TABLE */}

              <div
                className="
                  mt-6
                  overflow-x-auto
                  rounded-xl
                  border
                  border-border
                "
              >

                <table
                  className="
                    w-full
                    min-w-[680px]
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

                      <th className="px-4 py-3 font-semibold">
                        Event
                      </th>

                      <th className="px-4 py-3 font-semibold">
                        Description
                      </th>

                      <th className="px-4 py-3 font-semibold">
                        When it happens
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {ecommerceEvents.map(
                      (item) => (
                        <tr
                          key={item.event}
                          className="
                            border-t
                            border-border
                          "
                        >

                          <td
                            className="
                              whitespace-nowrap
                              px-4
                              py-4
                              font-mono
                              text-xs
                              font-semibold
                              text-coral
                            "
                          >
                            {item.event}
                          </td>

                          <td
                            className="
                              px-4
                              py-4
                              text-navy-mute
                            "
                          >
                            {item.description}
                          </td>

                          <td
                            className="
                              px-4
                              py-4
                              text-navy-mute
                            "
                          >
                            {item.when}
                          </td>

                        </tr>
                      )
                    )}

                  </tbody>

                </table>

              </div>

            </section>


            {/* =================================================
                CUSTOMER JOURNEY
            ================================================= */}

            <section
              id="customer-journey"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2 className="text-xl font-bold">
                Example Customer Journey
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A simple conversion journey shows how
                several customer actions can connect to
                one completed order.
              </p>


              {/* FLOW */}

              <div className="mt-7">

                {/* PRODUCT */}

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                    p-5
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-black/5
                      "
                    >

                      <BarChart3
                        className="
                          h-5
                          w-5
                          text-coral
                        "
                      />

                    </div>


                    <div>

                      <p className="text-xs text-navy-mute">
                        Event 01
                      </p>

                      <h3 className="font-semibold">
                        Product Viewed
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-navy-mute
                        "
                      >
                        The customer views a product.
                      </p>

                    </div>

                  </div>

                </div>


                <div
                  className="
                    flex
                    justify-center
                    py-3
                  "
                >
                  <ArrowRight
                    className="
                      rotate-90
                      h-5
                      w-5
                      text-coral
                    "
                  />
                </div>


                {/* CART */}

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                    p-5
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-black/5
                      "
                    >

                      <ShoppingCart
                        className="
                          h-5
                          w-5
                          text-coral
                        "
                      />

                    </div>


                    <div>

                      <p className="text-xs text-navy-mute">
                        Event 02
                      </p>

                      <h3 className="font-semibold">
                        Added to Cart
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-navy-mute
                        "
                      >
                        The customer adds a product.
                      </p>

                    </div>

                  </div>

                </div>


                <div
                  className="
                    flex
                    justify-center
                    py-3
                  "
                >
                  <ArrowRight
                    className="
                      rotate-90
                      h-5
                      w-5
                      text-coral
                    "
                  />
                </div>


                {/* CHECKOUT */}

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                    p-5
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-black/5
                      "
                    >

                      <Activity
                        className="
                          h-5
                          w-5
                          text-coral
                        "
                      />

                    </div>


                    <div>

                      <p className="text-xs text-navy-mute">
                        Event 03
                      </p>

                      <h3 className="font-semibold">
                        Checkout Started
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-navy-mute
                        "
                      >
                        The customer starts checkout.
                      </p>

                    </div>

                  </div>

                </div>


                <div
                  className="
                    flex
                    justify-center
                    py-3
                  "
                >
                  <ArrowRight
                    className="
                      rotate-90
                      h-5
                      w-5
                      text-coral
                    "
                  />
                </div>


                {/* PURCHASE */}

                <div
                  className="
                    rounded-xl
                    border
                    border-coral/30
                    bg-black/5
                    p-5
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral
                        text-white
                      "
                    >

                      <Check
                        className="h-5 w-5"
                      />

                    </div>


                    <div>

                      <p className="text-xs text-navy-mute">
                        Event 04
                      </p>

                      <h3 className="font-semibold">
                        Purchase Completed
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-navy-mute
                        "
                      >
                        The order is successfully completed.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                PURCHASE TRACKING
            ================================================= */}

            <section
              id="purchase-tracking"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2 className="text-xl font-bold">
                Purchase Tracking
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Completed purchases are one of the
                most useful conversion events because
                they connect customer behaviour with
                actual order value.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A purchase event can include information
                such as the order reference, transaction
                value, currency, and number of items.
              </p>


              {/* CODE BLOCK */}

              <div
                className="
                  mt-6
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#27334a]
                  bg-[#101a2c]
                "
              >

                {/* CODE HEADER */}

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

                    <Code2
                      className="
                        h-4
                        w-4
                        text-white/60
                      "
                    />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      Example event
                    </span>

                  </div>


                  <button
                    type="button"
                    onClick={copyPayload}
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
                      transition
                      hover:border-white/25
                      hover:text-white
                    "
                  >

                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy
                      </>
                    )}

                  </button>

                </div>


                {/* CODE */}

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
                    {eventPayload}
                  </code>
                </pre>

              </div>

            </section>


            {/* =================================================
                MARKETING INTEGRATIONS
            ================================================= */}

            <section
              id="marketing-integrations"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2 className="text-xl font-bold">
                Marketing Integrations
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Conversion events can also provide
                useful information for supported
                marketing and analytics integrations.
              </p>


              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >

                {/* GOOGLE */}

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                    p-5
                  "
                >

                  <h3 className="font-semibold">
                    Google Analytics & Advertising
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Use relevant conversion information
                    to better understand traffic and
                    customer actions.
                  </p>

                </div>


                {/* META */}

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                    p-5
                  "
                >

                  <h3 className="font-semibold">
                    Meta Pixel
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Conversion activity can support
                    relevant Meta marketing and
                    measurement workflows.
                  </p>

                </div>


                {/* EMAIL */}

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                    p-5
                  "
                >

                  <h3 className="font-semibold">
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
                    Use customer actions to understand
                    how email activity contributes to
                    store engagement.
                  </p>

                </div>


                {/* SELLIO */}

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                    p-5
                  "
                >

                  <h3 className="font-semibold">
                    Sellio Analytics
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Review conversion activity alongside
                    your broader Sellio store data.
                  </p>

                </div>

              </div>


              <div
                className="
                  mt-6
                  flex
                  items-start
                  gap-3
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-4
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
                  Available integrations may depend on
                  your Sellio configuration and the
                  external platform you use.
                </p>

              </div>

            </section>


            {/* =================================================
                VIEWING CONVERSION DATA
            ================================================= */}

            <section
              id="conversion-data"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2 className="text-xl font-bold">
                Viewing Conversion Data
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use the Sellio dashboard to bring
                customer activity and store performance
                into one place.
              </p>


              {/* DASHBOARD PREVIEW */}

              <div
                className="
                  mt-6
                  overflow-hidden
                  rounded-xl
                  border
                  border-border
                  bg-white/50
                "
              >

                {/* DASHBOARD HEADER */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-border
                    px-5
                    py-4
                  "
                >

                  <div>

                    <p
                      className="
                        text-xs
                        text-navy-mute
                      "
                    >
                      Sellio Analytics
                    </p>

                    <h3
                      className="
                        mt-1
                        font-semibold
                      "
                    >
                      Conversion Overview
                    </h3>

                  </div>


                  <span
                    className="
                      rounded-full
                      bg-black/5
                      px-3
                      py-1
                      text-xs
                      text-navy-mute
                    "
                  >
                    Last 30 days
                  </span>

                </div>


                {/* METRICS */}

                <div
                  className="
                    grid
                    gap-px
                    bg-border
                    sm:grid-cols-2
                    lg:grid-cols-4
                  "
                >

                  <div
                    className="
                      bg-paper
                      p-5
                    "
                  >

                    <p className="text-xs text-navy-mute">
                      Revenue
                    </p>

                    <p className="mt-2 text-xl font-bold">
                      £18,420
                    </p>

                    <p className="mt-1 text-xs text-coral">
                      +12.4%
                    </p>

                  </div>


                  <div
                    className="
                      bg-paper
                      p-5
                    "
                  >

                    <p className="text-xs text-navy-mute">
                      Orders
                    </p>

                    <p className="mt-2 text-xl font-bold">
                      428
                    </p>

                    <p className="mt-1 text-xs text-coral">
                      +8.2%
                    </p>

                  </div>


                  <div
                    className="
                      bg-paper
                      p-5
                    "
                  >

                    <p className="text-xs text-navy-mute">
                      Conversion Rate
                    </p>

                    <p className="mt-2 text-xl font-bold">
                      4.8%
                    </p>

                    <p className="mt-1 text-xs text-coral">
                      +0.6%
                    </p>

                  </div>


                  <div
                    className="
                      bg-paper
                      p-5
                    "
                  >

                    <p className="text-xs text-navy-mute">
                      Average Order
                    </p>

                    <p className="mt-2 text-xl font-bold">
                      £43.04
                    </p>

                    <p className="mt-1 text-xs text-coral">
                      +3.1%
                    </p>

                  </div>

                </div>


                {/* SECOND ROW */}

                <div
                  className="
                    grid
                    gap-4
                    p-5
                    sm:grid-cols-3
                  "
                >

                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-4
                    "
                  >

                    <p className="text-xs text-navy-mute">
                      Traffic Sources
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                      Search
                    </p>

                    <div
                      className="
                        mt-3
                        h-2
                        overflow-hidden
                        rounded-full
                        bg-black/5
                      "
                    >

                      <div
                        className="
                          h-full
                          w-[72%]
                          rounded-full
                          bg-coral
                        "
                      />

                    </div>

                    <p className="mt-2 text-xs text-navy-mute">
                      72%
                    </p>

                  </div>


                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-4
                    "
                  >

                    <p className="text-xs text-navy-mute">
                      Top Product
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                      Premium Cotton Tee
                    </p>

                    <p className="mt-2 text-xs text-navy-mute">
                      96 purchases
                    </p>

                  </div>


                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-4
                    "
                  >

                    <p className="text-xs text-navy-mute">
                      Cart Activity
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                      1,284 adds
                    </p>

                    <p className="mt-2 text-xs text-navy-mute">
                      428 completed orders
                    </p>

                  </div>

                </div>

              </div>


              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Depending on your configuration, useful
                metrics may include revenue, orders,
                conversion rate, average order value,
                traffic sources, and top products.
              </p>

            </section>


            {/* =================================================
                TROUBLESHOOTING
            ================================================= */}

            <section
              id="troubleshooting"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2 className="text-xl font-bold">
                Troubleshooting
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                If conversion data does not look
                correct, use the checks below before
                contacting support.
              </p>


              <div className="mt-6 space-y-3">


                {/* FAQ 1 */}

                <div
                  className="
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        openFaq === "purchase"
                          ? null
                          : "purchase"
                      )
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-5
                      py-4
                      text-left
                      text-sm
                      font-semibold
                    "
                    aria-expanded={
                      openFaq === "purchase"
                    }
                  >

                    Purchase event is not appearing

                    <ChevronDown
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        ${
                          openFaq === "purchase"
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />

                  </button>


                  {openFaq === "purchase" && (
                    <div
                      className="
                        border-t
                        border-border
                        px-5
                        py-4
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Check that the order completed
                      successfully and that your
                      tracking configuration is active.
                      Then review the relevant analytics
                      source again.
                    </div>
                  )}

                </div>


                {/* FAQ 2 */}

                <div
                  className="
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        openFaq === "cart"
                          ? null
                          : "cart"
                      )
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-5
                      py-4
                      text-left
                      text-sm
                      font-semibold
                    "
                    aria-expanded={
                      openFaq === "cart"
                    }
                  >

                    Add to cart events are missing

                    <ChevronDown
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        ${
                          openFaq === "cart"
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />

                  </button>


                  {openFaq === "cart" && (
                    <div
                      className="
                        border-t
                        border-border
                        px-5
                        py-4
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Check that the product interaction
                      is working normally and review the
                      tracking settings connected to your
                      store.
                    </div>
                  )}

                </div>


                {/* FAQ 3 */}

                <div
                  className="
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        openFaq === "revenue"
                          ? null
                          : "revenue"
                      )
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-5
                      py-4
                      text-left
                      text-sm
                      font-semibold
                    "
                    aria-expanded={
                      openFaq === "revenue"
                    }
                  >

                    Revenue does not match my store

                    <ChevronDown
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        ${
                          openFaq === "revenue"
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />

                  </button>


                  {openFaq === "revenue" && (
                    <div
                      className="
                        border-t
                        border-border
                        px-5
                        py-4
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Compare the date range, order
                      status, currency, and data source
                      used by your analytics report.
                    </div>
                  )}

                </div>


                {/* FAQ 4 */}

                <div
                  className="
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        openFaq === "theme"
                          ? null
                          : "theme"
                      )
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-5
                      py-4
                      text-left
                      text-sm
                      font-semibold
                    "
                    aria-expanded={
                      openFaq === "theme"
                    }
                  >

                    Tracking stopped after changing my theme

                    <ChevronDown
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        ${
                          openFaq === "theme"
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />

                  </button>


                  {openFaq === "theme" && (
                    <div
                      className="
                        border-t
                        border-border
                        px-5
                        py-4
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Review your tracking configuration
                      after major theme changes. Confirm
                      that the required analytics settings
                      are still enabled.
                    </div>
                  )}

                </div>

              </div>

            </section>


            {/* =================================================
                NEED HELP
            ================================================= */}

            <section
              id="need-help"
              className="
                scroll-mt-28
                py-8
              "
            >

              <div
                className="
                  rounded-xl
                  border
                  border-coral/30
                  bg-black/5
                  p-6
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-coral
                      text-white
                    "
                  >

                    <CircleCheck
                      className="h-5 w-5"
                    />

                  </div>


                  <div>

                    <h2 className="text-xl font-bold">
                      Need help with conversion tracking?
                    </h2>


                    <p
                      className="
                        mt-3
                        max-w-2xl
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      If your tracking or analytics data
                      does not look correct after checking
                      your configuration, contact Sellio
                      support for assistance.
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
                        transition
                        hover:opacity-90
                      "
                    >

                      Contact Support

                      <ArrowRight
                        className="h-4 w-4"
                      />

                    </Link>

                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                PREVIOUS / NEXT
            ================================================= */}

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

              <Link
                href="/documentation/downloads-reports-overview"
                className="
                  group
                  rounded-xl
                  border
                  border-border
                  px-5
                  py-4
                  transition
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
                  "
                >

                  <ArrowLeft
                    className="
                      h-4
                      w-4
                      transition
                      group-hover:text-coral
                    "
                  />

                  <p className="font-semibold">
                    Downloads-Reports-Overview
                  </p>

                </div>

              </Link>


              <Link
                href="/documentation/custom-twig-block"
                className="
                  group
                  rounded-xl
                  border
                  border-border
                  px-5
                  py-4
                  text-right
                  transition
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
                  "
                >

                  <p className="font-semibold">
                    Custom-Twig-Block
                  </p>


                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition
                      group-hover:text-coral
                    "
                  />

                </div>

              </Link>

            </div>


            <p
              className="
                mt-6
                pb-6
                text-xs
                text-navy-mute
              "
            >
              Last updated recently
            </p>

          </article>


          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

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
                  space-y-4
                "
              >

                {sections.map((item) => {

                  const isActive =
                    activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() =>
                        setActiveSection(item.id)
                      }
                      className={`
                        block
                        text-sm
                        transition-colors
                        duration-200
                        ${
                          isActive
                            ? "font-medium text-coral"
                            : "text-navy-mute hover:text-coral"
                        }
                      `}
                    >
                      {item.label}
                    </a>
                  );

                })}

              </nav>

            </div>

          </aside>

        </div>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </>
  );
}