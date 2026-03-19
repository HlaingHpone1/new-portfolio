"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { featuredProjects, otherProjects } from "@/data/projects";

const EASE = [0.22, 1, 0.36, 1] as const;
const VP = { once: false, margin: "-80px" } as const;

/* ─────────────────────────────────────────
   Featured Row
───────────────────────────────────────── */
function FeaturedRow({
  project,
  index,
  expanded,
  onToggle,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  /* ── isOpen drives all color + visibility ── */
  const isOpen = hovered || expanded;

  /* ── Hover transition shared config ── */
  const hoverT = { duration: 0.45, ease: EASE };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ backgroundColor: isOpen ? "#000000" : "#ffffff" }}
      transition={hoverT}
      className="border-b border-black font-sans"
    >
      {/* ── Main row — full row is tappable on mobile ── */}
      <div
        className="flex items-start justify-between gap-6 px-0 py-5 md:py-6 md:cursor-default cursor-pointer"
        onClick={onToggle}
      >
        {/* Left — index + title + label */}
        <div className="flex items-baseline gap-5 min-w-0">
          <motion.span
            animate={{ color: isOpen ? "#e5e5e5" : "#a3a3a3" }}
            transition={hoverT}
            className="font-mono text-xs shrink-0 tabular-nums"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>

          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-3">
              <motion.h3
                animate={{ color: isOpen ? "#ffffff" : "#000000" }}
                transition={hoverT}
                className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight"
              >
                {project.title}
              </motion.h3>

              {project.label && (
                <motion.span
                  animate={{
                    color: isOpen ? "#e5e5e5" : "#737373",
                    borderColor: isOpen ? "#737373" : "#d4d4d4",
                  }}
                  transition={hoverT}
                  className="text-[10px] font-mono font-semibold tracking-widest uppercase border px-2 py-0.5 rounded-sm"
                >
                  {project.label}
                </motion.span>
              )}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
              {project.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  animate={{ color: isOpen ? "#e5e5e5" : "#737373" }}
                  transition={hoverT}
                  className="text-sm tracking-wide"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — desktop arrow / mobile toggle */}
        {/* Desktop: rotating ArrowUpRight (hover only) */}
        <motion.div
          animate={{
            color: isOpen ? "#ffffff" : "#000000",
            rotate: isOpen ? 0 : -45,
          }}
          transition={hoverT}
          className="hidden md:block shrink-0 mt-1"
        >
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.75} />
        </motion.div>

        {/* Mobile: +/− hint icon */}
        <motion.div
          animate={{ color: isOpen ? "#ffffff" : "#000000" }}
          transition={hoverT}
          className="md:hidden shrink-0 mt-1"
        >
          {expanded ? (
            <Minus className="w-5 h-5" strokeWidth={1.75} />
          ) : (
            <Plus className="w-5 h-5" strokeWidth={1.75} />
          )}
        </motion.div>
      </div>

      {/* ── Description — hover on desktop, tap-toggle on mobile ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="desc"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: EASE }}
            className="overflow-hidden"
          >
            <motion.p
              animate={{ color: isOpen ? "#e5e5e5" : "#737373" }}
              transition={hoverT}
              className="text-sm md:text-base font-sans leading-relaxed pb-6 pl-10 md:pl-12 max-w-2xl"
            >
              {project.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Other Work Card
───────────────────────────────────────── */
function OtherCard({ project }: { project: (typeof otherProjects)[number] }) {
  const [hovered, setHovered] = useState(false);

  /* ── Hover transition shared config ── */
  const hoverT = { duration: 0.42, ease: EASE };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ backgroundColor: hovered ? "#000000" : "#ffffff" }}
      transition={hoverT}
      className="border-b border-black px-5 py-5 flex flex-col gap-4 font-sans"
    >
      {/* ── Title + Tech ── */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <motion.p
            animate={{ color: hovered ? "#ffffff" : "#000000" }}
            transition={hoverT}
            className="font-sans text-base font-bold tracking-tight leading-tight"
          >
            {project.title}
          </motion.p>

          {project.label && (
            <motion.span
              animate={{
                color: hovered ? "#e5e5e5" : "#737373",
                borderColor: hovered ? "#737373" : "#e5e5e5",
              }}
              transition={hoverT}
              className="text-[9px]  font-semibold tracking-widest uppercase border px-1.5 py-0.5 rounded-sm shrink-0"
            >
              {project.label}
            </motion.span>
          )}
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-0.5">
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              animate={{ color: hovered ? "#e5e5e5" : "#737373" }}
              transition={hoverT}
              className=" text-xs  tracking-wide"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* ── View Project button ── */}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="self-start"
        >
          <motion.span
            animate={{
              color: hovered ? "#000000" : "#ffffff",
              backgroundColor: hovered ? "#ffffff" : "#000000",
              borderColor: hovered ? "#ffffff" : "#000000",
            }}
            transition={hoverT}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide rounded-sm border select-none"
          >
            <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
            View Project
          </motion.span>
        </a>
      )}
    </motion.div>
  );
}

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
      className="font-sans px-6 md:px-10 py-16 md:py-20 border-t border-neutral-100 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Section header ── */}
        <div className="mb-8 md:mb-10 space-y-2">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VP}
            transition={{ duration: 0.55, ease: EASE }}
            className="text-xs font-semibold tracking-widest uppercase text-neutral-400"
          >
            03 — Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
            className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight"
          >
            Things I&apos;ve built.
          </motion.h2>
        </div>

        {/* ── Top border of list ── */}
        <div className="border-t border-black">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-150px 0px -60px 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: index * 0.1 }}
            >
              <FeaturedRow
                project={project}
                index={index}
                expanded={expandedId === project.id}
                onToggle={() => handleToggle(project.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Other Work ── */}
        <div className="mt-12 md:mt-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VP}
            transition={{ duration: 0.55, ease: EASE }}
            className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6"
          >
            Other Work
          </motion.p>

          <div className="border-t border-black grid grid-cols-1 sm:grid-cols-2 gap-x-12">
            {otherProjects.map((project, index) => {
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
      </div>
    </section>
  );
}
