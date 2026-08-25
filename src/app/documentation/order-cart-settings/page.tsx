import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function OrderCartSettingsPage() {

  return (
    <>
      <Navbar />


      <main className="min-h-screen bg-paper text-navy">


        <div
          className="
          container-xl
          grid gap-10 py-12
          lg:grid-cols-[250px_minmax(0,1fr)_210px]
          "
        >


          {/* LEFT SIDEBAR */}

          <DocumentationSidebar />




          {/* MAIN CONTENT */}


          <article className="min-w-0">





            {/* HEADER */}


            <section>


              <p className="text-sm font-semibold text-coral">
                Additional Settings
              </p>



              <div className="mt-4 flex items-center gap-4">


                <span
                  className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl bg-coral
                  text-xl font-bold text-white
                  "
                >
                  2
                </span>



                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy
                  "
                >
                  Order & Cart Settings
                </h1>


              </div>




              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Control how customers create orders,
                manage cart limits and customise the
                buying experience on your Sellio website.
              </p>


            </section>









            {/* OVERVIEW */}


            <section
              id="overview"
              className="
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <ShoppingCart
                  className="
                  h-6 w-6
                  text-coral
                  "
                />


                <h2
                  className="
                  font-display
                  text-3xl
                  font-bold
                  "
                >
                  Order & Cart Settings Overview
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                These settings control how many items customers
                can purchase in one order and how pending orders
                are handled. Adjust these options to create the
                best checkout experience.
              </p>


            </section>









            {/* MAX ORDER LIMIT */}


            <section
              id="max-orders"
              className="
              border-b border-border
              py-12
              "
            >


              <h2
                className="
                font-display
                text-3xl
                font-bold
                "
              >
                Maximum Tickets Per Order
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Set the maximum number of tickets a customer
                can purchase in a single order. This helps
                manage large orders and keeps purchasing limits
                under control.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Set the maximum ticket quantity allowed.",
                  "Apply limits across customer orders.",
                  "Control large purchases from checkout."
                ].map((item)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <CheckCircle2
                      className="
                      h-5 w-5
                      text-coral
                      "
                    />


                    <p className="text-navy-mute">
                      {item}
                    </p>


                  </div>


                ))}


              </div>


            </section>









            {/* SINGLE PENDING ORDER */}


            <section
              id="pending-order"
              className="
              border-b border-border
              py-12
              "
            >


              <h2
                className="
                font-display
                text-3xl
                font-bold
                "
              >
                Limit to Single Pending Order
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                When enabled, customers cannot create another
                order while they already have an unpaid pending
                order. This prevents duplicate checkout attempts.
              </p>



              <div className="mt-7 space-y-4">


                {[
                  "Prevent multiple unpaid orders.",
                  "Reduce duplicate checkout activity.",
                  "Keep customer orders organised."
                ].map((item)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <CheckCircle2
                      className="
                      h-5 w-5
                      text-coral
                      "
                    />


                    <p className="text-navy-mute">
                      {item}
                    </p>


                  </div>


                ))}


              </div>


            </section>









            {/* UPDATE SETTINGS */}


            <section
              id="update"
              className="
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Settings
                  className="
                  h-6 w-6
                  text-coral
                  "
                />


                <h2
                  className="
                  font-display
                  text-3xl
                  font-bold
                  "
                >
                  How to Update These Settings
                </h2>


              </div>




              <div className="mt-7 space-y-4">


                {[
                  "Open the Sellio admin dashboard.",
                  "Go to Settings.",
                  "Open Order & Cart Settings.",
                  "Adjust order limits and cart options.",
                  "Save your changes."
                ].map((item,index)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <span
                      className="
                      flex h-6 w-6
                      items-center justify-center
                      rounded-full
                      bg-coral
                      text-xs
                      font-bold
                      text-white
                      "
                    >
                      {index + 1}
                    </span>


                    <p className="text-navy-mute">
                      {item}
                    </p>


                  </div>


                ))}


              </div>


            </section>









            {/* PREVIOUS NEXT */}


            <div
              className="
              grid gap-4
              border-t border-border
              py-10
              sm:grid-cols-2
              "
            >


              <Link
                href="/documentation/entry-list-display"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                "
              >

                <p className="text-xs uppercase text-navy-mute">
                  Previous
                </p>


                <p className="mt-2 font-bold">
                  Entry List Display
                </p>


              </Link>





              <Link
                href="/documentation/free-entry"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                text-right
                "
              >


                <p className="text-xs uppercase text-navy-mute">
                  Next
                </p>



                <div
                  className="
                  mt-2
                  flex
                  justify-end
                  items-center
                  gap-2
                  "
                >

                  <p className="font-bold">
                    Free Entry
                  </p>


                  <ArrowRight className="h-4 w-4"/>


                </div>


              </Link>


            </div>



          </article>









          {/* RIGHT SIDEBAR */}


          <aside className="hidden xl:block">


            <div
              className="
              sticky top-28
              border-l border-border
              pl-6
              "
            >


              <p
                className="
                text-xs font-bold
                uppercase
                text-navy-mute
                "
              >
                On This Page
              </p>




              <nav className="mt-5 space-y-4">


                <a href="#overview"
                className="text-sm text-coral">
                  Overview
                </a>


                <a href="#max-orders"
                className="block text-sm text-navy-mute">
                  Maximum Tickets Per Order
                </a>


                <a href="#pending-order"
                className="block text-sm text-navy-mute">
                  Single Pending Order
                </a>


                <a href="#update"
                className="block text-sm text-navy-mute">
                  Update Settings
                </a>


              </nav>


            </div>


          </aside>



        </div>


      </main>


      <Footer />


    </>
  );
}