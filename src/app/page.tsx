import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { PracticeAreas } from "@/components/PracticeAreas";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AttorneyCard } from "@/components/AttorneyCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { attorneys } from "@/data/attorneys";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="relative py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700">
                Our Firm
              </p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BPG.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="space-y-5 text-[17px] leading-relaxed text-slate-700">
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
                  each client&apos;s unique needs. We pride ourselves on
                  responsiveness, strategic thinking and an unwavering
                  dedication to our clients&apos; success.
                </p>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 mt-2 text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  <span>Learn more about the firm</span>
                  <ArrowRight
                    className="w-4 h-4 text-purple-600 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PracticeAreas heading="Practice Areas" eyebrow="Expertise" />

      <WhyChooseUs />

      <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50/40 to-purple-50/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700">
              Leadership
            </p>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 max-w-2xl">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Partners.
                </span>
              </h2>
              <Link
                href="/attorneys"
                className="group inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-slate-900"
              >
                <span>All partners</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {attorneys.map((a, i) => (
              <AttorneyCard key={a.slug} attorney={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
