"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


const sections = [
  {
    id:"catalogue",
    label:"Product Catalogue",
  },
  {
    id:"feed",
    label:"What the Feed Includes",
  },
  {
    id:"dashboard",
    label:"Sellio Product Feed",
  },
  {
    id:"add",
    label:"Add Feed to Meta",
  },
  {
    id:"related",
    label:"Related Guides",
  },
];




export default function ProductCataloguePage(){


const [activeSection,setActiveSection] =
useState("catalogue");



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
id="catalogue"
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
Product Catalogue
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
Connect your Sellio product catalogue with
Facebook and Meta platforms to showcase your
products, manage product information, and create
better shopping experiences.
</p>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Your product feed keeps your catalogue updated
with product names, images, prices, and inventory
details.
</p>



</section>









<section
id="feed"
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
What the Feed Includes
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
The Sellio product feed contains the information
needed to display your products correctly across
Meta shopping channels.
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
• Product title and description
</li>


<li>
• Product images
</li>


<li>
• Product price and availability
</li>


<li>
• Product links
</li>


<li>
• Inventory information
</li>


<li>
• Product categories
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
Keeping your product feed updated helps customers
see accurate product information.
</p>


</div>



</div>



</section>









<section
id="dashboard"
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
Sellio Product Feed
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Manage your product catalogue connection from
your Sellio marketing dashboard.
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
"
>


<ShoppingBag
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
Product Catalogue Settings
</p>


</div>





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
Products Synced
</p>


<p
className="
mt-2
text-xl
font-bold
"
>
1,250
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
Feed Status
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


Active


</p>


</div>



</div>



</div>



</section>
            <section
              id="add"
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
                How to Add the Feed to Meta
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Add your Sellio product feed URL inside
                Meta Commerce Manager to sync your
                catalogue products.
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
                  1. Open your Meta Commerce Manager account.
                </li>


                <li>
                  2. Go to Catalogues settings.
                </li>


                <li>
                  3. Select Add Product Feed.
                </li>


                <li>
                  4. Copy your Sellio product feed URL.
                </li>


                <li>
                  5. Paste the feed URL into Meta.
                </li>


                <li>
                  6. Save and complete the catalogue setup.
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


                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Sellio Product Feed URL
                </p>



                <div
                  className="
                    mt-4
                    rounded-md
                    border
                    border-border
                    bg-black/5
                    px-4
                    py-3
                    text-xs
                    text-navy-mute
                  "
                >
                  https://sellio-seven.vercel.app/feed/products.xml
                </div>



                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    bg-green-500/10
                    px-4
                    py-3
                  "
                >


                  <CheckCircle
                    className="
                      h-5
                      w-5
                      text-green-600
                    "
                  />


                  <p
                    className="
                      text-sm
                      font-medium
                    "
                  >
                    Product feed connected successfully
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
                Catalogue Sync Preview
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Review your synced products and confirm
                that all catalogue information is updated.
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
                      Total Products
                    </p>


                    <p
                      className="
                        mt-2
                        text-xl
                        font-bold
                      "
                    >
                      1,250
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
                      Updated Items
                    </p>


                    <p
                      className="
                        mt-2
                        text-xl
                        font-bold
                      "
                    >
                      980
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
                      Sync Status
                    </p>


                    <p
                      className="
                        mt-2
                        text-xl
                        font-bold
                        text-coral
                      "
                    >
                      Ready
                    </p>


                  </div>




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
                Explore more Sellio Facebook and Meta
                marketing features.
              </p>





              <div
                className="
                  mt-5
                  space-y-3
                "
              >



                <Link
                  href="/documentation/tracking"
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

                  Tracking


                  <ChevronRight
                    className="
                      h-4
                      w-4
                    "
                  />


                </Link>






                <Link
                  href="/documentation/advertising"
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

                  Advertising


                  <ChevronRight
                    className="
                      h-4
                      w-4
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
                href="/documentation/tracking"
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


                  Tracking


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