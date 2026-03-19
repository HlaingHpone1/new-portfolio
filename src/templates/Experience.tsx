"use client";

import { motion } from "motion/react";
import { EXPERIENCES } from "@/data/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SectionLabel } from "@/components/SectionLabel";
import { EASE, VP } from "@/lib/motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="font-sans px-6 md:px-10 py-16 md:py-20 border-t border-neutral-100 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto">

        <div className="mb-10 md:mb-12 space-y-2">
          <SectionLabel label="02 — Experience" />
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
            className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight leading-tight"
          >
            Where I&apos;ve worked.
          </motion.h2>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VP}
            transition={{ duration: 1.1, ease: EASE }}
            className="absolute left-0 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10"
          />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${exp.role}`}
                exp={exp}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.4, ease: EASE, delay: 0.5 }}
            className="absolute left-0 bottom-0 -translate-x-1/2 w-2 h-2 rounded-full bg-black/20 dark:bg-white/20"
          />
        </div>

      </div>
    </section>
  );
}
