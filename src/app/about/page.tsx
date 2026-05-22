import type { Metadata } from "next";
import Image from "next/image";
import { Award, Scale, Users, Target } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "About the Firm",
  description: `Learn about ${firm.name} — our founding partners, our values, and three decades of trusted legal counsel.`,
};

const VALUES = [
  {
    icon: Scale,
    title: "Judgment",
    body: "Our value is not just in knowing the law — it's in knowing when to fight, when to settle, and when to advise restraint.",
  },
  {
    icon: Users,
    title: "Partnership",
    body: "We invest in long client relationships. Many of our clients have been with the firm for over twenty years.",
  },
  {
    icon: Target,
    title: "Results",
    body: "Strategy without execution is theater. Every matter ends in a measurable outcome we can stand behind.",
  },
  {
    icon: Award,
    title: "Integrity",
    body: "We tell our clients what they need to hear, not what they want to hear. That is what makes our counsel worth seeking.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Firm"
        title="Built on judgment."
        highlight="Driven by results."
        description={`Since ${firm.founded}, ${firm.name} has represented founders, families, and Fortune 500 boards across the matters that shape their futures.`}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                alt="Sterling & Vance LLP attorneys in a strategy meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700">
                Our story
              </p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                Three decades of{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  consequential work.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-slate-700">
                <p>
                  {firm.name} was founded in {firm.founded} by Margaret Sterling
                  and David Vance with a simple premise: that the best legal
                  work happens in firms small enough to know their clients and
                  large enough to handle anything that comes their way.
                </p>
                <p>
                  Today, our 24 attorneys serve clients across the West Coast
                  and beyond — from emerging companies and growth-stage founders
                  to public boards, family offices, and individuals facing the
                  most consequential moments of their lives. We have closed
                  multi-billion-dollar transactions, tried hundreds of cases to
                  verdict, and built estate plans that span generations.
                </p>
                <p>
                  What hasn&apos;t changed is the standard. Every matter is
                  staffed leanly and led by a partner. We answer the phone. We
                  return the call.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/40 to-purple-50/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700">
              Our values
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 max-w-2xl">
              What we{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                stand for.
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
