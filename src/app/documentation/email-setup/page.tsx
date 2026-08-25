import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Play,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function EmailSetupPage() {

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
                  2
                </span>


                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy sm:text-5xl
                  "
                >
                  Email Setup
                </h1>


              </div>



              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Configure your Sellio email settings to send
                professional notifications and keep customers
                updated.
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
                  text-sm font-bold
                  uppercase tracking-wide
                  text-coral
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
                Email Setup Walkthrough
              </h2>



              <div
                className="
                mt-8 rounded-2xl
                border border-border
                bg-black
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
                      Add your email tutorial video
                    </p>


                  </div>


                </div>


              </div>



            </section>









            {/* EMAIL SETTINGS */}


            <section
              id="email-settings"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Mail className="h-6 w-6 text-coral"/>


                <h2
                  className="
                  font-display text-3xl
                  font-bold
                  "
                >
                  Configure Email Settings
                </h2>


              </div>




              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Add your business email address and configure
                where Sellio sends important messages.
              </p>





              <div className="mt-7 space-y-4">


                {[
                  "Open Sellio dashboard.",
                  "Go to Email Settings.",
                  "Add your sender email address.",
                  "Save your changes."
                ].map((item)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <CheckCircle2
                      className="
                      mt-1
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









            {/* CUSTOMER EMAILS */}


            <section
              id="customer-emails"
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
                  font-display text-3xl
                  font-bold
                  "
                >
                  Customer Email Notifications
                </h2>


              </div>



              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Manage automatic emails customers receive
                after important actions.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Order confirmation emails.",
                  "Account notifications.",
                  "Customer updates."
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









            {/* ADMIN EMAILS */}


            <section
              id="admin-emails"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <h2
                className="
                font-display text-3xl
                font-bold
                "
              >
                Admin Notifications
              </h2>



              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Receive important Sellio alerts directly to
                your admin email.
              </p>


            </section>









            {/* EMAIL BRANDING */}


            <section
              id="branding"
              className="
              scroll-mt-28
              py-12
              "
            >


              <h2
                className="
                font-display text-3xl
                font-bold
                "
              >
                Email Branding
              </h2>



              <p
                className="
                mt-5 leading-8
                text-navy-mute
                "
              >
                Add your logo and keep email communication
                consistent with your Sellio brand.
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
                href="/documentation/connect-social-accounts"
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
                  Connect Your Social Accounts
                </p>


              </Link>








              {/* NEXT */}


              <Link
                href="/documentation/wallet-withdrawals"
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
                  mt-2
                  flex
                  justify-end
                  items-center
                  gap-2
                  "
                >


                  <p className="font-bold">
                    Wallet & Withdrawals
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
                  href="#email-settings"
                  className="block text-sm text-navy-mute"
                >
                  Email Settings
                </a>



                <a
                  href="#customer-emails"
                  className="block text-sm text-navy-mute"
                >
                  Customer Emails
                </a>



                <a
                  href="#admin-emails"
                  className="block text-sm text-navy-mute"
                >
                  Admin Notifications
                </a>



                <a
                  href="#branding"
                  className="block text-sm text-navy-mute"
                >
                  Email Branding
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