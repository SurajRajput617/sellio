import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Play,
  Settings,
  Share2,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function ConnectSocialAccountsPage() {

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






          {/* MAIN ARTICLE */}

          <article className="min-w-0">





            {/* HEADER */}

            <section>

              <p className="text-sm font-semibold text-coral">
                Essential Settings
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
                  1
                </span>



                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy sm:text-5xl
                  "
                >
                  Connect Your Social Accounts
                </h1>


              </div>




              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Connect your social profiles with Sellio so
                customers can follow your brand and stay updated.
              </p>


            </section>









            {/* VIDEO GUIDE */}


            <section
              id="video"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >

              <div className="flex items-center gap-3">

                <Play className="h-5 w-5 text-coral"/>


                <p
                  className="
                  text-sm font-bold uppercase
                  tracking-wide text-coral
                  "
                >
                  Video Guide
                </p>


              </div>




              <h2
                className="
                mt-4 font-display
                text-3xl font-bold
                "
              >
                Connect Social Accounts
              </h2>




              <div
                className="
                mt-8 overflow-hidden
                rounded-2xl
                border border-border
                bg-navy
                "
              >

                <div
                  className="
                  aspect-video
                  flex items-center
                  justify-center
                  "
                >

                  <div className="text-center">


                    <Play
                      className="
                      mx-auto
                      h-14 w-14
                      text-coral
                      "
                    />


                    <p className="mt-4 text-white">
                      Add your social setup video
                    </p>


                  </div>


                </div>


              </div>


            </section>









            {/* SETTINGS */}


            <section
              id="settings"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Settings className="h-6 w-6 text-coral"/>


                <h2
                  className="
                  font-display
                  text-3xl
                  font-bold
                  "
                >
                  Open Social Settings
                </h2>


              </div>



              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Open your Sellio dashboard and go to the
                social account settings section.
              </p>


            </section>









            {/* ADD SOCIAL ACCOUNTS */}



            <section
              id="social"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Share2 className="h-6 w-6 text-coral"/>


                <h2
                  className="
                  font-display
                  text-3xl
                  font-bold
                  "
                >
                  Add Social Accounts
                </h2>


              </div>






              <div
                className="
                mt-8 grid gap-5
                sm:grid-cols-3
                "
              >


                {[
                  {
                    name:"Facebook",
                    icon:"F",
                    text:"Add your Facebook page link."
                  },
                  {
                    name:"Instagram",
                    icon:"IG",
                    text:"Connect your Instagram profile."
                  },
                  {
                    name:"YouTube",
                    icon:"YT",
                    text:"Add your YouTube channel."
                  }

                ].map((item)=>(


                  <div
                    key={item.name}
                    className="
                    rounded-xl
                    border border-border
                    bg-white
                    p-5
                    "
                  >


                    <div
                      className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-lg
                      bg-coral/10
                      font-bold
                      text-coral
                      "
                    >
                      {item.icon}
                    </div>



                    <h3 className="mt-4 font-bold">
                      {item.name}
                    </h3>



                    <p
                      className="
                      mt-2 text-sm
                      text-navy-mute
                      "
                    >
                      {item.text}
                    </p>


                  </div>


                ))}


              </div>


            </section>









            {/* COMPLETE */}



            <section
              id="complete"
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
                Complete Setup
              </h2>




              <div className="mt-7 space-y-4">


                {[
                  "Add your social media URLs.",
                  "Check all links are correct.",
                  "Save your settings.",
                  "Your social icons are now live."
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
                href="/documentation/site-colours"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                hover:border-coral/40
                "
              >

                <p className="text-xs uppercase text-navy-mute">
                  Previous
                </p>


                <p className="mt-2 font-bold">
                  Choose Site Colours
                </p>


              </Link>








              {/* NEXT EMAIL SETUP */}



              <Link
                href="/documentation/email-setup"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                text-right
                hover:border-coral/40
                "
              >


                <p className="text-xs uppercase text-navy-mute">
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

                  <p className="font-bold">
                    Email Setup
                  </p>


                  <ArrowRight className="h-4 w-4"/>


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
                text-xs font-bold
                uppercase tracking-wide
                text-navy-mute
                "
              >
                On This Page
              </p>



              <nav className="mt-5 space-y-4">


                <a
                  href="#video"
                  className="text-sm text-coral"
                >
                  Video Guide
                </a>



                <a
                  href="#settings"
                  className="block text-sm text-navy-mute"
                >
                  Social Settings
                </a>



                <a
                  href="#social"
                  className="block text-sm text-navy-mute"
                >
                  Social Accounts
                </a>



                <a
                  href="#complete"
                  className="block text-sm text-navy-mute"
                >
                  Complete Setup
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