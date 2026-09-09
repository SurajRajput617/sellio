"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Info,
  Settings,
  Store,
  Package,
  Palette,
  Search,
  Truck,
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
    id: "store-settings",
    label: "Store Settings",
  },
  {
    id: "product-settings",
    label: "Product Settings",
  },
  {
    id: "theme-settings",
    label: "Theme Settings",
  },
  {
    id: "shipping-settings",
    label: "Shipping Settings",
  },
  {
    id: "seo-settings",
    label: "SEO Settings",
  },
  {
    id: "example-usage",
    label: "Example Usage",
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

/* ============================================================
   PAGE
============================================================ */

export default function SettingsVariablesPage() {
  const [activeSection, setActiveSection] =
    useState("overview");

  const [copied, setCopied] =
    useState(false);

  /* ============================================================
     SCROLL SPY
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 170;

      let current = sections[0].id;

      sections.forEach((section) => {
        const element =
          document.getElementById(section.id);

        if (!element) return;

        if (element.offsetTop <= position) {
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
     EXAMPLE CODE
  ============================================================ */

  const exampleCode = `<header class="store-header">
  <h1>{{ settings.store_name }}</h1>

  {% if settings.store_tagline %}
    <p>{{ settings.store_tagline }}</p>
  {% endif %}
</header>`;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(
        exampleCode
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
          HEADER
      ====================================================== */}

      <Navbar />

      {/* ======================================================
          DOCUMENTATION
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

          <article className="min-w-0">

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
              {/* EYEBROW */}

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-coral
                "
              >
                Advanced
              </p>

              {/* TITLE */}

              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-tight
                  sm:text-4xl
                "
              >
                Settings Variables
              </h1>

              {/* INTRO */}

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Settings variables allow your Sellio
                storefront templates to use values from
                your store configuration without hardcoding
                the same information into every template.
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
                They can be used for information such as
                your store name, branding, display
                preferences, shipping messages, SEO
                information, and other configurable
                storefront values.
              </p>

              {/* ==================================================
                  INFO BOX
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.035]
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

                  <div className="min-w-0">
                    <p
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      Settings are reusable
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      When a configurable value changes,
                      templates using that setting can
                      display the updated value without
                      requiring the same text to be edited
                      in multiple places.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  BASIC SYNTAX
              ================================================== */}

              <div className="mt-8">
                <h2
                  className="
                    text-base
                    font-bold
                  "
                >
                  Basic syntax
                </h2>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A setting can be referenced from a
                  template using the settings object and
                  the appropriate variable name.
                </p>

                <div
                  className="
                    mt-4
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
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
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>
                      {"{{ settings.store_name }}"}
                    </code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  VARIABLE FLOW
              ================================================== */}

              <div
                className="
                  mt-8
                  grid
                  gap-3
                  sm:grid-cols-3
                "
              >
                {/* SETTINGS */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-4
                  "
                >
                  <Settings
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <p
                    className="
                      mt-3
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-navy-mute
                    "
                  >
                    01
                  </p>

                  <h3
                    className="
                      mt-1
                      text-sm
                      font-semibold
                    "
                  >
                    Store Settings
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Configure the value used by the
                    storefront.
                  </p>
                </div>

                {/* VARIABLE */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-4
                  "
                >
                  <Code2
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <p
                    className="
                      mt-3
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-navy-mute
                    "
                  >
                    02
                  </p>

                  <h3
                    className="
                      mt-1
                      text-sm
                      font-semibold
                    "
                  >
                    Template Variable
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Reference the setting from your
                    template.
                  </p>
                </div>

                {/* STOREFRONT */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-4
                  "
                >
                  <Store
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <p
                    className="
                      mt-3
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-navy-mute
                    "
                  >
                    03
                  </p>

                  <h3
                    className="
                      mt-1
                      text-sm
                      font-semibold
                    "
                  >
                    Storefront
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    The configured value is displayed to
                    the customer.
                  </p>
                </div>
              </div>
            </section>

            {/* ==================================================
                STORE SETTINGS
            ================================================== */}

            <section
              id="store-settings"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
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
                    bg-coral/10
                  "
                >
                  <Store
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />
                </div>

                <div>
                  <h2
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    Store Settings
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Store settings contain general
                    information that can be reused
                    throughout your storefront.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  VARIABLE TABLE
              ================================================== */}

              <div
                className="
                  mt-6
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
                    grid-cols-[200px_120px_minmax(0,1fr)]
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-4
                    py-3
                    sm:grid
                  "
                >
                  <p
                    className="
                      text-xs
                      font-semibold
                    "
                  >
                    Variable
                  </p>

                  <p
                    className="
                      text-xs
                      font-semibold
                    "
                  >
                    Type
                  </p>

                  <p
                    className="
                      text-xs
                      font-semibold
                    "
                  >
                    Description
                  </p>
                </div>

                {/* STORE NAME */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[200px_120px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.store_name
                  </code>

                  <p
                    className="
                      text-xs
                      text-navy-mute
                    "
                  >
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    The public name of the store.
                  </p>
                </div>

                {/* STORE TAGLINE */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[200px_120px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.store_tagline
                  </code>

                  <p
                    className="
                      text-xs
                      text-navy-mute
                    "
                  >
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Optional supporting text used near the
                    store name or other branded areas.
                  </p>
                </div>

                {/* CURRENCY */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[200px_120px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.currency
                  </code>

                  <p
                    className="
                      text-xs
                      text-navy-mute
                    "
                  >
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    The configured currency identifier used
                    when displaying storefront pricing.
                  </p>
                </div>

                {/* SUPPORT EMAIL */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[200px_120px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.support_email
                  </code>

                  <p
                    className="
                      text-xs
                      text-navy-mute
                    "
                  >
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Customer-support contact information
                    that can be displayed in appropriate
                    storefront areas.
                  </p>
                </div>

                {/* ANNOUNCEMENT */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[200px_120px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.announcement_text
                  </code>

                  <p
                    className="
                      text-xs
                      text-navy-mute
                    "
                  >
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Optional storefront announcement text
                    for general store information.
                  </p>
                </div>

                {/* ANNOUNCEMENT ENABLED */}

                <div
                  className="
                    grid
                    gap-2
                    px-4
                    py-4
                    sm:grid-cols-[200px_120px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.show_announcement
                  </code>

                  <p
                    className="
                      text-xs
                      text-navy-mute
                    "
                  >
                    boolean
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Controls whether the configured
                    announcement should be displayed.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  EXAMPLE
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Store setting example
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Store settings can be rendered directly or
                  checked before displaying optional
                  content.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  {/* CODE HEADER */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
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

                      <p
                        className="
                          text-xs
                          font-medium
                          text-white/70
                        "
                      >
                        template
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={copyCode}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-md
                        border
                        border-white/10
                        px-2.5
                        py-1.5
                        text-xs
                        text-white/70
                        transition-colors
                        hover:bg-white/10
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

                  <div className="overflow-x-auto">
                    <pre
                      className="
                        min-w-max
                        p-5
                        text-[12px]
                        leading-6
                        text-white/80
                      "
                    >
                      <code>{exampleCode}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  NOTE
              ================================================== */}

              <div
                className="
                  mt-6
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
                    The variable names shown in this guide
                    should match the settings exposed by
                    your Sellio implementation. If your
                    project uses different property names,
                    update the template references to match
                    your actual data.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  NEXT SECTION
              ================================================== */}

              <Link
                href="#product-settings"
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
                <span
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <Package
                    className="
                      h-4
                      w-4
                      text-coral
                    "
                  />

                  Product Settings
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
                PRODUCT SETTINGS
            ================================================== */}

            <section
              id="product-settings"
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
                    Product Settings
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Product settings control reusable
                    presentation options for products across
                    your Sellio storefront.
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
                Use these values when you want product
                cards, collection pages, and other
                storefront components to follow the same
                display preferences.
              </p>

              {/* ==================================================
                  PRODUCT VARIABLES TABLE
              ================================================== */}

              <div
                className="
                  mt-6
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
                    grid-cols-[220px_110px_minmax(0,1fr)]
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-4
                    py-3
                    sm:grid
                  "
                >
                  <p className="text-xs font-semibold">
                    Variable
                  </p>

                  <p className="text-xs font-semibold">
                    Type
                  </p>

                  <p className="text-xs font-semibold">
                    Description
                  </p>
                </div>

                {/* SHOW PRICE */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.show_product_price
                  </code>

                  <p className="text-xs text-navy-mute">
                    boolean
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Controls whether the product price is
                    displayed in supported product
                    components.
                  </p>
                </div>

                {/* SHOW VENDOR */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.show_product_vendor
                  </code>

                  <p className="text-xs text-navy-mute">
                    boolean
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Controls whether vendor or brand
                    information is shown with the product.
                  </p>
                </div>

                {/* SHOW SKU */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.show_product_sku
                  </code>

                  <p className="text-xs text-navy-mute">
                    boolean
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Controls whether the product SKU is
                    displayed when that information is
                    available.
                  </p>
                </div>

                {/* IMAGE RATIO */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.product_image_ratio
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Defines the preferred image presentation
                    used by supported product cards.
                  </p>
                </div>

                {/* CARD STYLE */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.product_card_style
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Identifies the configured presentation
                    style for reusable product cards.
                  </p>
                </div>

                {/* PRODUCTS PER ROW */}

                <div
                  className="
                    grid
                    gap-2
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.products_per_row
                  </code>

                  <p className="text-xs text-navy-mute">
                    number
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Represents the preferred number of
                    product cards displayed in supported
                    desktop grid layouts.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  PRODUCT EXAMPLE
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Conditional product settings
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Boolean settings can be checked before
                  rendering optional product information.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Code2 className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`<article class="product-card">
  <h3>{{ product.name }}</h3>

  {% if settings.show_product_price %}
    <p>{{ product.price }}</p>
  {% endif %}

  {% if settings.show_product_vendor %}
    <span>{{ product.vendor }}</span>
  {% endif %}
</article>`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  PRODUCT SETTING TYPES
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Common setting types
                </h3>

                <div
                  className="
                    mt-5
                    grid
                    gap-4
                    sm:grid-cols-3
                  "
                >
                  {/* BOOLEAN */}

                  <div
                    className="
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
                        text-coral
                      "
                    >
                      boolean
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Show / Hide
                    </p>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Useful for optional storefront
                      elements and display preferences.
                    </p>
                  </div>

                  {/* STRING */}

                  <div
                    className="
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
                        text-coral
                      "
                    >
                      string
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Selected Value
                    </p>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Useful for named styles, display
                      modes, and configurable text.
                    </p>
                  </div>

                  {/* NUMBER */}

                  <div
                    className="
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
                        text-coral
                      "
                    >
                      number
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Numeric Value
                    </p>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Useful for configurable counts and
                      other numeric presentation options.
                    </p>
                  </div>
                </div>
              </div>

              {/* PRODUCT NOTE */}

              <div
                className="
                  mt-6
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
                    Display settings should not replace
                    essential product information required
                    for customers to understand what they
                    are viewing. Use them primarily to keep
                    presentation consistent.
                  </p>
                </div>
              </div>
            </section>

            {/* ==================================================
                THEME SETTINGS
            ================================================== */}

            <section
              id="theme-settings"
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
                  <Palette className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Theme Settings
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Theme settings allow reusable templates
                    and components to respond to your
                    storefront&apos;s visual configuration.
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
                Instead of repeating visual values
                throughout multiple templates, reference a
                shared setting so related components can
                stay consistent.
              </p>

              {/* ==================================================
                  THEME VARIABLES
              ================================================== */}

              <div
                className="
                  mt-6
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
                    grid-cols-[220px_110px_minmax(0,1fr)]
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-4
                    py-3
                    sm:grid
                  "
                >
                  <p className="text-xs font-semibold">
                    Variable
                  </p>

                  <p className="text-xs font-semibold">
                    Type
                  </p>

                  <p className="text-xs font-semibold">
                    Description
                  </p>
                </div>

                {/* PRIMARY COLOR */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.primary_color
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    The configured primary visual value
                    used by supported storefront elements.
                  </p>
                </div>

                {/* SECONDARY COLOR */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.secondary_color
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    A secondary visual value used for
                    supported accents or complementary
                    components.
                  </p>
                </div>

                {/* TEXT COLOR */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.text_color
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    The configured text value used by
                    components that support theme-driven
                    styling.
                  </p>
                </div>

                {/* FONT FAMILY */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.font_family
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Identifies the configured typography
                    option when supported by the storefront.
                  </p>
                </div>

                {/* BUTTON STYLE */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.button_style
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Identifies the configured presentation
                    used for supported storefront buttons.
                  </p>
                </div>

                {/* BORDER RADIUS */}

                <div
                  className="
                    grid
                    gap-2
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.border_radius
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Represents a configured corner style for
                    components that support theme-driven
                    border radius values.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  THEME EXAMPLE
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Using theme values
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Theme values can be exposed as variables
                  and then used by your storefront&apos;s
                  styling layer.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Palette className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`<div
  class="store-banner"
  style="
    --store-primary: {{ settings.primary_color }};
    --store-text: {{ settings.text_color }};
  "
>
  <h2>{{ settings.store_name }}</h2>
</div>`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  THEME GUIDANCE
              ================================================== */}

              <div
                className="
                  mt-8
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
                  <Check className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Reuse shared values
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Use the same setting for related
                    components rather than introducing
                    slightly different hardcoded values.
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
                  <Palette className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Keep readable defaults
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Make sure configurable styling still
                    produces readable text and clearly
                    identifiable interactive elements.
                  </p>
                </div>
              </div>

              {/* THEME NOTE */}

              <div
                className="
                  mt-6
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
                    If a theme setting can be empty, provide
                    a sensible fallback in your styling or
                    template so the component remains
                    usable.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  NEXT SECTION
              ================================================== */}

              <Link
                href="#shipping-settings"
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
                  <Truck className="h-4 w-4 text-coral" />

                  Shipping Settings
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
                SHIPPING SETTINGS
            ================================================== */}

            <section
              id="shipping-settings"
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
                  <Truck className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Shipping Settings
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Shipping settings provide reusable
                    storefront values for delivery
                    information and customer-facing shipping
                    messages.
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
                These settings can help keep shipping
                information consistent across product
                pages, cart messaging, informational
                banners, and other supported storefront
                components.
              </p>

              {/* ==================================================
                  SHIPPING VARIABLES
              ================================================== */}

              <div
                className="
                  mt-6
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
                    grid-cols-[220px_110px_minmax(0,1fr)]
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-4
                    py-3
                    sm:grid
                  "
                >
                  <p className="text-xs font-semibold">
                    Variable
                  </p>

                  <p className="text-xs font-semibold">
                    Type
                  </p>

                  <p className="text-xs font-semibold">
                    Description
                  </p>
                </div>

                {/* SHIPPING ENABLED */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.shipping_enabled
                  </code>

                  <p className="text-xs text-navy-mute">
                    boolean
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Indicates whether shipping-related
                    information should be displayed by
                    supported storefront components.
                  </p>
                </div>

                {/* SHIPPING MESSAGE */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.shipping_message
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    General customer-facing shipping or
                    delivery information.
                  </p>
                </div>

                {/* DELIVERY ESTIMATE */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.delivery_estimate
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    A general delivery estimate that can be
                    displayed when appropriate.
                  </p>
                </div>

                {/* FREE SHIPPING MESSAGE */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.free_shipping_message
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Optional text describing a configured
                    free-shipping offer or policy.
                  </p>
                </div>

                {/* SHOW DELIVERY MESSAGE */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.show_delivery_message
                  </code>

                  <p className="text-xs text-navy-mute">
                    boolean
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Controls whether the configured delivery
                    message is rendered.
                  </p>
                </div>

                {/* RETURNS MESSAGE */}

                <div
                  className="
                    grid
                    gap-2
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.returns_message
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Optional summary text that can direct
                    customers toward your returns
                    information.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  SHIPPING EXAMPLE
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Displaying shipping information
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Check the appropriate setting before
                  rendering optional shipping information.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Code2 className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`{% if settings.shipping_enabled %}
  <div class="shipping-information">

    {% if settings.shipping_message %}
      <p>{{ settings.shipping_message }}</p>
    {% endif %}

    {% if settings.show_delivery_message %}
      <span>
        {{ settings.delivery_estimate }}
      </span>
    {% endif %}

  </div>
{% endif %}`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  SHIPPING GUIDANCE
              ================================================== */}

              <div
                className="
                  mt-8
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
                  <Check className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Keep information current
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Update customer-facing delivery
                    information whenever your normal
                    shipping process changes.
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
                    Use clear wording
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Make delivery information easy to
                    understand and avoid presenting general
                    estimates as guaranteed arrival dates.
                  </p>
                </div>
              </div>

              {/* SHIPPING NOTE */}

              <div
                className="
                  mt-6
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
                    Settings variables control what your
                    template displays. Your actual shipping
                    methods, rates, and order fulfilment
                    configuration should remain managed by
                    the appropriate store systems.
                  </p>
                </div>
              </div>
            </section>

            {/* ==================================================
                SEO SETTINGS
            ================================================== */}

            <section
              id="seo-settings"
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
                  <Search className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    SEO Settings
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    SEO settings provide reusable metadata
                    and descriptive values for supported
                    storefront pages.
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
                These values can provide sensible store-wide
                defaults while allowing individual pages or
                products to use more specific information
                when it is available.
              </p>

              {/* ==================================================
                  SEO VARIABLES
              ================================================== */}

              <div
                className="
                  mt-6
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
                    grid-cols-[220px_110px_minmax(0,1fr)]
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-4
                    py-3
                    sm:grid
                  "
                >
                  <p className="text-xs font-semibold">
                    Variable
                  </p>

                  <p className="text-xs font-semibold">
                    Type
                  </p>

                  <p className="text-xs font-semibold">
                    Description
                  </p>
                </div>

                {/* SEO TITLE */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.seo_title
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    A default title value for supported
                    storefront metadata.
                  </p>
                </div>

                {/* SEO DESCRIPTION */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.seo_description
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    A default descriptive summary that can
                    be used by supported metadata templates.
                  </p>
                </div>

                {/* SOCIAL TITLE */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.social_title
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Optional title used by supported social
                    sharing metadata.
                  </p>
                </div>

                {/* SOCIAL DESCRIPTION */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.social_description
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Optional descriptive text for supported
                    social sharing metadata.
                  </p>
                </div>

                {/* SOCIAL IMAGE */}

                <div
                  className="
                    grid
                    gap-2
                    border-b
                    border-border
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.social_image
                  </code>

                  <p className="text-xs text-navy-mute">
                    string
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    A configured image reference used by
                    supported social sharing metadata.
                  </p>
                </div>

                {/* INDEXING */}

                <div
                  className="
                    grid
                    gap-2
                    px-4
                    py-4
                    sm:grid-cols-[220px_110px_minmax(0,1fr)]
                    sm:gap-4
                  "
                >
                  <code
                    className="
                      break-all
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    settings.search_indexing
                  </code>

                  <p className="text-xs text-navy-mute">
                    boolean
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Represents a storefront preference used
                    by supported metadata or indexing
                    configuration.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  SEO EXAMPLE
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Metadata example
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Store-wide settings can be used as
                  fallback values when page-specific
                  metadata is unavailable.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Search className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`<title>
  {{ page.seo_title | default(settings.seo_title) }}
</title>

<meta
  name="description"
  content="{{ page.seo_description | default(settings.seo_description) }}"
>`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  SEO PRIORITY
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Recommended value priority
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Prefer the most specific useful value
                  available for the page being rendered.
                </p>

                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    sm:grid-cols-3
                  "
                >
                  {/* PAGE */}

                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-4
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-bold
                        text-coral
                      "
                    >
                      01
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Page Value
                    </p>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Use page-specific information when it
                      is available.
                    </p>
                  </div>

                  {/* STORE DEFAULT */}

                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-4
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-bold
                        text-coral
                      "
                    >
                      02
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Store Default
                    </p>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Fall back to the reusable SEO setting
                      when needed.
                    </p>
                  </div>

                  {/* SAFE FALLBACK */}

                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-4
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-bold
                        text-coral
                      "
                    >
                      03
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Template Fallback
                    </p>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Provide an appropriate fallback when
                      neither value exists.
                    </p>
                  </div>
                </div>
              </div>

              {/* SEO CHECKLIST */}

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
                    SEO settings checklist
                  </p>
                </div>

                {[
                  "Use descriptive values that match the page content.",
                  "Prefer page-specific metadata when available.",
                  "Provide sensible store-wide fallback values.",
                  "Avoid repeating the same generic title across every page.",
                  "Keep social sharing information consistent with the storefront.",
                  "Review generated metadata after changing your settings.",
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

              {/* SEO NOTE */}

              <div
                className="
                  mt-6
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
                    A settings variable only supplies the
                    value to your template. Make sure your
                    layout places metadata in the correct
                    document location and escapes dynamic
                    values appropriately.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  NEXT SECTION
              ================================================== */}

              <Link
                href="#example-usage"
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
                  <Code2 className="h-4 w-4 text-coral" />

                  Example Usage
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
                EXAMPLE USAGE
            ================================================== */}

            <section
              id="example-usage"
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
                  <Code2 className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Example Usage
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Settings variables can be rendered
                    directly, checked conditionally, given
                    fallback values, or combined with
                    product and page data.
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
                The examples below show common patterns for
                using settings inside reusable Sellio
                storefront templates.
              </p>

              {/* ==================================================
                  1. DIRECT OUTPUT
              ================================================== */}

              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <div
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
                  </div>

                  <h3 className="text-base font-bold">
                    Output a setting directly
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
                  Use direct output when the setting should
                  always appear and your store configuration
                  guarantees that the value exists.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Code2 className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`<h1>{{ settings.store_name }}</h1>`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  2. CONDITIONAL SETTING
              ================================================== */}

              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <div
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
                  </div>

                  <h3 className="text-base font-bold">
                    Check an optional setting
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
                  Use a conditional when a value is optional
                  or when a boolean setting controls whether
                  a component should be shown.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Code2 className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`{% if settings.show_announcement %}
  <div class="store-announcement">
    {{ settings.announcement_text }}
  </div>
{% endif %}`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  3. CHECK VALUE EXISTS
              ================================================== */}

              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <div
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
                  </div>

                  <h3 className="text-base font-bold">
                    Check that a value exists
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
                  Optional text should usually be checked
                  before its surrounding markup is
                  rendered.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Code2 className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`{% if settings.store_tagline %}
  <p class="store-tagline">
    {{ settings.store_tagline }}
  </p>
{% endif %}`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  4. DEFAULT VALUE
              ================================================== */}

              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <div
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
                  </div>

                  <h3 className="text-base font-bold">
                    Provide a fallback value
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
                  A fallback can keep the component useful
                  when an optional configuration value has
                  not been provided.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Code2 className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`{{ settings.delivery_estimate | default("Delivery information available at checkout") }}`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  5. PRODUCT + SETTINGS
              ================================================== */}

              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <div
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
                    5
                  </div>

                  <h3 className="text-base font-bold">
                    Combine product data with settings
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
                  Settings can control how dynamic product
                  information is presented without changing
                  the product itself.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Package className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`<article class="product-card">

  <h3>{{ product.name }}</h3>

  {% if settings.show_product_price %}
    <p class="product-price">
      {{ product.price }}
    </p>
  {% endif %}

  {% if settings.show_product_vendor and product.vendor %}
    <span class="product-vendor">
      {{ product.vendor }}
    </span>
  {% endif %}

</article>`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  6. SHIPPING SETTINGS
              ================================================== */}

              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <div
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
                    6
                  </div>

                  <h3 className="text-base font-bold">
                    Build a shipping information block
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
                  Multiple settings can work together to
                  build a reusable customer-facing
                  information component.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Truck className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`{% if settings.shipping_enabled %}
  <aside class="shipping-info">

    {% if settings.shipping_message %}
      <p>
        {{ settings.shipping_message }}
      </p>
    {% endif %}

    {% if settings.show_delivery_message %}
      <small>
        {{ settings.delivery_estimate }}
      </small>
    {% endif %}

  </aside>
{% endif %}`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  7. SEO FALLBACK
              ================================================== */}

              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <div
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
                    7
                  </div>

                  <h3 className="text-base font-bold">
                    Use store-wide SEO fallbacks
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
                  Page-specific information can take
                  priority while store settings provide
                  reusable fallback values.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Search className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`<title>
  {{ page.seo_title | default(settings.seo_title) }}
</title>

<meta
  name="description"
  content="{{ page.seo_description | default(settings.seo_description) }}"
>`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  COMBINING SETTINGS
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Combining multiple settings
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A component can depend on several settings,
                  but the conditions should remain easy to
                  understand.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Settings className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`{% if settings.show_announcement and settings.announcement_text %}
  <div class="announcement">

    <strong>
      {{ settings.store_name }}
    </strong>

    <span>
      {{ settings.announcement_text }}
    </span>

  </div>
{% endif %}`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  REUSABLE COMPONENT EXAMPLE
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Reusable storefront example
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  The following example combines store,
                  product, and shipping settings in one
                  customer-facing product card.
                </p>

                <div
                  className="
                    mt-5
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                    bg-[#111827]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <Code2 className="h-4 w-4 text-white/60" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      template
                    </span>
                  </div>

                  <pre
                    className="
                      overflow-x-auto
                      p-5
                      text-[12px]
                      leading-6
                      text-white/80
                    "
                  >
                    <code>{`<article class="product-card">

  <a href="{{ product.url }}">
    <img
      src="{{ product.image }}"
      alt="{{ product.name }}"
    >
  </a>

  <div class="product-card-content">

    <h3>
      {{ product.name }}
    </h3>

    {% if settings.show_product_vendor and product.vendor %}
      <p class="product-vendor">
        {{ product.vendor }}
      </p>
    {% endif %}

    {% if settings.show_product_price %}
      <p class="product-price">
        {{ product.price }}
      </p>
    {% endif %}

    {% if settings.shipping_enabled and settings.delivery_estimate %}
      <p class="product-delivery">
        {{ settings.delivery_estimate }}
      </p>
    {% endif %}

    <a href="{{ product.url }}">
      View product
    </a>

  </div>

</article>`}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  HOW SETTINGS ARE RESOLVED
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  How settings are resolved
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A simple settings-driven component
                  generally follows this flow.
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
                        Read the setting
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        The template accesses the required
                        value from the settings object.
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
                        Check the value
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Optional values and boolean settings
                        can be checked before rendering.
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
                        Apply a fallback
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        When appropriate, use a sensible
                        fallback if the configurable value
                        is unavailable.
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
                        Render the component
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        The final value is displayed in the
                        appropriate storefront component.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  QUICK REFERENCE
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Quick reference
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
                  {/* HEADER */}

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
                      Pattern
                    </p>

                    <p className="text-xs font-semibold">
                      Example
                    </p>
                  </div>

                  {/* DIRECT */}

                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[160px_minmax(0,1fr)]
                      sm:gap-4
                    "
                  >
                    <p className="text-sm font-medium">
                      Direct output
                    </p>

                    <code
                      className="
                        break-all
                        text-xs
                        text-coral
                      "
                    >
                      {"{{ settings.store_name }}"}
                    </code>
                  </div>

                  {/* CONDITIONAL */}

                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[160px_minmax(0,1fr)]
                      sm:gap-4
                    "
                  >
                    <p className="text-sm font-medium">
                      Conditional
                    </p>

                    <code
                      className="
                        break-all
                        text-xs
                        text-coral
                      "
                    >
                      {"{% if settings.show_product_price %}"}
                    </code>
                  </div>

                  {/* FALLBACK */}

                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[160px_minmax(0,1fr)]
                      sm:gap-4
                    "
                  >
                    <p className="text-sm font-medium">
                      Fallback
                    </p>

                    <code
                      className="
                        break-all
                        text-xs
                        text-coral
                      "
                    >
                      {
                        '{{ settings.store_tagline | default("Welcome") }}'
                      }
                    </code>
                  </div>

                  {/* COMBINED */}

                  <div
                    className="
                      grid
                      gap-2
                      px-4
                      py-4
                      sm:grid-cols-[160px_minmax(0,1fr)]
                      sm:gap-4
                    "
                  >
                    <p className="text-sm font-medium">
                      Combined check
                    </p>

                    <code
                      className="
                        break-all
                        text-xs
                        text-coral
                      "
                    >
                      {
                        "{% if settings.shipping_enabled and settings.shipping_message %}"
                      }
                    </code>
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

                  <div>
                    <p className="text-sm font-semibold">
                      Check your available variables
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      The examples on this page use the
                      Sellio-style settings names defined
                      throughout this guide. Your template
                      should reference the exact properties
                      exposed by your implementation.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  EXAMPLE CHECKLIST
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
                    Before using a setting
                  </p>
                </div>

                {[
                  "Confirm the setting exists in your storefront data.",
                  "Check whether the setting can be empty.",
                  "Confirm the expected value type.",
                  "Use a conditional for optional storefront elements.",
                  "Add a sensible fallback when one is appropriate.",
                  "Test the rendered result with realistic store data.",
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
                  NEXT SECTION
              ================================================== */}

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
                    Keep settings predictable, reusable,
                    and easy to understand so your
                    storefront templates remain maintainable
                    as the project grows.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  PRACTICE 1
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
                <div className="flex items-start gap-4 p-5">
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
                    1
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">
                      Use descriptive variable names
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      A setting name should communicate what
                      the value controls without requiring
                      developers to inspect several
                      templates first.
                    </p>

                    <div
                      className="
                        mt-4
                        rounded-md
                        bg-black/[0.035]
                        px-4
                        py-3
                      "
                    >
                      <code
                        className="
                          break-all
                          text-xs
                          text-coral
                        "
                      >
                        settings.show_product_vendor
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  PRACTICE 2
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
                <div className="flex items-start gap-4 p-5">
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
                    2
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">
                      Check optional values
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      If a setting can be empty, check it
                      before rendering markup that depends
                      on the value.
                    </p>

                    <div
                      className="
                        mt-4
                        overflow-hidden
                        rounded-md
                        bg-[#111827]
                      "
                    >
                      <pre
                        className="
                          overflow-x-auto
                          p-4
                          text-[12px]
                          leading-6
                          text-white/80
                        "
                      >
                        <code>{`{% if settings.store_tagline %}
  <p>{{ settings.store_tagline }}</p>
{% endif %}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  PRACTICE 3
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
                <div className="flex items-start gap-4 p-5">
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
                    3
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">
                      Keep value types consistent
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Avoid using the same setting as a
                      boolean in one component and a string
                      in another. Consistent value types
                      make conditions easier to reason
                      about.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  PRACTICE 4
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
                <div className="flex items-start gap-4 p-5">
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
                    4
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">
                      Use sensible defaults
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      When a missing setting would leave an
                      important component incomplete,
                      provide an appropriate fallback.
                    </p>

                    <div
                      className="
                        mt-4
                        overflow-hidden
                        rounded-md
                        bg-[#111827]
                      "
                    >
                      <pre
                        className="
                          overflow-x-auto
                          p-4
                          text-[12px]
                          leading-6
                          text-white/80
                        "
                      >
                        <code>{`{{ settings.store_name | default("Store") }}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  PRACTICE 5
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
                <div className="flex items-start gap-4 p-5">
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
                    5
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">
                      Avoid unnecessary duplication
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      If several components use the same
                      configurable information, reference a
                      shared setting instead of repeating
                      the value inside each template.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  PRACTICE 6
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
                <div className="flex items-start gap-4 p-5">
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
                    6
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">
                      Keep conditions readable
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      A small number of clear checks is
                      easier to maintain than a deeply
                      nested block containing many unrelated
                      settings.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  PRACTICE 7
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
                <div className="flex items-start gap-4 p-5">
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
                    7
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">
                      Keep customer information accurate
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Settings used for pricing context,
                      delivery information, support details,
                      promotions, or store policies should
                      stay synchronized with your actual
                      storefront information.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  PRACTICE 8
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
                <div className="flex items-start gap-4 p-5">
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
                    8
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">
                      Test with realistic data
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Test empty values, long text, disabled
                      booleans, different products, and
                      different screen sizes before
                      publishing template changes.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  DO / AVOID
              ================================================== */}

              <div
                className="
                  mt-8
                  grid
                  gap-4
                  md:grid-cols-2
                "
              >
                {/* DO */}

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

                    <h3 className="text-sm font-semibold">
                      Recommended
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      "Use clear and predictable names.",
                      "Check optional values before rendering.",
                      "Use store-wide defaults where appropriate.",
                      "Keep settings focused on one purpose.",
                      "Test configuration changes before publishing.",
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

                {/* AVOID */}

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

                    <h3 className="text-sm font-semibold">
                      Avoid
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      "Assuming optional settings always exist.",
                      "Using unclear names such as setting_1.",
                      "Repeating the same configurable value everywhere.",
                      "Mixing unrelated responsibilities into one setting.",
                      "Publishing changes without checking the rendered storefront.",
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

              {/* ==================================================
                  BEST PRACTICES CHECKLIST
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
                    Settings checklist
                  </p>
                </div>

                {[
                  "The variable name describes its purpose.",
                  "The expected value type is known.",
                  "Optional values are checked before use.",
                  "A fallback exists where one is useful.",
                  "The setting is not duplicated unnecessarily.",
                  "Customer-facing information is current.",
                  "The final template has been tested with realistic data.",
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
                  <Settings className="h-4 w-4 text-coral" />

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
                  <Settings className="h-5 w-5 text-coral" />
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
                    If a settings variable does not produce
                    the expected result, check the variable
                    name, value type, template condition,
                    and the data supplied to the template.
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
                    The variable renders nothing
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
                    First confirm that the property exists
                    and contains a value in the settings
                    object supplied to the template.
                  </p>

                  <div className="mt-5">
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-navy-mute
                      "
                    >
                      Check
                    </p>

                    <div className="mt-3 space-y-3">
                      {[
                        "The variable name is spelled correctly.",
                        "The property exists in the settings object.",
                        "The setting has a configured value.",
                        "The template is using the correct object.",
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
                    A conditional never displays
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
                    Check the value type being returned by
                    the setting. A boolean condition should
                    receive the boolean value your template
                    expects.
                  </p>

                  <div
                    className="
                      mt-5
                      overflow-hidden
                      rounded-md
                      bg-[#111827]
                    "
                  >
                    <pre
                      className="
                        overflow-x-auto
                        p-4
                        text-[12px]
                        leading-6
                        text-white/80
                      "
                    >
                      <code>{`{% if settings.show_product_price %}
  <p>{{ product.price }}</p>
{% endif %}`}</code>
                    </pre>
                  </div>

                  <div
                    className="
                      mt-4
                      rounded-md
                      bg-black/[0.035]
                      px-4
                      py-3
                    "
                  >
                    <p
                      className="
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Confirm that
                      {" "}
                      <code className="text-coral">
                        show_product_price
                      </code>
                      {" "}
                      is actually supplied as the expected
                      boolean value.
                    </p>
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
                    Empty markup appears on the page
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
                    The surrounding element may be rendered
                    even when its setting contains no useful
                    value.
                  </p>

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
                    Instead of
                  </p>

                  <div
                    className="
                      mt-3
                      overflow-hidden
                      rounded-md
                      bg-[#111827]
                    "
                  >
                    <pre
                      className="
                        overflow-x-auto
                        p-4
                        text-[12px]
                        leading-6
                        text-white/80
                      "
                    >
                      <code>{`<p>
  {{ settings.store_tagline }}
</p>`}</code>
                    </pre>
                  </div>

                  <p
                    className="
                      mt-5
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-navy-mute
                    "
                  >
                    Check first
                  </p>

                  <div
                    className="
                      mt-3
                      overflow-hidden
                      rounded-md
                      bg-[#111827]
                    "
                  >
                    <pre
                      className="
                        overflow-x-auto
                        p-4
                        text-[12px]
                        leading-6
                        text-white/80
                      "
                    >
                      <code>{`{% if settings.store_tagline %}
  <p>
    {{ settings.store_tagline }}
  </p>
{% endif %}`}</code>
                    </pre>
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
                    The wrong fallback is displayed
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
                    Review the order of your values. A
                    specific page or product value should
                    normally be checked before a general
                    store-wide fallback.
                  </p>

                  <div
                    className="
                      mt-5
                      overflow-hidden
                      rounded-md
                      bg-[#111827]
                    "
                  >
                    <pre
                      className="
                        overflow-x-auto
                        p-4
                        text-[12px]
                        leading-6
                        text-white/80
                      "
                    >
                      <code>{`{{ page.seo_title | default(settings.seo_title) }}`}</code>
                    </pre>
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
                    A value has the wrong type
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
                    Verify whether your implementation
                    exposes the value as a string, number,
                    boolean, object, or another supported
                    type.
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
                        rounded-md
                        border
                        border-border
                        p-4
                      "
                    >
                      <code className="text-xs text-coral">
                        boolean
                      </code>

                      <p
                        className="
                          mt-2
                          text-xs
                          leading-5
                          text-navy-mute
                        "
                      >
                        Useful for enabled or disabled
                        states.
                      </p>
                    </div>

                    <div
                      className="
                        rounded-md
                        border
                        border-border
                        p-4
                      "
                    >
                      <code className="text-xs text-coral">
                        string
                      </code>

                      <p
                        className="
                          mt-2
                          text-xs
                          leading-5
                          text-navy-mute
                        "
                      >
                        Useful for text and named options.
                      </p>
                    </div>

                    <div
                      className="
                        rounded-md
                        border
                        border-border
                        p-4
                      "
                    >
                      <code className="text-xs text-coral">
                        number
                      </code>

                      <p
                        className="
                          mt-2
                          text-xs
                          leading-5
                          text-navy-mute
                        "
                      >
                        Useful for configurable numeric
                        values.
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
                    A setting changed but the page did not
                  update
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
                    Confirm that the page is receiving the
                    current settings data and that an older
                    hardcoded value is not still being used
                    elsewhere in the component.
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      "Confirm the setting was saved.",
                      "Confirm the current data reaches the template.",
                      "Search for an older hardcoded value.",
                      "Check whether cached output needs to refresh.",
                      "Reload and test the final storefront page.",
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
                  ISSUE 7
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
                    Template syntax causes an error
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
                    Reduce the template to the smallest
                    expression that fails, then verify the
                    variable and conditional syntax
                    separately.
                  </p>

                  <div
                    className="
                      mt-5
                      overflow-hidden
                      rounded-md
                      bg-[#111827]
                    "
                  >
                    <pre
                      className="
                        overflow-x-auto
                        p-4
                        text-[12px]
                        leading-6
                        text-white/80
                      "
                    >
                      <code>{`{{ settings.store_name }}`}</code>
                    </pre>
                  </div>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Once direct output works, add the
                    surrounding condition or component
                    markup back one step at a time.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  DEBUGGING FLOW
              ================================================== */}

              <div className="mt-10">
                <h3 className="text-base font-bold">
                  Debugging flow
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  When a settings-driven component is not
                  working, check the simplest causes first.
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
                      title: "Check the name",
                      text: "Confirm the variable uses the exact property name exposed by your settings object.",
                    },
                    {
                      number: "02",
                      title: "Check the value",
                      text: "Confirm the setting actually contains the value you expect.",
                    },
                    {
                      number: "03",
                      title: "Check the type",
                      text: "Verify that your template condition matches the value type.",
                    },
                    {
                      number: "04",
                      title: "Check the condition",
                      text: "Temporarily simplify complex conditions to isolate the failing check.",
                    },
                    {
                      number: "05",
                      title: "Check the fallback",
                      text: "Make sure the fallback does not unexpectedly override a more specific value.",
                    },
                    {
                      number: "06",
                      title: "Check the output",
                      text: "Test the rendered component using realistic storefront data.",
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
                  TROUBLESHOOTING SUMMARY
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
                    <p className="text-sm font-semibold">
                      Start with direct output
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      If a complex component fails, first
                      verify that the individual setting can
                      be rendered correctly. Then restore
                      conditions, fallbacks, and surrounding
                      markup one piece at a time.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  FINAL CHECKLIST
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
                    Troubleshooting checklist
                  </p>
                </div>

                {[
                  "Variable name matches the settings object.",
                  "The value exists and is not unexpectedly empty.",
                  "The value type matches the template logic.",
                  "Optional values have appropriate checks.",
                  "Fallback values are applied in the correct order.",
                  "No old hardcoded value is overriding the setting.",
                  "The final component has been tested after the change.",
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
            </section>
                        {/* ==================================================
                RELATED GUIDES
            ================================================== */}

            <section className="py-8">
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
                Continue exploring Sellio documentation for
                storefront customization, product
                management, and reusable template
                components.
              </p>

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
                  href=""
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                    p-5
                    transition-all
                    hover:border-coral
                    hover:bg-black/[0.02]
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
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <Code2
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
                    Browse Sellio storefront, store
                    management, and customization guides.
                  </p>
                </Link>

                {/* PRODUCT MANAGEMENT */}

                <Link
                  href=""
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                    p-5
                    transition-all
                    hover:border-coral
                    hover:bg-black/[0.02]
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
                        shrink-0
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
                    Product Management
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Learn how product information is
                    organized and presented throughout your
                    storefront.
                  </p>
                </Link>

                {/* STOREFRONT SETTINGS */}

                <Link
                  href="/documentation"
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                    p-5
                    transition-all
                    hover:border-coral
                    hover:bg-black/[0.02]
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
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-coral/10
                      "
                    >
                      <Store
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
                    Storefront Guides
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Explore additional guidance for
                    configuring and maintaining your online
                    storefront.
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
                    transition-all
                    hover:border-coral
                    hover:bg-black/[0.02]
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
                        shrink-0
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
                    consistent, and customer-friendly store
                    experiences.
                  </p>
                </Link>
              </div>

              {/* ==================================================
                  PAGE NAVIGATION
              ================================================== */}

              <div
                className="
                  mt-10
                  grid
                  gap-4
                  border-t
                  border-border
                  pt-8
                  sm:grid-cols-2
                "
              >
                {/* PREVIOUS */}

                <Link
                  href="/documentation/custom-twig-slider"
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                    p-5
                    transition-all
                    hover:border-coral
                    hover:bg-black/[0.02]
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-navy-mute
                    "
                  >
                    Previous
                  </p>

                  <div
                    className="
                      mt-3
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
                        text-coral
                        transition-transform
                        group-hover:-translate-x-1
                      "
                    />

                Custom-Twig-Slider
                  </div>

                 
                </Link>

                {/* NEXT */}

                <Link
                  href="/documentation/analytics"
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                    p-5
                    text-right
                    transition-all
                    hover:border-coral
                    hover:bg-black/[0.02]
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-navy-mute
                    "
                  >
                    Next
                  </p>

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      justify-end
                      gap-2
                      text-sm
                      font-semibold
                    "
                  >
                   Analytics

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        text-coral
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </div>

               
                </Link>
              </div>

              {/* FINAL NOTE */}

              <p
                className="
                  mt-6
                  text-xs
                  leading-5
                  text-navy-mute
                "
              >
                Test settings-driven templates with
                realistic storefront data before publishing
                changes to your live store.
              </p>
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
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-navy-mute
                "
              >
                On This Page
              </p>

              <nav
                className="
                  mt-4
                  border-l
                  border-border
                "
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
                  pt-5
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    text-navy
                  "
                >
                  Related documentation
                </p>

                <div className="mt-3 space-y-2">
                  <Link
                    href="/documentation"
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
                    Documentation

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
                    Standards Overview

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

              {/* ==================================================
                  SETTINGS TIP
              ================================================== */}

              <div
                className="
                  mt-8
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.025]
                  p-4
                "
              >
                <Settings
                  className="
                    h-4
                    w-4
                    text-coral
                  "
                />

                <p
                  className="
                    mt-3
                    text-xs
                    font-semibold
                    text-navy
                  "
                >
                  Settings tip
                </p>

                <p
                  className="
                    mt-2
                    text-[11px]
                    leading-5
                    text-navy-mute
                  "
                >
                  Keep variable names predictable and check
                  optional values before rendering dependent
                  markup.
                </p>
              </div>

              {/* ==================================================
                  BACK TO TOP
              ================================================== */}

              <div
                className="
                  mt-7
                  border-t
                  border-border
                  pt-5
                "
              >
                <a
                  href="#overview"
                  onClick={() =>
                    setActiveSection("overview")
                  }
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

                  Back to overview
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </>
  );
}