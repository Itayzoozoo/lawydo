"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import type { Attorney } from "@/types";

export function AttorneyCard({
  attorney,
  index = 0,
}: {
  attorney: Attorney;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 hover:shadow-2xl hover:shadow-purple-500/10 transition-all hover:-translate-y-1"
    >
      <Link
        href={`/attorneys/${attorney.slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 rounded-3xl"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
          <Image
            src={attorney.image}
            alt={`${attorney.name}, ${attorney.role}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>
        <div className="p-6 lg:p-7">
          <h3 className="text-xl lg:text-2xl font-black tracking-tight text-slate-900">
            {attorney.name}
          </h3>
          <div className="mt-1 inline-block">
            <p className="text-sm font-semibold text-slate-600">
              {attorney.role}
            </p>
            <span className="block mt-1.5 h-0.5 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
          </div>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-3">
            {attorney.bio}
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="truncate">{attorney.email}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
