"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Gem,
  Info,
  Lightbulb,
  RotateCcw,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

export default function GemBoardPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedTiles, setSelectedTiles] = useState<number[]>([]);

  const toggleTile = (index: number) => {
    setSelectedTiles((current) => {
      if (current.includes(index)) {
        return current.filter((item) => item !== index);
      }

      return [...current, index];
    });
  };

  const resetDemo = () => {
    setSelectedTiles([]);
  };

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
            {/* ========================================
                HEADER
            ======================================== */}
            <section className="border-b border-border pb-8">
              <p className="text-xs font-semibold text-coral">
                Interactive Features
              </p>

              <h1 className="mt-3 text-4xl font-bold">
                Gem Board
              </h1>

              <p className="mt-4 max-w-3xl leading-7 text-navy-mute">
                An interactive visual experience where customers can
                explore a grid of tiles and discover branded visual
                content.
              </p>
            </section>

            {/* ========================================
                WHAT IS IT
            ======================================== */}
            <section
              id="what-is-it"
              className="scroll-mt-28 border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                What Is It?
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Gem Board is a grid-based interactive experience.
                Visitors select tiles to reveal visual elements while
                exploring your content.
              </p>

              <p className="mt-4 leading-7 text-navy-mute">
                The board can be styled to match your website with
                custom imagery, colors, sounds and backgrounds.
              </p>

              <div
                className="
                  mt-5 flex items-start gap-3
                  rounded-md
                  border border-border
                  bg-black/5
                  px-4 py-3
                "
              >
                <Info
                  className="
                    mt-0.5 h-4 w-4
                    shrink-0 text-coral
                  "
                />

                <p className="text-sm leading-6 text-navy-mute">
                  Preview your board before publishing to make sure
                  the visual layout works correctly across desktop,
                  tablet and mobile.
                </p>
              </div>
            </section>

            {/* ========================================
                HOW IT WORKS
            ======================================== */}
            <section
              id="how-it-works"
              className="scroll-mt-28 border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                How It Works
              </h2>

              <ol
                className="
                  mt-5 list-decimal
                  space-y-3 pl-5
                  leading-7
                  text-navy-mute
                "
              >
                <li>
                  Open the interactive feature from your dashboard.
                </li>

                <li>
                  Choose the board size that suits your page.
                </li>

                <li>
                  Add your branded graphics and visual assets.
                </li>

                <li>
                  Configure how the individual tiles appear.
                </li>

                <li>
                  Choose your animation and display settings.
                </li>

                <li>
                  Add optional sounds and a custom background.
                </li>

                <li>
                  Preview the board on desktop and mobile.
                </li>

                <li>
                  Save your changes when the experience looks correct.
                </li>
              </ol>

              <div
                className="
                  mt-6 flex items-start gap-3
                  rounded-md
                  border border-border
                  bg-black/5
                  px-4 py-3
                "
              >
                <Info
                  className="
                    mt-0.5 h-4 w-4
                    shrink-0 text-navy-mute
                  "
                />

                <p className="text-sm leading-6 text-navy-mute">
                  Test the complete visual sequence whenever you
                  change the grid, images, animations or responsive
                  settings.
                </p>
              </div>
            </section>

            {/* ========================================
                CUSTOMISATION OPTIONS
            ======================================== */}
            <section
              id="customisation"
              className="scroll-mt-28 border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Customisation Options
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Customise your Gem Board so the experience fits
                naturally with your website branding and page design.
              </p>

              {/* NUMBER OF TILES */}
              <div
                id="number-of-tiles"
                className="scroll-mt-28 mt-8"
              >
                <h3 className="text-lg font-bold">
                  Number of Tiles
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Choose how many visual tiles appear inside the
                  interactive board.
                </p>

                <ul
                  className="
                    mt-4 list-disc
                    space-y-2 pl-5
                    text-navy-mute
                  "
                >
                  <li>3 × 3 Board</li>
                  <li>4 × 4 Board</li>
                  <li>5 × 5 Board</li>
                  <li>6 × 6 Board</li>
                </ul>

                <div
                  className="
                    mt-6 flex items-start gap-3
                    rounded-md
                    border border-amber-900/20
                    bg-amber-950/10
                    px-4 py-3
                  "
                >
                  <Lightbulb
                    className="
                      mt-0.5 h-4 w-4
                      shrink-0 text-amber-600
                    "
                  />

                  <p className="text-sm leading-6 text-navy-mute">
                    Smaller grids are usually easier to interact with
                    on mobile devices. Always preview larger layouts
                    at multiple screen sizes.
                  </p>
                </div>
              </div>

              {/* CUSTOM SOUNDS */}
              <div
                id="custom-sounds"
                className="scroll-mt-28 mt-10"
              >
                <h3 className="text-lg font-bold">
                  Custom Sounds
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Add optional sounds to support visual interactions
                  within your Gem Board.
                </p>

                <ul
                  className="
                    mt-4 list-disc
                    space-y-2 pl-5
                    leading-7
                    text-navy-mute
                  "
                >
                  <li>
                    Interaction Sound: Plays when a visitor selects
                    a tile.
                  </li>

                  <li>
                    Complete Sound: Plays when the visual sequence
                    finishes.
                  </li>

                  <li>
                    Keep audio files short and optimised for the web.
                  </li>

                  <li>
                    Give visitors control over audio playback.
                  </li>
                </ul>
              </div>

              {/* BACKGROUND IMAGE */}
              <div
                id="background-image"
                className="scroll-mt-28 mt-10"
              >
                <h3 className="text-lg font-bold">
                  Background Image
                </h3>

                <p className="mt-3 leading-7 text-navy-mute">
                  Upload a custom background behind your Gem Board
                  to match the rest of your website.
                </p>

                <ul
                  className="
                    mt-4 list-disc
                    space-y-2 pl-5
                    leading-7
                    text-navy-mute
                  "
                >
                  <li>Format: PNG, JPEG or WebP.</li>

                  <li>
                    Recommended size: 1920 × 1080px.
                  </li>

                  <li>
                    Compress large images before uploading.
                  </li>

                  <li>
                    Maintain enough contrast around interactive
                    elements.
                  </li>
                </ul>
              </div>
            </section>

            {/* ========================================
                TEST GEM BOARD
            ======================================== */}
            <section
              id="test-gem-board"
              className="scroll-mt-28 border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Want to try it first?
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Use the visual demo below to see how a Gem Board
                interaction can appear directly inside your page.
              </p>

              {/* TEST BUTTON */}
              <button
                type="button"
                onClick={() => setDemoOpen((current) => !current)}
                aria-expanded={demoOpen}
                aria-controls="gem-board-demo"
                className="
                  mt-5 flex w-full
                  items-center justify-between
                  rounded-xl
                  border border-border
                  px-5 py-5
                  text-left
                  text-sm font-semibold
                  transition-all
                  duration-200
                  hover:border-coral
                  hover:text-coral
                "
              >
                <span>
                  Test Gem Board
                </span>

                <ChevronDown
                  className={`
                    h-4 w-4
                    transition-transform
                    duration-300
                    ${demoOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* ======================================
                  INLINE DEMO
              ====================================== */}
              {demoOpen && (
                <div
                  id="gem-board-demo"
                  className="
                    mt-5 overflow-hidden
                    rounded-2xl
                    border border-border
                  "
                >
                  {/* DEMO TOP BAR */}
                  <div
                    className="
                      flex flex-col gap-4
                      border-b border-border
                      px-5 py-5
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      sm:px-6
                    "
                  >
                    <div>
                      <h3 className="font-bold">
                        Gem Board Demo
                      </h3>

                      <p className="mt-1 text-sm text-navy-mute">
                        Select tiles to preview the visual interaction.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={resetDemo}
                      className="
                        flex w-fit
                        items-center gap-2
                        rounded-lg
                        border border-border
                        px-3 py-2
                        text-xs font-semibold
                        transition
                        hover:border-coral
                        hover:text-coral
                      "
                    >
                      <RotateCcw className="h-3.5 w-3.5" />

                      Reset Demo
                    </button>
                  </div>

                  {/* DEMO BODY */}
                  <div className="p-5 sm:p-8">
                    {/* STATUS */}
                    <div
                      className="
                        mb-3 flex
                        items-center
                        justify-between
                      "
                    >
                      <p className="text-sm font-semibold">
                        Demo Progress
                      </p>

                      <p className="text-sm text-navy-mute">
                        {selectedTiles.length} of 9 selected
                      </p>
                    </div>

                    {/* PROGRESS BAR */}
                    <div
                      className="
                        mb-8 h-2
                        overflow-hidden
                        rounded-full
                        bg-black/10
                      "
                    >
                      <div
                        className="
                          h-full
                          rounded-full
                          bg-coral
                          transition-all
                          duration-300
                        "
                        style={{
                          width: `${
                            (selectedTiles.length / 9) * 100
                          }%`,
                        }}
                      />
                    </div>

                    {/* BOARD */}
                    <div
                      className="
                        mx-auto
                        grid max-w-lg
                        grid-cols-3
                        gap-3
                        sm:gap-4
                      "
                    >
                      {Array.from({ length: 9 }).map(
                        (_, index) => {
                          const selected =
                            selectedTiles.includes(index);

                          return (
                            <button
                              key={index}
                              type="button"
                              onClick={() => toggleTile(index)}
                              aria-pressed={selected}
                              className={`
                                group
                                aspect-square
                                overflow-hidden
                                rounded-xl
                                border
                                transition-all
                                duration-200
                                focus:outline-none
                                focus:ring-2
                                focus:ring-coral/30
                                ${
                                  selected
                                    ? "border-coral bg-coral/10"
                                    : "border-border bg-paper hover:-translate-y-0.5 hover:border-coral"
                                }
                              `}
                            >
                              <div
                                className="
                                  flex h-full
                                  flex-col
                                  items-center
                                  justify-center
                                  p-3
                                "
                              >
                                {selected ? (
                                  <>
                                    <div
                                      className="
                                        flex h-12 w-12
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-coral/10
                                      "
                                    >
                                      <Gem
                                        className="
                                          h-6 w-6
                                          text-coral
                                        "
                                      />
                                    </div>

                                    <span
                                      className="
                                        mt-3
                                        text-xs
                                        font-semibold
                                        text-coral
                                      "
                                    >
                                      Gem
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <div
                                      className="
                                        flex h-11 w-11
                                        items-center
                                        justify-center
                                        rounded-full
                                        border border-border
                                        text-sm font-bold
                                        transition
                                        group-hover:border-coral
                                        group-hover:text-coral
                                      "
                                    >
                                      {index + 1}
                                    </div>

                                    <span
                                      className="
                                        mt-3
                                        text-xs
                                        text-navy-mute
                                      "
                                    >
                                      Select Tile
                                    </span>
                                  </>
                                )}
                              </div>
                            </button>
                          );
                        }
                      )}
                    </div>

                    {/* DEMO RESULT */}
                    <div
                      className="
                        mx-auto mt-8
                        max-w-lg
                        rounded-xl
                        border border-border
                        bg-black/5
                        px-5 py-4
                      "
                    >
                      {selectedTiles.length === 0 && (
                        <p
                          className="
                            text-center
                            text-sm
                            leading-6
                            text-navy-mute
                          "
                        >
                          Select any tile above to start the visual
                          demo.
                        </p>
                      )}

                      {selectedTiles.length > 0 &&
                        selectedTiles.length < 9 && (
                          <div className="text-center">
                            <Gem
                              className="
                                mx-auto h-5 w-5
                                text-coral
                              "
                            />

                            <p className="mt-2 text-sm font-semibold">
                              {selectedTiles.length}{" "}
                              {selectedTiles.length === 1
                                ? "tile"
                                : "tiles"}{" "}
                              selected
                            </p>

                            <p
                              className="
                                mt-1 text-xs
                                text-navy-mute
                              "
                            >
                              Continue selecting tiles to preview
                              the complete board.
                            </p>
                          </div>
                        )}

                      {selectedTiles.length === 9 && (
                        <div className="text-center">
                          <div
                            className="
                              mx-auto flex
                              h-11 w-11
                              items-center
                              justify-center
                              rounded-full
                              bg-coral/10
                            "
                          >
                            <Gem
                              className="
                                h-6 w-6
                                text-coral
                              "
                            />
                          </div>

                          <p className="mt-3 font-bold">
                            Demo Complete
                          </p>

                          <p
                            className="
                              mt-1 text-sm
                              leading-6
                              text-navy-mute
                            "
                          >
                            You have previewed all nine visual tiles.
                            Use Reset Demo to try the board again.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
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
              <Link
                href="/documentation/plinko"
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
                    Plinko
                  </p>
                </div>
              </Link>

              <Link
                href="/documentation/truenorth-setup"
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
                    items-center
                    justify-end
                    gap-2
                  "
                >
                  <p className="font-semibold">
                    True North-Setup
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
                  className="
                    block text-sm
                    text-coral
                  "
                >
                  What Is It?
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
                  href="#number-of-tiles"
                  className="
                    block pl-3
                    text-sm
                    text-navy-mute
                    transition
                    hover:text-coral
                  "
                >
                  Number of Tiles
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

                <a
                  href="#test-gem-board"
                  className="
                    block text-sm
                    text-navy-mute
                    transition
                    hover:text-coral
                  "
                >
                  Test Gem Board
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