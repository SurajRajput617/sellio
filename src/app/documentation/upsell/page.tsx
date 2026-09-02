"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  ImageIcon,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


const sections = [
  {
    id: "enable",
    label: "How to Enable an Upsell",
  },
  {
    id: "preview",
    label: "Upsell Preview",
  },
  {
    id: "experience",
    label: "Customer Experience",
  },
  {
    id: "related",
    label: "Related Guides",
  },
];


export default function UpsellPage() {


  const [activeSection, setActiveSection] =
    useState("enable");


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


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );


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
                Upsell
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
                Increase your average order value with
                Sellio upsells by showing customers
                additional products, upgrades, and
                relevant offers during checkout.
              </p>


            </section>







            <section
              id="enable"
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
                How to Enable an Upsell
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Follow these steps to create and display
                upsell offers inside your Sellio store.
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
                  2. Go to Marketing tools.
                </li>


                <li>
                  3. Select Upsell settings.
                </li>


                <li>
                  4. Choose products you want to promote.
                </li>


                <li>
                  5. Add your offer details.
                </li>


                <li>
                  6. Save and activate your upsell.
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


                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Upsell Settings Include
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
                    • Product selection
                  </li>

                  <li>
                    • Offer pricing
                  </li>

                  <li>
                    • Customer targeting
                  </li>

                  <li>
                    • Display timing
                  </li>

                </ul>


              </div>



            </section>








            <section
              id="preview"
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
                Upsell Preview
              </h2>



              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Example preview showing how an upsell
                offer can appear during the Sellio
                checkout experience.
              </p>




              <div
                className="
                  mt-6
                  flex
                  justify-center
                "
              >


                <div
                  className="
                    w-[280px]
                    rounded-xl
                    border
                    border-border
                    bg-white
                    p-4
                  "
                >


                  <div
                    className="
                      rounded-lg
                      bg-black/5
                      p-5
                    "
                  >

                    <ImageIcon
                      className="
                        mx-auto
                        h-10
                        w-10
                        text-coral
                      "
                    />


                    <p
                      className="
                        mt-4
                        text-center
                        text-sm
                        font-bold
                      "
                    >
                      Premium Upgrade Offer
                    </p>


                    <p
                      className="
                        mt-2
                        text-center
                        text-xs
                        text-navy-mute
                      "
                    >
                      Add this item for $19.99
                    </p>


                  </div>


{/* 
                  <button
                    className="
                      mt-4
                      w-full
                      rounded-md
                      bg-coral
                      py-2
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Add Upgrade
                  </button> */}


                </div>


              </div>



            </section>
                        <section
              id="experience"
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
                Customer Experience
              </h2>



              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Sellio upsells help customers discover
                additional products and useful upgrades
                while completing their purchase.
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
                  • Customers see relevant product offers.
                </li>

                <li>
                  • Offers appear during the checkout flow.
                </li>

                <li>
                  • Customers can accept or skip offers.
                </li>

                <li>
                  • Orders update automatically after selection.
                </li>

              </ul>




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
                  Create upsell offers that provide real
                  value and improve the customer shopping
                  experience.
                </p>


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
                Upsell Performance Overview
              </h2>



              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Example dashboard graph showing upsell
                activity and customer offer performance.
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
                    flex
                    h-44
                    items-end
                    gap-3
                  "
                >

                  {
                    [
                      35,
                      55,
                      45,
                      75,
                      65,
                      90,
                      80
                    ].map((value,index)=>(

                      <div
                        key={index}
                        className="
                          flex-1
                          rounded-t-md
                          bg-coral
                        "
                        style={{
                          height:`${value}%`
                        }}
                      />

                    ))
                  }

                </div>




                <div
                  className="
                    mt-3
                    flex
                    justify-between
                    text-xs
                    text-navy-mute
                  "
                >

                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>

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
                ecommerce management guides.
              </p>




              <div
                className="
                  mt-5
                  space-y-3
                "
              >


                <Link
                  href="/documentation/promos-and-discounts"
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

                  Promos and Discounts


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
                href="/documentation/promos-and-discounts"
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


                  Promos and Discounts


                </div>


              </Link>







              <Link
                href="/documentation/dropped-basket-recovery"
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

                  Dropped Basket Recovery


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