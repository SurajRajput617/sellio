import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Image,
  LayoutDashboard,
  Play,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function HomepageSetupPage() {

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





          {/* MAIN ARTICLE */}

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
                  3
                </span>


                <h1
                  className="
                  font-display text-4xl font-bold
                  tracking-[-0.04em]
                  text-navy sm:text-5xl
                  "
                >
                  Set Up Your Homepage
                </h1>

              </div>


              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Create your Sellio homepage by adding sections,
                arranging content and building a professional
                storefront experience.
              </p>


            </section>









            {/* VIDEO GUIDE */}


            <section
              id="video"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">

                <Play className="h-5 w-5 text-coral"/>

                <p
                  className="
                  text-sm font-bold
                  uppercase tracking-wide
                  text-coral
                  "
                >
                  Video Guide
                </p>

              </div>



              <h2
                className="
                mt-4 font-display
                text-3xl font-bold text-navy
                "
              >
                Homepage Setup Walkthrough
              </h2>



              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Follow the video guide to understand how to
                customise your Sellio homepage.
              </p>




              {/* DEMO VIDEO */}

              <div
                className="
                mt-8 overflow-hidden
                rounded-2xl
                border border-border
                bg-navy
                "
              >

                <div className="aspect-video flex items-center justify-center">

                  <div className="text-center">

                    <Play
                      className="
                      mx-auto
                      h-14 w-14
                      text-coral
                      "
                    />

                    <p
                      className="
                      mt-4
                      text-white
                      "
                    >
                      Add your homepage tutorial video
                    </p>


                  </div>

                </div>


              </div>


            </section>









            {/* START SETUP */}



            <section
              id="setup"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <h2
                className="
                font-display text-3xl
                font-bold text-navy
                "
              >
                How To Set Up Your Homepage
              </h2>




              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Follow these steps to create your homepage.
              </p>



              <div className="mt-8 space-y-5">


                {[
                  "Open your Sellio dashboard.",
                  "Go to Homepage Builder.",
                  "Add your sections and content.",
                  "Save and publish your changes."
                ].map((item)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >

                    <CheckCircle2
                      className="
                      mt-1
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









            {/* FLOW CHART */}



            <section
              id="flow"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Image className="h-6 w-6 text-coral"/>


                <h2
                  className="
                  font-display text-3xl
                  font-bold text-navy
                  "
                >
                  Homepage Setup Flow
                </h2>


              </div>




              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Use this flow to understand the homepage
                creation process.
              </p>






              <div
                className="
                mt-8
                rounded-2xl
                border border-border
                bg-white
                p-8
                "
              >


                <div className="space-y-6">



                  {[
                    {
                      number:"1",
                      title:"Open Homepage Builder",
                      text:"Access homepage settings from your Sellio dashboard."
                    },
                    {
                      number:"2",
                      title:"Add Homepage Sections",
                      text:"Add banners, products and content blocks."
                    },
                    {
                      number:"3",
                      title:"Customize Design",
                      text:"Update colours, images and page layout."
                    },
                    {
                      number:"4",
                      title:"Publish Homepage",
                      text:"Save changes and check your live website."
                    }
                  ].map((step,index)=>(


                    <div key={step.number}>


                      <div className="flex items-center gap-5">


                        <div
                          className="
                          flex h-12 w-12
                          items-center justify-center
                          rounded-full
                          bg-coral
                          font-bold
                          text-white
                          "
                        >
                          {step.number}
                        </div>



                        <div>

                          <h3 className="font-bold text-navy">
                            {step.title}
                          </h3>


                          <p className="text-sm text-navy-mute">
                            {step.text}
                          </p>


                        </div>


                      </div>



                      {index !== 3 && (

                        <div
                          className="
                          ml-6
                          h-8
                          border-l-2
                          border-dashed
                          border-coral/40
                          "
                        />

                      )}


                    </div>


                  ))}


                </div>


              </div>



            </section>









            {/* HOMEPAGE BLOCKS */}



            <section
              id="blocks"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <LayoutDashboard
                  className="h-6 w-6 text-coral"
                />


                <h2
                  className="
                  font-display text-3xl
                  font-bold text-navy
                  "
                >
                  Homepage Sections
                </h2>


              </div>




              <div className="mt-7 grid gap-4 sm:grid-cols-2">


                {[
                  "Hero Banner",
                  "Featured Products",
                  "Image Sections",
                  "Call To Action"
                ].map(item=>(


                  <div
                    key={item}
                    className="
                    rounded-xl
                    border border-border
                    bg-white
                    p-5
                    "
                  >

                    <p className="font-semibold">
                      {item}
                    </p>


                  </div>


                ))}


              </div>



            </section>









            {/* SAVE */}



            <section
              id="save"
              className="
              scroll-mt-28
              py-12
              "
            >


              <Settings className="text-coral"/>


              <h2
                className="
                mt-4
                font-display
                text-3xl
                font-bold
                "
              >
                Save Homepage
              </h2>



              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Review your homepage on desktop and mobile,
                then publish your changes.
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


              <a
                href="https://sellio-seven.vercel.app/documentation/site-colours"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                hover:border-coral/40
                "
              >

                <p className="text-xs uppercase text-navy-mute">
                  Previous
                </p>

                <p className="mt-2 font-bold">
                  Choose Site Colours
                </p>


              </a>





              <Link
                href="/documentation"
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


                <div className="mt-2 flex justify-end gap-2">


                  <p className="font-bold">
                    Documentation Overview
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


              <p className="
              text-xs font-bold
              uppercase tracking-wide
              text-navy-mute
              ">
                On This Page
              </p>



              <nav className="mt-5 space-y-4">


                <a href="#video" className="text-sm text-coral">
                  Video Guide
                </a>


                <a href="#setup" className="block text-sm text-navy-mute">
                  Setup Steps
                </a>


                <a href="#flow" className="block text-sm text-navy-mute">
                  Setup Flow
                </a>


                <a href="#blocks" className="block text-sm text-navy-mute">
                  Homepage Sections
                </a>


                <a href="#save" className="block text-sm text-navy-mute">
                  Save Homepage
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