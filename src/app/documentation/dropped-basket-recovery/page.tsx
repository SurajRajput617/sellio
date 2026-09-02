"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  ShoppingBasket,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


const sections = [
  {
    id: "overview",
    label: "How Dropped Basket Recovery Works",
  },
  {
    id: "enable",
    label: "Turn On Recovery",
  },
  {
    id: "settings",
    label: "Settings",
  },
  {
    id: "related",
    label: "Related Guides",
  },
];



export default function DroppedBasketRecoveryPage(){


const [activeSection,setActiveSection] =
useState("overview");



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
Dropped Basket Recovery
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
Automatically reconnect with customers who leave
items in their basket. Sellio helps remind customers
to return and complete their purchase.
</p>



</section>








<section
id="overview"
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
How Dropped Basket Recovery Works
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Sellio tracks incomplete checkouts and helps you
send helpful reminders to customers who did not
finish their order.
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
• Customers add products to their basket.
</li>


<li>
• Checkout is started but not completed.
</li>


<li>
• Sellio identifies the incomplete purchase.
</li>


<li>
• Recovery reminders encourage customers to return.
</li>


<li>
• Customers complete their purchase through the reminder.
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
Recovery messages should be helpful and timely
without overwhelming customers.
</p>


</div>



</div>



</section>








<section
id="enable"
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
Turn On Dropped Basket Recovery
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Enable recovery reminders from your Sellio
dashboard by following these steps.
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
3. Select Dropped Basket Recovery.
</li>


<li>
4. Enable recovery reminders.
</li>


<li>
5. Save your changes.
</li>


</ol>





<div
className="
mt-6
flex
justify-center
"
>


<div
className="
w-[320px]
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
rounded-lg
bg-black/5
p-4
"
>


<ShoppingBasket
className="
h-8
w-8
text-coral
"
/>


<div>

<p
className="
text-sm
font-bold
"
>
Basket Recovery
</p>


<p
className="
text-xs
text-navy-mute
"
>
Enabled
</p>


</div>


</div>



<button
className="
mt-5
w-full
rounded-md
bg-coral
py-2
text-sm
font-semibold
text-white
"
>
Save Settings
</button>


</div>


</div>



</section>
            <section
              id="settings"
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
                Settings
              </h2>



              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Customize your Sellio basket recovery
                settings to control when and how
                customers receive reminders.
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
                    Reminder Timing
                  </p>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Choose when recovery messages should
                    be sent after a customer leaves items
                    in their basket.
                  </p>


                </div>




                <div
                  className="
                    rounded-lg
                    border
                    border-border
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
                    Message Customization
                  </p>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Create customer-friendly reminders
                    with your preferred messaging style.
                  </p>


                </div>




                <div
                  className="
                    rounded-lg
                    border
                    border-border
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
                    Recovery Tracking
                  </p>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Review recovered orders and monitor
                    basket recovery performance.
                  </p>


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
                Basket Recovery Overview
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Example Sellio dashboard view showing
                recovered baskets and customer activity.
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
                    grid
                    gap-4
                    sm:grid-cols-3
                  "
                >


                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-4
                    "
                  >

                    <p
                      className="
                        text-xs
                        text-navy-mute
                      "
                    >
                      Abandoned Baskets
                    </p>


                    <p
                      className="
                        mt-3
                        text-xl
                        font-bold
                      "
                    >
                      156
                    </p>


                  </div>





                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-4
                    "
                  >

                    <p
                      className="
                        text-xs
                        text-navy-mute
                      "
                    >
                      Recovered Orders
                    </p>


                    <p
                      className="
                        mt-3
                        text-xl
                        font-bold
                        text-coral
                      "
                    >
                      82
                    </p>


                  </div>





                  <div
                    className="
                      rounded-lg
                      border
                      border-border
                      p-4
                    "
                  >

                    <p
                      className="
                        text-xs
                        text-navy-mute
                      "
                    >
                      Recovery Rate
                    </p>


                    <p
                      className="
                        mt-3
                        text-xl
                        font-bold
                      "
                    >
                      52%
                    </p>


                  </div>


                </div>





                <div
                  className="
                    mt-8
                    flex
                    h-40
                    items-end
                    gap-3
                  "
                >

                  {
                    [
                      30,
                      45,
                      60,
                      50,
                      75,
                      85,
                      70
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

                  <span>
                    Mon
                  </span>

                  <span>
                    Tue
                  </span>

                  <span>
                    Wed
                  </span>

                  <span>
                    Thu
                  </span>

                  <span>
                    Fri
                  </span>

                  <span>
                    Sat
                  </span>

                  <span>
                    Sun
                  </span>

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
                ecommerce management guides.
              </p>





              <div
                className="
                  mt-5
                  space-y-3
                "
              >



                <Link
                  href="/documentation/upsell"
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

                  Upsell


                  <ChevronRight
                    className="
                      h-4
                      w-4
                      text-navy-mute
                    "
                  />

                </Link>




                <Link
                  href="/documentation/promos-and-discounts"
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

                  Promos and Discounts


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
                href="/documentation/upsell"
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


                  Upsell


                </div>


              </Link>







              <Link
                href="/documentation/seo-settings"
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

                  SEO Settings


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