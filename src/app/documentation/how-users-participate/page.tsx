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
    id:"dashboard",
    label:"Accessing Affiliate Dashboard",
  },
  {
    id:"terms",
    label:"Accepting Terms & Conditions",
  },
  {
    id:"share",
    label:"Sharing Their Referral Link",
  },
  {
    id:"tracking",
    label:"Tracking Their Progress",
  },
  {
    id:"related",
    label:"Related Guides",
  },
];





export default function HowUsersParticipatePage(){


const [activeSection,setActiveSection] =
useState("dashboard");



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
How Users Participate
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
Learn how customers can join your Sellio affiliate
programme, share referral links, and earn rewards
by bringing new customers to your store.
</p>



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
Accessing Affiliate Dashboard
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Customers can access their affiliate dashboard
from their Sellio account after joining the
affiliate programme.
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
1. Login to your Sellio account.
</li>


<li>
2. Open My Account.
</li>


<li>
3. Select Affiliate Dashboard.
</li>


<li>
4. View referral links, sales, and rewards.
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
The affiliate dashboard gives users a clear view
of their referrals and earned rewards.
</p>


</div>



</div>



</section>









<section
id="terms"
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
Accepting Terms & Conditions
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Before participating, users must accept the
affiliate programme terms and conditions.
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
• Review the affiliate programme rules.
</li>


<li>
• Accept commission and reward conditions.
</li>


<li>
• Confirm participation in the programme.
</li>


<li>
• Start sharing referral links.
</li>


</ul>





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


<CheckCircle
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
Affiliate Access Enabled
</p>


</div>


<p
className="
mt-3
text-sm
text-navy-mute
"
>
Users can participate once the required terms
have been accepted.
</p>


</div>




</section>









<section
id="share"
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
Sharing Their Referral Link
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Each affiliate receives a unique referral link
that can be shared with potential customers.
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
• Copy the unique referral link.
</li>


<li>
• Share it through social media or email.
</li>


<li>
• Customers visit Sellio using the link.
</li>


<li>
• Successful purchases are tracked automatically.
</li>


</ul>



</section>
            <section
              id="tracking"
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
                Tracking Their Progress
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Affiliates can monitor their referral
                activity, customer orders, and rewards
                directly from their dashboard.
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
                        Clicked
                      </td>


                      <td className="px-4 py-3 text-navy-mute">
                        A customer visited using the
                        affiliate referral link.
                      </td>


                    </tr>





                    <tr className="border-t border-border">


                      <td className="px-4 py-3 font-medium">
                        Pending
                      </td>


                      <td className="px-4 py-3 text-navy-mute">
                        The order is waiting for
                        confirmation.
                      </td>


                    </tr>





                    <tr className="border-t border-border">


                      <td className="px-4 py-3 font-medium">
                        Completed
                      </td>


                      <td className="px-4 py-3 text-navy-mute">
                        The referral has successfully
                        generated a reward.
                      </td>


                    </tr>





                    <tr className="border-t border-border">


                      <td className="px-4 py-3 font-medium">
                        Paid
                      </td>


                      <td className="px-4 py-3 text-navy-mute">
                        The affiliate reward has been
                        completed.
                      </td>


                    </tr>



                  </tbody>


                </table>



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
                How Referral Tracking Works
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Sellio automatically tracks customer
                activity through affiliate referral links.
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
                  1. A customer opens an affiliate link.
                </li>


                <li>
                  2. The referral session is recorded.
                </li>


                <li>
                  3. Customer completes a purchase.
                </li>


                <li>
                  4. Affiliate reward is calculated.
                </li>


                <li>
                  5. The reward appears in the dashboard.
                </li>


              </ol>




              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-green-500/10
                  px-5
                  py-4
                "
              >


                <p
                  className="
                    text-sm
                    leading-6
                  "
                >
                  Referral tracking works automatically
                  once the affiliate link is shared with
                  customers.
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
                Important Things for Customers to Know
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
                  • Customers must use the referral link
                  for tracking to work.
                </li>


                <li>
                  • Rewards apply only after successful
                  purchases.
                </li>


                <li>
                  • Referral status updates may take time.
                </li>


                <li>
                  • Affiliates can check progress from
                  their dashboard.
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
                Email Notifications
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Affiliates receive updates about referral
                activity and reward status through email
                notifications.
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
                  • New referral notification.
                </li>


                <li>
                  • Successful order updates.
                </li>


                <li>
                  • Reward approval messages.
                </li>


                <li>
                  • Payment status updates.
                </li>


              </ul>



            </section>
                        <section
              id="related"
              className="
                scroll-mt-28
                border-t
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
                Learn more about managing affiliate
                programmes and referral features in Sellio.
              </p>




              <div
                className="
                  mt-5
                  space-y-3
                "
              >


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
                    transition
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
                href="/documentation/setting-up-the-scheme"
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


                  Setting Up The Scheme


                </div>



              </Link>








              <Link
                href="/documentation/managing-referrals"
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


                  Managing Referrals


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