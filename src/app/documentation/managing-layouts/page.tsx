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
    id:"details",
    label:"Viewing Payment Details",
  },
  {
    id:"customer",
    label:"How Customers Add Payment Details",
  },
  {
    id:"video",
    label:"Payment Demo Video",
  },
  {
    id:"payments",
    label:"Making Payments",
  },
];


export default function ManagingPaymentsPage(){


const [activeSection,setActiveSection] =
useState("details");



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
Sellio Payments
</p>



<h1
className="
mt-3
text-3xl
font-bold
"
>
Managing Payments
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
Learn how Sellio helps you manage customer payment
information, review transaction details, and keep
your ecommerce payment workflow organized.
</p>



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
Viewing Payment Details
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Review payment records and customer transaction
information directly from your Sellio dashboard.
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
2. Open the Payments section.
</li>


<li>
3. Select a transaction record.
</li>


<li>
4. Review payment details and status.
</li>


<li>
5. Update information when required.
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
Payment information is stored in an organized
dashboard view so you can quickly review customer
transactions.
</p>



</div>


</div>



</section>








<section
id="customer"
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
How Customers Add Payment Details
</h2>



<p
className="
mt-4
text-sm
leading-6
text-navy-mute
"
>
Customers can securely provide required payment
information through your Sellio checkout workflow.
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
1. Customer opens the payment section.
</li>


<li>
2. Customer enters required payment information.
</li>


<li>
3. Information is reviewed before submission.
</li>


<li>
4. Payment status updates in Sellio dashboard.
</li>


</ol>



</section>








<section
id="video"
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
Payment Demo Video
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Watch the Sellio payment management demo to
understand the workflow and dashboard experience.
</p>




<div
  className="
    mt-6
    overflow-hidden
    rounded-lg
    border
    border-border
  "
>
  <div
    className="
      aspect-video
      bg-black
      flex
      items-center
      justify-center
    "
  >
    <div
      className="
        w-16
        h-10
        bg-red-600
        rounded-xl
        flex
        items-center
        justify-center
        text-white
      "
    >
      ▶
    </div>
  </div>
</div>



</section>
<section
id="payments"
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
Making Payments
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Manage payment updates and review transaction
progress from your Sellio dashboard.
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
1. Open the payment management area.
</li>


<li>
2. Review pending customer transactions.
</li>


<li>
3. Confirm payment information.
</li>


<li>
4. Update the payment status.
</li>


<li>
5. Save the completed payment record.
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
Always review payment information before
confirming updates to keep your customer
records accurate.
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
Payment Activity Overview
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Example dashboard visualization showing how Sellio
can display payment activity trends.
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
60,
48,
78,
65,
90,
72
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
className="
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
Continue exploring Sellio documentation to learn
more about dashboard management and integrations.
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
href="/documentation/add-daily-instant-winner-stats"
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


Add-daily-instant-winner-stats


</div>


</Link>







<Link
href="/documentation/promos-and-discounts"
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


Promos-and-Discounts


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