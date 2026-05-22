import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { getPracticeArea, practiceAreas } from "@/data/practice-areas";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return { title: "Practice Area Not Found" };
  return {
    title: area.name,
    description: area.shortDescription,
  };
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const Icon = area.icon;
  const others = practiceAreas.filter((p) => p.slug !== area.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Practice Area"
        title={area.name}
        description={area.shortDescription}
      >
        <Reveal delay={0.2}>
          <Link
            href="/practice-areas"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All practice areas
          </Link>
        </Reveal>
      </PageHeader>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/20">
                <Icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h2 className="mt-7 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Our approach
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-700">
                {area.longDescription}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mt-14 text-2xl font-extrabold text-slate-900">
                What we handle
              </h3>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {area.services.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-2xl bg-gradient-to-br from-blue-50/70 to-purple-50/40 px-4 py-3 border border-slate-200/70"
                  >
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 text-purple-600 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[15px] font-semibold text-slate-800">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:col-span-1">
            <Reveal>
              <div className="rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 p-8 text-white relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-12 h-48 w-48 rounded-full bg-purple-400/30 blur-3xl"
                />
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-blue-200">
                  Highlights
                </h3>
                <ul className="mt-5 space-y-4">
                  {area.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 shrink-0" />
                      <span className="text-blue-50">{h}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 transition"
                >
                  Discuss your matter
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Other{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                practice areas
              </span>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {others.map((p, i) => {
              const OIcon = p.icon;
              return (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link
                    href={`/practice-areas/${p.slug}`}
                    className="group block h-full rounded-3xl bg-white border border-slate-200 p-7 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                      <OIcon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {p.shortDescription}
                    </p>
                  </Link>
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
