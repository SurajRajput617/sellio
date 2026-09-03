"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  Users,
  CheckCircle,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";



const sections = [
  {
    id:"overview",
    label:"Overview",
  },
  {
    id:"works",
    label:"How It Works",
  },
  {
    id:"configure",
    label:"What You Can Configure",
  },
  {
    id:"features",
    label:"Key Features",
  },
  {
    id:"related",
    label:"Related Guides",
  },
];




export default function AffiliateReferralSchemePage(){


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
id="overview"
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
Sellio Affiliate Tools
</p>




<h1
className="
mt-3
text-3xl
font-bold
"
>
Affiliate Referral Scheme
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
Create a referral system for your Sellio store
and reward partners who help bring new customers.
Manage referral tracking, rewards, and affiliate
activity from your dashboard.
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
px-5
py-4
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
Affiliate referrals help you grow your customer
base by turning your community into brand partners.
</p>


</div>



</section>









<section
id="works"
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
How It Works
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Sellio affiliate referrals allow partners to share
unique links and earn rewards from successful
customer referrals.
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
1. Create an affiliate programme in Sellio.
</li>


<li>
2. Invite partners to join your programme.
</li>


<li>
3. Partners share their unique referral links.
</li>


<li>
4. Customers purchase through referral links.
</li>


<li>
5. Rewards are tracked automatically.
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


<CheckCircle
className="
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
Referral activity can be monitored directly from
your Sellio dashboard.
</p>


</div>


</div>



</section>








<section
id="configure"
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
What You Can Configure
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Customize your affiliate programme settings to
match your business goals.
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
• Affiliate commission percentage
</li>


<li>
• Referral tracking duration
</li>


<li>
• Partner approval settings
</li>


<li>
• Reward conditions
</li>


<li>
• Affiliate account management
</li>


</ul>



</section>

<section
id="features"
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
Key Features
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Manage your affiliate programme with powerful
tools designed to track referrals and rewards.
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
• Create and manage affiliate accounts.
</li>


<li>
• Track referral links and customer activity.
</li>


<li>
• Monitor affiliate sales performance.
</li>


<li>
• Configure commission and reward settings.
</li>


<li>
• Manage payouts and affiliate records.
</li>


</ul>





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
Affiliate Dashboard Preview
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
View referral activity, partner performance,
and reward information from your Sellio dashboard.
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


<Users
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
Affiliate Management
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
Active Affiliates
</p>



<p
className="
mt-2
text-xl
font-bold
"
>
245
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
Referrals
</p>



<p
className="
mt-2
text-xl
font-bold
"
>
1,820
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
Rewards Paid
</p>



<p
className="
mt-2
text-xl
font-bold
text-coral
"
>
$8,450
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
Next Steps
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
After setting up your affiliate programme, invite
partners and start tracking referrals.
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
• Add your first affiliate partner.
</li>


<li>
• Share referral links with your audience.
</li>


<li>
• Monitor sales and rewards.
</li>


<li>
• Optimize your programme performance.
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
Explore more Sellio tools for marketing,
promotions, and customer growth.
</p>





<div
className="
mt-5
space-y-3
"
>



<Link
href="/documentation/product-catalogue"
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

Product Catalogue


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
href="/documentation/product-catalogue"
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

Product-Catalogue



</div>


</Link>








<Link
href="/documentation/setting-up-the-scheme"
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


Setting Up the Scheme


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