"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  CreditCard,
  Headphones,
  Info,
  LockKeyhole,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

const sections = [
  {
    id: "customer-verification",
    label: "Customer verification",
  },
  {
    id: "account-security",
    label: "Account security",
  },
  {
    id: "payment-protection",
    label: "Payment protection",
  },
  {
    id: "order-transparency",
    label: "Order transparency",
  },
  {
    id: "returns-refunds",
    label: "Returns & refunds",
  },
  {
    id: "customer-support",
    label: "Customer support",
  },
  {
    id: "privacy",
    label: "Privacy & data",
  },
  {
    id: "account-controls",
    label: "Account controls",
  },
  {
    id: "monitoring",
    label: "Monitoring activity",
  },
];

export default function PlayerProtectionsPage() {
  const [activeSection, setActiveSection] =
    useState("customer-verification");

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;

      sections.forEach((item) => {
        const element =
          document.getElementById(item.id);

        if (!element) return;

        if (
          element.getBoundingClientRect().top <= 180
        ) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
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
          {/* LEFT SELLIO DOCUMENTATION NAV */}
          <DocumentationSidebar />

          {/* MAIN ARTICLE */}
          <article className="min-w-0">

            {/* PAGE HEADER */}
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
                <ShieldCheck
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
                  Customer Protections
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
                Sellio provides tools and recommended
                practices that help you create a clear,
                secure, and dependable experience for
                customers using your online store.
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
                This guide covers customer accounts,
                payments, orders, privacy, refunds, support,
                and the store settings that should be
                reviewed regularly.
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
                    These standards are general operational
                    guidance. Your store policies should
                    accurately reflect how your business
                    handles customer accounts, payments,
                    delivery, returns, privacy, and support.
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
                Review each area below before launching your
                store and whenever you make significant
                changes to checkout, payments, customer
                accounts, or fulfilment.
              </p>
            </section>
                        {/* ====================================== */}
            {/* CUSTOMER VERIFICATION */}
            {/* ====================================== */}

            <section
              id="customer-verification"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Customer verification
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Customer information should be collected
                only when it is needed for account access,
                fulfilment, payment, support, or another
                clearly explained store function.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep registration and checkout forms simple.
                Avoid requesting information that your store
                does not need to complete the customer&apos;s
                request.
              </p>

              <div className="mt-5 space-y-3">
                <div
                  className="
                    flex
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

                  Keep required fields clearly labelled.
                </div>

                <div
                  className="
                    flex
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

                  Explain why important customer information
                  is required.
                </div>

                <div
                  className="
                    flex
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

                  Keep account and checkout instructions easy
                  to understand.
                </div>
              </div>

              {/* STEPS */}
              <div className="mt-7">
                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  To review customer registration:
                </p>

                <div className="mt-5">
                  {/* STEP 1 */}
                  <div className="relative flex gap-5 pb-7">
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
                        Open your customer settings
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Open your Sellio or connected store
                        dashboard and locate the customer
                        account settings.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex gap-5 pb-7">
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
                      <h3
                        className="
                          text-base
                          font-bold
                        "
                      >
                        Review required information
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Confirm that your forms request only
                        the customer information needed for
                        your store process.
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
                      <h3
                        className="
                          text-base
                          font-bold
                        "
                      >
                        Test the customer journey
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Test registration, sign-in, password
                        recovery, and checkout before making
                        changes live.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ====================================== */}
            {/* ACCOUNT SECURITY */}
            {/* ====================================== */}

            <section
              id="account-security"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Account security
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Store owners should keep administrative
                access protected and provide customers with
                dependable ways to access and recover their
                accounts.
              </p>

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
                  <LockKeyhole
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
                    Secure administrator access
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Limit dashboard access to people who need
                    it and review permissions when team
                    responsibilities change.
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
                  <UserCheck
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
                    Customer recovery
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Keep password-reset and account-recovery
                    instructions clear and easy to locate.
                  </p>
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
                    Review team access whenever a staff
                    member joins, changes responsibilities,
                    or no longer requires dashboard access.
                  </p>
                </div>
              </div>
            </section>
                        {/* ====================================== */}
            {/* PAYMENT PROTECTION */}
            {/* ====================================== */}

            <section
              id="payment-protection"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Payment protection
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Customers should be able to understand what
                they are paying, which payment methods are
                available, and whether their transaction has
                completed successfully.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use supported payment providers and keep
                sensitive payment handling within the
                checkout services configured for your store.
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
                  <CreditCard
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3 className="font-semibold">
                    Payment checklist
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
                    • Confirm product prices before checkout.
                  </li>

                  <li>
                    • Display relevant delivery charges before
                    payment.
                  </li>

                  <li>
                    • Keep available payment methods clearly
                    identified.
                  </li>

                  <li>
                    • Test successful and unsuccessful
                    checkout states.
                  </li>

                  <li>
                    • Make order confirmation information easy
                    to understand.
                  </li>
                </ul>
              </div>

              <div className="mt-7">
                <p className="text-sm font-semibold">
                  Review your checkout setup:
                </p>

                <div className="mt-5">
                  <div className="relative flex gap-5 pb-7">
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
                        Open payment settings
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Review the payment providers and
                        checkout methods currently enabled
                        for your store.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex gap-5 pb-7">
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
                        Check checkout information
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Confirm pricing, delivery costs, tax
                        information where applicable, and the
                        final order total.
                      </p>
                    </div>
                  </div>

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
                        Complete a test order
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check the checkout, confirmation page,
                        order email, and dashboard order
                        record.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ====================================== */}
            {/* ORDER TRANSPARENCY */}
            {/* ====================================== */}

            <section
              id="order-transparency"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Order transparency
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Give customers enough information to
                understand what they ordered, what they paid,
                and what happens next.
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
                <li>
                  • Display accurate product names and
                  quantities.
                </li>

                <li>
                  • Show the complete order total clearly.
                </li>

                <li>
                  • Provide useful delivery information.
                </li>

                <li>
                  • Send an understandable order
                  confirmation.
                </li>

                <li>
                  • Make support information available if the
                  customer needs help.
                </li>
              </ul>

              <Link
                href="/documentation/tracking"
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3
                  text-sm
                  transition-colors
                  hover:border-coral
                "
              >
                <span>
                  Tracking &amp; order information
                </span>

                <ChevronRight className="h-4 w-4" />
              </Link>
            </section>
                        {/* ====================================== */}
            {/* RETURNS & REFUNDS */}
            {/* ====================================== */}

            <section
              id="returns-refunds"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Returns &amp; refunds
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep your return and refund information easy
                for customers to find and make sure the
                published policy matches how your store
                actually handles requests.
              </p>

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
                  p-5
                "
              >
                <div className="flex items-start gap-3">
                  <RotateCcw
                    className="
                      mt-0.5
                      h-5
                      w-5
                      shrink-0
                      text-coral
                    "
                  />

                  <div>
                    <h3 className="text-sm font-semibold">
                      Keep the process clear
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Explain how customers start a request,
                      what information they need to provide,
                      and how they will receive updates.
                    </p>
                  </div>
                </div>
              </div>

              <ul
                className="
                  mt-5
                  space-y-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                <li>
                  • Keep the returns policy accessible.
                </li>

                <li>
                  • Explain the steps for submitting a
                  request.
                </li>

                <li>
                  • Keep customers informed about the status
                  of their request.
                </li>

                <li>
                  • Review published terms whenever your
                  process changes.
                </li>
              </ul>
            </section>

            {/* ====================================== */}
            {/* CUSTOMER SUPPORT */}
            {/* ====================================== */}

            <section
              id="customer-support"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Customer support
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Customers should be able to find a clear
                route to support when they have questions
                about accounts, orders, delivery, payments,
                or other store services.
              </p>

              <div
                className="
                  mt-6
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
                    p-4
                  "
                >
                  <Headphones
                    className="
                      h-4
                      w-4
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
                    Account help
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Sign-in, profile, and account access
                    questions.
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
                  <PackageCheck
                    className="
                      h-4
                      w-4
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
                    Order help
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Orders, delivery information, and
                    fulfilment questions.
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
                  <CreditCard
                    className="
                      h-4
                      w-4
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
                    Payment help
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Checkout and transaction questions.
                  </p>
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
                    Keep support contact details current and
                    remove outdated instructions whenever
                    your support process changes.
                  </p>
                </div>
              </div>
            </section>

            {/* ====================================== */}
            {/* PRIVACY */}
            {/* ====================================== */}

            <section
              id="privacy"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Privacy &amp; customer data
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Customer data should be handled carefully and
                only made available to people and systems
                that need it for appropriate store
                operations.
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
                <li>
                  • Keep your privacy information easy to
                  locate.
                </li>

                <li>
                  • Limit unnecessary access to customer
                  information.
                </li>

                <li>
                  • Keep stored customer details accurate
                  where appropriate.
                </li>

                <li>
                  • Review connected apps and integrations.
                </li>

                <li>
                  • Remove access that is no longer required.
                </li>
              </ul>

             
            </section>
                        {/* ====================================== */}
            {/* ACCOUNT CONTROLS */}
            {/* ====================================== */}

            <section
              id="account-controls"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Account controls
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Give customers sensible ways to manage their
                account information and make important
                account actions understandable.
              </p>

              <div className="mt-6 space-y-3">
                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <h3 className="text-sm font-semibold">
                    Profile changes
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Make appropriate profile information easy
                    to review and update.
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
                  <h3 className="text-sm font-semibold">
                    Communication preferences
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Keep relevant email and customer
                    communication controls clear and
                    accessible.
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
                  <h3 className="text-sm font-semibold">
                    Account closure
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Where account closure is available, make
                    the process clear and distinguish it from
                    temporary actions such as signing out.
                  </p>
                </div>
              </div>
            </section>

            {/* ====================================== */}
            {/* MONITORING */}
            {/* ====================================== */}

            <section
              id="monitoring"
              className="
                scroll-mt-28
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Monitoring activity
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Regularly review store activity so you can
                identify operational issues, unexpected
                order patterns, payment problems, and areas
                where customers may need additional support.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Sellio&apos;s broader platform focuses on
                making revenue, orders, conversion and other
                ecommerce information easier to understand,
                so these reports can also support routine
                store reviews.
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
                    gap-px
                    bg-border
                    sm:grid-cols-3
                  "
                >
                  <div className="bg-paper p-5">
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
                      Review fulfilment
                    </p>
                  </div>

                  <div className="bg-paper p-5">
                    <p
                      className="
                        text-xs
                        text-navy-mute
                      "
                    >
                      Payments
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Check transaction activity
                    </p>
                  </div>

                  <div className="bg-paper p-5">
                    <p
                      className="
                        text-xs
                        text-navy-mute
                      "
                    >
                      Support
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Identify recurring issues
                    </p>
                  </div>
                </div>
              </div>

             
            </section>

            {/* PREVIOUS / NEXT */}
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
                href="/documentation/standards-overview"
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
                    Standards Overview
                  </span>
                </div>
              </Link>

              <Link
                href="/documentation/transparency"
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
                  <span>Transparency</span>

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
                text-navy-mute
              "
            >
              Review this page whenever your customer,
              payment, fulfilment, or store policies change.
            </p>
          </article>
                    {/* ====================================== */}
          {/* RIGHT SIDEBAR */}
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
              <p
                className="
                  text-[10px]
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
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() =>
                      setActiveSection(item.id)
                    }
                    className={`
                      block
                      text-xs
                      leading-5
                      transition-colors
                      ${
                        activeSection === item.id
                          ? "font-medium text-coral"
                          : "text-navy-mute hover:text-coral"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

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
                    text-[11px]
                    leading-5
                    text-navy-mute
                  "
                >
                  Related
                </p>

                <Link
                  href="/documentation/standards-overview"
                  className="
                    mt-2
                    flex
                    items-center
                    justify-between
                    gap-2
                    text-xs
                    font-medium
                    transition-colors
                    hover:text-coral
                  "
                >
                  Standards Overview

                  <ChevronRight
                    className="
                      h-3.5
                      w-3.5
                    "
                  />
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