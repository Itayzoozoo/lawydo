"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { firm } from "@/data/firm";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between"
      >
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2"
          aria-label={`${firm.name} home`}
        >
          <span className="text-2xl lg:text-[1.7rem] font-black tracking-tight bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
            Sterling
          </span>
          <span className="text-2xl lg:text-[1.7rem] font-light text-slate-400">
            &amp;
          </span>
          <span className="text-2xl lg:text-[1.7rem] font-black tracking-tight text-slate-900">
            Vance
          </span>
          <span className="hidden sm:inline ml-1 text-xs font-bold tracking-[0.2em] text-slate-400">
            LLP
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 ${
                    active
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={firm.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {firm.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-purple-600/30 transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
          >
            Schedule Consultation
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200">
          <div className="px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-semibold ${
                    active
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 text-slate-900"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={firm.phoneHref}
              className="mt-2 inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {firm.phone}
            </a>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}

      <div aria-hidden className="h-0" />
    </header>
  );
}
