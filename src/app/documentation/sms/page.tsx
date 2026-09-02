"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  MessageSquare,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";



const sections = [
  {
    id:"start",
    label:"Start Using SMS Today",
  },
  {
    id:"setup",
    label:"How to Get Setup",
  },
  {
    id:"dashboard",
    label:"SMS Dashboard",
  },
  {
    id:"related",
    label:"Related Guides",
  },
];




export default function SMSPage(){


const [activeSection,setActiveSection] =
useState("start");



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
SMS
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
Send SMS messages to your Sellio customers and
share important updates, promotions, and store
announcements directly from your dashboard.
</p>



</section>









<section
id="start"
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
Start Using SMS Today
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
SMS is a fast way to connect with customers when
you need immediate engagement. Use Sellio SMS
tools to reach customers with relevant messages
and updates.
</p>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Whether you are announcing a promotion, sharing
store updates, or reminding customers about your
offers, SMS helps you create direct communication.
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
Keep messages short, useful, and customer-focused
to create better engagement.
</p>


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
How to Get Setup
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Follow these steps to configure SMS messaging in
your Sellio dashboard.
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
2. Go to Marketing settings.
</li>


<li>
3. Select SMS tools.
</li>


<li>
4. Connect your SMS provider.
</li>


<li>
5. Import or select customer contacts.
</li>


<li>
6. Create and send your message.
</li>



</ol>





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
SMS Dashboard
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Manage customer messaging, campaigns, and SMS
activity from your Sellio dashboard.
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


<MessageSquare
className="
h-6
w-6
text-coral
"
/>



<p
className="
font-bold
"
>
Sellio SMS Dashboard
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
Messages Sent
</p>


<p
className="
mt-2
text-xl
font-bold
"
>
1,240
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
Customers
</p>


<p
className="
mt-2
text-xl
font-bold
"
>
850
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
Delivery Rate
</p>


<p
className="
mt-2
text-xl
font-bold
text-coral
"
>
98%
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
SMS Performance Overview
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Track your SMS campaign performance and understand
how customers interact with your messages.
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
40,
55,
65,
50,
75,
90,
80
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
Explore more Sellio marketing tools to improve
customer communication and store growth.
</p>





<div
className="
mt-5
space-y-3
"
>



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


SMS & Email


</div>



</Link>







<Link
href="/documentation/setup-email-marketing"
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


Set Up Email Marketing


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