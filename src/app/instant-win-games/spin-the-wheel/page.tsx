"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function SpinTheWheelPage() {
  const sections = [
    { id: "what-is-it", label: "What is it?" },
    { id: "how-it-works", label: "How it Works" },
    { id: "customisation", label: "Customisation Options" },
    { id: "preview-image", label: "Spin the Wheel Preview" },
    { id: "try-first", label: "Want to try it first?" },
  ];

  const [activeSection, setActiveSection] = useState("what-is-it");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                font-display
                text-4xl
                font-bold
                tracking-[-0.04em]
                "
              >
                Spin the Wheel
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
                Create an interactive Spin the Wheel game
                where customers spin a virtual wheel and
                receive instant results based on configured
                rewards.
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
                Spin the Wheel is an instant win game that
                allows customers to spin a digital wheel and
                discover their reward immediately.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customers interact with a spinning wheel.",
                  "The wheel selects a configured result.",
                  "Rewards are displayed instantly."
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


              <h2
                className="
                font-display
                text-3xl
                font-bold
                "
              >
                How it Works
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customers start the Spin the Wheel game,
                complete the spin action and receive the
                result generated from your game settings.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customer opens the Spin the Wheel game.",
                  "Customer clicks the spin button.",
                  "The wheel animation starts.",
                  "A reward or result is displayed."
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
                  Customisation Options
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customize your Spin the Wheel experience by
                changing the design, sounds and visual elements
                of your game.
              </p>









              {/* THEME EDITOR */}


              <div className="mt-10">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  Theme Editor
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Adjust the appearance of your wheel to match
                  your brand style and customer experience.
                </p>




                <div className="mt-5 space-y-3">


                  {[
                    "Change wheel colours.",
                    "Update wheel text styles.",
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









              {/* CUSTOM WHEEL SOUND */}


              <div className="mt-10">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  Custom Wheel Sound
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Add sound effects to make the spinning
                  experience more engaging for customers.
                </p>




                <div className="mt-5 space-y-3">


                  {[
                    "Upload or select wheel sounds.",
                    "Preview audio before saving.",
                    "Enable or disable sound settings."
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









              {/* CUSTOM BACKGROUND IMAGE */}


              <div className="mt-10">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  Custom Background Image
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Upload a custom background image to create
                  a unique Spin the Wheel appearance.
                </p>




                <div className="mt-5 space-y-3">


                  {[
                    "Upload your background image.",
                    "Check the preview display.",
                    "Save your custom design."
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









            {/* IMAGE PREVIEW */}


            <section
              id="preview-image"
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
                Spin the Wheel Preview
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Preview your configured Spin the Wheel game
                before making it available to customers.
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
                        {/* TRY FIRST */}


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
                Test your Spin the Wheel game before launch.
                Preview the customer experience and confirm
                that the wheel, rewards and results work as
                expected.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the Spin the Wheel preview.",
                  "Spin the wheel as a customer.",
                  "Check the selected reward.",
                  "Update settings if changes are needed."
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
                href="/instant-win-games/test-a-game-type"
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
                 Test-a-game-type
                </p>


              </Link>





              <Link
                href="/instant-win-games/slots"
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
                    Slots
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
  <div className="sticky top-28 border-l border-border pl-6">
    <p className="text-xs font-bold uppercase text-navy-mute">
      On This Page
    </p>

    <nav className="mt-5 space-y-4">
      {sections.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setActiveSection(item.id)}
          className={`block text-sm transition-colors ${
            activeSection === item.id
              ? "font-semibold text-coral"
              : "text-navy-mute hover:text-coral"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  </div>
</aside>
        </div>


      </main>


      <Footer />


    </>
  );
}