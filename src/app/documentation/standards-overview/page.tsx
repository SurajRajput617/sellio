"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

const sections = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "voluntary",
    label: "Voluntary Code",
  },
  {
    id: "section",
    label: "In This Section",
  },
  {
    id: "related",
    label: "Related Guides",
  },
];

export default function StandardsPage() {
  const [activeSection, setActiveSection] =
    useState("overview");

  const [openStandard, setOpenStandard] =
    useState<string | null>(null);

  const [openGuide, setOpenGuide] =
    useState<string | null>(null);

  const toggleStandard = (name: string) => {
    setOpenStandard((current) =>
      current === name ? null : name
    );
  };

  const toggleGuide = (name: string) => {
    setOpenGuide((current) =>
      current === name ? null : name
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;

      sections.forEach((section) => {
        const element = document.getElementById(
          section.id
        );

        if (!element) return;

        if (
          element.offsetTop <=
          window.scrollY + 180
        ) {
          current = section.id;
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
          <DocumentationSidebar />

          <article className="min-w-0">
            {/* ========================================
                OVERVIEW
            ======================================== */}
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
                  text-coral
                "
              >
                Sellio Standards
              </p>

              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                "
              >
                Overview
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
                Standards help keep your Sellio store
                consistent, reliable, and easy for
                customers to use.
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
                This section explains the recommended
                practices for managing your store,
                customer experience, marketing activity,
                and day-to-day operations.
              </p>

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
                    These guidelines are designed to
                    help you maintain a clear and
                    consistent experience across your
                    Sellio store.
                  </p>
                </div>
              </div>
            </section>

            {/* ========================================
                VOLUNTARY CODE
            ======================================== */}
            <section
              id="voluntary"
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
                About the Voluntary Code
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                The Sellio Voluntary Code provides
                practical guidance for maintaining
                transparent and customer-friendly
                store practices.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Following these recommendations can
                make important information easier for
                customers to understand and help keep
                your store operations consistent.
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
                  • Keep customer-facing information
                  clear and accurate.
                </li>

                <li>
                  • Make important store policies easy
                  to find.
                </li>

                <li>
                  • Keep product and pricing information
                  up to date.
                </li>

                <li>
                  • Use consistent communication across
                  your store.
                </li>

                <li>
                  • Review important settings regularly.
                </li>
              </ul>

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
                  <ShieldCheck
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
                    Use these standards as a practical
                    checklist when reviewing your
                    Sellio store.
                  </p>
                </div>
              </div>
            </section>

            {/* ========================================
                IN THIS SECTION - DROPDOWNS
            ======================================== */}
            <section
              id="section"
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
                In This Section
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Explore the available standards and
                guidance for managing different parts
                of your Sellio store.
              </p>

              <div className="mt-6 space-y-3">
                {/* STORE STANDARDS */}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      toggleStandard("store")
                    }
                    aria-expanded={
                      openStandard === "store"
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-lg
                      border
                      px-4
                      py-3
                      text-left
                      text-sm
                      transition
                      hover:border-coral
                      ${
                        openStandard === "store"
                          ? "border-navy"
                          : "border-border"
                      }
                    `}
                  >
                    <span>Store Standards</span>

                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        duration-200
                        ${
                          openStandard === "store"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {openStandard === "store" && (
                    <div
                      className="
                        mt-2
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
                        Keep your Sellio store
                        information accurate,
                        consistent, and easy for
                        customers to understand.
                      </p>

                      <ul
                        className="
                          mt-4
                          space-y-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        <li>
                          • Keep product information
                          current.
                        </li>

                        <li>
                          • Display clear pricing and
                          availability.
                        </li>

                        <li>
                          • Make important store
                          policies easy to access.
                        </li>

                        <li>
                          • Review customer-facing
                          information regularly.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* CUSTOMER EXPERIENCE */}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      toggleStandard("customer")
                    }
                    aria-expanded={
                      openStandard === "customer"
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-lg
                      border
                      px-4
                      py-3
                      text-left
                      text-sm
                      transition
                      hover:border-coral
                      ${
                        openStandard === "customer"
                          ? "border-navy"
                          : "border-border"
                      }
                    `}
                  >
                    <span>
                      Customer Experience
                    </span>

                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        duration-200
                        ${
                          openStandard === "customer"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {openStandard === "customer" && (
                    <div
                      className="
                        mt-2
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
                        A consistent customer
                        experience helps visitors
                        understand your products,
                        services, and store policies.
                      </p>

                      <ul
                        className="
                          mt-4
                          space-y-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        <li>
                          • Use clear product
                          descriptions.
                        </li>

                        <li>
                          • Provide useful information
                          before checkout.
                        </li>

                        <li>
                          • Keep support and contact
                          information visible.
                        </li>

                        <li>
                          • Make important account and
                          order information easy to
                          find.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* MARKETING STANDARDS */}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      toggleStandard("marketing")
                    }
                    aria-expanded={
                      openStandard === "marketing"
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-lg
                      border
                      px-4
                      py-3
                      text-left
                      text-sm
                      transition
                      hover:border-coral
                      ${
                        openStandard === "marketing"
                          ? "border-navy"
                          : "border-border"
                      }
                    `}
                  >
                    <span>
                      Marketing Standards
                    </span>

                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        duration-200
                        ${
                          openStandard === "marketing"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {openStandard === "marketing" && (
                    <div
                      className="
                        mt-2
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
                        Keep promotional content clear
                        and consistent across your
                        Sellio marketing channels.
                      </p>

                      <ul
                        className="
                          mt-4
                          space-y-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        <li>
                          • Use accurate promotional
                          information.
                        </li>

                        <li>
                          • Make offer terms easy to
                          understand.
                        </li>

                        <li>
                          • Keep campaign information
                          updated.
                        </li>

                        <li>
                          • Review promotions before
                          publishing.
                        </li>

                        <li>
                          • Keep marketing messages
                          consistent with your store
                          information.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* ========================================
                NOTE
            ======================================== */}
            <div
              className="
                mt-8
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
                <CheckCircle2
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
                  Review the standards that apply to
                  your store before making significant
                  changes to customer-facing settings.
                </p>
              </div>
            </div>

            {/* ========================================
                STORE STANDARDS
            ======================================== */}
            <section
              className="
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Store Standards
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep your Sellio store information
                accurate, consistent, and easy for
                customers to understand.
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
                  • Keep product information current.
                </li>

                <li>
                  • Display clear pricing and
                  availability.
                </li>

                <li>
                  • Make important store policies easy
                  to access.
                </li>

                <li>
                  • Review customer-facing information
                  regularly.
                </li>
              </ul>
            </section>

            {/* ========================================
                CUSTOMER EXPERIENCE
            ======================================== */}
            <section
              className="
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Customer Experience
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A consistent customer experience helps
                visitors understand your products,
                services, and store policies.
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
                  • Use clear product descriptions.
                </li>

                <li>
                  • Provide useful information before
                  checkout.
                </li>

                <li>
                  • Keep support and contact information
                  visible.
                </li>

                <li>
                  • Make important account and order
                  information easy to find.
                </li>
              </ul>

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
                    Clear information can help customers
                    make informed decisions while using
                    your store.
                  </p>
                </div>
              </div>
            </section>

            {/* ========================================
                MARKETING STANDARDS
            ======================================== */}
            <section
              className="
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Marketing Standards
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep promotional content clear and
                consistent across your Sellio marketing
                channels.
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
                  • Use accurate promotional information.
                </li>

                <li>
                  • Make offer terms easy to understand.
                </li>

                <li>
                  • Keep campaign information updated.
                </li>

                <li>
                  • Review promotions before publishing.
                </li>

                <li>
                  • Keep marketing messages consistent
                  with your store information.
                </li>
              </ul>
            </section>

            {/* ========================================
                STORE OPERATIONS
            ======================================== */}
            <section
              className="
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Store Operations
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Regularly review your Sellio settings
                to keep your store operating consistently.
              </p>

              <ol
                className="
                  mt-5
                  space-y-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                <li>
                  1. Review your store settings.
                </li>

                <li>
                  2. Check product and inventory
                  information.
                </li>

                <li>
                  3. Review customer-facing policies.
                </li>

                <li>
                  4. Check marketing and promotional
                  settings.
                </li>

                <li>
                  5. Update information whenever your
                  business changes.
                </li>
              </ol>
            </section>

            {/* ========================================
                RECOMMENDED PRACTICES
            ======================================== */}
            <section
              className="
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Recommended Practices
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use these simple practices to maintain
                a reliable and consistent Sellio store.
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
                  <h3 className="font-semibold">
                    Keep Information Updated
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Review product, pricing, policy,
                    and contact information regularly.
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
                  <h3 className="font-semibold">
                    Review Before Publishing
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Check important customer-facing
                    changes before making them live.
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
                  <h3 className="font-semibold">
                    Keep Policies Clear
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Make store rules and customer
                    information easy to understand.
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
                  <h3 className="font-semibold">
                    Monitor Store Activity
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Use Sellio reports and dashboard
                    tools to review store activity.
                  </p>
                </div>
              </div>
            </section>

            {/* ========================================
                INFORMATION BOX
            ======================================== */}
            <div
              className="
                mt-8
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
                <CheckCircle2
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
                  These recommendations can be used
                  as a regular checklist when reviewing
                  your Sellio store.
                </p>
              </div>
            </div>

            {/* ========================================
                RELATED GUIDES - DROPDOWNS
            ======================================== */}
            <section
              id="related"
              className="
                scroll-mt-28
                border-t
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Related Guides
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                Explore more Sellio guides for managing
                your store, customers, marketing, and
                business data.
              </p>

              <div className="mt-5 space-y-3">
                {/* DOWNLOADS & REPORTS */}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      toggleGuide("downloads")
                    }
                    aria-expanded={
                      openGuide === "downloads"
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-lg
                      border
                      px-4
                      py-3
                      text-left
                      text-sm
                      transition
                      hover:border-coral
                      ${
                        openGuide === "downloads"
                          ? "border-navy"
                          : "border-border"
                      }
                    `}
                  >
                    <span>
                      Downloads & Reports
                    </span>

                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        duration-200
                        ${
                          openGuide === "downloads"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {openGuide === "downloads" && (
                    <div
                      className="
                        mt-2
                        rounded-lg
                        border
                        border-border
                        bg-black/5
                        px-5
                        py-4
                      "
                    >
                      <h3
                        className="
                          text-sm
                          font-semibold
                        "
                      >
                        Downloads & Reports
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Access downloadable store
                        information and reports to help
                        review your Sellio activity and
                        business data.
                      </p>

                      <ul
                        className="
                          mt-4
                          space-y-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        <li>
                          • Review available store
                          reports.
                        </li>

                        <li>
                          • Download important business
                          data.
                        </li>

                        <li>
                          • Keep copies of useful
                          reports for your records.
                        </li>

                        <li>
                          • Review exported information
                          before using it outside
                          Sellio.
                        </li>
                      </ul>

                      
                    </div>
                  )}
                </div>

                {/* PRODUCT CATALOGUE */}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      toggleGuide("catalogue")
                    }
                    aria-expanded={
                      openGuide === "catalogue"
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-lg
                      border
                      px-4
                      py-3
                      text-left
                      text-sm
                      transition
                      hover:border-coral
                      ${
                        openGuide === "catalogue"
                          ? "border-navy"
                          : "border-border"
                      }
                    `}
                  >
                    <span>
                      Product Catalogue
                    </span>

                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        duration-200
                        ${
                          openGuide === "catalogue"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {openGuide === "catalogue" && (
                    <div
                      className="
                        mt-2
                        rounded-lg
                        border
                        border-border
                        bg-black/5
                        px-5
                        py-4
                      "
                    >
                      <h3
                        className="
                          text-sm
                          font-semibold
                        "
                      >
                        Product Catalogue
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Manage your Sellio product
                        catalogue and keep
                        customer-facing product
                        information clear and current.
                      </p>

                      <ul
                        className="
                          mt-4
                          space-y-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        <li>
                          • Keep product names and
                          descriptions accurate.
                        </li>

                        <li>
                          • Review product pricing
                          regularly.
                        </li>

                        <li>
                          • Keep availability and
                          inventory information
                          updated.
                        </li>

                        <li>
                          • Review product information
                          before publishing changes.
                        </li>
                      </ul>

                
                    </div>
                  )}
                </div>

                {/* MARKETING TOOLS */}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      toggleGuide("marketing-tools")
                    }
                    aria-expanded={
                      openGuide === "marketing-tools"
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-lg
                      border
                      px-4
                      py-3
                      text-left
                      text-sm
                      transition
                      hover:border-coral
                      ${
                        openGuide === "marketing-tools"
                          ? "border-navy"
                          : "border-border"
                      }
                    `}
                  >
                    <span>
                      Marketing Tools
                    </span>

                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        duration-200
                        ${
                          openGuide ===
                          "marketing-tools"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {openGuide ===
                    "marketing-tools" && (
                    <div
                      className="
                        mt-2
                        rounded-lg
                        border
                        border-border
                        bg-black/5
                        px-5
                        py-4
                      "
                    >
                      <h3
                        className="
                          text-sm
                          font-semibold
                        "
                      >
                        Marketing Tools
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Use Sellio marketing tools to
                        manage promotional activity
                        while keeping your messages
                        clear and consistent.
                      </p>

                      <ul
                        className="
                          mt-4
                          space-y-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        <li>
                          • Create clear promotional
                          messages.
                        </li>

                        <li>
                          • Keep campaign information
                          accurate.
                        </li>

                        <li>
                          • Review offers and
                          promotional terms.
                        </li>

                        <li>
                          • Check marketing content
                          before publishing.
                        </li>

                        <li>
                          • Keep campaigns consistent
                          with your store information.
                        </li>
                      </ul>

                     
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* ========================================
                PREVIOUS / NEXT
            ======================================== */}
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
                  rounded-lg
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
                    text-sm
                    font-semibold
                  "
                >
                  <ArrowLeft className="h-4 w-4" />

                  Downloads-Reports-Overview
                </div>
              </Link>

              <Link
                href="/documentation/player-protections"
                className="
                  rounded-lg
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
                    text-sm
                    font-semibold
                  "
                >
                 Player-Protections

                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </article>

          {/* ========================================
              RIGHT SIDEBAR
          ======================================== */}
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
                {sections.map((item) => (
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
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}