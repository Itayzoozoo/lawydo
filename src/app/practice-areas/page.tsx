import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PracticeAreas } from "@/components/PracticeAreas";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Litigation, Real Estate, Technology, Corporate Governance, M&A, Commercial Law, Banking and Credit Cards — integrated counsel across BPG's practice groups.",
};

export default function PracticeAreasIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Expertise"
        title="Integrated counsel."
        highlight="Specialist depth."
        description="Nine focus areas, three practice groups, one firm. Choose an area to learn more."
      />
      <PracticeAreas heading="Practice Areas" eyebrow="What we do" />
      <CTASection />
    </>
  );
}
