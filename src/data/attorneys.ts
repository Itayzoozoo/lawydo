import type { Attorney } from "@/types";

export const attorneys: Attorney[] = [
  {
    slug: "margaret-sterling",
    name: "Margaret Sterling",
    role: "Managing Partner",
    bio: "Founding partner with three decades of corporate and M&A experience advising public companies, founders, and institutional investors.",
    longBio:
      "Margaret Sterling co-founded Sterling & Vance in 1994 and has led the firm's corporate practice ever since. She is regularly retained by Fortune 500 boards on bet-the-company transactions and by emerging companies on their first institutional rounds. Margaret has been named to the Daily Journal's Top 100 Lawyers in California for twelve consecutive years and lectures at USC Gould School of Law on deal structuring.",
    email: "msterling@sterlingvance.com",
    phone: "(213) 555-0143",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
    education: [
      "J.D., Stanford Law School, 1991",
      "B.A. Economics, Yale University, 1988",
    ],
    barAdmissions: ["California", "New York", "U.S. Supreme Court"],
    practiceAreas: ["Corporate Law", "Real Estate"],
    yearsExperience: 32,
  },
  {
    slug: "david-vance",
    name: "David Vance",
    role: "Founding Partner, Head of Litigation",
    bio: "Veteran trial lawyer with 200+ verdicts and a reputation for taking the cases other firms won't.",
    longBio:
      "David Vance leads the firm's litigation and criminal defense practices. A former federal prosecutor in the Central District of California, David has tried more than 200 cases to verdict, including high-profile white-collar, civil rights, and complex commercial disputes. He is a fellow of the American College of Trial Lawyers and has been recognized as a Best Lawyers \"Lawyer of the Year\" four times.",
    email: "dvance@sterlingvance.com",
    phone: "(213) 555-0144",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    education: [
      "J.D., Harvard Law School, 1990",
      "B.A. Political Science, Georgetown University, 1987",
    ],
    barAdmissions: ["California", "9th Circuit", "U.S. Supreme Court"],
    practiceAreas: ["Criminal Defense", "Personal Injury"],
    yearsExperience: 34,
  },
  {
    slug: "amelia-okafor",
    name: "Amelia Okafor",
    role: "Partner, Family Law",
    bio: "Board-certified family law specialist handling high-asset divorces and complex custody matters with discretion and resolve.",
    longBio:
      "Amelia Okafor chairs the firm's family law group. A certified family law specialist by the California State Bar, she is known for her steady judgment in emotionally charged matters and her command of forensic accounting in high-net-worth dissolutions. Amelia frequently serves as a private judge and trained mediator in collaborative divorces.",
    email: "aokafor@sterlingvance.com",
    phone: "(213) 555-0145",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
    education: [
      "J.D., UC Berkeley School of Law, 2005",
      "B.A. Sociology, Spelman College, 2002",
    ],
    barAdmissions: ["California"],
    practiceAreas: ["Family Law", "Estate Planning"],
    yearsExperience: 19,
  },
  {
    slug: "jonathan-reyes",
    name: "Jonathan Reyes",
    role: "Senior Associate, Real Estate & Estate Planning",
    bio: "Trusted advisor to developers, family offices, and high-net-worth individuals on complex property and legacy matters.",
    longBio:
      "Jonathan Reyes represents real estate developers, investors, and multi-generational families across acquisitions, financings, and estate strategy. Before joining Sterling & Vance, he practiced at an AmLaw 100 firm in New York and clerked for the Hon. Maria L. Cervantes on the U.S. District Court for the Southern District of California. He is fluent in Spanish and Portuguese.",
    email: "jreyes@sterlingvance.com",
    phone: "(213) 555-0146",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    education: [
      "J.D., Columbia Law School, 2014",
      "B.S. Finance, NYU Stern School of Business, 2011",
    ],
    barAdmissions: ["California", "New York"],
    practiceAreas: ["Real Estate", "Estate Planning"],
    yearsExperience: 11,
  },
];

export function getAttorney(slug: string): Attorney | undefined {
  return attorneys.find((a) => a.slug === slug);
}
