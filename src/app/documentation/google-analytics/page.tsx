"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  Info,
  BarChart3,
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
    id: "create-account",
    label: "Create a Google Analytics Account",
  },
  {
    id: "create-property",
    label: "Create a Property",
  },
  {
    id: "business-details",
    label: "Enter Business Details",
  },
  {
    id: "website-tracking",
    label: "Set Up Website Tracking",
  },
  {
    id: "install-analytics",
    label: "Install Google Analytics",
  },
  {
    id: "confirm-tracking",
    label: "Confirm Analytics Tracking",
  },
  {
    id: "what-happens-next",
    label: "What Happens Next?",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function GoogleAnalyticsPage() {
  const [activeSection, setActiveSection] =
    useState("overview");

  const [copied, setCopied] =
    useState(false);

  /* ============================================================
     ACTIVE SECTION
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
     TRACKING CODE
  ============================================================ */

  const trackingCode = `<!-- Google Analytics -->

<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">
</script>

<script>
  window.dataLayer =
    window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag("js", new Date());

  gtag(
    "config",
    "G-XXXXXXXXXX"
  );
</script>`;

  /* ============================================================
     COPY
  ============================================================ */

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(
        trackingCode
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
              MAIN CONTENT
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
                Analytics
              </p>


              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-tight
                "
              >
                Google Analytics
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
                Connect Google Analytics to your Sellio
                store to understand how visitors discover
                your website and how they interact with
                your products and pages.
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
                This guide walks you through creating your
                analytics property, preparing website
                tracking, and confirming that data is
                reaching Google Analytics.
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
                    You will need access to your Google
                    Analytics account and the Sellio store
                    you want to connect.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                CREATE ACCOUNT
            ================================================== */}

            <section
              id="create-account"
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
                Create a Google Analytics Account
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Start by creating or signing in to the
                Google Analytics account you want to use
                for your Sellio store.
              </p>


              <ol
                className="
                  mt-5
                  space-y-3
                "
              >

                {[
                  "Open Google Analytics and sign in with your Google account.",
                  "Choose the option to create an Analytics account.",
                  "Enter a name that clearly identifies your Sellio store.",
                  "Review the account settings and continue.",
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

                <p
                  className="
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Use a recognizable account name so you
                  can easily identify the correct store if
                  you manage more than one website.
                </p>

              </div>

            </section>


            {/* ==================================================
                CREATE PROPERTY
            ================================================== */}

            <section
              id="create-property"
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
                Create a Property
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Create a Google Analytics property for the
                Sellio website you want to measure.
              </p>


              <ol
                className="
                  mt-5
                  space-y-3
                "
              >

                {[
                  "Enter the name of your Sellio store.",
                  "Select the appropriate reporting settings.",
                  "Choose the relevant business or website information.",
                  "Continue to the data collection setup.",
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

            </section>


            {/* ==================================================
                BUSINESS DETAILS
            ================================================== */}

            <section
              id="business-details"
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
                Enter Business Details
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Provide the business information requested
                during the property setup process. Use
                information that accurately represents
                your Sellio store.
              </p>


              <ul
                className="
                  mt-5
                  list-disc
                  space-y-2
                  pl-5
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >

                <li>
                  Select the business category that best
                  describes your store.
                </li>

                <li>
                  Choose the business size that matches
                  your operation.
                </li>

                <li>
                  Select the goals that are most relevant
                  to your analytics setup.
                </li>

              </ul>

            </section>
                        {/* ==================================================
                SET UP WEBSITE TRACKING
            ================================================== */}

            <section
              id="website-tracking"
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
                Set Up Website Tracking
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                After creating your property, set up a web
                data stream for your Sellio storefront.
                This gives Google Analytics a destination
                from which it can collect website activity.
              </p>


              <ol
                className="
                  mt-5
                  space-y-3
                "
              >

                {[
                  "Open the data collection or web stream setup.",
                  "Choose Web as the platform.",
                  "Enter the URL of your Sellio storefront.",
                  "Give the stream a recognizable name.",
                  "Complete the setup and locate your measurement ID.",
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
                  MEASUREMENT ID
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
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-navy-mute
                  "
                >
                  Measurement ID
                </p>


                <p
                  className="
                    mt-2
                    font-mono
                    text-sm
                    font-semibold
                    text-coral
                  "
                >
                  G-XXXXXXXXXX
                </p>


                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Keep your measurement ID available for
                  the tracking configuration.
                </p>

              </div>

            </section>


            {/* ==================================================
                INSTALL GOOGLE ANALYTICS
            ================================================== */}

            <section
              id="install-analytics"
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
                Install Google Analytics on Your Sellio Site
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Add your Google Analytics tracking
                configuration to the appropriate location
                in your Sellio site so Google can receive
                visitor activity.
              </p>


              <ol
                className="
                  mt-5
                  space-y-3
                "
              >

                {[
                  "Copy the tracking configuration from your Google Analytics property.",
                  "Open the tracking or custom code area available for your Sellio site.",
                  "Add the tracking configuration to the site's global head area.",
                  "Save your changes.",
                  "Open your storefront and test the connection.",
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
                  CODE BLOCK
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

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <BarChart3
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
                      Google Analytics
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
                    {trackingCode}
                  </code>
                </pre>

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
                    Replace the example measurement ID with
                    the ID assigned to your Google Analytics
                    web stream.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                CONFIRM TRACKING
            ================================================== */}

            <section
              id="confirm-tracking"
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
                Confirm Analytics Tracking
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                After adding the tracking configuration,
                visit your Sellio storefront and confirm
                that Google Analytics receives activity.
              </p>


              {/* ==================================================
                  CHECKLIST
              ================================================== */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Open your Sellio storefront in a browser.",
                  "Visit several pages on the site.",
                  "Open the reporting area in Google Analytics.",
                  "Check the real-time or current activity view.",
                  "Confirm that your visit is being detected.",
                ].map((item, index) => (
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
                        rounded-full
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
                        leading-6
                        text-navy-mute
                      "
                    >
                      {item}
                    </span>

                  </div>
                ))}

              </div>


              {/* ==================================================
                  SUCCESS CALLOUT
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

                    <p
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      Tracking is connected
                    </p>


                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Once your storefront activity appears
                      in Google Analytics, the basic website
                      tracking setup is complete.
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* ==================================================
                WHAT HAPPENS NEXT
            ================================================== */}

            <section
              id="what-happens-next"
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
                What Happens Next?
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Once tracking is active, Google Analytics
                can begin building reports from activity on
                your Sellio storefront.
              </p>


              <ul
                className="
                  mt-5
                  list-disc
                  space-y-2
                  pl-5
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >

                <li>
                  Review how visitors reach your store.
                </li>

                <li>
                  Understand which pages receive traffic.
                </li>

                <li>
                  Analyze product and ecommerce activity.
                </li>

                <li>
                  Compare traffic sources and customer
                  behavior.
                </li>

                <li>
                  Use the available reports to identify
                  areas that may need improvement.
                </li>

              </ul>


              {/* ==================================================
                  REPORTING CALLOUT
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
                  Analytics data can take some time to
                  populate in standard reports. Use the
                  available real-time reporting tools when
                  checking a new tracking setup.
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
                  If Google Analytics is not receiving data
                  from your Sellio storefront, review the
                  measurement ID, tracking configuration,
                  and placement of the tracking code.
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
                  If you have checked these settings and
                  still need assistance, contact Sellio
                  support for help with your analytics setup.
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
                Explore other Sellio documentation to
                learn more about analytics, products, and
                customer activity.
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
                    GUIDE 1
                ================================================== */}

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
                    can help you understand customer
                    activity.
                  </p>



                </Link>


                {/* ==================================================
                    GUIDE 2
                ================================================== */}

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
                    Dashboard Overview
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Review key store metrics and understand
                    the information available in Sellio.
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

              {/* ==================================================
                  PREVIOUS
              ================================================== */}

              <Link
                href="/documentation/analytics"
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

                  Analytics

                </div>

              </Link>


              {/* ==================================================
                  NEXT
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

               What Google Analytics Tracks


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
                    activeSection ===
                    section.id;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() =>
                        setActiveSection(
                          section.id
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