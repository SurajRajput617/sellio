"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Features", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Latest Updates", href: "/updates" },
  { label: "Screencasts", href: "/#dashboard" },
  { label: "Documentation", href: "/#support" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-paper/85 backdrop-blur-md">
      <div className="container-xl flex h-16 items-center justify-between md:h-20">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-navy"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-coral">
            <span className="font-display text-sm font-bold">S</span>
          </span>

          Sellio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-navy-mute transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#pricing"
            className="text-[15px] font-medium text-navy-mute transition-colors hover:text-navy"
          >
            Sign in
          </Link>

          <Link
            href="/#pricing"
            className="inline-flex items-center gap-1.5 rounded-full bg-coral px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-4px_rgba(255,91,69,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-coral-dark"
          >
            Start selling
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-border bg-paper md:hidden">
          <nav className="container-xl flex flex-col gap-1 py-4">

            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-navy-mute hover:bg-paper-dim hover:text-navy"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">

              <Link
                href="/#pricing"
                onClick={() => setOpen(false)}
                className="rounded-full border border-border px-4 py-2.5 text-center text-[15px] font-medium text-navy"
              >
                Sign in
              </Link>

              <Link
                href="/#pricing"
                onClick={() => setOpen(false)}
                className="rounded-full bg-coral px-4 py-2.5 text-center text-[15px] font-semibold text-white"
              >
                Start selling
              </Link>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}