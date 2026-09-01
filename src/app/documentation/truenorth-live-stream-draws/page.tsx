"use client";

import { useEffect, useState } from "react";
import type { ElementType } from "react";
import Link from "next/link";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Circle,
  Info,
  Link2,
  Play,
  RefreshCw,
  RotateCcw,
  Settings,
  ShieldCheck,
  Store,
  Video,
  Workflow,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


const sections = [
  { id: "overview", label: "Overview" },
  { id: "video-demo", label: "Video Demo" },
  { id: "how-it-works", label: "How It Works" },
  { id: "workflow", label: "Integration Workflow" },
  { id: "activity", label: "Activity Monitor" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "next-steps", label: "Next Steps" },
];



const workflowSteps: {
  id:number;
  title:string;
  description:string;
  icon:ElementType;
}[] = [

  {
    id:1,
    title:"Store",
    description:"Review your ecommerce store connection.",
    icon:Store,
  },

  {
    id:2,
    title:"Integration",
    description:"Review supported connected services.",
    icon:Link2,
  },

  {
    id:3,
    title:"Activity",
    description:"Monitor dashboard connection activity.",
    icon:Activity,
  },

  {
    id:4,
    title:"Analytics",
    description:"Review available performance information.",
    icon:BarChart3,
  },

];



const graphData = [
  {label:"09:00",value:64},
  {label:"10:00",value:74},
  {label:"11:00",value:69},
  {label:"12:00",value:86},
  {label:"13:00",value:79},
  {label:"14:00",value:93},
  {label:"15:00",value:84},
];




export default function LiveIntegrationPage(){


const [activeSection,setActiveSection] =
useState("overview");


const [completedSteps,setCompletedSteps] =
useState<number[]>([]);


const [videoPlaying,setVideoPlaying] =
useState(false);


const [status,setStatus] =
useState<
"ready" | "checking" | "connected"
>("ready");




useEffect(()=>{


const handleScroll = ()=>{


let current = sections[0].id;


sections.forEach((item)=>{


const element =
document.getElementById(item.id);


if(!element) return;


const rect =
element.getBoundingClientRect();


if(rect.top <= 180){

current=item.id;

}


});



if(
window.innerHeight + window.scrollY >=
document.documentElement.scrollHeight - 10
){

current =
sections[sections.length-1].id;

}



setActiveSection(current);


};



handleScroll();


window.addEventListener(
"scroll",
handleScroll,
{
passive:true
}
);



return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};



},[]);





const toggleStep=(id:number)=>{


setCompletedSteps((current)=>

current.includes(id)

?
current.filter(
(item)=>item!==id
)

:

[
...current,
id
]

);


};





const resetWorkflow=()=>{

setCompletedSteps([]);

setStatus("ready");

};





const checkStatus=()=>{


setStatus("checking");


setTimeout(()=>{

setStatus("connected");

},900);


};





const progress =
Math.round(
(completedSteps.length /
workflowSteps.length)
*100
);



return (

<>
<Navbar />

<main className="min-h-screen bg-paper text-navy">


<div
className="
container-xl
grid gap-10 py-12
lg:grid-cols-[250px_minmax(0,1fr)_220px]
"
>


<DocumentationSidebar />



<article className="min-w-0">


<section className="border-b border-border pb-9">


<p className="text-xs font-semibold text-coral">
Sellio Documentation
</p>


<h1 className="mt-3 text-4xl font-bold">
Live Integration Dashboard
</h1>


<p className="mt-4 max-w-3xl leading-7 text-navy-mute">
Learn how Sellio connects ecommerce stores,
services and dashboard activity into one
simple integration experience.
</p>



<div
className="
mt-6 flex gap-3
rounded-lg border border-border
bg-black/5 px-4 py-3
"
>

<Info className="text-coral"/>


<p className="text-sm text-navy-mute">
This is a demonstration dashboard.
Controls do not modify a real account.
</p>


</div>


</section>
{/* OVERVIEW */}

<section
id="overview"
className="
scroll-mt-28
border-b border-border
py-9
"
>

<h2 className="text-2xl font-bold">
Overview
</h2>


<p className="mt-4 leading-7 text-navy-mute">
Sellio provides a central place to manage
ecommerce connections and dashboard information.
</p>



<div
className="
mt-7 grid gap-4
sm:grid-cols-3
"
>

{[
{
title:"Store",
text:"Manage ecommerce information.",
icon:Store,
},
{
title:"Integration",
text:"Connect supported services.",
icon:Workflow,
},
{
title:"Analytics",
text:"Review dashboard activity.",
icon:BarChart3,
},
].map((item)=>{


const Icon=item.icon;


return (

<div
key={item.title}
className="
rounded-xl
border border-border
p-5
"
>


<div
className="
flex h-11 w-11
items-center justify-center
rounded-lg bg-coral/10
"
>

<Icon
className="
h-5 w-5
text-coral
"
/>


</div>



<h3 className="mt-4 font-bold">
{item.title}
</h3>



<p className="
mt-2 text-sm
text-navy-mute
">
{item.text}
</p>


</div>

);


})}


</div>


</section>






{/* VIDEO */}

<section
id="video-demo"
className="
scroll-mt-28
border-b border-border
py-9
"
>


<div className="flex items-center gap-3">


<Video
className="
h-6 w-6
text-coral
"
/>


<h2 className="text-2xl font-bold">
Watch Dashboard Demo
</h2>


</div>




<div
className="
mt-7
relative aspect-video
rounded-xl
border border-border
bg-black/[0.04]
"
>


{
!videoPlaying ?


(

<div
className="
absolute inset-0
flex flex-col
items-center
justify-center
"
>

<button
type="button"
onClick={()=>setVideoPlaying(true)}
className="
flex h-16 w-16
items-center justify-center
rounded-full
bg-coral text-white
"
>

<Play
className="
ml-1
h-7 w-7
fill-current
"
/>


</button>


<p className="mt-5 font-bold">
Dashboard Video Demo
</p>


</div>


)


:

(

<div
className="
absolute inset-0
flex flex-col
items-center
justify-center
"
>


<CheckCircle2
className="
h-10 w-10
text-coral
"
/>


<p className="mt-4 font-bold">
Video Preview Active
</p>



<button
type="button"
onClick={()=>setVideoPlaying(false)}
className="
mt-5 rounded-lg
border border-border
px-4 py-2 text-xs
"
>

Close Preview

</button>


</div>


)

}



</div>


</section>








{/* HOW IT WORKS */}


<section
id="how-it-works"
className="
scroll-mt-28
border-b border-border
py-9
"
>


<h2 className="text-2xl font-bold">
How It Works
</h2>



<div
className="
mt-7 grid gap-4
md:grid-cols-3
"
>


{[
{
title:"Setup",
text:"Configure services.",
icon:Settings,
},
{
title:"Connect",
text:"Connect platforms.",
icon:Link2,
},
{
title:"Monitor",
text:"Track activity.",
icon:Activity,
},
].map((item)=>{


const Icon=item.icon;


return (

<div
key={item.title}
className="
rounded-xl
border border-border
p-5
"
>


<Icon
className="
text-coral
"
/>



<h3 className="mt-4 font-bold">
{item.title}
</h3>



<p className="
mt-2 text-sm
text-navy-mute
">
{item.text}
</p>



</div>

);


})}



</div>


</section>






{/* WORKFLOW */}


<section
id="workflow"
className="
scroll-mt-28
border-b border-border
py-9
"
>


<div className="flex justify-between">


<h2 className="text-2xl font-bold">
Integration Workflow
</h2>


<button
type="button"
onClick={resetWorkflow}
className="
flex items-center gap-2
rounded-lg border border-border
px-3 py-2 text-xs
"
>

<RotateCcw
className="h-4 w-4"
/>

Reset

</button>


</div>




<div
className="
mt-7 rounded-2xl
border border-border
p-5
"
>


<div className="flex justify-between">


<p className="font-bold">
Progress
</p>


<p className="font-bold text-coral">
{progress}%
</p>


</div>



<div
className="
mt-3 h-2 rounded-full
bg-black/10
"
>

<div
className="
h-full rounded-full
bg-coral
"
style={{
width:`${progress}%`
}}
/>


</div>




<div
className="
mt-8 grid gap-4
lg:grid-cols-4
"
>


{workflowSteps.map((step)=>{


const completed =
completedSteps.includes(step.id);


const Icon =
step.icon;



return (

<button
key={step.id}
type="button"
onClick={()=>toggleStep(step.id)}
className={`
rounded-xl
border p-4
text-left

${
completed
?
"border-coral bg-coral/10"
:
"border-border"
}

`}
>


<Icon
className="
h-6 w-6
text-coral
"
/>


<p className="mt-4 font-bold">
{step.title}
</p>


<p className="
mt-2 text-xs
text-navy-mute
">
{step.description}
</p>


</button>


);


})}



</div>


</div>


</section>
{/* ACTIVITY MONITOR */}

<section
  id="activity"
  className="
    scroll-mt-28
    border-b border-border
    py-9
  "
>
  <div className="flex items-center gap-3">
    <div
      className="
        flex h-10 w-10
        items-center justify-center
        rounded-lg bg-coral/10
      "
    >
      <Activity className="h-5 w-5 text-coral" />
    </div>

    <div>
      <p className="text-xs font-semibold text-coral">
        Dashboard
      </p>

      <h2 className="text-2xl font-bold">
        Activity Monitor
      </h2>
    </div>
  </div>

  <p className="mt-4 leading-7 text-navy-mute">
    Monitor connection status and review dashboard
    activity from your Sellio workflow.
  </p>

  <div
    className="
      mt-7 rounded-2xl
      border border-border
      p-5 sm:p-7
    "
  >
    <div
      className="
        flex flex-col gap-4
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div>
        <p className="font-bold">
          Connection Status
        </p>

        <p className="mt-1 text-xs text-navy-mute">
          Integration monitoring demo
        </p>
      </div>

      <button
        type="button"
        onClick={checkStatus}
        disabled={status === "checking"}
        className="
          flex items-center justify-center gap-2
          rounded-lg
          border border-border
          px-4 py-2
          text-xs font-semibold
          transition
          hover:border-coral
          hover:text-coral
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        <RefreshCw
          className={`
            h-3.5 w-3.5
            ${
              status === "checking"
                ? "animate-spin"
                : ""
            }
          `}
        />

        {status === "checking"
          ? "Checking..."
          : "Check Status"}
      </button>
    </div>

    <div
      className="
        mt-6 grid gap-4
        sm:grid-cols-3
      "
    >
      <div
        className="
          rounded-xl
          border border-border
          p-4
        "
      >
        <p className="text-xs text-navy-mute">
          Status
        </p>

        <div className="mt-3 flex items-center gap-2">
          {status === "connected" ? (
            <CheckCircle2 className="h-5 w-5 text-coral" />
          ) : (
            <Circle className="h-5 w-5 text-navy-mute" />
          )}

          <p className="text-sm font-bold">
            {status === "connected"
              ? "Connected"
              : status === "checking"
                ? "Checking..."
                : "Ready"}
          </p>
        </div>
      </div>

      <div
        className="
          rounded-xl
          border border-border
          p-4
        "
      >
        <p className="text-xs text-navy-mute">
          Workflow
        </p>

        <p className="mt-3 text-xl font-bold">
          {progress}%
        </p>

        <p className="mt-1 text-xs text-navy-mute">
          Completion status
        </p>
      </div>

      <div
        className="
          rounded-xl
          border border-border
          p-4
        "
      >
        <p className="text-xs text-navy-mute">
          Monitoring
        </p>

        <div className="mt-3 flex items-center gap-2">
          <Activity className="h-5 w-5 text-coral" />

          <p className="text-sm font-bold">
            Active
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



{/* PERFORMANCE GRAPH */}

<section
  id="activity-graph"
  className="
    scroll-mt-28
    border-b border-border
    py-9
  "
>
  <h2 className="text-2xl font-bold">
    Performance Overview
  </h2>

  <p className="mt-4 leading-7 text-navy-mute">
    View a sample activity graph showing how dashboard
    information can be displayed visually.
  </p>

  <div
    className="
      mt-7 rounded-2xl
      border border-border
      p-5 sm:p-7
    "
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="font-bold">
          Connection Activity
        </p>

        <p className="mt-1 text-xs text-navy-mute">
          Example analytics view
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs text-navy-mute">
        <span className="h-2 w-2 rounded-full bg-coral" />
        Activity
      </div>
    </div>

    <div
      className="
        mt-8 grid h-64
        grid-cols-7
        items-end gap-3
      "
    >
      {graphData.map((item) => (
        <div
          key={item.label}
          className="
            flex h-full
            flex-col
            items-center
            justify-end
          "
        >
          <div
            className="
              flex w-full
              flex-1
              items-end
            "
          >
            <div
              className="
                w-full
                rounded-t-md
                bg-coral
                transition-all
              "
              style={{
                height: `${item.value}%`,
              }}
              title={`${item.label}: ${item.value}%`}
            />
          </div>

          <span className="mt-2 text-[10px] text-navy-mute">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>



{/* TROUBLESHOOTING */}

<section
  id="troubleshooting"
  className="
    scroll-mt-28
    border-b border-border
    py-9
  "
>
  <h2 className="text-2xl font-bold">
    Troubleshooting
  </h2>

  <p className="mt-4 leading-7 text-navy-mute">
    Review these steps if your integration information
    does not appear correctly.
  </p>

  <div className="mt-6 space-y-4">
    <div
      className="
        rounded-xl
        border border-border
        p-5
      "
    >
      <div className="flex gap-3">
        <Settings className="h-5 w-5 shrink-0 text-coral" />

        <div>
          <p className="font-semibold">
            Review Settings
          </p>

          <p className="mt-2 text-sm leading-6 text-navy-mute">
            Confirm your store and integration settings
            are configured correctly.
          </p>
        </div>
      </div>
    </div>

    <div
      className="
        rounded-xl
        border border-border
        p-5
      "
    >
      <div className="flex gap-3">
        <RefreshCw className="h-5 w-5 shrink-0 text-coral" />

        <div>
          <p className="font-semibold">
            Refresh Dashboard
          </p>

          <p className="mt-2 text-sm leading-6 text-navy-mute">
            Refresh the dashboard after making changes
            to your integration.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



{/* NEXT STEPS */}

<section
  id="next-steps"
  className="
    scroll-mt-28
    border-b border-border
    py-9
  "
>
  <h2 className="text-2xl font-bold">
    Next Steps
  </h2>

  <p className="mt-4 leading-7 text-navy-mute">
    Continue exploring Sellio features and review your
    ecommerce workflow, connected services and dashboard
    analytics.
  </p>

  <div className="mt-6 grid gap-4">
    <div
      className="
        rounded-xl
        border border-border
        p-5
      "
    >
      <div className="flex items-center gap-3">
        <BarChart3 className="h-5 w-5 shrink-0 text-coral" />

        <div>
          <p className="font-semibold">
            Review Analytics
          </p>

          <p className="mt-1 text-sm text-navy-mute">
            Monitor store activity and dashboard
            information.
          </p>
        </div>
      </div>
    </div>

    <div
      className="
        rounded-xl
        border border-border
        p-5
      "
    >
      <div className="flex items-center gap-3">
        <ShieldCheck className="h-5 w-5 shrink-0 text-coral" />

        <div>
          <p className="font-semibold">
            Maintain Connections
          </p>

          <p className="mt-1 text-sm text-navy-mute">
            Keep your connected ecommerce services
            updated.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



{/* PREVIOUS / NEXT NAVIGATION */}

<div
  className="
    grid gap-4 py-8
    sm:grid-cols-2
  "
>
  <Link
    href="/documentation/truenorth-autodraws"
    className="
      rounded-xl
      border border-border
      px-5 py-4
      transition
      hover:border-coral
    "
  >
    <p className="text-xs text-navy-mute">
      Previous
    </p>

    <div className="mt-2 flex items-center gap-2">
      <ArrowLeft className="h-4 w-4" />

      <p className="font-semibold">
        True north-Autodraws
      </p>
    </div>
  </Link>

  <Link
    href="/documentation/manual-draw"
    className="
      rounded-xl
      border border-border
      px-5 py-4
      text-right
      transition
      hover:border-coral
    "
  >
    <p className="text-xs text-navy-mute">
      Next
    </p>

    <div
      className="F
        mt-2 flex
        items-center
        justify-end
        gap-2
      "
    >
      <p className="font-semibold">
       Manual Draw
      </p>

      <ArrowRight className="h-4 w-4" />
    </div>
  </Link>
</div>



{/* END MAIN CONTENT */}

</article>



{/* RIGHT SIDEBAR - ON THIS PAGE */}

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
        tracking-wide
        text-navy-mute
      "
    >
      On This Page
    </p>

    <nav className="mt-5 space-y-4">
      {sections.map((item) => (
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
                ? "font-medium text-coral"
                : "text-navy-mute hover:text-coral"
            }
          `}
        >
          {item.label}
        </a>
      ))}
    </nav>
  </div>
</aside>



{/* CLOSE 3-COLUMN GRID */}

</div>

</main>

<Footer />

</>
);

}
