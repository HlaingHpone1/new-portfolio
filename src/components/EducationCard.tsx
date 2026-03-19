"use client";

import { motion } from "motion/react";
import { Education } from "@/data/education";

const EASE = [0.22, 1, 0.36, 1] as const;

const rowItem = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

type Props = {
  education: Education[number];
};

export function EducationCard({ education: { degree, institution, period } }: Props) {
  return (
    <motion.div
      variants={rowItem}
      className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4"
    >
      <div className="space-y-0.5">
        <p className="text-base md:text-lg font-bold text-black dark:text-white tracking-tight">
          {degree}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
          {institution}
        </p>
      </div>
      <span className="font-mono text-xs text-neutral-400 font-bold shrink-0 sm:text-right">
        {period}
      </span>
    </motion.div>
  );
}
