"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { EXPERIENCES } from "@/data/experiences";
import { FeaturedRow } from "@/components/FeaturedRow";

const EASE = [0.22, 1, 0.36, 1] as const;
const VP   = { once: false, margin: "-80px" } as const;

const listContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState<Record<string, string | null>>({});

  const handleToggle = (expKey: string, projectId: string) =>
    setExpandedIds((prev) => ({
      ...prev,
      [expKey]: prev[expKey] === projectId ? null : projectId,
    }));

  return (
    <section
      id="experience"
      className="font-sans px-6 md:px-10 py-16 md:py-20 border-t border-neutral-100 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto">

        <div className="mb-10 md:mb-12 space-y-2">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VP}
            transition={{ duration: 0.55, ease: EASE }}
            className="text-xs font-semibold tracking-widest uppercase text-neutral-400"
          >
            02 — Experience
          </motion.p>
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
            {EXPERIENCES.map((exp, expIdx) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.7, ease: EASE, delay: expIdx * 0.1 }}
                className="relative pl-10 md:pl-14"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={VP}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.2 + expIdx * 0.1 }}
                  className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-black dark:bg-white border-2 border-white dark:border-neutral-950 ring-1 ring-black dark:ring-white"
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <motion.span
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.55, ease: EASE, delay: 0.25 }}
                    className={`inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-sm border shrink-0 ${
                      exp.current
                        ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                        : "bg-transparent text-neutral-400 border-neutral-200 dark:border-neutral-700"
                    }`}
                  >
                    {exp.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80 dark:bg-black/80 animate-pulse" />
                    )}
                    {exp.period}
                  </motion.span>
                </div>

                <motion.ul
                  initial="hidden"
                  whileInView="show"
                  viewport={VP}
                  variants={listContainer}
                  className="space-y-3"
                >
                  {exp.highlights.map((item) => (
                    <motion.li
                      key={item.title}
                      variants={listItem}
                      className="flex items-center gap-3 group"
                    >
                      <span className="shrink-0 w-4 h-px bg-black/30 dark:bg-white/30 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-500" />
                      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        <span className="font-semibold text-black dark:text-white">
                          {item.title}:{" "}
                        </span>
                        {item.body}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>

                {"projects" in exp && exp.projects.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
                    className="mt-8"
                  >
                    <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4">
                      Projects
                    </p>
                    <div className="border-t border-black dark:border-neutral-700">
                      {exp.projects.map((project, pIdx) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 32 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false, margin: "-150px 0px -60px 0px" }}
                          transition={{ duration: 0.6, ease: EASE, delay: pIdx * 0.08 }}
                        >
                          <FeaturedRow
                            project={project}
                            index={pIdx}
                            expanded={expandedIds[`${exp.company}-${exp.role}`] === project.id}
                            onToggle={() => handleToggle(`${exp.company}-${exp.role}`, project.id)}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
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
