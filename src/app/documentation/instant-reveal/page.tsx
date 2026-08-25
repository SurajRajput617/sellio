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


export default function InstantRevealPage() {

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



              <h1
                className="
                mt-4
                text-4xl
                font-bold
                "
              >
                Instant Reveal
              </h1>



              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                A fast auto-reveal game that checks each
                ticket and displays wins as they are found.
              </p>


            </section>









            {/* WHAT IS IT */}



            <section
              id="what-is-it"
              className="
              border-b
              border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <CircleHelp
                  className="
                  h-6
                  w-6
                  text-coral
                  "
                />



                <h2
                  className="
                  text-3xl
                  font-bold
                  "
                >
                  What is It?
                </h2>


              </div>





              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                The instant reveal mechanic automatically
                checks tickets one by one and shows the
                results immediately. Customers can quickly
                discover whether they have won.
              </p>





              <div className="mt-7 space-y-4">


                {[
                  "Tickets are automatically checked.",
                  "Each ticket result is revealed instantly.",
                  "Winning tickets display prize information."
                ].map((item)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <CheckCircle2
                      className="
                      h-5
                      w-5
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
            

            {/* HOW IT WORKS */}



            <section
              id="how-it-works"
              className="
              border-b
              border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <PlayCircle
                  className="
                  h-6
                  w-6
                  text-coral
                  "
                />



                <h2
                  className="
                  text-3xl
                  font-bold
                  "
                >
                  How It Works
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Tickets are automatically checked and
                results are displayed instantly.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customer purchases tickets.",
                  "Instant Reveal starts automatically.",
                  "Each ticket is checked one by one.",
                  "Winning tickets display prize details.",
                  "No Win tickets show the final result.",
                  "A summary of results is displayed."
                ].map((item,index)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <span
                      className="
                      flex
                      h-6
                      w-6
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









            {/* DEMO VIDEO */}



            <section
              className="
              border-b
              border-border
              py-12
              "
            >


              <h2
                className="
                text-3xl
                font-bold
                "
              >
                Instant Reveal Demo
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Watch the Instant Reveal game experience
                and see how tickets are checked and
                results are displayed.
              </p>




              <div
                className="
                mt-8
                aspect-video
                overflow-hidden
                rounded-xl
                border
                border-border
                "
              >


                <iframe
                  className="
                  h-full
                  w-full
                  "
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Instant Reveal Demo"
                  allowFullScreen
                />


              </div>


            </section>









            {/* CUSTOMISATION OPTIONS */}



            <section
              id="customisation"
              className="
              border-b
              border-border
              py-12
              "
            >



              <h2
                className="
                text-3xl
                font-bold
                "
              >
                Customisation Options
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customize your Instant Reveal game with
                prize images and branded visuals.
              </p>








              {/* PRIZE IMAGES */}



              <div className="mt-10">


                <h3 className="text-xl font-bold">
                  Prize Images
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Each instant win prize can have a
                  featured image uploaded. These images
                  are displayed during the reveal.
                </p>





                <div className="mt-6 space-y-6">



                  <div>


                    <h4 className="font-bold">
                      Upload Prize Images
                    </h4>




                    <p
                      className="
                      mt-2
                      text-navy-mute
                      "
                    >
                      Upload prize images through the
                      instant win prize settings in your
                      competition.
                    </p>


                  </div>






                  <div>


                    <h4 className="font-bold">
                      Default Images
                    </h4>




                    <p
                      className="
                      mt-2
                      text-navy-mute
                      "
                    >
                      If no custom image is uploaded,
                      default images can be displayed.
                    </p>


                  </div>



                </div>


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
                Test your Instant Reveal game before
                publishing. Check the ticket checking
                flow and result display.
              </p>





              <div className="mt-7 space-y-4">


                {[
                  "Open Instant Reveal preview mode.",
                  "Run the automatic ticket checking.",
                  "Check winning and No Win results.",
                  "Adjust settings if required."
                ].map((item,index)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <span
                      className="
                      flex
                      h-6
                      w-6
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
                href="/documentation/loot-boxes"
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
                  Loot Boxes
                </p>


              </Link>









              {/* NEXT */}



              <Link
                href="/documentation/pot-drop"
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
                    Pot Drop
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