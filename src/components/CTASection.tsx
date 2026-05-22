"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { firm } from "@/data/firm";

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 px-8 py-16 lg:px-16 lg:py-24 text-white shadow-2xl shadow-purple-900/20"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl animate-blob" />
            <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="relative max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-200">
              Ready to talk?
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              Bring us your{" "}
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                hardest case.
              </span>
            </h2>
            <p className="mt-6 text-lg text-blue-100/90 max-w-2xl">
              Initial consultations are confidential and complimentary. A
              partner will speak with you personally about your matter.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-blue-900 bg-white hover:bg-blue-50 transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 focus-visible:ring-white"
              >
                Schedule a Consultation
                <ArrowRight
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={firm.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 focus-visible:ring-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                {firm.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
