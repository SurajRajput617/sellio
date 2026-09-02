"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  Mail,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


const sections = [
  {
    id:"connect",
    label:"How to Connect Your Email Marketing Provider",
  },
  {
    id:"notify",
    label:"Sellio Email Campaigns",
  },
  {
    id:"integration",
    label:"Email Provider Integration",
  },
  {
    id:"related",
    label:"Related Guides",
  },
];



export default function SetUpEmailMarketingPage(){


const [activeSection,setActiveSection] =
useState("connect");



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
Set Up Email Marketing
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
Connect your email marketing tools with Sellio
to create campaigns, share updates, and build
stronger communication with your customers.
</p>



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
How to Connect Your Email Marketing Provider
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Connect an email provider to send marketing
campaigns and manage customer communication
from your Sellio dashboard.
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
1. Login to your Sellio dashboard.
</li>


<li>
2. Open Marketing settings.
</li>


<li>
3. Select Email Marketing Provider.
</li>


<li>
4. Choose your email service.
</li>


<li>
5. Add your connection details.
</li>


<li>
6. Save your changes.
</li>


</ol>





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
px-4
py-3
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
A connected email provider allows Sellio to
organize customer communication and marketing
campaigns.
</p>



</div>



</section>








<section
id="notify"
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
Sellio Email Campaigns
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Create customer emails for promotions, updates,
new products, and important store announcements.
</p>




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
Email Campaign Dashboard
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
Subscribers
</p>

<p
className="
mt-2
text-xl
font-bold
"
>
2,450
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
Campaigns
</p>

<p
className="
mt-2
text-xl
font-bold
"
>
36
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
Open Rate
</p>

<p
className="
mt-2
text-xl
font-bold
text-coral
"
>
72%
</p>

</div>


</div>



</div>



</section>
            <section
              id="integration"
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
                Email Provider Integration
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Connect your preferred email service with
                Sellio to manage campaigns and customer
                communication from one place.
              </p>




              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  p-5
                "
              >


                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Connected Provider
                </p>



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
                      font-bold
                    "
                  >
                    Email Marketing Service
                  </p>


                  <p
                    className="
                      mt-2
                      text-xs
                      text-navy-mute
                    "
                  >
                    Connection Active
                  </p>


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
                  Manage Connection
                </button>



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
                Email Marketing Performance
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Monitor campaign activity and understand
                how customers interact with your emails.
              </p>





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
                    h-44
                    items-end
                    gap-3
                  "
                >


                  {
                    [
                      35,
                      55,
                      45,
                      70,
                      65,
                      85,
                      75
                    ].map((value,index)=>(


                      <div
                        key={index}
                        className="
                          flex-1
                          rounded-t-md
                          bg-coral
                        "
                        style={{
                          height:`${value}%`
                        }}
                      />



                    ))
                  }


                </div>




                <div
                  className="
                    mt-3
                    flex
                    justify-between
                    text-xs
                    text-navy-mute
                  "
                >

                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>

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
                customer communication features.
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
                href="/documentation/sms"
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


                  SMS


                </div>


              </Link>







              <Link
                href="/documentation/email-automation"
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


                  Email Automation


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