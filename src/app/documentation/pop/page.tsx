import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  PlayCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function PopPage() {

return (
<>
<Navbar />


<main className="min-h-screen bg-paper text-navy">


<div
className="
container-xl
grid gap-10 py-12
lg:grid-cols-[250px_minmax(0,1fr)_210px]
"
>


<DocumentationSidebar />


<article className="min-w-0">


<section>


<p className="text-sm font-semibold text-coral">
Instant Win Games
</p>


<h1
className="
mt-4
font-display
text-4xl
font-bold
"
>
Pop
</h1>


<p
className="
mt-5
text-lg
leading-8
text-navy-mute
"
>
Create an interactive Pop game where customers
select objects and reveal instant rewards.
</p>


</section>




<section
id="what-is-it"
className="
border-b border-border
py-12
"
>


<div className="flex gap-3 items-center">

<CircleHelp className="text-coral"/>

<h2 className="text-3xl font-bold">
What is it?
</h2>

</div>



<p className="mt-5 leading-8 text-navy-mute">
Pop is an instant win game where customers
interact with objects to reveal their result.
</p>


<div className="mt-6 space-y-3">


{[
"Customer opens the Pop game.",
"Customer selects an object.",
"The result is revealed instantly."
].map(item=>(

<div key={item} className="flex gap-3">

<CheckCircle2 className="text-coral"/>

<p className="text-navy-mute">
{item}
</p>

</div>

))}


</div>


</section>





<section
id="how-it-works"
className="
border-b border-border
py-12
"
>


<div className="flex gap-3 items-center">

<PlayCircle className="text-coral"/>

<h2 className="text-3xl font-bold">
How It Works
</h2>

</div>



<p className="mt-5 text-navy-mute leading-8">
Customers select an item and the system
generates the configured result.
</p>


<div className="mt-6 space-y-4">


{[
"Open Pop game.",
"Select an object.",
"Animation reveals the result.",
"Reward is displayed."
].map((item,index)=>(


<div key={item} className="flex gap-3">


<span className="
bg-coral
text-white
rounded-full
h-6 w-6
text-xs
flex items-center justify-center
">
{index+1}
</span>


<p className="text-navy-mute">
{item}
</p>


</div>


))}


</div>


</section>




{/* CUSTOMISATION OPTIONS */}



<section
id="customisation"
className="
border-b border-border
py-12
"
>


<h2 className="text-3xl font-bold">
Customisation Options
</h2>



<p className="mt-5 leading-8 text-navy-mute">
Customize your Pop game with your own icons,
sounds and backgrounds to match your brand.
</p>





{/* CUSTOM ICON */}



<div className="mt-10">


<h3 className="text-xl font-bold">
Custom Icon
</h3>



<p className="mt-3 text-navy-mute leading-7">
Upload custom icons to replace the default
Pop game visuals.
</p>



<div className="mt-5 space-y-3">


{[
"Prepare your icon images.",
"Upload icons in Pop settings.",
"Preview the updated design.",
"Save changes."
].map((item,index)=>(


<div key={item} className="flex gap-3">


<span
className="
h-6 w-6
rounded-full
bg-coral
text-white
text-xs
flex
items-center
justify-center
"
>
{index+1}
</span>



<p className="text-navy-mute">
{item}
</p>


</div>


))}


</div>


</div>









{/* CUSTOM SOUNDS */}



<div className="mt-12">


<h3 className="text-xl font-bold">
Custom Sounds
</h3>



<p className="mt-3 text-navy-mute leading-7">
Add sound effects to improve customer
interaction while playing Pop.
</p>




<div className="mt-5 space-y-3">


{[
"Upload your sound file.",
"Preview the sound effect.",
"Enable sound settings."
].map(item=>(


<div key={item} className="flex gap-3">


<CheckCircle2 className="text-coral"/>


<p className="text-navy-mute">
{item}
</p>


</div>


))}


</div>


</div>









{/* CUSTOM BACKGROUND IMAGE */}



<div className="mt-12">


<h3 className="text-xl font-bold">
Custom Background Image
</h3>



<p className="mt-3 text-navy-mute leading-7">
Upload a custom background image to create
a branded Pop experience.
</p>




<div className="mt-5 space-y-4">


{[
"Choose your background design.",
"Upload the image.",
"Preview the result.",
"Save the background."
].map((item,index)=>(


<div key={item} className="flex gap-3">


<span
className="
h-6 w-6
rounded-full
bg-coral
text-white
text-xs
flex
items-center
justify-center
"
>
{index+1}
</span>



<p className="text-navy-mute">
{item}
</p>


</div>


))}


</div>


</div>




</section>





{/* SHOW OR HIDE TICKET NUMBERS */}



<section
id="ticket-numbers"
className="
border-b border-border
py-12
"
>


<h2 className="text-3xl font-bold">
Show or Hide Ticket Numbers
</h2>




<p className="mt-5 leading-8 text-navy-mute">
Choose whether ticket numbers should be visible
during the Pop game experience.
</p>



<div className="mt-6 space-y-3">


{[
"Show ticket numbers for more transparency.",
"Hide ticket numbers for a cleaner interface.",
"Update the option from Pop settings."
].map(item=>(


<div key={item} className="flex gap-3">


<CheckCircle2 className="text-coral"/>


<p className="text-navy-mute">
{item}
</p>


</div>


))}


</div>


</section>









{/* PREVIEW */}



<section
id="preview"
className="
border-b border-border
py-12
"
>


<h2 className="text-3xl font-bold">
Pop Preview
</h2>



<p className="mt-5 leading-8 text-navy-mute">
Preview your Pop game before launch and confirm
that the design, interaction and results work correctly.
</p>




<div
className="
mt-7
rounded-xl
border
border-border
bg-white
p-6
"
>


<h3 className="font-bold">
Preview Checklist
</h3>



<div className="mt-5 space-y-3">


{[
"Check game appearance.",
"Test object selection.",
"Verify result display.",
"Confirm settings."
].map(item=>(


<div key={item} className="flex gap-3">


<CheckCircle2 className="text-coral"/>


<p className="text-navy-mute">
{item}
</p>


</div>


))}


</div>


</div>


</section>









{/* WANT TO TRY FIRST */}



<section
id="try-first"
className="
py-12
"
>


<h2 className="text-3xl font-bold">
Want to try it first?
</h2>



<p className="mt-5 leading-8 text-navy-mute">
Test your Pop game before publishing it.
Make sure everything works correctly for customers.
</p>




<div className="mt-6 space-y-4">


{[
"Open Pop preview mode.",
"Play the game experience.",
"Review the result.",
"Adjust settings if needed."
].map((item,index)=>(


<div key={item} className="flex gap-3">


<span
className="
h-6
w-6
rounded-full
bg-coral
text-white
text-xs
flex
items-center
justify-center
"
>
{index+1}
</span>



<p className="text-navy-mute">
{item}
</p>


</div>


))}


</div>


</section>









{/* PREVIOUS NEXT */}



<div
className="
grid
gap-4
border-t
border-border
py-10
sm:grid-cols-2
"
>


<Link
href="/documentation/scratch-card"
className="
rounded-2xl
border
border-border
p-5
"
>


<p className="text-xs uppercase text-navy-mute">
Previous
</p>


<p className="mt-2 font-bold">
Scratch Card
</p>


</Link>







<Link
href="/documentation/pinata"
className="
rounded-2xl
border
border-border
p-5
text-right
"
>


<p className="text-xs uppercase text-navy-mute">
Next
</p>


<div className="mt-2 flex justify-end items-center gap-2">


<p className="font-bold">
Piñata
</p>


<ArrowRight className="h-4 w-4"/>


</div>


</Link>



</div>




</article>





{/* RIGHT SIDEBAR */}



<aside className="hidden xl:block">


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
text-navy-mute
"
>
On This Page
</p>




<nav className="mt-5 space-y-4">


<a
href="#what-is-it"
className="
text-sm
text-coral
"
>
What is it?
</a>




<a
href="#how-it-works"
className="
block
text-sm
text-navy-mute
"
>
How It Works
</a>




<a
href="#customisation"
className="
block
text-sm
text-navy-mute
"
>
Customisation Options
</a>




<a
href="#ticket-numbers"
className="
block
text-sm
text-navy-mute
"
>
Ticket Numbers
</a>




<a
href="#preview"
className="
block
text-sm
text-navy-mute
"
>
Preview
</a>




<a
href="#try-first"
className="
block
text-sm
text-navy-mute
"
>
Want to try it first?
</a>


</nav>


</div>


</aside>



</div>


</main>


<Footer />


</>
);
}