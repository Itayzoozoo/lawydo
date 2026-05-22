import {
  Banknote,
  Building2,
  Cpu,
  CreditCard,
  FileText,
  Gavel,
  Handshake,
  Home,
  Landmark,
} from "lucide-react";
import type { PracticeArea } from "@/types";

export const practiceAreas: PracticeArea[] = [
  {
    slug: "technology",
    name: "Technology",
    shortDescription:
      "Advising technology companies from early-stage startups to established enterprises on IP, licensing, data privacy and venture capital transactions.",
    longDescription:
      "Our technology practice serves the full lifecycle of innovation — from incorporation and seed financing to acquisition or IPO. We advise Israeli and international founders, executives, investors, and multinational technology groups on complex IP, commercial, and regulatory matters with deep familiarity with the global technology ecosystem.",
    icon: Cpu,
    services: [
      "IP & Licensing",
      "Data Privacy & Cybersecurity",
      "SaaS & Cloud Agreements",
      "Open Source & Software Licensing",
      "Venture Capital Transactions",
      "Outsourcing & IT Projects",
    ],
    highlights: [
      "Counsel to Israeli and cross-border technology companies",
      "Expertise across EU, UK, US and UAE regulatory regimes",
      "Privacy Committee membership since 2007",
    ],
  },
  {
    slug: "corporate-governance",
    name: "Corporate Governance",
    shortDescription:
      "Guiding boards and executives on fiduciary duties, compliance frameworks, shareholder relations and regulatory matters.",
    longDescription:
      "We advise boards, audit committees, controlling shareholders, and senior management on the full range of corporate governance issues — from board composition and fiduciary obligations to compliance programs, internal investigations, and stakeholder communications. Our team brings practical experience leading legal and risk functions within major Israeli and international institutions.",
    icon: Landmark,
    services: [
      "Board & Committee Counsel",
      "Compliance Program Design",
      "Shareholder Relations",
      "Internal Investigations",
      "Regulatory Strategy",
      "Fiduciary Duty Advice",
    ],
    highlights: [
      "Experience leading risk and legal departments in financial institutions",
      "Cross-jurisdictional governance for multinational groups",
      "Trusted by boards of regulated entities",
    ],
  },
  {
    slug: "mergers-acquisitions",
    name: "Mergers & Acquisitions",
    shortDescription:
      "Structuring and negotiating complex domestic and cross-border transactions, due diligence and post-merger integration.",
    longDescription:
      "Our M&A practice represents acquirers, targets, founders, and financial investors in Israeli and cross-border transactions across the technology, financial services, and industrial sectors. We lead clients from strategic structuring and diligence through negotiation, signing, closing, and post-merger integration — with discipline and commercial judgment.",
    icon: Handshake,
    services: [
      "Acquisitions & Disposals",
      "Cross-Border Transactions",
      "Legal Due Diligence",
      "Joint Ventures",
      "Post-Merger Integration",
      "Founder & Management Representation",
    ],
    highlights: [
      "Significant experience in technology and FinTech M&A",
      "Cross-border deals across Israel, EU, UAE and beyond",
      "Hundreds of closed transactions",
    ],
  },
  {
    slug: "commercial-law",
    name: "Commercial Law",
    shortDescription:
      "Drafting and negotiating commercial agreements, joint ventures, distribution arrangements and strategic partnerships.",
    longDescription:
      "We serve as commercial counsel to Israeli and international clients across the full spectrum of day-to-day business arrangements — from foundational commercial agreements and supplier contracts to complex strategic partnerships, distribution networks, and joint ventures. Our approach is pragmatic and business-oriented.",
    icon: FileText,
    services: [
      "Commercial Agreements",
      "Distribution & Reseller Arrangements",
      "Strategic Partnerships",
      "Joint Ventures",
      "General Counsel Services",
      "Negotiation Support",
    ],
    highlights: [
      "Long-standing relationships with international and domestic clients",
      "Pragmatic, business-oriented drafting",
      "Cross-disciplinary support from our corporate and tech teams",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    shortDescription:
      "Handling property acquisitions, development projects, leasing, urban renewal (Tama 38/Pinui-Binui) and real estate finance.",
    longDescription:
      "Our real estate department is led by a partner with deep experience advising private clients and corporate groups across the full range of Israeli real estate matters — from new-build and second-hand apartments to commercial portfolios, income-producing assets, urban renewal projects, and co-ownership arrangements. We also provide notarial services and enduring powers of attorney.",
    icon: Home,
    services: [
      "Apartment Purchase & Sale (New and Second-Hand)",
      "Commercial Real Estate",
      "Income-Producing Real Estate",
      "Lease & Management Agreements",
      "Urban Renewal (Tama 38 / Pinui-Binui)",
      "Notarial & Enduring Power of Attorney",
    ],
    highlights: [
      "Department head certified as notary",
      "Authorized to draft enduring powers of attorney",
      "Ongoing counsel to income-producing real estate companies",
    ],
  },
  {
    slug: "litigation",
    name: "Litigation",
    shortDescription:
      "Representing clients in complex civil and commercial disputes before Israeli courts and arbitration tribunals.",
    longDescription:
      "Our litigation team appears before all instances of the Israeli courts and arbitral tribunals, handling complex civil and commercial disputes with an emphasis on real estate, planning and construction, inheritance, and administrative law. We have significant experience representing institutional clients and managing complex administrative petitions against local authorities.",
    icon: Gavel,
    services: [
      "Civil & Commercial Disputes",
      "Real Estate Litigation",
      "Planning & Construction Disputes",
      "Administrative Petitions",
      "Inheritance Disputes",
      "Institutional Representation",
    ],
    highlights: [
      "Trial experience across all Israeli judicial instances",
      "Complex disputes for institutional clients",
      "Track record in administrative petitions",
    ],
  },
  {
    slug: "banking",
    name: "Banking",
    shortDescription:
      "Representing major banks and financial institutions across a wide range of banking law matters.",
    longDescription:
      "Our banking department specializes in all aspects of banking law and Proper Banking Management directives, with deep familiarity across credit, debt and finance. With significant experience representing major banks, financial institutions and diverse creditors, we combine business acumen with practical professional experience — helping clients achieve efficient and creative solutions even in the most complex cases, whether launching credit products or dealing with debt collection.",
    icon: Banknote,
    services: [
      "Banking Regulation",
      "Proper Banking Management Directives",
      "Credit & Lending",
      "Debt Collection",
      "Creditor Representation",
      "Financial Institution Counsel",
    ],
    highlights: [
      "Counsel to major Israeli banks and creditors",
      "Deep familiarity with regulatory directives",
      "Pragmatic solutions for complex credit and debt matters",
    ],
  },
  {
    slug: "banking-technology",
    name: "Banking & Technology",
    shortDescription:
      "Advisory at the intersection of banking regulation and technological innovation, including FinTech, payment systems, digital banking and cross-border regulatory compliance.",
    longDescription:
      "BPG sits at the crossroads of regulated finance and cutting-edge technology. We advise banks, FinTech companies, and payment providers on digital banking platforms, open banking, payment infrastructure, cloud adoption in regulated environments, and cross-border regulatory compliance across Israel, the EU and the UAE — with practical experience leading legal functions in major Israeli and international FinTech environments.",
    icon: Cpu,
    services: [
      "FinTech Licensing & Strategy",
      "Payment Systems & Infrastructure",
      "Digital & Open Banking",
      "Cloud Compliance for Regulated Entities",
      "Cross-Border Regulatory Counsel",
      "Banking Innovation Programs",
    ],
    highlights: [
      "Experience leading FinTech legal teams internationally",
      "Counsel across Israel, EU and UAE regulatory regimes",
      "Combined banking + technology expertise under one roof",
    ],
  },
  {
    slug: "credit-cards",
    name: "Credit Cards",
    shortDescription:
      "Advisory on all aspects of the credit card industry, including card issuance, clearing, interchange fees, and issuer and acquirer regulation.",
    longDescription:
      "We advise issuers, acquirers, schemes, and merchants on the full spectrum of credit card industry matters — from card issuance and acceptance to clearing, settlement, interchange, and the regulatory frameworks that surround them. Our team brings deep familiarity with the credit card schemes operating in Israel and globally, and a thorough working knowledge of the supporting regulatory regimes.",
    icon: CreditCard,
    services: [
      "Card Issuance & Acceptance",
      "Clearing & Settlement",
      "Interchange & Pricing",
      "Issuer & Acquirer Regulation",
      "Scheme Rules & Compliance",
      "Merchant & Aggregator Counsel",
    ],
    highlights: [
      "Deep familiarity with Israeli and global card schemes",
      "Issuer- and acquirer-side experience",
      "Counsel across the full payments value chain",
    ],
  },
];

export const practiceAreaCardIcons = {
  Cpu,
  Landmark,
  Handshake,
  FileText,
  Home,
  Gavel,
  Banknote,
  CreditCard,
  Building2,
};

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}
