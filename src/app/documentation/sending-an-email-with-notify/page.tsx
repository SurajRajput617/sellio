"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  Mail,
  AlertTriangle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


const sections = [
  {
    id: "setup",
    label: "How to Send an Email",
  },
  {
    id: "details",
    label: "Email Details",
  },
  {
    id: "preview",
    label: "Email Preview",
  },
  {
    id: "related",
    label: "Related Guides",
  },
];


export default function SendingEmailNotifyPage() {


  const [activeSection, setActiveSection] = useState("setup");


  useEffect(() => {


    const handleScroll = () => {


      let current = sections[0].id;


      sections.forEach((item) => {


        const element =
          document.getElementById(item.id);


        if (!element) return;


        if (
          element.offsetTop <=
          window.scrollY + 160
        ) {

          current = item.id;

        }


      });


      setActiveSection(current);

    };



    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );



    handleScroll();



    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, []);



  return (

    <>

      <Navbar />


      <main
        className="
        min-h-screen
        bg-paper
        text-navy
        "
      >


        <div
          className="
          container-xl
          grid
          gap-10
          py-12
          lg:grid-cols-[250px_minmax(0,1fr)_210px]
          "
        >



          <DocumentationSidebar />



          <article
            className="
            min-w-0
            "
          >



            <section
              className="
              border-b
              border-border
              pb-8
              "
            >


              <p
                className="
                text-xs
                font-semibold
                text-coral
                "
              >
                Sellio Marketing Tools
              </p>



              <h1
                className="
                mt-3
                text-3xl
                font-bold
                "
              >
                Sending an Email with Notify
              </h1>



              <p
                className="
                mt-4
                max-w-3xl
                text-sm
                leading-7
                text-navy-mute
                "
              >
                Send marketing emails to your Sellio customers
                using connected email tools. Create updates,
                promotions, and customer messages directly from
                your dashboard.
              </p>



            </section>





            {/* Demo Video */}


            <div
              className="
              mt-8
              overflow-hidden
              rounded-xl
              border
              border-border
              bg-black
              "
            >


              <div
                className="
                aspect-video
                "
              >


                <video
                  controls
                  className="
                  h-full
                  w-full
                  object-cover
                  "
                  poster="/images/email-demo-thumbnail.png"
                >


                  <source
                    src="/videos/email-notify-demo.mp4"
                    type="video/mp4"
                  />


                  Your browser does not support video playback.


                </video>


              </div>


            </div>





            <div
              className="
              mt-6
              flex
              items-start
              gap-3
              rounded-lg
              border
              border-border
              bg-red-500/10
              px-5
              py-4
              "
            >


              <AlertTriangle
                className="
                mt-0.5
                h-5
                w-5
                text-coral
                "
              />


              <p
                className="
                text-sm
                leading-6
                text-navy
                "
              >
                You need to connect an email marketing provider
                before sending campaigns from Sellio.
              </p>


            </div>







            <section
              id="setup"
              className="
              scroll-mt-28
              border-b
              border-border
              py-8
              "
            >



              <h2
                className="
                text-xl
                font-bold
                "
              >
                How to Send an Email
              </h2>




              <p
                className="
                mt-4
                text-sm
                leading-7
                text-navy-mute
                "
              >
                Follow these steps to send an email campaign to
                your selected customers.
              </p>




              <ol
                className="
                mt-5
                space-y-3
                text-sm
                leading-6
                text-navy-mute
                "
              >


                <li>
                  1. Open your Sellio dashboard.
                </li>


                <li>
                  2. Go to Marketing tools.
                </li>


                <li>
                  3. Select your customer audience.
                </li>


                <li>
                  4. Choose the email campaign option.
                </li>


                <li>
                  5. Add your email information.
                </li>


                <li>
                  6. Review and send your campaign.
                </li>


              </ol>





              <div
                className="
                mt-6
                rounded-lg
                border
                border-border
                bg-black/5
                px-5
                py-4
                "
              >


                <div
                  className="
                  flex
                  items-start
                  gap-3
                  "
                >


                  <Info
                    className="
                    mt-1
                    h-4
                    w-4
                    text-coral
                    "
                  />



                  <p
                    className="
                    text-sm
                    leading-6
                    text-navy-mute
                    "
                  >
                    Make sure your customer list and email provider
                    connection are ready before sending.
                  </p>


                </div>


              </div>



            </section>







            <section
              id="details"
              className="
              scroll-mt-28
              border-b
              border-border
              py-8
              "
            >


              <h2
                className="
                text-xl
                font-bold
                "
              >
                Email Details
              </h2>



              <p
                className="
                mt-4
                text-sm
                leading-7
                text-navy-mute
                "
              >
                Add the information customers will see inside
                your email message.
              </p>




              <ul
                className="
                mt-5
                space-y-3
                text-sm
                leading-6
                text-navy-mute
                "
              >


                <li>
                  • Email title
                </li>


                <li>
                  • Subject line
                </li>


                <li>
                  • Customer message
                </li>


                <li>
                  • Promotional links or offers
                </li>


                <li>
                  • Call-to-action button
                </li>


              </ul>


            </section>
                        <section
              id="preview"
              className="
              scroll-mt-28
              border-b
              border-border
              py-8
              "
            >


              <h2
                className="
                text-xl
                font-bold
                "
              >
                Email Preview
              </h2>



              <p
                className="
                mt-4
                text-sm
                leading-7
                text-navy-mute
                "
              >
                Preview your email campaign before sending it to
                customers.
              </p>




              <div
                className="
                mt-6
                rounded-xl
                border
                border-border
                bg-white
                p-5
                "
              >



                <div
                  className="
                  flex
                  items-center
                  gap-3
                  border-b
                  border-border
                  pb-4
                  "
                >


                  <Mail
                    className="
                    h-5
                    w-5
                    text-coral
                    "
                  />



                  <p
                    className="
                    font-semibold
                    "
                  >
                    Sellio Email Campaign Preview
                  </p>


                </div>





                <div
                  className="
                  mt-5
                  rounded-lg
                  bg-black/5
                  p-5
                  "
                >



                  <p
                    className="
                    text-sm
                    font-bold
                    "
                  >
                    Summer Promotion Update
                  </p>




                  <p
                    className="
                    mt-3
                    text-sm
                    leading-6
                    text-navy-mute
                    "
                  >
                    Hello customer, discover our latest offers and
                    special updates available in your Sellio store.
                  </p>





                  <button
                    className="
                    mt-5
                    rounded-md
                    bg-coral
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    text-white
                    "
                  >
                    Shop Now
                  </button>



                </div>


              </div>



            </section>








            <section
              className="
              border-b
              border-border
              py-8
              "
            >


              <h2
                className="
                text-xl
                font-bold
                "
              >
                Email Sending Information
              </h2>



              <p
                className="
                mt-4
                text-sm
                leading-7
                text-navy-mute
                "
              >
                Before sending your campaign, review the email
                details and make sure your audience selection is
                correct.
              </p>





              <div
                className="
                mt-6
                space-y-4
                "
              >



                <div
                  className="
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-4
                  "
                >


                  <p
                    className="
                    text-sm
                    font-semibold
                    "
                  >
                    Customer Audience
                  </p>



                  <p
                    className="
                    mt-2
                    text-sm
                    text-navy-mute
                    "
                  >
                    Choose customers who should receive your email.
                  </p>


                </div>





                <div
                  className="
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-4
                  "
                >


                  <p
                    className="
                    text-sm
                    font-semibold
                    "
                  >
                    Email Limits
                  </p>




                  <p
                    className="
                    mt-2
                    text-sm
                    text-navy-mute
                    "
                  >
                    Follow your connected email provider limits when
                    sending campaigns.
                  </p>



                </div>



              </div>


            </section>









            <section
              id="related"
              className="
              scroll-mt-28
              py-8
              "
            >



              <h2
                className="
                text-xl
                font-bold
                "
              >
                Related Guides
              </h2>




              <p
                className="
                mt-4
                text-sm
                leading-6
                text-navy-mute
                "
              >
                Explore more Sellio customer communication and
                marketing features.
              </p>



              <div
                className="
                mt-5
                space-y-3
                "
              >



                <Link
                  href="/documentation/sms"
                  className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  px-4
                  py-3
                  text-sm
                  transition
                  hover:border-coral
                  "
                >


                  SMS



                  <ChevronRight
                    className="
                    h-4
                    w-4
                    text-navy-mute
                    "
                  />



                </Link>



              </div>



            </section>








            <div
              className="
              grid
              gap-4
              border-t
              border-border
              pt-6
              sm:grid-cols-2
              "
            >




              <Link
                href="/documentation/setup-email-marketing"
                className="
                rounded-lg
                border
                border-border
                px-5
                py-4
                transition
                hover:border-coral
                "
              >


                <p
                  className="
                  text-xs
                  text-navy-mute
                  "
                >
                  Previous
                </p>




                <div
                  className="
                  mt-2
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  "
                >


                  <ArrowLeft
                    className="
                    h-4
                    w-4
                    "
                  />


                  Set Up Email Marketing


                </div>



              </Link>







              <Link
                href="/documentation/kliaviyo-integration"
                className="
                rounded-lg
                border
                border-border
                px-5
                py-4
                text-right
                transition
                hover:border-coral
                "
              >


                <p
                  className="
                  text-xs
                  text-navy-mute
                  "
                >
                  Next
                </p>




                <div
                  className="
                  mt-2
                  flex
                  justify-end
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  "
                >


                  Klaviyo Integration



                  <ArrowRight
                    className="
                    h-4
                    w-4
                    "
                  />


                </div>



              </Link>



            </div>





          </article>









          <aside
            className="
            hidden
            xl:block
            "
          >


            <div
              className="
              sticky
              top-28
              border-l
              border-border
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





              <nav
                className="
                mt-5
                space-y-4
                "
              >


                {sections.map((item) => (


                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() =>
                      setActiveSection(item.id)
                    }
                    className={`
                    block
                    text-sm
                    transition-colors
                    ${
                      activeSection === item.id
                        ? "text-coral font-medium"
                        : "text-navy-mute hover:text-coral"
                    }
                    `}
                  >

                    {item.label}

                  </a>


                ))}



              </nav>



            </div>


          </aside>





        </div>


      </main>



      <Footer />


    </>

  );

}