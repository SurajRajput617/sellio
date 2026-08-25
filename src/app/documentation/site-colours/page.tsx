import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Palette,
  PaintBucket,
  MousePointerClick,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function SiteColoursPage() {

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
                Customise Your Site
              </p>



              <div className="mt-4 flex items-center gap-4">


                <span
                  className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl bg-coral text-xl font-bold text-white
                  "
                >
                  2
                </span>



                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy sm:text-5xl
                  "
                >
                  Choose Site Colours
                </h1>


              </div>




              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Choose colours that match your brand and create
                a consistent look across your Sellio website.
              </p>


            </section>









            {/* COLOUR SETTINGS */}


            <section
              id="colour-settings"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Palette
                  className="h-6 w-6 text-coral"
                />


                <h2
                  className="
                  font-display text-3xl
                  font-bold text-navy
                  "
                >
                  Find Colour Settings
                </h2>


              </div>




              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Open your Sellio dashboard and go to your
                website customisation settings. Select the
                colour theme section to update your site style.
              </p>



            </section>









            {/* BACKGROUND COLOUR */}



            <section
              id="background"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <PaintBucket
                  className="h-6 w-6 text-coral"
                />


                <h2
                  className="
                  font-display text-3xl
                  font-bold text-navy
                  "
                >
                  Choose Background Colour
                </h2>


              </div>




              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Select a background colour that matches your
                brand identity and keeps your website easy
                for customers to browse.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the background colour option.",
                  "Choose a colour that matches your brand.",
                  "Preview the changes before saving."
                ].map((item)=>(
                  
                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <CheckCircle2
                      className="
                      mt-1 h-5 w-5
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









            {/* PRIMARY COLOUR */}



            <section
              id="primary"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <MousePointerClick
                  className="h-6 w-6 text-coral"
                />


                <h2
                  className="
                  font-display text-3xl
                  font-bold text-navy
                  "
                >
                  Select Primary Colour
                </h2>


              </div>




              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Your primary colour is used for important
                elements like buttons, links, and highlighted
                actions on your website.
              </p>



            </section>









            {/* BUTTON TEXT */}



            <section
              id="button-text"
              className="
              scroll-mt-28
              py-12
              "
            >


              <h2
                className="
                font-display text-3xl
                font-bold text-navy
                "
              >
                Adjust Button Text Colour
              </h2>




              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Make sure your button text is easy to read.
                Use light text on dark colours and dark text
                on light colours.
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


              <a
                href="https://sellio-seven.vercel.app/documentation/add-logo"
                className="
                rounded-2xl
                border border-border
                bg-white p-5
                hover:border-coral/40
                "
              >

                <p
                  className="
                  text-xs uppercase
                  text-navy-mute
                  "
                >
                  Previous
                </p>



                <p
                  className="
                  mt-2 font-display
                  text-lg font-bold
                  text-navy
                  "
                >
                  Add Your Logo
                </p>


              </a>








              {/* NEXT */}


              <Link
                href="/documentation/homepage-setup"
                className="
                rounded-2xl
                border border-border
                bg-white p-5
                text-right
                hover:border-coral/40
                "
              >


                <p
                  className="
                  text-xs uppercase
                  text-navy-mute
                  "
                >
                  Next
                </p>



                <div
                  className="
                  mt-2 flex
                  items-center
                  justify-end
                  gap-2
                  "
                >

                  <p
                    className="
                    font-display
                    text-lg font-bold
                    text-navy
                    "
                  >
                    Homepage Setup
                  </p>


                  <ArrowRight
                    className="h-4 w-4 text-navy-mute"
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
                text-xs font-bold
                uppercase tracking-wide
                text-navy-mute
                "
              >
                On This Page
              </p>




              <nav className="mt-5 space-y-4">


                <a
                  href="#colour-settings"
                  className="
                  block text-sm
                  font-semibold text-coral
                  "
                >
                  Colour Settings
                </a>



                <a
                  href="#background"
                  className="
                  block text-sm
                  text-navy-mute
                  hover:text-coral
                  "
                >
                  Background Colour
                </a>



                <a
                  href="#primary"
                  className="
                  block text-sm
                  text-navy-mute
                  hover:text-coral
                  "
                >
                  Primary Colour
                </a>



                <a
                  href="#button-text"
                  className="
                  block text-sm
                  text-navy-mute
                  hover:text-coral
                  "
                >
                  Button Text Colour
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