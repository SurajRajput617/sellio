"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  CheckCircle,
  KeyRound,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";



const sections = [
  {
    id:"intro",
    label:"Klaviyo Integration",
  },
  {
    id:"api",
    label:"Get Your API Keys",
  },
  {
    id:"connect",
    label:"Add API Keys",
  },
  {
    id:"sync",
    label:"Sync Products",
  },
  {
    id:"related",
    label:"Related Guides",
  },
];




export default function KlaviyoIntegrationPage(){


const [activeSection,setActiveSection] =
useState("intro");



useEffect(()=>{


const handleScroll=()=>{


let current =
sections[0].id;



sections.forEach((item)=>{


const element =
document.getElementById(item.id);



if(!element) return;



if(
element.offsetTop <=
window.scrollY + 160
){

current=item.id;

}


});


setActiveSection(current);


};



window.addEventListener(
"scroll",
handleScroll,
{
passive:true
}
);



handleScroll();



return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);






return(

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
id="intro"
className="
scroll-mt-28
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
Klaviyo Integration
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
Connect Sellio with Klaviyo to sync customers,
products, and marketing data. Use this integration
to create targeted campaigns and improve customer
communication.
</p>



<div
className="
mt-6
flex
items-start
gap-3
rounded-lg
border
border-border
bg-black/5
px-5
py-4
"
>


<Info
className="
mt-0.5
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
Make sure you have an active Klaviyo account
before connecting it with Sellio.
</p>


</div>



</section>









<section
id="api"
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
Step 1: Get Your API Keys
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Create and copy your Klaviyo API credentials before
connecting the service with Sellio.
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
1. Login to your Klaviyo account.
</li>


<li>
2. Open Account Settings.
</li>


<li>
3. Navigate to API Keys.
</li>


<li>
4. Create a private API key.
</li>


<li>
5. Copy the key for Sellio connection.
</li>


</ol>





<div
className="
mt-6
rounded-lg
border
border-border
p-5
"
>


<div
className="
flex
items-center
gap-3
"
>


<KeyRound
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
Klaviyo API Key Setup
</p>


</div>




<div
className="
mt-4
rounded-lg
bg-black/5
p-4
"
>


<p
className="
text-sm
font-semibold
"
>
Private API Key
</p>



<div
className="
mt-3
rounded-md
border
border-border
bg-white
px-4
py-3
text-xs
text-navy-mute
"
>
pk_live_xxxxxxxxxxxxx
</div>



</div>



</div>




</section>









<section
id="connect"
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
Step 2: Add API Keys
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Add your Klaviyo API details inside your Sellio
marketing settings to connect both platforms.
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


<p
className="
text-sm
font-bold
"
>
Sellio Integration Settings
</p>




<div
className="
mt-5
space-y-4
"
>


<div
className="
rounded-lg
bg-black/5
p-4
"
>


<p
className="
text-xs
text-navy-mute
"
>
Provider
</p>


<p
className="
mt-2
text-sm
font-semibold
"
>
Klaviyo
</p>


</div>




<div
className="
rounded-lg
bg-black/5
p-4
"
>


<p
className="
text-xs
text-navy-mute
"
>
Connection Status
</p>


<p
className="
mt-2
flex
items-center
gap-2
text-sm
font-semibold
text-coral
"
>

<CheckCircle
className="
h-4
w-4
"
/>

Connected

</p>


</div>



</div>



</div>



</section>
            <section
              id="sync"
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
                Step 3: Sync Products
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Sync your Sellio products with Klaviyo
                so you can create targeted campaigns
                based on customer activity.
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
                  1. Open the Klaviyo integration settings.
                </li>


                <li>
                  2. Select product sync options.
                </li>


                <li>
                  3. Choose products you want to share.
                </li>


                <li>
                  4. Save your synchronization settings.
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

                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Product Sync Status
                </p>


                <p
                  className="
                    mt-2
                    text-sm
                    text-navy-mute
                  "
                >
                  Your Sellio products are ready to sync
                  with your Klaviyo account.
                </p>


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
                Test Integration
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Check your connection before launching
                customer campaigns.
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
                    justify-between
                  "
                >

                  <div>

                    <p
                      className="
                        text-sm
                        font-bold
                      "
                    >
                      Klaviyo Connection Test
                    </p>


                    <p
                      className="
                        mt-2
                        text-xs
                        text-navy-mute
                      "
                    >
                      Verify API connection and data sync.
                    </p>


                  </div>




                  <CheckCircle
                    className="
                      h-6
                      w-6
                      text-coral
                    "
                  />


                </div>




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
                  Test Connection
                </button>



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
                Explore more Sellio marketing integrations
                and customer communication tools.
              </p>





              <div
                className="
                  mt-5
                  space-y-3
                "
              >



                <Link
                  href="/documentation/setup-email-marketing"
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

                  Set Up Email Marketing


                  <ChevronRight
                    className="
                      h-4
                      w-4
                      text-navy-mute
                    "
                  />

                </Link>







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
                href="/documentation/sending-an-email-with-notify"
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


              Sending-an-Email-with-Notify


                </div>


              </Link>








              <Link
                href="/documentation/advertising"
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


                 Advertising


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


                {
                  sections.map((item)=>(


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
                          ?
                          "text-coral font-medium"
                          :
                          "text-navy-mute hover:text-coral"
                        }

                      `}
                    >

                      {item.label}


                    </a>


                  ))
                }


              </nav>


            </div>


          </aside>



        </div>


      </main>



      <Footer />


    </>

  );

}