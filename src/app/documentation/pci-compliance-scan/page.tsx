"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowLeft,
  Check,
  Info,
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
    id: "payment-security",
    label: "Payment Security",
  },
  {
    id: "security-checks",
    label: "Security Checks",
  },
  {
    id: "after-check",
    label: "After a Security Check",
  },
];


export default function PaymentSecurityPage() {

  const [activeSection, setActiveSection] =
    useState("overview");


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
              ARTICLE
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
                Payment Security
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
                Learn the basics of payment security and
                the steps you can take to keep your Sellio
                store and customer information protected.
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
                Secure payment processing is an important
                part of running an ecommerce store. Sellio
                merchants should regularly review their
                store configuration and follow the security
                requirements of their payment providers.
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
                    Payment security requirements can vary
                    depending on your payment provider and
                    store setup. Always follow the current
                    requirements provided by your payment
                    service.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                PAYMENT SECURITY
            ================================================== */}

            <section
              id="payment-security"
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
                Payment Security
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Payment security helps protect sensitive
                customer information during the checkout
                process. A secure ecommerce setup reduces
                unnecessary exposure of payment information
                and helps customers shop with confidence.
              </p>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Sellio stores should use supported payment
                providers and keep store configuration,
                integrations, and account credentials up to
                date.
              </p>


              {/* ==================================================
                  SECURITY PRINCIPLES
              ================================================== */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  {
                    title: "Use a Supported Payment Provider",
                    text:
                      "Choose a payment service that is appropriate for your store and follow its security requirements.",
                  },
                  {
                    title: "Protect Account Access",
                    text:
                      "Use strong credentials and limit access to people who need administrative access to your store.",
                  },
                  {
                    title: "Keep Integrations Updated",
                    text:
                      "Review connected services and keep supported integrations up to date.",
                  },
                  {
                    title: "Use Secure Connections",
                    text:
                      "Make sure customers access your storefront through a secure HTTPS connection.",
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

            </section>


            {/* ==================================================
                SECURITY CHECKS
            ================================================== */}

            <section
              id="security-checks"
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
                Security Checks
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Regular security checks can help you identify
                configuration issues before they affect your
                customers or store operations.
              </p>


              <ol
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Review your connected payment provider.",
                  "Check that your storefront uses HTTPS.",
                  "Review administrator access to your store.",
                  "Check connected integrations and services.",
                  "Review any security notifications from your payment provider.",
                  "Update outdated configuration when required.",
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
                  CHECKLIST
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
                  Quick security checklist
                </p>


                <div
                  className="
                    mt-4
                    space-y-3
                  "
                >

                  {[
                    "HTTPS is enabled.",
                    "Payment provider settings are current.",
                    "Only authorized users have store access.",
                    "Connected services are reviewed regularly.",
                  ].map((item) => (

                    <div
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

                    </div>

                  ))}

                </div>

              </div>

            </section>


                       {/* ==================================================
                AFTER A SECURITY CHECK
            ================================================== */}

            <section
              id="after-check"
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
                After a Security Check
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Once you finish reviewing your payment and
                store security settings, record any changes
                that need attention and confirm that your
                storefront continues to work normally.
              </p>

              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  {
                    title: "Review Any Warnings",
                    text:
                      "Check notifications from your payment provider or other connected services and follow their current recommendations.",
                  },
                  {
                    title: "Confirm Store Access",
                    text:
                      "Make sure administrative access is limited to the people who need it.",
                  },
                  {
                    title: "Test the Customer Experience",
                    text:
                      "Open your storefront and verify that customers can browse products and reach checkout normally.",
                  },
                  {
                    title: "Document Important Changes",
                    text:
                      "Keep a simple record of security-related configuration changes so your team knows what was updated.",
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
                  IMPORTANT NOTE
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
                    Do not make payment configuration changes
                    based only on an unfamiliar warning. Check
                    the documentation or support resources for
                    the service involved before changing a
                    working configuration.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                COMMON SECURITY ISSUES
            ================================================== */}

            <section
              id="common-issues"
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
                Common Security Issues
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Some problems are caused by store
                configuration rather than the payment
                provider itself. Review these common areas
                when something does not look right.
              </p>


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
                        Issue
                      </th>

                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        What to Check
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
                          font-medium
                        "
                      >
                        Store does not use HTTPS
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Review your connected domain and
                        secure connection settings.
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
                          font-medium
                        "
                      >
                        Payment provider warning
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Review the provider's current
                        requirements and account settings.
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
                          font-medium
                        "
                      >
                        Unexpected checkout behavior
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Review recent configuration or
                        integration changes.
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
                          font-medium
                        "
                      >
                        Unknown administrator access
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Review account permissions and
                        remove access that is no longer
                        required.
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </section>


            {/* ==================================================
                SECURITY BEST PRACTICES
            ================================================== */}

            <section
              id="best-practices"
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
                Security Best Practices
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Good security habits make it easier to
                protect your store as it grows. Add these
                checks to your regular store maintenance
                routine.
              </p>


              <ul
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Use strong, unique credentials for your Sellio account.",
                  "Give administrative access only to people who need it.",
                  "Review connected payment and marketing services regularly.",
                  "Keep your storefront and domain configuration current.",
                  "Use HTTPS for your customer-facing storefront.",
                  "Pay attention to security notices from your payment provider.",
                  "Review unexpected account or payment activity promptly.",
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
                  FINAL TIP
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
                  Keep security reviews simple
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A regular review of your domain, payment
                  provider, account access, and connected
                  services can help you spot configuration
                  problems early.
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
                  If you are unsure whether your payment
                  setup meets the requirements for your
                  store, review your payment provider's
                  current documentation first.
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
                  For Sellio store configuration questions,
                  contact Sellio support and provide details
                  about the issue you are seeing.
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
                Explore more Sellio documentation for
                information about your store, domains,
                payments, and analytics.
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
                    PAYMENT GATEWAY
                ================================================== */}

                <Link
                  href="/documentation/payment-gateway"
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
                    Payment Gateway
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Learn more about payment configuration
                    for your Sellio store.
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
                    DOMAIN GUIDE
                ================================================== */}

                <Link
                  href="/documentation/ensure-www-loads-your-site"
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
                    Helpful Info
                  </p>

                  <h3
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      group-hover:text-coral
                    "
                  >
                    Ensure Your Website Loads Correctly
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Review domain records, redirects, and
                    HTTPS configuration for your storefront.
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
                href="/documentation/ensure-www-loads-your-site"
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

                  Ensure-www-Loads-Your-Site

                </div>

              </Link>


              {/* ==================================================
                  NEXT
              ================================================== */}

              <Link
                href="/documentation/pending-tickets"
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

                  Pending-Tickets

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