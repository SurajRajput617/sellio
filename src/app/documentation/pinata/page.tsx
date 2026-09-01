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


export default function PinataPage() {

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
                Piñata
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
                Create an interactive Piñata game where
                customers tap a digital piñata and reveal
                their instant result.
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
                Piñata is an instant win game that gives
                customers a fun interaction. Customers tap
                the digital piñata to discover their result.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customer opens the Piñata game.",
                  "Customer taps the digital piñata.",
                  "The hidden result is revealed."
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
                Customers interact with the Piñata game by
                tapping the object. The system processes the
                action and displays the final outcome.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the Piñata game.",
                  "Tap the digital piñata.",
                  "Animation reveals the result.",
                  "Reward or result is displayed."
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
          


<section
  id="game-experience"
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
    Game Experience
  </h2>



  <p
    className="
    mt-5
    leading-8
    text-navy-mute
    "
  >
    Piñata creates an engaging customer experience
    through simple interaction and instant feedback.
    Customers tap the piñata and discover their result
    through an animation.
  </p>




  <div className="mt-7 space-y-4">


    {[
      "Customers see the digital piñata.",
      "The tap action starts the game animation.",
      "The piñata breaks and reveals the result.",
      "The customer receives the final outcome."
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





<section
  id="customer-result"
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
    Customer Results
  </h2>



  <p
    className="
    mt-5
    leading-8
    text-navy-mute
    "
  >
    Results are configured based on your game setup.
    Customers immediately see their reward or outcome
    after completing the Piñata interaction.
  </p>




  <div className="mt-7 space-y-4">


    {[
      "Winning customers receive the assigned reward.",
      "Non-winning customers see the standard result.",
      "All outcomes follow your configured settings."
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




<section
  id="customisation"
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
    Customisation Options
  </h2>



  <p
    className="
    mt-5
    leading-8
    text-navy-mute
    "
  >
    Personalize your Piñata game with custom visuals
    and settings to create a branded customer
    experience.
  </p>




  <div className="mt-8 space-y-6">


    {[
      {
        title:"Custom Piñata Design",
        text:"Add your own design style and create a branded Piñata appearance."
      },
      {
        title:"Animation Settings",
        text:"Configure how the interaction and reveal animation behaves."
      },
      {
        title:"Reward Display",
        text:"Control how customers view their final result."
      }
    ].map((item)=>(


      <div key={item.title}>


        <h3
          className="
          text-xl
          font-bold
          "
        >
          {item.title}
        </h3>



        <p
          className="
          mt-2
          leading-7
          text-navy-mute
          "
        >
          {item.text}
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
    Test your Piñata game before publishing.
    Check the interaction, animation and results
    to make sure everything works correctly.
  </p>




  <div className="mt-7 space-y-4">


    {[
      "Open Piñata preview mode.",
      "Tap the piñata as a customer.",
      "Review the revealed result.",
      "Update settings if needed."
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
    href="/documentation/pop"
    className="
    rounded-2xl
    border
    border-border
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
      Pop
    </p>


  </Link>







  {/* NEXT */}



  <Link
    href="/documentation/safe-cracker"
    className="
    rounded-2xl
    border
    border-border
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
        Safe Cracker
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
        How It Works
      </a>




      <a
        href="#game-experience"
        className="
        block
        text-sm
        text-navy-mute
        "
      >
        Game Experience
      </a>




      <a
        href="#customer-result"
        className="
        block
        text-sm
        text-navy-mute
        "
      >
        Customer Results
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