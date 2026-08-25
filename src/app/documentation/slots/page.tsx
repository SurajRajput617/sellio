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


export default function SlotsPage() {

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
                Slots
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
                Create an engaging slot game experience where
                customers can spin reels and discover instant
                results based on your configured rewards.
              </p>


            </section>









            {/* WHAT IS IT */}


            <section
              id="what-is-it"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <CircleHelp
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
                  What is it?
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Slots is an instant win game that allows
                customers to spin reels and reveal their
                result through an interactive game experience.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customers start the slot game.",
                  "Reels spin to generate a result.",
                  "The winning result is displayed instantly."
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
              id="how-it-works"
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
                  How it Works
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customers play the slot game by spinning the
                reels. The system checks the generated result
                and displays the outcome instantly.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the Slots game.",
                  "Click spin to start the reels.",
                  "Wait for the result animation.",
                  "View the reward or no-win result."
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
                Customisation Options
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customize your Slots game by creating your
                own theme, images and visual style to match
                your brand.
              </p>









              {/* PRE-BUILT THEMES */}


              <div className="mt-10">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  Pre-Built Themes
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Select from available themes or create a
                  custom design for your slot game.
                </p>



                <div className="mt-5 space-y-3">


                  {[
                    "Choose a suitable game style.",
                    "Select colours and visual elements.",
                    "Preview the final appearance."
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


              </div>









              {/* CREATE CUSTOM SLOT THEME */}



              <div className="mt-12">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  Creating a Custom Slot Theme
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Create a unique Slots design by preparing
                  your images and uploading them into Sellio.
                </p>




                <div className="mt-7 space-y-6">


                  {[
                    {
                      title:"Upload Your Images",
                      text:"Prepare slot images, symbols and backgrounds according to your game design."
                    },
                    {
                      title:"Set Background",
                      text:"Choose a background image that matches your slot theme."
                    },
                    {
                      title:"Add Your Reel Images",
                      text:"Upload symbols that will appear on the spinning reels."
                    },
                    {
                      title:"Download Your Design",
                      text:"Review your final theme before uploading it."
                    }
                  ].map((item,index)=>(


                    <div
                      key={item.title}
                      className="flex gap-4"
                    >


                      <span
                        className="
                        flex h-7 w-7
                        shrink-0
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



                      <div>


                        <h4 className="font-bold">
                          {item.title}
                        </h4>


                        <p
                          className="
                          mt-1
                          text-sm
                          leading-6
                          text-navy-mute
                          "
                        >
                          {item.text}
                        </p>


                      </div>


                    </div>


                  ))}


                </div>


              </div>









              {/* CANVA GUIDE */}



              <div className="mt-12">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  Upload Your Images to Canva
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Create or edit your slot graphics using a
                  design tool before adding them to Sellio.
                </p>




                <div className="mt-6 space-y-4">


                  {[
                    "Create your slot design template.",
                    "Add symbols and background images.",
                    "Export your completed graphics.",
                    "Prepare files for uploading."
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


            </section>
            
            {/* UPLOAD TO SELLIO */}



            <section
              id="upload-sellio"
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
                Upload to Sellio
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                After preparing your slot theme files, upload
                them into Sellio and configure your game
                appearance.
              </p>




              <div className="mt-7 space-y-5">


                {[
                  "Open your Slots game settings.",
                  "Upload background and symbol images.",
                  "Review the slot preview.",
                  "Save your custom theme."
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









            {/* TEST SLOTS */}



            <section
              id="test-slots"
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
                Test Your Slots Game
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Before launching your Slots game, test the
                complete experience to make sure the reels,
                images and results work correctly.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the game preview.",
                  "Spin the reels as a customer.",
                  "Check symbols and rewards.",
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









            {/* WANT TO TRY FIRST */}



            <section
              id="try-first"
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
                Want to try it first?
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Preview your Slots game before publishing it.
                This allows you to check the customer
                experience and update your settings if needed.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open Slots preview mode.",
                  "Play the game experience.",
                  "Check the final appearance.",
                  "Make required changes."
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
                href="/documentation/spin-the-wheel"
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
                  Spin the Wheel
                </p>


              </Link>







              <Link
                href="/documentation/scratch-card"
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
                    Scratch Card
                  </p>



                  <ArrowRight
                    className="h-4 w-4"
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
                  href="#what-is-it"
                  className="
                  text-sm
                  text-coral
                  "
                >
                  What is it?
                </a>




                <a
                  href="#how-it-works"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  How it Works
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
                  href="#upload-sellio"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Upload to Sellio
                </a>




                <a
                  href="#test-slots"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Test Your Slots Game
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