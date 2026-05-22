"use client";

import { motion } from "framer-motion";
import { Trophy, Users, ShieldCheck, Sparkles } from "lucide-react";

const STATS = [
  { value: "500+", label: "Cases Won" },
  { value: "30+", label: "Years Experience" },
  { value: "$340M", label: "Recovered for Clients" },
  { value: "98%", label: "Client Satisfaction" },
];

const PILLARS = [
  {
    icon: Trophy,
    title: "Track Record",
    description:
      "Three decades of favorable outcomes in courtrooms and boardrooms across the country.",
  },
  {
    icon: Users,
    title: "Senior Attention",
    description:
      "Partners — not just associates — work your matter from intake through resolution.",
  },
  {
    icon: ShieldCheck,
    title: "Discretion",
    description:
      "Confidentiality is non-negotiable. We earn the trust of clients who can choose anyone.",
  },
  {
    icon: Sparkles,
    title: "Clarity",
    description:
      "Complex strategy explained in plain language, with clear options and honest counsel.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-purple-100/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700"
          >
            Why Clients Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
          >
            Numbers that{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              tell the story.
            </span>
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm"
            >
              <div className="text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-3 text-sm font-bold tracking-wide uppercase text-slate-500">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="rounded-3xl p-8 bg-gradient-to-b from-slate-50 to-white border border-slate-200/70"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
