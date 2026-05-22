"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl animate-blob" />
        <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.02]"
        >
          {title}{" "}
          {highlight && (
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg lg:text-xl text-slate-600 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
