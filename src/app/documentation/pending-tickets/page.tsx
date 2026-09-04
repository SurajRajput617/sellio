"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowLeft,
  Check,
  Info,
  Clock3,
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
    id: "find-tickets",
    label: "Where to Find Tickets",
  },
  {
    id: "ticket-status",
    label: "What the Status Shows",
  },
  {
    id: "reading-ticket",
    label: "Reading a Ticket",
  },
  {
    id: "cancelled-requests",
    label: "Cancelled Requests",
  },
  {
    id: "need-help",
    label: "Need Help",
  },
];


/* ============================================================
   PAGE
============================================================ */

export default function PendingSupportRequestsPage() {

  const [activeSection, setActiveSection] =
    useState("overview");


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


  return (
    <>
      {/* ======================================================
          SELLIO HEADER
      ====================================================== */}

      <Navbar />


      {/* ======================================================
          DOCUMENTATION CONTENT
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


              <div
                className="
                  mt-3
                  flex
                  items-start
                  gap-3
                "
              >

                <Clock3
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
                  Pending Support Requests
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
                Keep an eye on support requests that still
                need attention. Reviewing pending requests
                helps your team understand which customer
                questions remain open and what needs to
                happen next.
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
                This guide explains where to find pending
                requests, how to understand their status,
                and how to review the information associated
                with each request.
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
                    A pending request simply means that
                    additional attention or action may still
                    be required. Review the request details
                    before deciding what action to take.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                WHERE TO FIND TICKETS
            ================================================== */}

            <section
              id="find-tickets"
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
                Where to Find Tickets
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Pending customer requests can be reviewed
                from the support area of your Sellio
                workspace.
              </p>


              <ol
                className="
                  mt-6
                  space-y-4
                "
              >

                {[
                  "Open your Sellio dashboard.",
                  "Go to the customer support or requests area.",
                  "Open the list of requests that require attention.",
                  "Review the request status to identify items that are still pending.",
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
                  QUICK TIP
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


                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Start with the oldest pending requests
                    when your team needs to work through a
                    larger support queue.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                WHAT THE STATUS SHOWS
            ================================================== */}

            <section
              id="ticket-status"
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
                What the Status Shows
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                The status of a customer request gives your
                team a quick way to understand whether an
                item still needs attention.
              </p>


              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  {
                    title: "Pending",
                    text:
                      "The request still needs review or another action from your team.",
                  },
                  {
                    title: "In Review",
                    text:
                      "Your team has started looking at the request and is working through the details.",
                  },
                  {
                    title: "Resolved",
                    text:
                      "The request has been addressed and no further action is currently expected.",
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
                READING A SUPPORT REQUEST
            ================================================== */}

            <section
              id="reading-ticket"
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
                Reading a Support Request
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Before responding to a customer, review the
                complete request and any information attached
                to it. This gives your team the context needed
                to provide a useful response.
              </p>


              {/* ==================================================
                  REQUEST DETAILS
              ================================================== */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  {
                    title: "Customer Details",
                    text:
                      "Review the customer's name and contact information before responding.",
                  },
                  {
                    title: "Request Subject",
                    text:
                      "Use the subject to quickly understand the main reason for the request.",
                  },
                  {
                    title: "Message",
                    text:
                      "Read the customer's complete message and check whether they included relevant order or product information.",
                  },
                  {
                    title: "Request Status",
                    text:
                      "Check the current status so you know whether the request still needs action.",
                  },
                  {
                    title: "Created Date",
                    text:
                      "The request date can help your team prioritize older unresolved requests.",
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
                  QUICK TIP
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
                    Read the entire customer message before
                    taking action. Important details may appear
                    later in the request.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                PRIORITIZING REQUESTS
            ================================================== */}

            <section
              id="prioritizing-requests"
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
                Prioritizing Requests
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                When several customer requests are waiting,
                use the available information to decide which
                items need attention first.
              </p>


              <ol
                className="
                  mt-6
                  space-y-4
                "
              >

                {[
                  "Review requests that have been waiting the longest.",
                  "Identify requests that affect an active customer order.",
                  "Look for requests that require information from another team member.",
                  "Check whether the customer has already contacted your team about the same issue.",
                  "Update the request after the required action has been completed.",
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
                  PRIORITY NOTE
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
                    font-semibold
                  "
                >
                  Keep the queue organized
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  A consistent process makes it easier for
                  your team to see which customer requests
                  still require attention.
                </p>

              </div>

            </section>


            {/* ==================================================
                HANDLING A PENDING REQUEST
            ================================================== */}

            <section
              id="handling-request"
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
                Handling a Pending Request
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Once you understand the customer's request,
                decide what action is needed and keep the
                request status up to date.
              </p>


              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  {
                    title: "Review",
                    text:
                      "Read the request and identify the customer's main question or problem.",
                  },
                  {
                    title: "Investigate",
                    text:
                      "Check relevant store, product, or order information when additional context is needed.",
                  },
                  {
                    title: "Respond",
                    text:
                      "Provide a clear response using the information available to your support team.",
                  },
                  {
                    title: "Update",
                    text:
                      "Update the request status after the next action has been completed.",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-lg
                      border
                      border-border
                      p-5
                    "
                  >

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        bg-black/5
                        text-xs
                        font-bold
                        text-coral
                      "
                    >
                      {item.title.charAt(0)}
                    </div>

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

                ))}

              </div>

            </section>


            {/* ==================================================
                SUPPORT QUEUE BEST PRACTICES
            ================================================== */}

            <section
              id="queue-best-practices"
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
                Support Queue Best Practices
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                A clean support queue helps your team respond
                consistently and prevents older requests from
                being overlooked.
              </p>


              <ul
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Review pending requests regularly.",
                  "Keep request statuses accurate.",
                  "Read the full customer message before responding.",
                  "Use clear and helpful responses.",
                  "Check order or product details when relevant.",
                  "Avoid leaving completed requests marked as pending.",
                  "Escalate issues when your team needs additional assistance.",
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
                  py-5
                "
              >

                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Keep customer communication clear
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Customers should be able to understand what
                  happens next without needing to repeat the
                  same information.
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
                  If you are having trouble finding or
                  managing customer support requests, first
                  review the request status and the details
                  associated with the customer.
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
                  If the issue continues or you need help
                  with your Sellio store configuration,
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
                Continue exploring Sellio documentation to
                learn more about managing customers, orders,
                and your store.
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
                    CUSTOMERS
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
                    Customers
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Learn more about managing customer
                    information in Sellio.
                  </p>

                 
                </Link>


                {/* ==================================================
                    ORDERS
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
                    Orders
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Review and manage orders from your
                    Sellio store.
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
                href="/documentation/pci-compliance-scan"
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

                  PCI-Compliance-Scan
                </div>
              </Link>


              {/* ==================================================
                  NEXT
              ================================================== */}

              <Link
                href="/documentation/set-up-email-inbox"
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
                  Set-up-Email-Inbox

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