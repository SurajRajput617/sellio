import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function FreeEntryPage() {

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
                  3
                </span>



                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy
                  "
                >
                  Free Entry
                </h1>


              </div>




              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Allow customers to participate in your Sellio
                competitions using free entry options. Manage
                free entry instructions, customer access and
                participation settings from your dashboard.
              </p>


            </section>









            {/* FREE ENTRY OVERVIEW */}



            <section
              id="overview"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >



              <div className="flex items-center gap-3">


                <FileText
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
                  Free Entry Overview
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Free Entry gives customers another way to join
                competitions without completing a paid purchase.
                You can configure your free entry rules and show
                customers how they can participate.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Create a free participation option.",
                  "Add instructions for customers.",
                  "Manage free entries from your Sellio dashboard."
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









            {/* SETUP TERMS */}



            <section
              id="terms"
              className="
              scroll-mt-28
              border-b border-border
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
                  How to Set Up Free Entry Terms
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Add clear free entry instructions so customers
                understand the requirements before joining your
                competition.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open your Sellio admin dashboard.",
                  "Navigate to competition settings.",
                  "Open the Free Entry section.",
                  "Add your free entry instructions.",
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




              <div
                className="
                mt-7
                rounded-xl
                border border-border
                bg-white
                p-5
                "
              >

                <p className="font-bold">
                  Note
                </p>


                <p className="mt-2 text-sm text-navy-mute">
                  Free entry instructions will appear on your
                  competition page for customers to view.
                </p>


              </div>


            </section>









            {/* FREE ENTRY TAB */}



            <section
              id="free-entry-tab"
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
                The Free Entry Tab
              </h2>



              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                When enabled, the Free Entry option will be
                displayed on your Sellio competition page.
                Customers can follow the provided instructions
                to complete their free participation.
              </p>
              
            </section>









            {/* ADD FREE ENTRANT */}



            <section
              id="add-free-entrant"
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
                How to Add a Free Entrant to Your Competition
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Add customers manually as free entrants from
                your Sellio competition management area.
                This allows you to manage special entries and
                keep your competition records updated.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the competition from your Sellio dashboard.",
                  "Go to the entrant management section.",
                  "Select the Add Free Entrant option.",
                  "Enter customer information.",
                  "Confirm and save the free entry."
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




              <div
                className="
                mt-7
                rounded-xl
                border border-border
                bg-white
                p-5
                "
              >


                <p className="font-bold">
                  Important
                </p>


                <p
                  className="
                  mt-2
                  text-sm
                  text-navy-mute
                  "
                >
                  Make sure free entrants follow the same
                  competition rules and requirements as
                  other participants.
                </p>


              </div>


            </section>









            {/* CREATE FREE ENTRY COMPETITION */}



            <section
              id="create-free-entry"
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
                Creating a Free Entry Competition
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                When creating a competition in Sellio, enable
                free entry options and configure the required
                details before publishing your competition.
              </p>




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



              {/* PREVIOUS */}


              <Link
                href="/documentation/order-cart-settings"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                "
              >


                <p
                  className="
                  text-xs
                  uppercase
                  text-navy-mute
                  "
                >
                  Previous
                </p>


                <p className="mt-2 font-bold">
                  Order & Cart Settings
                </p>


              </Link>







              {/* NEXT */}



              <Link
                href="/documentation/site-credit-wallets"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                text-right
                "
              >


                <p
                  className="
                  text-xs
                  uppercase
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
                  "
                >

                  <p className="font-bold">
                    Site Credit & Wallets
                  </p>


                  <ArrowRight
                    className="
                    h-4 w-4
                    "
                  />


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
                  className="
                  text-sm
                  text-coral
                  "
                >
                  Free Entry Overview
                </a>




                <a
                  href="#terms"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Set Up Free Entry Terms
                </a>




                <a
                  href="#free-entry-tab"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Free Entry Tab
                </a>




                <a
                  href="#add-free-entrant"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Add Free Entrant
                </a>




                <a
                  href="#create-free-entry"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Create Free Entry Competition
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