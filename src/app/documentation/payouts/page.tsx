import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function PayoutsPage() {

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
                Additional Settings
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
                  5
                </span>



                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy
                  "
                >
                  Payouts
                </h1>


              </div>




              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Manage how customer rewards and balances are
                processed on your Sellio platform. Configure
                manual or automatic payout methods depending
                on your business requirements.
              </p>


            </section>









            {/* OVERVIEW */}


            <section
              id="overview"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <CreditCard
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
                  Payouts Overview
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Payouts allow you to send customer rewards,
                winnings, or wallet balances using your chosen
                payment process. Sellio gives you control over
                reviewing and completing payout requests.
              </p>




            </section>









            {/* MANUAL PAYOUTS */}


            <section
              id="manual"
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
                Manual Payouts (Default)
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Manual payouts allow you to review customer
                payout requests and complete payments yourself.
                This gives you full control before sending funds.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open payout requests from your Sellio dashboard.",
                  "Review customer payment details.",
                  "Confirm the payout amount.",
                  "Complete the payment manually.",
                  "Update the payout status."
                ].map((item,index)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <span
                      className="
                      flex h-6 w-6
                      items-center justify-center
                      rounded-full
                      bg-coral
                      text-xs
                      font-bold
                      text-white
                      "
                    >
                      {index + 1}
                    </span>


                    <p className="text-navy-mute">
                      {item}
                    </p>


                  </div>


                ))}


              </div>


            </section>









            {/* AUTOMATIC PAYOUTS */}


            <section
              id="automatic"
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
                Automatic Payouts
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Automatic payouts allow payments to be handled
                through connected payment services without
                manually processing every request.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Connect your supported payment provider.",
                  "Enable automatic payout processing.",
                  "Review payout settings before activation."
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
            
            {/* PAYMENT PROVIDER */}


            <section
              id="provider"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


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
                  Payment Provider Setup
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Connect your preferred payment service to
                support automatic payout processing. Make sure
                your account details are correctly configured
                before enabling automatic payouts.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open Sellio payment settings.",
                  "Choose your supported payment provider.",
                  "Connect your payment account.",
                  "Save your payout configuration."
                ].map((item,index)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <span
                      className="
                      flex h-6 w-6
                      items-center justify-center
                      rounded-full
                      bg-coral
                      text-xs
                      font-bold
                      text-white
                      "
                    >
                      {index + 1}
                    </span>


                    <p className="text-navy-mute">
                      {item}
                    </p>


                  </div>


                ))}


              </div>


            </section>









            {/* CUSTOMER PAYOUT PROCESS */}



            <section
              id="customer-process"
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
                Customer Payout Process
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customers can request payouts from their
                available balance. Admins can review requests
                and complete payments through the Sellio
                dashboard.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Customer submits a payout request.",
                  "Admin reviews customer details.",
                  "Payment is processed.",
                  "Payout status is updated."
                ].map((item,index)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <span
                      className="
                      flex h-6 w-6
                      items-center justify-center
                      rounded-full
                      bg-coral
                      text-xs
                      font-bold
                      text-white
                      "
                    >
                      {index + 1}
                    </span>


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
                href="/documentation/site-credit-wallets"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                "
              >


                <p className="text-xs uppercase text-navy-mute">
                  Previous
                </p>


                <p className="mt-2 font-bold">
                  Site Credit & Wallets
                </p>


              </Link>








              {/* NEXT */}



              <Link
                href="/documentation/safe-play-setting"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                text-right
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
                    Safe Play Setting
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
                  href="#overview"
                  className="
                  text-sm
                  text-coral
                  "
                >
                  Payouts Overview
                </a>



                <a
                  href="#manual"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Manual Payouts
                </a>




                <a
                  href="#automatic"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Automatic Payouts
                </a>




                <a
                  href="#provider"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Payment Provider
                </a>




                <a
                  href="#customer-process"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Customer Process
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