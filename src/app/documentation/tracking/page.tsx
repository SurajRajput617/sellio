"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  Share2,
  CheckCircle,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";



const sections = [
  {
    id: "pixel",
    label: "Facebook Pixel ID",
  },
  {
    id: "settings",
    label: "Marketing Settings",
  },
  {
    id: "api",
    label: "Facebook Conversion API",
  },
  {
    id: "related",
    label: "Related Guides",
  },
];



export default function TrackingPage() {


  const [activeSection, setActiveSection] =
    useState("pixel");



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




          <article
            className="
            min-w-0
            "
          >





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
                Sellio Marketing Tools
              </p>




              <h1
                className="
                mt-3
                text-3xl
                font-bold
                "
              >
                Tracking
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
                Track customer actions from your Sellio store
                using Facebook and Meta tracking tools. Add your
                tracking details to understand campaign activity
                and improve marketing performance.
              </p>



            </section>







            <section
              id="pixel"
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
                Facebook Pixel ID
              </h2>





              <p
                className="
                mt-4
                text-sm
                leading-7
                text-navy-mute
                "
              >
                Add your Facebook Pixel ID in Sellio to track
                customer actions such as page visits, product
                views, and conversions.
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
                  2. Go to Marketing settings.
                </li>


                <li>
                  3. Select Facebook & Meta tracking.
                </li>


                <li>
                  4. Add your Facebook Pixel ID.
                </li>


                <li>
                  5. Save your tracking settings.
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
                    Pixel tracking helps measure customer activity
                    and understand how visitors interact with your
                    store.
                  </p>



                </div>



              </div>



            </section>





            <section
              id="settings"
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
                Marketing Settings
              </h2>




              <p
                className="
                mt-4
                text-sm
                leading-7
                text-navy-mute
                "
              >
                Manage your Facebook and Meta tracking settings
                inside the Sellio marketing dashboard.
              </p>




              <div
                className="
                mt-6
                rounded-xl
                border
                border-border
                bg-white
                p-5
                "
              >



                <div
                  className="
                  flex
                  items-center
                  gap-3
                  "
                >



                  <Share2
                    className="
                    h-5
                    w-5
                    text-coral
                    "
                  />



                  <p
                    className="
                    font-semibold
                    "
                  >
                    Sellio Tracking Settings
                  </p>



                </div>
                                <div
                  className="
                  mt-5
                  space-y-4
                  "
                >


                  <div
                    className="
                    rounded-lg
                    bg-black/5
                    p-4
                    "
                  >

                    <p
                      className="
                      text-xs
                      text-navy-mute
                      "
                    >
                      Facebook Pixel ID
                    </p>


                    <p
                      className="
                      mt-2
                      text-sm
                      font-semibold
                      "
                    >
                      123456789012345
                    </p>


                  </div>





                  <div
                    className="
                    rounded-lg
                    bg-black/5
                    p-4
                    "
                  >


                    <p
                      className="
                      text-xs
                      text-navy-mute
                      "
                    >
                      Tracking Status
                    </p>



                    <p
                      className="
                      mt-2
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-coral
                      "
                    >

                      <CheckCircle
                        className="
                        h-4
                        w-4
                        "
                      />


                      Active

                    </p>



                  </div>



                </div>



              </div>





            </section>







            <section
              id="api"
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
                Facebook Conversion API Token
              </h2>





              <p
                className="
                mt-4
                text-sm
                leading-7
                text-navy-mute
                "
              >
                Connect your Facebook Conversion API token
                with Sellio to send server-side events and
                improve campaign tracking accuracy.
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
                  1. Open Facebook Business Manager.
                </li>


                <li>
                  2. Create your Conversion API access token.
                </li>


                <li>
                  3. Copy the generated token.
                </li>


                <li>
                  4. Add the token inside Sellio tracking settings.
                </li>


                <li>
                  5. Save your changes.
                </li>


              </ol>







              <div
                className="
                mt-6
                rounded-xl
                border
                border-border
                bg-white
                p-5
                "
              >



                <div
                  className="
                  rounded-lg
                  bg-black/5
                  p-4
                  "
                >



                  <p
                    className="
                    text-xs
                    text-navy-mute
                    "
                  >
                    Conversion API Token
                  </p>




                  <div
                    className="
                    mt-3
                    rounded-md
                    border
                    border-border
                    bg-white
                    px-4
                    py-3
                    text-xs
                    text-navy-mute
                    "
                  >
                    EAABxxxxxxxxxxxxxxxxxxxx
                  </div>



                </div>







                <div
                  className="
                  mt-4
                  rounded-lg
                  bg-black/5
                  p-4
                  "
                >



                  <p
                    className="
                    text-xs
                    text-navy-mute
                    "
                  >
                    Connection Status
                  </p>




                  <p
                    className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-coral
                    "
                  >



                    <CheckCircle
                      className="
                      h-4
                      w-4
                      "
                    />



                    Connected



                  </p>



                </div>




              </div>





            </section>








            <section
              className="
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
                Verify Tracking Setup
              </h2>





              <p
                className="
                mt-4
                text-sm
                leading-7
                text-navy-mute
                "
              >
                After adding your tracking details, test
                your setup to confirm customer events are
                being recorded correctly.
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



                  <CheckCircle
                    className="
                    mt-0.5
                    h-5
                    w-5
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
                      Tracking Active
                    </p>




                    <p
                      className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                      "
                    >
                      Your Sellio store is connected with
                      Facebook and Meta tracking tools.
                    </p>



                  </div>



                </div>



              </div>





            </section>
                        <section
              id="related"
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
                Explore more Sellio marketing tools and
                advertising features.
              </p>





              <div
                className="
                mt-5
                space-y-3
                "
              >



                <Link
                  href="/documentation/advertising"
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
                  transition
                  hover:border-coral
                  "
                >

                  Advertising


                  <ChevronRight
                    className="
                    h-4
                    w-4
                    text-navy-mute
                    "
                  />


                </Link>






                <Link
                  href="/documentation/klaviyo-integration"
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
                  transition
                  hover:border-coral
                  "
                >

                  Klaviyo Integration



                  <ChevronRight
                    className="
                    h-4
                    w-4
                    text-navy-mute
                    "
                  />


                </Link>



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
                href="/documentation/advertising"
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



                  Advertising


                </div>


              </Link>







              <Link
                href="/documentation/product-catalogue"
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



                 Product Catalogue



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
                  sections.map((item) => (


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
                          ? "text-coral font-medium"
                          : "text-navy-mute hover:text-coral"
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