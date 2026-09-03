"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  Copy,
  Check,
  Code2,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

/* ============================================================
   PAGE SECTIONS
============================================================ */

const sections = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "creating-block",
    label: "Creating a Custom Block",
  },
  {
    id: "template-data",
    label: "Template Data",
  },
  {
    id: "example",
    label: "Example",
  },
  {
    id: "dynamic-content",
    label: "Dynamic Content",
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

export default function CustomTwigBlockPage() {
  const [activeSection, setActiveSection] =
    useState("overview");

  const [openItem, setOpenItem] =
    useState<string | null>(null);

  const [copied, setCopied] =
    useState(false);

  /* ============================================================
     SCROLL SPY
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;

      sections.forEach((item) => {
        const element =
          document.getElementById(item.id);

        if (!element) return;

        if (
          element.offsetTop <=
          window.scrollY + 160
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
     CODE EXAMPLE
  ============================================================ */

  const exampleCode = `<div class="product-block">
  <h3>{{ product.name }}</h3>

  <p>{{ product.price }}</p>

  <a href="{{ product.url }}">
    View product
  </a>
</div>`;

  /* ============================================================
     COPY CODE
  ============================================================ */

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

  /* ============================================================
     TOGGLE
  ============================================================ */

  const toggleItem = (id: string) => {
    setOpenItem(
      openItem === id ? null : id
    );
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
                PAGE INTRO
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
                  text-coral
                "
              >
                Sellio Advanced
              </p>


              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                "
              >
                Custom Template Block
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
                Create reusable custom content blocks
                for your Sellio store when the standard
                page components do not provide the exact
                structure you need.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Custom template blocks can combine
                storefront content, template values,
                links, and product information into a
                reusable section.
              </p>


              {/* INFO BOX */}

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
                    Keep custom blocks simple and focused
                    so they remain easy to maintain and
                    reuse across your Sellio store.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                CREATING BLOCK
            ================================================== */}

            <section
              id="creating-block"
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
                Creating a Custom Block
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Start with the content and layout you
                want customers to see. You can then
                connect the block to the template values
                available in the current Sellio page
                context.
              </p>


              <ol
                className="
                  mt-6
                  space-y-4
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >

                <li
                  className="
                    flex
                    items-start
                    gap-3
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
                      bg-coral
                      text-xs
                      font-semibold
                      text-white
                    "
                  >
                    1
                  </span>

                  <span>
                    Decide where the custom block should
                    appear.
                  </span>

                </li>


                <li
                  className="
                    flex
                    items-start
                    gap-3
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
                      bg-coral
                      text-xs
                      font-semibold
                      text-white
                    "
                  >
                    2
                  </span>

                  <span>
                    Create the customer-facing structure.
                  </span>

                </li>


                <li
                  className="
                    flex
                    items-start
                    gap-3
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
                      bg-coral
                      text-xs
                      font-semibold
                      text-white
                    "
                  >
                    3
                  </span>

                  <span>
                    Add the template values required by
                    the section.
                  </span>

                </li>


                <li
                  className="
                    flex
                    items-start
                    gap-3
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
                      bg-coral
                      text-xs
                      font-semibold
                      text-white
                    "
                  >
                    4
                  </span>

                  <span>
                    Preview the block and test it across
                    different screen sizes.
                  </span>

                </li>

              </ol>


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
                  Custom content should follow the same
                  visual hierarchy as the rest of your
                  Sellio storefront.
                </p>

              </div>

            </section>


            {/* ==================================================
                TEMPLATE DATA
            ================================================== */}

            <section
              id="template-data"
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
                Template Data
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Template data allows a custom block to
                display information from the current
                Sellio page context.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Product-focused blocks can use relevant
                product information to create reusable
                storefront components.
              </p>


              {/* DATA TABLE */}

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
                        Description
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
                        Identifies the current product.
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
                        Customer-facing product name.
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
                        Product price available to the
                        current page.
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
                        URL used to open the product page.
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </section>


            {/* ==================================================
                EXAMPLE
            ================================================== */}

            <section
              id="example"
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
                Example
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                This example creates a simple product
                block using template values instead of
                hard-coded product information.
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
                      Custom block
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
                    {exampleCode}
                  </code>
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
                Because the content comes from the
                current template context, the same
                structure can be reused for different
                products.
              </p>

            </section>


            {/* ==================================================
                DYNAMIC CONTENT
            ================================================== */}

            <section
              id="dynamic-content"
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
                Dynamic Content
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Dynamic content lets one custom block
                display different information depending
                on the current page or product context.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                This makes custom blocks useful for
                reusable product sections, promotional
                areas, and supporting store information.
              </p>


              {/* DYNAMIC CONTENT EXAMPLE */}

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

                  <Code2
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
                      Use the current page context
                    </p>


                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      A product block can display the
                      information associated with the
                      product currently being viewed.
                    </p>

                  </div>

                </div>

              </div>


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
                    Dynamic content
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
                  <code>{`<article class="product-summary">
  <h2>{{ product.name }}</h2>

  <p>{{ product.price }}</p>

  <a href="{{ product.url }}">
    View product
  </a>
</article>`}</code>
                </pre>

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
                Follow a few simple practices to keep
                custom template blocks reliable and easy
                to maintain.
              </p>


              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  {
                    id: "focus",
                    title: "Keep blocks focused",
                    text:
                      "Give each block one clear purpose instead of combining unrelated content.",
                  },
                  {
                    id: "supported",
                    title: "Use supported data",
                    text:
                      "Only reference values that are available in the current template context.",
                  },
                  {
                    id: "clear",
                    title: "Keep content clear",
                    text:
                      "Use simple customer-facing content that fits naturally with your Sellio storefront.",
                  },
                  {
                    id: "test",
                    title: "Test before publishing",
                    text:
                      "Check the block with different products and on both desktop and mobile screens.",
                  },
                ].map((item) => (
                  <div
                    key={item.id}
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
                If a custom block does not display as
                expected, check the template context,
                referenced values, and surrounding markup.
              </p>


              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {/* ITEM 1 */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      toggleItem("empty")
                    }
                    aria-expanded={
                      openItem === "empty"
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-4
                      py-3
                      text-left
                      text-sm
                      transition-colors
                      hover:text-coral
                    "
                  >

                    <span>
                      The dynamic value is empty
                    </span>


                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        ${
                          openItem === "empty"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />

                  </button>


                  {openItem === "empty" && (
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
                        Check that the referenced value
                        is available in the current page
                        context and that the variable name
                        is correct.
                      </p>

                    </div>
                  )}

                </div>


                {/* ITEM 2 */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      toggleItem("layout")
                    }
                    aria-expanded={
                      openItem === "layout"
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-4
                      py-3
                      text-left
                      text-sm
                      transition-colors
                      hover:text-coral
                    "
                  >

                    <span>
                      The layout looks broken
                    </span>


                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        ${
                          openItem === "layout"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />

                  </button>


                  {openItem === "layout" && (
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
                        Check the block markup and make
                        sure the surrounding elements are
                        opened and closed correctly.
                      </p>

                    </div>
                  )}

                </div>


                {/* ITEM 3 */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      toggleItem("link")
                    }
                    aria-expanded={
                      openItem === "link"
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-4
                      py-3
                      text-left
                      text-sm
                      transition-colors
                      hover:text-coral
                    "
                  >

                    <span>
                      The product link does not work
                    </span>


                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        ${
                          openItem === "link"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />

                  </button>


                  {openItem === "link" && (
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
                        Verify that the URL value is
                        available and that it points to
                        the intended Sellio product page.
                      </p>

                    </div>
                  )}

                </div>


                {/* ITEM 4 */}

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      toggleItem("context")
                    }
                    aria-expanded={
                      openItem === "context"
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-4
                      py-3
                      text-left
                      text-sm
                      transition-colors
                      hover:text-coral
                    "
                  >

                    <span>
                      The block works on one page but not another
                    </span>


                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        ${
                          openItem === "context"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />

                  </button>


                  {openItem === "context" && (
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
                        Different page types may provide
                        different template data. Check the
                        available context before using a
                        value in the block.
                      </p>

                    </div>
                  )}

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
                    text-coral
                  "
                >
                  SUPPORT
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
                  If your custom template block is not
                  working as expected, review the template
                  data and test the block in the correct
                  page context.
                </p>


                <Link
                  href="/contact"
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

              <h2
                className="
                  text-xl
                  font-bold
                "
              >
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
                Explore more Sellio documentation to
                learn about your store and advanced
                features.
              </p>


              <div
                className="
                  mt-5
                  space-y-3
                "
              >

                <Link
                  href="/documentation/standards-overview"
                  className="
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
                    hover:text-coral
                  "
                >

                  <span>
                    Standards Overview
                  </span>

                  <ChevronRight
                    className="
                      h-4
                      w-4
                    "
                  />

                </Link>


                <Link
                  href="/documentation/conversion-event-tracking"
                  className="
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
                    hover:text-coral
                  "
                >

                  <span>
                    Conversion Event Tracking
                  </span>

                  <ChevronRight
                    className="
                      h-4
                      w-4
                    "
                  />

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
                    group-hover:text-coral
                  "
                >

                  <ArrowLeft
                    className="
                      h-4
                      w-4
                    "
                  />

                  Standards Overview

                </div>

              </Link>


              {/* NEXT */}

              <Link
                href="/documentation/conversion-event-tracking"
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

                  Conversion Event Tracking

                  <ArrowRight
                    className="
                      h-4
                      w-4
                    "
                  />

                </div>

              </Link>

            </div>


            {/* UPDATED */}

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
              RIGHT TOC
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
                  space-y-4
                "
              >

                {sections.map((item) => {

                  const active =
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
                        transition-colors

                        ${
                          active
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
          FOOTER
      ====================================================== */}

      <Footer />

    </>
  );
}