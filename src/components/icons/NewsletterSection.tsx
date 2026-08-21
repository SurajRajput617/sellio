"use client";

import { FormEvent, useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      // TODO: wire up to your real subscribe endpoint / provider.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20 sm:py-28 border-t border-[#ECE6DE] bg-[#FEF9F5]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl bg-[#12172A] text-white px-6 py-12 sm:px-12 sm:py-16 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FA5A45]">
            Stay in the loop
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            Get new competitions before anyone else.
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            One short email whenever a new competition drops or a winner is announced. No spam, unsubscribe anytime.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full bg-white px-5 py-3 text-sm text-[#12172A] placeholder:text-neutral-400 outline-none ring-0 focus:ring-2 focus:ring-[#FA5A45]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto shrink-0 rounded-full bg-[#FA5A45] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#E8452F] disabled:opacity-60"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>

          <p className="mt-3 text-xs text-white/50" aria-live="polite">
            {status === "success" && "You're subscribed — check your inbox."}
            {status === "error" && "Something went wrong. Please try again."}
          </p>
        </div>
      </div>
    </section>
  );
}