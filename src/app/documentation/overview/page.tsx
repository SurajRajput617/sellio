import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function InstantWinGamesPage() {

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
                Instant Win Games
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
                Create instant win experiences where customers
                can participate and discover results instantly.
                Sellio allows you to configure different game
                formats and reward customers quickly.
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
                  Instant Win Games Overview
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Instant Win Games let customers play a game
                and receive an immediate result. These games
                are designed to increase engagement and create
                interactive customer experiences.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Create instant reward experiences.",
                  "Choose different game formats.",
                  "Engage customers with interactive games."
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









            {/* HOW IT WORKS */}



            <section
              id="how-work"
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
                How Instant Win Games Work
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customers participate in an instant game and
                receive a result based on your configured game
                settings.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customer opens an available instant win game.",
                  "Customer plays the selected game.",
                  "System checks the game result.",
                  "Reward or outcome is displayed instantly."
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









            {/* SET GAME TYPE */}



            <section
              id="game-type"
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
                  How to Set a Game Type
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Select the type of instant win game you want
                to create from your Sellio dashboard.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the Sellio admin panel.",
                  "Go to Instant Win Games settings.",
                  "Create a new game.",
                  "Select your preferred game type.",
                  "Save your configuration."
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
            
            {/* ADD / CONFIGURE GAME */}


            <section
              id="configure-game"
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
                Configure Instant Win Game
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                After selecting a game type, configure the
                rules, rewards and settings for your instant
                win experience.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Add the game name and description.",
                  "Configure available rewards.",
                  "Set participation rules.",
                  "Review settings before publishing."
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









            {/* GAME PREVIEW */}


            <section
              id="preview"
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
                Game Preview
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Use the preview option to check how the game
                will appear to customers before making it live.
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
                  Preview Checklist
                </p>



                <ul
                  className="
                  mt-4
                  space-y-3
                  text-sm
                  text-navy-mute
                  "
                >

                  <li>
                    • Check game appearance.
                  </li>


                  <li>
                    • Verify reward information.
                  </li>


                  <li>
                    • Confirm customer experience.
                  </li>


                </ul>


              </div>


            </section>









            {/* TEST BEFORE LAUNCH */}



            <section
              id="test"
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
                Test Before You Launch
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Before publishing your instant win game,
                test the complete customer journey to make
                sure everything works correctly.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the game preview.",
                  "Test customer participation flow.",
                  "Check rewards and results.",
                  "Publish when everything is ready."
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









            {/* AVAILABLE GAME MODES */}



            <section
              id="game-modes"
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
                Available Game Modes
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Choose from different instant win formats
                available in Sellio to create unique customer
                experiences.
              </p>




              <div className="mt-7 space-y-3">


                {[
                  "Spin Wheel",
                  "Scratch Card",
                  "Pick a Prize",
                  "Lucky Draw",
                  "Mystery Reward",
                  "Instant Choice"
                ].map((item)=>(


                  <div
                    key={item}
                    className="
                    rounded-xl
                    border border-border
                    bg-white
                    px-5
                    py-4
                    font-medium
                    "
                  >

                    {item}

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
                href="/documentation/homepage-setup"
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
                  Homepage Setup
                </p>


              </Link>







              {/* NEXT */}



              <Link
                href="/documentation/payment-gateway"
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
                    Payment Gateway
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
                  Instant Win Games Overview
                </a>




                <a
                  href="#how-work"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  How Games Work
                </a>




                <a
                  href="#game-type"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Set Game Type
                </a>




                <a
                  href="#configure-game"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Configure Game
                </a>




                <a
                  href="#preview"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Game Preview
                </a>




                <a
                  href="#test"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Test Before Launch
                </a>




                <a
                  href="#game-modes"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Available Game Modes
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