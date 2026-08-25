import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  PlayCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function TestGameTypePage() {

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
                Instant Win Games
              </p>



              <h1
                className="
                mt-4
                font-display
                text-4xl
                font-bold
                tracking-[-0.04em]
                "
              >
                Test a Game Type
              </h1>




              <p
                className="
                mt-5
                max-w-3xl
                text-lg
                leading-8
                text-navy-mute
                "
              >
                Test your instant win game setup before
                launching it live. Preview the customer
                experience and make sure your game settings
                work correctly.
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


                <Gamepad2
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
                  Test a Game Type
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Testing allows you to check how your selected
                instant win game behaves before customers use
                it. You can verify the design, gameplay and
                result flow.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Preview your selected game mode.",
                  "Check the customer interaction flow.",
                  "Confirm rewards display correctly."
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









            {/* HOW TESTING WORKS */}



            <section
              id="testing"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <PlayCircle
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
                  How Testing Works
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                When you test a game, Sellio creates a preview
                experience where you can play the selected game
                and check the outcome before publishing.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the instant win game settings.",
                  "Select the game type you want to test.",
                  "Launch the preview mode.",
                  "Review the complete customer experience."
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









            {/* STEP BY STEP */}



            <section
              id="steps"
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
                Step by Step
              </h2>




              <div className="mt-7 space-y-5">


                {[
                  "Create or open your instant win competition.",
                  "Choose the required game type.",
                  "Open the test or preview option.",
                  "Play through the game as a customer.",
                  "Check that results and rewards display correctly."
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
            
            {/* VIEW AND PLAY YOUR TEST */}


            <section
              id="view-test"
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
                View and Play Your Test
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                After starting a test, you can view the game
                exactly as customers will see it. Use this
                preview to confirm everything works correctly.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the generated test preview.",
                  "Play the game from the customer view.",
                  "Check the displayed result.",
                  "Confirm rewards and messages appear correctly."
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
                  Testing Tip
                </p>



                <p
                  className="
                  mt-2
                  text-sm
                  leading-6
                  text-navy-mute
                  "
                >
                  Test different outcomes to make sure all
                  possible customer experiences are working
                  before launching the game.
                </p>


              </div>


            </section>









            {/* REPLAY WITHOUT CREATING AGAIN */}



            <section
              id="replay"
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
                Replay Without Creating Again
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                You can replay your test game without creating
                a new competition each time. This helps you
                quickly check different scenarios.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the existing game test.",
                  "Restart the preview session.",
                  "Try another result scenario.",
                  "Continue adjusting settings if required."
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









            {/* WHEN FINISHED */}



            <section
              id="finished"
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
                When You Are Finished
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Once testing is complete and everything works
                correctly, you can publish your instant win
                game for customers.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Review all game settings.",
                  "Confirm rewards and results.",
                  "Publish the game when ready."
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
    href="/documentation/overview"
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
      Overview
    </p>


  </Link>





  {/* NEXT */}


  <Link
    href="/documentation/spin-the-wheel"
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
        Spin the Wheel
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
                  Test a Game Type
                </a>




                <a
                  href="#testing"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  How Testing Works
                </a>




                <a
                  href="#steps"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Step by Step
                </a>




                <a
                  href="#view-test"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  View and Play Your Test
                </a>




                <a
                  href="#replay"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Replay Without Creating Again
                </a>




                <a
                  href="#finished"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  When You Are Finished
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