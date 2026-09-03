"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  FileText,
} from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";



const sections = [
  {
    id: "generate",
    label: "How to Generate a Report",
  },
  {
    id: "customers",
    label: "Customer Insights",
  },
  {
    id: "sales",
    label: "Revenue & Sales",
  },
  {
    id: "products",
    label: "Product Performance",
  },
  {
    id: "marketing",
    label: "Marketing & Finance",
  },
  {
    id: "exports",
    label: "Data Exports",
  },
];





const reports = {


  customerValue:{
    title:"Customer Value Report",
    description:
    "Understand customer spending behaviour and identify your most valuable customers.",
    details:[
      "Total customer revenue",
      "Average order value",
      "Purchase frequency",
      "Customer lifetime value"
    ]
  },



  inactiveCustomers:{
    title:"Inactive Customers Report",
    description:
    "Find customers who have stopped purchasing and create re-engagement campaigns.",
    details:[
      "Last purchase date",
      "Inactive customer list",
      "Customer activity history",
      "Reactivation opportunities"
    ]
  },



  newReturning:{
    title:"New vs Returning Customers",
    description:
    "Compare new customer growth with returning customer activity.",
    details:[
      "New customer count",
      "Returning customer count",
      "Repeat purchase rate",
      "Customer retention"
    ]
  },



  customerAttribution:{
    title:"Customer Acquisition Attribution",
    description:
    "Understand which marketing channels bring customers to your store.",
    details:[
      "Traffic source",
      "Campaign performance",
      "Conversion tracking",
      "Acquisition cost"
    ]
  },



  productPerformance:{
    title:"Product Performance Report",
    description:
    "Analyze product sales and identify your best performing products.",
    details:[
      "Product sales",
      "Revenue generated",
      "Orders per product",
      "Product trends"
    ]
  },



  categoryPerformance:{
    title:"Category Performance Report",
    description:
    "Review category level sales and performance metrics.",
    details:[
      "Category revenue",
      "Best categories",
      "Category growth",
      "Customer demand"
    ]
  }



};








export default function DownloadsPage(){



const [activeSection,setActiveSection] =
useState("generate");



const [openReport,setOpenReport] =
useState<string | null>(null);





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
Sellio Downloads & Reports
</p>




<h1
className="
mt-3
text-3xl
font-bold
"
>
Downloads
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
Generate detailed reports from your Sellio store
to understand customers, sales, products, and
business performance.
</p>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Reports can be exported as downloadable files
and used to analyse store activity, customer
behaviour, and revenue growth.
</p>





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
Reports are generated in the background.
You can download completed reports from your
Sellio dashboard.
</p>



</div>


</div>





</section>









<section
id="generate"
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
How to Generate a Report
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Create reports by selecting the required report
type and applying available filters.
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
1. Open Downloads from the Sellio dashboard.
</li>

<li>
2. Select Generate Report.
</li>

<li>
3. Choose the report type.
</li>

<li>
4. Select date range and filters.
</li>

<li>
5. Click Generate to create your report.
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
You can create multiple reports, but large
reports may take additional time to complete.
</p>


</div>



</section>
<section
id="customers"
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
Customer Insights
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Understand customer behaviour using detailed
customer reports.
</p>





<div
className="
mt-6
space-y-3
"
>





{/* Customer Value Report */}

<div
className="
rounded-lg
border
border-border
"
>


<button
onClick={()=>setOpenReport(
openReport === "customerValue"
? null
: "customerValue"
)}

className="
flex
w-full
items-center
justify-between
px-4
py-3
text-sm
hover:border-coral
"
>


Customer Value Report



<ChevronRight
className={`
h-4
w-4
transition-transform

${
openReport === "customerValue"
?
"rotate-90"
:
""
}

`}
/>



</button>





{
openReport === "customerValue" && (

<div
className="
border-t
border-border
px-4
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
{reports.customerValue.description}
</p>



<ul
className="
mt-3
space-y-2
text-sm
text-navy-mute
"
>

{
reports.customerValue.details.map(
(item)=>(
<li key={item}>
• {item}
</li>
)
)

}

</ul>



</div>

)

}



</div>








{/* Inactive Customers Report */}


<div
className="
rounded-lg
border
border-border
"
>


<button

onClick={()=>setOpenReport(
openReport === "inactiveCustomers"
? null
: "inactiveCustomers"
)}

className="
flex
w-full
items-center
justify-between
px-4
py-3
text-sm
hover:border-coral
"
>


Inactive Customers Report




<ChevronRight
className={`
h-4
w-4
transition-transform

${
openReport === "inactiveCustomers"
?
"rotate-90"
:
""
}

`}
/>



</button>





{
openReport === "inactiveCustomers" && (

<div
className="
border-t
border-border
px-4
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
{reports.inactiveCustomers.description}
</p>



<ul
className="
mt-3
space-y-2
text-sm
text-navy-mute
"
>


{
reports.inactiveCustomers.details.map(
(item)=>(
<li key={item}>
• {item}
</li>
)
)

}


</ul>



</div>

)

}



</div>









{/* New vs Returning Customers */}



<div
className="
rounded-lg
border
border-border
"
>


<button

onClick={()=>setOpenReport(
openReport === "newReturning"
? null
: "newReturning"
)}

className="
flex
w-full
items-center
justify-between
px-4
py-3
text-sm
hover:border-coral
"
>


New vs Returning Customers




<ChevronRight
className={`
h-4
w-4
transition-transform

${
openReport === "newReturning"
?
"rotate-90"
:
""
}

`}
/>



</button>





{
openReport === "newReturning" && (

<div
className="
border-t
border-border
px-4
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
{reports.newReturning.description}
</p>



<ul
className="
mt-3
space-y-2
text-sm
text-navy-mute
"
>


{
reports.newReturning.details.map(
(item)=>(
<li key={item}>
• {item}
</li>
)
)

}


</ul>



</div>

)

}



</div>









{/* Customer Acquisition Attribution */}



<div
className="
rounded-lg
border
border-border
"
>


<button

onClick={()=>setOpenReport(
openReport === "customerAttribution"
? null
: "customerAttribution"
)}

className="
flex
w-full
items-center
justify-between
px-4
py-3
text-sm
hover:border-coral
"
>


Customer Acquisition Attribution




<ChevronRight
className={`
h-4
w-4
transition-transform

${
openReport === "customerAttribution"
?
"rotate-90"
:
""
}

`}
/>



</button>





{
openReport === "customerAttribution" && (

<div
className="
border-t
border-border
px-4
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
{reports.customerAttribution.description}
</p>



<ul
className="
mt-3
space-y-2
text-sm
text-navy-mute
"
>


{
reports.customerAttribution.details.map(
(item)=>(
<li key={item}>
• {item}
</li>
)
)

}


</ul>



</div>

)

}



</div>





</div>



</section>
<section
id="sales"
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
Revenue & Sales
</h2>



<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Analyse your store revenue, orders, and payment
activity with detailed sales reports.
</p>





<div
className="
mt-6
space-y-3
"
>



{[
{
id:"salesReport",
title:"Sales Report",
description:
"Review total sales, order performance, and revenue trends.",
items:[
"Total revenue",
"Completed orders",
"Sales growth",
"Daily sales activity"
]
},
{
id:"ordersExport",
title:"Orders Export",
description:
"Download complete order information for analysis.",
items:[
"Order details",
"Customer information",
"Payment status",
"Order history"
]
},
{
id:"paymentPerformance",
title:"Payment Gateway Performance",
description:
"Monitor payment methods and transaction performance.",
items:[
"Successful payments",
"Failed transactions",
"Gateway usage",
"Payment trends"
]
}

].map((report)=>(


<div
key={report.id}
className="
rounded-lg
border
border-border
"
>


<button

onClick={()=>setOpenReport(
openReport === report.id
?
null
:
report.id
)}

className="
flex
w-full
items-center
justify-between
px-4
py-3
text-sm
hover:border-coral
"
>

{report.title}



<ChevronRight
className={`
h-4
w-4
transition-transform
${
openReport === report.id
?
"rotate-90"
:
""
}
`}
/>


</button>




{
openReport === report.id && (

<div
className="
border-t
border-border
px-4
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
{report.description}
</p>



<ul
className="
mt-3
space-y-2
text-sm
text-navy-mute
"
>

{
report.items.map(
(item)=>(
<li key={item}>
• {item}
</li>
)
)

}

</ul>


</div>

)

}


</div>


))}



</div>



</section>









<section
id="products"
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
Product Performance
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Understand which products and categories perform
best with product analytics reports.
</p>





<div
className="
mt-6
space-y-3
"
>


{[
{
id:"productPerformance",
title:"Product Performance Report",
description:
"Analyze product sales and identify your best performing products.",
items:[
"Product sales",
"Revenue generated",
"Orders per product",
"Product trends"
]
},
{
id:"categoryPerformance",
title:"Category Performance Report",
description:
"Review category level sales and performance metrics.",
items:[
"Category revenue",
"Best categories",
"Category growth",
"Customer demand"
]
}

].map((report)=>(


<div
key={report.id}
className="
rounded-lg
border
border-border
"
>


<button

onClick={()=>setOpenReport(
openReport === report.id
?
null
:
report.id
)}

className="
flex
w-full
items-center
justify-between
px-4
py-3
text-sm
hover:border-coral
"
>


{report.title}



<ChevronRight
className={`
h-4
w-4
transition-transform

${
openReport === report.id
?
"rotate-90"
:
""
}

`}
/>



</button>





{
openReport === report.id && (

<div
className="
border-t
border-border
px-4
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
{report.description}
</p>




<ul
className="
mt-3
space-y-2
text-sm
text-navy-mute
"
>


{
report.items.map(
(item)=>(
<li key={item}>
• {item}
</li>
)
)

}


</ul>



</div>

)

}




</div>


))}



</div>



</section>









<section
id="marketing"
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
Marketing & Finance
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Track marketing performance, wallet activity,
and customer financial data.
</p>





<div
className="
mt-6
space-y-3
"
>


{[
"Coupon ROI Analysis",
"Wallet Credit Usage",
"Customer Withdrawals",
"Customer Withdrawal Summary",
"Users Export"

].map((item)=>(


<div
key={item}
className="
rounded-lg
border
border-border
"
>


<button

onClick={()=>setOpenReport(
openReport === item
?
null
:
item
)}

className="
flex
w-full
items-center
justify-between
px-4
py-3
text-sm
hover:border-coral
"
>


{item}



<ChevronRight
className={`
h-4
w-4
transition-transform

${
openReport === item
?
"rotate-90"
:
""
}

`}
/>



</button>




{
openReport === item && (

<div
className="
border-t
border-border
px-4
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

Detailed {item} report information,
performance metrics, and downloadable
data are available here.

</p>


</div>

)

}



</div>


))}



</div>




</section>
<section
id="exports"
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
Data Exports
</h2>




<p
className="
mt-4
text-sm
leading-7
text-navy-mute
"
>
Export important Sellio data files for backup,
analysis, and business reporting.
</p>





<div
className="
mt-6
space-y-3
"
>



{[
{
id:"instantWinners",
title:"Instant Winners Export",
description:
"Export instant winner campaign data including customers and rewards.",
items:[
"Winner details",
"Campaign information",
"Reward information",
"Export history"
]
},
{
id:"drawWinners",
title:"Draw Winners Export",
description:
"Download draw campaign winner records and related information.",
items:[
"Winner list",
"Draw details",
"Prize information",
"Customer data"
]
}

].map((report)=>(



<div
key={report.id}
className="
rounded-lg
border
border-border
"
>


<button

onClick={()=>setOpenReport(
openReport === report.id
?
null
:
report.id
)}

className="
flex
w-full
items-center
justify-between
px-4
py-3
text-sm
hover:border-coral
"
>

{report.title}



<ChevronRight
className={`
h-4
w-4
transition-transform

${
openReport === report.id
?
"rotate-90"
:
""
}

`}
/>



</button>





{
openReport === report.id && (

<div
className="
border-t
border-border
px-4
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
{report.description}
</p>



<ul
className="
mt-3
space-y-2
text-sm
text-navy-mute
"
>

{
report.items.map(
(item)=>(
<li key={item}>
• {item}
</li>
)
)

}

</ul>



</div>

)

}



</div>



))}



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
Explore more Sellio tools for managing your
store data and performance.
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
href="/documentation/tracking"
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


Tracking



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
href="/documentation/managing-referrals"
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



Managing-Referrals



</div>



</Link>






<Link
href="/documentation/standards-overview"
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


Standards-Overview



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