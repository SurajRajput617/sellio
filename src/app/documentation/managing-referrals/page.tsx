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
    id:"view",
    label:"Viewing Referrals",
  },
  {
    id:"status",
    label:"Understanding Referral Statuses",
  },
  {
    id:"filter",
    label:"Filtering Referrals",
  },
  {
    id:"stats",
    label:"Summary Stats",
  },
  {
    id:"related",
    label:"Related Guides",
  },
];





export default function ManagingReferralsPage(){


const [activeSection,setActiveSection] =
useState("view");



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
Sellio Affiliate Tools
</p>



<h1
className="
mt-3
text-3xl
font-bold
"
>
Managing Referrals
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
View, manage, and monitor affiliate referrals
inside Sellio. Track customer activity, review
referral status, and manage affiliate performance
from your dashboard.
</p>


</section>









<section
id="view"
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
Viewing Referrals
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
View all customer referrals generated through
affiliate links and monitor their progress.
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
1. Open the Sellio Affiliate Dashboard.
</li>


<li>
2. Navigate to Referral Management.
</li>


<li>
3. Select a referral to view details.
</li>


<li>
4. Review customer activity and reward status.
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
Referral records help you understand affiliate
performance and customer conversions.
</p>


</div>


</div>




</section>









<section
id="status"
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
Understanding Referral Statuses
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Each referral has a status that shows the current
progress of the customer order and reward.
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


<table
className="
w-full
text-left
text-sm
"
>


<thead
className="
bg-black/5
"
>

<tr>

<th
className="
px-4
py-3
"
>
Status
</th>


<th
className="
px-4
py-3
"
>
Meaning
</th>


</tr>

</thead>





<tbody>


<tr className="border-t border-border">

<td className="px-4 py-3 font-medium">
Pending
</td>

<td className="px-4 py-3 text-navy-mute">
Referral is waiting for order confirmation.
</td>

</tr>





<tr className="border-t border-border">

<td className="px-4 py-3 font-medium">
Approved
</td>

<td className="px-4 py-3 text-navy-mute">
Referral has been accepted and reward is ready.
</td>

</tr>





<tr className="border-t border-border">

<td className="px-4 py-3 font-medium">
Paid
</td>

<td className="px-4 py-3 text-navy-mute">
Affiliate reward has been completed.
</td>

</tr>




<tr className="border-t border-border">

<td className="px-4 py-3 font-medium">
Rejected
</td>

<td className="px-4 py-3 text-navy-mute">
Referral does not qualify for reward.
</td>

</tr>



</tbody>


</table>


</div>




</section>









<section
id="filter"
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
Filtering Referrals
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Use filters to quickly find referral records and
review specific affiliate activity.
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
• Filter by referral status.
</li>


<li>
• Search affiliate users.
</li>


<li>
• Review completed purchases.
</li>


<li>
• Check pending rewards.
</li>


</ul>



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
Summary Stats
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Get a quick overview of affiliate referral
performance and customer conversions.
</p>






<div
className="
mt-6
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
p-5
"
>

<p
className="
text-xs
text-navy-mute
"
>
Total Clicks
</p>


<p
className="
mt-2
text-2xl
font-bold
"
>
5,420
</p>


</div>







<div
className="
rounded-lg
border
border-border
p-5
"
>

<p
className="
text-xs
text-navy-mute
"
>
Total Referrals
</p>


<p
className="
mt-2
text-2xl
font-bold
"
>
860
</p>


</div>







<div
className="
rounded-lg
border
border-border
p-5
"
>

<p
className="
text-xs
text-navy-mute
"
>
Completed Rewards
</p>


<p
className="
mt-2
text-2xl
font-bold
text-coral
"
>
$6,250
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
Approving and Rejecting Referrals
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Review referral activity and decide whether a
referral qualifies for affiliate rewards.
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
1. Open the referral management section.
</li>


<li>
2. Select a pending referral.
</li>


<li>
3. Review customer and order information.
</li>


<li>
4. Approve or reject the referral.
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
leading-6
text-navy-mute
"
>
Approved referrals will move forward for reward
processing. Rejected referrals will not generate
affiliate rewards.
</p>


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
Managing Individual Users
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Manage individual affiliate accounts and update
user settings when required.
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
Affiliate User Management
</p>


</div>






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
• View affiliate details.
</li>


<li>
• Update referral settings.
</li>


<li>
• Reset affiliate codes.
</li>


<li>
• Disable or enable affiliate access.
</li>


<li>
• Remove affiliate accounts.
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
Reset Affiliate Code
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Generate a new referral code for an affiliate
when needed.
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
• Open affiliate user details.
</li>


<li>
• Select reset referral code.
</li>


<li>
• Confirm the new affiliate code.
</li>


<li>
• Share the updated code with the user.
</li>


</ul>



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
Affiliate Account Actions
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Use account actions to manage affiliate access
and maintain your referral programme.
</p>





<div
className="
mt-6
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
font-semibold
"
>
Enable
</p>


<p
className="
mt-2
text-sm
text-navy-mute
"
>
Allow users to participate again.
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
font-semibold
"
>
Disable
</p>


<p
className="
mt-2
text-sm
text-navy-mute
"
>
Temporarily stop affiliate activity.
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
font-semibold
"
>
Delete
</p>


<p
className="
mt-2
text-sm
text-navy-mute
"
>
Remove an affiliate account permanently.
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
Pending Referrals
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Pending referrals are waiting for review before
they become eligible for affiliate rewards.
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
• Review customer order details.
</li>


<li>
• Check referral conditions.
</li>


<li>
• Approve valid referrals.
</li>


<li>
• Reject referrals that do not qualify.
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
Referral Cap
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Set limits on referral activity to control how
many rewards affiliates can generate.
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
font-semibold
"
>
Example Referral Limit
</p>



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
text-xs
text-navy-mute
"
>
Maximum Referrals Per User
</p>


<p
className="
mt-2
text-xl
font-bold
"
>
100
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
Important Things to Know
</h2>




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
• Referral status updates depend on order activity.
</li>


<li>
• Approved referrals cannot be modified after
payment completion.
</li>


<li>
• Keep affiliate information updated for accurate
reporting.
</li>


<li>
• Review referral settings regularly.
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
Explore more Sellio affiliate management tools.
</p>





<div
className="
mt-5
space-y-3
"
>



<Link
href="/documentation/how-users-participate"
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
hover:border-coral
"
>

How Users Participate


<ChevronRight
className="
h-4
w-4
"
/>


</Link>







<Link
href="/documentation/setting-up-the-scheme"
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
hover:border-coral
"
>

Setting Up The Scheme


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
href="/documentation/how-users-participate"
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


How Users Participate


</div>



</Link>








<Link
href="/documentation/downloads-reports-overview"
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


Downloads-Reports-Overview


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