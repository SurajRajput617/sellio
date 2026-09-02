"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  Search,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";



const sections = [
  {
    id:"page-seo",
    label:"How to Set Your Page Title and Description",
  },
  {
    id:"defaults",
    label:"Setting SEO Defaults",
  },
  {
    id:"competition",
    label:"SEO for Competition Pages",
  },
  {
    id:"related",
    label:"Related Guides",
  },
];




export default function SEOSettingsPage(){


const [activeSection,setActiveSection] =
useState("page-seo");



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
SEO Settings
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
Manage your Sellio SEO settings to improve search
visibility, control page information, and create a
better experience for customers discovering your
store online.
</p>



</section>








<section
id="page-seo"
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
How to Set Your Page Title and Description
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Add SEO information for your Sellio pages so search
engines understand your content and display the
right information in search results.
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
2. Open the page settings section.
</li>


<li>
3. Select SEO settings.
</li>


<li>
4. Add your SEO page title.
</li>


<li>
5. Write your meta description.
</li>


<li>
6. Save your changes.
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
A clear page title and description helps customers
understand your page before visiting your store.
</p>


</div>


</div>








<div
className="
mt-5
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

<Search
className="
h-5
w-5
text-coral
"
/>



<p
className="
text-sm
font-semibold
"
>
SEO Preview
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
Sellio Store | Premium Products
</p>



<p
className="
mt-2
text-xs
text-navy-mute
"
>
sellio.com/store/products
</p>



<p
className="
mt-2
text-sm
text-navy-mute
"
>
Discover premium products with easy checkout
and a seamless shopping experience.
</p>



</div>



</div>



</section>
            <section
              id="defaults"
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
                Setting SEO Defaults
              </h2>



              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Set default SEO information in Sellio so
                your pages have consistent search settings.
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
                  • Default page title settings
                </li>


                <li>
                  • Default meta description settings
                </li>


                <li>
                  • Search preview information
                </li>


                <li>
                  • Store branding details
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


                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Recommended SEO Setup
                </p>



                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  Use clear titles, useful descriptions,
                  and relevant keywords to help customers
                  find your Sellio store.
                </p>



              </div>



            </section>








            <section
              id="competition"
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
                SEO for Competition Pages
              </h2>



              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Optimize campaign and competition pages
                in Sellio to improve visibility and help
                customers discover your offers.
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
                  • Add unique page titles for campaigns.
                </li>


                <li>
                  • Create useful descriptions for each page.
                </li>


                <li>
                  • Include relevant search terms.
                </li>


                <li>
                  • Keep content updated regularly.
                </li>


              </ul>




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
                Continue learning about Sellio marketing,
                website tools, and store optimization.
              </p>





              <div
                className="
                  mt-5
                  space-y-3
                "
              >



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
                href="/documentation/dropped-basket-recovery"
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


                  Dropped Basket Recovery


                </div>



              </Link>








              <Link
                href="/documentation/top-banner-text"
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

                  Top Banner Text


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