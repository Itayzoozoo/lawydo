import type { LucideIcon } from "lucide-react";

export type PracticeArea = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  services: string[];
  highlights: string[];
};

export type Attorney = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  email: string;
  phone: string;
  image: string;
  education: string[];
  barAdmissions: string[];
  practiceAreas: string[];
  yearsExperience: number;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type FirmStat = {
  label: string;
  value: string;
};
