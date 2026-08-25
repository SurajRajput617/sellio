import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  List,
  Settings,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function EntryListDisplayPage() {

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




          {/* CONTENT */}

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
                  1
                </span>


                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy
                  "
                >
                  Entry List Display
                </h1>


              </div>


              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Display customer entries on your Sellio website
                to improve transparency and help customers
                view competition participation details.
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


                <List className="h-6 w-6 text-coral" />


                <h2 className="font-display text-3xl font-bold">
                  Entry List Overview
                </h2>


              </div>



              <p className="mt-5 leading-8 text-navy-mute">

                Entry List Display allows customers to view
                competition participation information and
                improves trust on your Sellio website.

              </p>


            </section>









            {/* ENABLE */}


            <section
              id="enable"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Settings className="h-6 w-6 text-coral"/>


                <h2 className="font-display text-3xl font-bold">
                  How to Enable Entry List
                </h2>


              </div>




              <p className="mt-5 leading-8 text-navy-mute">

                Enable entry list display from your Sellio
                competition settings.

              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open Sellio admin dashboard.",
                  "Go to Competition settings.",
                  "Select your competition.",
                  "Enable Entry List option.",
                  "Save changes."
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









            {/* SETTINGS */}


            <section
              id="settings"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Users className="h-6 w-6 text-coral"/>


                <h2 className="font-display text-3xl font-bold">
                  Entry List Settings
                </h2>


              </div>


              <p className="mt-5 leading-8 text-navy-mute">

                Customize how customer entry information is
                displayed on your competition pages.

              </p>


            </section>
                        {/* NAME DISPLAY */}


            <section
              id="name"
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
                Entry List Name Display
              </h2>



              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Choose how customer names appear in the entry
                list. You can display limited customer details
                to maintain privacy while showing participation.
              </p>




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
                  Example
                </p>


                <p className="mt-2 text-sm text-navy-mute">
                  John Smith → John S.
                </p>


              </div>


            </section>









            {/* VISIBILITY SETTINGS */}


            <section
              id="visibility"
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
                Disable Entry List Unless Entered
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Control who can view the competition entry
                list. You can restrict visibility for privacy
                and allow access only to customers who have
                entered the competition.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Enable restricted visibility when required.",
                  "Only entered customers can view the list.",
                  "Improve privacy for competition participants."
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
                href="/documentation/terms-conditions"
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
                  Add Terms & Conditions
                </p>


              </Link>







              {/* NEXT */}


              <Link
                href="/documentation/order-cart-settings"
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
                    Order & Cart Settings
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
                  className="text-sm text-coral"
                >
                  Entry List Overview
                </a>



                <a
                  href="#enable"
                  className="block text-sm text-navy-mute"
                >
                  Enable Entry List
                </a>




                <a
                  href="#settings"
                  className="block text-sm text-navy-mute"
                >
                  Entry List Settings
                </a>




                <a
                  href="#name"
                  className="block text-sm text-navy-mute"
                >
                  Name Display
                </a>




                <a
                  href="#visibility"
                  className="block text-sm text-navy-mute"
                >
                  Visibility Settings
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