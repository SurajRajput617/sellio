"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  Megaphone,
  CheckCircle,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";



const sections = [
  {
    id:"needs",
    label:"What You Need to Advertise",
  },
  {
    id:"setup",
    label:"How to Create Ads",
  },
  {
    id:"rules",
    label:"Rules for Your Ads",
  },
  {
    id:"related",
    label:"Related Guides",
  },
];




export default function AdvertisingPage(){


const [activeSection,setActiveSection] =
useState("needs");



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
Advertising
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
Create and manage advertising campaigns for your
Sellio store. Connect your marketing channels,
promote products, and reach more customers with
targeted campaigns.
</p>



</section>








<section
id="needs"
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
What You Need to Advertise
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Before creating an advertising campaign in Sellio,
make sure you have the required marketing details
ready.
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
• Sellio store account
</li>


<li>
• Connected advertising platform
</li>


<li>
• Product information and images
</li>


<li>
• Customer audience details
</li>


<li>
• Campaign goals and budget settings
</li>


</ul>






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
Prepare your campaign details before launching
ads to make setup faster and easier.
</p>


</div>



</div>



</section>








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
How to Create Ads
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Follow these steps to create advertising campaigns
through your Sellio marketing dashboard.
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
3. Select Advertising.
</li>


<li>
4. Choose your campaign objective.
</li>


<li>
5. Add products and creative content.
</li>


<li>
6. Review and launch your campaign.
</li>


</ol>








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
"
>


<Megaphone
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
Sellio Ads Dashboard
</p>


</div>




<div
className="
mt-5
grid
gap-4
sm:grid-cols-3
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
Active Campaigns
</p>


<p
className="
mt-2
text-xl
font-bold
"
>
12
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
Reach
</p>


<p
className="
mt-2
text-xl
font-bold
"
>
24K
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
Conversions
</p>


<p
className="
mt-2
text-xl
font-bold
text-coral
"
>
486
</p>


</div>



</div>



</div>





</section>
            <section
              id="rules"
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
                Rules for Your Ads
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Follow these guidelines when creating
                advertising campaigns with Sellio.
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
                  • Use clear and accurate product information.
                </li>


                <li>
                  • Add high-quality images and creative assets.
                </li>


                <li>
                  • Avoid misleading promotional messages.
                </li>


                <li>
                  • Target the right customer audience.
                </li>


                <li>
                  • Review campaigns before publishing.
                </li>


              </ul>






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


                <CheckCircle
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
                  Well-optimized ads help customers find
                  relevant products and improve campaign
                  performance.
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
                Campaign Preview
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Preview how your Sellio advertising
                campaign can appear to customers.
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
                    New Product Collection
                  </p>



                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Discover our latest products with
                    special offers available today.
                  </p>




                  <button
                    className="
                      mt-4
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
                Explore more Sellio marketing tools and
                customer growth features.
              </p>




              <div
                className="
                  mt-5
                  space-y-3
                "
              >




                <Link
                  href="/documentation/klaviyo-integration"
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


                  Klaviyo Integration


                  <ChevronRight
                    className="
                      h-4
                      w-4
                      text-navy-mute
                    "
                  />


                </Link>






                <Link
                  href="/documentation/top-banner-text"
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


                  Top Banner Text


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
                href="/documentation/klaviyo-integration"
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


                  Klaviyo-Integration


                </div>


              </Link>








              <Link
                href="/documentation/tracking"
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


                  Tracking


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