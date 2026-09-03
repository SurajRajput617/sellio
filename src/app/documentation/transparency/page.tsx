"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Eye,
  FileText,
  Info,
  PackageCheck,
  ReceiptText,
  RotateCcw,
  ShieldCheck,
  Tag,
  Truck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

const sections = [
  {
    id: "product-information",
    label: "Product information",
  },
  {
    id: "pricing",
    label: "Pricing transparency",
  },
  {
    id: "availability",
    label: "Product availability",
  },
  {
    id: "delivery",
    label: "Delivery information",
  },
  {
    id: "checkout",
    label: "Checkout transparency",
  },
  {
    id: "promotions",
    label: "Promotional terms",
  },
  {
    id: "returns",
    label: "Returns & refunds",
  },
  {
    id: "communications",
    label: "Customer communications",
  },
  {
    id: "policies",
    label: "Store policies",
  },
];

export default function TransparencyPage() {
  const [activeSection, setActiveSection] =
    useState("product-information");

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;

      sections.forEach((item) => {
        const element =
          document.getElementById(item.id);

        if (!element) return;

        const position =
          element.getBoundingClientRect().top;

        if (position <= 180) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    handleScroll();

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
          {/* ====================================== */}
          {/* LEFT DOCUMENTATION SIDEBAR */}
          {/* ====================================== */}

          <DocumentationSidebar />

          {/* ====================================== */}
          {/* MAIN ARTICLE */}
          {/* ====================================== */}

          <article className="min-w-0">

            {/* ====================================== */}
            {/* PAGE HEADER */}
            {/* ====================================== */}

            <section
              className="
                border-b
                border-border
                pb-8
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  text-coral
                "
              >
                Standards
              </p>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-3
                "
              >
                <Eye
                  className="
                    h-7
                    w-7
                    shrink-0
                    text-coral
                  "
                />

                <h1
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                  "
                >
                  Transparency
                </h1>
              </div>

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Clear store information helps customers
                understand what they are buying, how much
                they will pay, when their order should
                arrive, and which policies apply to their
                purchase.
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
                Sellio stores should keep important product,
                pricing, checkout, delivery, promotional,
                return, and customer-support information
                accurate and easy to find.
              </p>

              {/* IMPORTANT CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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
                  <CircleAlert
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
                    Store information should accurately
                    represent the products, prices, delivery
                    options, promotions, and policies
                    customers will actually receive.
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Review the areas below whenever you add new
                products, change pricing, create promotions,
                update shipping methods, or modify your
                customer policies.
              </p>
            </section>

            {/* ====================================== */}
            {/* PRODUCT INFORMATION */}
            {/* ====================================== */}

            <section
              id="product-information"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Product information
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Product pages should give customers enough
                information to understand what is being
                offered before they add an item to their
                cart.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep product titles, descriptions,
                specifications, images, prices, options, and
                availability information current.
              </p>

              <div className="mt-6 space-y-3">

                <div
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  <CheckCircle2
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <span>
                    Use product titles that clearly identify
                    the item being sold.
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  <CheckCircle2
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <span>
                    Keep descriptions and specifications
                    accurate.
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  <CheckCircle2
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <span>
                    Clearly identify product options such as
                    size, style, or configuration when they
                    affect the order.
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  <CheckCircle2
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <span>
                    Review customer-facing product
                    information whenever your catalogue
                    changes.
                  </span>
                </div>
              </div>

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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
                    A useful product page should answer the
                    customer&apos;s main questions without
                    requiring them to contact support first.
                  </p>
                </div>
              </div>
            </section>

            {/* ====================================== */}
            {/* PRICING TRANSPARENCY */}
            {/* ====================================== */}

            <section
              id="pricing"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Pricing transparency
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Customers should be able to understand the
                price of an item and see important additional
                charges before completing checkout.
              </p>

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  p-5
                "
              >
                <div className="flex items-center gap-3">
                  <Tag
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3 className="text-sm font-semibold">
                    Pricing checklist
                  </h3>
                </div>

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
                    • Keep displayed product prices current.
                  </li>

                  <li>
                    • Clearly show when different product
                    options have different prices.
                  </li>

                  <li>
                    • Display relevant delivery charges
                    during checkout.
                  </li>

                  <li>
                    • Make promotional prices and conditions
                    understandable.
                  </li>

                  <li>
                    • Check the final order total before
                    publishing checkout changes.
                  </li>
                </ul>
              </div>

              <div className="mt-7">
                <p className="text-sm font-semibold">
                  Review your pricing setup:
                </p>

                <div className="mt-5">

                  {/* STEP 1 */}
                  <div
                    className="
                      relative
                      flex
                      gap-5
                      pb-7
                    "
                  >
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div>
                      <h3 className="text-base font-bold">
                        Review product prices
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check your active products and make
                        sure the displayed prices match your
                        current catalogue.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div
                    className="
                      relative
                      flex
                      gap-5
                      pb-7
                    "
                  >
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div>
                      <h3 className="text-base font-bold">
                        Review additional charges
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check delivery and other applicable
                        checkout charges so customers can
                        understand the final amount.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex gap-5">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div>
                      <h3 className="text-base font-bold">
                        Test checkout
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Complete a test checkout and confirm
                        that product prices and the final
                        order total are displayed correctly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
                        {/* ====================================== */}
            {/* PRODUCT AVAILABILITY */}
            {/* ====================================== */}

            <section
              id="availability"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Product availability
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Customers should be able to understand
                whether a product is available before they
                reach the final stages of checkout.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep inventory information current and
                review products whenever stock levels,
                product options, or availability change.
              </p>

              <ul
                className="
                  mt-5
                  space-y-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <span>
                    Keep stock and availability information
                    current.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <span>
                    Clearly identify unavailable products or
                    product options.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <span>
                    Review inventory information after
                    important catalogue changes.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <span>
                    Make availability information consistent
                    between product pages and checkout.
                  </span>
                </li>
              </ul>

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
                  <PackageCheck
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
                    Review availability before running
                    promotions so customers do not receive
                    outdated information about products that
                    are no longer available.
                  </p>
                </div>
              </div>
            </section>

            {/* ====================================== */}
            {/* DELIVERY INFORMATION */}
            {/* ====================================== */}

            <section
              id="delivery"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-center gap-3">
                <Truck
                  className="
                    h-5
                    w-5
                    text-coral
                  "
                />

                <h2 className="text-xl font-bold">
                  Delivery information
                </h2>
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Delivery information should help customers
                understand the options available for their
                order before they complete checkout.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep delivery methods, charges, service
                areas, and other important fulfilment
                information consistent across your store.
              </p>

              {/* DELIVERY CARDS */}
              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
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
                  <Truck
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Delivery methods
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Clearly identify the delivery methods
                    customers can select for eligible
                    orders.
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
                  <ReceiptText
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Delivery charges
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Make applicable delivery charges visible
                    before the customer submits payment.
                  </p>
                </div>
              </div>

              {/* DELIVERY CHECKLIST */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.025]
                  p-5
                "
              >
                <h3
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Delivery information checklist
                </h3>

                <div className="mt-4 space-y-3">
                  <div
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <CheckCircle2
                      className="
                        mt-1
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
                      Keep available delivery methods
                      current.
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <CheckCircle2
                      className="
                        mt-1
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
                      Clearly display applicable delivery
                      charges.
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <CheckCircle2
                      className="
                        mt-1
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
                      Explain relevant delivery areas or
                      restrictions.
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <CheckCircle2
                      className="
                        mt-1
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
                      Review the information shown in the
                      cart and checkout.
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <CheckCircle2
                      className="
                        mt-1
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
                      Keep customer order confirmations
                      consistent with the selected delivery
                      option.
                    </p>
                  </div>
                </div>
              </div>

              {/* INFO CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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
                    If you change a delivery method or
                    charge, review your product pages,
                    checkout, policies, and customer
                    communications for outdated information.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* DELIVERY SETUP STEPS */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3
                  className="
                    text-base
                    font-bold
                  "
                >
                  Review your delivery setup
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Use the following review process whenever
                  you add or change a delivery option.
                </p>

                <div className="mt-6">

                  {/* STEP 1 */}
                  <div
                    className="
                      relative
                      flex
                      gap-5
                      pb-8
                    "
                  >
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          text-base
                          font-bold
                        "
                      >
                        Review your delivery methods
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check the delivery methods currently
                        available to customers and remove or
                        update any options that are no longer
                        offered.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div
                    className="
                      relative
                      flex
                      gap-5
                      pb-8
                    "
                  >
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          text-base
                          font-bold
                        "
                      >
                        Check delivery charges
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Confirm that applicable delivery
                        charges are accurate and displayed
                        clearly before the customer completes
                        checkout.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div
                    className="
                      relative
                      flex
                      gap-5
                      pb-8
                    "
                  >
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          text-base
                          font-bold
                        "
                      >
                        Review customer-facing information
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check your shipping or delivery
                        policy, product information, cart,
                        and checkout for consistency.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div
                    className="
                      relative
                      flex
                      gap-5
                      pb-8
                    "
                  >
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          text-base
                          font-bold
                        "
                      >
                        Complete a test checkout
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Add a product to the cart and check
                        that the expected delivery options
                        and charges appear correctly.
                      </p>
                    </div>
                  </div>

                  {/* STEP 5 */}
                  <div
                    className="
                      relative
                      flex
                      gap-5
                    "
                  >
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                      5
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          text-base
                          font-bold
                        "
                      >
                        Review the order confirmation
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Make sure the customer&apos;s selected
                        delivery option is represented
                        correctly in the order confirmation
                        and relevant order information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

        
            </section>
                        {/* ====================================== */}
            {/* CHECKOUT TRANSPARENCY */}
            {/* ====================================== */}

            <section
              id="checkout"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Checkout transparency
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Checkout should give customers a clear
                summary of what they are ordering before
                payment is submitted.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Review your checkout whenever you change
                products, prices, delivery methods,
                promotions, payment options, or other
                customer-facing store settings.
              </p>

              {/* CHECKOUT SUMMARY CARD */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  p-5
                "
              >
                <div className="flex items-center gap-3">
                  <ReceiptText
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3 className="text-sm font-semibold">
                    Checkout information
                  </h3>
                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Before payment, customers should be able
                  to review the important information
                  associated with their order.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Products and quantities included in
                      the order.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Product prices and relevant discounts.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Selected delivery method and applicable
                      delivery charges.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      The final order total before payment is
                      submitted.
                    </p>
                  </div>
                </div>
              </div>

              {/* CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
                  <CircleAlert
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
                    Avoid placing important pricing or
                    delivery information only after the
                    customer has completed payment.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* CHECKOUT REVIEW STEPS */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Review your checkout
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Complete the following checks before
                  publishing important checkout changes.
                </p>

                <div className="mt-6">
                  {/* STEP 1 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Add a product to the cart
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Select a typical product and confirm
                        that the correct product information,
                        quantity, and price appear in the
                        cart.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Continue to checkout
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Review the information requested from
                        the customer and make sure the
                        checkout flow is understandable.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Review delivery
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Confirm that available delivery
                        options and relevant charges are
                        displayed correctly.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Review the final total
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Make sure discounts, delivery
                        charges, and other applicable amounts
                        are reflected in the final total.
                      </p>
                    </div>
                  </div>

                  {/* STEP 5 */}
                  <div className="relative flex gap-5">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                      5
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Check the confirmation
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Review the confirmation page and
                        order email to make sure the
                        customer receives useful information
                        after checkout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/documentation/payment-gateway"
                className="
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

                  Payment &amp; Checkout Settings
                </span>

                <ChevronRight className="h-4 w-4" />
              </Link>
            </section>

            {/* ====================================== */}
            {/* PROMOTIONAL TERMS */}
            {/* ====================================== */}

            <section
              id="promotions"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Promotional terms
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Promotions should clearly explain what the
                customer receives and any important
                conditions that affect the offer.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Review promotional content before publishing
                it across your homepage, product pages,
                banners, email campaigns, or other marketing
                channels.
              </p>

              {/* PROMOTION CARDS */}
              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
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
                  <Tag
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Offer information
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Clearly explain the discount, benefit, or
                    promotional price being offered.
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
                  <FileText
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Important conditions
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Make relevant eligibility, product, or
                    timing conditions easy for customers to
                    understand.
                  </p>
                </div>
              </div>

              {/* PROMOTIONAL CHECKLIST */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.025]
                  p-5
                "
              >
                <h3 className="text-sm font-semibold">
                  Before publishing a promotion
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Check that the promotional message
                      matches the offer configured in your
                      store.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Identify the products or categories
                      included in the promotion where
                      relevant.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Make important conditions visible
                      before the customer relies on the
                      offer.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Check that promotional pricing is
                      reflected correctly in the cart and
                      checkout.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Remove or update promotional messages
                      when the offer changes or ends.
                    </p>
                  </div>
                </div>
              </div>

              {/* INFO */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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
                    Keep promotional information consistent
                    across your store, email campaigns, and
                    other customer-facing marketing
                    channels.
                  </p>
                </div>
              </div>

              {/* RELATED LINKS */}
              <div className="mt-6 space-y-3">
                <Link
                  href="/documentation/promos-and-discounts"
                  className="
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
                  <span>
                    Promos &amp; Discounts
                  </span>

                  <ChevronRight className="h-4 w-4" />
                </Link>

    
              </div>
            </section>
                        {/* ====================================== */}
            {/* RETURNS & REFUNDS */}
            {/* ====================================== */}

            <section
              id="returns"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-coral" />

                <h2 className="text-xl font-bold">
                  Returns &amp; refunds
                </h2>
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Customers should be able to find clear
                information about your store&apos;s return
                and refund process before and after placing
                an order.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep your published policy consistent with
                the process your store actually follows.
                Review the information whenever your return
                requirements, support process, or fulfilment
                workflow changes.
              </p>

              {/* RETURN POLICY CARD */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  p-5
                "
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-coral" />

                  <h3 className="text-sm font-semibold">
                    Return policy information
                  </h3>
                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Your customer-facing information should
                  explain the main steps customers need to
                  follow when requesting a return or refund.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <p className="text-sm leading-6 text-navy-mute">
                      Make the return and refund policy easy
                      to locate.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <p className="text-sm leading-6 text-navy-mute">
                      Explain how customers can start a
                      request.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <p className="text-sm leading-6 text-navy-mute">
                      Identify the information customers may
                      need to provide.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <p className="text-sm leading-6 text-navy-mute">
                      Keep customers informed when the status
                      of their request changes.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <p className="text-sm leading-6 text-navy-mute">
                      Update published information whenever
                      your store process changes.
                    </p>
                  </div>
                </div>
              </div>

              {/* INFO CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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

                  <p className="text-sm leading-6 text-navy-mute">
                    Avoid leaving outdated return
                    instructions on product pages, policy
                    pages, emails, or support documentation
                    after changing your process.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* RETURN PROCESS STEPS */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Review your returns process
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Use this review whenever you update your
                  customer service or return workflow.
                </p>

                <div className="mt-6">
                  {/* STEP 1 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Review your published policy
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Read the policy from a customer&apos;s
                        perspective and check that it matches
                        your current store process.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Check the support route
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Confirm that customers can easily
                        identify where to send a return or
                        refund request.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Review request information
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Make sure customers know which order
                        or account information is useful when
                        requesting assistance.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="relative flex gap-5">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Review customer updates
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check that customers receive clear
                        information as their request moves
                        through your support process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RELATED LINKS */}
              <div className="mt-8 space-y-3">
               

                <Link
                  href="/#contact"
                  className="
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
                  <span>Customer Support</span>

                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            {/* ====================================== */}
            {/* CUSTOMER COMMUNICATIONS */}
            {/* ====================================== */}

            <section
              id="communications"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Customer communications
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Customer-facing messages should be clear,
                consistent, and connected to the action or
                order they describe.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Review automated emails and other customer
                messages whenever you change checkout,
                fulfilment, support, or promotional
                processes.
              </p>

              {/* COMMUNICATION CARDS */}
              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
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
                  <BadgeCheck className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Order confirmations
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Confirm what was ordered and provide
                    useful information about what happens
                    next.
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
                  <Truck className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Fulfilment updates
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Keep relevant delivery and fulfilment
                    messages consistent with the
                    customer&apos;s order.
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
                  <RotateCcw className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Support updates
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Give customers understandable updates
                    when a support, return, or refund request
                    changes status.
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
                  <Tag className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Marketing messages
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Keep promotional messages consistent
                    with the offer and product information
                    shown in your store.
                  </p>
                </div>
              </div>

              {/* COMMUNICATION CHECKLIST */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.025]
                  p-5
                "
              >
                <h3 className="text-sm font-semibold">
                  Communication checklist
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <p className="text-sm leading-6 text-navy-mute">
                      Use clear subject lines and headings.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <p className="text-sm leading-6 text-navy-mute">
                      Make the purpose of the message easy to
                      understand.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <p className="text-sm leading-6 text-navy-mute">
                      Include useful order or support context
                      where appropriate.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <p className="text-sm leading-6 text-navy-mute">
                      Keep links and customer instructions
                      current.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <p className="text-sm leading-6 text-navy-mute">
                      Review automated messages after making
                      important store changes.
                    </p>
                  </div>
                </div>
              </div>

              {/* IMPORTANT CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
                  <CircleAlert
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <p className="text-sm leading-6 text-navy-mute">
                    If a store setting changes the customer
                    journey, review the related emails and
                    automated messages at the same time.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* COMMUNICATION REVIEW STEPS */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Review your customer messages
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Check the complete customer journey rather
                  than reviewing each message in isolation.
                </p>

                <div className="mt-6">
                  {/* STEP 1 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div>
                      <h3 className="text-base font-bold">
                        Review checkout messages
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check the confirmation page and any
                        messages sent immediately after an
                        order.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div>
                      <h3 className="text-base font-bold">
                        Review fulfilment updates
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Make sure order and delivery updates
                        use information that matches your
                        current fulfilment process.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div>
                      <h3 className="text-base font-bold">
                        Review support messages
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check that support instructions and
                        contact information are still
                        correct.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="relative flex gap-5">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div>
                      <h3 className="text-base font-bold">
                        Send a test message
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Test important automated messages and
                        check their content, links, layout,
                        and customer instructions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RELATED LINKS */}
              <div className="mt-8 space-y-3">
             

                <Link
                  href="/#contact"
                  className="
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
                  <span>Customer Support</span>

                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
                        {/* ====================================== */}
            {/* STORE POLICIES */}
            {/* ====================================== */}

            <section
              id="policies"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Store policies
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Store policies give customers important
                information about how your business handles
                orders, delivery, returns, privacy, and
                customer support.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep these pages easy to find and review
                them whenever your store processes change.
                Information shown in your policies should
                remain consistent with the customer
                experience across your Sellio store.
              </p>

              {/* POLICY CARDS */}
              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
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
                  <Truck className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Delivery policy
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Explain relevant delivery methods,
                    charges, service information, and other
                    important fulfilment details.
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
                  <RotateCcw className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Returns policy
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Explain how customers can find
                    information about returns, refunds, and
                    relevant support.
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
                  <ShieldCheck className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Privacy information
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Give customers clear access to
                    information about relevant data and
                    privacy practices.
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
                  <FileText className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Terms
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Keep your customer-facing terms
                    accessible and consistent with your
                    current store operations.
                  </p>
                </div>
              </div>

              {/* IMPORTANT CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
                  <CircleAlert
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
                    When you change an important store
                    process, check whether your policies,
                    checkout information, emails, and support
                    documentation also need to be updated.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* POLICY REVIEW PROCESS */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Review your store policies
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Use this process when reviewing important
                  customer-facing store information.
                </p>

                <div className="mt-6">
                  {/* STEP 1 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Identify the affected policy
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Determine which customer-facing
                        policy or information page relates to
                        the store process you changed.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Compare policy and store information
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Compare the published policy with
                        product pages, checkout information,
                        customer emails, and support
                        instructions.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Update outdated information
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Replace instructions or information
                        that no longer reflects your current
                        customer experience.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="relative flex gap-5">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
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
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Check the published page
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Open the live page after publishing
                        and confirm that the content, links,
                        headings, and mobile layout work as
                        expected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ====================================== */}
            {/* TRANSPARENCY CHECKLIST */}
            {/* ====================================== */}

            <section
              className="
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Transparency checklist
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use this checklist when reviewing the
                customer-facing areas of your Sellio store.
              </p>

              <div
                className="
                  mt-6
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >
                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_90px]
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-4
                    py-3
                  "
                >
                  <p className="text-xs font-semibold">
                    Area
                  </p>

                  <p
                    className="
                      text-right
                      text-xs
                      font-semibold
                    "
                  >
                    Review
                  </p>
                </div>

                {/* PRODUCT INFORMATION */}
                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_90px]
                    items-center
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Product information
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Titles, descriptions, options, and
                      important product details.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <CheckCircle2
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />
                  </div>
                </div>

                {/* PRICING */}
                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_90px]
                    items-center
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Pricing
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Product prices, discounts, charges, and
                      final totals.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <CheckCircle2
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />
                  </div>
                </div>

                {/* AVAILABILITY */}
                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_90px]
                    items-center
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Availability
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Stock and product availability
                      information.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <CheckCircle2
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />
                  </div>
                </div>

                {/* DELIVERY */}
                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_90px]
                    items-center
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Delivery
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Delivery options, charges, and
                      fulfilment information.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <CheckCircle2
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />
                  </div>
                </div>

                {/* CHECKOUT */}
                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_90px]
                    items-center
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Checkout
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Order summary and final customer
                      information before payment.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <CheckCircle2
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />
                  </div>
                </div>

                {/* PROMOTIONS */}
                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_90px]
                    items-center
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Promotions
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Offer information and relevant
                      promotional conditions.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <CheckCircle2
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />
                  </div>
                </div>

                {/* RETURNS */}
                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_90px]
                    items-center
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Returns &amp; refunds
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Policy, request instructions, and
                      customer updates.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <CheckCircle2
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />
                  </div>
                </div>

                {/* COMMUNICATIONS */}
                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_90px]
                    items-center
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Communications
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Order, delivery, support, and marketing
                      messages.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <CheckCircle2
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />
                  </div>
                </div>
              </div>

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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
                    A useful review checks the complete
                    customer journey—from the product page
                    through checkout, confirmation,
                    fulfilment, support, and post-purchase
                    communication.
                  </p>
                </div>
              </div>
            </section>

            {/* ====================================== */}
            {/* RELATED GUIDES */}
            {/* ====================================== */}

            <section className="py-8">
              <h2 className="text-xl font-bold">
                Related guides
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                Continue with related Sellio documentation
                for store setup, payments, delivery,
                marketing, and reporting.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  href="/documentation/payment-gateway"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    border
                    border-border
                    px-4
                    py-3.5
                    text-sm
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

                    Payment &amp; Checkout
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

        

                <Link
                  href="/documentation/promos-and-discounts"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    border
                    border-border
                    px-4
                    py-3.5
                    text-sm
                    transition-colors
                    hover:border-coral
                  "
                >
                  <span className="flex items-center gap-3">
                    <Tag
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />

                    Promos &amp; Discounts
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

            
              </div>
            </section>

            {/* ====================================== */}
            {/* PREVIOUS / NEXT */}
            {/* ====================================== */}

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
                href="/documentation/player-protections"
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
                  "
                >
                  <ArrowLeft
                    className="
                      h-4
                      w-4
                      transition-transform
                      group-hover:-translate-x-1
                    "
                  />

                  <span>
                   Player-Protections
                  </span>
                </div>
              </Link>

              <Link
                href="/documentation/accountability"
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
                  "
                >
                  <span>
                    Accountability
                  </span>

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </Link>
            </div>

            <p
              className="
                mt-5
                text-xs
                leading-5
                text-navy-mute
              "
            >
              Review transparency information whenever you
              change products, pricing, delivery, checkout,
              promotions, returns, or customer
              communications.
            </p>
          </article>
                    {/* ====================================== */}
          {/* RIGHT SIDEBAR — ON THIS PAGE */}
          {/* ====================================== */}

          <aside className="hidden xl:block">
            <div
              className="
                sticky
                top-28
                border-l
                border-border
                pl-6
              "
            >
              {/* SIDEBAR TITLE */}
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-navy-mute
                "
              >
                On This Page
              </p>

              {/* SECTION LINKS */}
              <nav className="mt-5 space-y-3">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() =>
                      setActiveSection(item.id)
                    }
                    className={`
                      block
                      border-l-2
                      py-0.5
                      pl-3
                      text-xs
                      leading-5
                      transition-all
                      ${
                        activeSection === item.id
                          ? "border-coral font-semibold text-coral"
                          : "border-transparent text-navy-mute hover:border-border hover:text-navy"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* ====================================== */}
              {/* RELATED SECTION */}
              {/* ====================================== */}

              <div
                className="
                  mt-8
                  border-t
                  border-border
                  pt-5
                "
              >
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-navy-mute
                  "
                >
                  Related
                </p>

                <div className="mt-4 space-y-3">
                  <Link
                    href="/documentation/standards-overview"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-2
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

              {/* ====================================== */}
              {/* QUICK GUIDES */}
              {/* ====================================== */}

              <div
                className="
                  mt-7
                  border-t
                  border-border
                  pt-5
                "
              >
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-navy-mute
                  "
                >
                  Quick Guides
                </p>

                <div className="mt-4 space-y-3">
                  <Link
                    href="/documentation/payment-gateway"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-2
                      text-xs
                      leading-5
                      text-navy-mute
                      transition-colors
                      hover:text-coral
                    "
                  >
                    <span>
                      Payment &amp; Checkout
                    </span>

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        shrink-0
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>


                  <Link
                    href="/documentation/promos-and-discounts"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-2
                      text-xs
                      leading-5
                      text-navy-mute
                      transition-colors
                      hover:text-coral
                    "
                  >
                    <span>
                      Promos &amp; Discounts
                    </span>

                    <ChevronRight
                      className="
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

              {/* ====================================== */}
              {/* HELP CARD */}
              {/* ====================================== */}

              <div
                className="
                  mt-7
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.025]
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
                  Need more help?
                </p>

                <p
                  className="
                    mt-2
                    text-[11px]
                    leading-5
                    text-navy-mute
                  "
                >
                  Find more Sellio guides or contact support
                  if you need help reviewing your store.
                </p>

                <Link
                  href="/#contact"
                  className="
                    group
                    mt-4
                    inline-flex
                    items-center
                    gap-1.5
                    text-xs
                    font-semibold
                    text-coral
                    transition-opacity
                    hover:opacity-70
                  "
                >
                  Contact Sellio

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>

              {/* ====================================== */}
              {/* BACK TO DOCUMENTATION */}
              {/* ====================================== */}

              <div
                className="
                  mt-6
                  border-t
                  border-border
                  pt-5
                "
              >
                <Link
                  href="/documentation"
                  className="
                    group
                    flex
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

                  Documentation Home
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </main>
    

      <Footer />
    </>
  );
}