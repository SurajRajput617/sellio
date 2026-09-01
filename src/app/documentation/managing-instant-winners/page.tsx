"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Info,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


const pageSections = [
  {
    id: "manage",
    label: "How to Manage Integrations",
  },
  {
    id: "dashboard",
    label: "Dashboard Overview",
  },
  {
    id: "activity",
    label: "Activity Tracking",
  },
  {
    id: "related",
    label: "Related Guides",
  },
];



export default function ManagingIntegrationsPage() {


  const [activeSection, setActiveSection] =
    useState("manage");



  useEffect(() => {


    const handleScroll = () => {


      let current =
        pageSections[0].id;



      pageSections.forEach((section)=>{


        const element =
          document.getElementById(section.id);



        if(!element) return;



        if(
          element.offsetTop <=
          window.scrollY + 160
        ){

          current = section.id;

        }


      });



      setActiveSection(current);


    };



    handleScroll();



    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive:true,
      }
    );



    return()=>{

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);




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
Sellio Integrations
</p>



<h1
className="
mt-3
text-3xl
font-bold
"
>
Managing Integrations
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
Learn how to manage your Sellio integrations,
review connected services, and keep your
ecommerce workflow organized from one dashboard.
</p>



</section>






<section
id="manage"
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
How to Manage Integrations
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Follow these steps to review and manage your
connected Sellio services.
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
2. Navigate to the integrations section.
</li>


<li>
3. Select the service you want to review.
</li>


<li>
4. Check the current connection details.
</li>


<li>
5. Review available activity information.
</li>


<li>
6. Update settings when required.
</li>


<li>
7. Save your integration preferences.
</li>



</ol>





<div
className="
mt-6
rounded-lg
border
border-border
bg-black/5
px-4
py-3
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
Your Sellio dashboard keeps your connected
services organized so you can quickly review
important integration information.
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
Dashboard Overview
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Use the dashboard to view connected services,
store information, and important workflow updates.
</p>



<div
className="
mt-6
rounded-lg
border
border-border
overflow-hidden
"
>


<div
className="
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
Sellio Dashboard Preview
</p>


<p
className="
mt-1
text-xs
text-navy-mute
"
>
Demo interface example
</p>


</div>





<div
className="
grid
gap-4
p-5
sm:grid-cols-3
"
>


<div
className="
rounded-md
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
Connected Services
</p>


<p
className="
mt-3
text-lg
font-bold
"
>
12
</p>


</div>




<div
className="
rounded-md
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
Active Status
</p>


<p
className="
mt-3
text-lg
font-bold
text-coral
"
>
Online
</p>


</div>




<div
className="
rounded-md
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
Updates
</p>


<p
className="
mt-3
text-lg
font-bold
"
>
24
</p>


</div>


</div>


</div>


</section>

<section
id="activity"
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
Activity Tracking
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Monitor your Sellio workflow by reviewing recent
integration activity and dashboard updates.
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
Activity Overview
</p>




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
rounded-md
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
Connections
</p>


<p
className="
mt-2
text-xl
font-bold
"
>
Active
</p>


</div>




<div
className="
rounded-md
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
Recent Updates
</p>


<p
className="
mt-2
text-xl
font-bold
"
>
18
</p>


</div>





<div
className="
rounded-md
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
System Status
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
Activity Graph Preview
</p>



<p
className="
mt-1
text-xs
text-navy-mute
"
>
Example dashboard activity visualization
</p>



<div
className="
mt-6
flex
h-40
items-end
gap-3
"
>


{
[
40,
65,
55,
85,
70,
95,
75
].map((height,index)=>(


<div
key={index}
className="
flex-1
rounded-t-md
bg-coral
"
style={{
height:`${height}%`
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
Explore more Sellio documentation to understand
store setup, integrations and dashboard features.
</p>


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
href="/documentation/manual-draw"
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


Manual-draw

</div>


</Link>






<Link
href="/documentation/add-daily-instant-winner-stats"
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


Add Daily Instant Winner Stats

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
pageSections.map((item)=>(


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