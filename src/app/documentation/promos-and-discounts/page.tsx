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
    id: "creating",
    label: "Creating Sellio Promotions",
  },
  {
    id: "coupon",
    label: "Creating Discount Coupons",
  },
  {
    id: "campaign",
    label: "Campaign Specific Discounts",
  },
  {
    id: "related",
    label: "Related Guides",
  },
];


export default function PromosDiscountsPage() {


const [activeSection,setActiveSection] =
useState("creating");



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
Sellio Marketing Tools
</p>



<h1
className="
mt-3
text-3xl
font-bold
"
>
Promos and Discounts
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
Create promotional offers in Sellio to attract
customers, increase sales and manage discount
campaigns from one organized dashboard.
</p>


</section>








<section
id="creating"
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
1. Creating Sellio Promotions
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Create a promotion by selecting your offer type,
setting discount rules and deciding how customers
can use the offer.
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
2. Go to the Marketing section.
</li>


<li>
3. Select Promotions and Discounts.
</li>


<li>
4. Choose Create New Promotion.
</li>


<li>
5. Add your promotion details.
</li>


<li>
6. Review the offer before publishing.
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


<p
className="
text-sm
font-semibold
"
>
Promotion Settings
</p>



<ul
className="
mt-3
space-y-2
text-sm
leading-6
text-navy-mute
"
>

<li>
• Promotion name
</li>

<li>
• Discount value
</li>

<li>
• Customer eligibility
</li>

<li>
• Active dates
</li>

</ul>



</div>



</section>








<section
id="coupon"
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
Creating Discount Coupons
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Discount coupons allow you to provide customers
with specific promotional codes during checkout.
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
1. Create a new coupon from your dashboard.
</li>


<li>
2. Enter the coupon code.
</li>


<li>
3. Select discount type.
</li>


<li>
4. Set usage conditions.
</li>


<li>
5. Save and activate the coupon.
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
Coupons help you create targeted offers while
keeping discount management simple inside Sellio.
</p>



</div>



</section>

<section
id="campaign"
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
2. Campaign Specific Discounts
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Create targeted promotions for specific customers,
products or seasonal campaigns using Sellio
marketing tools.
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
1. Choose the campaign you want to create.
</li>


<li>
2. Select the customers or products included.
</li>


<li>
3. Define discount rules and limits.
</li>


<li>
4. Review campaign settings.
</li>


<li>
5. Publish your promotional offer.
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


<p
className="
text-sm
font-semibold
"
>
Campaign Examples
</p>




<ul
className="
mt-3
space-y-2
text-sm
leading-6
text-navy-mute
"
>

<li>
• New customer discounts
</li>

<li>
• Seasonal promotions
</li>

<li>
• Product based offers
</li>

<li>
• Limited time campaigns
</li>

</ul>



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
Sellio Promotion Preview
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Example preview of how promotional information
can appear inside your Sellio dashboard.
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
Active Promotions
</p>


<p
className="
mt-1
text-xs
text-navy-mute
"
>
Dashboard demo preview
</p>



</div>





<div
className="
grid
gap-4
p-5
sm:grid-cols-2
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
Summer Offer
</p>



<p
className="
mt-2
text-lg
font-bold
"
>
20% OFF
</p>



<p
className="
mt-1
text-xs
text-navy-mute
"
>
Active Campaign
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
Coupon Usage
</p>



<p
className="
mt-2
text-lg
font-bold
text-coral
"
>
245
</p>



<p
className="
mt-1
text-xs
text-navy-mute
"
>
Customers Used
</p>



</div>



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
Explore more Sellio marketing and dashboard
documentation.
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
href="/documentation/managing-layouts"
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

Managing-Layouts


</div>



</Link>







<Link
href="/documentation/upsell"
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


Upsell


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