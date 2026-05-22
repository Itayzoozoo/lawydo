import type { Attorney } from "@/types";

export const attorneys: Attorney[] = [
  {
    slug: "gil-bachar",
    name: "Gil Bachar",
    role: "Managing Partner",
    bio: "Gil Bachar is a partner specializing in civil and commercial litigation.",
    longBio:
      "Gil Bachar has extensive professional experience in court appearances across all judicial instances, handling complex disputes in civil and commercial law, with an emphasis on real estate law, planning and construction law, inheritance law, and administrative law, including managing complex petitions against local authorities. He also has significant experience representing institutional bodies in complex legal proceedings.\n\nPrior to founding the firm, Gil Bachar completed his internship and worked for approximately 5 years at the law firm Boyer, Zarnkin, Roizen & Co., starting from 2002.",
    email: "gil.b@bpglaw.co.il",
    phone: "+972 (054) 7384829",
    education: [
      "Bachelor's degree in Law (LL.B.), Academic Center of Law and Business, Ramat Gan",
    ],
    barAdmissions: ["Member of the Israel Bar Association since 2005"],
    practiceAreas: ["Litigation", "Real Estate", "Corporate Governance"],
    yearsExperience: 21,
    military:
      "Served between 1991–1995 as a combatant and commander in the IDF's Counter-Terrorism Unit (LOTAR).",
  },
  {
    slug: "gil-pordes",
    name: "Gil Pordes",
    role: "Senior Partner",
    bio: "Gil Pordes is a partner and head of the Real Estate department at the firm.",
    longBio:
      "Gil Pordes has extensive professional experience in providing counsel, accompaniment, and representation to private and corporate clients in a wide range of real estate transactions, including: sale and purchase transactions of newly built apartments (\"contractor apartments\"), second-hand apartments, agricultural plots, commercial real estate, ongoing support for income-producing real estate companies, lease and management agreements in the income-producing real estate sector, residential lease agreements, co-ownership agreements in real estate, and more.\n\nIn addition, Gil Pordes is both a notary and holds a certification from the Guardian General for drafting enduring powers of attorney.",
    email: "gil.p@bpglaw.co.il",
    phone: "+972 (054) 7727271",
    education: [
      "Bachelor's degree in Law (LL.B.), Tel Aviv University",
      "Master's degree in Law (LL.M.), Tel Aviv University",
    ],
    barAdmissions: ["Member of the Israel Bar Association since 2001"],
    practiceAreas: ["Real Estate", "Commercial Law"],
    yearsExperience: 25,
    additional: [
      {
        title: "Additional Certifications",
        body: "Notary. Certified by the Guardian General to draft enduring powers of attorney.",
      },
    ],
  },
  {
    slug: "ido-goleczki",
    name: "Ido Goleczki",
    role: "Senior Partner",
    bio: "Ido is a prominent expert in Computer, Information Technology, Cybersecurity, Artificial Intelligence (AI), Privacy, and Data Protection Law.",
    longBio:
      "Ido is a seasoned professional with extensive experience leading legal and risk departments in both major Israeli financial institutions and international FinTech environments. His expertise spans Israeli banking regulation, cloud technology compliance, corporate governance, and regulatory strategy across multiple jurisdictions including Israel, the EU, and the UAE. His work includes drafting and negotiating complex transactions, including licensing, cloud and SaaS offerings, Big Data, Open Source, outsourcing, and large-scale IT project agreements, as well as handling internet-related legal and contractual matters.\n\nIdo also specializes in cyber, privacy, and data protection, with extensive experience in regulatory compliance, drafting and negotiating a wide range of agreements and policies for international and national institutions, managing data breach cases and security incidents, addressing spam-related issues, and has vast experience in purchasing companies and performing M&As.",
    email: "ido.g@bpglaw.co.il",
    phone: "+972 (054) 4973539",
    education: [
      "Master's degree in Law (LL.M.), Bar Ilan University",
      "Bachelor's degree in Law (LL.B.), College of Management",
    ],
    barAdmissions: [
      "Member of the Israel Bar Association since 2005",
      "Member of the Privacy Committee since 2007",
    ],
    practiceAreas: [
      "Technology",
      "Banking & Technology",
      "Credit Cards",
      "Corporate Governance",
      "Mergers & Acquisitions",
      "Banking",
    ],
    yearsExperience: 21,
    additional: [
      {
        title: "Academic Experience",
        body: "Tutor in \"Investments – Legal Aspects\" at Haifa University and MTA.",
      },
    ],
  },
];

export function getAttorney(slug: string): Attorney | undefined {
  return attorneys.find((a) => a.slug === slug);
}
