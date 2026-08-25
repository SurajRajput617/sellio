import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function SafePlaySettingPage() {

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
                  text-xl font-bold
                  text-white
                  "
                >
                  6
                </span>



                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy
                  "
                >
                  Safe Play Setting
                </h1>


              </div>




              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Give customers control over their spending
                activity with Sellio Safe Play settings.
                Customers can set limits and manage their
                competition spending preferences.
              </p>


            </section>









            {/* OVERVIEW */}


            <section
              id="overview"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <ShieldCheck
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
                  Safe Play Setting Overview
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Safe Play settings help customers manage their
                spending by allowing them to create personal
                limits. These controls support responsible use
                of your Sellio platform.
              </p>


            </section>









            {/* CUSTOMER CONTROLS */}


            <section
              id="customer-controls"
              className="
              scroll-mt-28
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
                What Customers Can Do
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customers can manage their own spending
                preferences directly from their account.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Set a personal spending limit.",
                  "Choose a preferred time period for limits.",
                  "Review their current spending settings."
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









            {/* SPENDING LIMIT */}


            <section
              id="spending-limit"
              className="
              scroll-mt-28
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
                  How Customers Set Their Spending Limit
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customers can choose a maximum amount they
                want to spend during a selected period. Once
                the limit is reached, additional purchases
                will be restricted.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the customer account area.",
                  "Go to Safe Play settings.",
                  "Choose a spending limit.",
                  "Select the required time period.",
                  "Save the changes."
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
            
            {/* SPENDING LIMIT RULES */}


            <section
              id="rules"
              className="
              scroll-mt-28
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
                Spending Limit Rules
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Spending limits help customers control their
                account activity. Once a limit is reached,
                Sellio will prevent additional purchases until
                the selected period resets.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customers can choose daily, weekly, or monthly limits.",
                  "Limits apply automatically after saving.",
                  "Customers can update limits from their account settings."
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









            {/* OPERATOR SETTINGS */}


            <section
              id="operator-settings"
              className="
              scroll-mt-28
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
                Operator Settings
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Admins can manage Safe Play options from
                Sellio settings and control which customer
                features are available.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Enable or disable Safe Play controls.",
                  "Manage available customer spending options.",
                  "Review settings before applying changes."
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
              scroll-mt-28
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
                How to Update These Settings
              </h2>




              <div className="mt-7 space-y-4">


                {[
                  "Login to your Sellio admin panel.",
                  "Open Settings from the dashboard.",
                  "Go to Safe Play settings.",
                  "Update your required options.",
                  "Click Save."
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
                href="/documentation/payouts"
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
                  Payouts
                </p>


              </Link>







              <Link
                href="/documentation/leaderboards"
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
                    Leaderboards
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
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-navy-mute
                "
              >
                On This Page
              </p>




              <nav className="mt-5 space-y-4">


                <a
                  href="#overview"
                  className="text-sm text-coral"
                >
                  Safe Play Overview
                </a>


                <a
                  href="#customer-controls"
                  className="block text-sm text-navy-mute"
                >
                  Customer Controls
                </a>


                <a
                  href="#spending-limit"
                  className="block text-sm text-navy-mute"
                >
                  Spending Limit
                </a>


                <a
                  href="#rules"
                  className="block text-sm text-navy-mute"
                >
                  Spending Rules
                </a>


                <a
                  href="#operator-settings"
                  className="block text-sm text-navy-mute"
                >
                  Operator Settings
                </a>


                <a
                  href="#update"
                  className="block text-sm text-navy-mute"
                >
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