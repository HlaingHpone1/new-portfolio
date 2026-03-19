"use client";

import { motion } from "motion/react";
import { EASE, VP } from "@/lib/motion";

type Props = {
  label: string;
  className?: string;
};

export function SectionLabel({ label, className = "" }: Props) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VP}
      transition={{ duration: 0.55, ease: EASE }}
      className={`text-xs font-semibold tracking-widest uppercase text-neutral-400 ${className}`}
    >
      {label}
    </motion.p>
  );
}
