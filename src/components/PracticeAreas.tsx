"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { practiceAreas } from "@/data/practice-areas";

export function PracticeAreas({
  heading = "Practice Areas",
  eyebrow = "What we do",
  showAll = true,
}: {
  heading?: string;
  eyebrow?: string;
  showAll?: boolean;
}) {
  const items = showAll ? practiceAreas : practiceAreas.slice(0, 6);
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50/50 to-purple-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700"
          >
            {eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
          >
            {heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {heading.split(" ").slice(-1)}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-slate-600 leading-relaxed"
          >
            Deep expertise across the disciplines that matter most to our
            clients — backed by trial-tested attorneys and three decades of
            results.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <Link
                  href={`/practice-areas/${p.slug}`}
                  className="group relative block h-full p-[1px] rounded-3xl bg-slate-200/70 hover:bg-gradient-to-br hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
                >
                  <div className="h-full rounded-3xl bg-white p-8 lg:p-9">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/20">
                        <Icon className="w-7 h-7" aria-hidden="true" />
                      </div>
                      <ArrowUpRight
                        className="w-5 h-5 text-slate-300 group-hover:text-purple-600 transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-7 text-2xl font-black tracking-tight text-slate-900">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                      {p.shortDescription}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Learn more
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
