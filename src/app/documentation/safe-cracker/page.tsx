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


export default function SafeCrackerPage() {

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
                Safe Cracker
              </h1>


              <p className="mt-5 leading-8 text-navy-mute">
                A safe-cracking themed game where customers
                crack open a digital safe to reveal prizes.
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
                Safe Cracker is an interactive instant win
                game where customers crack open a digital
                safe and discover their ticket result.
              </p>


              <div className="mt-6 space-y-4">


                {[
                  "Customer opens the Safe Cracker game.",
                  "Customer interacts with the safe.",
                  "The safe reveals the final result."
                ].map((item)=>(
                  
                  <div key={item} className="flex gap-3">

                    <CheckCircle2 className="h-5 w-5 text-coral"/>

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
              className="border-b border-border py-12"
            >

              <div className="flex items-center gap-3">


                <PlayCircle className="h-6 w-6 text-coral"/>


                <h2 className="text-3xl font-bold">
                  How It Works
                </h2>


              </div>



              <p className="mt-5 leading-8 text-navy-mute">
                Customers interact with the safe cracking
                experience. The safe opens and shows the
                ticket result.
              </p>





              <div className="mt-7 space-y-4">


                {[
                  "Customer views the safe display.",
                  "Customer starts the safe reveal.",
                  "The safe opens with animation.",
                  "The ticket result is displayed.",
                  "Winning tickets reveal prizes."
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
              className="border-b border-border py-12"
            >



              <h2 className="text-3xl font-bold">
                Customisation Options
              </h2>



              <p className="mt-5 leading-8 text-navy-mute">
                Customize your Safe Cracker game with
                custom sounds and visual settings.
              </p>





              <div className="mt-10">


                <h3 className="text-xl font-bold">
                  Custom Sounds
                </h3>



                <div className="mt-6 space-y-6">



                  <div>

                    <h4 className="font-bold">
                      Open Sound
                    </h4>


                    <p className="mt-2 text-navy-mute">
                      Upload an MP3 sound that plays
                      when the safe opening animation
                      starts.
                    </p>

                  </div>






                  <div>

                    <h4 className="font-bold">
                      Win Sound
                    </h4>


                    <p className="mt-2 text-navy-mute">
                      Add a winning sound effect that
                      plays when a customer receives
                      a prize.
                    </p>

                  </div>



                </div>


              </div>
              

              {/* DESIGN SETTINGS */}



              <div className="mt-12">


                <h3 className="text-xl font-bold">
                  Design Settings
                </h3>




                <p className="mt-3 leading-7 text-navy-mute">
                  Configure the Safe Cracker appearance
                  to fit your campaign and branding.
                </p>





                <div className="mt-6 space-y-4">


                  {[
                    "Use branded graphics and visuals.",
                    "Create a themed safe experience.",
                    "Preview changes before publishing."
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


              </div>








              {/* PREVIEW */}



              <div className="mt-12">


                <h3 className="text-xl font-bold">
                  Safe Cracker Preview
                </h3>



                <p className="mt-3 leading-7 text-navy-mute">
                  Test the safe opening animation,
                  sounds and result display before
                  publishing the game.
                </p>


              </div>




            </section>









            {/* WANT TO TRY FIRST */}



            <section
              id="try-first"
              className="py-12"
            >


              <h2 className="text-3xl font-bold">
                Want to try it first?
              </h2>




              <p className="mt-5 leading-8 text-navy-mute">
                Test your Safe Cracker game before launch.
                Check the animation, sounds and result.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open Safe Cracker preview mode.",
                  "Start the safe cracking interaction.",
                  "Check the revealed ticket result.",
                  "Adjust settings if needed."
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
                href="/documentation/pinata"
                className="
                rounded-2xl
                border
                border-border
                p-5
                "
              >

                <p className="text-xs uppercase text-navy-mute">
                  Previous
                </p>


                <p className="mt-2 font-bold">
                  Piñata
                </p>


              </Link>





              <Link
                href="/documentation/loot-boxes"
                className="
                rounded-2xl
                border
                border-border
                p-5
                text-right
                "
              >

                <p className="text-xs uppercase text-navy-mute">
                  Next
                </p>


                <div className="mt-2 flex justify-end gap-2 items-center">

                  <p className="font-bold">
                    Loot Boxes
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