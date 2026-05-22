"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Award, Scale } from "lucide-react";
import { firm } from "@/data/firm";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[100svh] flex items-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-24 h-[34rem] w-[34rem] rounded-full bg-blue-400/30 blur-3xl animate-blob" />
        <div className="absolute top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-purple-400/30 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 h-[30rem] w-[30rem] rounded-full bg-fuchsia-400/20 blur-3xl animate-blob animation-delay-4000" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-32 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold tracking-[0.18em] uppercase"
          >
            <Scale className="w-3.5 h-3.5" aria-hidden="true" />
            Established {firm.founded}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95]"
          >
            Trusted Counsel.
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-indigo-100 to-purple-200 bg-clip-text text-transparent">
              Decisive Results.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg sm:text-xl text-blue-100/90 font-medium leading-relaxed"
          >
            For three decades, {firm.name} has represented founders, families,
            and Fortune 500 boards in their most consequential matters — with
            judgment, discretion, and an unwavering record of results.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl shadow-purple-900/40 hover:shadow-2xl hover:shadow-purple-700/40 hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 focus-visible:ring-white"
            >
              Schedule a Consultation
              <ArrowRight
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <a
              href={firm.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-white border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 focus-visible:ring-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {firm.phone}
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl"
          >
            {[
              { label: "Cases Won", value: "500+" },
              { label: "Years Practicing", value: "30+" },
              { label: "Recovered", value: "$340M" },
              { label: "Attorneys", value: "24" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-semibold tracking-widest uppercase text-blue-200/80">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="hidden xl:flex absolute right-10 bottom-10 items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
          <Award className="w-4 h-4" aria-hidden="true" />
          Top-Ranked AV Preeminent · 2024
        </div>
      </div>
    </section>
  );
}
