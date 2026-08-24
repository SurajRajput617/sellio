import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ImageIcon,
  Info,
  Play,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function ProductCategoriesPage() {
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
                  3
                </span>


                <h1
                  className="
                  font-display text-4xl font-bold
                  tracking-tight
                  sm:text-5xl
                  "
                >
                  Product Categories
                </h1>

              </div>


              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Organize your Sellio competitions with product categories.
                Categories help customers discover competitions faster and
                create a cleaner browsing experience.
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
                  Categories are optional but recommended when your Sellio
                  store contains multiple competition types.
                </p>


              </div>


            </section>






            {/* ACCESS CATEGORY */}

            <section
              id="access"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="text-3xl font-bold">
                Open Product Categories
              </h2>


              <p className="mt-5 leading-8 text-navy-mute">
                From your Sellio admin dashboard, open the Product Categories
                section to manage your competition organisation.
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
                  Categories Dashboard
                </h3>


                <p className="mt-2 text-navy-mute">
                  View existing categories or create new categories for your
                  competitions.
                </p>


              </div>


            </section>






            {/* CREATE CATEGORY */}

            <section
              id="create"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="text-3xl font-bold">
                Create a New Category
              </h2>


              <p className="mt-5 text-navy-mute leading-8">
                Add categories that match the type of competitions available
                on your Sellio website.
              </p>


              <div className="mt-7 grid gap-4 sm:grid-cols-2">


                {[
                  "Category name",
                  "Short description",
                  "Category image",
                  "Display order",
                  "Category visibility",
                  "Competition assignment",
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
              id="image"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="text-3xl font-bold">
                Add Category Image
              </h2>


              <p className="mt-5 leading-8 text-navy-mute">
                Add visual images to make your categories easier for customers
                to identify.
              </p>


              <div
                className="
                mt-8 rounded-xl
                border border-dashed
                border-border
                bg-white
                p-12
                text-center
                "
              >

                <ImageIcon
                  className="
                  mx-auto h-10 w-10
                  text-coral
                  "
                />


                <h3 className="mt-4 font-bold">
                  Sellio Category Image Preview
                </h3>


                <p className="mt-2 text-sm text-navy-mute">
                  Demo image area. Replace this with your Sellio category
                  artwork.
                </p>


              </div>


            </section>







            {/* ASSIGN COMPETITIONS */}

            <section
              id="assign"
              className="scroll-mt-28 border-b border-border py-12"
            >

              <h2 className="text-3xl font-bold">
                Assign Competitions to Categories
              </h2>


              <p className="mt-5 leading-8 text-navy-mute">
                Connect competitions with the correct category so customers
                can easily browse related entries.
              </p>


              <div className="mt-7 space-y-4">


              {[
                "Open competition settings",
                "Select category option",
                "Choose one or multiple categories",
                "Save competition changes",
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

                  <p>
                    {item}
                  </p>

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
                Managing Product Categories
              </h2>



              <p className="mt-4 text-navy-mute">
                Watch the Sellio walkthrough for creating and managing
                categories.
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
                  title="Sellio Product Categories Guide"
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
                href="/documentation/instant-wins"
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
                  Add Instant Wins
                </p>

              </Link>




              <Link
                href="/documentation/hidden-vip-competitions"
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
                  Hidden VIP Competitions
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
                  href="#access"
                  className="block text-sm text-navy-mute"
                >
                  Open Categories
                </a>


                <a
                  href="#create"
                  className="block text-sm text-navy-mute"
                >
                  Create Category
                </a>


                <a
                  href="#image"
                  className="block text-sm text-navy-mute"
                >
                  Category Image
                </a>


                <a
                  href="#assign"
                  className="block text-sm text-navy-mute"
                >
                  Assign Competitions
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