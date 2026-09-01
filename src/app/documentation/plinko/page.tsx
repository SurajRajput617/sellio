import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  Lightbulb,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

export default function InteractiveBoardPage() {
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
            <section className="border-b border-border pb-8">
              <p className="text-xs font-semibold text-coral">
                Interactive Features
              </p>

              <h1 className="mt-3 text-4xl font-bold">
                Interactive Board
              </h1>

              <p className="mt-4 max-w-3xl leading-7 text-navy-mute">
                A physics-style interactive board where visual elements
                move through a custom layout to create an engaging
                branded experience.
              </p>
            </section>

            {/* WHAT IS IT */}
            <section
              id="what-is-it"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                What Is It?
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                An interactive visual board that uses animated elements
                and obstacles to create a dynamic experience for
                visitors.
              </p>

              <div
                className="
                  mt-5 flex items-start gap-3
                  rounded-md border border-border
                  bg-black/5 px-4 py-3
                "
              >
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-coral" />

                <p className="text-sm leading-6 text-navy-mute">
                  Use preview mode to check your board design and
                  responsive layout before publishing.
                </p>
              </div>
            </section>

            {/* HOW IT WORKS */}
            <section
              id="how-it-works"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                How It Works
              </h2>

              <ol className="mt-5 list-decimal space-y-3 pl-5 text-navy-mute">
                <li>
                  Open the interactive board from your dashboard.
                </li>

                <li>
                  Choose the visual layout you want to use.
                </li>

                <li>
                  Add your custom board colors and background.
                </li>

                <li>
                  Upload the visual assets used within the experience.
                </li>

                <li>
                  Configure the animation and presentation options.
                </li>

                <li>
                  Preview the experience on desktop and mobile.
                </li>

                <li>
                  Save your settings when the design looks correct.
                </li>
              </ol>
            </section>

            {/* CUSTOMISATION OPTIONS */}
            <section
              id="customisation"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Customisation Options
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Personalise the board so the experience matches your
                website and brand.
              </p>

              {/* BOARD COLORS */}
              <div id="board-colors" className="mt-8">
                <h3 className="text-lg font-bold">
                  Board Colors
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Choose colors for the different visual elements on
                  your board.
                </p>

                <p className="mt-4 leading-7 text-navy-mute">
                  Available customisation can include:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-mute">
                  <li>
                    <strong className="text-navy">
                      Board Background:
                    </strong>{" "}
                    Change the main board background.
                  </li>

                  <li>
                    <strong className="text-navy">
                      Elements:
                    </strong>{" "}
                    Adjust the appearance of interactive objects.
                  </li>

                  <li>
                    <strong className="text-navy">
                      Highlights:
                    </strong>{" "}
                    Select an accent color for active states.
                  </li>

                  <li>
                    <strong className="text-navy">
                      Text:
                    </strong>{" "}
                    Keep labels readable against the selected colors.
                  </li>
                </ul>
              </div>

              {/* CUSTOM SOUNDS */}
              <div id="custom-sounds" className="mt-10">
                <h3 className="text-lg font-bold">
                  Custom Sounds
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Optional audio can be added to support interactions
                  within the experience.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-mute">
                  <li>Use short MP3 audio files.</li>
                  <li>Optimise audio for web playback.</li>
                  <li>Keep sound optional for visitors.</li>
                  <li>Provide accessible playback controls.</li>
                </ul>
              </div>

              {/* BACKGROUND */}
              <div id="background-image" className="mt-10">
                <h3 className="text-lg font-bold">
                  Background Image
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Upload your own image behind the interactive board to
                  match your website design.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-mute">
                  <li>Format: PNG, JPEG or WebP.</li>
                  <li>Recommended size: 1920 × 1080px.</li>
                  <li>Compress large files before uploading.</li>
                </ul>

                <div
                  className="
                    mt-6 flex items-start gap-3
                    rounded-md border border-border
                    bg-black/5 px-4 py-3
                  "
                >
                  <Info
                    className="
                      mt-0.5 h-4 w-4
                      shrink-0 text-navy-mute
                    "
                  />

                  <p className="text-sm leading-6 text-navy-mute">
                    Keep important visual details away from the edges
                    because background images may crop differently on
                    smaller screens.
                  </p>
                </div>
              </div>
            </section>

            {/* QUICK TIP */}
            <section
              id="quick-tip"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Quick Tip
              </h2>

              <div
                className="
                  mt-5 flex items-start gap-3
                  rounded-md
                  border border-green-900/20
                  bg-green-950/10
                  px-4 py-4
                "
              >
                <Lightbulb
                  className="
                    mt-0.5 h-5 w-5
                    shrink-0
                    text-green-600
                  "
                />

                <p className="text-sm leading-6 text-navy-mute">
                  Keep your board simple and test it on different
                  screen sizes. Clear visual contrast makes interactive
                  elements easier for visitors to understand.
                </p>
              </div>
            </section>

            {/* TRY FIRST */}
            <section
              id="try-first"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Want to try it first?
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Preview the board before publishing to check the
                animation, colors, images and responsive layout.
              </p>

            </section>

            {/* PREVIOUS / NEXT */}
            <div
              className="
                grid gap-4 py-8
                sm:grid-cols-2
              "
            >
              <Link
                href="/documentation/one-line-bingo"
                className="
                  group rounded-xl
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
                   One-Line-Bingo
                  </p>
                </div>
              </Link>

              <Link
                href="/documentation/gems"
                className="
                  group rounded-xl
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
                    mt-2 flex
                    items-center justify-end gap-2
                  "
                >
                  <p className="font-semibold">
                 Gems
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

            <p className="pb-6 text-xs text-navy-mute">
              Last updated recently
            </p>
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
                  uppercase tracking-wide
                  text-navy-mute
                "
              >
                On This Page
              </p>

              <nav className="mt-5 space-y-4">
                <a
                  href="#what-is-it"
                  className="block text-sm text-coral"
                >
                  What Is It?
                </a>

                <a
                  href="#how-it-works"
                  className="
                    block text-sm
                    text-navy-mute
                    transition hover:text-coral
                  "
                >
                  How It Works
                </a>

                <a
                  href="#customisation"
                  className="
                    block text-sm
                    text-navy-mute
                    transition hover:text-coral
                  "
                >
                  Customisation Options
                </a>

                <a
                  href="#board-colors"
                  className="
                    block pl-3 text-sm
                    text-navy-mute
                    transition hover:text-coral
                  "
                >
                  Board Colors
                </a>

                <a
                  href="#custom-sounds"
                  className="
                    block pl-3 text-sm
                    text-navy-mute
                    transition hover:text-coral
                  "
                >
                  Custom Sounds
                </a>

                <a
                  href="#background-image"
                  className="
                    block pl-3 text-sm
                    text-navy-mute
                    transition hover:text-coral
                  "
                >
                  Background Image
                </a>

                <a
                  href="#quick-tip"
                  className="
                    block text-sm
                    text-navy-mute
                    transition hover:text-coral
                  "
                >
                  Quick Tip
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