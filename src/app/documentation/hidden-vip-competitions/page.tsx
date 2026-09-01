import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ImageIcon,
  Info,
  Lock,
  Play,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function HiddenVipCompetitionsPage() {

  return (
    <>

      <Navbar />


      <main className="min-h-screen bg-paper text-navy">


        <div
          className="
          container-xl
          grid gap-10 py-12
          lg:grid-cols-[280px_minmax(0,1fr)]
          xl:grid-cols-[280px_minmax(0,1fr)_210px]
          "
        >



          {/* LEFT SIDEBAR */}

          <DocumentationSidebar />





          {/* CONTENT */}

          <article className="min-w-0">





            {/* HEADER */}

            <section>


              <p className="text-sm font-semibold text-coral">
                Create Your First Raffle
              </p>



              <div className="mt-4 flex items-center gap-4">


                <span
                  className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-coral
                  text-xl
                  font-bold
                  text-white
                  "
                >
                  4
                </span>



                <h1
                  className="
                  font-display
                  text-4xl
                  font-bold
                  tracking-tight
                  sm:text-5xl
                  "
                >
                  Hidden VIP Competitions
                </h1>


              </div>




              <p
                className="
                mt-5
                max-w-3xl
                text-lg
                leading-8
                text-navy-mute
                "
              >
                Run exclusive Sellio competitions for selected customers by
                hiding them from your public marketplace while keeping them
                active through a private access link.
              </p>


            </section>








            {/* INFO */}


            <section className="pt-10">


              <div
                className="
                flex gap-4
                rounded-xl
                border
                border-border
                bg-white
                p-5
                "
              >


                <Info className="h-5 w-5 text-coral"/>



                <p className="text-sm leading-7 text-navy-mute">

                  Sellio Hidden VIP Competitions allow admins to create
                  private competitions for VIP customers, special campaigns,
                  and selected communities.

                </p>


              </div>


            </section>









            {/* HIDDEN MEANS */}


            <section
              id="meaning"
              className="
              scroll-mt-28
              border-b
              border-border
              py-12
              "
            >


              <h2 className="text-3xl font-bold">
                What Hidden VIP Competition Means
              </h2>



              <p className="mt-5 leading-8 text-navy-mute">

                Hidden competitions stay active but are removed from public
                customer discovery areas.

              </p>




              <div className="mt-6 space-y-3">


              {[
                "Not displayed on homepage",
                "Not visible in competition listings",
                "Not shown in category pages",
                "Not available in website search",
                "Not shown in recommendations"
              ].map(item=>(


                <div
                  key={item}
                  className="flex gap-3"
                >

                  <CheckCircle2
                    className="h-5 w-5 text-coral"
                  />


                  <p>
                    {item}
                  </p>


                </div>


              ))}



              </div>


            </section>












            {/* TIMELINE */}


            <section
              id="make-hidden"
              className="
              scroll-mt-28
              border-b
              border-border
              py-12
              "
            >


              <h2
                className="
                text-3xl
                font-display
                font-bold
                tracking-tight
                "
              >
                Make a Competition Hidden
              </h2>





              <div className="relative mt-10 space-y-10">



              {[
                {
                  title:"Open your competition",
                  text:
                  "Open the Sellio admin dashboard, go to Competitions and select the competition you want to hide."
                },
                {
                  title:"Turn on Hidden / VIP Competition",
                  text:
                  "Open competition settings and enable the Hidden VIP Competition option."
                },
                {
                  title:"Make sure it is Active",
                  text:
                  "Confirm that the competition is active so customers can still enter using the private link."
                },
                {
                  title:"Save your changes",
                  text:
                  "Save your settings and your competition will become private."
                }

              ].map((step,index)=>(



                <div
                  key={step.title}
                  className="
                  relative
                  flex
                  gap-6
                  "
                >




                  {/* NUMBER */}


                  <div
                    className="
                    relative
                    flex
                    flex-col
                    items-center
                    "
                  >


                    <span
                      className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-coral
                      text-sm
                      font-bold
                      text-white
                      z-10
                      "
                    >
                      {index + 1}
                    </span>




                    {index !== 3 && (

                      <span
                        className="
                        absolute
                        top-10
                        h-[calc(100%+20px)]
                        w-px
                        bg-coral/40
                        "
                      />

                    )}



                  </div>







                  {/* TEXT */}


                  <div>


                    <h3
                      className="
                      text-2xl
                      font-bold
                      "
                    >
                      {step.title}
                    </h3>



                    <p
                      className="
                      mt-4
                      max-w-3xl
                      leading-8
                      text-navy-mute
                      "
                    >
                      {step.text}
                    </p>


                  </div>



                </div>



              ))}



              </div>



            </section>









            {/* ACCESS */}


            <section
              id="access"
              className="
              scroll-mt-28
              border-b
              border-border
              py-12
              "
            >


              <div className="flex gap-3">


                <Lock className="text-coral"/>


                <h2 className="text-3xl font-bold">
                  Share With VIP Customers
                </h2>


              </div>



              <p className="mt-5 leading-8 text-navy-mute">

                Share the private Sellio competition link with selected
                customers.

              </p>



              <div className="mt-6 space-y-3">


              {[
                "Copy private competition link",
                "Share through email",
                "Invite VIP customers",
                "Manage private campaigns"
              ].map(item=>(


                <div
                  key={item}
                  className="flex gap-3"
                >

                  <CheckCircle2
                    className="h-5 w-5 text-coral"
                  />

                  <p>
                    {item}
                  </p>


                </div>


              ))}



              </div>


            </section>









            {/* IMAGE */}


            <section
              id="image"
              className="
              scroll-mt-28
              border-b
              border-border
              py-12
              "
            >


              <h2 className="text-3xl font-bold">
                VIP Competition Image
              </h2>



              <div
                className="
                mt-8
                rounded-xl
                border
                border-dashed
                border-border
                bg-white
                p-12
                text-center
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



                <h3 className="mt-4 font-bold">
                  Sellio VIP Demo Image
                </h3>


                <p className="mt-2 text-sm text-navy-mute">
                  Replace this area with your Sellio screenshot.
                </p>



              </div>


            </section>









            {/* VIDEO */}


            <section
              id="video"
              className="scroll-mt-28 py-12"
            >


              <div className="flex gap-3">

                <Play className="text-coral"/>


                <span className="text-sm font-bold text-coral">
                  VIDEO GUIDE
                </span>


              </div>



              <h2 className="mt-4 text-3xl font-bold">
                Creating Hidden VIP Competitions
              </h2>




              <div
                className="
                mt-8
                aspect-video
                overflow-hidden
                rounded-xl
                bg-black
                "
              >


                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Sellio Hidden VIP Competition"
                  allowFullScreen
                />


              </div>


            </section>









            {/* NAVIGATION */}


            <div
              className="
              grid
              gap-4
              border-t
              border-border
              py-10
              sm:grid-cols-2
              "
            >


              <Link
                href="/documentation/product-categories"
                className="
                rounded-xl
                border
                border-border
                bg-white
                p-5
                "
              >

                <span className="flex gap-2 text-xs">
                  <ArrowLeft className="h-4 w-4"/>
                  Previous
                </span>


                <p className="mt-2 font-bold">
                  Product Categories
                </p>


              </Link>




              <Link
                href="/documentation/create-competition"
                className="
                rounded-xl
                border
                border-border
                bg-white
                p-5
                text-right
                "
              >


                <span className="flex justify-end gap-2 text-xs">

                  Next

                  <ArrowRight className="h-4 w-4"/>

                </span>


                <p className="mt-2 font-bold">
                  Create-Competition
                </p>


              </Link>


            </div>



          </article>








          {/* RIGHT TOC */}


          <aside className="hidden xl:block">


            <div
              className="
              sticky
              top-28
              border-l
              border-border
              pl-6
              "
            >


              <p className="text-xs font-bold uppercase">
                On This Page
              </p>



              <nav className="mt-5 space-y-4">


                <a href="#meaning" className="block text-sm">
                  What Hidden Means
                </a>


                <a href="#make-hidden" className="block text-sm">
                  Make Competition Hidden
                </a>


                <a href="#access" className="block text-sm">
                  Share With VIPs
                </a>


                <a href="#image" className="block text-sm">
                  Image
                </a>


                <a href="#video" className="block text-sm">
                  Video Guide
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