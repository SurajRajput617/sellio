"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowLeft,
  Check,
  Info,
  Mail,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


/* ============================================================
   ON THIS PAGE
============================================================ */

const sections = [
  {
    id: "google-workspace",
    label: "Go to Google Workspace",
  },
  {
    id: "set-up-domain",
    label: "Set Up Your Domain",
  },
  {
    id: "create-email",
    label: "Create Your First Email Address",
  },
  {
    id: "subscription-plan",
    label: "Choose a Subscription Plan",
  },
  {
    id: "verify-domain",
    label: "Verify Your Domain",
  },
  {
    id: "access-email",
    label: "Access Your Email",
  },
];


export default function SetUpEmailInboxPage() {

  const [activeSection, setActiveSection] =
    useState("google-workspace");


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


  return (
    <>
      {/* ======================================================
          SELLIO HEADER
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

                <Mail
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
                  Set Up Email Inbox
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
                Set up a professional email address using
                your store domain so you can communicate
                with customers from an address that matches
                your Sellio store.
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
                This guide walks you through the basic steps
                for connecting a domain-based inbox and
                accessing your business email.
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
                    Your email provider manages the mailbox,
                    while your domain settings determine how
                    your domain is connected to that service.
                  </p>

                </div>

              </div>

            </header>


            {/* ==================================================
                GO TO GOOGLE WORKSPACE
            ================================================== */}

            <section
              id="google-workspace"
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
                Go to Google Workspace
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                If you want to use Google Workspace for your
                business inbox, start the setup from Google's
                Workspace service.
              </p>


              <ol
                className="
                  mt-6
                  space-y-4
                "
              >

                {[
                  "Open Google Workspace in your browser.",
                  "Choose the option to get started.",
                  "Enter your business information.",
                  "Provide an existing contact email address that you can access.",
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


                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Use an existing email address that you
                    can access during setup. You may need it
                    for account verification or recovery.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                SET UP YOUR DOMAIN
            ================================================== */}

            <section
              id="set-up-domain"
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
                Set Up Your Domain
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use the same domain associated with your
                Sellio store when setting up your business
                email address.
              </p>


              <ol
                className="
                  mt-6
                  space-y-4
                "
              >

                {[
                  "When asked whether you have a domain, choose the option indicating that you already have one.",
                  "Enter the domain used for your Sellio storefront.",
                  "Continue through the domain verification steps.",
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
                    Make sure you enter the correct domain.
                    Your email address will use this domain
                    after the setup is complete.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                CREATE FIRST EMAIL
            ================================================== */}

            <section
              id="create-email"
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
                Create Your First Email Address
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Choose an email address that looks
                professional and is easy for customers to
                remember.
              </p>


              <div
                className="
                  mt-6
                  grid
                  gap-3
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

                  <p
                    className="
                      text-xs
                      text-navy-mute
                    "
                  >
                    Personal
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                    "
                  >
                    name@yourdomain.com
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
                      text-navy-mute
                    "
                  >
                    General
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                    "
                  >
                    hello@yourdomain.com
                  </p>

                </div>

              </div>


              <ol
                className="
                  mt-6
                  space-y-4
                "
              >

                {[
                  "Choose the first email address you want to use.",
                  "Create a secure password for the account.",
                  "Continue through the account setup process.",
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
                SUBSCRIPTION PLAN
            ================================================== */}

            <section
              id="subscription-plan"
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
                Choose a Subscription Plan
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Choose an email plan that fits the needs of
                your business. Consider how many email
                accounts you need and which features your
                team will use.
              </p>


              <ol
                className="
                  mt-6
                  space-y-4
                "
              >

                {[
                  "Open the available subscription options.",
                  "Compare the plans and included features.",
                  "Choose the plan that best fits your business needs.",
                  "Review the payment details before completing the setup.",
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
                  PLAN TIP
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
                    Review the current pricing and included
                    features directly with your email provider
                    before choosing a plan.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                VERIFY DOMAIN
            ================================================== */}

            <section
              id="verify-domain"
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
                Verify Your Domain
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Your email provider may require you to verify
                ownership of the domain before business email
                can be fully activated.
              </p>


              <ol
                className="
                  mt-6
                  space-y-4
                "
              >

                {[
                  "Open the domain verification instructions provided during email setup.",
                  "Sign in to the account where your domain DNS is managed.",
                  "Add or update the requested DNS record.",
                  "Save the DNS change and return to your email provider.",
                  "Complete the verification step.",
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
                  VERIFICATION CALLOUT
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
                      Check the domain carefully
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      The domain used for your email should
                      match the domain associated with your
                      business and Sellio storefront.
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* ==================================================
                ACCESS EMAIL
            ================================================== */}

            <section
              id="access-email"
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
                Access Your Email
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                After your domain has been verified and the
                mailbox has been created, you can sign in to
                your business email account.
              </p>


              <ol
                className="
                  mt-6
                  space-y-4
                "
              >

                {[
                  "Open the sign-in page for your email provider.",
                  "Enter the business email address you created.",
                  "Enter the password associated with the mailbox.",
                  "Complete any additional security verification requested by your provider.",
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
                  EMAIL ACCESS CHECKLIST
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
                  Before you finish
                </p>


                <div
                  className="
                    mt-4
                    space-y-3
                  "
                >

                  {[
                    "Your business email address is active.",
                    "You can sign in successfully.",
                    "Your domain has been verified.",
                    "You can send and receive test messages.",
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


              {/* ==================================================
                  FINAL NOTE
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
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
                  Send a test message to another address
                  before using the inbox for customer
                  communication. This confirms that the
                  mailbox can send and receive messages
                  correctly.
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
                  If your business email is not working as
                  expected, first check that your domain has
                  been verified and that the email account
                  is active with your provider.
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
                  Sellio store or domain configuration,
                  contact the Sellio support team.
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
                about domains, analytics, and other store
                setup tasks.
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
                    Review domain records and website
                    configuration for your storefront.
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
                    Learn how analytics can help you
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
                href="/documentation/pending-tickets"
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

                  Pending-Tickets

                </div>

              </Link>


              {/* ==================================================
                  NEXT
              ================================================== */}

              <Link
                href="/documentation/image-size-guide"
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

               Image-Size-Guide

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