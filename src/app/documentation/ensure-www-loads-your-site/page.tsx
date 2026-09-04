"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowLeft,
  Check,
  Info,
  Copy,
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
    id: "domain-record",
    label: "Add a Domain Record",
  },
  {
    id: "redirect-rules",
    label: "Set Up Redirect Rules",
  },
  {
    id: "https",
    label: "Ensure HTTPS Is Enabled",
  },
];


/* ============================================================
   PAGE
============================================================ */

export default function EnsureWWWLoadsYourSitePage() {

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
     DNS EXAMPLE
  ============================================================ */

  const dnsExample = `Type: CNAME
Name: www
Target: your-sellio-domain.com`;


  /* ============================================================
     COPY DNS
  ============================================================ */

  const copyDNS = async () => {

    try {

      await navigator.clipboard.writeText(
        dnsExample
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
                Helpful Info
              </p>


              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-tight
                "
              >
                Ensure Your Website Loads Correctly
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
                Make sure customers can reach your Sellio
                storefront through the domain address you
                expect them to use. Correct DNS records and
                redirects help visitors reach the right
                version of your website.
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
                This guide covers the basic domain
                configuration steps to check when your
                website address is not loading correctly.
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
                    DNS changes can take some time to
                    propagate. If you have just updated your
                    domain records, allow time for the changes
                    to become visible.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                DOMAIN RECORD
            ================================================== */}

            <section
              id="domain-record"
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
                Add a Domain Record
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Your domain provider controls the DNS records
                that tell browsers where your website should
                load from. Check the DNS settings for the
                domain connected to your Sellio store.
              </p>


              <ol
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Sign in to the account where your domain DNS is managed.",
                  "Open the DNS or domain records section.",
                  "Find the record used for your website address.",
                  "Add or update the required record using the values provided by your Sellio setup.",
                  "Save the DNS changes.",
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
                  DNS CODE BLOCK
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
                    Example DNS record
                  </span>


                  <button
                    type="button"
                    onClick={copyDNS}
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
                    {dnsExample}
                  </code>
                </pre>

              </div>


              {/* ==================================================
                  WARNING
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
                    Use the exact DNS values shown in your
                    Sellio domain configuration. Do not
                    replace a working DNS record unless you
                    know which service currently uses it.
                  </p>

                </div>

              </div>

            </section>


                  {/* ==================================================
                REDIRECT RULES
            ================================================== */}

            <section
              id="redirect-rules"
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
                Set Up Redirect Rules
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A redirect sends visitors from one website
                address to another. This can be useful when
                you want customers to consistently reach the
                preferred version of your Sellio storefront.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Before creating a redirect, check which
                domain and URL should be the primary
                destination for your store.
              </p>


              {/* ==================================================
                  STEPS
              ================================================== */}

              <ol
                className="
                  mt-6
                  space-y-4
                "
              >

                {[
                  "Open the domain or DNS management area provided by your domain host.",
                  "Locate the redirect or forwarding settings.",
                  "Choose the source address that should redirect visitors.",
                  "Enter the preferred destination address for your Sellio storefront.",
                  "Save the redirect rule.",
                  "Open the original address in a new browser window and confirm that it reaches the expected destination.",
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
                  REDIRECT NOTE
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
                    Avoid creating multiple redirect rules
                    for the same address. Keep one clear
                    destination for each domain or URL
                    whenever possible.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                HTTPS
            ================================================== */}

            <section
              id="https"
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
                Ensure HTTPS Is Enabled
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Your storefront should use a secure HTTPS
                connection. HTTPS protects information
                exchanged between a visitor's browser and
                your website.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                After connecting your domain, check that
                your storefront opens with
                <code
                  className="
                    mx-1
                    rounded
                    bg-black/5
                    px-1.5
                    py-0.5
                    font-mono
                    text-xs
                    text-coral
                  "
                >
                  https://
                </code>
                rather than an unsecured HTTP address.
              </p>


              {/* ==================================================
                  HTTPS CHECKLIST
              ================================================== */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Open your Sellio storefront using its main domain.",
                  "Confirm that the browser address begins with https://.",
                  "Check that the page loads without a certificate warning.",
                  "Test the preferred domain and any configured alternate address.",
                  "Confirm that visitors are sent to the correct secure destination.",
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
                      py-3
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
                  HTTPS CALLOUT
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
                  If HTTPS is not working
                </p>


                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Check your domain configuration first.
                  Make sure the domain points to the correct
                  destination and that there are no conflicting
                  DNS or redirect settings.
                </p>

              </div>

            </section>


            {/* ==================================================
                DOMAIN CHECKLIST
            ================================================== */}

            <section
              id="domain-checklist"
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
                Final Domain Checklist
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use this quick checklist after making your
                domain changes.
              </p>


              <ul
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "The correct DNS record is configured.",
                  "Your preferred website address opens successfully.",
                  "Redirect rules point visitors to the intended destination.",
                  "Your storefront loads over HTTPS.",
                  "The domain works on both desktop and mobile browsers.",
                ].map((item) => (

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

                    <Check
                      className="
                        mt-0.5
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <span>
                      {item}
                    </span>

                  </li>

                ))}

              </ul>


              {/* ==================================================
                  DNS PROPAGATION NOTE
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
                    If a recent DNS change does not appear
                    immediately, allow time for the change to
                    propagate before making additional
                    modifications.
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
                  If your domain is not loading correctly,
                  review the DNS record, redirect settings,
                  and HTTPS configuration for your storefront.
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
                  If everything looks correct but your website
                  still does not load as expected, contact
                  Sellio support for assistance.
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
                Continue exploring Sellio documentation for
                more information about domains, analytics,
                and store setup.
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
                    DOMAIN SETUP
                ================================================== */}

                <Link
                  href="/documentation/add-domain"
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
                    Getting Started
                  </p>

                  <h3
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      group-hover:text-coral
                    "
                  >
                    Add Your Domain to Sellio
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Learn more about connecting your domain
                    to your Sellio store.
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

                    <ArrowRight
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
                    Learn how to connect analytics and
                    understand activity from your store.
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

                    <ArrowRight
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
                  PREVIOUS
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

              Creating a Free Entry Competition
                </div>
              </Link>


              {/* ==================================================
                  NEXT
              ================================================== */}

              <Link
                href="/documentation/pci-compliance-scan"
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
              Pci-Compliance-Scan

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
              RIGHT SIDE TOC
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
                      onClick={(event) => {

                        event.preventDefault();

                        document
                          .getElementById(
                            section.id
                          )
                          ?.scrollIntoView({
                            behavior:
                              "smooth",
                            block:
                              "start",
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