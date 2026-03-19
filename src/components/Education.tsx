"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;
const VP   = { once: false, margin: "-60px" } as const;

const EDUCATION = [
  {
    degree: "Bachelor's Degree in Computing",
    institution: "University of Greenwich",
    period: "2026",
  },
  {
    degree: "Level 4 & 5 Diploma of Computing with Business Management",
    institution: "Strategy First University",
    period: "2020 – 2023",
  },
] as const;

/* ── Stagger container ── */
const rowContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const rowItem = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Education() {
  return (
    <section
      id="education"
      className="font-sans px-6 md:px-10 py-14 md:py-18 border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6"
        >
          04 — Education
        </motion.p>

        {/* ── Entries ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VP}
          variants={rowContainer}
          className="space-y-0 divide-y divide-neutral-100"
        >
          {EDUCATION.map(({ degree, institution, period }) => (
            <motion.div
              key={institution}
              variants={rowItem}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4"
            >
              {/* Left */}
              <div className="space-y-0.5">
                <p className="text-base md:text-lg font-bold text-black tracking-tight">
                  {degree}
                </p>
                <p className="text-sm text-neutral-500 font-medium">
                  {institution}
                </p>
              </div>

              {/* Right — period */}
              <span className="font-mono text-xs text-neutral-400 font-bold shrink-0 sm:text-right">
                {period}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
