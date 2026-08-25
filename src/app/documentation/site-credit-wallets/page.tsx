import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Wallet,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function SiteCreditWalletsPage() {

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
                  4
                </span>




                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy
                  "
                >
                  Site Credit & Wallets
                </h1>


              </div>




              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Manage customer site credit, wallet balances
                and rewards on your Sellio website. Configure
                how customers earn credit and how wallet
                features work.
              </p>


            </section>









            {/* EARN SITE CREDIT */}



            <section
              id="earn-credit"
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
                  How Customers Can Earn Site Credit
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customers can receive site credit through
                different reward methods available on your
                Sellio platform.
              </p>






              {/* INSTANT WINS */}


              <div className="mt-8">


                <h3 className="text-xl font-bold">
                  Instant Wins
                </h3>



                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Add site credit as a reward option for
                  instant win prizes. Customers can receive
                  credit directly into their wallet after
                  winning.
                </p>


              </div>







              {/* CREDIT COMPETITIONS */}



              <div className="mt-8">


                <h3 className="text-xl font-bold">
                  Site Credit Competitions
                </h3>



                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Create competitions where the prize is
                  awarded as site credit. Winners can use
                  this balance for future purchases.
                </p>


              </div>








              {/* CASHBACK */}



              <div className="mt-8">


                <h3 className="text-xl font-bold">
                  Cashback
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Enable cashback rewards so customers earn
                  site credit based on their purchases.
                </p>


              </div>



            </section>









            {/* WITHDRAW WALLET */}



            <section
              id="withdraw-wallet"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Wallet
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
                  Allow Customers to Withdraw from Wallet
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Enable wallet withdrawals so customers can
                request payouts from their available wallet
                balance.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open Sellio admin settings.",
                  "Go to checkout wallet options.",
                  "Enable customer wallet withdrawals.",
                  "Save your changes."
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
                        {/* ADD SITE CREDIT */}


            <section
              id="add-credit"
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
                Add Site Credit to a Customer Account
              </h2>



              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Admins can manually add site credit to a
                customer's Sellio wallet when required.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open the customer profile from your dashboard.",
                  "Select the wallet or credit option.",
                  "Choose Add Site Credit.",
                  "Enter the credit amount.",
                  "Save the changes."
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




              <div
                className="
                mt-7
                rounded-xl
                border border-border
                bg-white
                p-5
                "
              >

                <p className="font-bold">
                  Note
                </p>


                <p
                  className="
                  mt-2
                  text-sm
                  text-navy-mute
                  "
                >
                  Added site credit can be used by customers
                  during future purchases on your Sellio store.
                </p>


              </div>


            </section>









            {/* SETUP CASHBACK */}


            <section
              id="cashback"
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
                Set Up Cashback
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Create cashback rewards to encourage repeat
                purchases and reward customers with wallet
                credit.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open Sellio settings.",
                  "Go to cashback options.",
                  "Choose the cashback percentage.",
                  "Save your cashback settings."
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









            {/* WALLET ICON */}


            <section
              id="wallet-icon"
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
                Change Wallet Icon (Optional)
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customize the wallet icon displayed to
                customers in your Sellio website interface.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open website branding settings.",
                  "Select wallet appearance options.",
                  "Upload or choose your icon.",
                  "Save changes."
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


              <Link
                href="/documentation/free-entry"
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
                  Free Entry
                </p>


              </Link>





              <Link
                href="/documentation/payouts"
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
                    Payouts
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
                uppercase
                tracking-wide
                text-navy-mute
                "
              >
                On This Page
              </p>




              <nav className="mt-5 space-y-4">


                <a
                  href="#earn-credit"
                  className="text-sm text-coral"
                >
                  Earn Site Credit
                </a>


                <a
                  href="#withdraw-wallet"
                  className="block text-sm text-navy-mute"
                >
                  Wallet Withdrawals
                </a>


                <a
                  href="#add-credit"
                  className="block text-sm text-navy-mute"
                >
                  Add Site Credit
                </a>


                <a
                  href="#cashback"
                  className="block text-sm text-navy-mute"
                >
                  Cashback
                </a>


                <a
                  href="#wallet-icon"
                  className="block text-sm text-navy-mute"
                >
                  Wallet Icon
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