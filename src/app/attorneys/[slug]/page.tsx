import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, GraduationCap, Mail, Phone, Scale } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { attorneys, getAttorney } from "@/data/attorneys";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getAttorney(slug);
  if (!a) return { title: "Attorney Not Found" };
  return { title: `${a.name} — ${a.role}`, description: a.bio };
}

export default async function AttorneyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const a = getAttorney(slug);
  if (!a) notFound();

  return (
    <>
      <PageHeader eyebrow={a.role} title={a.name} description={a.bio}>
        <Reveal delay={0.2}>
          <Link
            href="/attorneys"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All attorneys
          </Link>
        </Reveal>
      </PageHeader>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10">
                <Image
                  src={a.image}
                  alt={`${a.name}, ${a.role}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-6 rounded-3xl bg-white border border-slate-200 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail
                    className="w-5 h-5 text-purple-600 shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${a.email}`}
                    className="text-sm font-semibold text-slate-800 hover:text-slate-900 break-all"
                  >
                    {a.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    className="w-5 h-5 text-purple-600 shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href={`tel:${a.phone.replace(/[^+\d]/g, "")}`}
                    className="text-sm font-semibold text-slate-800 hover:text-slate-900"
                  >
                    {a.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Biography
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-700">
                {a.longBio}
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Reveal>
                <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-slate-200 p-7">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <GraduationCap className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                    Education
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {a.education.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-slate-200 p-7">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <Scale className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                    Bar Admissions
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {a.barAdmissions.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-3xl bg-white border border-slate-200 p-7">
                <h3 className="text-lg font-extrabold text-slate-900">
                  Practice Areas
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {a.practiceAreas.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-slate-600">
                  <span className="font-bold text-slate-900">
                    {a.yearsExperience}+ years
                  </span>{" "}
                  of practice experience.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
