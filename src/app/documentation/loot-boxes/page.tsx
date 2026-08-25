import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  PlayCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function LootBoxesPage() {

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

          <DocumentationSidebar />


          <article className="min-w-0">


            {/* HEADER */}


            <section>

              <p className="text-sm font-semibold text-coral">
                Instant Win Games
              </p>


              <h1 className="mt-4 text-4xl font-bold">
                Loot Boxes
              </h1>


              <p className="mt-5 leading-8 text-navy-mute">
                A loot box opening game with a scrolling
                reveal animation.
              </p>


            </section>





            {/* WHAT IS IT */}


            <section
              id="what-is-it"
              className="border-b border-border py-12"
            >


              <div className="flex items-center gap-3">

                <CircleHelp className="h-6 w-6 text-coral"/>


                <h2 className="text-3xl font-bold">
                  What is It?
                </h2>


              </div>



              <p className="mt-5 leading-8 text-navy-mute">
                Loot Boxes is an instant win game where
                customers open a loot box to reveal their
                ticket result.
              </p>




              <div className="mt-6 space-y-4">


                {[
                  "Customer opens the loot box display.",
                  "The reveal animation starts.",
                  "The final result is displayed."
                ].map((item)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >

                    <CheckCircle2
                      className="h-5 w-5 text-coral"
                    />


                    <p className="text-navy-mute">
                      {item}
                    </p>


                  </div>


                ))}


              </div>


            </section>
            

            {/* HOW IT WORKS */}



            <section
              id="how-it-works"
              className="
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <PlayCircle
                  className="h-6 w-6 text-coral"
                />


                <h2 className="text-3xl font-bold">
                  How It Works
                </h2>


              </div>




              <p className="mt-5 leading-8 text-navy-mute">
                Customers interact with the loot box
                animation and discover their result.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customer purchases a ticket.",
                  "Loot box opening animation starts.",
                  "Scrolling reveal animation begins.",
                  "Prize or No Win result appears.",
                  "Customer views final outcome."
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









            {/* CUSTOMISATION OPTIONS */}



            <section
              id="customisation"
              className="
              border-b border-border
              py-12
              "
            >



              <h2 className="text-3xl font-bold">
                Customisation Options
              </h2>




              <p className="mt-5 leading-8 text-navy-mute">
                Customize your Loot Boxes game using
                prize images and visual settings.
              </p>








              {/* PRIZE IMAGES */}



              <div className="mt-10">


                <h3 className="text-xl font-bold">
                  Prize Images
                </h3>




                <p className="mt-3 leading-7 text-navy-mute">
                  Each instant win prize can have a
                  featured image uploaded. These images
                  appear during the reveal animation.
                </p>




                <div className="mt-6 space-y-6">


                  <div>


                    <h4 className="font-bold">
                      Upload Prize Images
                    </h4>



                    <p className="mt-2 text-navy-mute">
                      Upload images for prizes that
                      customers can reveal inside the
                      loot box.
                    </p>


                  </div>






                  <div>


                    <h4 className="font-bold">
                      Default Image
                    </h4>



                    <p className="mt-2 text-navy-mute">
                      If no custom image is added,
                      the default placeholder image
                      is displayed.
                    </p>


                  </div>


                </div>


              </div>
              

              {/* PREVIEW */}



              <div className="mt-12">


                <h3 className="text-xl font-bold">
                  Loot Boxes Preview
                </h3>



                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Test the scrolling reveal animation
                  and prize display before launching
                  the game.
                </p>


              </div>



            </section>









            {/* WANT TO TRY FIRST */}



            <section
              id="try-first"
              className="
              py-12
              "
            >


              <h2
                className="
                text-3xl
                font-bold
                "
              >
                Want to try it first?
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Test your Loot Boxes game before launch.
                Check the reveal animation and prize
                results.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open Loot Boxes preview mode.",
                  "Start the scrolling reveal animation.",
                  "Check the revealed prize result.",
                  "Update settings if required."
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
              grid
              gap-4
              border-t
              border-border
              py-10
              sm:grid-cols-2
              "
            >





              {/* PREVIOUS */}



              <Link
                href="/documentation/safe-cracker"
                className="
                rounded-2xl
                border
                border-border
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
                  Safe Cracker
                </p>


              </Link>









              {/* NEXT */}



              <Link
                href="/documentation/instant-reveal"
                className="
                rounded-2xl
                border
                border-border
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
                    Instant Reveal
                  </p>




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






          {/* RIGHT SIDEBAR */}



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



              <p
                className="
                text-xs
                font-bold
                uppercase
                text-navy-mute
                "
              >
                On This Page
              </p>





              <nav className="mt-5 space-y-4">


                <a
                  href="#what-is-it"
                  className="
                  text-sm
                  text-coral
                  "
                >
                  What is It?
                </a>




                <a
                  href="#how-it-works"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  How It Works
                </a>




                <a
                  href="#customisation"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Customisation Options
                </a>




                <a
                  href="#try-first"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Want to try it first?
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