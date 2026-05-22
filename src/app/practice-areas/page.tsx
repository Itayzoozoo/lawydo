import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PracticeAreas } from "@/components/PracticeAreas";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Deep expertise across corporate, family, criminal defense, personal injury, real estate, and estate planning matters.",
};

export default function PracticeAreasIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Practice Areas"
        title="Full-service representation."
        highlight="Specialist depth."
        description="Six core practices, each led by partners who have spent their careers mastering them. Choose an area to learn more."
      />
      <PracticeAreas heading="Our Practices" eyebrow="Where we work" />
      <CTASection />
    </>
  );
}
