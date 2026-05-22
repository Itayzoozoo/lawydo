import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AttorneyCard } from "@/components/AttorneyCard";
import { CTASection } from "@/components/CTASection";
import { attorneys } from "@/data/attorneys";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Meet the founding partners of BPG — Gil Bachar, Gil Pordes and Ido Goleczki.",
};

export default function AttorneysIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Our"
        highlight="Partners."
        description="Three founding partners with six combined decades of practice across litigation, real estate, technology and finance."
      />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {attorneys.map((a, i) => (
            <AttorneyCard key={a.slug} attorney={a} index={i} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
