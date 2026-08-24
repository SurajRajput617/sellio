import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ImageIcon,
  Info,
  Play,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function InstantWinsPage() {
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


          {/* MAIN CONTENT */}

          <article className="min-w-0">


            {/* HEADER */}

            <section>

              <p className="text-sm font-semibold text-coral">
                Create Your First Raffle
              </p>


              <div className="mt-4 flex items-center gap-4">

                <span
                  className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl bg-coral
                  text-xl font-bold text-white
                  "
                >
                  2
                </span>


                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-tight
                  sm:text-5xl
                  "
                >
                  Add Instant Wins
                </h1>

              </div>


              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Add exciting instant reward experiences to your Sellio
                competitions. Give customers a faster way to discover prizes
                and create a more engaging competition journey.
              </p>

            </section>





            {/* INTRO */}

            <section className="pt-10">

              <div
                className="
                flex gap-4
                rounded-xl
                border border-border
                bg-white
                p-5
                "
              >

                <Info className="h-5 w-5 text-coral shrink-0" />

                <p className="text-sm leading-6 text-navy-mute">
                  Instant Wins are designed to work with Sellio competitions,
                  allowing admins to create special prizes and manage reward
                  experiences from the dashboard.
                </p>

              </div>

            </section>







            {/* STEP 1 */}

            <section
              id="competition"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="text-3xl font-bold">
                Open Competition Manager
              </h2>


              <p className="mt-5 leading-8 text-navy-mute">
                Start by opening the competition you want to enhance with
                Instant Wins from your Sellio admin dashboard.
              </p>


              <div
                className="
                mt-7 rounded-xl
                border border-border
                bg-white
                p-6
                "
              >

                <h3 className="font-bold">
                  Competition Dashboard
                </h3>

                <p className="mt-2 text-navy-mute">
                  Select an existing competition and open the Instant Wins
                  management section.
                </p>

              </div>


            </section>







            {/* STEP 2 */}

            <section
              id="setup"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="text-3xl font-bold">
                Create Instant Win Prizes
              </h2>


              <p className="mt-5 text-navy-mute leading-8">
                Add prizes that customers can unlock during their competition
                experience.
              </p>


              <div className="mt-7 grid gap-4 sm:grid-cols-2">


                {[
                  "Prize name",
                  "Prize image",
                  "Prize value",
                  "Number of available wins",
                  "Reward type",
                  "Prize description",
                ].map((item)=>(
                  <div
                    key={item}
                    className="
                    rounded-xl
                    border border-border
                    bg-white
                    p-4
                    "
                  >
                    {item}
                  </div>
                ))}


              </div>


            </section>







            {/* IMAGE */}

            <section
              id="media"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="text-3xl font-bold">
                Add Prize Media
              </h2>


              <p className="mt-5 leading-8 text-navy-mute">
                Upload attractive prize images to make your Instant Win offers
                clear and engaging for customers.
              </p>


              <div
                className="
                mt-8 rounded-xl
                border border-dashed
                border-border
                bg-white
                p-12 text-center
                "
              >

                <ImageIcon
                  className="
                  mx-auto
                  h-10 w-10
                  text-coral
                  "
                />


                <h3 className="mt-4 font-bold">
                  Sellio Prize Image Preview
                </h3>


                <p className="mt-2 text-sm text-navy-mute">
                  Demo image area. Replace with your Sellio prize image.
                </p>


              </div>


            </section>








            {/* HOW WORK */}

            <section
              id="working"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="text-3xl font-bold">
                How Instant Wins Work
              </h2>


              <div className="mt-6 space-y-4">


              {[
                "Customer purchases competition entries",
                "Sellio checks available Instant Win rewards",
                "Winning results are generated automatically",
                "Customer receives their reward information",
              ].map((item)=>(
                <div
                  key={item}
                  className="flex gap-3"
                >

                  <CheckCircle2
                    className="
                    h-5 w-5
                    text-coral
                    shrink-0
                    "
                  />

                  <p>
                    {item}
                  </p>

                </div>
              ))}


              </div>


            </section>








            {/* GAME MODES */}

            <section
              id="games"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <div className="flex gap-3">

                <Sparkles className="text-coral"/>

                <h2 className="text-3xl font-bold">
                  Interactive Reveal Experiences
                </h2>

              </div>


              <p className="mt-5 text-navy-mute leading-8">
                Sellio can support interactive reward experiences that make
                prize reveals more memorable.
              </p>


              <div className="mt-6 grid gap-3 sm:grid-cols-2">


              {[
                "Spin Wheel",
                "Scratch Card",
                "Mystery Box",
                "Prize Reveal",
              ].map((item)=>(
                <div
                  key={item}
                  className="
                  rounded-xl
                  border border-border
                  bg-white
                  p-5
                  "
                >
                  {item}
                </div>
              ))}


              </div>


            </section>








            {/* VIDEO */}

            <section
              id="video"
              className="scroll-mt-28 py-12"
            >

              <div className="flex gap-3">

                <Play className="text-coral"/>

                <span
                  className="
                  text-sm font-bold
                  uppercase text-coral
                  "
                >
                  Video Guide
                </span>

              </div>


              <h2 className="mt-4 text-3xl font-bold">
                How To Add Instant Wins
              </h2>


              <p className="mt-4 text-navy-mute">
                Watch the Sellio walkthrough for creating and managing Instant
                Win prizes.
              </p>



              <div
                className="
                mt-8 aspect-video
                overflow-hidden
                rounded-xl
                bg-black
                "
              >

                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Sellio Instant Wins Guide"
                  allowFullScreen
                />

              </div>


            </section>






            {/* NAVIGATION */}

            <div
              className="
              grid gap-4
              border-t border-border
              py-10
              sm:grid-cols-2
              "
            >

              <Link
                href="/documentation/create-competition"
                className="
                rounded-xl
                border border-border
                bg-white
                p-5
                "
              >

                <span className="flex gap-2 text-xs uppercase text-navy-mute">

                  <ArrowLeft className="h-4 w-4"/>

                  Previous

                </span>


                <p className="mt-2 font-bold">
                  Create a Competition
                </p>

              </Link>




              <Link
                href="/documentation/product-categories"
                className="
                rounded-xl
                border border-border
                bg-white
                p-5 text-right
                "
              >

                <span className="flex justify-end gap-2 text-xs uppercase text-navy-mute">

                  Next

                  <ArrowRight className="h-4 w-4"/>

                </span>


                <p className="mt-2 font-bold">
                  Product Categories
                </p>

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
                uppercase text-navy-mute
                "
              >
                On This Page
              </p>


              <nav className="mt-5 space-y-4">


                <a
                  href="#competition"
                  className="block text-sm text-navy-mute"
                >
                  Competition Manager
                </a>


                <a
                  href="#setup"
                  className="block text-sm text-navy-mute"
                >
                  Create Instant Wins
                </a>


                <a
                  href="#media"
                  className="block text-sm text-navy-mute"
                >
                  Prize Media
                </a>


                <a
                  href="#working"
                  className="block text-sm text-navy-mute"
                >
                  How It Works
                </a>


                <a
                  href="#games"
                  className="block text-sm text-navy-mute"
                >
                  Reveal Experiences
                </a>


                <a
                  href="#video"
                  className="block text-sm text-navy-mute"
                >
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