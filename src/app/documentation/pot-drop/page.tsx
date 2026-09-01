import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

export default function InteractiveDropPage() {
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
          {/* =========================
              LEFT SIDEBAR
          ========================== */}
          <DocumentationSidebar />

          {/* =========================
              MAIN CONTENT
          ========================== */}
          <article className="min-w-0">

            {/* PAGE HEADER */}
            <section className="border-b border-border pb-8">
              <p className="text-xs font-semibold text-coral">
                Interactive Features
              </p>

              <h1 className="mt-3 text-4xl font-bold">
                Interactive Drop
              </h1>

              <p className="mt-4 leading-7 text-navy-mute">
                A gravity-based visual experience where custom elements
                drop into the screen and create an interactive branded
                presentation.
              </p>
            </section>

            {/* =========================
                WHAT IS IT
            ========================== */}
            <section
              id="what-is-it"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                What is It?
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                A gravity-based visual feature where branded elements
                fall from the top of the screen and react when they
                reach the bottom of the display.
              </p>
            </section>

            {/* =========================
                HOW IT WORKS
            ========================== */}
            <section
              id="how-it-works"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                How It Works
              </h2>

              <ol className="mt-5 list-decimal space-y-2 pl-5 text-navy-mute">
                <li>
                  A visitor opens the interactive experience.
                </li>

                <li>
                  The visual sequence starts automatically.
                </li>

                <li>
                  Branded elements begin to appear on screen.
                </li>

                <li>
                  Each element moves through the display.
                </li>

                <li>
                  The animation continues until the sequence is complete.
                </li>

                <li>
                  A final screen confirms that the experience has ended.
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
                  <li>Slow: relaxed visual movement.</li>
                  <li>Normal: balanced animation speed.</li>
                  <li>Fast: quicker visual movement.</li>
                </ul>
              </div>
            </section>

            {/* =========================
                CUSTOMISATION
            ========================== */}
            <section
              id="customisation"
              className="border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Customisation Options
              </h2>

              {/* CUSTOM IMAGE */}
              <div
                id="custom-image"
                className="mt-8"
              >
                <h3 className="text-lg font-bold">
                  Custom Image
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Upload your own image to replace the default visual
                  element and keep the experience consistent with your
                  website branding.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-mute">
                  <li>Format: PNG or JPEG.</li>
                  <li>Use an optimised web image.</li>
                  <li>Transparent PNG files work well for isolated graphics.</li>
                </ul>
              </div>

              {/* CUSTOM SOUNDS */}
              <div
                id="custom-sounds"
                className="mt-8"
              >
                <h3 className="text-lg font-bold">
                  Custom Sounds
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Optional audio can be used to support key moments in
                  the visual experience.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-mute">
                  <li>
                    Use short, optimised audio files.
                  </li>

                  <li>
                    Keep sound optional for visitors.
                  </li>

                  <li>
                    Provide clear playback controls.
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
                  Upload a custom background image behind the interactive
                  area to match your campaign or website design.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-mute">
                  <li>Format: PNG, JPEG or WebP.</li>
                  <li>Recommended size: 1920 × 1080px.</li>
                  <li>Optimise large images before upload.</li>
                </ul>
              </div>
            </section>

            {/* =========================
                TRY IT
            ========================== */}
        

            {/* =========================
                PREVIOUS / NEXT
            ========================== */}
            <div
              className="
                grid gap-4 py-8
                sm:grid-cols-2
              "
            >
              {/* PREVIOUS */}
              <Link
                href="/documentation/instant-reveal"
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
                    Instant-Reveal
                  </p>
                </div>
              </Link>

              {/* NEXT */}
              <Link
                href="/documentation/whack-a-mole"
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
                   Whack-a-Mole
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

          {/* =========================
              RIGHT SIDEBAR
          ========================== */}
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
                    block text-sm
                    text-coral
                  "
                >
                  What is It?
                </a>

                <a
                  href="#how-it-works"
                  className="
                    block text-sm
                    text-navy-mute
                    transition
                    hover:text-coral
                  "
                >
                  How It Works
                </a>

                <a
                  href="#speed-options"
                  className="
                    block pl-3
                    text-sm
                    text-navy-mute
                    transition
                    hover:text-coral
                  "
                >
                  Speed Options
                </a>

                <a
                  href="#customisation"
                  className="
                    block text-sm
                    text-navy-mute
                    transition
                    hover:text-coral
                  "
                >
                  Customisation Options
                </a>

                <a
                  href="#custom-image"
                  className="
                    block pl-3
                    text-sm
                    text-navy-mute
                    transition
                    hover:text-coral
                  "
                >
                  Custom Image
                </a>

                <a
                  href="#custom-sounds"
                  className="
                    block pl-3
                    text-sm
                    text-navy-mute
                    transition
                    hover:text-coral
                  "
                >
                  Custom Sounds
                </a>

                <a
                  href="#background-image"
                  className="
                    block pl-3
                    text-sm
                    text-navy-mute
                    transition
                    hover:text-coral
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