import { Hero } from "@/components/Hero";
import { PracticeAreas } from "@/components/PracticeAreas";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
