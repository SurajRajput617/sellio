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
  Link2,
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
    id: "what-are-utms",
    label: "What Are UTM Tags?",
  },
  {
    id: "create-utm-link",
    label: "How to Create a UTM Link",
  },
  {
    id: "using-utm",
    label: "Using Your UTM Tag",
  },
  {
    id: "utm-sms",
    label: "Adding a UTM Link to SMS",
  },
];


/* ============================================================
   PAGE
============================================================ */

export default function UTMTagsPage() {

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
        window.scrollY + 180;

      let current =
        sections[0].id;

      sections.forEach((section) => {

        const element =
          document.getElementById(
            section.id
          );

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
     UTM EXAMPLE
  ============================================================ */

  const utmExample =
    `https://yourstore.com/product/example-product?utm_source=instagram&utm_medium=social&utm_campaign=spring-sale`;


  /* ============================================================
     COPY
  ============================================================ */

  const copyUTM = async () => {

    try {

      await navigator.clipboard.writeText(
        utmExample
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
                Marketing & Analytics
              </p>


              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-tight
                "
              >
                UTM Tags
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
                UTM tags help you understand where visitors
                come from when they reach your Sellio store.
                They add useful campaign information to a
                website URL so you can measure the performance
                of your marketing links.
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
                By adding campaign parameters to links shared
                through social media, email, advertising, or
                other channels, you can make your traffic
                reports more useful and easier to understand.
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
                    UTM parameters do not change the page
                    that a visitor reaches. They add
                    information to the URL that analytics
                    tools can use to identify the source
                    and campaign.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                WHAT ARE UTM TAGS
            ================================================== */}

            <section
              id="what-are-utms"
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
                What Are UTM Tags?
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                UTM tags are small parameters added to the
                end of a URL. They tell analytics platforms
                where a visitor came from and which campaign
                or promotion introduced them to your store.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                For a Sellio store, you can use UTM tags to
                compare traffic from different marketing
                campaigns and understand which channels bring
                visitors to your products.
              </p>


              {/* ==================================================
                  UTM PARAMETERS
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
                    name: "utm_source",
                    text:
                      "Identifies where the traffic came from, such as Instagram, email, or another marketing source.",
                  },
                  {
                    name: "utm_medium",
                    text:
                      "Describes the marketing channel, such as social, email, or paid advertising.",
                  },
                  {
                    name: "utm_campaign",
                    text:
                      "Identifies the specific campaign or promotion connected to the link.",
                  },
                  {
                    name: "utm_content",
                    text:
                      "Can help distinguish between different links or creative versions within the same campaign.",
                  },
                ].map((item) => (

                  <div
                    key={item.name}
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
                        gap-2
                      "
                    >

                      <Link2
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />


                      <code
                        className="
                          text-xs
                          font-semibold
                          text-coral
                        "
                      >
                        {item.name}
                      </code>

                    </div>


                    <p
                      className="
                        mt-3
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
                CREATE UTM LINK
            ================================================== */}

            <section
              id="create-utm-link"
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
                How to Create a UTM Link
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Create a UTM link by starting with the Sellio
                page you want visitors to open and then adding
                campaign parameters that describe where the
                link will be shared.
              </p>


              <ol
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Choose the Sellio product or storefront page you want to promote.",
                  "Decide which marketing source will share the link.",
                  "Choose a medium that describes the marketing channel.",
                  "Give the campaign a clear and recognizable name.",
                  "Add the UTM parameters to the destination URL.",
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
                  URL EXAMPLE
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

                  <span
                    className="
                      text-xs
                      text-white/70
                    "
                  >
                    Example UTM URL
                  </span>


                  <button
                    type="button"
                    onClick={copyUTM}
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
                    {utmExample}
                  </code>
                </pre>

              </div>


              {/* ==================================================
                  URL BREAKDOWN
              ================================================== */}

              <div
                className="
                  mt-5
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  p-5
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
                  Example breakdown
                </p>


                <div
                  className="
                    mt-4
                    space-y-3
                  "
                >

                  <div
                    className="
                      flex
                      flex-col
                      gap-1
                      sm:flex-row
                      sm:items-center
                      sm:gap-4
                    "
                  >

                    <code
                      className="
                        text-xs
                        font-semibold
                        text-coral
                      "
                    >
                      utm_source=instagram
                    </code>


                    <span
                      className="
                        text-sm
                        text-navy-mute
                      "
                    >
                      Traffic came from Instagram.
                    </span>

                  </div>


                  <div
                    className="
                      flex
                      flex-col
                      gap-1
                      sm:flex-row
                      sm:items-center
                      sm:gap-4
                    "
                  >

                    <code
                      className="
                        text-xs
                        font-semibold
                        text-coral
                      "
                    >
                      utm_medium=social
                    </code>


                    <span
                      className="
                        text-sm
                        text-navy-mute
                      "
                    >
                      The link was shared through a social
                      channel.
                    </span>

                  </div>


                  <div
                    className="
                      flex
                      flex-col
                      gap-1
                      sm:flex-row
                      sm:items-center
                      sm:gap-4
                    "
                  >

                    <code
                      className="
                        text-xs
                        font-semibold
                        text-coral
                      "
                    >
                      utm_campaign=spring-sale
                    </code>


                    <span
                      className="
                        text-sm
                        text-navy-mute
                      "
                    >
                      The link belongs to the Spring Sale
                      campaign.
                    </span>

                  </div>

                </div>

              </div>

            </section>
                        {/* ==================================================
                USING YOUR UTM TAG
            ================================================== */}

            <section
              id="using-utm"
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
                Using Your UTM Tag
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Once you have created a UTM link, use that
                exact URL in the marketing channel you want
                to measure. The parameters remain attached
                when a visitor follows the link to your
                Sellio store.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep your naming consistent across campaigns
                so your analytics reports remain easier to
                read and compare.
              </p>


              {/* ==================================================
                  COMMON USES
              ================================================== */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  {
                    title: "Social Media",
                    text:
                      "Add UTM parameters to links shared on social platforms so you can identify traffic generated by those posts.",
                  },
                  {
                    title: "Email Campaigns",
                    text:
                      "Use campaign links in promotional emails to understand which messages drive visitors to your storefront.",
                  },
                  {
                    title: "Paid Advertising",
                    text:
                      "Add appropriate campaign parameters to advertising destination URLs so traffic sources can be compared.",
                  },
                  {
                    title: "Promotions",
                    text:
                      "Create separate links for different promotions when you want to compare their performance.",
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


              {/* ==================================================
                  NAMING TIPS
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-5
                "
              >

                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Keep your UTM names consistent
                </p>


                <ul
                  className="
                    mt-3
                    list-disc
                    space-y-2
                    pl-5
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >

                  <li>
                    Use clear names that describe the
                    campaign.
                  </li>

                  <li>
                    Use the same spelling and capitalization
                    conventions across campaigns.
                  </li>

                  <li>
                    Avoid unnecessary spaces or confusing
                    parameter values.
                  </li>

                  <li>
                    Make campaign names easy for your team
                    to recognize later.
                  </li>

                </ul>

              </div>

            </section>


            {/* ==================================================
                ADDING UTM LINK TO SMS
            ================================================== */}

            <section
              id="utm-sms"
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
                Adding a UTM Link to SMS
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                You can also use UTM-tagged URLs in SMS
                campaigns. This lets you distinguish visits
                generated by a text message from traffic
                generated by other channels.
              </p>


              <ol
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Create the destination URL for the Sellio page you want to promote.",
                  "Add the UTM source, medium, and campaign parameters.",
                  "Copy the completed URL.",
                  "Place the URL in your SMS campaign.",
                  "Review your analytics reports after customers begin visiting the link.",
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
                  SMS EXAMPLE
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  p-5
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
                  Example
                </p>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A promotional SMS could direct customers
                  to a Sellio product page using a campaign
                  URL such as:
                </p>


                <div
                  className="
                    mt-4
                    overflow-hidden
                    rounded-md
                    border
                    border-border
                    bg-[#101a2c]
                  "
                >

                  <pre
                    className="
                      overflow-x-auto
                      p-4
                      text-xs
                      leading-6
                      text-white/85
                    "
                  >
                    <code>
                      {`https://yourstore.com/products/example-product?utm_source=sms&utm_medium=message&utm_campaign=spring-sale`}
                    </code>
                  </pre>

                </div>

              </div>


              {/* ==================================================
                  IMPORTANT NOTE
              ================================================== */}

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
                    Keep links reasonably short when using
                    them in messages. If a URL becomes difficult
                    to read, consider using a trusted link
                    management solution.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                UTM NAMING BEST PRACTICES
            ================================================== */}

            <section
              id="utm-best-practices"
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
                UTM Naming Best Practices
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Consistent naming is important because
                analytics reports use your UTM values to
                group and identify campaign traffic.
              </p>


              {/* ==================================================
                  BEST PRACTICE TABLE
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
                    min-w-[600px]
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
                        Parameter
                      </th>

                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        Good Example
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
                        source
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
                        instagram
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Identifies the traffic source.
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
                        medium
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
                        social
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Identifies the marketing channel.
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
                        campaign
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
                        spring-sale
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Identifies the promotion or campaign.
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
                        content
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
                        hero-banner
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Distinguishes different links or
                        creatives.
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>


              {/* ==================================================
                  CONSISTENCY CALLOUT
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
                  For example, avoid using both
                  <code className="mx-1 font-mono text-xs text-coral">
                    Instagram
                  </code>
                  and
                  <code className="mx-1 font-mono text-xs text-coral">
                    instagram
                  </code>
                  for the same traffic source if your
                  reporting convention expects one format.
                </p>

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
                  If your UTM links are not appearing as
                  expected in your analytics reports, check
                  that the parameters were added correctly
                  and that the complete URL is being used.
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
                  If you still need assistance with your
                  analytics or campaign tracking setup,
                  contact Sellio support.
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
                    className="h-4 w-4"
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
                Explore more Sellio documentation to learn
                about analytics, campaigns, and customer
                activity.
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
                    GOOGLE ANALYTICS
                ================================================== */}

                <Link
                  href="/documentation/google-analytics"
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
                    Google Analytics
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Learn how to connect analytics to your
                    Sellio storefront and review visitor
                    activity.
                  </p>


                  <span
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    Read guide

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />

                  </span>

                </Link>


                {/* ==================================================
                    GOOGLE ANALYTICS TRACKING
                ================================================== */}

                <Link
                  href="/documentation/what-google-analytics-tracks"
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
                    What Google Analytics Tracks
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Understand the types of activity that
                    analytics can measure on your storefront.
                  </p>


                  <span
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    Read guide

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />

                  </span>

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
                  PREVIOUS PAGE
              ================================================== */}

              <Link
                href="/documentation/what-google-analytics-tracks"
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
                    className="h-4 w-4"
                  />

                  What Google Analytics Tracks

                </div>

              </Link>


              {/* ==================================================
                  NEXT PAGE
              ================================================== */}

              <Link
                href="/documentation/creating-a-free-entry-competition"
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

                  Creating a Free Entry Competition

                  <ArrowRight
                    className="h-4 w-4"
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
                    activeSection === section.id;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(event) => {
                        event.preventDefault();

                        document
                          .getElementById(
                            section.id
                          )
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });

                        setActiveSection(
                          section.id
                        );
                      }}
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