import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AttorneyCard } from "@/components/AttorneyCard";
import { CTASection } from "@/components/CTASection";
import { attorneys } from "@/data/attorneys";

export const metadata: Metadata = {
  title: "Our Attorneys",
  description:
    "Meet the partners and associates of Sterling & Vance LLP — trial veterans, deal architects, and trusted advisors.",
};

export default function AttorneysIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Attorneys"
        title="People you'd want"
        highlight="in your corner."
        description="Partners-first staffing means clients work directly with the attorneys whose names are on the door."
      />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {attorneys.map((a, i) => (
            <AttorneyCard key={a.slug} attorney={a} index={i} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
