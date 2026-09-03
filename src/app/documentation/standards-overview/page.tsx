"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  ShieldCheck,
  UserCheck,
  Settings,
  LockKeyhole,
  Headphones,
  CheckCircle2,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "account-safety", label: "Account Safety" },
  { id: "access", label: "Access Requirements" },
  { id: "controls", label: "Account Controls" },
  { id: "support", label: "Customer Support" },
  { id: "complaints", label: "Complaints Process" },
  { id: "privacy", label: "Customer Privacy" },
  { id: "payment", label: "Payment Security" },
  { id: "activity", label: "Account Activity" },
  { id: "checklist", label: "Protection Checklist" },
  { id: "related", label: "Related Guides" },
];

type ControlId =
  | "account-settings"
  | "privacy-settings"
  | "customer-support";

export default function StandardsOverviewPage() {
  const [activeSection, setActiveSection] =
    useState("overview");

  const [openControl, setOpenControl] =
    useState<ControlId | null>(null);

  const toggleControl = (control: ControlId) => {
    setOpenControl((current) =>
      current === control ? null : control
    );
  };

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

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
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
          <DocumentationSidebar />

          <article className="min-w-0">
            {/* OVERVIEW */}
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
                Sellio Standards
              </p>

              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                "
              >
                Standards Overview
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
                Learn about Sellio standards for customer
                protection, account safety, privacy,
                payments, support, and responsible store
                management.
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
                These standards help store owners provide a
                secure, clear, and reliable experience for
                customers using their Sellio store.
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
                    Review these standards regularly and
                    keep customer-facing information
                    accurate, accessible, and up to date.
                  </p>
                </div>
              </div>
            </section>

            {/* ACCOUNT SAFETY */}
            <section
              id="account-safety"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Account Safety
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Sellio store owners should provide customers
                with clear information about account access,
                security, and available support.
              </p>

              <ul
                className="
                  mt-5
                  space-y-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                <li>
                  • Keep account information accurate.
                </li>

                <li>
                  • Use secure authentication practices.
                </li>

                <li>
                  • Protect customer information.
                </li>

                <li>
                  • Make support information easy to find.
                </li>
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
                <div className="flex items-start gap-3">
                  <ShieldCheck
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
                    Regularly review account and security
                    settings to help keep customer
                    information protected.
                  </p>
                </div>
              </div>
            </section>

            {/* ACCESS REQUIREMENTS */}
            <section
              id="access"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Access Requirements
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Clearly explain any requirements that
                customers must meet before accessing
                particular account features or services.
              </p>

              <ol
                className="
                  mt-5
                  space-y-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                <li>
                  1. Review the requirements for the feature.
                </li>

                <li>
                  2. Provide customers with clear instructions.
                </li>

                <li>
                  3. Request only the information that is
                  required.
                </li>

                <li>
                  4. Keep submitted customer information
                  secure.
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
                <div className="flex items-center gap-3">
                  <UserCheck
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3 className="font-semibold">
                    Clear Access Information
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
                  Make requirements easy to understand
                  before customers begin an account or
                  service process.
                </p>
              </div>
            </section>
                        {/* ACCOUNT CONTROLS */}
            <section
              id="controls"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Account Controls
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Give customers appropriate ways to manage
                their account information, privacy choices,
                security settings, and support requests.
              </p>

              <div className="mt-6 space-y-3">
                {/* ACCOUNT SETTINGS DROPDOWN */}
                <div
                  className={`
                    overflow-hidden
                    rounded-lg
                    border
                    transition-colors
                    ${
                      openControl === "account-settings"
                        ? "border-navy"
                        : "border-border"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() =>
                      toggleControl("account-settings")
                    }
                    aria-expanded={
                      openControl === "account-settings"
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-4
                      py-4
                      text-left
                      text-sm
                      transition-colors
                      hover:bg-black/[0.025]
                    "
                  >
                    <span className="flex items-center gap-3">
                      <Settings
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />

                      <span className="font-medium">
                        Account Settings
                      </span>
                    </span>

                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        duration-200
                        ${
                          openControl ===
                          "account-settings"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {openControl === "account-settings" && (
                    <div
                      className="
                        border-t
                        border-border
                        bg-black/[0.02]
                        px-5
                        py-5
                      "
                    >
                      <h3
                        className="
                          text-sm
                          font-semibold
                        "
                      >
                        Managing Account Settings
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Customers should have clear ways to
                        review and update important account
                        information while store owners keep
                        administrative controls secure.
                      </p>

                      <div
                        className="
                          mt-4
                          grid
                          gap-3
                          sm:grid-cols-2
                        "
                      >
                        <div
                          className="
                            rounded-md
                            border
                            border-border
                            bg-paper
                            p-4
                          "
                        >
                          <p
                            className="
                              text-sm
                              font-semibold
                            "
                          >
                            Profile Information
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            Allow customers to keep names,
                            contact details, and relevant
                            profile information current.
                          </p>
                        </div>

                        <div
                          className="
                            rounded-md
                            border
                            border-border
                            bg-paper
                            p-4
                          "
                        >
                          <p
                            className="
                              text-sm
                              font-semibold
                            "
                          >
                            Login &amp; Security
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            Provide secure password,
                            authentication, and account
                            recovery options.
                          </p>
                        </div>
                      </div>

                      <ul
                        className="
                          mt-4
                          space-y-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        <li className="flex gap-2">
                          <CheckCircle2
                            className="
                              mt-1
                              h-3.5
                              w-3.5
                              shrink-0
                              text-coral
                            "
                          />

                          Keep customer contact information
                          accurate.
                        </li>

                        <li className="flex gap-2">
                          <CheckCircle2
                            className="
                              mt-1
                              h-3.5
                              w-3.5
                              shrink-0
                              text-coral
                            "
                          />

                          Protect changes to sensitive account
                          settings.
                        </li>

                        <li className="flex gap-2">
                          <CheckCircle2
                            className="
                              mt-1
                              h-3.5
                              w-3.5
                              shrink-0
                              text-coral
                            "
                          />

                          Make account recovery instructions
                          clear.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* PRIVACY SETTINGS DROPDOWN */}
                <div
                  className={`
                    overflow-hidden
                    rounded-lg
                    border
                    transition-colors
                    ${
                      openControl === "privacy-settings"
                        ? "border-navy"
                        : "border-border"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() =>
                      toggleControl("privacy-settings")
                    }
                    aria-expanded={
                      openControl === "privacy-settings"
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-4
                      py-4
                      text-left
                      text-sm
                      transition-colors
                      hover:bg-black/[0.025]
                    "
                  >
                    <span className="flex items-center gap-3">
                      <LockKeyhole
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />

                      <span className="font-medium">
                        Privacy Settings
                      </span>
                    </span>

                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        duration-200
                        ${
                          openControl ===
                          "privacy-settings"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {openControl === "privacy-settings" && (
                    <div
                      className="
                        border-t
                        border-border
                        bg-black/[0.02]
                        px-5
                        py-5
                      "
                    >
                      <h3
                        className="
                          text-sm
                          font-semibold
                        "
                      >
                        Customer Privacy Controls
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Customers should understand what
                        information is collected, why it is
                        used, and which preferences they can
                        manage.
                      </p>

                      <div
                        className="
                          mt-4
                          space-y-3
                        "
                      >
                        <div
                          className="
                            rounded-md
                            border
                            border-border
                            bg-paper
                            p-4
                          "
                        >
                          <p
                            className="
                              text-sm
                              font-semibold
                            "
                          >
                            Communication Preferences
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            Give customers clear controls for
                            relevant email and communication
                            preferences.
                          </p>
                        </div>

                        <div
                          className="
                            rounded-md
                            border
                            border-border
                            bg-paper
                            p-4
                          "
                        >
                          <p
                            className="
                              text-sm
                              font-semibold
                            "
                          >
                            Customer Information
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            Explain how customer information
                            is stored, protected, and used for
                            legitimate store operations.
                          </p>
                        </div>

                        <div
                          className="
                            rounded-md
                            border
                            border-border
                            bg-paper
                            p-4
                          "
                        >
                          <p
                            className="
                              text-sm
                              font-semibold
                            "
                          >
                            Privacy Requests
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            Provide an understandable process
                            for customers to submit relevant
                            privacy or account-data requests.
                          </p>
                        </div>
                      </div>

                      <a
                        href="#privacy"
                        className="
                          mt-4
                          inline-flex
                          items-center
                          gap-1
                          text-sm
                          font-medium
                          text-coral
                          hover:underline
                        "
                      >
                        Read Customer Privacy

                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* CUSTOMER SUPPORT DROPDOWN */}
                <div
                  className={`
                    overflow-hidden
                    rounded-lg
                    border
                    transition-colors
                    ${
                      openControl === "customer-support"
                        ? "border-navy"
                        : "border-border"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() =>
                      toggleControl("customer-support")
                    }
                    aria-expanded={
                      openControl === "customer-support"
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-4
                      py-4
                      text-left
                      text-sm
                      transition-colors
                      hover:bg-black/[0.025]
                    "
                  >
                    <span className="flex items-center gap-3">
                      <Headphones
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />

                      <span className="font-medium">
                        Customer Support
                      </span>
                    </span>

                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        duration-200
                        ${
                          openControl ===
                          "customer-support"
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {openControl === "customer-support" && (
                    <div
                      className="
                        border-t
                        border-border
                        bg-black/[0.02]
                        px-5
                        py-5
                      "
                    >
                      <h3
                        className="
                          text-sm
                          font-semibold
                        "
                      >
                        Getting Customer Help
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Make support easy to locate and give
                        customers enough information to
                        understand what happens after they
                        request help.
                      </p>

                      <div
                        className="
                          mt-4
                          grid
                          gap-3
                          sm:grid-cols-3
                        "
                      >
                        <div
                          className="
                            rounded-md
                            border
                            border-border
                            bg-paper
                            p-4
                          "
                        >
                          <p className="text-sm font-semibold">
                            Account Help
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            Help with account access and
                            account information.
                          </p>
                        </div>

                        <div
                          className="
                            rounded-md
                            border
                            border-border
                            bg-paper
                            p-4
                          "
                        >
                          <p className="text-sm font-semibold">
                            Order Help
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            Give customers clear information
                            for order-related questions.
                          </p>
                        </div>

                        <div
                          className="
                            rounded-md
                            border
                            border-border
                            bg-paper
                            p-4
                          "
                        >
                          <p className="text-sm font-semibold">
                            Payment Help
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-navy-mute
                            "
                          >
                            Explain where customers can get
                            help with payment-related issues.
                          </p>
                        </div>
                      </div>

                      <a
                        href="#support"
                        className="
                          mt-4
                          inline-flex
                          items-center
                          gap-1
                          text-sm
                          font-medium
                          text-coral
                          hover:underline
                        "
                      >
                        Read Customer Support

                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* CUSTOMER SUPPORT */}
            <section
              id="support"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Customer Support
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Make it easy for customers to find help when
                they have questions about their account,
                orders, payments, or store services.
              </p>

              <ul
                className="
                  mt-5
                  space-y-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                <li>
                  • Provide clear contact information.
                </li>

                <li>
                  • Explain how customers can request help.
                </li>

                <li>
                  • Keep support information current.
                </li>

                <li>
                  • Give customers clear next steps when an
                  issue requires additional assistance.
                </li>
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
                    Clear support information helps
                    customers understand where to go when
                    they need assistance.
                  </p>
                </div>
              </div>
            </section>
                        {/* COMPLAINTS PROCESS */}
            <section
              id="complaints"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Complaints Process
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Provide customers with a straightforward
                process for raising concerns and requesting
                a review of an issue.
              </p>

              <ol
                className="
                  mt-5
                  space-y-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                <li>
                  1. Contact the appropriate support channel.
                </li>

                <li>
                  2. Explain the issue clearly.
                </li>

                <li>
                  3. Provide relevant account or order
                  details.
                </li>

                <li>
                  4. Allow the support team to review the
                  issue.
                </li>

                <li>
                  5. Keep the customer informed about the
                  resolution process.
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
                <h3 className="font-semibold">
                  Keep the Process Clear
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Explain how customers can submit concerns
                  and what information may be needed to
                  review their request.
                </p>
              </div>
            </section>

            {/* CUSTOMER PRIVACY */}
            <section
              id="privacy"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Customer Privacy
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Handle customer information responsibly and
                provide clear information about how account
                data is used and protected.
              </p>

              <div
                className="
                  mt-6
                  grid
                  gap-4
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
                  <h3 className="font-semibold">
                    Protect Information
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Limit access to customer information to
                    appropriate members of your team.
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
                  <h3 className="font-semibold">
                    Keep Information Accurate
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Keep stored customer information
                    accurate and review it when necessary.
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
                  <h3 className="font-semibold">
                    Explain Data Use
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Give customers clear information about
                    relevant data practices.
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
                  <h3 className="font-semibold">
                    Secure Access
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Use appropriate account and
                    administrative access controls.
                  </p>
                </div>
              </div>
            </section>

            {/* PAYMENT SECURITY */}
            <section
              id="payment"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
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
                Follow appropriate payment security
                practices when handling customer
                transactions.
              </p>

              <ul
                className="
                  mt-5
                  space-y-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                <li>
                  • Use supported and trusted payment
                  services.
                </li>

                <li>
                  • Do not expose sensitive payment
                  information.
                </li>

                <li>
                  • Keep administrative access protected.
                </li>

                <li>
                  • Review payment activity for unexpected
                  issues.
                </li>
              </ul>
            </section>

            {/* ACCOUNT ACTIVITY */}
            <section
              id="activity"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Account Activity
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Review relevant account activity to identify
                issues that may require customer support or
                administrative attention.
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
                    grid
                    gap-5
                    sm:grid-cols-3
                  "
                >
                  <div>
                    <p className="text-xs text-navy-mute">
                      Account
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Review access
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-navy-mute">
                      Orders
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Check activity
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-navy-mute">
                      Support
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                      "
                    >
                      Resolve issues
                    </p>
                  </div>
                </div>
              </div>

              <p
                className="
                  mt-5
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                Use activity information only for
                appropriate store management, security, and
                customer-support purposes.
              </p>
            </section>
                        {/* PROTECTION CHECKLIST */}
            <section
              id="checklist"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Customer Protection Checklist
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use this checklist when reviewing
                customer-facing settings in your Sellio
                store.
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
                    min-w-[520px]
                    text-left
                    text-sm
                  "
                >
                  <thead className="bg-black/5">
                    <tr>
                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        Area
                      </th>

                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        Check
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3">
                        Account Safety
                      </td>

                      <td
                        className="
                          px-4
                          py-3
                          text-navy-mute
                        "
                      >
                        Security information is current
                      </td>
                    </tr>

                    <tr className="border-t border-border">
                      <td className="px-4 py-3">
                        Account Controls
                      </td>

                      <td
                        className="
                          px-4
                          py-3
                          text-navy-mute
                        "
                      >
                        Customers can manage appropriate
                        account settings
                      </td>
                    </tr>

                    <tr className="border-t border-border">
                      <td className="px-4 py-3">
                        Support
                      </td>

                      <td
                        className="
                          px-4
                          py-3
                          text-navy-mute
                        "
                      >
                        Contact information is available
                      </td>
                    </tr>

                    <tr className="border-t border-border">
                      <td className="px-4 py-3">
                        Privacy
                      </td>

                      <td
                        className="
                          px-4
                          py-3
                          text-navy-mute
                        "
                      >
                        Customer information is protected
                      </td>
                    </tr>

                    <tr className="border-t border-border">
                      <td className="px-4 py-3">
                        Payments
                      </td>

                      <td
                        className="
                          px-4
                          py-3
                          text-navy-mute
                        "
                      >
                        Payment practices are reviewed
                      </td>
                    </tr>

                    <tr className="border-t border-border">
                      <td className="px-4 py-3">
                        Complaints
                      </td>

                      <td
                        className="
                          px-4
                          py-3
                          text-navy-mute
                        "
                      >
                        A clear process is available
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* RELATED GUIDES */}
            <section
              id="related"
              className="
                scroll-mt-28
                py-8
              "
            >
              <h2 className="text-xl font-bold">
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
                Explore more Sellio documentation for
                managing customer accounts, store settings,
                reports, and support.
              </p>

              <div className="mt-5 space-y-3">
                <Link
                  href="/documentation"
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
                  "
                >
                  <span>
                    Documentation Home
                  </span>

                  <ChevronRight className="h-4 w-4" />
                </Link>

              </div>
            </section>

            {/* PREVIOUS / NEXT */}
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
              <Link
                href="/documentation/downloads-reports-overview"
                className="
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-4
                  transition-colors
                  hover:border-coral
                "
              >
                <p className="text-xs text-navy-mute">
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
                  "
                >
                  <ArrowLeft className="h-4 w-4" />

                  <span>
                   Downloads-Reports-Overview
                  </span>
                </div>
              </Link>

              <Link
                href="/documentation/player-protections"
                className="
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
                <p className="text-xs text-navy-mute">
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
                  "
                >
                  <span>
                  Player-Protections
                  </span>

                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </article>
                    {/* RIGHT SIDEBAR */}
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
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() =>
                      setActiveSection(item.id)
                    }
                    className={`
                      block
                      text-sm
                      transition-colors
                      ${
                        activeSection === item.id
                          ? "font-medium text-coral"
                          : "text-navy-mute hover:text-coral"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}