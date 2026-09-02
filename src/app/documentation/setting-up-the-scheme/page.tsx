"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  Settings,
  CheckCircle,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";



const sections = [
  {
    id:"access",
    label:"Accessing Affiliate Settings",
  },
  {
    id:"enable",
    label:"Enabling The Scheme",
  },
  {
    id:"reward",
    label:"Reward Settings",
  },
  {
    id:"approval",
    label:"Manual Approval",
  },
];



export default function SettingUpSchemePage(){


const [activeSection,setActiveSection] =
useState("access");



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
Setting Up The Scheme
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
Configure your Sellio affiliate referral programme
by setting rewards, approval options, and referral
rules that match your business goals.
</p>




</section>









<section
id="access"
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
Accessing Affiliate Settings
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Open your Sellio dashboard and navigate to the
affiliate settings area to manage your referral
programme.
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
3. Select Affiliate Scheme.
</li>


<li>
4. Manage referral settings and rewards.
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
Only store administrators can update affiliate
programme settings.
</p>


</div>


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
Enabling The Scheme
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Enable your affiliate programme to allow partners
to create referrals and start earning rewards.
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
• Turn Affiliate Scheme ON.
</li>


<li>
• Configure commission settings.
</li>


<li>
• Choose referral conditions.
</li>


<li>
• Save your programme settings.
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


<Settings
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
Affiliate Scheme Status
</p>


</div>




<div
className="
mt-5
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
Status
</p>


<p
className="
mt-2
flex
items-center
gap-2
text-sm
font-semibold
text-coral
"
>


<CheckCircle
className="
h-4
w-4
"
/>


Active


</p>


</div>



</div>



</section>









<section
id="reward"
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
Reward Settings
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Set the reward rules your affiliates receive after
successful customer referrals.
</p>





<div
className="
mt-6
grid
gap-4
sm:grid-cols-2
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
font-semibold
"
>
Referral Reward
</p>


<p
className="
mt-2
text-sm
text-navy-mute
"
>
Choose commission amount or percentage earned
by affiliates.
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
font-semibold
"
>
Reward Conditions
</p>


<p
className="
mt-2
text-sm
text-navy-mute
"
>
Define when rewards become available after a
successful referral.
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
                Minimum Spend Threshold
              </h2>



              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Set a minimum order value before an
                affiliate reward becomes available.
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
                  Example Setting
                </p>


                <div
                  className="
                    mt-4
                    grid
                    gap-4
                    sm:grid-cols-2
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
                      Minimum Order Value
                    </p>

                    <p
                      className="
                        mt-2
                        font-bold
                      "
                    >
                      $50
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
                      Reward Status
                    </p>


                    <p
                      className="
                        mt-2
                        font-bold
                        text-coral
                      "
                    >
                      Enabled
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
                Reward Type
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Choose how affiliates receive rewards
                for successful referrals.
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
                        Option
                      </th>


                      <th
                        className="
                          px-4
                          py-3
                        "
                      >
                        Description
                      </th>


                    </tr>

                  </thead>



                  <tbody>


                    <tr
                      className="
                        border-t
                        border-border
                      "
                    >

                      <td
                        className="
                          px-4
                          py-3
                          font-medium
                        "
                      >
                        Percentage Reward
                      </td>


                      <td
                        className="
                          px-4
                          py-3
                          text-navy-mute
                        "
                      >
                        Affiliates earn a percentage
                        from each successful referral.
                      </td>


                    </tr>





                    <tr
                      className="
                        border-t
                        border-border
                      "
                    >

                      <td
                        className="
                          px-4
                          py-3
                          font-medium
                        "
                      >
                        Fixed Reward
                      </td>


                      <td
                        className="
                          px-4
                          py-3
                          text-navy-mute
                        "
                      >
                        Affiliates receive a fixed
                        amount for completed referrals.
                      </td>


                    </tr>



                  </tbody>


                </table>


              </div>



            </section>









            <section
              id="approval"
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
                Manual Approval
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Control whether affiliate applications
                require approval before accessing the
                referral programme.
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
                  • Enable manual affiliate approval.
                </li>

                <li>
                  • Review partner applications.
                </li>

                <li>
                  • Approve trusted affiliates.
                </li>

                <li>
                  • Manage affiliate access.
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
                Terms & Conditions
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Add your affiliate programme rules and
                conditions to keep your referral system
                clear and transparent.
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
                  • Define reward eligibility.
                </li>

                <li>
                  • Explain affiliate responsibilities.
                </li>

                <li>
                  • Share payment conditions.
                </li>

                <li>
                  • Add programme restrictions.
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
                Settings Reference
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Review the main affiliate scheme settings
                available inside Sellio.
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
                        Setting
                      </th>


                      <th
                        className="
                          px-4
                          py-3
                        "
                      >
                        Default
                      </th>


                      <th
                        className="
                          px-4
                          py-3
                        "
                      >
                        Description
                      </th>


                    </tr>


                  </thead>




                  <tbody>


                    <tr className="border-t border-border">

                      <td className="px-4 py-3">
                        Affiliate Status
                      </td>


                      <td className="px-4 py-3">
                        Enabled
                      </td>


                      <td className="px-4 py-3 text-navy-mute">
                        Controls whether the referral
                        programme is active.
                      </td>


                    </tr>




                    <tr className="border-t border-border">

                      <td className="px-4 py-3">
                        Reward Type
                      </td>


                      <td className="px-4 py-3">
                        Percentage
                      </td>


                      <td className="px-4 py-3 text-navy-mute">
                        Defines how affiliates receive
                        rewards.
                      </td>


                    </tr>





                    <tr className="border-t border-border">

                      <td className="px-4 py-3">
                        Minimum Spend
                      </td>


                      <td className="px-4 py-3">
                        $50
                      </td>


                      <td className="px-4 py-3 text-navy-mute">
                        Minimum order value required
                        for reward eligibility.
                      </td>


                    </tr>





                    <tr className="border-t border-border">

                      <td className="px-4 py-3">
                        Manual Approval
                      </td>


                      <td className="px-4 py-3">
                        Off
                      </td>


                      <td className="px-4 py-3 text-navy-mute">
                        Controls affiliate approval
                        process.
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
                  • Changes to affiliate settings apply to
                  new referral activity.
                </li>


                <li>
                  • Existing rewards continue following
                  the previous rules.
                </li>


                <li>
                  • Review commission settings regularly
                  to match your business goals.
                </li>


                <li>
                  • Make sure affiliate terms are clear
                  before inviting partners.
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
                What Happens When You Disable The Scheme
              </h2>




              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Disabling the affiliate scheme will stop
                new referral activity while keeping your
                existing data available.
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
                  • New affiliates cannot join.
                </li>


                <li>
                  • New referral links stop generating
                  rewards.
                </li>


                <li>
                  • Previous affiliate records remain saved.
                </li>


              </ul>



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
                href="/documentation/affiliate-overview"
                className="
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-4
                "
              >

                <p className="text-xs text-navy-mute">
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

                  <ArrowLeft className="h-4 w-4"/>

               Affiliate-Overview

                </div>


              </Link>






              <Link
                href="/documentation/how-users-participate"
                className="
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-4
                  text-right
                "
              >

                <p className="text-xs text-navy-mute">
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

                How-Users-Participate

                  <ArrowRight className="h-4 w-4"/>

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