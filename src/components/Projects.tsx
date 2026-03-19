"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects, otherProjects } from "@/data/projects";

/* ─────────────────────────────────────────
   Featured Row
───────────────────────────────────────── */
function FeaturedRow({
  project,
  index,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ backgroundColor: hovered ? "#000000" : "#ffffff" }}
      transition={{ duration: 0.18, ease: "easeInOut" }}
      className="border-b border-black cursor-default"
    >
      {/* ── Main row ── */}
      <div className="flex items-start justify-between gap-6 px-0 py-6 md:py-7">

        {/* Left — index + title + label */}
        <div className="flex items-baseline gap-5 min-w-0">
          <motion.span
            animate={{ color: hovered ? "#525252" : "#a3a3a3" }}
            transition={{ duration: 0.18 }}
            className="font-mono text-xs shrink-0 tabular-nums"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>

          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-3">
              <motion.h3
                animate={{ color: hovered ? "#ffffff" : "#000000" }}
                transition={{ duration: 0.18 }}
                className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter leading-tight"
              >
                {project.title}
              </motion.h3>

              {project.label && (
                <motion.span
                  animate={{
                    color: hovered ? "#a3a3a3" : "#737373",
                    borderColor: hovered ? "#525252" : "#d4d4d4",
                  }}
                  transition={{ duration: 0.18 }}
                  className="text-[10px] font-mono font-semibold tracking-widest uppercase border px-2 py-0.5 rounded-sm"
                >
                  {project.label}
                </motion.span>
              )}
            </div>

            {/* Tech tags — always visible */}
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
              {project.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  animate={{ color: hovered ? "#737373" : "#737373" }}
                  transition={{ duration: 0.18 }}
                  className="font-mono text-[11px] tracking-wide"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — arrow */}
        <motion.div
          animate={{
            color: hovered ? "#ffffff" : "#000000",
            rotate: hovered ? 0 : -45,
          }}
          transition={{ duration: 0.18 }}
          className="shrink-0 mt-1"
        >
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.75} />
        </motion.div>
      </div>

      {/* ── Description — revealed on hover ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="desc"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-mono text-xs md:text-sm text-neutral-400 leading-relaxed pb-6 pl-10 md:pl-12 max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Other Work Card
───────────────────────────────────────── */
function OtherCard({
  project,
}: {
  project: (typeof otherProjects)[number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ backgroundColor: hovered ? "#000000" : "#ffffff" }}
      transition={{ duration: 0.15 }}
      className="border-b border-black py-4 px-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 space-y-1.5">
          <motion.p
            animate={{ color: hovered ? "#ffffff" : "#000000" }}
            transition={{ duration: 0.15 }}
            className="text-base font-black tracking-tight leading-tight"
          >
            {project.title}
          </motion.p>

          <div className="flex flex-wrap gap-x-2 gap-y-0.5">
            {project.techStack.map((tech) => (
              <motion.span
                key={tech}
                animate={{ color: hovered ? "#737373" : "#a3a3a3" }}
                transition={{ duration: 0.15 }}
                className="font-mono text-[10px] tracking-wide"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ color: hovered ? "#ffffff" : "#000000" }}
          transition={{ duration: 0.15 }}
          className="shrink-0 mt-0.5"
        >
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
            </a>
          ) : (
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Main Section
───────────────────────────────────────── */
export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-10 py-28 md:py-36 border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <div className="mb-12 md:mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
            03 — Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter leading-tight">
            Things I&apos;ve built.
          </h2>
        </div>

        {/* ── Top border of list ── */}
        <div className="border-t border-black">
          {featuredProjects.map((project, index) => (
            <FeaturedRow key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ── Other Work ── */}
        <div className="mt-20 md:mt-24">
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6">
            Other Work
          </p>

          <div className="border-t border-black grid grid-cols-1 sm:grid-cols-2 gap-x-12">
            {otherProjects.map((project) => (
              <OtherCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
