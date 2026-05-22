import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${firm.name} — ${firm.addressDisplay}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's talk about"
        highlight="your matter."
        description="Tell us a little about what you're facing. Initial conversations are confidential and without obligation."
      />

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <InfoCard
                icon={<MapPin className="w-5 h-5" />}
                title="Address"
                lines={[firm.addressDisplay]}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <InfoCard
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                lines={[firm.email]}
                href={firm.emailHref}
              />
            </Reveal>
            <Reveal delay={0.16}>
              <InfoCard
                icon={<Clock className="w-5 h-5" />}
                title="Hours"
                lines={[firm.hours, "After-hours appointments by request"]}
              />
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  title,
  lines,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 rounded-3xl bg-white border border-slate-200 p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold tracking-[0.18em] uppercase text-purple-700">
          {title}
        </div>
        <div className="mt-1 space-y-0.5">
          {lines.map((l) => (
            <p key={l} className="text-[15px] font-semibold text-slate-800">
              {l}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
