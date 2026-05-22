"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-purple-50/40 via-white to-blue-50/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700"
          >
            Client Voices
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
          >
            What our clients{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              say.
            </span>
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative rounded-3xl bg-white border border-slate-200 p-8 lg:p-10 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all"
            >
              <Quote
                className="w-10 h-10"
                aria-hidden="true"
                style={{
                  stroke: "url(#qg)",
                }}
              />
              <svg width="0" height="0" aria-hidden>
                <defs>
                  <linearGradient id="qg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="mt-3 flex items-center gap-1 text-amber-500">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" aria-hidden="true" />
                ))}
                <span className="sr-only">{t.rating} out of 5 stars</span>
              </div>
              <blockquote className="mt-5 text-[17px] leading-relaxed text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-slate-100">
                <div className="font-extrabold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
