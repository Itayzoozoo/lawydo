import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import { firm } from "@/data/firm";
import { practiceAreas } from "@/data/practice-areas";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 text-slate-300 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo size="md" variant="dark" />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              {firm.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white tracking-wide uppercase">
              Practice
            </h3>
            <ul className="mt-5 space-y-3">
              {practiceAreas.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/practice-areas/${p.slug}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/practice-areas"
                  className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent hover:from-blue-200 hover:to-purple-200"
                >
                  All practice areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white tracking-wide uppercase">
              Firm
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  About the Firm
                </Link>
              </li>
              <li>
                <Link
                  href="/attorneys"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Our Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white tracking-wide uppercase">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin
                  className="w-5 h-5 mt-0.5 text-purple-300 shrink-0"
                  aria-hidden="true"
                />
                <span>{firm.addressDisplay}</span>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="w-5 h-5 mt-0.5 text-purple-300 shrink-0"
                  aria-hidden="true"
                />
                <a href={firm.emailHref} className="hover:text-white break-all">
                  {firm.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock
                  className="w-5 h-5 mt-0.5 text-purple-300 shrink-0"
                  aria-hidden="true"
                />
                <span>{firm.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {firm.name}. All rights reserved.
          </p>
          <p className="max-w-2xl">
            Attorney advertising. The information on this site is for general
            purposes and does not constitute legal advice or create an
            attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
