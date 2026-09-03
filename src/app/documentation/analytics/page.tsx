"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleDollarSign,
  Info,
  LineChart,
  MousePointerClick,
  Package,
  ReceiptText,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

/* =========================================================
   PAGE SECTIONS
========================================================= */

const sections = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "key-metrics",
    label: "Key Metrics",
  },
  {
    id: "revenue",
    label: "Revenue",
  },
  {
    id: "orders",
    label: "Orders",
  },
  {
    id: "conversion",
    label: "Conversion",
  },
  {
    id: "average-order-value",
    label: "Average Order Value",
  },
  {
    id: "traffic-sources",
    label: "Traffic Sources",
  },
  {
    id: "top-products",
    label: "Top Products",
  },
  {
    id: "performance-insights",
    label: "Performance Insights",
  },
  {
    id: "reading-reports",
    label: "Reading Reports",
  },
  {
    id: "best-practices",
    label: "Best Practices",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function AnalyticsPage() {
  const [activeSection, setActiveSection] =
    useState("overview");

  /* =======================================================
     SCROLLSPY
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 170;

      let current = sections[0].id;

      sections.forEach((section) => {
        const element = document.getElementById(
          section.id
        );

        if (!element) return;

        if (element.offsetTop <= position) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      <Navbar />

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
          {/* ==================================================
              LEFT DOCUMENTATION SIDEBAR
          ================================================== */}

          <DocumentationSidebar />

          {/* ==================================================
              MAIN DOCUMENTATION CONTENT
          ================================================== */}

          <article className="min-w-0">
            {/* ==================================================
                OVERVIEW
            ================================================== */}

            <section
              id="overview"
              className="
                scroll-mt-28
                border-b
                border-border
                pb-10
              "
            >
              {/* EYEBROW */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  text-coral
                "
              >
                <BarChart3 className="h-4 w-4" />

                Helpful Info
              </div>

              {/* TITLE */}

              <h1
                className="
                  mt-4
                  text-3xl
                  font-bold
                  tracking-tight
                  sm:text-4xl
                "
              >
                Analytics
              </h1>

              {/* INTRODUCTION */}

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-base
                  leading-7
                  text-navy-mute
                "
              >
                Sellio analytics helps you understand how
                your ecommerce store is performing by
                bringing important sales, order, conversion,
                traffic, and product information into one
                place.
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
                Use these metrics to identify patterns,
                understand which products are performing
                well, and make better-informed decisions
                about your storefront and marketing.
              </p>

              {/* ==================================================
                  INFORMATION BOX
              ================================================== */}

              <div
                className="
                  mt-7
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
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
                        text-navy
                      "
                    >
                      Understand the whole store
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Avoid judging store performance from
                      one number alone. Revenue, orders,
                      conversion, average order value,
                      traffic, and product performance are
                      most useful when viewed together.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  ANALYTICS FLOW
              ================================================== */}

              <div className="mt-8">
                <h2 className="text-base font-bold">
                  From activity to insight
                </h2>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Your analytics dashboard turns storefront
                  activity into metrics that are easier to
                  review and compare.
                </p>

                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    md:grid-cols-3
                  "
                >
                  {/* STORE ACTIVITY */}

                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <ShoppingCart
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-4
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-navy-mute
                      "
                    >
                      Step 1
                    </p>

                    <h3
                      className="
                        mt-1
                        text-sm
                        font-semibold
                      "
                    >
                      Store Activity
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Customers visit your storefront,
                      explore products, and place orders.
                    </p>
                  </div>

                  {/* METRICS */}

                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <BarChart3
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-4
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-navy-mute
                      "
                    >
                      Step 2
                    </p>

                    <h3
                      className="
                        mt-1
                        text-sm
                        font-semibold
                      "
                    >
                      Performance Metrics
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Store activity is summarized into
                      useful ecommerce performance metrics.
                    </p>
                  </div>

                  {/* INSIGHT */}

                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <TrendingUp
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-4
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-navy-mute
                      "
                    >
                      Step 3
                    </p>

                    <h3
                      className="
                        mt-1
                        text-sm
                        font-semibold
                      "
                    >
                      Business Insight
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Compare trends and use the results to
                      guide storefront and marketing
                      decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  WHAT ANALYTICS CAN HELP WITH
              ================================================== */}

              <div className="mt-8">
                <h2 className="text-base font-bold">
                  What analytics can help you understand
                </h2>

                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {[
                    "How much revenue your store is generating.",
                    "How many orders customers are placing.",
                    "How effectively visits turn into orders.",
                    "How much customers spend per order on average.",
                    "Which traffic sources bring visitors to your store.",
                    "Which products contribute most strongly to sales.",
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
                        py-4
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
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ==================================================
                KEY METRICS
            ================================================== */}

            <section
              id="key-metrics"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <LineChart
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Key Metrics
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    The Sellio analytics view focuses on a
                    set of core ecommerce metrics that give
                    you a quick picture of store
                    performance.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  METRIC CARDS
              ================================================== */}

              <div
                className="
                  mt-7
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                {/* REVENUE */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <CircleDollarSign
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-navy-mute
                      "
                    >
                      Sales
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Revenue
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Helps you understand the value of sales
                    recorded during the selected reporting
                    period.
                  </p>

                  <Link
                    href="#revenue"
                    className="
                      group
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    View revenue

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>
                </div>

                {/* ORDERS */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <ReceiptText
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-navy-mute
                      "
                    >
                      Orders
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Orders
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Shows the number of recorded customer
                    orders within the selected reporting
                    period.
                  </p>

                  <Link
                    href="#orders"
                    className="
                      group
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    View orders

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>
                </div>

                {/* CONVERSION */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <MousePointerClick
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-navy-mute
                      "
                    >
                      Performance
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Conversion
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Helps show how effectively storefront
                    traffic turns into completed customer
                    orders.
                  </p>

                  <Link
                    href="#conversion"
                    className="
                      group
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    View conversion

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>
                </div>

                {/* AOV */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <ShoppingCart
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-navy-mute
                      "
                    >
                      Order Value
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Average Order Value
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Shows the average amount associated with
                    each order during the selected period.
                  </p>

                  <Link
                    href="#average-order-value"
                    className="
                      group
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    View order value

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>
                </div>

                {/* TRAFFIC */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <Users
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-navy-mute
                      "
                    >
                      Acquisition
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Traffic Sources
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Helps you understand where visitors are
                    coming from before they reach your
                    storefront.
                  </p>

                  <Link
                    href="#traffic-sources"
                    className="
                      group
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    View traffic

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>
                </div>

                {/* TOP PRODUCTS */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <Package
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-navy-mute
                      "
                    >
                      Products
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Top Products
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Helps identify products contributing
                    strongly to store sales and order
                    activity.
                  </p>

                  <Link
                    href="#top-products"
                    className="
                      group
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    View products

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>
                </div>
              </div>

              {/* ==================================================
                  SAMPLE DASHBOARD PREVIEW
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Analytics dashboard
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A dashboard can surface your most useful
                  metrics together so changes are easier to
                  spot.
                </p>

                <div
                  className="
                    mt-5
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                    p-4
                    sm:p-6
                  "
                >
                  {/* DASHBOARD TOP */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      border-b
                      border-border
                      pb-5
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <div>
                      <p
                        className="
                          text-xs
                          font-semibold
                          text-navy-mute
                        "
                      >
                        Store analytics
                      </p>

                      <p
                        className="
                          mt-1
                          text-lg
                          font-bold
                        "
                      >
                        Performance Overview
                      </p>
                    </div>

                    <div
                      className="
                        inline-flex
                        w-fit
                        items-center
                        rounded-md
                        border
                        border-border
                        bg-paper
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-navy-mute
                      "
                    >
                      Selected period
                    </div>
                  </div>

                  {/* DASHBOARD METRICS */}

                  <div
                    className="
                      mt-5
                      grid
                      gap-3
                      sm:grid-cols-2
                      lg:grid-cols-4
                    "
                  >
                    {[
                      {
                        label: "Revenue",
                        value: "Sales value",
                        icon: CircleDollarSign,
                      },
                      {
                        label: "Orders",
                        value: "Order volume",
                        icon: ReceiptText,
                      },
                      {
                        label: "Conversion",
                        value: "Store efficiency",
                        icon: TrendingUp,
                      },
                      {
                        label: "Avg. order",
                        value: "Order value",
                        icon: ShoppingCart,
                      },
                    ].map((metric) => {
                      const Icon = metric.icon;

                      return (
                        <div
                          key={metric.label}
                          className="
                            rounded-lg
                            border
                            border-border
                            bg-paper
                            p-4
                          "
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-3
                            "
                          >
                            <p
                              className="
                                text-xs
                                text-navy-mute
                              "
                            >
                              {metric.label}
                            </p>

                            <Icon
                              className="
                                h-3.5
                                w-3.5
                                text-coral
                              "
                            />
                          </div>

                          <p
                            className="
                              mt-3
                              text-sm
                              font-semibold
                            "
                          >
                            {metric.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* SIMPLE CHART PLACEHOLDER */}

                  <div
                    className="
                      mt-4
                      rounded-lg
                      border
                      border-border
                      bg-paper
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                    >
                      <div>
                        <p className="text-sm font-semibold">
                          Store performance
                        </p>

                        <p
                          className="
                            mt-1
                            text-xs
                            text-navy-mute
                          "
                        >
                          Performance over the selected
                          reporting period
                        </p>
                      </div>

                      <LineChart
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    {/* VISUAL CHART */}

                    <div
                      className="
                        relative
                        mt-6
                        h-40
                        overflow-hidden
                      "
                    >
                      {/* HORIZONTAL GRID */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          top-0
                          border-t
                          border-dashed
                          border-border
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-x-0
                          top-1/3
                          border-t
                          border-dashed
                          border-border
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-x-0
                          top-2/3
                          border-t
                          border-dashed
                          border-border
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          border-t
                          border-dashed
                          border-border
                        "
                      />

                      {/* SIMPLE TREND LINE */}

                      <svg
                        viewBox="0 0 700 160"
                        preserveAspectRatio="none"
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                        "
                        aria-hidden="true"
                      >
                        <polyline
                          points="
                            0,130
                            70,118
                            140,124
                            210,92
                            280,100
                            350,72
                            420,82
                            490,48
                            560,62
                            630,32
                            700,40
                          "
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          vectorEffect="non-scaling-stroke"
                          className="text-coral"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  IMPORTANT NOTE
              ================================================== */}

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
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
                    Analytics values can vary depending on
                    the selected reporting period and the
                    data available to your store. Compare
                    like-for-like periods when reviewing
                    performance changes.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  NEXT SECTION
              ================================================== */}

              <Link
                href="#revenue"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <CircleDollarSign
                    className="
                      h-4
                      w-4
                      text-coral
                    "
                  />

                  Revenue
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>
                        {/* ==================================================
                REVENUE
            ================================================== */}

            <section
              id="revenue"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <CircleDollarSign
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Revenue
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Revenue helps you understand the value
                    of sales recorded by your store during
                    the selected reporting period.
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Review revenue alongside orders, average
                order value, conversion, and product
                performance. This gives you more context
                than looking at sales value by itself.
              </p>

              {/* ==================================================
                  REVENUE SUMMARY
              ================================================== */}

              <div
                className="
                  mt-7
                  grid
                  gap-4
                  sm:grid-cols-3
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
                  <CircleDollarSign
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <p
                    className="
                      mt-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-navy-mute
                    "
                  >
                    Metric
                  </p>

                  <h3
                    className="
                      mt-1
                      text-sm
                      font-semibold
                    "
                  >
                    Sales Value
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Review the sales value associated with
                    the selected reporting period.
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
                  <LineChart
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <p
                    className="
                      mt-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-navy-mute
                    "
                  >
                    Trend
                  </p>

                  <h3
                    className="
                      mt-1
                      text-sm
                      font-semibold
                    "
                  >
                    Revenue Over Time
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Compare different points in the period
                    to identify increases, decreases, and
                    recurring patterns.
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
                  <TrendingUp
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <p
                    className="
                      mt-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-navy-mute
                    "
                  >
                    Comparison
                  </p>

                  <h3
                    className="
                      mt-1
                      text-sm
                      font-semibold
                    "
                  >
                    Period Performance
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Compare equivalent reporting periods to
                    understand whether store performance is
                    changing.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  REVENUE REPORT EXAMPLE
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Reading your revenue report
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Revenue reports are most useful when the
                  selected date range is clear and the
                  surrounding store activity is considered.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                  "
                >
                  {/* REPORT HEADER */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      border-b
                      border-border
                      p-5
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <div>
                      <p
                        className="
                          text-xs
                          text-navy-mute
                        "
                      >
                        Analytics
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                        "
                      >
                        Revenue Performance
                      </p>
                    </div>

                    <div
                      className="
                        w-fit
                        rounded-md
                        border
                        border-border
                        bg-paper
                        px-3
                        py-2
                        text-xs
                        text-navy-mute
                      "
                    >
                      Selected period
                    </div>
                  </div>

                  {/* REPORT BODY */}

                  <div className="p-5">
                    <div
                      className="
                        grid
                        gap-3
                        sm:grid-cols-3
                      "
                    >
                      <div
                        className="
                          rounded-lg
                          border
                          border-border
                          bg-paper
                          p-4
                        "
                      >
                        <p
                          className="
                            text-xs
                            text-navy-mute
                          "
                        >
                          Revenue
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            font-semibold
                          "
                        >
                          Current period
                        </p>
                      </div>

                      <div
                        className="
                          rounded-lg
                          border
                          border-border
                          bg-paper
                          p-4
                        "
                      >
                        <p
                          className="
                            text-xs
                            text-navy-mute
                          "
                        >
                          Orders
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            font-semibold
                          "
                        >
                          Order volume
                        </p>
                      </div>

                      <div
                        className="
                          rounded-lg
                          border
                          border-border
                          bg-paper
                          p-4
                        "
                      >
                        <p
                          className="
                            text-xs
                            text-navy-mute
                          "
                        >
                          Avg. Order
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            font-semibold
                          "
                        >
                          Average value
                        </p>
                      </div>
                    </div>

                    {/* REVENUE CHART */}

                    <div
                      className="
                        mt-4
                        rounded-lg
                        border
                        border-border
                        bg-paper
                        p-5
                      "
                    >
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-4
                        "
                      >
                        <div>
                          <p
                            className="
                              text-sm
                              font-semibold
                            "
                          >
                            Revenue trend
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              text-navy-mute
                            "
                          >
                            Sales value across the selected
                            reporting period
                          </p>
                        </div>

                        <LineChart
                          className="
                            h-4
                            w-4
                            shrink-0
                            text-coral
                          "
                        />
                      </div>

                      <div
                        className="
                          relative
                          mt-6
                          h-44
                          overflow-hidden
                        "
                      >
                        {/* GRID */}

                        <div
                          className="
                            absolute
                            inset-x-0
                            top-0
                            border-t
                            border-dashed
                            border-border
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-x-0
                            top-1/4
                            border-t
                            border-dashed
                            border-border
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-x-0
                            top-2/4
                            border-t
                            border-dashed
                            border-border
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-x-0
                            top-3/4
                            border-t
                            border-dashed
                            border-border
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-x-0
                            bottom-0
                            border-t
                            border-dashed
                            border-border
                          "
                        />

                        {/* TREND */}

                        <svg
                          viewBox="0 0 700 176"
                          preserveAspectRatio="none"
                          className="
                            absolute
                            inset-0
                            h-full
                            w-full
                          "
                          aria-hidden="true"
                        >
                          <polyline
                            points="
                              0,142
                              70,130
                              140,138
                              210,104
                              280,114
                              350,78
                              420,94
                              490,58
                              560,72
                              630,38
                              700,50
                            "
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                            className="text-coral"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  WHAT CAN CHANGE REVENUE
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  What can influence revenue?
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A revenue change can come from several
                  parts of your store, so look at related
                  metrics before drawing conclusions.
                </p>

                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {[
                    {
                      title: "Order volume",
                      text: "More or fewer customer orders can change total sales value.",
                      icon: ReceiptText,
                    },
                    {
                      title: "Average order value",
                      text: "Changes in how much customers spend per order can affect revenue.",
                      icon: ShoppingCart,
                    },
                    {
                      title: "Store traffic",
                      text: "Changes in visitor volume may affect the number of opportunities to generate orders.",
                      icon: Users,
                    },
                    {
                      title: "Conversion",
                      text: "A change in the proportion of visits that become orders can affect sales performance.",
                      icon: MousePointerClick,
                    },
                    {
                      title: "Product performance",
                      text: "Strong or weak performance from individual products can influence overall store results.",
                      icon: Package,
                    },
                    {
                      title: "Marketing activity",
                      text: "Campaigns and traffic-source changes can influence visits and customer purchasing activity.",
                      icon: TrendingUp,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="
                          flex
                          items-start
                          gap-4
                          rounded-lg
                          border
                          border-border
                          p-4
                        "
                      >
                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-coral/10
                          "
                        >
                          <Icon
                            className="
                              h-4
                              w-4
                              text-coral
                            "
                          />
                        </div>

                        <div>
                          <p
                            className="
                              text-sm
                              font-semibold
                            "
                          >
                            {item.title}
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ==================================================
                  REVENUE INTERPRETATION
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Interpreting revenue changes
                </h3>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >
                  <div
                    className="
                      hidden
                      grid-cols-[170px_minmax(0,1fr)]
                      border-b
                      border-border
                      bg-black/[0.035]
                      px-4
                      py-3
                      sm:grid
                    "
                  >
                    <p className="text-xs font-semibold">
                      Observation
                    </p>

                    <p className="text-xs font-semibold">
                      What to review
                    </p>
                  </div>

                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[170px_minmax(0,1fr)]
                      sm:gap-4
                    "
                  >
                    <p className="text-sm font-medium">
                      Revenue increased
                    </p>

                    <p
                      className="
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Check whether orders, average order
                      value, conversion, or high-performing
                      products also increased.
                    </p>
                  </div>

                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[170px_minmax(0,1fr)]
                      sm:gap-4
                    "
                  >
                    <p className="text-sm font-medium">
                      Revenue decreased
                    </p>

                    <p
                      className="
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Review traffic, order volume,
                      conversion, product availability, and
                      changes in average order value.
                    </p>
                  </div>

                  <div
                    className="
                      grid
                      gap-2
                      px-4
                      py-4
                      sm:grid-cols-[170px_minmax(0,1fr)]
                      sm:gap-4
                    "
                  >
                    <p className="text-sm font-medium">
                      Revenue is uneven
                    </p>

                    <p
                      className="
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Compare several equivalent periods to
                      determine whether the variation is a
                      recurring pattern or a short-term
                      change.
                    </p>
                  </div>
                </div>
              </div>

              {/* REVENUE NOTE */}

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
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
                    Make sure you understand what your
                    implementation includes in its revenue
                    calculation before comparing it with
                    another platform or financial report.
                    Refunds, discounts, shipping, taxes, and
                    other adjustments may be represented
                    differently between systems.
                  </p>
                </div>
              </div>

              {/* NEXT */}

              <Link
                href="#orders"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <ReceiptText
                    className="
                      h-4
                      w-4
                      text-coral
                    "
                  />

                  Orders
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>

            {/* ==================================================
                ORDERS
            ================================================== */}

            <section
              id="orders"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <ReceiptText
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Orders
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Order analytics helps you understand how
                    many customer orders are being recorded
                    during the selected reporting period.
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Order volume gives important context to
                revenue. Revenue can increase because more
                customers placed orders, because customers
                spent more per order, or because both
                changed together.
              </p>

              {/* ==================================================
                  ORDER METRIC CARDS
              ================================================== */}

              <div
                className="
                  mt-7
                  grid
                  gap-4
                  sm:grid-cols-3
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
                  <ReceiptText
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Order Volume
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    The number of recorded orders in the
                    selected reporting period.
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
                  <LineChart
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Order Trend
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Shows how order activity changes across
                    the selected reporting period.
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
                  <ShoppingCart
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Order Context
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Compare orders with revenue and average
                    order value for a more complete view.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  ORDER REPORT
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Order activity
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A time-based order view makes it easier to
                  identify days or periods with higher and
                  lower customer purchasing activity.
                </p>

                <div
                  className="
                    mt-5
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <div>
                      <p
                        className="
                          text-xs
                          text-navy-mute
                        "
                      >
                        Orders
                      </p>

                      <h4
                        className="
                          mt-1
                          text-sm
                          font-semibold
                        "
                      >
                        Order Volume Over Time
                      </h4>
                    </div>

                    <div
                      className="
                        rounded-md
                        border
                        border-border
                        bg-paper
                        px-3
                        py-2
                        text-xs
                        text-navy-mute
                      "
                    >
                      Selected period
                    </div>
                  </div>

                  {/* BAR CHART */}

                  <div
                    className="
                      mt-7
                      flex
                      h-48
                      items-end
                      gap-2
                      border-b
                      border-border
                      px-1
                    "
                  >
                    {[
                      36, 52, 44, 68, 58, 82, 64,
                      92, 72, 88, 70, 100,
                    ].map((height, index) => (
                      <div
                        key={index}
                        className="
                          flex
                          h-full
                          flex-1
                          items-end
                        "
                      >
                        <div
                          className="
                            w-full
                            rounded-t
                            bg-coral/70
                            transition-opacity
                            hover:bg-coral
                          "
                          style={{
                            height: `${height}%`,
                          }}
                          aria-hidden="true"
                        />
                      </div>
                    ))}
                  </div>

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      justify-between
                      text-[10px]
                      text-navy-mute
                    "
                  >
                    <span>Start</span>
                    <span>Reporting period</span>
                    <span>End</span>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  ORDERS + REVENUE
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Compare orders with revenue
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Looking at these metrics together can help
                  explain why overall store performance has
                  changed.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >
                  {/* HEADER */}

                  <div
                    className="
                      hidden
                      grid-cols-[180px_minmax(0,1fr)]
                      border-b
                      border-border
                      bg-black/[0.035]
                      px-4
                      py-3
                      sm:grid
                    "
                  >
                    <p className="text-xs font-semibold">
                      Pattern
                    </p>

                    <p className="text-xs font-semibold">
                      Possible interpretation
                    </p>
                  </div>

                  {/* ROW 1 */}

                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[180px_minmax(0,1fr)]
                      sm:gap-4
                    "
                  >
                    <p className="text-sm font-medium">
                      Orders ↑ Revenue ↑
                    </p>

                    <p
                      className="
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Higher order volume may be
                      contributing to stronger overall sales
                      performance.
                    </p>
                  </div>

                  {/* ROW 2 */}

                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[180px_minmax(0,1fr)]
                      sm:gap-4
                    "
                  >
                    <p className="text-sm font-medium">
                      Orders → Revenue ↑
                    </p>

                    <p
                      className="
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      If order volume is relatively stable,
                      review average order value and product
                      mix.
                    </p>
                  </div>

                  {/* ROW 3 */}

                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[180px_minmax(0,1fr)]
                      sm:gap-4
                    "
                  >
                    <p className="text-sm font-medium">
                      Orders ↑ Revenue →
                    </p>

                    <p
                      className="
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      More orders with similar revenue can
                      be a reason to review average order
                      value and which products are selling.
                    </p>
                  </div>

                  {/* ROW 4 */}

                  <div
                    className="
                      grid
                      gap-2
                      px-4
                      py-4
                      sm:grid-cols-[180px_minmax(0,1fr)]
                      sm:gap-4
                    "
                  >
                    <p className="text-sm font-medium">
                      Orders ↓ Revenue ↓
                    </p>

                    <p
                      className="
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Review traffic, conversion, product
                      performance, availability, and recent
                      storefront changes for additional
                      context.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  QUESTIONS TO ASK
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Questions to ask when orders change
                </h3>

                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {[
                    "Did storefront traffic increase or decrease?",
                    "Did conversion change during the same period?",
                    "Were particular products responsible for the change?",
                    "Did product availability change?",
                    "Did a marketing campaign affect store traffic?",
                    "Are you comparing equivalent reporting periods?",
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
                        py-4
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
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  ORDER NOTE
              ================================================== */}

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
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
                    Order counts can differ between reports
                    if systems use different order statuses,
                    date boundaries, time zones, or
                    filtering rules. Use the same reporting
                    definitions when making comparisons.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  NEXT SECTION
              ================================================== */}

              <Link
                href="#conversion"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <MousePointerClick
                    className="
                      h-4
                      w-4
                      text-coral
                    "
                  />

                  Conversion
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>
                        {/* ==================================================
                CONVERSION
            ================================================== */}

            <section
              id="conversion"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <MousePointerClick
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Conversion
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Conversion helps you understand how
                    effectively storefront visits turn into
                    completed customer orders.
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Conversion is useful because traffic alone
                does not tell you whether visitors are
                finding products, understanding your offer,
                and successfully moving through the buying
                experience.
              </p>

              {/* CONVERSION FORMULA */}

              <div
                className="
                  mt-7
                  rounded-xl
                  border
                  border-border
                  bg-white/40
                  p-5
                  sm:p-6
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-navy-mute
                  "
                >
                  Basic concept
                </p>

                <div
                  className="
                    mt-4
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                  "
                >
                  <div
                    className="
                      flex-1
                      rounded-lg
                      border
                      border-border
                      bg-paper
                      p-4
                    "
                  >
                    <p className="text-xs text-navy-mute">
                      Completed orders
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Customer purchases
                    </p>
                  </div>

                  <span
                    className="
                      text-center
                      text-lg
                      font-semibold
                      text-coral
                    "
                  >
                    ÷
                  </span>

                  <div
                    className="
                      flex-1
                      rounded-lg
                      border
                      border-border
                      bg-paper
                      p-4
                    "
                  >
                    <p className="text-xs text-navy-mute">
                      Store visits
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Eligible traffic
                    </p>
                  </div>

                  <span
                    className="
                      text-center
                      text-lg
                      font-semibold
                      text-coral
                    "
                  >
                    =
                  </span>

                  <div
                    className="
                      flex-1
                      rounded-lg
                      border
                      border-coral/30
                      bg-coral/5
                      p-4
                    "
                  >
                    <p className="text-xs text-navy-mute">
                      Conversion
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                        text-coral
                      "
                    >
                      Store efficiency
                    </p>
                  </div>
                </div>
              </div>

              {/* WHAT TO REVIEW */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  What can influence conversion?
                </h3>

                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {[
                    {
                      title: "Product information",
                      text: "Clear descriptions, images, pricing, and availability can help customers understand what they are buying.",
                      icon: Package,
                    },
                    {
                      title: "Store experience",
                      text: "Navigation, page speed, mobile usability, and clear calls to action can affect the buying journey.",
                      icon: MousePointerClick,
                    },
                    {
                      title: "Traffic quality",
                      text: "Visitors arriving with stronger purchase intent may behave differently from broad awareness traffic.",
                      icon: Users,
                    },
                    {
                      title: "Checkout experience",
                      text: "Unexpected friction or unclear information near checkout can affect completed orders.",
                      icon: ShoppingCart,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="
                          flex
                          items-start
                          gap-4
                          rounded-lg
                          border
                          border-border
                          p-4
                        "
                      >
                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-coral/10
                          "
                        >
                          <Icon className="h-4 w-4 text-coral" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold">
                            {item.title}
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CONVERSION TREND */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Review conversion over time
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Look for sustained changes instead of
                  reacting to a single short reporting
                  period.
                </p>

                <div
                  className="
                    mt-5
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <p className="text-xs text-navy-mute">
                        Conversion
                      </p>

                      <h4
                        className="
                          mt-1
                          text-sm
                          font-semibold
                        "
                      >
                        Conversion Trend
                      </h4>
                    </div>

                    <TrendingUp className="h-4 w-4 text-coral" />
                  </div>

                  <div
                    className="
                      relative
                      mt-6
                      h-44
                      overflow-hidden
                    "
                  >
                    <div className="absolute inset-x-0 top-0 border-t border-dashed border-border" />
                    <div className="absolute inset-x-0 top-1/3 border-t border-dashed border-border" />
                    <div className="absolute inset-x-0 top-2/3 border-t border-dashed border-border" />
                    <div className="absolute inset-x-0 bottom-0 border-t border-dashed border-border" />

                    <svg
                      viewBox="0 0 700 176"
                      preserveAspectRatio="none"
                      className="absolute inset-0 h-full w-full"
                      aria-hidden="true"
                    >
                      <polyline
                        points="
                          0,120
                          70,112
                          140,124
                          210,96
                          280,105
                          350,82
                          420,88
                          490,70
                          560,76
                          630,54
                          700,60
                        "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        vectorEffect="non-scaling-stroke"
                        className="text-coral"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* CONVERSION INTERPRETATION */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Interpreting changes
                </h3>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >
                  <div
                    className="
                      hidden
                      grid-cols-[190px_minmax(0,1fr)]
                      border-b
                      border-border
                      bg-black/[0.035]
                      px-4
                      py-3
                      sm:grid
                    "
                  >
                    <p className="text-xs font-semibold">
                      Observation
                    </p>

                    <p className="text-xs font-semibold">
                      What to investigate
                    </p>
                  </div>

                  {[
                    {
                      label: "Traffic ↑ Conversion ↓",
                      text: "Review where the additional visitors came from and whether their intent differs from your usual traffic.",
                    },
                    {
                      label: "Traffic → Conversion ↑",
                      text: "Review recent storefront, product, or marketing changes that may have improved the customer journey.",
                    },
                    {
                      label: "Conversion ↓ Orders ↓",
                      text: "Check storefront usability, product availability, traffic sources, and recent checkout changes.",
                    },
                  ].map((item, index, array) => (
                    <div
                      key={item.label}
                      className={`
                        grid
                        gap-2
                        px-4
                        py-4
                        sm:grid-cols-[190px_minmax(0,1fr)]
                        sm:gap-4
                        ${
                          index !== array.length - 1
                            ? "border-b border-border"
                            : ""
                        }
                      `}
                    >
                      <p className="text-sm font-medium">
                        {item.label}
                      </p>

                      <p
                        className="
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
              </div>

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
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
                    Different analytics systems may define
                    visits and conversions differently.
                    Compare conversion figures using the
                    same measurement method and reporting
                    period.
                  </p>
                </div>
              </div>

              <Link
                href="#average-order-value"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <ShoppingCart className="h-4 w-4 text-coral" />
                  Average Order Value
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>

            {/* ==================================================
                AVERAGE ORDER VALUE
            ================================================== */}

            <section
              id="average-order-value"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <ShoppingCart className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Average Order Value
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Average order value helps you understand
                    the typical sales value associated with
                    each customer order.
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Reviewing average order value alongside
                revenue and order volume can help explain
                whether sales growth is coming from more
                orders, higher-value orders, or both.
              </p>

              {/* AOV FORMULA */}

              <div
                className="
                  mt-7
                  rounded-xl
                  border
                  border-border
                  bg-white/40
                  p-5
                  sm:p-6
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-navy-mute
                  "
                >
                  Basic concept
                </p>

                <div
                  className="
                    mt-4
                    grid
                    gap-3
                    sm:grid-cols-[1fr_auto_1fr_auto_1fr]
                    sm:items-center
                  "
                >
                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      bg-paper
                      p-4
                    "
                  >
                    <CircleDollarSign className="h-4 w-4 text-coral" />

                    <p
                      className="
                        mt-3
                        text-xs
                        text-navy-mute
                      "
                    >
                      Revenue
                    </p>
                  </div>

                  <p className="text-center font-semibold text-coral">
                    ÷
                  </p>

                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      bg-paper
                      p-4
                    "
                  >
                    <ReceiptText className="h-4 w-4 text-coral" />

                    <p
                      className="
                        mt-3
                        text-xs
                        text-navy-mute
                      "
                    >
                      Orders
                    </p>
                  </div>

                  <p className="text-center font-semibold text-coral">
                    =
                  </p>

                  <div
                    className="
                      rounded-lg
                      border
                      border-coral/30
                      bg-coral/5
                      p-4
                    "
                  >
                    <ShoppingCart className="h-4 w-4 text-coral" />

                    <p
                      className="
                        mt-3
                        text-xs
                        font-semibold
                        text-coral
                      "
                    >
                      Average Order Value
                    </p>
                  </div>
                </div>
              </div>

              {/* WHY AOV MATTERS */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Why review average order value?
                </h3>

                <div
                  className="
                    mt-5
                    grid
                    gap-4
                    sm:grid-cols-3
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
                    <CircleDollarSign className="h-5 w-5 text-coral" />

                    <h4
                      className="
                        mt-4
                        text-sm
                        font-semibold
                      "
                    >
                      Revenue Context
                    </h4>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Helps explain changes in revenue when
                      order volume remains relatively
                      stable.
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
                    <Package className="h-5 w-5 text-coral" />

                    <h4
                      className="
                        mt-4
                        text-sm
                        font-semibold
                      "
                    >
                      Product Mix
                    </h4>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Changes in which products customers
                      buy can influence the average value of
                      an order.
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
                    <LineChart className="h-5 w-5 text-coral" />

                    <h4
                      className="
                        mt-4
                        text-sm
                        font-semibold
                      "
                    >
                      Trend Monitoring
                    </h4>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Comparing equivalent periods can
                      reveal whether typical order value is
                      changing over time.
                    </p>
                  </div>
                </div>
              </div>

              {/* AOV COMPARISON */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Reading AOV with other metrics
                </h3>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >
                  <div
                    className="
                      hidden
                      grid-cols-[190px_minmax(0,1fr)]
                      border-b
                      border-border
                      bg-black/[0.035]
                      px-4
                      py-3
                      sm:grid
                    "
                  >
                    <p className="text-xs font-semibold">
                      Pattern
                    </p>

                    <p className="text-xs font-semibold">
                      Review
                    </p>
                  </div>

                  {[
                    {
                      label: "AOV ↑ Revenue ↑",
                      text: "Higher-value orders may be contributing to stronger revenue performance.",
                    },
                    {
                      label: "AOV ↓ Orders ↑",
                      text: "More customers may be ordering while the typical value of each order is lower.",
                    },
                    {
                      label: "AOV ↑ Orders ↓",
                      text: "Higher-value orders may be partly offsetting lower overall order volume.",
                    },
                  ].map((item, index, array) => (
                    <div
                      key={item.label}
                      className={`
                        grid
                        gap-2
                        px-4
                        py-4
                        sm:grid-cols-[190px_minmax(0,1fr)]
                        sm:gap-4
                        ${
                          index !== array.length - 1
                            ? "border-b border-border"
                            : ""
                        }
                      `}
                    >
                      <p className="text-sm font-medium">
                        {item.label}
                      </p>

                      <p
                        className="
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
              </div>

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
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
                    Check how your implementation calculates
                    revenue before calculating or comparing
                    average order value. Different systems
                    may treat discounts, refunds, taxes, and
                    shipping differently.
                  </p>
                </div>
              </div>

              <Link
                href="#traffic-sources"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-coral" />
                  Traffic Sources
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>

            {/* ==================================================
                TRAFFIC SOURCES
            ================================================== */}

            <section
              id="traffic-sources"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <Users className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Traffic Sources
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Traffic-source analytics helps you
                    understand how visitors discover and
                    reach your ecommerce storefront.
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Compare traffic sources with orders and
                conversion to understand which channels are
                bringing useful visitors rather than
                evaluating channels from visitor volume
                alone.
              </p>

              {/* SOURCE TYPES */}

              <div
                className="
                  mt-7
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                {[
                  {
                    title: "Direct",
                    text: "Visits where a referring source is not available or the visitor arrives directly.",
                  },
                  {
                    title: "Organic Search",
                    text: "Visitors reaching the store through supported search-engine results.",
                  },
                  {
                    title: "Social",
                    text: "Traffic associated with supported social platforms and shared links.",
                  },
                  {
                    title: "Referral",
                    text: "Visitors arriving through links on other websites or external pages.",
                  },
                  {
                    title: "Email",
                    text: "Traffic associated with tracked email links and supported email campaigns.",
                  },
                  {
                    title: "Campaigns",
                    text: "Traffic associated with properly tagged and supported marketing campaigns.",
                  },
                ].map((source) => (
                  <div
                    key={source.title}
                    className="
                      rounded-lg
                      border
                      border-border
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <Users className="h-4 w-4 text-coral" />
                    </div>

                    <h3
                      className="
                        mt-4
                        text-sm
                        font-semibold
                      "
                    >
                      {source.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      {source.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* TRAFFIC REPORT */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Traffic source report
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A source report can show the relative
                  contribution of different acquisition
                  channels during the selected period.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                      border-b
                      border-border
                      p-5
                    "
                  >
                    <div>
                      <p className="text-xs text-navy-mute">
                        Acquisition
                      </p>

                      <h4
                        className="
                          mt-1
                          text-sm
                          font-semibold
                        "
                      >
                        Traffic Sources
                      </h4>
                    </div>

                    <Users className="h-4 w-4 text-coral" />
                  </div>

                  <div className="p-5">
                    {[
                      {
                        source: "Organic Search",
                        width: "82%",
                      },
                      {
                        source: "Direct",
                        width: "66%",
                      },
                      {
                        source: "Social",
                        width: "52%",
                      },
                      {
                        source: "Email",
                        width: "38%",
                      },
                      {
                        source: "Referral",
                        width: "28%",
                      },
                    ].map((item) => (
                      <div
                        key={item.source}
                        className="
                          border-b
                          border-border
                          py-4
                          last:border-b-0
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-4
                          "
                        >
                          <p
                            className="
                              text-xs
                              font-medium
                            "
                          >
                            {item.source}
                          </p>

                          <p
                            className="
                              text-[10px]
                              text-navy-mute
                            "
                          >
                            Relative traffic
                          </p>
                        </div>

                        <div
                          className="
                            mt-3
                            h-2
                            overflow-hidden
                            rounded-full
                            bg-black/[0.06]
                          "
                        >
                          <div
                            className="
                              h-full
                              rounded-full
                              bg-coral
                            "
                            style={{
                              width: item.width,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TRAFFIC + PERFORMANCE */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Look beyond traffic volume
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A source that sends more visitors is not
                  automatically the source contributing most
                  strongly to store performance.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >
                  <div
                    className="
                      hidden
                      grid-cols-[150px_1fr_1fr]
                      border-b
                      border-border
                      bg-black/[0.035]
                      px-4
                      py-3
                      sm:grid
                    "
                  >
                    <p className="text-xs font-semibold">
                      Review
                    </p>

                    <p className="text-xs font-semibold">
                      Question
                    </p>

                    <p className="text-xs font-semibold">
                      Why it matters
                    </p>
                  </div>

                  {[
                    {
                      label: "Traffic",
                      question: "How many visits came from the source?",
                      reason: "Shows the source's contribution to overall visitor volume.",
                    },
                    {
                      label: "Conversion",
                      question: "How effectively did that traffic turn into orders?",
                      reason: "Adds context about the usefulness of the traffic.",
                    },
                    {
                      label: "Revenue",
                      question: "How much sales value was associated with the source?",
                      reason: "Helps connect acquisition activity with store performance.",
                    },
                  ].map((item, index, array) => (
                    <div
                      key={item.label}
                      className={`
                        grid
                        gap-3
                        px-4
                        py-4
                        sm:grid-cols-[150px_1fr_1fr]
                        sm:gap-4
                        ${
                          index !== array.length - 1
                            ? "border-b border-border"
                            : ""
                        }
                      `}
                    >
                      <p className="text-sm font-medium">
                        {item.label}
                      </p>

                      <p
                        className="
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        {item.question}
                      </p>

                      <p
                        className="
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        {item.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TRAFFIC CHECKLIST */}

              <div
                className="
                  mt-8
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >
                <div
                  className="
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-4
                    py-3
                  "
                >
                  <p className="text-xs font-semibold">
                    When reviewing traffic sources
                  </p>
                </div>

                {[
                  "Use the same reporting period when comparing sources.",
                  "Review visitor volume together with conversion.",
                  "Compare source performance with orders and revenue.",
                  "Check whether campaigns use consistent tracking parameters.",
                  "Watch for changes in source classification after analytics configuration updates.",
                ].map((item, index, array) => (
                  <div
                    key={item}
                    className={`
                      flex
                      items-start
                      gap-3
                      px-4
                      py-3.5
                      ${
                        index !== array.length - 1
                          ? "border-b border-border"
                          : ""
                      }
                    `}
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
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* TRAFFIC NOTE */}

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
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
                    Attribution is not always complete.
                    Browser privacy controls, missing
                    tracking information, redirects, and
                    other technical factors can affect how a
                    visit is assigned to a traffic source.
                  </p>
                </div>
              </div>

              {/* NEXT */}

              <Link
                href="#top-products"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <Package className="h-4 w-4 text-coral" />

                  Top Products
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>
                        {/* ==================================================
                TOP PRODUCTS
            ================================================== */}

            <section
              id="top-products"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <Package className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Top Products
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Product analytics helps you understand
                    which products are contributing most
                    strongly to orders and sales during the
                    selected reporting period.
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Compare product performance using more than
                one metric. A product can generate a high
                number of orders while another contributes
                more revenue because of differences in
                price, quantity, or product mix.
              </p>

              {/* ==================================================
                  PRODUCT METRICS
              ================================================== */}

              <div
                className="
                  mt-7
                  grid
                  gap-4
                  sm:grid-cols-2
                  lg:grid-cols-4
                "
              >
                {[
                  {
                    title: "Sales Value",
                    text: "Review the sales value associated with each product.",
                    icon: CircleDollarSign,
                  },
                  {
                    title: "Order Activity",
                    text: "See which products appear frequently across customer orders.",
                    icon: ReceiptText,
                  },
                  {
                    title: "Product Demand",
                    text: "Compare relative customer purchasing activity between products.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Product Mix",
                    text: "Understand how different products contribute to overall store results.",
                    icon: Package,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        rounded-lg
                        border
                        border-border
                        p-5
                      "
                    >
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          bg-coral/10
                        "
                      >
                        <Icon className="h-4 w-4 text-coral" />
                      </div>

                      <h3
                        className="
                          mt-4
                          text-sm
                          font-semibold
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-xs
                          leading-5
                          text-navy-mute
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* ==================================================
                  PRODUCT REPORT
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Product performance report
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A ranked product view makes it easier to
                  compare the relative contribution of
                  products within the same reporting period.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                  "
                >
                  {/* REPORT HEADER */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      border-b
                      border-border
                      p-5
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <div>
                      <p
                        className="
                          text-xs
                          text-navy-mute
                        "
                      >
                        Products
                      </p>

                      <h4
                        className="
                          mt-1
                          text-sm
                          font-semibold
                        "
                      >
                        Product Performance
                      </h4>
                    </div>

                    <div
                      className="
                        w-fit
                        rounded-md
                        border
                        border-border
                        bg-paper
                        px-3
                        py-2
                        text-xs
                        text-navy-mute
                      "
                    >
                      Selected period
                    </div>
                  </div>

                  {/* TABLE HEADER */}

                  <div
                    className="
                      hidden
                      grid-cols-[minmax(0,1fr)_110px_110px_80px]
                      border-b
                      border-border
                      bg-black/[0.025]
                      px-5
                      py-3
                      sm:grid
                    "
                  >
                    <p className="text-xs font-semibold">
                      Product
                    </p>

                    <p className="text-xs font-semibold">
                      Sales
                    </p>

                    <p className="text-xs font-semibold">
                      Orders
                    </p>

                    <p className="text-right text-xs font-semibold">
                      Trend
                    </p>
                  </div>

                  {/* PRODUCT ROWS */}

                  {[
                    {
                      name: "Featured Product",
                      category: "Core collection",
                      sales: "Strong",
                      orders: "High",
                      trend: "Up",
                      width: "88%",
                    },
                    {
                      name: "Everyday Product",
                      category: "Popular collection",
                      sales: "Growing",
                      orders: "High",
                      trend: "Up",
                      width: "72%",
                    },
                    {
                      name: "Premium Product",
                      category: "Premium collection",
                      sales: "Strong",
                      orders: "Medium",
                      trend: "Stable",
                      width: "61%",
                    },
                    {
                      name: "New Product",
                      category: "New collection",
                      sales: "Developing",
                      orders: "Medium",
                      trend: "Up",
                      width: "46%",
                    },
                  ].map((product, index, array) => (
                    <div
                      key={product.name}
                      className={`
                        px-5
                        py-4
                        ${
                          index !== array.length - 1
                            ? "border-b border-border"
                            : ""
                        }
                      `}
                    >
                      <div
                        className="
                          grid
                          gap-4
                          sm:grid-cols-[minmax(0,1fr)_110px_110px_80px]
                          sm:items-center
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <div
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              border
                              border-border
                              bg-paper
                            "
                          >
                            <Package
                              className="
                                h-4
                                w-4
                                text-coral
                              "
                            />
                          </div>

                          <div className="min-w-0">
                            <p
                              className="
                                truncate
                                text-sm
                                font-medium
                              "
                            >
                              {product.name}
                            </p>

                            <p
                              className="
                                mt-0.5
                                text-[11px]
                                text-navy-mute
                              "
                            >
                              {product.category}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p
                            className="
                              text-[10px]
                              uppercase
                              tracking-wide
                              text-navy-mute
                              sm:hidden
                            "
                          >
                            Sales
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              font-medium
                              sm:mt-0
                            "
                          >
                            {product.sales}
                          </p>
                        </div>

                        <div>
                          <p
                            className="
                              text-[10px]
                              uppercase
                              tracking-wide
                              text-navy-mute
                              sm:hidden
                            "
                          >
                            Orders
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              font-medium
                              sm:mt-0
                            "
                          >
                            {product.orders}
                          </p>
                        </div>

                        <div className="sm:text-right">
                          <p
                            className="
                              text-[10px]
                              uppercase
                              tracking-wide
                              text-navy-mute
                              sm:hidden
                            "
                          >
                            Trend
                          </p>

                          <span
                            className="
                              mt-1
                              inline-flex
                              rounded-full
                              border
                              border-border
                              px-2
                              py-1
                              text-[10px]
                              font-semibold
                              text-coral
                              sm:mt-0
                            "
                          >
                            {product.trend}
                          </span>
                        </div>
                      </div>

                      {/* RELATIVE PERFORMANCE */}

                      <div
                        className="
                          mt-4
                          h-1.5
                          overflow-hidden
                          rounded-full
                          bg-black/[0.06]
                        "
                      >
                        <div
                          className="
                            h-full
                            rounded-full
                            bg-coral
                          "
                          style={{
                            width: product.width,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  HOW TO INTERPRET PRODUCT PERFORMANCE
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  How to interpret product performance
                </h3>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >
                  <div
                    className="
                      hidden
                      grid-cols-[190px_minmax(0,1fr)]
                      border-b
                      border-border
                      bg-black/[0.035]
                      px-4
                      py-3
                      sm:grid
                    "
                  >
                    <p className="text-xs font-semibold">
                      Pattern
                    </p>

                    <p className="text-xs font-semibold">
                      What to review
                    </p>
                  </div>

                  {[
                    {
                      label: "High sales + high orders",
                      text: "The product is contributing strongly through both sales value and customer order activity.",
                    },
                    {
                      label: "High sales + fewer orders",
                      text: "A higher product value may allow the product to contribute strongly without appearing in as many orders.",
                    },
                    {
                      label: "Lower sales + high orders",
                      text: "The product may be popular but contribute a smaller amount of sales value per order.",
                    },
                    {
                      label: "Sales declining",
                      text: "Review traffic, product availability, seasonality, product-page changes, and the wider store trend.",
                    },
                  ].map((item, index, array) => (
                    <div
                      key={item.label}
                      className={`
                        grid
                        gap-2
                        px-4
                        py-4
                        sm:grid-cols-[190px_minmax(0,1fr)]
                        sm:gap-4
                        ${
                          index !== array.length - 1
                            ? "border-b border-border"
                            : ""
                        }
                      `}
                    >
                      <p className="text-sm font-medium">
                        {item.label}
                      </p>

                      <p
                        className="
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
              </div>

              {/* ==================================================
                  QUESTIONS TO ASK
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Questions to ask
                </h3>

                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {[
                    "Which products contribute most to sales value?",
                    "Which products appear most frequently in orders?",
                    "Did a product improve compared with an equivalent previous period?",
                    "Are high-traffic products also generating customer orders?",
                    "Did product availability change during the reporting period?",
                    "Are new products beginning to contribute to overall store performance?",
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
                        py-4
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
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PRODUCT NOTE */}

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
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
                    Product rankings can change depending on
                    the selected metric. Make sure you know
                    whether a report is ranked by sales
                    value, orders, quantity, or another
                    measurement before comparing products.
                  </p>
                </div>
              </div>

              {/* NEXT */}

              <Link
                href="#performance-insights"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <TrendingUp className="h-4 w-4 text-coral" />

                  Performance Insights
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>

            {/* ==================================================
                PERFORMANCE INSIGHTS
            ================================================== */}

            <section
              id="performance-insights"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <TrendingUp className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Performance Insights
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Performance insights bring several
                    ecommerce metrics together so you can
                    identify patterns that may not be
                    obvious from a single report.
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use insights as prompts for further
                investigation rather than treating one
                metric as a complete explanation. Compare
                revenue, orders, conversion, average order
                value, traffic, and product activity before
                deciding what changed.
              </p>

              {/* ==================================================
                  INSIGHT CARDS
              ================================================== */}

              <div
                className="
                  mt-7
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                {/* SALES MOMENTUM */}

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <TrendingUp className="h-4 w-4 text-coral" />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-navy-mute
                      "
                    >
                      Trend
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Sales Momentum
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Revenue and order activity are useful
                    together when reviewing whether store
                    sales are strengthening or weakening.
                  </p>
                </div>

                {/* CONVERSION */}

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <MousePointerClick className="h-4 w-4 text-coral" />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-navy-mute
                      "
                    >
                      Store
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Conversion Movement
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Changes in conversion can provide useful
                    context when traffic moves differently
                    from order volume.
                  </p>
                </div>

                {/* TRAFFIC */}

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <Users className="h-4 w-4 text-coral" />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-navy-mute
                      "
                    >
                      Traffic
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Traffic Changes
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Review which sources changed when total
                    storefront traffic rises or falls.
                  </p>
                </div>

                {/* PRODUCTS */}

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <Package className="h-4 w-4 text-coral" />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-navy-mute
                      "
                    >
                      Products
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Product Movement
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Look for products gaining or losing
                    relative contribution compared with
                    previous equivalent periods.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  PERFORMANCE SNAPSHOT
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Performance snapshot
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A combined dashboard can make relationships
                  between store metrics easier to spot.
                </p>

                <div
                  className="
                    mt-5
                    rounded-xl
                    border
                    border-border
                    bg-white/40
                    p-5
                  "
                >
                  {/* HEADER */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      border-b
                      border-border
                      pb-5
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <div>
                      <p className="text-xs text-navy-mute">
                        Analytics
                      </p>

                      <h4
                        className="
                          mt-1
                          text-sm
                          font-semibold
                        "
                      >
                        Store Performance
                      </h4>
                    </div>

                    <div
                      className="
                        w-fit
                        rounded-md
                        border
                        border-border
                        bg-paper
                        px-3
                        py-2
                        text-xs
                        text-navy-mute
                      "
                    >
                      Selected period
                    </div>
                  </div>

                  {/* METRICS */}

                  <div
                    className="
                      mt-5
                      grid
                      gap-3
                      sm:grid-cols-2
                      lg:grid-cols-4
                    "
                  >
                    {[
                      {
                        label: "Revenue",
                        value: "Sales trend",
                        icon: CircleDollarSign,
                      },
                      {
                        label: "Orders",
                        value: "Order trend",
                        icon: ReceiptText,
                      },
                      {
                        label: "Conversion",
                        value: "Store efficiency",
                        icon: MousePointerClick,
                      },
                      {
                        label: "Traffic",
                        value: "Visitor trend",
                        icon: Users,
                      },
                    ].map((metric) => {
                      const Icon = metric.icon;

                      return (
                        <div
                          key={metric.label}
                          className="
                            rounded-lg
                            border
                            border-border
                            bg-paper
                            p-4
                          "
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-3
                            "
                          >
                            <p
                              className="
                                text-xs
                                text-navy-mute
                              "
                            >
                              {metric.label}
                            </p>

                            <Icon className="h-3.5 w-3.5 text-coral" />
                          </div>

                          <p
                            className="
                              mt-3
                              text-sm
                              font-semibold
                            "
                          >
                            {metric.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* INSIGHT PANEL */}

                  <div
                    className="
                      mt-4
                      grid
                      gap-4
                      lg:grid-cols-[minmax(0,1fr)_220px]
                    "
                  >
                    {/* CHART */}

                    <div
                      className="
                        rounded-lg
                        border
                        border-border
                        bg-paper
                        p-5
                      "
                    >
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-4
                        "
                      >
                        <div>
                          <p className="text-sm font-semibold">
                            Performance trend
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              text-navy-mute
                            "
                          >
                            Relative movement across the
                            selected period
                          </p>
                        </div>

                        <LineChart className="h-4 w-4 text-coral" />
                      </div>

                      <div
                        className="
                          relative
                          mt-6
                          h-40
                          overflow-hidden
                        "
                      >
                        <div className="absolute inset-x-0 top-0 border-t border-dashed border-border" />
                        <div className="absolute inset-x-0 top-1/3 border-t border-dashed border-border" />
                        <div className="absolute inset-x-0 top-2/3 border-t border-dashed border-border" />
                        <div className="absolute inset-x-0 bottom-0 border-t border-dashed border-border" />

                        <svg
                          viewBox="0 0 700 160"
                          preserveAspectRatio="none"
                          className="
                            absolute
                            inset-0
                            h-full
                            w-full
                          "
                          aria-hidden="true"
                        >
                          <polyline
                            points="
                              0,126
                              70,116
                              140,122
                              210,94
                              280,100
                              350,78
                              420,86
                              490,58
                              560,70
                              630,42
                              700,50
                            "
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                            className="text-coral"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* SUMMARY */}

                    <div
                      className="
                        rounded-lg
                        border
                        border-border
                        bg-paper
                        p-5
                      "
                    >
                      <p className="text-sm font-semibold">
                        Review together
                      </p>

                      <div className="mt-5 space-y-4">
                        {[
                          "Revenue",
                          "Orders",
                          "Conversion",
                          "Average order value",
                          "Traffic sources",
                          "Top products",
                        ].map((item) => (
                          <div
                            key={item}
                            className="
                              flex
                              items-center
                              gap-3
                            "
                          >
                            <Check
                              className="
                                h-3.5
                                w-3.5
                                shrink-0
                                text-coral
                              "
                            />

                            <p
                              className="
                                text-xs
                                text-navy-mute
                              "
                            >
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  COMMON PATTERNS
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Common patterns to investigate
                </h3>

                <div
                  className="
                    mt-5
                    space-y-3
                  "
                >
                  {[
                    {
                      title: "Traffic increases but orders stay similar",
                      text: "Review traffic sources and conversion. The additional visits may behave differently from your existing audience.",
                    },
                    {
                      title: "Revenue increases while orders stay similar",
                      text: "Review average order value and product mix to see whether customers are placing higher-value orders.",
                    },
                    {
                      title: "Orders increase while revenue changes less",
                      text: "Review average order value and which products are contributing to the additional orders.",
                    },
                    {
                      title: "One product grows quickly",
                      text: "Check whether the change is connected to traffic, marketing activity, product availability, or broader customer demand.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-lg
                        border
                        border-border
                        p-5
                      "
                    >
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-coral/10
                          text-xs
                          font-bold
                          text-coral
                        "
                      >
                        {index + 1}
                      </div>

                      <div>
                        <h4
                          className="
                            text-sm
                            font-semibold
                          "
                        >
                          {item.title}
                        </h4>

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
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  INSIGHT WORKFLOW
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  From metric to insight
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Use a consistent review process when
                  something changes in your analytics.
                </p>

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
                      number: "01",
                      title: "Spot the change",
                      text: "Identify which metric moved and when the change started.",
                    },
                    {
                      number: "02",
                      title: "Compare the period",
                      text: "Compare with an equivalent previous period instead of an unrelated date range.",
                    },
                    {
                      number: "03",
                      title: "Check related metrics",
                      text: "Review revenue, orders, conversion, traffic, AOV, and product activity together.",
                    },
                    {
                      number: "04",
                      title: "Review store changes",
                      text: "Consider relevant product, storefront, marketing, or availability changes from the same period.",
                    },
                    {
                      number: "05",
                      title: "Form an explanation",
                      text: "Use the available evidence to identify the most likely reason for the movement.",
                    },
                    {
                      number: "06",
                      title: "Keep monitoring",
                      text: "Continue reviewing later periods to see whether the pattern persists.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="
                        rounded-lg
                        border
                        border-border
                        p-5
                      "
                    >
                      <p
                        className="
                          text-xs
                          font-bold
                          text-coral
                        "
                      >
                        {item.number}
                      </p>

                      <h4
                        className="
                          mt-2
                          text-sm
                          font-semibold
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-2
                          text-xs
                          leading-5
                          text-navy-mute
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  IMPORTANT NOTE
              ================================================== */}

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
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
                        text-navy
                      "
                    >
                      Insights provide context
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Analytics can show relationships and
                      changes, but a chart alone does not
                      always prove why something happened.
                      Use store activity and consistent
                      reporting periods to add context.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  NEXT
              ================================================== */}

              <Link
                href="#reading-reports"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <BarChart3 className="h-4 w-4 text-coral" />

                  Reading Reports
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>
                        {/* ==================================================
                READING REPORTS
            ================================================== */}

            <section
              id="reading-reports"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <BarChart3 className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Reading Reports
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Analytics reports are easier to
                    understand when you use consistent date
                    ranges, compare related metrics, and
                    review changes in the context of your
                    store activity.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  REPORT WORKFLOW
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  A simple reporting workflow
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Use the same review process each time you
                  open your analytics dashboard.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      number: "01",
                      title: "Choose the reporting period",
                      text: "Start with a date range that matches the question you are trying to answer.",
                    },
                    {
                      number: "02",
                      title: "Review the headline metrics",
                      text: "Check revenue, orders, conversion, and average order value for an overall performance snapshot.",
                    },
                    {
                      number: "03",
                      title: "Check traffic",
                      text: "Review whether visitor volume or traffic-source distribution changed during the same period.",
                    },
                    {
                      number: "04",
                      title: "Review products",
                      text: "Identify products contributing strongly to sales and any products with notable changes.",
                    },
                    {
                      number: "05",
                      title: "Compare with another period",
                      text: "Use an equivalent previous period so the comparison is meaningful.",
                    },
                    {
                      number: "06",
                      title: "Add business context",
                      text: "Consider relevant storefront, product, availability, seasonal, and marketing changes.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-lg
                        border
                        border-border
                        p-5
                      "
                    >
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-coral/10
                          text-xs
                          font-bold
                          text-coral
                        "
                      >
                        {item.number}
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold">
                          {item.title}
                        </h4>

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
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  DATE RANGES
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Choose useful date ranges
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Different reporting periods answer
                  different questions. Use a period that is
                  long enough to show the pattern you are
                  investigating.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >
                  <div
                    className="
                      hidden
                      grid-cols-[160px_minmax(0,1fr)]
                      border-b
                      border-border
                      bg-black/[0.035]
                      px-4
                      py-3
                      sm:grid
                    "
                  >
                    <p className="text-xs font-semibold">
                      Period
                    </p>

                    <p className="text-xs font-semibold">
                      Useful for
                    </p>
                  </div>

                  {[
                    {
                      period: "Daily",
                      use: "Reviewing short-term store activity and checking recent changes.",
                    },
                    {
                      period: "Weekly",
                      use: "Understanding short-term trends while reducing the impact of individual-day variation.",
                    },
                    {
                      period: "Monthly",
                      use: "Reviewing broader store performance and comparing business trends over time.",
                    },
                    {
                      period: "Custom range",
                      use: "Reviewing a specific campaign, product launch, storefront update, or business period.",
                    },
                  ].map((item, index, array) => (
                    <div
                      key={item.period}
                      className={`
                        grid
                        gap-2
                        px-4
                        py-4
                        sm:grid-cols-[160px_minmax(0,1fr)]
                        sm:gap-4
                        ${
                          index !== array.length - 1
                            ? "border-b border-border"
                            : ""
                        }
                      `}
                    >
                      <p className="text-sm font-medium">
                        {item.period}
                      </p>

                      <p
                        className="
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        {item.use}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  COMPARING PERIODS
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Compare like with like
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Comparisons are more useful when the two
                  periods cover similar lengths and similar
                  types of store activity.
                </p>

                <div
                  className="
                    mt-5
                    grid
                    gap-4
                    sm:grid-cols-2
                  "
                >
                  {/* GOOD COMPARISON */}

                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-5
                    "
                  >
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-coral" />

                      <h4 className="text-sm font-semibold">
                        Better comparison
                      </h4>
                    </div>

                    <div className="mt-5 space-y-3">
                      {[
                        "Seven days compared with another seven days.",
                        "A month compared with the previous month.",
                        "Equivalent seasonal periods where appropriate.",
                        "The same metric definition in both periods.",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <Check
                            className="
                              mt-0.5
                              h-3.5
                              w-3.5
                              shrink-0
                              text-coral
                            "
                          />

                          <p
                            className="
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WEAKER COMPARISON */}

                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-5
                    "
                  >
                    <div className="flex items-center gap-3">
                      <Info className="h-5 w-5 text-coral" />

                      <h4 className="text-sm font-semibold">
                        Use caution
                      </h4>
                    </div>

                    <div className="mt-5 space-y-3">
                      {[
                        "One day compared with a full week.",
                        "A promotion period compared with a normal period without context.",
                        "Different metrics from different analytics definitions.",
                        "Periods affected by major availability changes without noting them.",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <span
                            className="
                              mt-1.5
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-coral
                            "
                          />

                          <p
                            className="
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  REPORT READING TABLE
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Reading metrics together
                </h3>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >
                  <div
                    className="
                      hidden
                      grid-cols-[160px_1fr_1fr]
                      border-b
                      border-border
                      bg-black/[0.035]
                      px-4
                      py-3
                      sm:grid
                    "
                  >
                    <p className="text-xs font-semibold">
                      Metric
                    </p>

                    <p className="text-xs font-semibold">
                      Pair with
                    </p>

                    <p className="text-xs font-semibold">
                      Why
                    </p>
                  </div>

                  {[
                    {
                      metric: "Revenue",
                      pair: "Orders + AOV",
                      reason:
                        "Helps explain whether sales changed because of order volume or order value.",
                    },
                    {
                      metric: "Orders",
                      pair: "Traffic + Conversion",
                      reason:
                        "Adds context about the number of visitors and how effectively they became customers.",
                    },
                    {
                      metric: "Traffic",
                      pair: "Sources + Conversion",
                      reason:
                        "Helps distinguish visitor growth from useful customer acquisition.",
                    },
                    {
                      metric: "Top Products",
                      pair: "Revenue + Orders",
                      reason:
                        "Shows whether a product contributes through sales value, order activity, or both.",
                    },
                  ].map((item, index, array) => (
                    <div
                      key={item.metric}
                      className={`
                        grid
                        gap-3
                        px-4
                        py-4
                        sm:grid-cols-[160px_1fr_1fr]
                        sm:gap-4
                        ${
                          index !== array.length - 1
                            ? "border-b border-border"
                            : ""
                        }
                      `}
                    >
                      <p className="text-sm font-medium">
                        {item.metric}
                      </p>

                      <p
                        className="
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        {item.pair}
                      </p>

                      <p
                        className="
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        {item.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  REPORT NOTE
              ================================================== */}

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
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
                    A percentage change can look large when
                    the original value was small. Review the
                    underlying values as well as the
                    percentage movement before interpreting
                    a change.
                  </p>
                </div>
              </div>

              {/* NEXT */}

              <Link
                href="#best-practices"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-coral" />

                  Best Practices
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>

            {/* ==================================================
                BEST PRACTICES
            ================================================== */}

            <section
              id="best-practices"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <Check className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Best Practices
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    A consistent analytics routine makes
                    reports easier to understand and helps
                    prevent short-term changes from being
                    mistaken for long-term trends.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  BEST PRACTICE CARDS
              ================================================== */}

              <div className="mt-8 space-y-3">
                {[
                  {
                    number: "01",
                    title: "Use consistent reporting periods",
                    text: "Compare equivalent date ranges so changes are easier to interpret.",
                  },
                  {
                    number: "02",
                    title: "Review multiple metrics",
                    text: "Use revenue, orders, conversion, AOV, traffic, and product data together instead of relying on one number.",
                  },
                  {
                    number: "03",
                    title: "Look for sustained patterns",
                    text: "Avoid making conclusions from a single unusual day when a longer reporting period provides better context.",
                  },
                  {
                    number: "04",
                    title: "Keep tracking consistent",
                    text: "Use consistent campaign parameters and analytics configuration so traffic sources remain easier to compare.",
                  },
                  {
                    number: "05",
                    title: "Record important store changes",
                    text: "Knowing when products, pages, campaigns, or store settings changed makes analytics movements easier to investigate.",
                  },
                  {
                    number: "06",
                    title: "Understand metric definitions",
                    text: "Know how your analytics implementation defines revenue, visits, orders, and other metrics before comparing systems.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-lg
                      border
                      border-border
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral/10
                        text-xs
                        font-bold
                        text-coral
                      "
                    >
                      {item.number}
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
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
                  </div>
                ))}
              </div>

              {/* ==================================================
                  ANALYTICS CHECKLIST
              ================================================== */}

              <div
                className="
                  mt-8
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >
                <div
                  className="
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-4
                    py-3
                  "
                >
                  <p className="text-xs font-semibold">
                    Before interpreting a report
                  </p>
                </div>

                {[
                  "Confirm the selected reporting period.",
                  "Confirm you are using the expected metric definition.",
                  "Compare with an equivalent previous period.",
                  "Review related metrics for additional context.",
                  "Check relevant product and storefront changes.",
                  "Review traffic-source changes where applicable.",
                  "Use longer-term trends when short-term data is unusually volatile.",
                ].map((item, index, array) => (
                  <div
                    key={item}
                    className={`
                      flex
                      items-start
                      gap-3
                      px-4
                      py-3.5
                      ${
                        index !== array.length - 1
                          ? "border-b border-border"
                          : ""
                      }
                    `}
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
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* ==================================================
                  BEST PRACTICE NOTE
              ================================================== */}

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
                  <TrendingUp
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <div>
                    <p className="text-sm font-semibold">
                      Focus on trends
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Analytics is most useful when it helps
                      you recognize patterns over time.
                      Short-term movements can provide useful
                      signals, but broader trends usually
                      provide stronger context.
                    </p>
                  </div>
                </div>
              </div>

              {/* NEXT */}

              <Link
                href="#troubleshooting"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <Info className="h-4 w-4 text-coral" />

                  Troubleshooting
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>

            {/* ==================================================
                TROUBLESHOOTING
            ================================================== */}

            <section
              id="troubleshooting"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <Info className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Troubleshooting
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    If an analytics report looks unexpected,
                    first check the reporting period,
                    filters, metric definitions, and data
                    collection before assuming store
                    performance changed.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  ISSUE 1
              ================================================== */}

              <div
                className="
                  mt-8
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >
                <div
                  className="
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-5
                    py-4
                  "
                >
                  <p className="text-sm font-semibold">
                    Analytics values look lower than expected
                  </p>
                </div>

                <div className="p-5">
                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Check whether the report uses the
                    expected date range and whether all
                    relevant data is included.
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      "Confirm the start and end dates.",
                      "Check the reporting time zone.",
                      "Review any active report filters.",
                      "Confirm the expected data source is connected.",
                      "Check whether recent data needs additional processing time.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
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
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ==================================================
                  ISSUE 2
              ================================================== */}

              <div
                className="
                  mt-4
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >
                <div
                  className="
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-5
                    py-4
                  "
                >
                  <p className="text-sm font-semibold">
                    Revenue does not match another report
                  </p>
                </div>

                <div className="p-5">
                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Different systems can use different
                    definitions for sales-related metrics.
                    Compare the calculation rules before
                    comparing the final totals.
                  </p>

                  <div
                    className="
                      mt-5
                      grid
                      gap-3
                      sm:grid-cols-2
                    "
                  >
                    {[
                      "Discount treatment",
                      "Refund treatment",
                      "Shipping treatment",
                      "Tax treatment",
                      "Order status filters",
                      "Reporting time zone",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-md
                          border
                          border-border
                          px-4
                          py-3
                        "
                      >
                        <CircleDollarSign
                          className="
                            h-3.5
                            w-3.5
                            shrink-0
                            text-coral
                          "
                        />

                        <p
                          className="
                            text-xs
                            text-navy-mute
                          "
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ==================================================
                  ISSUE 3
              ================================================== */}

              <div
                className="
                  mt-4
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >
                <div
                  className="
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-5
                    py-4
                  "
                >
                  <p className="text-sm font-semibold">
                    Traffic source is missing or incorrect
                  </p>
                </div>

                <div className="p-5">
                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Attribution can be affected by missing
                    campaign parameters, redirects, browser
                    privacy features, or unavailable
                    referring information.
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      "Check campaign-link tracking.",
                      "Use consistent campaign parameters.",
                      "Review redirects between campaign and landing pages.",
                      "Confirm the analytics integration is active on the relevant pages.",
                      "Remember that some visits may not have complete attribution information.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
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
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ==================================================
                  ISSUE 4
              ================================================== */}

              <div
                className="
                  mt-4
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >
                <div
                  className="
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-5
                    py-4
                  "
                >
                  <p className="text-sm font-semibold">
                    Conversion suddenly changed
                  </p>
                </div>

                <div className="p-5">
                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Compare the conversion change with
                    traffic volume, traffic sources, orders,
                    and recent storefront updates.
                  </p>

                  <div
                    className="
                      mt-5
                      overflow-hidden
                      rounded-lg
                      border
                      border-border
                    "
                  >
                    {[
                      {
                        label: "Traffic",
                        text: "Did visitor volume or source mix change?",
                      },
                      {
                        label: "Orders",
                        text: "Did completed order volume change at the same time?",
                      },
                      {
                        label: "Products",
                        text: "Did availability or product information change?",
                      },
                      {
                        label: "Storefront",
                        text: "Were navigation, product pages, or checkout-related experiences updated?",
                      },
                    ].map((item, index, array) => (
                      <div
                        key={item.label}
                        className={`
                          grid
                          gap-2
                          px-4
                          py-3.5
                          sm:grid-cols-[130px_minmax(0,1fr)]
                          ${
                            index !== array.length - 1
                              ? "border-b border-border"
                              : ""
                          }
                        `}
                      >
                        <p className="text-xs font-semibold">
                          {item.label}
                        </p>

                        <p
                          className="
                            text-xs
                            leading-5
                            text-navy-mute
                          "
                        >
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ==================================================
                  ISSUE 5
              ================================================== */}

              <div
                className="
                  mt-4
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >
                <div
                  className="
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-5
                    py-4
                  "
                >
                  <p className="text-sm font-semibold">
                    Recent activity is not visible yet
                  </p>
                </div>

                <div className="p-5">
                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Some analytics data may not appear
                    immediately. Processing and integration
                    timing can create a delay between store
                    activity and reporting.
                  </p>

                  <div
                    className="
                      mt-5
                      rounded-lg
                      bg-black/[0.035]
                      px-4
                      py-4
                    "
                  >
                    <div className="flex items-start gap-3">
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
                          text-xs
                          leading-5
                          text-navy-mute
                        "
                      >
                        Check the expected reporting delay
                        for the analytics integration you
                        use before treating recently missing
                        data as an error.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  ISSUE 6
              ================================================== */}

              <div
                className="
                  mt-4
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >
                <div
                  className="
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-5
                    py-4
                  "
                >
                  <p className="text-sm font-semibold">
                    Product rankings look unexpected
                  </p>
                </div>

                <div className="p-5">
                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Confirm which metric controls the
                    ranking. A product ranked by sales value
                    can appear in a different position from
                    the same product ranked by orders or
                    quantity.
                  </p>

                  <div
                    className="
                      mt-5
                      grid
                      gap-3
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
                      <CircleDollarSign className="h-4 w-4 text-coral" />

                      <p
                        className="
                          mt-3
                          text-xs
                          font-semibold
                        "
                      >
                        Sales Value
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          leading-5
                          text-navy-mute
                        "
                      >
                        Ranks by contribution to sales.
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
                      <ReceiptText className="h-4 w-4 text-coral" />

                      <p
                        className="
                          mt-3
                          text-xs
                          font-semibold
                        "
                      >
                        Orders
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          leading-5
                          text-navy-mute
                        "
                      >
                        Ranks by customer order activity.
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
                      <Package className="h-4 w-4 text-coral" />

                      <p
                        className="
                          mt-3
                          text-xs
                          font-semibold
                        "
                      >
                        Products
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          leading-5
                          text-navy-mute
                        "
                      >
                        Review the exact product metric used.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  TROUBLESHOOTING FLOW
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Quick troubleshooting flow
                </h3>

                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {[
                    {
                      number: "01",
                      title: "Check dates",
                      text: "Confirm the exact reporting period and time zone.",
                    },
                    {
                      number: "02",
                      title: "Check filters",
                      text: "Make sure an active filter is not excluding expected data.",
                    },
                    {
                      number: "03",
                      title: "Check definitions",
                      text: "Confirm what the selected metric actually measures.",
                    },
                    {
                      number: "04",
                      title: "Check related metrics",
                      text: "See whether the unexpected movement appears elsewhere in the dashboard.",
                    },
                    {
                      number: "05",
                      title: "Check store changes",
                      text: "Review relevant product, marketing, availability, or storefront updates.",
                    },
                    {
                      number: "06",
                      title: "Check data timing",
                      text: "Confirm whether the latest analytics data has finished processing.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="
                        rounded-lg
                        border
                        border-border
                        p-5
                      "
                    >
                      <p
                        className="
                          text-xs
                          font-bold
                          text-coral
                        "
                      >
                        {item.number}
                      </p>

                      <h4
                        className="
                          mt-2
                          text-sm
                          font-semibold
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-2
                          text-xs
                          leading-5
                          text-navy-mute
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  FINAL NOTE
              ================================================== */}

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
                  <BarChart3
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <div>
                    <p className="text-sm font-semibold">
                      Verify before reacting
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      If a report changes unexpectedly,
                      verify the dates, filters, tracking,
                      and metric definitions first. Once the
                      data is confirmed, use related metrics
                      to investigate the business change.
                    </p>
                  </div>
                </div>
              </div>
            </section>
                        {/* ==================================================
                RELATED GUIDES
            ================================================== */}

            <section className="py-8">
              <div>
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
                    max-w-2xl
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Continue exploring Sellio documentation to
                  learn more about managing your store,
                  products, storefront, and performance.
                </p>
              </div>

              {/* ==================================================
                  RELATED GUIDE CARDS
              ================================================== */}

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                {/* DOCUMENTATION */}

                <Link
                  href="/documentation"
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
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <BarChart3
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <ChevronRight
                      className="
                        h-4
                        w-4
                        text-navy-mute
                        transition-transform
                        group-hover:translate-x-1
                        group-hover:text-coral
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Documentation
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Browse the complete Sellio
                    documentation and available store
                    management guides.
                  </p>
                </Link>

                {/* STORE MANAGEMENT */}

                <Link
                  href="/documentation"
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
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <ShoppingCart
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <ChevronRight
                      className="
                        h-4
                        w-4
                        text-navy-mute
                        transition-transform
                        group-hover:translate-x-1
                        group-hover:text-coral
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Store Management
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Learn how store activity, products, and
                    customer orders connect with your
                    analytics.
                  </p>
                </Link>

                {/* STOREFRONT */}

                <Link
                  href="/documentation/settings-variables"
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
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <Package
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <ChevronRight
                      className="
                        h-4
                        w-4
                        text-navy-mute
                        transition-transform
                        group-hover:translate-x-1
                        group-hover:text-coral
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Storefront Settings
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Learn how reusable settings can control
                    information and presentation across
                    your storefront.
                  </p>
                </Link>

                {/* STANDARDS */}

                <Link
                  href="/documentation/standards-overview"
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
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <Check
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <ChevronRight
                      className="
                        h-4
                        w-4
                        text-navy-mute
                        transition-transform
                        group-hover:translate-x-1
                        group-hover:text-coral
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                    "
                  >
                    Standards Overview
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Review Sellio guidance for clear,
                    transparent, and customer-friendly
                    ecommerce experiences.
                  </p>
                </Link>
              </div>

              {/* ==================================================
                  ANALYTICS SUMMARY
              ================================================== */}

              <div
                className="
                  mt-8
                  rounded-xl
                  border
                  border-border
                  bg-black/[0.035]
                  p-5
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-coral/10
                    "
                  >
                    <TrendingUp
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Analytics summary
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Use analytics to understand patterns
                      across your store rather than relying
                      on one isolated number. Revenue,
                      orders, conversion, average order
                      value, traffic sources, and product
                      performance provide stronger context
                      when reviewed together.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  PREVIOUS / NEXT
              ================================================== */}

              <div
                className="
                  mt-10
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                {/* PREVIOUS */}

                <Link
                  href="/documentation/settings-variables"
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
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-navy-mute
                    "
                  >
                    <ArrowLeft
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:-translate-x-1
                      "
                    />

                    Previous
                  </div>

                  <p
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Settings-Variables
                  </p>

            
                </Link>

                {/* NEXT */}

                <Link
                  href="/documentation/google-analytics"
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                    p-5
                    text-left
                    transition-colors
                    hover:border-coral
                    sm:text-right
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-navy-mute
                      sm:justify-end
                    "
                  >
                    Next

                    <ArrowRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Google-Analytics
                  </p>

                </Link>
              </div>

              {/* ==================================================
                  FINAL PAGE NOTE
              ================================================== */}

              <div
                className="
                  mt-8
                  border-t
                  border-border
                  pt-6
                "
              >
                <p
                  className="
                    text-xs
                    leading-5
                    text-navy-mute
                  "
                >
                  Analytics definitions can vary between
                  platforms and integrations. When comparing
                  reports, use consistent date ranges,
                  filters, data sources, and metric
                  definitions.
                </p>
              </div>
            </section>
          </article>

          {/* ==================================================
              RIGHT SIDEBAR
          ================================================== */}

          <aside className="hidden xl:block">
            <div className="sticky top-28">
              {/* ==================================================
                  ON THIS PAGE
              ================================================== */}

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-navy
                "
              >
                On This Page
              </p>

              <nav
                className="mt-4"
                aria-label="On this page"
              >
                {sections.map((section) => {
                  const isActive =
                    activeSection === section.id;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() =>
                        setActiveSection(section.id)
                      }
                      aria-current={
                        isActive
                          ? "location"
                          : undefined
                      }
                      className={`
                        block
                        border-l
                        py-2
                        pl-4
                        text-xs
                        leading-5
                        transition-colors
                        ${
                          isActive
                            ? "-ml-px border-coral font-semibold text-coral"
                            : "-ml-px border-transparent text-navy-mute hover:border-navy/20 hover:text-navy"
                        }
                      `}
                    >
                      {section.label}
                    </a>
                  );
                })}
              </nav>

              {/* ==================================================
                  RELATED DOCUMENTATION
              ================================================== */}

              <div
                className="
                  mt-8
                  border-t
                  border-border
                  pt-6
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-navy
                  "
                >
                  Related
                </p>

                <div className="mt-4 space-y-3">
                  <Link
                    href="/documentation"
                    className="
                      group
                      flex
                      items-start
                      justify-between
                      gap-3
                      text-xs
                      leading-5
                      text-navy-mute
                      transition-colors
                      hover:text-coral
                    "
                  >
                    <span>Documentation</span>

                    <ChevronRight
                      className="
                        mt-0.5
                        h-3.5
                        w-3.5
                        shrink-0
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>

                  <Link
                    href="/documentation/settings-variables"
                    className="
                      group
                      flex
                      items-start
                      justify-between
                      gap-3
                      text-xs
                      leading-5
                      text-navy-mute
                      transition-colors
                      hover:text-coral
                    "
                  >
                    <span>
                      Settings Variables
                    </span>

                    <ChevronRight
                      className="
                        mt-0.5
                        h-3.5
                        w-3.5
                        shrink-0
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>

                  <Link
                    href="/documentation/standards-overview"
                    className="
                      group
                      flex
                      items-start
                      justify-between
                      gap-3
                      text-xs
                      leading-5
                      text-navy-mute
                      transition-colors
                      hover:text-coral
                    "
                  >
                    <span>
                      Standards Overview
                    </span>

                    <ChevronRight
                      className="
                        mt-0.5
                        h-3.5
                        w-3.5
                        shrink-0
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>
                </div>
              </div>

              {/* ==================================================
                  ANALYTICS TIP
              ================================================== */}

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <LineChart
                    className="
                      h-4
                      w-4
                      text-coral
                    "
                  />
                </div>

                <p
                  className="
                    mt-3
                    text-xs
                    font-semibold
                    text-navy
                  "
                >
                  Analytics tip
                </p>

                <p
                  className="
                    mt-2
                    text-[11px]
                    leading-5
                    text-navy-mute
                  "
                >
                  Compare equivalent periods and review
                  several related metrics before deciding
                  what caused a performance change.
                </p>
              </div>

              {/* ==================================================
                  QUICK METRICS
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  p-4
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    text-navy
                  "
                >
                  Core metrics
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    {
                      label: "Revenue",
                      href: "#revenue",
                      icon: CircleDollarSign,
                    },
                    {
                      label: "Orders",
                      href: "#orders",
                      icon: ReceiptText,
                    },
                    {
                      label: "Conversion",
                      href: "#conversion",
                      icon: MousePointerClick,
                    },
                    {
                      label: "Traffic",
                      href: "#traffic-sources",
                      icon: Users,
                    },
                    {
                      label: "Products",
                      href: "#top-products",
                      icon: Package,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="
                          group
                          flex
                          items-center
                          gap-2.5
                          text-[11px]
                          text-navy-mute
                          transition-colors
                          hover:text-coral
                        "
                      >
                        <Icon
                          className="
                            h-3.5
                            w-3.5
                            shrink-0
                            text-coral
                          "
                        />

                        <span>
                          {item.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* ==================================================
                  BACK TO TOP
              ================================================== */}

              <a
                href="#overview"
                onClick={() =>
                  setActiveSection("overview")
                }
                className="
                  group
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-navy-mute
                  transition-colors
                  hover:text-coral
                "
              >
                <ArrowLeft
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    group-hover:-translate-x-1
                  "
                />

                Back to overview
              </a>
            </div>
          </aside>
        </div>
      </main>

      {/* ========================================================
          FOOTER
      ======================================================== */}

      <Footer />
    </>
  );
}