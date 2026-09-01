"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Circle,
  Info,
  RefreshCw,
  Settings,
  Workflow,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How It Works" },
  { id: "automation-workflow", label: "Automation Workflow" },
  { id: "activity-status", label: "Activity Status" },
  { id: "after-automation", label: "After Automation" },
  { id: "next-steps", label: "Next Steps" },
];

export default function TrueNorthAutomationPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [status, setStatus] = useState("ready");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 180;
      let current = sections[0].id;

      sections.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= position) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const runDemo = () => {
    setStatus("checking");
    setProgress(30);

    setTimeout(() => {
      setProgress(65);
    }, 500);

    setTimeout(() => {
      setProgress(100);
      setStatus("connected");
    }, 1100);
  };

  const resetDemo = () => {
    setStatus("ready");
    setProgress(0);
  };

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
            <section className="border-b border-border pb-8">
              <p className="text-xs font-semibold text-coral">
                Account Integration
              </p>

              <h1 className="mt-3 text-4xl font-bold">
                TrueNorth Automation
              </h1>

              <p className="mt-4 max-w-3xl leading-7 text-navy-mute">
                Review automated Sellio account workflows, integration
                status, and connection activity from one documentation
                page.
              </p>

              <div
                className="
                  mt-5 flex items-start gap-3
                  rounded-lg
                  border border-border
                  bg-black/5
                  px-4 py-3
                "
              >
                <Info className="mt-0.5 h-4 w-4 text-coral" />

                <p className="text-sm leading-6 text-navy-mute">
                  The examples on this page are interface demos and do
                  not modify a real account.
                </p>
              </div>
            </section>

            <section
              id="overview"
              className="scroll-mt-28 border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Overview
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Sellio integrations can be organised into a simple
                workflow that connects store data, supported services,
                and dashboard status information.
              </p>
            </section>

            <section
              id="how-it-works"
              className="scroll-mt-28 border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                How It Works
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                The workflow starts inside Sellio, passes through the
                integration layer, and then returns updated connection
                information to the dashboard.
              </p>

              <div
                className="
                  mt-7 grid gap-4
                  md:grid-cols-[1fr_auto_1fr_auto_1fr]
                  md:items-center
                "
              >
                <div className="rounded-xl border border-border p-5 text-center">
                  <Settings className="mx-auto h-6 w-6 text-coral" />

                  <p className="mt-3 font-bold">
                    Sellio
                  </p>

                  <p className="mt-2 text-xs text-navy-mute">
                    Starts the workflow
                  </p>
                </div>

                <ChevronRight className="mx-auto hidden h-5 w-5 md:block" />

                <div className="rounded-xl border border-border p-5 text-center">
                  <Workflow className="mx-auto h-6 w-6 text-coral" />

                  <p className="mt-3 font-bold">
                    Integration
                  </p>

                  <p className="mt-2 text-xs text-navy-mute">
                    Processes the connection
                  </p>
                </div>

                <ChevronRight className="mx-auto hidden h-5 w-5 md:block" />

                <div className="rounded-xl border border-border p-5 text-center">
                  <Activity className="mx-auto h-6 w-6 text-coral" />

                  <p className="mt-3 font-bold">
                    Dashboard
                  </p>

                  <p className="mt-2 text-xs text-navy-mute">
                    Displays current status
                  </p>
                </div>
              </div>
            </section>

            <section
              id="automation-workflow"
              className="scroll-mt-28 border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Automation Workflow
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Use this interactive demo to preview how an automation
                status can progress through a connected workflow.
              </p>

              <div className="mt-7 rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">
                      Workflow Demo
                    </p>

                    <p className="mt-1 text-xs text-navy-mute">
                      Demo connection process
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={resetDemo}
                    className="
                      rounded-lg
                      border border-border
                      px-3 py-2
                      text-xs font-semibold
                      hover:border-coral
                      hover:text-coral
                    "
                  >
                    Reset
                  </button>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">
                      Progress
                    </span>

                    <span className="font-bold text-coral">
                      {progress}%
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10">
                    <div
                      className="
                        h-full rounded-full
                        bg-coral
                        transition-all
                        duration-500
                      "
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={runDemo}
                  disabled={status === "checking"}
                  className="
                    mt-6 flex items-center gap-2
                    rounded-lg
                    bg-coral
                    px-4 py-2
                    text-sm font-semibold
                    text-white
                    disabled:opacity-60
                  "
                >
                  <RefreshCw
                    className={`h-4 w-4 ${
                      status === "checking"
                        ? "animate-spin"
                        : ""
                    }`}
                  />

                  {status === "checking"
                    ? "Running..."
                    : "Run Demo"}
                </button>

                <div
                  className="
                    mt-5 rounded-xl
                    border border-border
                    bg-black/5
                    p-4
                  "
                >
                  {status === "ready" && (
                    <div className="flex items-center gap-3">
                      <Circle className="h-5 w-5 text-navy-mute" />

                      <div>
                        <p className="text-sm font-bold">
                          Ready
                        </p>

                        <p className="text-xs text-navy-mute">
                          Start the demonstration workflow.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === "checking" && (
                    <div className="flex items-center gap-3">
                      <RefreshCw className="h-5 w-5 animate-spin text-coral" />

                      <div>
                        <p className="text-sm font-bold">
                          Processing
                        </p>

                        <p className="text-xs text-navy-mute">
                          Reviewing integration status.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === "connected" && (
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-coral" />

                      <div>
                        <p className="text-sm font-bold">
                          Complete
                        </p>

                        <p className="text-xs text-navy-mute">
                          Demo workflow finished successfully.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section
              id="activity-status"
              className="scroll-mt-28 border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Activity Status
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                The activity panel can show how connection health changes
                over time.
              </p>

              <div className="mt-7 rounded-xl border border-border p-6">
                <p className="text-sm font-bold">
                  Connection Activity
                </p>

                <div className="mt-6 flex h-52 items-end gap-4">
                  {[62, 80, 74, 92, 83, 96, 88].map(
                    (value, index) => (
                      <div
                        key={index}
                        className="
                          flex h-full flex-1
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
                            height: `${value}%`,
                          }}
                        />
                      </div>
                    )
                  )}
                </div>

                <div className="mt-3 flex justify-between text-[10px] text-navy-mute">
                  <span>09:00</span>
                  <span>10:00</span>
                  <span>11:00</span>
                  <span>12:00</span>
                  <span>13:00</span>
                  <span>14:00</span>
                  <span>15:00</span>
                </div>
              </div>
            </section>

            <section
              id="after-automation"
              className="scroll-mt-28 border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                After Automation
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Once the workflow finishes, review the dashboard to
                confirm the integration status and check whether any
                connection issues need attention.
              </p>
            </section>

            <section
              id="next-steps"
              className="scroll-mt-28 border-b border-border py-8"
            >
              <h2 className="text-2xl font-bold">
                Next Steps
              </h2>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-border p-5">
                  <p className="font-semibold">
                    Integration Monitoring
                  </p>

                  <p className="mt-1 text-sm text-navy-mute">
                    Review connection health and account activity.
                  </p>
                </div>

                <div className="rounded-xl border border-border p-5">
                  <p className="font-semibold">
                    Sellio Analytics
                  </p>

                  <p className="mt-1 text-sm text-navy-mute">
                    Review dashboard performance and connected services.
                  </p>
                </div>
              </div>
            </section>

            <div className="grid gap-4 py-8 sm:grid-cols-2">
              <Link
                href="/documentation/truenorth-setup"
                className="
                  group rounded-xl
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
                    TrueNorth Setup
                  </p>
                </div>
              </Link>

              <Link
                href="/documentation/truenorth-live-stream-draws"
                className="
                  group rounded-xl
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

                <div className="mt-2 flex items-center justify-end gap-2">
                  <p className="font-semibold">
                    Truenorth-live-stream-draws
                  </p>

                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </article>

          <aside className="hidden xl:block">
            <div className="sticky top-28 border-l border-border pl-6">
              <p
                className="
                  text-xs font-bold
                  uppercase tracking-wide
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
                      block text-sm
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
        </div>
      </main>

      <Footer />
    </>
  );
}