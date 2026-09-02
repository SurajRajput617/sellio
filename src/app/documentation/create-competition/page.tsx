import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Info,
  Play,
  Rocket,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function CreateCompetitionPage() {
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


          {/* CONTENT */}

          <article className="min-w-0">


            {/* HEADER */}

            <section>

              <p className="text-sm font-semibold text-coral">
                Create Your First Raffle
              </p>


              <h1
                className="
                mt-4
                font-display text-5xl
                font-bold
                tracking-[-0.04em]
                "
              >
                Create a Competition
              </h1>


              <p className="mt-5 max-w-3xl text-lg leading-8 text-navy-mute">
                Build a complete Competition & Raffle Management System for
                Sellio. Create, manage, promote and launch professional
                competitions with a powerful admin system and premium customer
                experience.
              </p>


            </section>




            {/* INFO */}

            <section className="pt-8">

              <div
                className="
                flex gap-4
                rounded-xl
                border border-border
                bg-white
                p-5
                "
              >

                <Info className="h-5 w-5 text-coral" />

                <p className="text-sm leading-6 text-navy-mute">
                  The competition system integrates with Sellio branding,
                  design system, UI components, typography and customer
                  experience.
                </p>


              </div>

            </section>






            {/* ADMIN PANEL */}


            <section
              id="admin"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="text-3xl font-bold">
                Admin Panel
              </h2>


              <p className="mt-4 text-navy-mute">
                Manage all competitions from a dedicated Sellio dashboard.
              </p>


              <div className="mt-6 grid gap-3 sm:grid-cols-2">


                {[
                  "Create competitions",
                  "Edit competitions",
                  "Duplicate competitions",
                  "Archive competitions",
                  "Delete competitions",
                  "Manage active competitions",
                  "Manage upcoming competitions",
                  "View sales analytics"
                ].map(item=>(
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







            {/* BUILDER */}


            <section
              id="builder"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="text-3xl font-bold">
                Competition Creation Builder
              </h2>


              <p className="mt-4 text-navy-mute">
                Create competitions using flexible configuration fields.
              </p>


              <div className="mt-6 grid gap-3 sm:grid-cols-2">


              {[
              "Competition title",
              "Subtitle",
              "Competition description",
              "Prize information",
              "Prize value",
              "Cash alternative",
              "Ticket price",
              "Discount ticket price",
              "Maximum ticket quantity",
              "Customer ticket limit",
              "Order ticket limit",
              "Number of winners",
              "Competition category",
              "Game type"
              ].map(item=>(
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








            {/* GAME TYPES */}


            <section className="py-12 border-b border-border">


              <h2 className="text-3xl font-bold">
                Game Types
              </h2>


              <div className="mt-6 space-y-4">


                <div className="rounded-xl border bg-white p-5">
                  <h3 className="font-bold">
                    Standard Raffle
                  </h3>
                  <p className="mt-2 text-navy-mute">
                    Random ticket assignment system.
                  </p>
                </div>


                <div className="rounded-xl border bg-white p-5">
                  <h3 className="font-bold">
                    Sequential Raffle
                  </h3>
                  <p className="mt-2 text-navy-mute">
                    Ticket numbers assigned in order.
                  </p>
                </div>


                <div className="rounded-xl border bg-white p-5">
                  <h3 className="font-bold">
                    Instant Win Games
                  </h3>

                  <ul className="mt-3 space-y-2 text-navy-mute">
                    <li>Spin wheel</li>
                    <li>Scratch card</li>
                    <li>Mystery box</li>
                    <li>Reveal prize experience</li>
                  </ul>

                </div>


              </div>


            </section>








            {/* MEDIA */}


            <section
              id="media"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="text-3xl font-bold">
                Competition Media Management
              </h2>


              <div className="mt-6 grid gap-3 sm:grid-cols-2">


              {[
              "Featured image 1080x1080",
              "Competition gallery images",
              "Hero slider image 1920x1080",
              "Portrait image 600x800",
              "Competition video",
              "Image cropping and optimization"
              ].map(item=>(
                <div
                key={item}
                className="rounded-xl border bg-white p-4"
                >
                  {item}
                </div>
              ))}


              </div>


            </section>








            {/* TICKETS */}


            <section
            id="tickets"
            className="scroll-mt-28 border-b border-border py-12"
            >

            <h2 className="text-3xl font-bold">
              Ticket Management System
            </h2>


            <div className="mt-6 space-y-3">


            {[
            "Generate unique ticket numbers",
            "Random ticket allocation",
            "Sequential ticket allocation",
            "Real-time availability",
            "Sold ticket counter",
            "Remaining ticket display",
            "Customer ticket history",
            "Purchase tracking"
            ].map(item=>(
              <div
              key={item}
              className="flex gap-3"
              >

              <CheckCircle2 className="h-5 w-5 text-coral"/>

              <span>{item}</span>

              </div>
            ))}


            </div>


            </section>









            {/* CUSTOMER */}


            <section
            id="customer"
            className="scroll-mt-28 border-b border-border py-12"
            >

            <h2 className="text-3xl font-bold">
              Customer Experience
            </h2>


            <p className="mt-4 text-navy-mute">
              Provide a premium competition marketplace experience.
            </p>


            <div className="mt-6 rounded-xl border bg-white p-6">


            <ul className="space-y-3 text-navy-mute">

            <li>Competition cards</li>
            <li>Prize showcase</li>
            <li>Countdown timer</li>
            <li>Ticket progress bar</li>
            <li>Quick purchase</li>
            <li>Secure checkout flow</li>

            </ul>


            </div>


            </section>









            {/* VIDEO */}


            <section
            id="video"
            className="scroll-mt-28 py-12"
            >

            <div className="flex gap-3">

            <Play className="text-coral"/>

            <span className="font-bold text-coral">
              VIDEO GUIDE
            </span>

            </div>


            <h2 className="mt-4 text-3xl font-bold">
              How to Create a Competition
            </h2>


            <div className="mt-6 aspect-video rounded-xl overflow-hidden bg-black">

              <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Sellio Competition Guide"
              allowFullScreen
              />

              

            </div>


            </section>





        
            {/* ================================================= */}
            {/* PREVIOUS / NEXT                                   */}
            {/* ================================================= */}

            <div className="grid gap-4 py-10 sm:grid-cols-2">
              <Link
                href="/documentation/payment-gateway"
                className="group rounded-2xl border border-border bg-white p-5 transition-colors hover:border-coral/40"
              >
                <span className="flex items-center gap-2 text-xs font-bold uppercase text-navy-mute">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Previous
                </span>

                <p className="mt-2 font-display text-lg font-bold">
                Payment-Gateway
                </p>
              </Link>

              <Link
                href="/documentation/instant-wins"
                className="group rounded-2xl border border-border bg-white p-5 text-right transition-colors hover:border-coral/40"
              >
                <span className="flex items-center justify-end gap-2 text-xs font-bold uppercase text-navy-mute">
                  Next

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>

                <p className="mt-2 font-display text-lg font-bold">
                  Instant-Wins
                </p>
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

            <a href="#admin" className="block text-sm text-navy-mute">
              Admin Panel
            </a>

            <a href="#builder" className="block text-sm text-navy-mute">
              Competition Builder
            </a>

            <a href="#media" className="block text-sm text-navy-mute">
              Media Management
            </a>

            <a href="#tickets" className="block text-sm text-navy-mute">
              Ticket System
            </a>

            <a href="#customer" className="block text-sm text-navy-mute">
              Customer Experience
            </a>

            <a href="#video" className="block text-sm text-navy-mute">
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