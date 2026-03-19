"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/data/projects";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";
import { OtherCard } from "@/components/OtherCard";

const EASE = [0.22, 1, 0.36, 1] as const;
const VP   = { once: false, margin: "-80px" } as const;

/* ─────────────────────────────────────────
   Main Section
───────────────────────────────────────── */
export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section
      id="projects"
      className="font-sans px-6 md:px-10 py-16 md:py-20 border-t border-neutral-100 dark:border-neutral-800 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Section header ── */}
        <div className="mb-8 md:mb-10 space-y-2">
          <SectionLabel label="03 — Projects" />
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
            className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight leading-tight"
          >
            Things I&apos;ve built.
          </motion.h2>
        </div>

        {/* ── Top border of list ── */}
        <div className="border-t border-black dark:border-neutral-700">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-150px 0px -60px 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                index={index}
                expanded={expandedId === project.id}
                onToggle={() => handleToggle(project.id)}
              />
            </motion.div>
          ))}
        </div>

        {OTHER_PROJECTS.length > 0 && (
          <div className="mt-12 md:mt-14">
            <SectionLabel label="Other Work" className="mb-6" />

            <div className="border-t border-black dark:border-neutral-700 grid grid-cols-1 sm:grid-cols-2 gap-x-12">
              {OTHER_PROJECTS.map((project, index) => {
                const isRight = index % 2 !== 0;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: isRight ? 48 : -48 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-150px 0px -60px 0px" }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: index * 0.08,
                    }}
                  >
                    <OtherCard project={project} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
