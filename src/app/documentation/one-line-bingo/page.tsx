import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

export default function InteractiveGridPage() {
  const steps = [
    "The customer opens the interactive experience.",
    "The interface displays a row of numbered items.",
    "Each item can be selected to display its result.",
    "The selected item changes visually after interaction.",
    "The customer continues through the available items.",
    "A summary appears when the interaction is complete.",
  ];

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
          {/* ========================================
              LEFT DOCUMENTATION SIDEBAR
          ======================================== */}
          <DocumentationSidebar />

          {/* ========================================
              MAIN ARTICLE
          ======================================== */}
          <article className="min-w-0">

            {/* HEADER */}
            <section className="border-b border-border pb-8">
              <p className="text-xs font-semibold text-coral">
                Interactive Features
              </p>

              <h1 className="mt-3 text-4xl font-bold">
                Interactive Grid
              </h1>

              <p className="mt-4 max-w-3xl leading-7 text-navy-mute">
                A row-based interactive experience where customers
                select numbered elements to reveal visual content.
              </p>
            </section>

            {/* ========================================
                WHAT IS IT
            ======================================== */}
            <section
              id="what-is-it"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                What is It?
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                A row of numbered elements is displayed to the
                customer. Each element can be selected individually
                to display its associated content.
              </p>
            </section>

            {/* ========================================
                HOW IT WORKS
            ======================================== */}
            <section
              id="how-it-works"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                How It Works
              </h2>

              <ol className="mt-5 list-decimal space-y-2 pl-5 text-navy-mute">
                {steps.map((step) => (
                  <li key={step}>
                    {step}
                  </li>
                ))}
              </ol>

              {/* DISPLAY ALL */}
              <div
                id="display-all"
                className="mt-8"
              >
                <h3 className="text-lg font-bold">
                  Display All
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Customers can use the Display All option instead of
                  selecting each element individually. This provides a
                  quick way to show all available visual content.
                </p>

                <p className="mt-4 leading-7 text-navy-mute">
                  Choose how quickly the elements appear:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-mute">
                  <li>
                    <strong className="text-navy">
                      Instant:
                    </strong>{" "}
                    All elements appear immediately.
                  </li>

                  <li>
                    <strong className="text-navy">
                      Fast:
                    </strong>{" "}
                    Quick sequence between elements.
                  </li>

                  <li>
                    <strong className="text-navy">
                      Medium:
                    </strong>{" "}
                    A balanced presentation speed.
                  </li>

                  <li>
                    <strong className="text-navy">
                      Slow:
                    </strong>{" "}
                    A more gradual visual sequence.
                  </li>
                </ul>
              </div>
            </section>

            {/* ========================================
                CUSTOMISATION
            ======================================== */}
            <section
              id="customisation"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Customisation Options
              </h2>

              {/* CUSTOM SOUND */}
              <div
                id="custom-sound"
                className="mt-8"
              >
                <h3 className="text-lg font-bold">
                  Custom Sound
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Upload an optional custom sound that plays when the
                  customer completes the interactive sequence.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-mute">
                  <li>
                    Format: MP3.
                  </li>

                  <li>
                    Keep the audio file optimised for web use.
                  </li>

                  <li>
                    Use short audio clips for the best experience.
                  </li>
                </ul>

                {/* NOTICE BOX */}
                <div
                  className="
                    mt-6
                    flex items-start gap-3
                    rounded-md
                    border border-border
                    bg-black/5
                    px-4 py-3
                  "
                >
                  <Info
                    className="
                      mt-0.5
                      h-4 w-4
                      shrink-0
                      text-navy-mute
                    "
                  />

                  <p className="text-sm leading-6 text-navy-mute">
                    If no custom sound is uploaded, a default sound
                    can be used automatically.
                  </p>
                </div>
              </div>
            </section>

            {/* ========================================
                TRY IT FIRST
            ======================================== */}
            <section
              id="try-first"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Want to try it first?
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Preview the interactive layout before publishing to
                check the content, timing and responsive behaviour.
              </p>

            </section>

            {/* ========================================
                PREVIOUS / NEXT
            ======================================== */}
            <div
              className="
                grid gap-4 py-8
                sm:grid-cols-2
              "
            >
              {/* PREVIOUS */}
              <Link
                href="/documentation/whack-a-mole"
                className="
                  group
                  rounded-xl
                  border border-border
                  px-5 py-4
                  transition
                  hover:border-coral
                "
              >
                <p className="text-xs text-navy-mute">
                  Previous
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <ArrowLeft
                    className="
                      h-4 w-4
                      transition
                      group-hover:text-coral
                    "
                  />

                  <p className="font-semibold">
                  Whack-a-Mole
                  </p>
                </div>
              </Link>

              {/* NEXT */}
              <Link
                href="/documentation/plinko"
                className="
                  group
                  rounded-xl
                  border border-border
                  px-5 py-4
                  text-right
                  transition
                  hover:border-coral
                "
              >
                <p className="text-xs text-navy-mute">
                  Next
                </p>

                <div
                  className="
                    mt-2
                    flex items-center
                    justify-end gap-2
                  "
                >
                  <p className="font-semibold">
                    Plinko
                  </p>

                  <ArrowRight
                    className="
                      h-4 w-4
                      transition
                      group-hover:text-coral
                    "
                  />
                </div>
              </Link>
            </div>

            {/* LAST UPDATED */}
            <p className="pb-6 text-xs text-navy-mute">
              Last updated recently
            </p>
          </article>

          {/* ========================================
              RIGHT SIDEBAR
          ======================================== */}
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
                  href="#what-is-it"
                  className="
                    block
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
                    transition
                    hover:text-coral
                  "
                >
                  How It Works
                </a>

                <a
                  href="#display-all"
                  className="
                    block
                    pl-3
                    text-sm
                    text-navy-mute
                    transition
                    hover:text-coral
                  "
                >
                  Display All
                </a>

                <a
                  href="#customisation"
                  className="
                    block
                    text-sm
                    text-navy-mute
                    transition
                    hover:text-coral
                  "
                >
                  Customisation Options
                </a>

                <a
                  href="#custom-sound"
                  className="
                    block
                    pl-3
                    text-sm
                    text-navy-mute
                    transition
                    hover:text-coral
                  "
                >
                  Custom Sound
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