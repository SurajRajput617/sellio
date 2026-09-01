import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Trophy,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function LeaderboardsPage() {

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





          {/* MAIN CONTENT */}


          <article className="min-w-0">





            {/* HEADER */}


            <section>


              <p className="text-sm font-semibold text-coral">
                Additional Settings
              </p>




              <div className="mt-4 flex items-center gap-4">


                <span
                  className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl bg-coral
                  text-xl font-bold
                  text-white
                  "
                >
                  7
                </span>



                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy
                  "
                >
                  Leaderboards
                </h1>


              </div>




              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Create competitive rankings on your Sellio
                website and reward your top customers.
                Leaderboards help increase engagement by
                showing customer performance and progress.
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


                <Trophy
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
                  Leaderboards Overview
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Leaderboards allow you to display customer
                rankings based on competition activity,
                purchases, entries, or other performance
                metrics.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Create rankings for your customers.",
                  "Encourage repeat participation.",
                  "Display top performers publicly."
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









            {/* HOW LEADERBOARDS WORK */}


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
                How Leaderboards Work
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Leaderboards collect customer activity and
                organise users into ranking positions.
                Customers can see their current position and
                compete for available rewards.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Select the activity used for ranking customers.",
                  "Choose the leaderboard duration.",
                  "Add rewards for top positions.",
                  "Publish the leaderboard on your site."
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









            {/* ENABLE LEADERBOARD */}


            <section
              id="enable"
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
                  Enable a Leaderboard
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Turn on leaderboard features from your Sellio
                settings and configure how rankings appear
                to customers.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open Sellio admin settings.",
                  "Go to Leaderboards settings.",
                  "Enable the leaderboard option.",
                  "Save your changes."
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
            

            {/* CHOOSE DURATION */}


            <section
              id="duration"
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
                Choose a Duration
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Select how long your leaderboard should run.
                You can create short campaigns or longer
                competitions depending on your goals.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Daily leaderboard",
                  "Weekly leaderboard",
                  "Monthly leaderboard",
                  "Custom duration"
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









            {/* TIMEFRAME */}



            <section
              id="timeframe"
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
                Set the Leaderboard Timeframe
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Choose when your leaderboard starts and ends.
                Customers will compete during the selected
                period and rankings will update automatically.
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
                  Time Period Options
                </p>


                <ul
                  className="
                  mt-3
                  space-y-2
                  text-sm
                  text-navy-mute
                  "
                >

                  <li>
                    • Select start date and time.
                  </li>

                  <li>
                    • Select end date and time.
                  </li>

                  <li>
                    • Publish leaderboard changes.
                  </li>

                </ul>


              </div>


            </section>









            {/* ADD PRIZES */}



            <section
              id="prizes"
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
                Add Prizes
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Reward your highest ranked customers by adding
                prizes to leaderboard positions. You can create
                different rewards for multiple ranking levels.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the leaderboard prize settings.",
                  "Choose the ranking positions.",
                  "Add rewards for each position.",
                  "Save your prize configuration."
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
                  Prize Example
                </p>


                <p
                  className="
                  mt-2
                  text-sm
                  text-navy-mute
                  "
                >
                  1st Place - Main Reward
                  <br />
                  2nd Place - Secondary Reward
                  <br />
                  3rd Place - Bonus Reward
                </p>


              </div>


            </section>









            {/* PRIZE CONFIGURATION */}



            <section
              id="configure-prizes"
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
                Configure Leaderboard Rewards
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Configure reward details and ensure each
                leaderboard position has the correct prize
                assigned.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Select the reward type.",
                  "Enter reward details.",
                  "Assign reward to a position.",
                  "Confirm and save changes."
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
            

            {/* WHAT CUSTOMERS SEE */}


            <section
              id="customer-view"
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
                What Your Customers See
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customers can view leaderboard rankings on
                your Sellio website and track their position
                compared with other participants.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "View their current leaderboard position.",
                  "See top performing customers.",
                  "Track progress during the competition.",
                  "View available rewards and prizes."
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









            {/* MANAGING WINNERS */}



            <section
              id="manage-winners"
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
                Managing Leaderboard Winners
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                After a leaderboard ends, admins can review
                final rankings and manage customer rewards
                from the Sellio dashboard.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the completed leaderboard.",
                  "Review final customer rankings.",
                  "Confirm winning positions.",
                  "Process customer rewards."
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









            {/* AUTOMATIC PAYOUTS */}



            <section
              id="automatic-payouts"
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
                Automatic Prize Payouts
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Automatically distribute leaderboard rewards
                when supported payout settings are enabled.
                This helps reduce manual work when rewarding
                winners.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Enable automatic reward processing.",
                  "Check reward configuration.",
                  "Confirm winner payout settings.",
                  "Save your changes."
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









            {/* HOW THIS WORKS */}



            <section
              id="how-this-works"
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
                How This Works
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Leaderboards collect customer activity,
                calculate rankings and display results based
                on your selected rules.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customers participate on your Sellio website.",
                  "Activity is recorded automatically.",
                  "Rankings update based on performance.",
                  "Winners receive assigned rewards."
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



              {/* PREVIOUS */}


              <Link
                href="/documentation/safe-play-setting"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                "
              >


                <p className="text-xs uppercase text-navy-mute">
                  Previous
                </p>


                <p className="mt-2 font-bold">
                  Safe Play Setting
                </p>


              </Link>







              {/* NEXT */}


              <Link
                href="/documentation/integrations"
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
                    Settings/Integrations
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
                tracking-wide
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
                  Leaderboards Overview
                </a>



                <a
                  href="#how-work"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  How Leaderboards Work
                </a>




                <a
                  href="#enable"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Enable Leaderboard
                </a>




                <a
                  href="#duration"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Choose Duration
                </a>




                <a
                  href="#timeframe"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Leaderboard Timeframe
                </a>




                <a
                  href="#prizes"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Add Prizes
                </a>




                <a
                  href="#customer-view"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Customer View
                </a>




                <a
                  href="#managing-winners"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Managing Winners
                </a>




                <a
                  href="#automatic-prizes"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Automatic Prize Payouts
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