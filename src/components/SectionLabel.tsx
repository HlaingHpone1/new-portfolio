"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;
const VP   = { once: false, margin: "-80px" } as const;

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
