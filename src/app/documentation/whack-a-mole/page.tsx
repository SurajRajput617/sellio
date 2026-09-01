import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

export default function InteractiveGamePage() {
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
                Interactive Game
              </h1>

              <p className="mt-4 leading-7 text-navy-mute">
                An interactive visual experience where customers tap
                elements as they appear on screen.
              </p>
            </section>

            {/* WHAT IS IT */}
            <section
              id="what-is-it"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                What is It?
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                An interactive feature where visual elements appear
                across the screen. Customers can tap or click each
                element to interact with the experience.
              </p>
            </section>

            {/* HOW IT WORKS */}
            <section
              id="how-it-works"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                How It Works
              </h2>

              <ol className="mt-5 list-decimal space-y-2 pl-5 text-navy-mute">
                <li>
                  The customer opens the interactive experience.
                </li>

                <li>
                  Select Start to begin.
                </li>

                <li>
                  Visual elements appear across the screen.
                </li>

                <li>
                  The customer taps or clicks the visible elements.
                </li>

                <li>
                  The interface responds to each interaction.
                </li>

                <li>
                  New elements continue to appear.
                </li>

                <li>
                  The experience finishes after the sequence ends.
                </li>
              </ol>

              {/* SPEED OPTIONS */}
              <div
                id="speed-options"
                className="mt-8"
              >
                <h3 className="text-lg font-bold">
                  Speed Options
                </h3>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-mute">
                  <li>
                    Normal: Elements remain visible longer.
                  </li>

                  <li>
                    Fast: Quicker visual sequence.
                  </li>

                  <li>
                    Turbo: Fast-paced interactive experience.
                  </li>
                </ul>
              </div>
            </section>

            {/* CUSTOMISATION */}
            <section
              id="customisation"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Customisation Options
              </h2>

              {/* CUSTOM SOUNDS */}
              <div
                id="custom-sounds"
                className="mt-8"
              >
                <h3 className="text-lg font-bold">
                  Custom Sounds
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Add optional sounds to key interactions within the
                  experience.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-mute">
                  <li>
                    Use short MP3 audio files.
                  </li>

                  <li>
                    Keep audio files optimised for the web.
                  </li>

                  <li>
                    Give visitors control over sound playback.
                  </li>
                </ul>
              </div>

              {/* BACKGROUND */}
              <div
                id="background-image"
                className="mt-8"
              >
                <h3 className="text-lg font-bold">
                  Background Image
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Upload a custom background image behind the
                  interactive area.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-mute">
                  <li>
                    Format: PNG, JPEG or WebP.
                  </li>

                  <li>
                    Recommended size: 1920 × 1080px.
                  </li>

                  <li>
                    Optimise large images before uploading.
                  </li>
                </ul>
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
                Preview the interactive experience before publishing
                to check the layout, images and responsive behaviour.
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
                href="/documentation/pot-drop"
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
                  <ArrowLeft className="h-4 w-4" />

                  <p className="font-semibold">
                   Pot-Drop
                  </p>
                </div>
              </Link>

              <Link
                href="/documentation/one-line-bingo"
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
                  One Line Bingo
                  </p>

                  <ArrowRight className="h-4 w-4" />
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
                  text-xs font-bold uppercase
                  tracking-wide text-navy-mute
                "
              >
                On This Page
              </p>

              <nav className="mt-5 space-y-4">
                <a
                  href="#what-is-it"
                  className="block text-sm text-coral"
                >
                  What is It?
                </a>

                <a
                  href="#how-it-works"
                  className="
                    block text-sm text-navy-mute
                    transition hover:text-coral
                  "
                >
                  How It Works
                </a>

                <a
                  href="#speed-options"
                  className="
                    block pl-3 text-sm text-navy-mute
                    transition hover:text-coral
                  "
                >
                  Speed Options
                </a>

                <a
                  href="#customisation"
                  className="
                    block text-sm text-navy-mute
                    transition hover:text-coral
                  "
                >
                  Customisation Options
                </a>

                <a
                  href="#custom-sounds"
                  className="
                    block pl-3 text-sm text-navy-mute
                    transition hover:text-coral
                  "
                >
                  Custom Sounds
                </a>

                <a
                  href="#background-image"
                  className="
                    block pl-3 text-sm text-navy-mute
                    transition hover:text-coral
                  "
                >
                  Background Image
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