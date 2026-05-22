import type { Metadata } from "next";
import Link from "next/link";
import { Award, Scale, Users, Target, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "About BPG",
  description: firm.description,
};

const VALUES = [
  {
    icon: Scale,
    title: "Multidisciplinary",
    body: "Litigation, real estate and technology under one roof — integrated counsel for clients whose needs cross practice boundaries.",
  },
  {
    icon: Users,
    title: "Business-Oriented",
    body: "Our partners have led legal and risk functions inside the institutions we now advise. We think like operators, not just lawyers.",
  },
  {
    icon: Target,
    title: "Strategic",
    body: "Pragmatic, results-driven counsel — from structuring a transaction to managing a regulatory matter or trying a complex case.",
  },
  {
    icon: Award,
    title: "Trusted",
    body: "Confidentiality, responsiveness and an unwavering dedication to our clients' success — the things that make us worth retaining.",
  },
];

const STATS = [
  { value: "60+", label: "Years Combined Experience" },
  { value: "500+", label: "Transactions Closed" },
  { value: "3", label: "Practice Groups" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About BPG"
        title="A premier Israeli law firm."
        highlight="Built for results."
        description={firm.longDescription}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-12 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
                <div className="absolute -bottom-24 -right-12 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl" />
              </div>
              <div className="relative h-full flex flex-col justify-between p-10">
                <div className="flex items-baseline gap-3">
                  <span className="text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
                    B
                  </span>
                  <span className="text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-br from-blue-100 to-indigo-300 bg-clip-text text-transparent">
                    P
                  </span>
                  <span className="text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-br from-indigo-200 to-purple-200 bg-clip-text text-transparent">
                    G
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-200">
                    Bachar · Pordes · Goleczki
                  </p>
                  <p className="mt-3 text-2xl font-extrabold tracking-tight">
                    Law Offices, Tel Aviv
                  </p>
                  <p className="mt-2 text-sm text-blue-100/80 max-w-sm leading-relaxed">
                    Three founding partners. Sixty combined years. One
                    business-oriented standard.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700">
                Our firm
              </p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                Strategic counsel,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  business-oriented.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-slate-700">
                <p>
                  BPG Law Offices is a leading Israeli law firm founded by
                  three seasoned partners who share a commitment to delivering
                  exceptional legal services with a business-oriented approach.
                  Based in Israel&apos;s dynamic commercial center, we serve
                  domestic and international clients across a broad spectrum of
                  industries.
                </p>
                <p>
                  Our multidisciplinary practice combines deep expertise in
                  technology, corporate law and dispute resolution, enabling us
                  to provide comprehensive, integrated solutions tailored to
                  each client&apos;s unique needs.
                </p>
                <p>
                  We pride ourselves on responsiveness, strategic thinking and
                  an unwavering dedication to our clients&apos; success.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-500 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-10 flex gap-3">
                <Link
                  href="/attorneys"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-purple-600/20 hover:shadow-lg hover:shadow-purple-600/30 hover:-translate-y-0.5 transition-all"
                >
                  Meet our partners
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all"
                >
                  Our practice
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/40 to-purple-50/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700">
              Our approach
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 max-w-2xl">
              How we{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                work.
              </span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="h-full rounded-3xl bg-white border border-slate-200 p-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
