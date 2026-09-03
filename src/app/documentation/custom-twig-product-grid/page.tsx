"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Copy,
  Check,
  Info,
  Code2,
  LayoutGrid,
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
    id: "product-grid",
    label: "Product Grid Structure",
  },
  {
    id: "product-data",
    label: "Product Data",
  },
  {
    id: "grid-example",
    label: "Product Grid Example",
  },
  {
    id: "grid-layout",
    label: "Grid Layout",
  },
  {
    id: "dynamic-products",
    label: "Dynamic Products",
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

export default function CustomTwigProductGridPage() {
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
     CODE
  ============================================================ */

  const productGridCode = `<div class="product-grid">

  {% for product in products %}

    <article class="product-card">

      <img
        src="{{ product.image }}"
        alt="{{ product.name }}"
      >

      <h3>
        {{ product.name }}
      </h3>

      <p>
        {{ product.price }}
      </p>

      <a href="{{ product.url }}">
        View product
      </a>

    </article>

  {% endfor %}

</div>`;

  /* ============================================================
     COPY
  ============================================================ */

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(
        productGridCode
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
          MAIN DOCUMENTATION
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
              SELLIO SIDEBAR
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
                Custom Product Grid
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
                Create a flexible product grid for your
                Sellio storefront using reusable template
                markup and product information.
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
                A custom product grid gives you more
                control over how products are presented
                while keeping product information dynamic.
              </p>


              {/* INFO CALLOUT */}

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
                    Keep product grids focused on useful
                    customer information such as product
                    images, names, prices, and links.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                PRODUCT GRID STRUCTURE
            ================================================== */}

            <section
              id="product-grid"
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
                Product Grid Structure
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A product grid normally contains a
                collection of product cards. Each card
                can display information from the product
                currently being rendered.
              </p>


              {/* STRUCTURE */}

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >

                {/* CARD 1 */}

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

                      <LayoutGrid
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
                      Grid Container
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
                    Holds the collection of product
                    cards and controls the overall grid
                    layout.
                  </p>

                </div>


                {/* CARD 2 */}

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
                      Product Card
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
                    Displays the information for an
                    individual product.
                  </p>

                </div>

              </div>


              {/* BASIC FLOW */}

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
                  Products → Product Cards → Grid Layout
                </p>

              </div>

            </section>


            {/* ==================================================
                PRODUCT DATA
            ================================================== */}

            <section
              id="product-data"
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
                Product Data
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Product cards can use available product
                values instead of hard-coded information.
                This allows the same grid structure to
                work with different products.
              </p>


              {/* PRODUCT DATA TABLE */}

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
                    min-w-[620px]
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
                        Property
                      </th>

                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        Type
                      </th>

                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        Usage
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
                        product.id
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        String
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Identifies the product.
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
                        product.name
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        String
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Displays the product name.
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
                        product.price
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Number
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Displays the current product price.
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
                        product.image
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        String
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Provides the product image.
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
                        product.url
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        String
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Links to the product page.
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </section>


            {/* ==================================================
                GRID EXAMPLE
            ================================================== */}

            <section
              id="grid-example"
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
                Product Grid Example
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                The following example demonstrates a
                reusable product grid. Each product is
                rendered as an individual card inside
                the grid.
              </p>


              {/* CODE BLOCK */}

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
                        text-white/70
                      "
                    >
                      product-grid
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
                      transition
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
                    {productGridCode}
                  </code>
                </pre>

              </div>


              {/* NOTE */}

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
                    Keep the product card markup
                    consistent across every item so
                    the grid remains visually balanced.
                  </p>

                </div>

              </div>

            </section>
                        {/* ==================================================
                GRID LAYOUT
            ================================================== */}

            <section
              id="grid-layout"
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
                Grid Layout
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                The grid container controls how product
                cards are arranged on the page. A responsive
                layout can show more products on larger
                screens and reduce the number of columns
                on smaller screens.
              </p>


              {/* LAYOUT OPTIONS */}

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
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


                  <h3
                    className="
                      mt-2
                      text-sm
                      font-semibold
                    "
                  >
                    Multiple columns
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Use multiple columns to make efficient
                    use of wider screens.
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


                  <h3
                    className="
                      mt-2
                      text-sm
                      font-semibold
                    "
                  >
                    Smaller layout
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Reduce the number of columns so product
                    information remains easy to read.
                  </p>

                </div>

              </div>


              {/* RESPONSIVE CODE */}

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
                    Responsive grid
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
                  <code>{`.product-grid {
  display: grid;
  grid-template-columns:
    repeat(4, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns:
      1fr;
  }
}`}</code>
                </pre>

              </div>

            </section>


            {/* ==================================================
                DYNAMIC PRODUCTS
            ================================================== */}

            <section
              id="dynamic-products"
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
                Dynamic Products
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A dynamic product grid can render a
                collection of products without creating
                a separate card for every product.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                The template loops through the available
                product collection and creates the same
                card structure for each item.
              </p>


              {/* FLOW */}

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
                    p-4
                    text-center
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

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                    "
                  >
                    Product Collection
                  </p>

                </div>


                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-4
                    text-center
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

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                    "
                  >
                    Product Loop
                  </p>

                </div>


                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-4
                    text-center
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

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                    "
                  >
                    Product Cards
                  </p>

                </div>

              </div>


              {/* CODE */}

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
                    Dynamic product loop
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
                  <code>{`{% for product in products %}

  <article class="product-card">

    <img
      src="{{ product.image }}"
      alt="{{ product.name }}"
    >

    <h3>
      {{ product.name }}
    </h3>

    <p>
      {{ product.price }}
    </p>

    <a href="{{ product.url }}">
      View product
    </a>

  </article>

{% endfor %}`}</code>
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
                    Use a consistent card structure for
                    every product so the grid remains
                    predictable and easy to scan.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                PRODUCT CARD CONTENT
            ================================================== */}

            <section
              id="card-content"
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
                Product Card Content
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A product card should show enough
                information to help customers identify
                the item and decide whether to open its
                product page.
              </p>


              {/* CONTENT LIST */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Product image",
                  "Product name",
                  "Current price",
                  "Product link",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      border
                      border-border
                      px-4
                      py-3
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


                    <span
                      className="
                        text-sm
                        text-navy-mute
                      "
                    >
                      {item}
                    </span>

                  </div>
                ))}

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

              <h2
                className="
                  text-xl
                  font-bold
                "
              >
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
                Follow these practices when creating
                custom product grids for your Sellio store.
              </p>


              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  {
                    title: "Keep the markup simple",
                    text:
                      "Use a clear structure that is easy to understand and maintain.",
                  },
                  {
                    title: "Use meaningful image text",
                    text:
                      "Provide useful alternative text for product images.",
                  },
                  {
                    title: "Keep cards consistent",
                    text:
                      "Use the same content hierarchy for each product.",
                  },
                  {
                    title: "Design for smaller screens",
                    text:
                      "Make sure product cards remain readable on mobile devices.",
                  },
                  {
                    title: "Avoid unnecessary content",
                    text:
                      "Show the information customers actually need to make their next decision.",
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

                    </div>

                  </div>
                ))}

              </div>

            </section>


            {/* ==================================================
                TROUBLESHOOTING
            ================================================== */}

            <section
              id="troubleshooting"
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
                If the product grid does not behave as
                expected, check the template data, markup,
                and responsive styles.
              </p>


              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {/* =================================================
                    ITEM 1
                ================================================= */}

                <details
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <summary
                    className="
                      flex
                      cursor-pointer
                      list-none
                      items-center
                      justify-between
                      px-4
                      py-4
                      text-sm
                      font-semibold
                      [&::-webkit-details-marker]:hidden
                    "
                  >

                    <span>
                      Products are not appearing
                    </span>


                    <ChevronRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-open:rotate-90
                      "
                    />

                  </summary>


                  <div
                    className="
                      border-t
                      border-border
                      px-4
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
                      Check that the product collection
                      is available to the current page
                      and that the template loop references
                      the correct collection.
                    </p>

                  </div>

                </details>


                {/* =================================================
                    ITEM 2
                ================================================= */}

                <details
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <summary
                    className="
                      flex
                      cursor-pointer
                      list-none
                      items-center
                      justify-between
                      px-4
                      py-4
                      text-sm
                      font-semibold
                      [&::-webkit-details-marker]:hidden
                    "
                  >

                    <span>
                      Product images are missing
                    </span>


                    <ChevronRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-open:rotate-90
                      "
                    />

                  </summary>


                  <div
                    className="
                      border-t
                      border-border
                      px-4
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
                      Verify that the image value exists
                      for the product and that the image
                      source is valid.
                    </p>

                  </div>

                </details>


                {/* =================================================
                    ITEM 3
                ================================================= */}

                <details
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <summary
                    className="
                      flex
                      cursor-pointer
                      list-none
                      items-center
                      justify-between
                      px-4
                      py-4
                      text-sm
                      font-semibold
                      [&::-webkit-details-marker]:hidden
                    "
                  >

                    <span>
                      Cards are not aligned
                    </span>


                    <ChevronRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-open:rotate-90
                      "
                    />

                  </summary>


                  <div
                    className="
                      border-t
                      border-border
                      px-4
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
                      Check the grid gap, card height,
                      image dimensions, and content spacing.
                      Consistent card structure helps keep
                      rows aligned.
                    </p>

                  </div>

                </details>


                {/* =================================================
                    ITEM 4
                ================================================= */}

                <details
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <summary
                    className="
                      flex
                      cursor-pointer
                      list-none
                      items-center
                      justify-between
                      px-4
                      py-4
                      text-sm
                      font-semibold
                      [&::-webkit-details-marker]:hidden
                    "
                  >

                    <span>
                      Grid breaks on mobile
                    </span>


                    <ChevronRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-open:rotate-90
                      "
                    />

                  </summary>


                  <div
                    className="
                      border-t
                      border-border
                      px-4
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
                      Add responsive grid rules and
                      reduce the number of columns at
                      smaller screen widths.
                    </p>

                  </div>

                </details>

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
                  If your product grid is not displaying
                  correctly, check the product data, template
                  structure, and responsive layout rules.
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
                  If you still need assistance, contact
                  Sellio support for help with your store
                  documentation and implementation.
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
                to learn more about your store and
                advanced features.
              </p>


              <div
                className="
                  mt-5
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >

                {/* GUIDE 1 */}

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
                    Learn more about managing products
                    in your Sellio store.
                  </p>


               

                </Link>


                {/* GUIDE 2 */}

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
                    Advanced
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
                    can be tracked across your store.
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

              {/* PREVIOUS */}

              <Link
                href="/documentation/custom-twig-block"
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

                  Custom Template Block

                </div>

              </Link>


              {/* NEXT */}

              <Link
                href="/documentation/custom-twig-slider"
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

                  Custom-Twig-Slider

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
                UPDATED
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

                {sections.map((item) => {

                  const isActive =
                    activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() =>
                        setActiveSection(
                          item.id
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
                      {item.label}
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