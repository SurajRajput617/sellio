import Link from "next/link";

import {
  CheckCircle2,
  Image,
  Upload,
  Palette,
  ArrowRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function AddLogoPage() {

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


            <section className="scroll-mt-28">


              <p className="text-sm font-semibold text-coral">
                Customise Your Site
              </p>



              <div className="mt-4 flex items-center gap-4">


                <span
                  className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl bg-coral text-xl font-bold text-white
                  "
                >
                  ✦
                </span>



                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy sm:text-5xl
                  "
                >
                  Add Your Logo
                </h1>


              </div>




              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Upload your Sellio brand logo and create a
                professional identity across your website.
              </p>



            </section>









            {/* UPLOAD LOGO */}


            <section
              id="upload-logo"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <h2
                className="
                font-display text-3xl
                font-bold text-navy
                "
              >
                Upload Your Logo
              </h2>




              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Add your logo from your Sellio customization
                settings. Your logo will appear on your store
                header and customer pages.
              </p>





              <div className="mt-7 space-y-5">


                {[
                  "Open your Sellio dashboard.",
                  "Go to Site Customisation settings.",
                  "Upload your logo and save changes."
                ].map((item)=>(


                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >


                    <CheckCircle2
                      className="
                      mt-1 h-5 w-5
                      shrink-0
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









            {/* REQUIREMENTS */}



            <section
              id="requirements"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <h2
                className="
                font-display text-3xl
                font-bold text-navy
                "
              >
                Logo Requirements
              </h2>





              <div
                className="
                mt-7 grid gap-5
                sm:grid-cols-3
                "
              >



                <div
                  className="
                  rounded-xl
                  border border-border
                  bg-white p-5
                  "
                >

                  <Upload className="text-coral"/>


                  <h3 className="mt-3 font-bold">
                    File Type
                  </h3>


                  <p className="mt-2 text-sm text-navy-mute">
                    PNG or SVG recommended
                  </p>


                </div>







                <div
                  className="
                  rounded-xl
                  border border-border
                  bg-white p-5
                  "
                >


                  <Image className="text-coral"/>


                  <h3 className="mt-3 font-bold">
                    Quality
                  </h3>


                  <p className="mt-2 text-sm text-navy-mute">
                    High resolution images work best
                  </p>


                </div>







                <div
                  className="
                  rounded-xl
                  border border-border
                  bg-white p-5
                  "
                >


                  <Palette className="text-coral"/>


                  <h3 className="mt-3 font-bold">
                    Branding
                  </h3>


                  <p className="mt-2 text-sm text-navy-mute">
                    Keep your logo consistent
                  </p>


                </div>



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





              {/* PREVIOUS HOMEPAGE SETUP */}


              <a
                href="/documentation/hidden-vip-competitions"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                transition-colors
                hover:border-coral/40
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




                <p
                  className="
                  mt-2
                  font-display
                  text-lg
                  font-bold
                  text-navy
                  "
                >
                  Hidden-Vip-Competitions
                </p>



              </a>









              {/* NEXT */}


              <Link
                href="/documentation/site-colours"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                text-right
                transition-colors
                hover:border-coral/40
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
                  mt-2 flex
                  items-center
                  justify-end
                  gap-2
                  "
                >


                  <p
                    className="
                    font-display
                    text-lg
                    font-bold
                    text-navy
                    "
                  >
                    Choose Site Colours
                  </p>


                  <ArrowRight
                    className="
                    h-4 w-4
                    text-navy-mute
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
                text-xs font-bold
                uppercase tracking-wide
                text-navy-mute
                "
              >
                On This Page
              </p>



              <nav className="mt-5 space-y-4">


                <a
                  href="#upload-logo"
                  className="
                  block text-sm
                  font-semibold
                  text-coral
                  "
                >
                  Upload Logo
                </a>



                <a
                  href="#requirements"
                  className="
                  block text-sm
                  text-navy-mute
                  hover:text-coral
                  "
                >
                  Logo Requirements
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