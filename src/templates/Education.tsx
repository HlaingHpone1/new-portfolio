"use client";

import { motion } from "motion/react";
import { EDUCATION } from "@/data/education";
import { SectionLabel } from "@/components/SectionLabel";
import { EducationCard } from "@/components/EducationCard";

const VP = { once: false, margin: "-60px" } as const;

const rowContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Education() {
  return (
    <section
      id="education"
      className="font-sans px-6 md:px-10 py-14 md:py-18 border-t border-neutral-100 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="04 — Education" className="mb-6" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VP}
          variants={rowContainer}
          className="space-y-0 divide-y divide-neutral-100 dark:divide-neutral-800"
        >
          {EDUCATION.map((item) => (
            <EducationCard key={item.institution} education={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
