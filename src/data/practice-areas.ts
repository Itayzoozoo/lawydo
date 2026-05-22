import {
  Briefcase,
  Building2,
  FileText,
  Gavel,
  HeartHandshake,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import type { PracticeArea } from "@/types";

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-law",
    name: "Corporate Law",
    shortDescription:
      "Strategic counsel on formations, M&A, governance, and complex commercial transactions.",
    longDescription:
      "From boardroom strategy to billion-dollar transactions, our corporate group advises founders, executives, and institutional investors on the matters that shape their business. We act as both architects and advocates — structuring deals, navigating regulation, and protecting our clients' interests at every stage of the corporate lifecycle.",
    icon: Building2,
    services: [
      "Mergers & Acquisitions",
      "Private Equity & Venture Capital",
      "Corporate Governance",
      "Joint Ventures & Strategic Alliances",
      "Securities & Capital Markets",
      "Commercial Contracts",
    ],
    highlights: [
      "Closed over $4.2B in M&A transactions in the last decade",
      "Trusted outside counsel to 60+ growth-stage companies",
      "Cross-border deal experience in 22 jurisdictions",
    ],
  },
  {
    slug: "family-law",
    name: "Family Law",
    shortDescription:
      "Compassionate, discreet representation for divorce, custody, and complex family matters.",
    longDescription:
      "Family disputes are personal — but they're also legal, financial, and lasting. Our family law attorneys combine litigation strength with the discretion and empathy these matters demand, guiding clients through divorce, custody, and high-net-worth asset division with clarity and care.",
    icon: HeartHandshake,
    services: [
      "Divorce & Legal Separation",
      "Child Custody & Support",
      "Prenuptial & Postnuptial Agreements",
      "High-Net-Worth Asset Division",
      "Adoption",
      "Domestic Violence Protection",
    ],
    highlights: [
      "Board-certified family law specialists on staff",
      "Trained collaborative-divorce mediators",
      "Confidential, white-glove client experience",
    ],
  },
  {
    slug: "criminal-defense",
    name: "Criminal Defense",
    shortDescription:
      "Aggressive, principled defense for state and federal criminal matters.",
    longDescription:
      "When liberty is on the line, you need attorneys who don't flinch. Our criminal defense team includes former prosecutors and trial veterans who have litigated in state, federal, and appellate courts. We build cases meticulously, negotiate from strength, and try them to win.",
    icon: Gavel,
    services: [
      "Federal Criminal Defense",
      "White-Collar Crime",
      "DUI & DWI Defense",
      "Drug Offenses",
      "Violent Crimes",
      "Appeals & Post-Conviction Relief",
    ],
    highlights: [
      "Former federal and state prosecutors on the team",
      "92% favorable outcome rate on serious felony cases",
      "24/7 emergency representation available",
    ],
  },
  {
    slug: "personal-injury",
    name: "Personal Injury",
    shortDescription:
      "Recovering full compensation for accident, malpractice, and wrongful-death claims.",
    longDescription:
      "Injuries don't pause for litigation. Our personal injury attorneys handle every step — investigation, negotiation, and trial — so clients can focus on recovery. We've recovered hundreds of millions for individuals and families against insurers, corporations, and institutions that thought they could outlast them.",
    icon: Shield,
    services: [
      "Auto & Trucking Accidents",
      "Medical Malpractice",
      "Workplace Injuries",
      "Product Liability",
      "Premises Liability",
      "Wrongful Death",
    ],
    highlights: [
      "$340M+ recovered for injured clients",
      "Contingency-fee representation — no recovery, no fee",
      "Trial-ready in every case from intake",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    shortDescription:
      "End-to-end representation for residential, commercial, and development transactions.",
    longDescription:
      "Real estate is detail work at scale. Our team represents owners, developers, REITs, lenders, and tenants across acquisition, financing, leasing, entitlement, and dispute resolution — closing complex deals on time and on terms.",
    icon: Briefcase,
    services: [
      "Commercial Acquisitions & Sales",
      "Real Estate Finance",
      "Leasing & Property Management",
      "Land Use & Zoning",
      "Construction Contracts",
      "Title & Boundary Disputes",
    ],
    highlights: [
      "Over 2,000 closed transactions",
      "Counsel to leading West Coast developers",
      "In-house title and zoning expertise",
    ],
  },
  {
    slug: "estate-planning",
    name: "Estate Planning",
    shortDescription:
      "Protecting legacies through trusts, wills, and multi-generational wealth planning.",
    longDescription:
      "What you've built deserves a thoughtful plan. We design estate, trust, and succession structures that minimize tax, preserve privacy, and reflect the values our clients want to pass on — and we administer those plans when the time comes, with steady hands and discretion.",
    icon: FileText,
    services: [
      "Wills & Revocable Trusts",
      "Irrevocable & Dynasty Trusts",
      "Estate & Gift Tax Planning",
      "Business Succession",
      "Probate & Trust Administration",
      "Charitable Giving",
    ],
    highlights: [
      "Specialists in multi-generational wealth transfer",
      "Coordinated planning across 14 states",
      "Confidential family-office collaboration",
    ],
  },
];

export const practiceAreaCardIcons = {
  Scale,
  Gavel,
  Building2,
  Shield,
  Briefcase,
  Users,
  HeartHandshake,
  FileText,
};

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}
