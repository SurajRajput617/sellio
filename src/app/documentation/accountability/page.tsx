"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  ClipboardCheck,
  FileCheck2,
  FileText,
  History,
  Info,
  ListChecks,
  RefreshCw,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

const sections = [
  {
    id: "reviewing-practices",
    label: "Reviewing your own practices",
  },
  {
    id: "publishing-steps",
    label: "Publishing the steps you take",
  },
  {
    id: "store-ownership",
    label: "Store ownership",
  },
  {
    id: "change-records",
    label: "Change records",
  },
  {
    id: "customer-issues",
    label: "Customer issue handling",
  },
  {
    id: "regular-reviews",
    label: "Regular reviews",
  },
  {
    id: "accountability-checklist",
    label: "Accountability checklist",
  },
];

export default function AccountabilityPage() {
  const [activeSection, setActiveSection] =
    useState("reviewing-practices");

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;

      sections.forEach((item) => {
        const element = document.getElementById(item.id);

        if (!element) return;

        const position =
          element.getBoundingClientRect().top;

        if (position <= 180) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-paper text-navy">
        <div
          className="
            container-xl
            grid
            gap-10
            py-12
            lg:grid-cols-[250px_minmax(0,1fr)_210px]
          "
        >
          {/* ====================================== */}
          {/* LEFT DOCUMENTATION SIDEBAR */}
          {/* ====================================== */}

          <DocumentationSidebar />

          {/* ====================================== */}
          {/* MAIN ARTICLE */}
          {/* ====================================== */}

          <article className="min-w-0">

            {/* ====================================== */}
            {/* PAGE HEADER */}
            {/* ====================================== */}

            <section
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
                  text-coral
                "
              >
                Standards
              </p>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-3
                "
              >
                <ClipboardCheck
                  className="
                    h-7
                    w-7
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
                  Accountability
                </h1>
              </div>

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Running an online store involves ongoing
                decisions about products, pricing,
                fulfilment, customer communication, and
                store operations.
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
                Clear ownership and regular reviews help
                your team understand what changed, why it
                changed, who is responsible for it, and
                whether the published customer experience
                still matches the way your store operates.
              </p>

              {/* IMPORTANT CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
                  <CircleAlert
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
                    Important store changes should have a
                    clear owner. When products, pricing,
                    checkout, delivery, policies, or
                    customer communications change, review
                    the related parts of the customer
                    journey as well.
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Accountability does not need to mean adding
                unnecessary processes. The goal is to make
                important responsibilities visible and give
                your team a practical way to review,
                document, and improve the store.
              </p>
            </section>

            {/* ====================================== */}
            {/* REVIEWING YOUR OWN PRACTICES */}
            {/* ====================================== */}

            <section
              id="reviewing-practices"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Reviewing your own practices
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Regularly review the processes used to run
                your store. This helps you identify
                outdated information, unclear
                responsibilities, repeated customer issues,
                and areas that need improvement.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Reviews are especially useful after a major
                store update, a change to fulfilment,
                introducing a new product range, changing
                checkout settings, or updating a
                customer-facing policy.
              </p>

              {/* REVIEW CARD */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  p-5
                "
              >
                <div className="flex items-center gap-3">
                  <RefreshCw
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3 className="text-sm font-semibold">
                    What to review
                  </h3>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Product information and catalogue
                      changes.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Pricing, promotions, and checkout
                      configuration.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Delivery and fulfilment processes.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Automated customer emails and support
                      information.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Store policies and other
                      customer-facing documentation.
                    </p>
                  </div>
                </div>
              </div>

              {/* INFO CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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
                    A review is most useful when it results
                    in a clear next action. Record what
                    needs changing, who owns the change, and
                    whether another part of the store needs
                    to be checked as a result.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* REVIEW PROCESS */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  A simple review process
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Use a lightweight process so reviews can
                  become part of normal store management.
                </p>

                <div className="mt-6">

                  {/* STEP 1 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      1
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Choose what you are reviewing
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Focus the review on a specific
                        process, feature, store update, or
                        part of the customer journey.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      2
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Compare it with the live store
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check that your internal process and
                        the information customers see are
                        still consistent.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      3
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Record any changes
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Note anything that is outdated,
                        unclear, inconsistent, or needs
                        further investigation.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="relative flex gap-5">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      4
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Assign the next action
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Give the follow-up action a clear
                        owner so the issue does not remain
                        unresolved after the review.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LINK CARD */}
              <Link
                href="/documentation/standards-overview"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <ListChecks
                    className="
                      h-4
                      w-4
                      text-coral
                    "
                  />

                  Standards Overview
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>
                        {/* ====================================== */}
            {/* PUBLISHING THE STEPS YOU TAKE */}
            {/* ====================================== */}

            <section
              id="publishing-steps"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <h2 className="text-xl font-bold">
                Publishing the steps you take
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Important store processes should be
                documented clearly enough that the people
                responsible for managing the store can
                understand what needs to happen.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                This does not mean publishing every internal
                detail. Focus on useful information that
                explains responsibilities, review steps,
                customer-facing changes, and the actions
                required after an update.
              </p>

              {/* DOCUMENTATION CARD */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  p-5
                "
              >
                <div className="flex items-center gap-3">
                  <FileCheck2
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3 className="text-sm font-semibold">
                    What to document
                  </h3>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      What was changed in the store.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Why the change was made.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Who is responsible for reviewing or
                      maintaining the change.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Which customer-facing pages or
                      messages were affected.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="
                        mt-1
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
                      Whether another review or follow-up
                      action is required.
                    </p>
                  </div>
                </div>
              </div>

              {/* INFO CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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
                    Keep operational notes short and useful.
                    A simple record of the change, owner,
                    date, and next review can be more useful
                    than a long document that nobody keeps
                    current.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* PUBLISHING / DOCUMENTING STEPS */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Documenting an important store change
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Use a consistent process when making
                  changes that affect customers or store
                  operations.
                </p>

                <div className="mt-6">

                  {/* STEP 1 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      1
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Describe the change
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Write a short description of what is
                        being changed and which area of the
                        store it affects.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      2
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Identify affected areas
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check whether the change also affects
                        product pages, pricing, checkout,
                        delivery, emails, policies, analytics,
                        or support information.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      3
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Assign an owner
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Record who is responsible for
                        completing the change and checking
                        that it works as expected.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      4
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Review before publishing
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check the updated experience before
                        making an important customer-facing
                        change live.
                      </p>
                    </div>
                  </div>

                  {/* STEP 5 */}
                  <div className="relative flex gap-5">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      5
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Record the result
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Once published, note whether the
                        change was completed successfully
                        and whether any follow-up work is
                        still required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION CARD */}
              <Link
                href="/documentation"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <FileText
                    className="
                      h-4
                      w-4
                      text-coral
                    "
                  />

                  Store Management Guides
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>
                        {/* ====================================== */}
            {/* STORE OWNERSHIP */}
            {/* ====================================== */}

            <section
              id="store-ownership"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
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

                <h2 className="text-xl font-bold">
                  Store ownership
                </h2>
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Important areas of your store should have a
                clear owner. This makes it easier to know who
                reviews information, approves changes, and
                follows up when something needs attention.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                The owner does not need to complete every
                task personally. Their role is to make sure
                the area is maintained, responsibilities are
                understood, and important issues reach the
                right person.
              </p>

              {/* ====================================== */}
              {/* RESPONSIBILITY CARDS */}
              {/* ====================================== */}

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                {/* PRODUCTS */}
                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <FileCheck2
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Products &amp; catalogue
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Keep product information, images,
                    options, availability, and catalogue
                    changes current.
                  </p>
                </div>

                {/* STORE SETTINGS */}
                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <ClipboardCheck
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Store settings
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Review important configuration changes
                    and check their effect on the live
                    customer experience.
                  </p>
                </div>

                {/* CUSTOMER EXPERIENCE */}
                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <Users
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Customer experience
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Review checkout, customer messages,
                    support information, and other important
                    parts of the customer journey.
                  </p>
                </div>

                {/* POLICIES */}
                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                  "
                >
                  <ShieldCheck
                    className="
                      h-5
                      w-5
                      text-coral
                    "
                  />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Policies &amp; standards
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Keep customer-facing policies and
                    internal store standards aligned with
                    current operations.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* RESPONSIBILITY CALLOUT */}
              {/* ====================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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
                    For smaller stores, one person may own
                    several areas. The important part is
                    making responsibility clear rather than
                    creating unnecessary roles.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* ASSIGNING RESPONSIBILITY */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Assigning responsibility
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Keep ownership simple. For each important
                  store area, identify who maintains it and
                  what they are expected to review.
                </p>

                <div className="mt-6">

                  {/* STEP 1 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      1
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Identify the area
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Start with an important part of your
                        store such as products, fulfilment,
                        customer support, or store settings.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      2
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Choose an owner
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Assign someone who understands the
                        area and can make sure important
                        updates are reviewed.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      3
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Define the responsibility
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Record what the owner should check,
                        which changes need their attention,
                        and when another team member should
                        be involved.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="relative flex gap-5">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      4
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Keep ownership current
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Update ownership when responsibilities
                        change so important tasks do not
                        remain assigned to someone who no
                        longer manages them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ====================================== */}
              {/* SIMPLE OWNERSHIP TABLE */}
              {/* ====================================== */}

              <div
                className="
                  mt-8
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >
                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_130px]
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-4
                    py-3
                  "
                >
                  <p className="text-xs font-semibold">
                    Store area
                  </p>

                  <p
                    className="
                      text-right
                      text-xs
                      font-semibold
                    "
                  >
                    Responsibility
                  </p>
                </div>

                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_130px]
                    items-center
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Products
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Catalogue and product information.
                    </p>
                  </div>

                  <p
                    className="
                      text-right
                      text-xs
                      text-navy-mute
                    "
                  >
                    Assigned owner
                  </p>
                </div>

                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_130px]
                    items-center
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Store operations
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Settings, fulfilment, and operational
                      changes.
                    </p>
                  </div>

                  <p
                    className="
                      text-right
                      text-xs
                      text-navy-mute
                    "
                  >
                    Assigned owner
                  </p>
                </div>

                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_130px]
                    items-center
                    border-b
                    border-border
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Customer experience
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Customer messages, support, and
                      checkout review.
                    </p>
                  </div>

                  <p
                    className="
                      text-right
                      text-xs
                      text-navy-mute
                    "
                  >
                    Assigned owner
                  </p>
                </div>

                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_130px]
                    items-center
                    px-4
                    py-4
                  "
                >
                  <div>
                    <p className="text-sm font-medium">
                      Policies
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Published policies and documentation.
                    </p>
                  </div>

                  <p
                    className="
                      text-right
                      text-xs
                      text-navy-mute
                    "
                  >
                    Assigned owner
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* RELATED GUIDE */}
              {/* ====================================== */}

              <Link
                href="/documentation"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-coral
                "
              >
                <span className="flex items-center gap-3">
                  <Users
                    className="
                      h-4
                      w-4
                      text-coral
                    "
                  />

                  Store Management Guides
                </span>

                <ChevronRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </section>
                        {/* ====================================== */}
            {/* CHANGE RECORDS */}
            {/* ====================================== */}

            <section
              id="change-records"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-center gap-3">
                <History className="h-5 w-5 text-coral" />

                <h2 className="text-xl font-bold">
                  Change records
                </h2>
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Keep a simple record of important changes
                made to your store. A change record gives
                your team useful context when reviewing the
                store later and helps explain when, why, and
                by whom an update was made.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                You do not need to record every small edit.
                Focus on changes that affect customers,
                important store processes, or information
                that other team members may need to
                understand later.
              </p>

              {/* ====================================== */}
              {/* WHAT TO RECORD */}
              {/* ====================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  p-5
                "
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-coral" />

                  <h3 className="text-sm font-semibold">
                    What to include in a change record
                  </h3>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    "A short description of the change.",
                    "The date the change was made.",
                    "The store area affected by the change.",
                    "The person responsible for the update.",
                    "The reason for the change.",
                    "Any related pages, settings, or customer messages that were reviewed.",
                    "Any follow-up action that is still required.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="
                          mt-1
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
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* INFO CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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
                    Change records should be easy to scan.
                    A short, consistent entry is usually
                    more useful than a long explanation
                    that becomes difficult to maintain.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* EXAMPLE CHANGE RECORD */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Example change record
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A lightweight record can contain the
                  information your team needs without
                  creating unnecessary administration.
                </p>

                <div
                  className="
                    mt-6
                    overflow-hidden
                    rounded-lg
                    border
                    border-border
                  "
                >
                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[150px_minmax(0,1fr)]
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-navy
                      "
                    >
                      Change
                    </p>

                    <p
                      className="
                        text-sm
                        text-navy-mute
                      "
                    >
                      Updated delivery information
                    </p>
                  </div>

                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[150px_minmax(0,1fr)]
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-navy
                      "
                    >
                      Area
                    </p>

                    <p
                      className="
                        text-sm
                        text-navy-mute
                      "
                    >
                      Shipping &amp; fulfilment
                    </p>
                  </div>

                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[150px_minmax(0,1fr)]
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-navy
                      "
                    >
                      Owner
                    </p>

                    <p
                      className="
                        text-sm
                        text-navy-mute
                      "
                    >
                      Store operations
                    </p>
                  </div>

                  <div
                    className="
                      grid
                      gap-2
                      border-b
                      border-border
                      px-4
                      py-4
                      sm:grid-cols-[150px_minmax(0,1fr)]
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-navy
                      "
                    >
                      Reviewed
                    </p>

                    <p
                      className="
                        text-sm
                        text-navy-mute
                      "
                    >
                      Delivery page, checkout, and order
                      confirmation
                    </p>
                  </div>

                  <div
                    className="
                      grid
                      gap-2
                      px-4
                      py-4
                      sm:grid-cols-[150px_minmax(0,1fr)]
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-navy
                      "
                    >
                      Follow-up
                    </p>

                    <p
                      className="
                        text-sm
                        text-navy-mute
                      "
                    >
                      Review after the next delivery
                      configuration update
                    </p>
                  </div>
                </div>
              </div>

              {/* ====================================== */}
              {/* RECORDING PROCESS */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Recording an important change
                </h3>

                <div className="mt-6">

                  {/* STEP 1 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      1
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Record the change
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Add a short description that makes
                        the update easy to identify later.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      2
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Record the owner
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Identify the person or store area
                        responsible for the update.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      3
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Record what was checked
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Note the related customer-facing
                        pages, messages, settings, or
                        processes that were reviewed.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="relative flex gap-5">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      4
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Add any follow-up
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        If more work is required, record the
                        next action so it does not disappear
                        after the original change is
                        published.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ====================================== */}
            {/* CUSTOMER ISSUE HANDLING */}
            {/* ====================================== */}

            <section
              id="customer-issues"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-coral" />

                <h2 className="text-xl font-bold">
                  Customer issue handling
                </h2>
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Customer questions and problems can reveal
                areas where store information or internal
                processes need improvement. Treat repeated
                issues as useful feedback about the
                customer experience.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                When an issue is reported, make sure the
                immediate customer request reaches the
                appropriate support route. Then consider
                whether the underlying store experience
                should also be reviewed.
              </p>

              {/* ====================================== */}
              {/* ISSUE TYPES */}
              {/* ====================================== */}

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
                  <FileText className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Unclear information
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Repeated questions may indicate that a
                    product page, policy, checkout message,
                    or help guide needs clearer information.
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
                  <RefreshCw className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Process problems
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Repeated operational problems may show
                    that a fulfilment, support, or store
                    management process needs review.
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
                  <ShieldCheck className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Policy questions
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    If customers regularly struggle to find
                    or understand store policies, review
                    their placement and clarity.
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
                  <History className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Repeated issues
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Similar issues appearing repeatedly can
                    be a useful signal that a broader store
                    change is needed.
                  </p>
                </div>
              </div>

              {/* WARNING / IMPORTANT BOX */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
                  px-5
                  py-4
                "
              >
                <div className="flex items-start gap-3">
                  <CircleAlert
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
                    Resolving an individual request does not
                    always resolve the underlying problem.
                    If several customers encounter the same
                    issue, review the relevant store process
                    and customer-facing information.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* ISSUE REVIEW PROCESS */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Reviewing a customer issue
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Use customer feedback to identify useful
                  improvements without making the support
                  process unnecessarily complicated.
                </p>

                <div className="mt-6">

                  {/* STEP 1 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      1
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Understand the issue
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Identify which part of the customer
                        journey caused confusion or did not
                        work as expected.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      2
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Help the customer
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Follow your normal support process
                        and provide the customer with the
                        appropriate information or next
                        step.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      3
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Check for a wider problem
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Review whether the same issue could
                        affect other customers or whether it
                        has appeared before.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="relative flex gap-5">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      4
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Create a follow-up action
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        If the store needs an improvement,
                        record the action and assign it to
                        the appropriate owner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ====================================== */}
              {/* RELATED LINKS */}
              {/* ====================================== */}

              <div className="mt-8 space-y-3">
                <Link
                  href="/#contact"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    border
                    border-border
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    transition-colors
                    hover:border-coral
                  "
                >
                  <span className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-coral" />

                    Customer Support
                  </span>

                  <ChevronRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </Link>

        
              </div>
            </section>
                        {/* ====================================== */}
            {/* REGULAR REVIEWS */}
            {/* ====================================== */}

            <section
              id="regular-reviews"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-center gap-3">
                <RefreshCw className="h-5 w-5 text-coral" />

                <h2 className="text-xl font-bold">
                  Regular reviews
                </h2>
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Store accountability works best when reviews
                happen regularly rather than only after
                something goes wrong. Periodic checks help
                you find outdated information, incomplete
                changes, and responsibilities that need to
                be reassigned.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                The frequency of each review can depend on
                how often that part of your store changes.
                Areas that change frequently may need more
                attention than stable information.
              </p>

              {/* ====================================== */}
              {/* WHEN TO REVIEW */}
              {/* ====================================== */}

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
                  <RefreshCw className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    Scheduled reviews
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Review important areas of the store on a
                    schedule that makes sense for your
                    business and how frequently they change.
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
                  <History className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    After major changes
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Complete an additional review after
                    significant changes to products,
                    checkout, fulfilment, policies, or other
                    important store processes.
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
                  <Users className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    After repeated feedback
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Review an area when similar customer
                    questions or support issues begin
                    appearing repeatedly.
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
                  <UserCheck className="h-5 w-5 text-coral" />

                  <h3
                    className="
                      mt-3
                      text-sm
                      font-semibold
                    "
                  >
                    When ownership changes
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Review responsibilities whenever the
                    person managing an important store area
                    changes.
                  </p>
                </div>
              </div>

              {/* INFO CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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
                    A review schedule should remain
                    practical. Focus on the parts of your
                    store where outdated information or an
                    incomplete change could affect the
                    customer experience.
                  </p>
                </div>
              </div>

              {/* ====================================== */}
              {/* REVIEW PROCESS */}
              {/* ====================================== */}

              <div className="mt-8">
                <h3 className="text-base font-bold">
                  Running a regular store review
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A consistent review process makes it
                  easier to identify issues and assign the
                  right follow-up actions.
                </p>

                <div className="mt-6">
                  {/* STEP 1 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      1
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Review recent changes
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Start with important updates made
                        since the previous review and check
                        whether any follow-up remains open.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      2
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Review the live experience
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Check important customer-facing
                        pages and processes rather than
                        relying only on internal settings.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      3
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Review customer feedback
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Look for repeated questions,
                        confusion, or support issues that
                        could point to a wider improvement.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="relative flex gap-5 pb-8">
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-6
                        h-full
                        w-px
                        bg-border
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      4
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Confirm ownership
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Make sure important store areas
                        still have a clear owner and that
                        responsibilities remain current.
                      </p>
                    </div>
                  </div>

                  {/* STEP 5 */}
                  <div className="relative flex gap-5">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-coral
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      5
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold">
                        Record the next actions
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-navy-mute
                        "
                      >
                        Record anything that needs changing,
                        assign an owner, and note whether a
                        further review is required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ====================================== */}
            {/* ACCOUNTABILITY CHECKLIST */}
            {/* ====================================== */}

            <section
              id="accountability-checklist"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >
              <div className="flex items-center gap-3">
                <ListChecks className="h-5 w-5 text-coral" />

                <h2 className="text-xl font-bold">
                  Accountability checklist
                </h2>
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use this checklist as a final review of how
                responsibilities, changes, customer issues,
                and ongoing store reviews are managed.
              </p>

              <div
                className="
                  mt-6
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >
                {/* TABLE HEADER */}
                <div
                  className="
                    grid
                    grid-cols-[minmax(0,1fr)_80px]
                    border-b
                    border-border
                    bg-black/[0.035]
                    px-4
                    py-3
                  "
                >
                  <p className="text-xs font-semibold">
                    Review area
                  </p>

                  <p
                    className="
                      text-right
                      text-xs
                      font-semibold
                    "
                  >
                    Check
                  </p>
                </div>

                {[
                  {
                    title: "Store responsibilities",
                    description:
                      "Important store areas have a clear owner.",
                  },
                  {
                    title: "Important changes",
                    description:
                      "Significant store changes are reviewed and recorded.",
                  },
                  {
                    title: "Customer-facing information",
                    description:
                      "Published information matches current store operations.",
                  },
                  {
                    title: "Change records",
                    description:
                      "Useful context is retained for important updates.",
                  },
                  {
                    title: "Customer issues",
                    description:
                      "Repeated issues are reviewed for wider improvements.",
                  },
                  {
                    title: "Follow-up actions",
                    description:
                      "Outstanding work has an owner and clear next step.",
                  },
                  {
                    title: "Regular reviews",
                    description:
                      "Important store areas are reviewed at suitable intervals.",
                  },
                ].map((item, index, array) => (
                  <div
                    key={item.title}
                    className={`
                      grid
                      grid-cols-[minmax(0,1fr)_80px]
                      items-center
                      px-4
                      py-4
                      ${
                        index !== array.length - 1
                          ? "border-b border-border"
                          : ""
                      }
                    `}
                  >
                    <div>
                      <p className="text-sm font-medium">
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-5
                          text-navy-mute
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <CheckCircle2
                        className="
                          h-4
                          w-4
                          text-coral
                        "
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* FINAL CALLOUT */}
              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.04]
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
                    Accountability is most useful when it
                    leads to action. Keep responsibilities
                    clear, make important changes visible,
                    and close the loop on issues identified
                    during reviews.
                  </p>
                </div>
              </div>
            </section>

            {/* ====================================== */}
            {/* RELATED GUIDES */}
            {/* ====================================== */}

            <section className="py-8">
              <h2 className="text-xl font-bold">
                Related guides
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                Continue with related Sellio documentation
                for store standards, customer information,
                and day-to-day store management.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  href="/documentation/standards-overview"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    border
                    border-border
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    transition-colors
                    hover:border-coral
                  "
                >
                  <span className="flex items-center gap-3">
                    <ClipboardCheck className="h-4 w-4 text-coral" />
                    Standards Overview
                  </span>

                  <ChevronRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </Link>

              

                <Link
                  href="/documentation"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    border
                    border-border
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    transition-colors
                    hover:border-coral
                  "
                >
                  <span className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-coral" />
                    Store Management Guides
                  </span>

                  <ChevronRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </section>

            {/* ====================================== */}
            {/* PREVIOUS / NEXT NAVIGATION */}
            {/* ====================================== */}

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
                href="/documentation/transparency"
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
                  <ArrowLeft
                    className="
                      h-4
                      w-4
                      transition-transform
                      group-hover:-translate-x-1
                    "
                  />

                  <span>
                    Transparency
                  </span>
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
                   Conversion Event Tracking
                  </span>

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </Link>
            </div>

            <p
              className="
                mt-5
                text-xs
                leading-5
                text-navy-mute
              "
            >
              Review accountability whenever store
              responsibilities, customer processes, or
              important operational workflows change.
            </p>

          </article>
                    {/* ====================================== */}
          {/* RIGHT SIDEBAR — ON THIS PAGE */}
          {/* ====================================== */}

          <aside className="hidden xl:block">
            <div
              className="
                sticky
                top-28
                border-l
                border-border
                pl-6
              "
            >
              {/* SIDEBAR TITLE */}
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-navy-mute
                "
              >
                On This Page
              </p>

              {/* ====================================== */}
              {/* PAGE SECTIONS */}
              {/* ====================================== */}

              <nav className="mt-5 space-y-3">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() =>
                      setActiveSection(item.id)
                    }
                    className={`
                      block
                      border-l-2
                      py-0.5
                      pl-3
                      text-xs
                      leading-5
                      transition-all
                      ${
                        activeSection === item.id
                          ? "border-coral font-semibold text-coral"
                          : "border-transparent text-navy-mute hover:border-border hover:text-navy"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* ====================================== */}
              {/* RELATED STANDARDS */}
              {/* ====================================== */}

              <div
                className="
                  mt-8
                  border-t
                  border-border
                  pt-5
                "
              >
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-navy-mute
                  "
                >
                  Related
                </p>

                <div className="mt-4 space-y-3">
                  {/* STANDARDS OVERVIEW */}
                  <Link
                    href="/documentation/standards-overview"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-2
                      text-xs
                      leading-5
                      text-navy-mute
                      transition-colors
                      hover:text-coral
                    "
                  >
                    <span>
                      Standards Overview
                    </span>

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        shrink-0
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>

                  
                </div>
              </div>

              {/* ====================================== */}
              {/* QUICK GUIDES */}
              {/* ====================================== */}

              <div
                className="
                  mt-7
                  border-t
                  border-border
                  pt-5
                "
              >
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-navy-mute
                  "
                >
                  Quick Guides
                </p>

                <div className="mt-4 space-y-3">
                  {/* DOCUMENTATION */}
                  <Link
                    href="/documentation"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-2
                      text-xs
                      leading-5
                      text-navy-mute
                      transition-colors
                      hover:text-coral
                    "
                  >
                    <span>
                      Store Management
                    </span>

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        shrink-0
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>

                  {/* PAYMENT */}
                  <Link
                    href="/documentation/payment-gateway"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-2
                      text-xs
                      leading-5
                      text-navy-mute
                      transition-colors
                      hover:text-coral
                    "
                  >
                    <span>
                      Payment &amp; Checkout
                    </span>

                    <ChevronRight
                      className="
                        h-3.5
                        w-3.5
                        shrink-0
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>

                
                </div>
              </div>

              {/* ====================================== */}
              {/* ACCOUNTABILITY REMINDER */}
              {/* ====================================== */}

              <div
                className="
                  mt-7
                  rounded-lg
                  border
                  border-border
                  bg-black/[0.025]
                  p-4
                "
              >
                <div className="flex items-start gap-3">
                  <ClipboardCheck
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
                        text-xs
                        font-semibold
                        text-navy
                      "
                    >
                      Keep ownership clear
                    </p>

                    <p
                      className="
                        mt-2
                        text-[11px]
                        leading-5
                        text-navy-mute
                      "
                    >
                      When an important store process
                      changes, confirm who owns the update,
                      what needs reviewing, and whether any
                      follow-up work remains.
                    </p>
                  </div>
                </div>
              </div>

              {/* ====================================== */}
              {/* NEED HELP */}
              {/* ====================================== */}

              <div
                className="
                  mt-7
                  border-t
                  border-border
                  pt-5
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    text-navy
                  "
                >
                  Need more help?
                </p>

                <p
                  className="
                    mt-2
                    text-[11px]
                    leading-5
                    text-navy-mute
                  "
                >
                  Explore the Sellio documentation or
                  contact support if you need help reviewing
                  your store processes.
                </p>

                <Link
                  href="/#contact"
                  className="
                    group
                    mt-4
                    inline-flex
                    items-center
                    gap-1.5
                    text-xs
                    font-semibold
                    text-coral
                    transition-opacity
                    hover:opacity-70
                  "
                >
                  Contact Sellio

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>

              {/* ====================================== */}
              {/* DOCUMENTATION HOME */}
              {/* ====================================== */}

              <div
                className="
                  mt-6
                  border-t
                  border-border
                  pt-5
                "
              >
                <Link
                  href="/documentation"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-navy-mute
                    transition-colors
                    hover:text-coral
                  "
                >
                  <ArrowLeft
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      group-hover:-translate-x-1
                    "
                  />

                  Documentation Home
                </Link>
              </div>
            </div>
          </aside>

          {/* ====================================== */}
          {/* END DOCUMENTATION GRID */}
          {/* ====================================== */}
        </div>
      </main>

      {/* ====================================== */}
      {/* FOOTER */}
      {/* ====================================== */}

      <Footer />
    </>
  );
}