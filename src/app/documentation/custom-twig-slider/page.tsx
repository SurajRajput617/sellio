"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Info,
  Code2,
  Images,
  ChevronRight,
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
    id: "slider-structure",
    label: "Slider Structure",
  },
  {
    id: "slide-data",
    label: "Slide Data",
  },
  {
    id: "slider-example",
    label: "Slider Example",
  },
  {
    id: "responsive-slider",
    label: "Responsive Slider",
  },
  {
    id: "dynamic-slides",
    label: "Dynamic Slides",
  },
  {
    id: "slider-navigation",
    label: "Slider Navigation",
  },
  {
    id: "best-practices",
    label: "Best Practices",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
  },
  {
    id: "need-help",
    label: "Need Help",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function CustomTwigSliderPage() {
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
        window.scrollY + 170;

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
     SLIDER CODE
  ============================================================ */

  const sliderCode = `<div class="product-slider">

  {% for product in products %}

    <article class="product-slide">

      <img
        src="{{ product.image }}"
        alt="{{ product.name }}"
      >

      <div class="product-slide-content">

        <h3>
          {{ product.name }}
        </h3>

        <p>
          {{ product.price }}
        </p>

        <a href="{{ product.url }}">
          View product
        </a>

      </div>

    </article>

  {% endfor %}

</div>`;

  /* ============================================================
     COPY CODE
  ============================================================ */

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(
        sliderCode
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
                Advanced
              </p>

              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-tight
                "
              >
                Custom Template Slider
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
                Create a reusable slider for your Sellio
                storefront using template data and a
                custom slide structure.
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
                A custom slider can be used to present
                products, promotional content, featured
                collections, or other visual storefront
                sections in a compact interactive layout.
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
                    Keep each slide focused on a clear
                    piece of information and make sure
                    navigation remains easy to use on
                    both desktop and mobile.
                  </p>
                </div>
              </div>
            </section>

            {/* ==================================================
                SLIDER STRUCTURE
            ================================================== */}

            <section
              id="slider-structure"
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
                Slider Structure
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A slider is made up of a main container
                and individual slides. Each slide can
                contain an image, heading, supporting
                information, and a link.
              </p>

              {/* ==================================================
                  STRUCTURE CARDS
              ================================================== */}

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                {/* SLIDER CONTAINER */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    bg-white/40
                    p-5
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
                        items-center
                        justify-center
                        rounded-lg
                        bg-black/5
                      "
                    >
                      <Images
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      Slider Container
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
                    Holds the complete collection of
                    slides and provides the main slider
                    area.
                  </p>
                </div>

                {/* INDIVIDUAL SLIDE */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    bg-white/40
                    p-5
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
                        items-center
                        justify-center
                        rounded-lg
                        bg-black/5
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

                    <h3
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      Individual Slide
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
                    Contains the content displayed for
                    one product or promotional item.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  STRUCTURE FLOW
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
                    font-mono
                    text-xs
                    leading-6
                    text-navy-mute
                  "
                >
                  Slider → Slides → Image + Content + Link
                </p>
              </div>
            </section>
                        {/* ==================================================
                SLIDE DATA
            ================================================== */}

            <section
              id="slide-data"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Slide Data
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Each slide should receive the information it
                needs from your template data. For a product
                slider, this will usually include the product
                name, image, price, and destination URL.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keeping the slide data predictable makes the
                component easier to maintain and allows the
                same structure to be reused for different
                products.
              </p>

              {/* DATA FIELDS */}

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
                    grid
                    grid-cols-[130px_minmax(0,1fr)]
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-4
                    py-3
                  "
                >
                  <p className="text-xs font-semibold">
                    Field
                  </p>

                  <p className="text-xs font-semibold">
                    Purpose
                  </p>
                </div>

                {/* NAME */}

                <div
                  className="
                    grid
                    grid-cols-[130px_minmax(0,1fr)]
                    gap-4
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <code
                    className="
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    product.name
                  </code>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    The product title displayed inside the
                    slide.
                  </p>
                </div>

                {/* IMAGE */}

                <div
                  className="
                    grid
                    grid-cols-[130px_minmax(0,1fr)]
                    gap-4
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <code
                    className="
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    product.image
                  </code>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    The image displayed for the product.
                  </p>
                </div>

                {/* PRICE */}

                <div
                  className="
                    grid
                    grid-cols-[130px_minmax(0,1fr)]
                    gap-4
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <code
                    className="
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    product.price
                  </code>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    The customer-facing product price shown
                    within the slide.
                  </p>
                </div>

                {/* URL */}

                <div
                  className="
                    grid
                    grid-cols-[130px_minmax(0,1fr)]
                    gap-4
                    px-4
                    py-4
                  "
                >
                  <code
                    className="
                      text-xs
                      font-medium
                      text-coral
                    "
                  >
                    product.url
                  </code>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    The destination used when the customer
                    opens the product.
                  </p>
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
                    The exact field names depend on the data
                    available to your template. Update the
                    example variables if your storefront
                    exposes product information using
                    different names.
                  </p>
                </div>
              </div>

              {/* DATA FLOW */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  How slide data is used
                </h3>

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
                        Load your collection
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Start with the products or content
                        items that should appear in the
                        slider.
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
                        Loop through the items
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Use the template loop to create one
                        slide for every available item.
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

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Render each slide
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Insert the product information into
                        the slide markup and link it to the
                        appropriate product page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================
                SLIDER EXAMPLE
            ================================================== */}

            <section
              id="slider-example"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Slider Example
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                The example below loops through a collection
                of products and creates one slide for each
                product.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Each slide contains an image, product name,
                price, and link. You can extend the same
                structure with additional information when
                needed.
              </p>

              {/* ==================================================
                  CODE BLOCK
              ================================================== */}

              <div
                className="
                  mt-6
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
                    border-b
                    border-white/10
                    px-4
                    py-3
                  "
                >
                  <div className="flex items-center gap-2">
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
                    <code>{sliderCode}</code>
                  </pre>
                </div>
              </div>

              {/* ==================================================
                  EXAMPLE EXPLANATION
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  What this template does
                </h3>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <Check
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
                      Creates the main{" "}
                      <code className="text-coral">
                        product-slider
                      </code>{" "}
                      container.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check
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
                      Loops through the available products.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check
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
                      Creates a{" "}
                      <code className="text-coral">
                        product-slide
                      </code>{" "}
                      element for each product.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check
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
                      Displays the product image, name, and
                      price.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check
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
                      Links each slide to its corresponding
                      product page.
                    </p>
                  </div>
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
                    The template creates the slide markup.
                    Your storefront styling and slider
                    behaviour can then control how many
                    slides are visible and how customers
                    move between them.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  NEXT GUIDE CARD
              ================================================== */}

              <Link
                href="#responsive-slider"
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
                  <Images className="h-4 w-4 text-coral" />

                  Responsive Slider
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
                RESPONSIVE SLIDER
            ================================================== */}

            <section
              id="responsive-slider"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Responsive Slider
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Your slider should remain easy to use across
                desktop, tablet, and mobile layouts. The
                number of visible slides can change as the
                available screen width becomes smaller.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep slide content flexible so images,
                headings, prices, and links remain readable
                without requiring a fixed card width.
              </p>

              {/* RESPONSIVE CARDS */}

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-3
                "
              >
                {/* DESKTOP */}

                <div
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
                      font-semibold
                      uppercase
                      tracking-wide
                      text-coral
                    "
                  >
                    Desktop
                  </p>

                  <p
                    className="
                      mt-3
                      text-2xl
                      font-bold
                    "
                  >
                    3–4
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Multiple slides can usually be shown
                    together when enough horizontal space
                    is available.
                  </p>
                </div>

                {/* TABLET */}

                <div
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
                      font-semibold
                      uppercase
                      tracking-wide
                      text-coral
                    "
                  >
                    Tablet
                  </p>

                  <p
                    className="
                      mt-3
                      text-2xl
                      font-bold
                    "
                  >
                    2
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Reduce the number of visible slides to
                    keep each card comfortable to read.
                  </p>
                </div>

                {/* MOBILE */}

                <div
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
                      font-semibold
                      uppercase
                      tracking-wide
                      text-coral
                    "
                  >
                    Mobile
                  </p>

                  <p
                    className="
                      mt-3
                      text-2xl
                      font-bold
                    "
                  >
                    1
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    A single prominent slide keeps product
                    information and navigation clear on
                    smaller screens.
                  </p>
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
                    These slide counts are layout examples,
                    not fixed requirements. Choose values
                    that work with your card width, product
                    images, typography, and storefront
                    design.
                  </p>
                </div>
              </div>

              {/* RESPONSIVE STRUCTURE */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Building the responsive layout
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Review the complete slider at each major
                  viewport rather than resizing only the
                  individual cards.
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
                        Start with the smallest layout
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Make sure a single slide works well
                        on a narrow screen before increasing
                        the number of visible slides.
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
                        Increase visible slides
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Add more visible cards as screen
                        space becomes available while
                        preserving useful spacing between
                        slides.
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
                        Check image behaviour
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Keep product images consistent and
                        avoid layouts where changing image
                        dimensions cause the slider to jump
                        unexpectedly.
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
                        Test navigation
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check that the previous and next
                        controls remain easy to reach and do
                        not cover important slide content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RESPONSIVE CHECKLIST */}

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
                    Responsive checklist
                  </p>
                </div>

                {[
                  "Slides remain readable on narrow screens.",
                  "Images resize without becoming distorted.",
                  "Navigation controls remain visible.",
                  "Slide spacing stays consistent.",
                  "Long product names do not break the layout.",
                  "Links and buttons remain easy to select.",
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
                DYNAMIC SLIDES
            ================================================== */}

            <section
              id="dynamic-slides"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Dynamic Slides
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Dynamic slides are generated from the
                collection supplied to your template. This
                means the slider can update as the
                underlying product or content data changes.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Instead of manually creating every slide,
                use a loop so the template repeats the same
                slide structure for each available item.
              </p>

              {/* DYNAMIC FLOW */}

              <div
                className="
                  mt-6
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
                    p-5
                  "
                >
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    01
                  </p>

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Collection
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Start with the product or content
                    collection available to the template.
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
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    02
                  </p>

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Template Loop
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Iterate through the collection and
                    create the same markup for each item.
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
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    03
                  </p>

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Slider
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    The rendered items become the slides
                    displayed by the storefront.
                  </p>
                </div>
              </div>

              {/* SIMPLE FLOW */}

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
                <p
                  className="
                    font-mono
                    text-xs
                    leading-6
                    text-navy-mute
                  "
                >
                  Collection → Template Loop → Slide Markup →
                  Slider
                </p>
              </div>

              {/* EMPTY COLLECTION */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Handle empty collections
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Consider what should happen when there are
                  no products or content items available for
                  the slider.
                </p>

                <div
                  className="
                    mt-5
                    rounded-lg
                    border
                    border-border
                    p-5
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
                      <h3 className="text-sm font-semibold">
                        Avoid an empty slider
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        If the collection contains no items,
                        hide the slider section or display
                        appropriate fallback content rather
                        than leaving an empty carousel on
                        the page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DYNAMIC SLIDE CHECKS */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Things to check
                </h3>

                <div className="mt-5 space-y-3">
                  {[
                    "The collection contains the expected items.",
                    "Each item provides the fields used by the slide.",
                    "Missing images are handled appropriately.",
                    "Long product names remain readable.",
                    "Every product link points to the correct destination.",
                    "The slider behaves correctly when only one item exists.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <Check
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
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* NEXT SECTION CARD */}

              <Link
                href="#slider-navigation"
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
                  <ArrowRight className="h-4 w-4 text-coral" />

                  Slider Navigation
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
                SLIDER NAVIGATION
            ================================================== */}

            <section
              id="slider-navigation"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Slider Navigation
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Navigation controls allow customers to move
                backward and forward through the slides.
                Keep these controls easy to identify and
                position them consistently around the
                slider.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Previous and next buttons are especially
                useful when the slider contains more items
                than can be displayed at the same time.
              </p>

              {/* ==================================================
                  NAVIGATION PREVIEW
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-xl
                  border
                  border-border
                  bg-black/[0.025]
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
                  {/* PREVIOUS BUTTON */}

                  <button
                    type="button"
                    aria-label="Previous slide"
                    className="
                      inline-flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-paper
                      text-navy
                      transition-colors
                      hover:border-coral
                      hover:text-coral
                    "
                  >
                    <ArrowLeft
                      className="
                        h-4
                        w-4
                      "
                    />
                  </button>

                  {/* DEMO SLIDE */}

                  <div
                    className="
                      min-w-0
                      flex-1
                      rounded-lg
                      border
                      border-border
                      bg-paper
                      p-5
                      text-center
                    "
                  >
                    <div
                      className="
                        mx-auto
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-lg
                        bg-black/[0.04]
                      "
                    >
                      <Images
                        className="
                          h-5
                          w-5
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
                      Product Slide
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-navy-mute
                      "
                    >
                      Current slide content
                    </p>
                  </div>

                  {/* NEXT BUTTON */}

                  <button
                    type="button"
                    aria-label="Next slide"
                    className="
                      inline-flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-paper
                      text-navy
                      transition-colors
                      hover:border-coral
                      hover:text-coral
                    "
                  >
                    <ArrowRight
                      className="
                        h-4
                        w-4
                      "
                    />
                  </button>
                </div>
              </div>

              {/* ==================================================
                  NAVIGATION CONTROLS
              ================================================== */}

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                {/* PREVIOUS */}

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
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border
                      "
                    >
                      <ArrowLeft
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <h3 className="text-sm font-semibold">
                      Previous
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
                    Moves the slider toward the previous
                    available item.
                  </p>
                </div>

                {/* NEXT */}

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
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border
                      "
                    >
                      <ArrowRight
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>

                    <h3 className="text-sm font-semibold">
                      Next
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
                    Moves the slider toward the next
                    available item.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  NAVIGATION REQUIREMENTS
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Navigation requirements
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Check the controls in the context of the
                  complete storefront rather than testing
                  them only as isolated buttons.
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Previous and next controls are easy to identify.",
                    "Controls remain visible on desktop and mobile.",
                    "Buttons do not cover important slide content.",
                    "Navigation follows a predictable direction.",
                    "Controls have useful accessible labels.",
                    "The slider behaves correctly at the first and last item.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <Check
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
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  NAVIGATION PROCESS
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Adding navigation
                </h3>

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
                        Add the controls
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Place previous and next buttons near
                        the slider where they are easy to
                        associate with the slide content.
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
                        Connect slider behaviour
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Connect each control to the slider
                        logic responsible for changing the
                        current item or slide position.
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
                        Handle slider boundaries
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Decide what happens when the user
                        reaches the first or last available
                        slide.
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
                        Test each viewport
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Test navigation at mobile, tablet,
                        and desktop sizes to make sure the
                        controls remain usable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  ACCESSIBILITY NOTE
              ================================================== */}

              <div
                className="
                  mt-8
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
                    Icon-only navigation buttons should
                    include descriptive labels such as{" "}
                    <code className="text-coral">
                      aria-label=&quot;Previous slide&quot;
                    </code>{" "}
                    and{" "}
                    <code className="text-coral">
                      aria-label=&quot;Next slide&quot;
                    </code>
                    .
                  </p>
                </div>
              </div>
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
              <h2 className="text-xl font-bold">
                Best Practices
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A useful product slider should support the
                storefront rather than making products more
                difficult to browse. Keep the component
                focused, predictable, and easy to maintain.
              </p>

              {/* ==================================================
                  BEST PRACTICE CARDS
              ================================================== */}

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                {/* CONSISTENT IMAGES */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <Images
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
                    Keep images consistent
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Use a predictable image area so slides
                    remain aligned when product imagery has
                    different dimensions.
                  </p>
                </div>

                {/* SIMPLE CONTENT */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <Code2
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
                    Keep slides focused
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Avoid placing too much information
                    inside a single slide. Show the details
                    customers need to understand the item.
                  </p>
                </div>

                {/* LINKS */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <ArrowRight
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
                    Use clear destinations
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Make it clear where a slide or action
                    will take the customer before they
                    select it.
                  </p>
                </div>

                {/* RESPONSIVE */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <Check
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
                    Test the complete component
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Test slide content, navigation,
                    responsive behaviour, and product links
                    together before publishing.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  RECOMMENDED CHECKLIST
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Before publishing
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Review the slider as part of the real
                  storefront page where customers will use
                  it.
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
                  {[
                    {
                      title: "Product data",
                      description:
                        "Names, images, prices, and links display correctly.",
                    },
                    {
                      title: "Slide layout",
                      description:
                        "Cards remain aligned and readable.",
                    },
                    {
                      title: "Navigation",
                      description:
                        "Previous and next controls work correctly.",
                    },
                    {
                      title: "Responsive layout",
                      description:
                        "The slider works at mobile, tablet, and desktop sizes.",
                    },
                    {
                      title: "Empty states",
                      description:
                        "The page handles missing or empty collections appropriately.",
                    },
                    {
                      title: "Accessibility",
                      description:
                        "Interactive controls have useful labels and remain easy to use.",
                    },
                  ].map((item, index, array) => (
                    <div
                      key={item.title}
                      className={`
                        flex
                        items-start
                        gap-4
                        px-4
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
                          mt-0.5
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-coral/10
                        "
                      >
                        <Check
                          className="
                            h-3.5
                            w-3.5
                            text-coral
                          "
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            text-sm
                            font-medium
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
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
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
                    Keep the slider implementation as simple
                    as the storefront requires. Additional
                    controls and visual effects should have
                    a clear purpose rather than making the
                    component harder to navigate.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  NEXT SECTION
              ================================================== */}

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
                  <Code2
                    className="
                      h-4
                      w-4
                      text-coral
                    "
                  />

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
                If your slider is not displaying or behaving
                as expected, start by checking the template
                data, rendered markup, responsive layout,
                and navigation controls separately.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Testing one part at a time usually makes it
                easier to identify whether the issue comes
                from the data, template structure, styling,
                or slider behaviour.
              </p>

              {/* ==================================================
                  COMMON ISSUES
              ================================================== */}

              <div className="mt-6 space-y-4">
                {/* SLIDER NOT DISPLAYING */}

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
                      gap-3
                    "
                  >
                    <Code2
                      className="
                        mt-0.5
                        h-5
                        w-5
                        shrink-0
                        text-coral
                      "
                    />

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold">
                        Slider is not displaying
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check that the template receives a
                        collection and that the loop renders
                        at least one slide.
                      </p>

                      <div
                        className="
                          mt-4
                          rounded-md
                          bg-black/[0.04]
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
                          Check: collection → loop → rendered
                          slide markup.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MISSING PRODUCT INFORMATION */}

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
                      gap-3
                    "
                  >
                    <Info
                      className="
                        mt-0.5
                        h-5
                        w-5
                        shrink-0
                        text-coral
                      "
                    />

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold">
                        Product information is missing
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Confirm that the variable names used
                        in the template match the fields
                        provided by your product data.
                      </p>

                      <div
                        className="
                          mt-4
                          grid
                          gap-2
                          sm:grid-cols-2
                        "
                      >
                        {[
                          "product.name",
                          "product.image",
                          "product.price",
                          "product.url",
                        ].map((field) => (
                          <code
                            key={field}
                            className="
                              rounded-md
                              border
                              border-border
                              bg-black/[0.025]
                              px-3
                              py-2
                              text-xs
                              text-coral
                            "
                          >
                            {field}
                          </code>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* IMAGES NOT DISPLAYING */}

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
                      gap-3
                    "
                  >
                    <Images
                      className="
                        mt-0.5
                        h-5
                        w-5
                        shrink-0
                        text-coral
                      "
                    />

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold">
                        Images are not displaying
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check that each item has an image
                        value and that the rendered image
                        source points to a valid storefront
                        asset.
                      </p>

                      <p
                        className="
                          mt-3
                          text-xs
                          leading-5
                          text-navy-mute
                        "
                      >
                        Consider a fallback image or a hidden
                        image area when an item does not
                        provide usable imagery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SLIDES TOO WIDE */}

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
                      gap-3
                    "
                  >
                    <Images
                      className="
                        mt-0.5
                        h-5
                        w-5
                        shrink-0
                        text-coral
                      "
                    />

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold">
                        Slides are too wide on mobile
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check the minimum width of each slide
                        and make sure the mobile layout can
                        display a single card without causing
                        unwanted page overflow.
                      </p>
                    </div>
                  </div>
                </div>

                {/* NAVIGATION NOT WORKING */}

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
                      gap-3
                    "
                  >
                    <ArrowRight
                      className="
                        mt-0.5
                        h-5
                        w-5
                        shrink-0
                        text-coral
                      "
                    />

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold">
                        Navigation does not move the slider
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Confirm that the previous and next
                        controls are connected to the same
                        slider instance or state used to
                        display the current slides.
                      </p>
                    </div>
                  </div>
                </div>

                {/* WRONG PRODUCT LINK */}

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
                      gap-3
                    "
                  >
                    <ChevronRight
                      className="
                        mt-0.5
                        h-5
                        w-5
                        shrink-0
                        text-coral
                      "
                    />

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold">
                        A slide opens the wrong product
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check that the link is generated from
                        the current item inside the template
                        loop rather than from a fixed URL.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  DEBUG PROCESS
              ================================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Debugging process
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Work through the slider from its data
                  source to the final customer-facing
                  interaction.
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
                        Check the data
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Confirm that the expected collection
                        and product fields are available to
                        the template.
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
                        Check the rendered markup
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Make sure the loop produces the
                        expected number of slide elements.
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
                        Check the layout
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Review card widths, image sizing,
                        spacing, overflow, and responsive
                        behaviour.
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
                        Check interaction
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Test previous and next controls,
                        product links, keyboard focus, and
                        the final experience at different
                        screen sizes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TROUBLESHOOTING NOTE */}

              <div
                className="
                  mt-8
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
                    If the template renders correctly but
                    the slides still do not move, focus your
                    debugging on the slider behaviour rather
                    than changing the product loop.
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
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Need Help?
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                If you are having trouble building or
                reviewing your storefront slider, check the
                related Sellio documentation or contact
                support for additional guidance.
              </p>

              {/* HELP BOX */}

              <div
                className="
                  mt-6
                  rounded-xl
                  border
                  border-border
                  bg-black/[0.025]
                  p-6
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div className="min-w-0">
                    <p
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      Still having trouble?
                    </p>

                    <p
                      className="
                        mt-2
                        max-w-xl
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Contact Sellio support with a
                      description of the issue and the part
                      of your storefront you are working on.
                    </p>
                  </div>

                  <Link
                    href="/#contact"
                    className="
                      inline-flex
                      shrink-0
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-coral
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      transition-opacity
                      hover:opacity-90
                    "
                  >
                    Contact Support

                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>

            {/* ==================================================
                RELATED GUIDES
            ================================================== */}

            <section className="py-8">
              <h2 className="text-xl font-bold">
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
                related storefront, product, and ecommerce
                guidance.
              </p>

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
                    transition-colors
                    hover:border-coral
                  "
                >
                  <Code2 className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                      transition-colors
                      group-hover:text-coral
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
                    Explore documentation for managing and
                    maintaining your Sellio storefront.
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
                    transition-colors
                    hover:border-coral
                  "
                >
                  <Images className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                      transition-colors
                      group-hover:text-coral
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
                    Review product information, imagery,
                    catalogue content, and storefront data.
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
                  <Check className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                      transition-colors
                      group-hover:text-coral
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
                    Review Sellio guidance for clear and
                    consistent customer-facing store
                    experiences.
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-1
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    View guide

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </Link>

                {/* DOCUMENTATION HOME */}

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
                  <Info className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-semibold
                      transition-colors
                      group-hover:text-coral
                    "
                  >
                    Documentation Home
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-navy-mute
                    "
                  >
                    Browse all available Sellio guides and
                    documentation topics.
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-1
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    Browse documentation

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </div>
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
                pt-8
                sm:grid-cols-2
              "
            >
              {/* PREVIOUS */}

              <Link
                href="/documentation/custom-twig-product-grid"
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
                    mt-2
                    text-sm
                    font-semibold
                    transition-colors
                    group-hover:text-coral
                  "
                >
                  Custom-Twig-Product-Grid
                </p>
              </Link>

              {/* NEXT */}

              <Link
                href="/documentation/settings-variables"
                className="
                  group
                  rounded-lg
                  border
                  border-border
                  p-5
                  text-right
                  transition-colors
                  hover:border-coral
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-end
                    gap-2
                    text-xs
                    text-navy-mute
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
                    mt-2
                    text-sm
                    font-semibold
                    transition-colors
                    group-hover:text-coral
                  "
                >
                 Settings-Variables
                </p>
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
              Test custom storefront components across
              different screen sizes before publishing
              changes to your live store.
            </p>

          </article>
                    {/* ==================================================
              RIGHT SIDEBAR
          ================================================== */}

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

              {/* ==================================================
                  RELATED GUIDES
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
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-navy-mute
                  "
                >
                  Related Guides
                </p>

                <div className="mt-4 space-y-3">
                  {/* PRODUCT MANAGEMENT */}

                  <Link
                    href="/documentation/product-management"
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
                      Product Management
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

                  {/* STORE MANAGEMENT */}

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
                    <span>
                      Store Management
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

                  {/* STANDARDS */}

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

              {/* ==================================================
                  QUICK LINKS
              ================================================== */}

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
                  Quick Links
                </p>

                <div className="mt-4 space-y-3">
                  {/* OVERVIEW */}

                  <a
                    href="#overview"
                    onClick={() =>
                      setActiveSection("overview")
                    }
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
                      Back to Overview
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
                  </a>

                  {/* EXAMPLE */}

                  <a
                    href="#slider-example"
                    onClick={() =>
                      setActiveSection(
                        "slider-example"
                      )
                    }
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
                      Slider Example
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
                  </a>

                  {/* TROUBLESHOOTING */}

                  <a
                    href="#troubleshooting"
                    onClick={() =>
                      setActiveSection(
                        "troubleshooting"
                      )
                    }
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
                      Troubleshooting
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
                  </a>
                </div>
              </div>

              {/* ==================================================
                  TIP
              ================================================== */}

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
                <div className="flex items-start gap-3">
                  <Code2
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
                        text-xs
                        font-semibold
                        text-navy
                      "
                    >
                      Test before publishing
                    </p>

                    <p
                      className="
                        mt-2
                        text-[11px]
                        leading-5
                        text-navy-mute
                      "
                    >
                      Check your slider with real product
                      data and test the complete component
                      across desktop, tablet, and mobile.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  SUPPORT
              ================================================== */}

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
                  Explore the Sellio documentation or
                  contact support if you need help with
                  your storefront implementation.
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

              {/* ==================================================
                  DOCUMENTATION HOME
              ================================================== */}

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

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </>
  );
}