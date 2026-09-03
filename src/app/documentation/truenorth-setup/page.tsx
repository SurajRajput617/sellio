"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Circle,
  Database,
  Info,
  Link2,
  RefreshCw,
  RotateCcw,
  Server,
  Settings,
  ShieldCheck,
  Store,
  Workflow,
  XCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";

/* =========================================================
   TYPES
========================================================= */

type WorkflowStep = {
  id: number;
  title: string;
  description: string;
};

type StatusPoint = {
  label: string;
  value: number;
};

/* =========================================================
   DEMO DATA
========================================================= */

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "Account",
    description: "Account details are available.",
  },
  {
    id: 2,
    title: "Connection",
    description: "The integration connection is checked.",
  },
  {
    id: 3,
    title: "Sync",
    description: "Supported information is prepared for sync.",
  },
  {
    id: 4,
    title: "Status",
    description: "Connection status is returned to the dashboard.",
  },
];

const statusData: StatusPoint[] = [
  { label: "09:00", value: 72 },
  { label: "10:00", value: 84 },
  { label: "11:00", value: 78 },
  { label: "12:00", value: 92 },
  { label: "13:00", value: 86 },
  { label: "14:00", value: 96 },
  { label: "15:00", value: 90 },
];

const onThisPageItems = [
  {
    id: "before-you-start",
    label: "Before You Start",
  },
  {
    id: "connect-account",
    label: "Connect Your Account",
  },
  {
    id: "connection-flow",
    label: "Connection Flow",
  },
  {
    id: "after-connect",
    label: "After You Connect",
  },
  {
    id: "integration-automation",
    label: "Integration Automation",
  },
  {
    id: "live-status",
    label: "Live Connection Status",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
  },
  {
    id: "next-steps",
    label: "Next Steps",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function TrueNorthSetupPage() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const [connectionStatus, setConnectionStatus] = useState<
    "idle" | "checking" | "connected"
  >("idle");

  /* =======================================================
     ON THIS PAGE ACTIVE SECTION
  ======================================================= */

  const [activeSection, setActiveSection] =
    useState("before-you-start");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = onThisPageItems[0].id;

      onThisPageItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /* =======================================================
     WORKFLOW FUNCTIONS
  ======================================================= */

  const toggleStep = (id: number) => {
    setCompletedSteps((current) =>
      current.includes(id)
        ? current.filter((step) => step !== id)
        : [...current, id]
    );
  };

  const resetWorkflow = () => {
    setCompletedSteps([]);
    setConnectionStatus("idle");
  };

  const runStatusCheck = () => {
    setConnectionStatus("checking");

    window.setTimeout(() => {
      setConnectionStatus("connected");
    }, 800);
  };

  const progress = Math.round(
    (completedSteps.length / workflowSteps.length) * 100
  );

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
          {/* =====================================================
              LEFT SIDEBAR
          ===================================================== */}
          <DocumentationSidebar />

          {/* =====================================================
              MAIN ARTICLE
          ===================================================== */}
          <article className="min-w-0">
            {/* =================================================
                HEADER
            ================================================= */}
            <section className="border-b border-border pb-8">
              <p className="text-xs font-semibold text-coral">
                Account Integration
              </p>

              <h1 className="mt-3 text-4xl font-bold">
                TrueNorth Setup
              </h1>

              <p className="mt-4 max-w-3xl leading-7 text-navy-mute">
                Connect your account to Sellio and keep the integration
                organised through a simple setup, connection and status
                workflow.
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-navy-mute">
                This guide covers the basic connection process and
                includes interactive examples that show how account
                workflows and connection monitoring can appear inside
                your dashboard.
              </p>

              <div
                className="
                  mt-5 flex items-start gap-3
                  rounded-md
                  border border-border
                  bg-black/5
                  px-4 py-3
                "
              >
                <Info
                  className="
                    mt-0.5 h-4 w-4
                    shrink-0 text-coral
                  "
                />

                <p className="text-sm leading-6 text-navy-mute">
                  The workflow and status visualisations below are
                  interface demos. They do not change a real connected
                  account.
                </p>
              </div>
            </section>

            {/* =================================================
                BEFORE YOU START
            ================================================= */}
            <section
              id="before-you-start"
              className="
                scroll-mt-28
                border-b border-border
                py-8
              "
            >
              <h2 className="text-2xl font-bold">
                Before You Start
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Before connecting an external account, make sure you
                have the account information and access required for
                the setup.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Confirm that you can access your account.",
                  "Check that your company information is current.",
                  "Keep the required connection details available.",
                  "Review the information before submitting the connection.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="
                        mt-0.5 h-4 w-4
                        shrink-0 text-coral
                      "
                    />

                    <p className="text-sm leading-6 text-navy-mute">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* =================================================
                CONNECT ACCOUNT
            ================================================= */}
            <section
              id="connect-account"
              className="
                scroll-mt-28
                border-b border-border
                py-8
              "
            >
              <h2 className="text-2xl font-bold">
                Connect Your TrueNorth Account
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Start from your Sellio dashboard and open the
                integration settings. Add the required account
                information and review the connection before
                continuing.
              </p>

              <ol
                className="
                  mt-6 list-decimal
                  space-y-3 pl-5
                  leading-7
                  text-navy-mute
                "
              >
                <li>Open your Sellio dashboard.</li>

                <li>
                  Navigate to your integration settings.
                </li>

                <li>
                  Select the account connection you want to configure.
                </li>

                <li>
                  Add the required account information.
                </li>

                <li>
                  Review the details and complete the connection.
                </li>

                <li>
                  Confirm that the connection status is active.
                </li>
              </ol>

              {/* CONNECTION CARD */}
              <div
                className="
                  mt-7 overflow-hidden
                  rounded-xl
                  border border-border
                "
              >
                <div
                  className="
                    flex items-center gap-3
                    border-b border-border
                    bg-black/5
                    px-5 py-4
                  "
                >
                  <Settings className="h-5 w-5 text-coral" />

                  <div>
                    <p className="text-sm font-bold">
                      Connection Details
                    </p>

                    <p className="mt-1 text-xs text-navy-mute">
                      Example account configuration
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 p-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold">
                      Account
                    </p>

                    <div
                      className="
                        mt-2 rounded-lg
                        border border-border
                        bg-black/5
                        px-4 py-3
                        text-sm text-navy-mute
                      "
                    >
                      Example Account
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold">
                      Environment
                    </p>

                    <div
                      className="
                        mt-2 rounded-lg
                        border border-border
                        bg-black/5
                        px-4 py-3
                        text-sm text-navy-mute
                      "
                    >
                      Production
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                CONNECTION FLOW
            ================================================= */}
            <section
              id="connection-flow"
              className="
                scroll-mt-28
                border-b border-border
                py-8
              "
            >
              <h2 className="text-2xl font-bold">
                How the Connection Works
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                The integration follows a simple flow between your
                Sellio dashboard, the connection layer and the
                connected account.
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
                    grid items-center gap-4
                    md:grid-cols-[1fr_auto_1fr_auto_1fr]
                  "
                >
                  <div
                    className="
                      rounded-xl
                      border border-border
                      p-5 text-center
                    "
                  >
                    <div
                      className="
                        mx-auto flex
                        h-12 w-12
                        items-center justify-center
                        rounded-full
                        bg-coral/10
                      "
                    >
                      <Store className="h-6 w-6 text-coral" />
                    </div>

                    <p className="mt-4 font-bold">
                      Sellio
                    </p>

                    <p className="mt-2 text-xs leading-5 text-navy-mute">
                      Starts the account workflow.
                    </p>
                  </div>

                  <ChevronRight
                    className="
                      mx-auto hidden h-5 w-5
                      text-navy-mute
                      md:block
                    "
                  />

                  <div
                    className="
                      rounded-xl
                      border border-border
                      p-5 text-center
                    "
                  >
                    <div
                      className="
                        mx-auto flex
                        h-12 w-12
                        items-center justify-center
                        rounded-full
                        bg-coral/10
                      "
                    >
                      <Link2 className="h-6 w-6 text-coral" />
                    </div>

                    <p className="mt-4 font-bold">
                      Integration
                    </p>

                    <p className="mt-2 text-xs leading-5 text-navy-mute">
                      Handles the connection.
                    </p>
                  </div>

                  <ChevronRight
                    className="
                      mx-auto hidden h-5 w-5
                      text-navy-mute
                      md:block
                    "
                  />

                  <div
                    className="
                      rounded-xl
                      border border-border
                      p-5 text-center
                    "
                  >
                    <div
                      className="
                        mx-auto flex
                        h-12 w-12
                        items-center justify-center
                        rounded-full
                        bg-coral/10
                      "
                    >
                      <Server className="h-6 w-6 text-coral" />
                    </div>

                    <p className="mt-4 font-bold">
                      Connected Account
                    </p>

                    <p className="mt-2 text-xs leading-5 text-navy-mute">
                      Returns the connection status.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                AFTER CONNECT
            ================================================= */}
            <section
              id="after-connect"
              className="
                scroll-mt-28
                border-b border-border
                py-8
              "
            >
              <h2 className="text-2xl font-bold">
                After You Connect
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Once your connection is active, the dashboard can
                display its current status and help you review the
                integration workflow.
              </p>

              <div
                className="
                  mt-6 flex items-center gap-4
                  rounded-xl
                  border border-border
                  p-5
                "
              >
                <div
                  className="
                    flex h-11 w-11
                    shrink-0 items-center
                    justify-center
                    rounded-full
                    bg-coral/10
                  "
                >
                  <ShieldCheck className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <p className="font-bold">
                    Connection Ready
                  </p>

                  <p className="mt-1 text-sm text-navy-mute">
                    The account can now be displayed as an active
                    integration inside your dashboard.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                INTEGRATION AUTOMATION
            ================================================= */}
            <section
              id="integration-automation"
              className="
                scroll-mt-28
                border-b border-border
                py-8
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <Workflow className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-coral">
                    Workflow Demo
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    Integration Automation
                  </h2>
                </div>
              </div>

              <p className="mt-4 leading-7 text-navy-mute">
                Review how an automated account workflow can move
                through the connection process. Select each stage
                below to update the demo progress.
              </p>

              <div
                className="
                  mt-7 overflow-hidden
                  rounded-2xl
                  border border-border
                "
              >
                <div
                  className="
                    flex flex-col gap-4
                    border-b border-border
                    px-5 py-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <p className="font-bold">
                      Account Workflow
                    </p>

                    <p className="mt-1 text-xs text-navy-mute">
                      Interactive integration workflow demo
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={resetWorkflow}
                    className="
                      flex w-fit
                      items-center gap-2
                      rounded-lg
                      border border-border
                      px-3 py-2
                      text-xs font-semibold
                      transition
                      hover:border-coral
                      hover:text-coral
                    "
                  >
                    <RotateCcw className="h-3.5 w-3.5" />

                    Reset Workflow
                  </button>
                </div>

                <div className="p-5 sm:p-7">
                  {/* PROGRESS */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">
                      Workflow Progress
                    </p>

                    <p className="text-sm font-bold text-coral">
                      {progress}%
                    </p>
                  </div>

                  <div
                    className="
                      mt-3 h-2
                      overflow-hidden
                      rounded-full
                      bg-black/10
                    "
                  >
                    <div
                      className="
                        h-full rounded-full
                        bg-coral
                        transition-all
                        duration-300
                      "
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>

                  {/* FLOW */}
                  <div
                    className="
                      mt-8 grid gap-3
                      lg:grid-cols-4
                    "
                  >
                    {workflowSteps.map((step, index) => {
                      const completed =
                        completedSteps.includes(step.id);

                      return (
                        <div
                          key={step.id}
                          className="relative"
                        >
                          <button
                            type="button"
                            onClick={() => toggleStep(step.id)}
                            className={`
                              relative z-10
                              h-full w-full
                              rounded-xl border
                              p-4 text-left
                              transition-all
                              duration-200
                              ${
                                completed
                                  ? "border-coral bg-coral/10"
                                  : "border-border hover:border-coral"
                              }
                            `}
                          >
                            <div className="flex items-center justify-between">
                              <div
                                className={`
                                  flex h-9 w-9
                                  items-center justify-center
                                  rounded-full
                                  ${
                                    completed
                                      ? "bg-coral text-white"
                                      : "border border-border"
                                  }
                                `}
                              >
                                {completed ? (
                                  <Check className="h-4 w-4" />
                                ) : (
                                  <span className="text-xs font-bold">
                                    {step.id}
                                  </span>
                                )}
                              </div>

                              {completed ? (
                                <CheckCircle2 className="h-4 w-4 text-coral" />
                              ) : (
                                <Circle className="h-4 w-4 text-navy-mute" />
                              )}
                            </div>

                            <p className="mt-4 text-sm font-bold">
                              {step.title}
                            </p>

                            <p className="mt-2 text-xs leading-5 text-navy-mute">
                              {step.description}
                            </p>
                          </button>

                          {index < workflowSteps.length - 1 && (
                            <div
                              className="
                                absolute
                                left-full top-1/2
                                z-0 hidden
                                h-px w-3
                                bg-border
                                lg:block
                              "
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* WORKFLOW STATUS */}
                  <div
                    className="
                      mt-7 rounded-xl
                      border border-border
                      bg-black/5
                      p-5
                    "
                  >
                    {progress === 0 && (
                      <div className="flex items-center gap-3">
                        <Circle className="h-5 w-5 shrink-0 text-navy-mute" />

                        <div>
                          <p className="text-sm font-bold">
                            Waiting
                          </p>

                          <p className="mt-1 text-xs text-navy-mute">
                            Select a workflow stage to start the demo.
                          </p>
                        </div>
                      </div>
                    )}

                    {progress > 0 && progress < 100 && (
                      <div className="flex items-center gap-3">
                        <RefreshCw className="h-5 w-5 shrink-0 text-coral" />

                        <div>
                          <p className="text-sm font-bold">
                            Workflow In Progress
                          </p>

                          <p className="mt-1 text-xs text-navy-mute">
                            {completedSteps.length} of{" "}
                            {workflowSteps.length} stages completed.
                          </p>
                        </div>
                      </div>
                    )}

                    {progress === 100 && (
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-coral" />

                        <div>
                          <p className="text-sm font-bold">
                            Workflow Complete
                          </p>

                          <p className="mt-1 text-xs text-navy-mute">
                            All demonstration stages are complete.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                LIVE CONNECTION STATUS
            ================================================= */}
            <section
              id="live-status"
              className="
                scroll-mt-28
                border-b border-border
                py-8
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-lg
                    bg-coral/10
                  "
                >
                  <Activity className="h-5 w-5 text-coral" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-coral">
                    Status Demo
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    Live Connection Status
                  </h2>
                </div>
              </div>

              <p className="mt-4 leading-7 text-navy-mute">
                Learn how a connected account status can be presented
                inside the dashboard. The chart below uses illustrative
                demo values to show the interface.
              </p>

              <div
                className="
                  mt-7 overflow-hidden
                  rounded-2xl
                  border border-border
                "
              >
                {/* STATUS HEADER */}
                <div
                  className="
                    flex flex-col gap-4
                    border-b border-border
                    px-5 py-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`
                          h-2.5 w-2.5
                          rounded-full
                          ${
                            connectionStatus === "connected"
                              ? "bg-coral"
                              : connectionStatus === "checking"
                              ? "bg-amber-500"
                              : "bg-black/20"
                          }
                        `}
                      />

                      <p className="font-bold">
                        Connection Monitor
                      </p>
                    </div>

                    <p className="mt-1 text-xs text-navy-mute">
                      Visual status example
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={runStatusCheck}
                    disabled={connectionStatus === "checking"}
                    className="
                      flex w-fit
                      items-center gap-2
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
                          connectionStatus === "checking"
                            ? "animate-spin"
                            : ""
                        }
                      `}
                    />

                    {connectionStatus === "checking"
                      ? "Checking..."
                      : "Check Status"}
                  </button>
                </div>

                <div className="p-5 sm:p-7">
                  {/* STATUS CARDS */}
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-border p-4">
                      <p className="text-xs text-navy-mute">
                        Current Status
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        {connectionStatus === "connected" ? (
                          <CheckCircle2 className="h-5 w-5 text-coral" />
                        ) : connectionStatus === "checking" ? (
                          <RefreshCw className="h-5 w-5 animate-spin text-coral" />
                        ) : (
                          <Circle className="h-5 w-5 text-navy-mute" />
                        )}

                        <p className="text-sm font-bold">
                          {connectionStatus === "connected"
                            ? "Connected"
                            : connectionStatus === "checking"
                            ? "Checking"
                            : "Ready"}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border p-4">
                      <p className="text-xs text-navy-mute">
                        Workflow
                      </p>

                      <p className="mt-3 text-xl font-bold">
                        {progress}%
                      </p>

                      <p className="mt-1 text-xs text-navy-mute">
                        Demo completed
                      </p>
                    </div>

                    <div className="rounded-xl border border-border p-4">
                      <p className="text-xs text-navy-mute">
                        Monitor
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <Activity className="h-5 w-5 text-coral" />

                        <p className="text-sm font-bold">
                          Active
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      GRAPH
                  ================================================= */}
                  <div
                    className="
                      mt-6 rounded-xl
                      border border-border
                      p-5
                    "
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold">
                          Connection Health
                        </p>

                        <p className="mt-1 text-xs text-navy-mute">
                          Illustrative status values
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-navy-mute">
                        <span className="h-2 w-2 rounded-full bg-coral" />
                        Health
                      </div>
                    </div>

                    <div
                      className="
                        relative mt-7
                        h-64
                        overflow-hidden
                      "
                    >
                      {/* GRID */}
                      <div
                        className="
                          absolute inset-0
                          flex flex-col
                          justify-between
                        "
                      >
                        {[100, 75, 50, 25, 0].map((value) => (
                          <div
                            key={value}
                            className="relative border-t border-border"
                          >
                            <span
                              className="
                                absolute
                                -top-2.5 left-0
                                bg-paper pr-2
                                text-[10px]
                                text-navy-mute
                              "
                            >
                              {value}%
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* BARS */}
                      <div
                        className="
                          absolute
                          inset-x-8 bottom-0 top-3
                          flex items-end
                          justify-between
                          gap-2
                        "
                      >
                        {statusData.map((item) => (
                          <div
                            key={item.label}
                            className="
                              flex h-full flex-1
                              flex-col
                              items-center
                              justify-end
                            "
                          >
                            <div
                              className="
                                group relative
                                flex h-full w-full
                                items-end justify-center
                              "
                            >
                              <div
                                className="
                                  pointer-events-none
                                  absolute
                                  z-20 mb-2
                                  hidden
                                  -translate-y-full
                                  rounded-md
                                  border border-border
                                  bg-paper
                                  px-2 py-1
                                  text-[10px]
                                  font-semibold
                                  shadow-sm
                                  group-hover:block
                                "
                                style={{
                                  bottom: `${item.value}%`,
                                }}
                              >
                                {item.value}%
                              </div>

                              <div
                                className="
                                  w-full max-w-8
                                  rounded-t-md
                                  bg-coral
                                  transition-all
                                  duration-300
                                  hover:opacity-80
                                "
                                style={{
                                  height: `${item.value}%`,
                                }}
                              />
                            </div>

                            <span className="mt-2 text-[10px] text-navy-mute">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* STATUS MESSAGE */}
                  <div
                    className="
                      mt-6 rounded-xl
                      border border-border
                      bg-black/5
                      p-5
                    "
                  >
                    {connectionStatus === "idle" && (
                      <div className="flex items-start gap-3">
                        <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy-mute" />

                        <div>
                          <p className="text-sm font-bold">
                            Ready for Status Check
                          </p>

                          <p className="mt-1 text-xs text-navy-mute">
                            Select Check Status to run the interface
                            demonstration.
                          </p>
                        </div>
                      </div>
                    )}

                    {connectionStatus === "checking" && (
                      <div className="flex items-start gap-3">
                        <RefreshCw
                          className="
                            mt-0.5 h-5 w-5
                            shrink-0
                            animate-spin
                            text-coral
                          "
                        />

                        <div>
                          <p className="text-sm font-bold">
                            Checking Connection
                          </p>

                          <p className="mt-1 text-xs text-navy-mute">
                            Reviewing the demonstration connection
                            status.
                          </p>
                        </div>
                      </div>
                    )}

                    {connectionStatus === "connected" && (
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-coral" />

                        <div>
                          <p className="text-sm font-bold">
                            Connection Available
                          </p>

                          <p className="mt-1 text-xs text-navy-mute">
                            The demonstration status check completed
                            successfully.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                TROUBLESHOOTING
            ================================================= */}
            <section
              id="troubleshooting"
              className="
                scroll-mt-28
                border-b border-border
                py-8
              "
            >
              <h2 className="text-2xl font-bold">
                Connection Troubleshooting
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                If the connection does not appear as expected, review
                the account configuration before attempting another
                status check.
              </p>

              <div className="mt-6 space-y-3">
                <div
                  className="
                    flex items-start gap-3
                    rounded-xl
                    border border-border
                    p-4
                  "
                >
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-navy-mute" />

                  <div>
                    <p className="text-sm font-bold">
                      Connection unavailable
                    </p>

                    <p className="mt-1 text-xs leading-5 text-navy-mute">
                      Review the supplied account information and make
                      sure the integration configuration is complete.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex items-start gap-3
                    rounded-xl
                    border border-border
                    p-4
                  "
                >
                  <Database className="mt-0.5 h-5 w-5 shrink-0 text-navy-mute" />

                  <div>
                    <p className="text-sm font-bold">
                      Status has not updated
                    </p>

                    <p className="mt-1 text-xs leading-5 text-navy-mute">
                      Refresh the dashboard and review the connection
                      configuration before checking again.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                NEXT STEPS
            ================================================= */}
            <section
              id="next-steps"
              className="
                scroll-mt-28
                border-b border-border
                py-8
              "
            >
              <h2 className="text-2xl font-bold">
                Next Steps
              </h2>

              <p className="mt-4 leading-7 text-navy-mute">
                Once the connection is configured, use the workflow
                and status areas to understand how your integration is
                represented inside the dashboard.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="#integration-automation"
                  className="
                    group flex items-center
                    justify-between
                    rounded-lg
                    border border-border
                    px-5 py-4
                    transition
                    hover:border-coral
                  "
                >
                  <div className="flex items-center gap-4">
                    <Workflow className="h-5 w-5 text-coral" />

                    <div>
                      <p className="text-sm font-semibold">
                        Integration Automation
                      </p>

                      <p className="mt-1 text-xs text-navy-mute">
                        Review automated account workflows and
                        connection status.
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className="
                      h-4 w-4
                      text-navy-mute
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:text-coral
                    "
                  />
                </a>

                <a
                  href="#live-status"
                  className="
                    group flex items-center
                    justify-between
                    rounded-lg
                    border border-border
                    px-5 py-4
                    transition
                    hover:border-coral
                  "
                >
                  <div className="flex items-center gap-4">
                    <Activity className="h-5 w-5 text-coral" />

                    <div>
                      <p className="text-sm font-semibold">
                        Live Connection Status
                      </p>

                      <p className="mt-1 text-xs text-navy-mute">
                        Learn how to review the status of your connected
                        account.
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className="
                      h-4 w-4
                      text-navy-mute
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:text-coral
                    "
                  />
                </a>
              </div>
            </section>

            {/* =================================================
                PREVIOUS / NEXT
            ================================================= */}
            <div
              className="
                grid gap-4 py-8
                sm:grid-cols-2
              "
            >
              {/* PREVIOUS */}
              <Link
                href="/documentation/gems"
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
                  <ArrowLeft
                    className="
                      h-4 w-4
                      transition-transform
                      group-hover:-translate-x-1
                      group-hover:text-coral
                    "
                  />

                  <p className="font-semibold">
                    Gems
                  </p>
                </div>
              </Link>

              {/* NEXT */}
              <Link
                href="/documentation/truenorth-autodraws"
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

                <div
                  className="
                    mt-2 flex
                    items-center
                    justify-end
                    gap-2
                  "
                >
                  <p className="font-semibold">
                    True North Autodraws
                  </p>

                  <ArrowRight
                    className="
                      h-4 w-4
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:text-coral
                    "
                  />
                </div>
              </Link>
            </div>

            <p className="pb-6 text-xs text-navy-mute">
              Last updated recently
            </p>
          </article>

          {/* =====================================================
              RIGHT SIDEBAR - ACTIVE SCROLL 
          ===================================================== */}
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
                  text-xs font-bold
                  uppercase tracking-wide
                  text-navy-mute
                "
              >
                On This Page
              </p>

              <nav className="mt-5 space-y-4">
                {onThisPageItems.map((item) => {
                  const isActive =
                    activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() =>
                        setActiveSection(item.id)
                      }
                      className={`
                        block text-sm
                        transition-colors
                        duration-200
                        ${
                          isActive
                            ? "font-medium text-coral"
                            : "text-navy-mute hover:text-coral"
                        }
                      `}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}