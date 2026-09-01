"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
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
    id: "setup",
    label: "Integration Setup",
  },
  {
    id: "review",
    label: "Review Connection Status",
  },
  {
    id: "activity",
    label: "Activity Monitoring",
  },
  {
    id: "after",
    label: "After Integration",
  },
];


export default function ManualIntegrationPage() {

  const [activeSection, setActiveSection] =
    useState("overview");


  useEffect(() => {

    const handleScroll = () => {

      let current = sections[0].id;


      sections.forEach((section) => {

        const element =
          document.getElementById(section.id);


        if (!element) return;


        if (
          element.offsetTop <=
          window.scrollY + 160
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
              DRAWING WINNERS
              </p>



              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                "
              >
                Live Integration Setup
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
                Learn how Sellio connects your
                ecommerce store with supported
                services and helps you review
                integration information from one
                organized dashboard.
              </p>



              <div
                className="
                  mt-6
                  flex
                  items-start
                  gap-3
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-4
                  py-3
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
                  Review your Sellio connection
                  setup and manage your connected
                  ecommerce services from one place.
                </p>


              </div>


            </section>






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
                  text-2xl
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
                Sellio gives businesses a simple way
                to organize ecommerce workflows,
                connected services and important
                dashboard information.
              </p>



              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Instead of checking multiple platforms,
                you can review your store connections
                and integration status from one central
                location.
              </p>



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
                    font-semibold
                  "
                >
                  Sellio Integration Dashboard
                </p>


                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Manage store connections, review
                  service status and keep your
                  ecommerce workflow organized.
                </p>


              </div>


            </section>






            <section
              id="setup"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >


              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                Integration Setup
              </h2>



              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Before reviewing your connection status,
                make sure your Sellio account and
                supported services are properly prepared.
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
                  1. Open your Sellio dashboard.
                </li>


                <li>
                  2. Go to the integrations section.
                </li>


                <li>
                  3. Select your connected service.
                </li>


                <li>
                  4. Review available connection details.
                </li>


                <li>
                  5. Confirm your setup information.
                </li>


              </ol>



              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-4
                  py-3
                "
              >

                <p
                  className="
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Keeping your integration settings
                  updated helps maintain accurate
                  dashboard information.
                </p>


              </div>


            </section>
                        <section
              id="review"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                Review Connection Status
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Review your Sellio integration status to
                understand which services are connected and
                where updates are available.
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

                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Connection Review
                </p>


                <ul
                  className="
                    mt-3
                    space-y-2
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >

                  <li>
                    • Check connected store services.
                  </li>

                  <li>
                    • Review available connection details.
                  </li>

                  <li>
                    • Confirm your integration settings.
                  </li>

                  <li>
                    • Monitor dashboard updates.
                  </li>

                </ul>


              </div>


            </section>






            <section
              id="activity"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                Activity Monitoring
              </h2>



              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Sellio helps you keep track of your
                connected ecommerce workflow by showing
                important activity information in one place.
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
                  1. Open your integration dashboard.
                </li>

                <li>
                  2. Review current service status.
                </li>

                <li>
                  3. Check recent activity updates.
                </li>

                <li>
                  4. Continue managing your workflow.
                </li>

              </ol>



              <div
                className="
                  mt-6
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

                <Info
                  className="
                    mt-0.5
                    h-4
                    w-4
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
                  Regularly reviewing your activity helps
                  maintain a reliable and organized
                  ecommerce setup.
                </p>


              </div>


            </section>







            <section
              id="after"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                After Integration
              </h2>



              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Once your Sellio integrations are ready,
                continue managing your connected services
                and dashboard information.
              </p>



              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    px-4
                    py-3
                  "
                >

                  <p
                    className="
                      text-sm
                      font-semibold
                    "
                  >
                    Review Connected Services
                  </p>


                  <p
                    className="
                      mt-1
                      text-sm
                      text-navy-mute
                    "
                  >
                    Keep your store connections organized
                    and easy to manage.
                  </p>


                </div>



                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    px-4
                    py-3
                  "
                >

                  <p
                    className="
                      text-sm
                      font-semibold
                    "
                  >
                    Manage Dashboard Updates
                  </p>


                  <p
                    className="
                      mt-1
                      text-sm
                      text-navy-mute
                    "
                  >
                    Review important information from
                    your Sellio dashboard.
                  </p>


                </div>


              </div>


            </section>


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
                href="/documentation/truenorth-live-stream-draws"
                className="
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-4
                  transition
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
                  "
                >

                  <ArrowLeft
                    className="
                      h-4
                      w-4
                    "
                  />


             Truenorth-live-stream-draws

                </div>


              </Link>





              <Link
                href="/documentation/managing-instant-winners"
                className="
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-4
                  text-right
                  transition
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
                    justify-end
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                  "
                >

                 Managing-Instant-Winners


                  <ArrowRight
                    className="
                      h-4
                      w-4
                    "
                  />

                </div>


              </Link>


            </div>


          </article>





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

                {
                  sections.map((item)=>(

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
                          ?
                          "text-coral font-medium"
                          :
                          "text-navy-mute hover:text-coral"
                        }
                      `}
                    >

                      {item.label}

                    </a>

                  ))
                }


              </nav>


            </div>


          </aside>


        </div>


      </main>


      <Footer />


    </>

  );

}