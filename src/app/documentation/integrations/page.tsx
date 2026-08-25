import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Settings,
  Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


export default function IntegrationsPage() {

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


          {/* LEFT SIDEBAR */}

          <DocumentationSidebar />



          {/* CONTENT */}

          <article className="min-w-0">



            {/* HEADER */}


            <section>

              <p className="text-sm font-semibold text-coral">
                Settings
              </p>



              <h1
                className="
                mt-4
                font-display
                text-4xl
                font-bold
                tracking-[-0.04em]
                "
              >
                Integrations
              </h1>



              <p
                className="
                mt-5
                max-w-3xl
                text-lg
                leading-8
                text-navy-mute
                "
              >
                Connect Sellio with external tools and
                automation services to manage customer data,
                events and workflows automatically.
              </p>


            </section>









            {/* OVERVIEW */}


            <section
              id="overview"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Code2
                  className="
                  h-6 w-6
                  text-coral
                  "
                />


                <h2
                  className="
                  font-display
                  text-3xl
                  font-bold
                  "
                >
                  Integrations Overview
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Integrations allow Sellio to connect with
                third-party platforms. You can send website
                events to external services and create
                automated workflows.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Connect external automation platforms.",
                  "Send customer and order information.",
                  "Create custom workflows."
                ].map((item)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >

                    <CheckCircle2
                      className="
                      h-5 w-5
                      text-coral
                      "
                    />


                    <p className="text-navy-mute">
                      {item}
                    </p>


                  </div>


                ))}


              </div>


            </section>









            {/* N8N AUTOMATIONS */}


            <section
              id="n8n"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Zap
                  className="
                  h-6 w-6
                  text-coral
                  "
                />


                <h2
                  className="
                  font-display
                  text-3xl
                  font-bold
                  "
                >
                  n8n Automations
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Use n8n automation workflows to connect Sellio
                events with other applications. When an action
                happens, Sellio can send data to your workflow.
              </p>




              <div
                className="
                mt-7
                rounded-xl
                border border-border
                bg-white
                p-5
                "
              >


                <p className="font-bold">
                  Example Automations
                </p>


                <div className="mt-4 space-y-3">


                  {[
                    "Send order details automatically.",
                    "Create customer notifications.",
                    "Update connected systems."
                  ].map((item)=>(


                    <div
                      key={item}
                      className="flex gap-3"
                    >

                      <CheckCircle2
                        className="
                        h-5 w-5
                        text-coral
                        "
                      />


                      <p className="text-sm text-navy-mute">
                        {item}
                      </p>


                    </div>


                  ))}


                </div>


              </div>


            </section>
                        {/* CONFIGURATION */}


            <section
              id="configuration"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <div className="flex items-center gap-3">


                <Settings
                  className="
                  h-6 w-6
                  text-coral
                  "
                />


                <h2
                  className="
                  font-display
                  text-3xl
                  font-bold
                  "
                >
                  Configuration
                </h2>


              </div>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Configure your Sellio integration settings
                from the dashboard. Add your webhook details
                and connect external automation services.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Open Sellio admin settings.",
                  "Go to the Integrations section.",
                  "Add webhook or automation details.",
                  "Save and test your connection."
                ].map((item,index)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >

                    <span
                      className="
                      flex h-6 w-6
                      items-center-center
                      justify-center
                      rounded-full
                      bg-coral
                      text-xs
                      font-bold
                      text-white
                      "
                    >
                      {index + 1}
                    </span>


                    <p className="text-navy-mute">
                      {item}
                    </p>


                  </div>


                ))}


              </div>


            </section>









            {/* WEBHOOK STRUCTURE */}


            <section
              id="webhook"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <h2
                className="
                font-display
                text-3xl
                font-bold
                "
              >
                Webhook Structure
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Sellio sends event data in a structured format.
                Connected applications can read this data and
                perform automated actions.
              </p>




              <div
                className="
                mt-7
                rounded-xl
                border border-border
                bg-white
                p-5
                "
              >

<pre
className="
overflow-x-auto
text-sm
text-navy-mute
"
>
{`{
  "event": "order.completed",
  "customer": {
    "id": "123",
    "email": "customer@email.com"
  },
  "order": {
    "id": "ORD-001",
    "total": 50
  }
}`}
</pre>


              </div>


            </section>









            {/* HEADERS */}


            <section
              id="headers"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <h2
                className="
                font-display
                text-3xl
                font-bold
                "
              >
                Headers
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Webhook requests include headers that help
                identify the request and verify the source.
              </p>




              <div
                className="
                mt-7
                rounded-xl
                border border-border
                bg-white
                p-5
                "
              >


                <ul
                  className="
                  space-y-3
                  text-sm
                  text-navy-mute
                  "
                >

                  <li>
                    • Content-Type: application/json
                  </li>


                  <li>
                    • Event-Type: event name
                  </li>


                  <li>
                    • Authorization: secure key
                  </li>


                </ul>


              </div>


            </section>
                        {/* EVENT REFERENCE */}


            <section
              id="events"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <h2
                className="
                font-display
                text-3xl
                font-bold
                "
              >
                Event Reference
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Sellio sends events when important actions
                happen. These events can be used to create
                automation workflows.
              </p>







              {/* ORDER COMPLETED */}


              <div className="mt-10">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  1. Order Completed
                </h3>



                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Triggered when a customer successfully
                  completes an order on your Sellio website.
                </p>




                <div
                  className="
                  mt-5
                  rounded-xl
                  border border-border
                  bg-white
                  p-5
                  "
                >

<pre
className="
overflow-x-auto
text-sm
text-navy-mute
"
>
{`{
  "event": "order.completed",
  "order_id": "ORD-001",
  "customer_id": "123",
  "amount": 100
}`}
</pre>

                </div>


              </div>









              {/* USER CREATED */}


              <div className="mt-12">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  2. User Created
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Triggered when a new customer creates an
                  account on your Sellio platform.
                </p>




                <div
                  className="
                  mt-5
                  rounded-xl
                  border border-border
                  bg-white
                  p-5
                  "
                >

<pre
className="
overflow-x-auto
text-sm
text-navy-mute
"
>
{`{
  "event": "user.created",
  "user_id": "123",
  "email": "customer@email.com"
}`}
</pre>

                </div>


              </div>









              {/* MARKETING SUBSCRIBED */}



              <div className="mt-12">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  3. Marketing Subscribed
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Triggered when a customer subscribes to
                  marketing communication.
                </p>




                <div
                  className="
                  mt-5
                  rounded-xl
                  border border-border
                  bg-white
                  p-5
                  "
                >

<pre
className="
overflow-x-auto
text-sm
text-navy-mute
"
>
{`{
  "event": "marketing.subscribed",
  "customer_id": "123",
  "email": "customer@email.com",
  "status": "subscribed"
}`}
</pre>

                </div>


              </div>









              {/* MARKETING UNSUBSCRIBED */}



              <div className="mt-12">


                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  4. Marketing Unsubscribed
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-navy-mute
                  "
                >
                  Triggered when a customer unsubscribes from
                  marketing communication.
                </p>




                <div
                  className="
                  mt-5
                  rounded-xl
                  border border-border
                  bg-white
                  p-5
                  "
                >

<pre
className="
overflow-x-auto
text-sm
text-navy-mute
"
>
{`{
  "event": "marketing.unsubscribed",
  "customer_id": "123",
  "email": "customer@email.com",
  "status": "unsubscribed"
}`}
</pre>

                </div>


              </div>


            </section>









            {/* HOW CONTENT IS REPRESENTED */}


            <section
              id="content"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <h2
                className="
                font-display
                text-3xl
                font-bold
                "
              >
                How Content Is Represented
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Webhook information is sent in JSON format.
                Each event contains data related to the
                action performed in Sellio.
              </p>




              <div
                className="
                mt-7
                rounded-xl
                border border-border
                bg-white
                p-5
                "
              >

                <div className="space-y-4">


                  <div>
                    <p className="font-bold">
                      Event Name
                    </p>

                    <p className="mt-1 text-sm text-navy-mute">
                      Shows which Sellio action occurred.
                    </p>
                  </div>



                  <div>
                    <p className="font-bold">
                      Customer Data
                    </p>

                    <p className="mt-1 text-sm text-navy-mute">
                      Contains customer-related information.
                    </p>
                  </div>



                  <div>
                    <p className="font-bold">
                      Order Information
                    </p>

                    <p className="mt-1 text-sm text-navy-mute">
                      Contains order details when required.
                    </p>
                  </div>


                </div>


              </div>


            </section>
                        {/* PAYLOAD EXAMPLE */}


            <section
              id="payload"
              className="
              scroll-mt-28
              border-b border-border
              py-12
              "
            >


              <h2
                className="
                font-display
                text-3xl
                font-bold
                "
              >
                Payload Example
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Below is an example of the information sent
                when a Sellio event is triggered.
              </p>




              <div
                className="
                mt-7
                rounded-xl
                border border-border
                bg-white
                p-5
                "
              >

<pre
className="
overflow-x-auto
text-sm
text-navy-mute
"
>
{`{
  "event": "order.completed",
  "data": {
    "customer": {
      "name": "John Smith",
      "email": "john@email.com"
    },
    "order": {
      "id": "ORD-1001",
      "total": 75
    }
  }
}`}
</pre>

              </div>


            </section>









            {/* DELIVERY AND RETRIES */}


            <section
              id="delivery"
              className="
              scroll-mt-28
              py-12
              "
            >


              <h2
                className="
                font-display
                text-3xl
                font-bold
                "
              >
                Delivery and Retries
              </h2>




              <p
                className="
                mt-5
                leading-8
                text-navy-mute
                "
              >
                Sellio sends webhook data automatically when
                connected events occur. If delivery fails,
                check your endpoint configuration and retry
                the request.
              </p>




              <div className="mt-7 space-y-4">


                {[
                  "Webhook requests are sent automatically.",
                  "Keep your webhook URL active.",
                  "Verify your endpoint security.",
                  "Retry failed deliveries when required."
                ].map((item)=>(


                  <div
                    key={item}
                    className="flex gap-3"
                  >


                    <CheckCircle2
                      className="
                      h-5 w-5
                      text-coral
                      "
                    />


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
              grid gap-4
              border-t border-border
              py-10
              sm:grid-cols-2
              "
            >


              <Link
                href="/documentation/settings"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                "
              >


                <p className="text-xs uppercase text-navy-mute">
                  Previous
                </p>


                <p className="mt-2 font-bold">
                  Settings
                </p>


              </Link>







              <Link
                href="/documentation/api"
                className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                text-right
                "
              >


                <p className="text-xs uppercase text-navy-mute">
                  Next
                </p>



                <div
                  className="
                  mt-2
                  flex
                  justify-end
                  items-center
                  gap-2
                  "
                >

                  <p className="font-bold">
                    API
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
              sticky top-28
              border-l border-border
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
                  href="#overview"
                  className="text-sm text-coral"
                >
                  Integrations Overview
                </a>



                <a
                  href="#n8n"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  n8n Automations
                </a>




                <a
                  href="#configuration"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Configuration
                </a>




                <a
                  href="#webhook"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Webhook Structure
                </a>




                <a
                  href="#events"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Event Reference
                </a>




                <a
                  href="#content"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Content Representation
                </a>




                <a
                  href="#payload"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Payload Example
                </a>




                <a
                  href="#delivery"
                  className="
                  block
                  text-sm
                  text-navy-mute
                  "
                >
                  Delivery & Retries
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