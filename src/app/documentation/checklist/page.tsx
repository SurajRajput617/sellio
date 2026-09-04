"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Check,
  Info,
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


const sections = [
  {
    id: "store-checklist",
    label: "Store Launch Checklist",
  },
  {
    id: "products",
    label: "Products",
  },
  {
    id: "checkout",
    label: "Checkout & Payments",
  },
  {
    id: "storefront",
    label: "Storefront Review",
  },
  {
    id: "final-check",
    label: "Final Check",
  },
];


export default function ChecklistPage() {

  const [activeSection, setActiveSection] =
    useState("store-checklist");


  useEffect(() => {

    const handleScroll = () => {

      const position =
        window.scrollY + 180;

      let current =
        sections[0].id;

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
      { passive: true }
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
      {/* ==================================================
          SELLIO HEADER
      ================================================== */}

      <Navbar />


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

          <article className="min-w-0">

            {/* ==================================================
                HEADER
            ================================================== */}

            <header
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
                  uppercase
                  tracking-wide
                  text-coral
                "
              >
                Helpful Info
              </p>


              <div
                className="
                  mt-3
                  flex
                  items-start
                  gap-3
                "
              >

                <ClipboardCheck
                  className="
                    mt-1
                    h-6
                    w-6
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
                  Checklist
                </h1>

              </div>


              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use this checklist to make sure your Sellio
                store is ready before you start accepting
                customers.
              </p>


              {/* ==================================================
                  INTRO CALLOUT
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
                    Complete each section before launch so
                    customers can browse products, place
                    orders, and receive the information they
                    need from your store.
                  </p>

                </div>

              </div>

            </header>


            {/* ==================================================
                STORE LAUNCH CHECKLIST
            ================================================== */}

            <section
              id="store-checklist"
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
                Store Launch Checklist
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Before launching your Sellio store, review
                the key areas below and confirm that everything
                is ready.
              </p>


              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Confirm your store name and business information.",
                  "Add the products you want customers to purchase.",
                  "Review product prices and descriptions.",
                  "Check your store navigation and important pages.",
                  "Configure your available payment options.",
                  "Review shipping and order settings.",
                  "Test the customer checkout experience.",
                  "Confirm your contact information is correct.",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-md
                      border
                      border-border
                      px-4
                      py-3
                    "
                  >

                    <span
                      className="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-sm
                        border
                        border-border
                      "
                    >

                      <Check
                        className="
                          h-3
                          w-3
                          text-coral
                        "
                      />

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

            </section>


            {/* ==================================================
                PRODUCTS
            ================================================== */}

            <section
              id="products"
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
                Products
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Review your product catalog before launch.
                Customers should have enough information to
                understand what they are purchasing.
              </p>


              <ul
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Product names are clear and accurate.",
                  "Product descriptions contain the important details customers need.",
                  "Prices are correct.",
                  "Product images are clear and properly sized.",
                  "Products are assigned to the correct collections.",
                  "Unavailable products are correctly marked.",
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
                  <strong className="text-navy">
                    Tip:
                  </strong>{" "}
                  Open several product pages as a customer
                  would and check the information from their
                  point of view.
                </p>

              </div>

            </section>


                      {/* ==================================================
                CHECKOUT & PAYMENTS
            ================================================== */}

            <section
              id="checkout"
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
                Checkout & Payments
              </h2>


              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Test the complete purchasing experience
                before your store goes live. A customer
                should be able to move from product selection
                to order confirmation without confusion.
              </p>


              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Confirm your payment options are configured correctly.",
                  "Check that product prices appear correctly at checkout.",
                  "Review shipping charges and available delivery options.",
                  "Test the checkout flow from cart to order confirmation.",
                  "Make sure required customer information is clearly requested.",
                  "Confirm the order confirmation page displays correctly.",
                  "Verify that order confirmation emails are being sent.",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-md
                      border
                      border-border
                      px-4
                      py-3
                    "
                  >

                    <span
                      className="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-sm
                        border
                        border-border
                      "
                    >

                      <Check
                        className="
                          h-3
                          w-3
                          text-coral
                        "
                      />

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
                  CHECKOUT NOTE
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
                    Complete a full test purchase before
                    launch. Review every step from adding an
                    item to the cart through the final order
                    confirmation.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                STOREFRONT REVIEW
            ================================================== */}

            <section
              id="storefront"
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
                Storefront Review
              </h2>


              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Review your storefront as if you were a
                first-time customer. Make sure visitors can
                easily understand your products and find the
                information they need.
              </p>


              <ul
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Your logo and store name are displayed correctly.",
                  "Navigation links take customers to the correct pages.",
                  "Product and collection pages are easy to find.",
                  "Contact and support information is accurate.",
                  "About and business information is complete.",
                  "Important policies and store information are available.",
                  "Images display correctly on desktop and mobile.",
                  "Buttons and links work as expected.",
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
                  MOBILE REVIEW
              ================================================== */}

              <div
                className="
                  mt-6
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
                  Check Mobile Too
                </h3>


                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Open your storefront on a phone or narrow
                  browser window. Check that menus, product
                  images, buttons, forms, and checkout remain
                  easy to use.
                </p>

              </div>

            </section>


            {/* ==================================================
                FINAL CHECK
            ================================================== */}

            <section
              id="final-check"
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
                Final Check
              </h2>


              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Before you announce your store, perform one
                final review. Fix anything that could prevent
                customers from browsing, purchasing, or
                contacting your business.
              </p>


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

                <div
                  className="
                    space-y-4
                  "
                >

                  {[
                    "Store information is complete.",
                    "Products and prices have been reviewed.",
                    "Navigation and important links work.",
                    "Payment and shipping settings are ready.",
                    "Checkout has been tested.",
                    "Customer emails are working.",
                    "The storefront has been reviewed on mobile.",
                    "Contact and support information is correct.",
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

                      <span
                        className="
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                        "
                      >

                        <Check
                          className="
                            h-3
                            w-3
                            text-coral
                          "
                        />

                      </span>

                      <span>
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* ==================================================
                  READY TO LAUNCH
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-5
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
                      Ready to launch?
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      Once you have completed the checklist,
                      review your storefront one final time
                      and make sure everything customers need
                      is available.
                    </p>

                  </div>

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
                  Need Help Getting Your Store Ready?
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
                  If you have completed the checklist but
                  something does not look right, review the
                  relevant Sellio documentation before
                  launching your store.
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
                  store setup, account, or configuration,
                  contact the Sellio support team.
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
                Continue with these Sellio guides to help
                complete your store setup.
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
                    IMAGE SIZE GUIDE
                ================================================== */}

                <Link
                  href="/documentation/image-size-guide"
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
                    Image Size Guide
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Prepare product and storefront images
                    before uploading them to Sellio.
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
                    SET UP EMAIL
                ================================================== */}

                <Link
                  href="/documentation/set-up-email-inbox"
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
                    Set Up Email Inbox
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Set up a professional email address for
                    your business communication.
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
                href="/documentation/reset-password"
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

                  Reset Password

                </div>

              </Link>


              {/* ==================================================
                  NEXT
              ================================================== */}

              {/* <Link
                href="/documentation"
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

                  Documentation Home

                  <ArrowRight
                    className="h-4 w-4"
                  />

                </div>

              </Link> */}

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
                          .getElementById(section.id)
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


      {/* ==================================================
          SELLIO FOOTER
      ================================================== */}

      <Footer />

    </>
  );
}