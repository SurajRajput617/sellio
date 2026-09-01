import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function TermsConditionsPage() {

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
                  4
                </span>




                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy sm:text-5xl
                  "
                >
                  Add Terms & Conditions
                </h1>


              </div>




              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Add your Sellio Terms & Conditions page to
                provide customers with important information
                about your store policies and rules.
              </p>


            </section>









            {/* ACCESS PAGE EDITOR */}


            <section
              id="editor"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <FileText
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
                  Access Pages Editor
                </h2>


              </div>





              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Open your Sellio dashboard and go to the
                Pages section. Select the Terms & Conditions
                page to edit your store policy content.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open your Sellio admin dashboard.",
                  "Navigate to Pages settings.",
                  "Select Terms & Conditions page."
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









            {/* ADD CONTENT */}


            <section
              id="content"
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
                Add Your Terms & Conditions Content
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Add your store policies, customer rules,
                payment information, returns policy and any
                important legal details using the Sellio editor.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Write your Terms & Conditions information.",
                  "Add store rules and customer responsibilities.",
                  "Review your content before publishing."
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
            








            {/* SAVE & PUBLISH */}


            <section
              id="publish"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div
                className="
                flex
                items-center
                gap-3
                "
              >


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
                  Save & Publish
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                After adding your Terms & Conditions content,
                save your changes. The page will become live
                on your Sellio website.
              </p>



              <div className="mt-7 space-y-4">


                {[
                  "Review your policy content.",
                  "Click save changes.",
                  "Check your live website page."
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









            {/* FOOTER VISIBILITY */}


            <section
              id="footer"
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
                Customer Access
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Once published, customers can access your
                Terms & Conditions page from your Sellio
                website footer.
              </p>



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
                href="/documentation/wallet-withdrawals"
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
                  Wallet & Withdrawals
                </p>


              </Link>








              {/* NEXT */}



              <Link
                href="/documentation/connect-social-accounts"
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
                  items-center
                  justify-end
                  gap-2
                  "
                >


                  <p className="font-bold">
                    Connect-Social-Accounts
                  </p>


                  <ArrowRight
                    className="
                    h-4 w-4
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
                  href="#editor"
                  className="
                  text-sm
                  text-coral
                  "
                >
                  Pages Editor
                </a>




                <a
                  href="#content"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Add Content
                </a>




                <a
                  href="#publish"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Save & Publish
                </a>




                <a
                  href="#footer"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Customer Access
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