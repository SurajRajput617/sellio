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


export default function ScratchCardPage() {

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
                Scratch Card
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
                Create an interactive Scratch Card game where
                customers reveal hidden results by scratching
                the card and discovering their reward.
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
                Scratch Card is an instant win game that
                gives customers a fun reveal experience.
                Customers scratch a digital card to discover
                whether they have received a reward.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customer opens the Scratch Card game.",
                  "Customer scratches the covered area.",
                  "The result is revealed instantly."
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
                Customers interact with the Scratch Card by
                revealing the hidden area. The system then
                displays the configured result.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customer selects the Scratch Card.",
                  "The scratch area becomes available.",
                  "Customer reveals the hidden content.",
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
            
            {/* PREVIEW SECTION */}


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
                Scratch Card Preview
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Preview your Scratch Card experience before
                publishing it. Check the design, scratch area
                and customer interaction flow.
              </p>




              <div
                className="
                mt-7
                overflow-hidden
                rounded-xl
                border border-border
                "
              >



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
                Customize your Scratch Card design by adding
                your own images and creating a unique customer
                experience.
              </p>









              {/* OVERLAY IMAGE */}



              <div className="mt-10">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  Custom Overlay Image
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Upload a custom overlay image that covers
                  the hidden reward area. Customers scratch
                  this layer to reveal their result.
                </p>




                <div className="mt-6 space-y-4">


                  {[
                    "Prepare your scratch overlay design.",
                    "Upload the image in Scratch Card settings.",
                    "Preview the scratch effect.",
                    "Save your custom design."
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









              {/* DESIGN TIPS */}



              <div className="mt-10">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  Design Tips
                </h3>




                <div className="mt-5 space-y-3">


                  {[
                    "Use clear and attractive visuals.",
                    "Keep scratch areas easy to identify.",
                    "Match the design with your brand."
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
                Test your Scratch Card before launching it.
                Preview the customer experience and make sure
                the scratch effect, design and rewards work
                correctly.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the Scratch Card preview.",
                  "Scratch the card as a customer.",
                  "Check the revealed result.",
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
              grid gap-4
              border-t border-border
              py-10
              sm:grid-cols-2
              "
            >




              {/* PREVIOUS */}



              <Link
                href="/documentation/slots"
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
                  Slots
                </p>


              </Link>








              {/* NEXT */}



              <Link
                href="/documentation/pop"
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
                    Pop
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
                  href="#preview"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Scratch Card Preview
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