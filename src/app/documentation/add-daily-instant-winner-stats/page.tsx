"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


const sections = [
  {
    id: "feed",
    label: "The Sellio Activity Feed",
  },
  {
    id: "settings",
    label: "Navigate to Settings",
  },
  {
    id: "stats",
    label: "Add Dashboard Stats",
  },
  {
    id: "related",
    label: "Related Guides",
  },
];



export default function AddDashboardStatsPage() {


const [activeSection,setActiveSection] =
useState("feed");



useEffect(()=>{


const handleScroll=()=>{


let current =
sections[0].id;



sections.forEach((section)=>{


const element =
document.getElementById(section.id);



if(!element) return;



if(
element.offsetTop <=
window.scrollY + 150
){

current =
section.id;

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
Sellio Dashboard
</p>



<h1
className="
mt-3
text-3xl
font-bold
"
>
Add Dashboard Activity Stats
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
Learn how to add activity statistics to your Sellio
dashboard and display important store information
in an organized view.
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
The Sellio Activity Feed
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
This creates a dashboard area where you can view
recent store activity, connected services and
important updates.
</p>




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
Navigate to Settings
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Follow these steps to access your Sellio dashboard
settings and prepare your activity information.
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
2. Open the dashboard settings area.
</li>


<li>
3. Select the analytics and activity options.
</li>


<li>
4. Review available dashboard sections.
</li>


<li>
5. Save your preferred settings.
</li>


</ol>



</section>








<section
id="stats"
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
Add Dashboard Stats
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Add useful statistics to your Sellio dashboard
so store activity can be reviewed quickly.
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
1. Select the dashboard widget option.
</li>


<li>
2. Choose the statistic type.
</li>


<li>
3. Add the required information.
</li>


<li>
4. Preview the dashboard update.
</li>


<li>
5. Save the changes.
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
Dashboard statistics help you understand store
activity and review important information without
checking multiple sections.
</p>


</div>


</div>




</section>

<section
className="
py-8
border-b
border-border
"
>


<h2
className="
text-xl
font-bold
"
>
Dashboard Preview
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Preview how activity statistics can appear inside
your Sellio dashboard.
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
Sellio Activity Dashboard
</p>


<p
className="
mt-1
text-xs
text-navy-mute
"
>
Demo dashboard component
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
Orders
</p>


<p
className="
mt-3
text-xl
font-bold
"
>
248
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
Revenue
</p>


<p
className="
mt-3
text-xl
font-bold
"
>
$12.4K
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
Active Users
</p>


<p
className="
mt-3
text-xl
font-bold
text-coral
"
>
96
</p>


</div>


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
Activity Graph
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Example visualization showing how Sellio can
display dashboard activity trends.
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
80,
65,
90,
75
].map((item,index)=>(


<div
key={index}
className="
flex-1
rounded-t-md
bg-coral
"
style={{
height:`${item}%`
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
Continue learning about Sellio dashboards,
integrations and ecommerce management.
</p>




<div
className="
mt-5
space-y-3
"
>



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
href="/documentation/managing-instant-winners"
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


Managing-instant-winners


</div>


</Link>







<Link
href="/documentation/managing-layouts"
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


Managing Payouts


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