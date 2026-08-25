import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Settings,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function WalletWithdrawalsPage() {

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
                  3
                </span>



                <h1
                  className="
                  font-display text-4xl
                  font-bold tracking-[-0.04em]
                  text-navy sm:text-5xl
                  "
                >
                  Wallet & Withdrawals
                </h1>


              </div>




              <p
                className="
                mt-5 max-w-3xl
                text-lg leading-8
                text-navy-mute
                "
              >
                Manage customer wallet credit, payments,
                withdrawals and payout settings inside Sellio.
              </p>


            </section>









            {/* WALLET OVERVIEW */}


            <section
              id="wallet"
              className="
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
                  Wallet Overview
                </h2>


              </div>



              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customer wallet stores available credit that
                can be used for purchases on your Sellio website.
              </p>


            </section>









            {/* WALLET CREDIT */}


            <section
              id="credit"
              className="
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
                How Users Get Wallet Credit
              </h2>




              <div className="mt-7 space-y-4">


                {[
                  "Refunds can be added to wallet balance.",
                  "Rewards can be credited to customer wallet.",
                  "Wallet top-up can be enabled."
                ].map((item) => (


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









            {/* WALLET PAYMENTS */}


            <section
              id="payments"
              className="
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
                Wallet Payments
              </h2>





              <div
                className="
                mt-7
                grid gap-5
                sm:grid-cols-2
                "
              >


                <div
                  className="
                  rounded-xl
                  border border-border
                  bg-white
                  p-5
                  "
                >


                  <h3 className="font-bold">
                    Full Wallet Payment
                  </h3>


                  <p
                    className="
                    mt-2
                    text-sm
                    text-navy-mute
                    "
                  >
                    Customers can complete orders using
                    their wallet balance.
                  </p>


                </div>





                <div
                  className="
                  rounded-xl
                  border border-border
                  bg-white
                  p-5
                  "
                >


                  <h3 className="font-bold">
                    Partial Wallet Payment
                  </h3>


                  <p
                    className="
                    mt-2
                    text-sm
                    text-navy-mute
                    "
                  >
                    Remaining amount can be paid using
                    another payment method.
                  </p>


                </div>


              </div>


            </section>









            {/* WITHDRAWING FUNDS */}


            <section
              id="withdraw"
              className="
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <ShieldCheck
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
                  Withdrawing Funds
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Customers can request withdrawals from wallet
                balance. Admin reviews and processes payouts.
              </p>


            </section>









            {/* REQUIREMENTS */}


            <section
              id="requirements"
              className="
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
                Withdrawal Requirements
              </h2>




              <div className="mt-7 space-y-4">


                {[
                  "Customer payout details must be completed.",
                  "Minimum withdrawal amount must be reached.",
                  "ID verification may be required before payout."
                ].map((item) => (


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
                        {/* USER WITHDRAWAL PROCESS */}


            <section
              id="process"
              className="
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
                User Withdrawal Process
              </h2>




              <div className="mt-7 space-y-4">


                {[
                  "Customer opens Account > Wallet.",
                  "Customer enters withdrawal amount.",
                  "Customer submits withdrawal request.",
                  "Admin reviews the request.",
                  "Payment is completed after approval."
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









            {/* ID VERIFICATION */}


            <section
              id="verification"
              className="
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

                <FileCheck
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
                  ID Verification
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Sellio can require customer identity verification
                before processing withdrawals. Customers can
                upload verification documents from their account.
              </p>



              <div className="mt-7 space-y-4">


                {[
                  "Verification is completed before payout approval.",
                  "Documents are visible only to authorised admins.",
                  "Customers can update verification details."
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









            {/* ADMIN MANAGEMENT */}


            <section
              id="admin"
              className="
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
                  Admin Managing Withdrawals
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Admins can view withdrawal requests, review
                customer details, check verification status and
                update payout status from the Sellio dashboard.
              </p>


            </section>









            {/* FAQ */}


            <section
              id="faq"
              className="
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
                FAQ
              </h2>




              <div
                className="
                mt-7
                space-y-5
                "
              >


                {[
                  {
                    q:"Do customers need verification for every withdrawal?",
                    a:"No. Verification is only required when enabled by the store admin. Once completed, customers can use the verified details for future withdrawals."
                  },
                  {
                    q:"Where can admins check withdrawal requests?",
                    a:"Admins can manage all withdrawal requests from the Sellio dashboard wallet and withdrawal section."
                  },
                  {
                    q:"Are customer documents secure?",
                    a:"Yes. Customer verification documents are private and accessible only to authorised admin users."
                  },
                  {
                    q:"Can customers change payout details?",
                    a:"Yes. Customers can update their payout information from their wallet settings."
                  },
                  {
                    q:"What happens after submitting a withdrawal?",
                    a:"The request is reviewed by admin and payment is completed after approval."
                  }
                ].map((item)=>(


                  <div
                    key={item.q}
                    className="
                    rounded-xl
                    border border-border
                    bg-white
                    p-5
                    "
                  >


                    <h3
                      className="
                      font-bold
                      text-navy
                      "
                    >
                      {item.q}
                    </h3>



                    <p
                      className="
                      mt-3
                      text-sm
                      leading-7
                      text-navy-mute
                      "
                    >
                      {item.a}
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
                href="/documentation/email-setup"
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
                  Email Setup
                </p>


              </Link>






              <Link
                href="/documentation/terms-conditions"
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
                    Add Terms & Conditions
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
                text-navy-mute
                "
              >
                On This Page
              </p>



              <nav className="mt-5 space-y-4">


                <a
                  href="#wallet"
                  className="text-sm text-coral"
                >
                  Wallet Overview
                </a>


                <a
                  href="#credit"
                  className="block text-sm text-navy-mute"
                >
                  Wallet Credit
                </a>


                <a
                  href="#payments"
                  className="block text-sm text-navy-mute"
                >
                  Wallet Payments
                </a>


                <a
                  href="#withdraw"
                  className="block text-sm text-navy-mute"
                >
                  Withdrawals
                </a>


                <a
                  href="#requirements"
                  className="block text-sm text-navy-mute"
                >
                  Requirements
                </a>


                <a
                  href="#process"
                  className="block text-sm text-navy-mute"
                >
                  Withdrawal Process
                </a>


                <a
                  href="#verification"
                  className="block text-sm text-navy-mute"
                >
                  ID Verification
                </a>


                <a
                  href="#admin"
                  className="block text-sm text-navy-mute"
                >
                  Admin
                </a>


                <a
                  href="#faq"
                  className="block text-sm text-navy-mute"
                >
                  FAQ
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