"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  Video,
  Play,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";



const sections = [
  {
    id:"video",
    label:"Banner Setup Demo",
  },
  {
    id:"enable",
    label:"How to Enable a Scrolling Text Banner",
  },
  {
    id:"settings",
    label:"Banner Settings",
  },
  {
    id:"related",
    label:"Related Guides",
  },
];



export default function TopBannerTextPage(){


const [activeSection,setActiveSection] =
useState("video");


const [showVideo,setShowVideo] =
useState(false);



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
Top Banner Text
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
Create scrolling announcements at the top of your
Sellio store to highlight special offers, updates,
new products, and important customer messages.
</p>



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


<div
className="
flex
items-center
gap-3
"
>


<Video
className="
h-5
w-5
text-coral
"
/>



<h2
className="
text-xl
font-bold
"
>
Watch Banner Setup Demo
</h2>


</div>




<div
className="
mt-6
overflow-hidden
rounded-xl
border
border-border
bg-black
"
>


{

!showVideo ? (


<button
onClick={()=>
setShowVideo(true)
}
className="
flex
aspect-video
w-full
items-center
justify-center
bg-black
"
>


<div
className="
flex
h-16
w-16
items-center
justify-center
rounded-xl
bg-red-600
text-white
transition
hover:scale-105
"
>


<Play
className="
h-7
w-7
fill-white
"
/>


</div>



</button>


)

:

(


<iframe
className="
aspect-video
h-full
w-full
"
src="
https://www.youtube.com/embed/YOUR_VIDEO_ID
"
title="
Sellio Top Banner Demo
"
allow="
accelerometer;
autoplay;
clipboard-write;
encrypted-media;
gyroscope;
picture-in-picture
"
allowFullScreen
/>


)


}


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
How to Enable a Scrolling Text Banner
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Add announcement messages in Sellio Marketing
settings and display them across your website.
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
3. Select Scrolling Banner Text.
</li>


<li>
4. Add your banner message.
</li>


<li>
5. Create additional messages if required.
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
Use short and clear banner messages so visitors
can quickly understand your latest updates.
</p>



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
Banner Settings
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Customize your Sellio scrolling banner by adding
messages, controlling visibility, and updating
announcement content.
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
Banner Message
</p>


<p
className="
mt-2
text-sm
leading-6
text-navy-mute
"
>
Create promotional announcements, store updates,
or important customer notifications.
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
Display Options
</p>


<p
className="
mt-2
text-sm
leading-6
text-navy-mute
"
>
Choose where your banner appears and control
how customers see your announcement.
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
Active Status
</p>


<p
className="
mt-2
text-sm
leading-6
text-navy-mute
"
>
Enable or disable banner messages whenever you
need to update your store communication.
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
Scrolling Banner Preview
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Preview how your announcement banner can appear
on your Sellio storefront.
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
bg-coral
px-5
py-3
text-center
text-sm
font-semibold
text-white
"
>

🎉 Summer Sale - Get 20% Off Your Next Order


</div>




<div
className="
flex
h-36
items-center
justify-center
bg-black/5
"
>


<p
className="
text-sm
text-navy-mute
"
>
Website Header Preview
</p>


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
Continue learning about Sellio marketing tools
and website customization options.
</p>





<div
className="
mt-5
space-y-3
"
>



<Link
href="/documentation/seo-settings"
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

SEO Settings


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
href="/documentation/seo-settings"
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


SEO Settings


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
onClick={()=>
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