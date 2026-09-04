"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowLeft,
  Check,
  Info,
  LockKeyhole,
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
    id: "reset-password",
    label: "Reset Your Password",
  },
  {
    id: "password-tips",
    label: "Password Tips",
  },
];


/* ============================================================
   PAGE
============================================================ */

export default function ResetPasswordPage() {

  const [activeSection, setActiveSection] =
    useState("overview");


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

          <article
            className="
              min-w-0
            "
          >

            {/* ==================================================
                PAGE HEADER
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

                <LockKeyhole
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
                  Reset Password
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
                If you have forgotten your Sellio account
                password or cannot sign in, you can reset
                your password and regain access to your
                account.
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
                Follow the password recovery steps below and
                use the email address associated with your
                Sellio account.
              </p>

            </header>


            {/* ==================================================
                OVERVIEW
            ================================================== */}

            <section
              id="overview"
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
                Overview
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Your Sellio account password protects access
                to your store administration area. If you
                cannot remember your password, use the
                password reset option on the sign-in page.
              </p>


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
                    The password used to access your Sellio
                    administration account is separate from
                    passwords used for customer accounts on
                    your storefront.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                RESET PASSWORD
            ================================================== */}

            <section
              id="reset-password"
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
                How to Reset Your Password
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use the password recovery option from the
                Sellio sign-in page to request a password
                reset.
              </p>


              <ol
                className="
                  mt-6
                  space-y-4
                "
              >

                {[
                  "Open the Sellio sign-in page.",
                  "Select the Forgot Password option.",
                  "Enter the email address associated with your Sellio account.",
                  "Check your inbox for the password reset message.",
                  "Follow the instructions in the message to create a new password.",
                  "Return to Sellio and sign in using your new password.",
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
                    If you do not receive the reset email,
                    check your spam or junk folder and make
                    sure you entered the email address linked
                    to your Sellio account.
                  </p>

                </div>

              </div>


              {/* ==================================================
                  SECURITY NOTE
              ================================================== */}

              <div
                className="
                  mt-3
                  rounded-lg
                  border
                  border-border
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
                    Never share your password reset link or
                    new password with another person.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                PASSWORD TIPS
            ================================================== */}

            <section
              id="password-tips"
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
                Password Tips
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use a strong password for your Sellio account
                and avoid reusing the same password on other
                websites.
              </p>


              <ul
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Use a long and unique password.",
                  "Avoid passwords based on easily guessed personal information.",
                  "Do not reuse your Sellio password on another service.",
                  "Do not share your password with other people.",
                  "Consider using a trusted password manager.",
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
                IF RESET EMAIL DOES NOT ARRIVE
            ================================================== */}

            <section
              id="reset-email-not-arriving"
              className="
                scroll-mt-28
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
                If the Reset Email Does Not Arrive
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
                If you requested a password reset but cannot
                find the email, check the following before
                requesting another reset.
              </p>


              <ol
                className="
                  mt-6
                  space-y-4
                "
              >

                {[
                  "Check the spam or junk folder in your email account.",
                  "Make sure you entered the email address connected to your Sellio account.",
                  "Search your inbox for the password reset message.",
                  "Wait a few moments before requesting another reset.",
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
                    If you still cannot access your account
                    after checking your email, contact Sellio
                    support for further assistance.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                TROUBLESHOOTING
            ================================================== */}

            <section
              id="troubleshooting"
              className="
                scroll-mt-28
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
                Here are a few common password recovery
                situations and what you can check first.
              </p>


              {/* ==================================================
                  ACCORDION 1
              ================================================== */}

              <details
                className="
                  group
                  mt-6
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
                    gap-4
                    px-5
                    py-4
                    text-sm
                    font-semibold
                    [&::-webkit-details-marker]:hidden
                  "
                >

                  <span>
                    I forgot which email I used
                  </span>

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-navy-mute
                      transition-transform
                      duration-200
                      group-open:rotate-90
                    "
                  />

                </summary>


                <div
                  className="
                    border-t
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
                    Try the email address you normally use
                    to manage your Sellio store. If you have
                    more than one business email address,
                    check which account is associated with
                    your store.
                  </p>

                </div>

              </details>


              {/* ==================================================
                  ACCORDION 2
              ================================================== */}

              <details
                className="
                  group
                  mt-3
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
                    gap-4
                    px-5
                    py-4
                    text-sm
                    font-semibold
                    [&::-webkit-details-marker]:hidden
                  "
                >

                  <span>
                    My reset link is not working
                  </span>

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-navy-mute
                      transition-transform
                      duration-200
                      group-open:rotate-90
                    "
                  />

                </summary>


                <div
                  className="
                    border-t
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
                    Request a new password reset email and
                    use the most recent reset message. Avoid
                    using an older reset link if you have
                    requested more than one.
                  </p>

                </div>

              </details>


              {/* ==================================================
                  ACCORDION 3
              ================================================== */}

              <details
                className="
                  group
                  mt-3
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
                    gap-4
                    px-5
                    py-4
                    text-sm
                    font-semibold
                    [&::-webkit-details-marker]:hidden
                  "
                >

                  <span>
                    I reset my password but still cannot sign in
                  </span>

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-navy-mute
                      transition-transform
                      duration-200
                      group-open:rotate-90
                    "
                  />

                </summary>


                <div
                  className="
                    border-t
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
                    Confirm that you are using the same
                    account email and the new password you
                    just created. If the problem continues,
                    contact Sellio support.
                  </p>

                </div>

              </details>


              {/* ==================================================
                  ACCORDION 4
              ================================================== */}

              <details
                className="
                  group
                  mt-3
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
                    gap-4
                    px-5
                    py-4
                    text-sm
                    font-semibold
                    [&::-webkit-details-marker]:hidden
                  "
                >

                  <span>
                    I no longer have access to my email
                  </span>

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-navy-mute
                      transition-transform
                      duration-200
                      group-open:rotate-90
                    "
                  />

                </summary>


                <div
                  className="
                    border-t
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
                    If you cannot access the email address
                    associated with your Sellio account,
                    contact Sellio support so the account
                    ownership and recovery options can be
                    reviewed.
                  </p>

                </div>

              </details>

            </section>


            {/* ==================================================
                SECURITY CHECKLIST
            ================================================== */}

            <section
              id="security-checklist"
              className="
                scroll-mt-28
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
                After Resetting Your Password
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
                Once you regain access to your Sellio
                account, take a moment to make sure your
                account information remains secure.
              </p>


              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  p-5
                "
              >

                <div
                  className="
                    space-y-4
                  "
                >

                  {[
                    "Make sure your new password is unique.",
                    "Confirm that your account email is correct.",
                    "Keep your password private.",
                    "Sign out from devices you no longer use.",
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
                          bg-black/5
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
                  SECURITY NOTE
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
                    Sellio support will never need you to
                    share your account password. Keep your
                    login credentials private.
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
                  If you have followed the password reset
                  steps but still cannot access your Sellio
                  account, contact the Sellio support team
                  for assistance.
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
                  Never send your password or password reset
                  information to anyone when requesting help.
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
                Explore other Sellio guides for account
                setup, email configuration, and store
                management.
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
                    EMAIL GUIDE
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
                    Set up a professional email address
                    for your business.
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
                    IMAGE GUIDE
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
                href="/documentation/image-size-guide"
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

                  Image Size Guide

                </div>

              </Link>


              {/* ==================================================
                  NEXT
              ================================================== */}

              <Link
                href="/documentation/checklist"
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

              Checklist

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

            </section>

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