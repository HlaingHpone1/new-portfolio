"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { featuredProjects, otherProjects } from "@/data/projects";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  /* ── isOpen drives all color + visibility ── */
  const isOpen = hovered || expanded;

  /* ── Theme-aware colors ── */
  const defaultBg   = isDark ? "#0a0a0a" : "#ffffff";
  const activeBg    = isDark ? "#f5f5f5" : "#000000";
  const indexColor  = isOpen ? (isDark ? "#737373" : "#e5e5e5") : (isDark ? "#404040" : "#a3a3a3");
  const titleColor  = isOpen ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#ffffff" : "#000000");
  const labelColor  = isOpen ? (isDark ? "#404040" : "#e5e5e5") : (isDark ? "#737373" : "#737373");
  const labelBorder = isOpen ? (isDark ? "#525252" : "#737373") : (isDark ? "#2a2a2a" : "#d4d4d4");
  const techColor   = isOpen ? (isDark ? "#525252" : "#e5e5e5") : (isDark ? "#525252" : "#737373");
  const arrowColor  = isOpen ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#ffffff" : "#000000");
  const descColor   = isOpen ? (isDark ? "#525252" : "#e5e5e5") : (isDark ? "#525252" : "#737373");

  /* ── Hover transition shared config ── */
  const hoverT = { duration: 0.45, ease: EASE };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ backgroundColor: isOpen ? activeBg : defaultBg }}
      transition={hoverT}
      className="border-b border-black dark:border-neutral-800 font-sans"
    >
      {/* ── Main row — full row is tappable on mobile ── */}
      <div
        className="flex items-start justify-between gap-6 px-0 py-5 md:py-6 md:cursor-default cursor-pointer"
        onClick={onToggle}
      >
        {/* Left — index + title + label */}
        <div className="flex items-baseline gap-5 min-w-0">
          <motion.span
            animate={{ color: indexColor }}
            transition={hoverT}
            className="font-mono text-xs shrink-0 tabular-nums"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>

          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-3">
              <motion.h3
                animate={{ color: titleColor }}
                transition={hoverT}
                className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight"
              >
                {project.title}
              </motion.h3>

              {project.label && (
                <motion.span
                  animate={{
                    color: labelColor,
                    borderColor: labelBorder,
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
                  animate={{ color: techColor }}
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
            color: arrowColor,
            rotate: isOpen ? 0 : -45,
          }}
          transition={hoverT}
          className="hidden md:block shrink-0 mt-1"
        >
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.75} />
        </motion.div>

        {/* Mobile: +/− hint icon */}
        <motion.div
          animate={{ color: arrowColor }}
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
              animate={{ color: descColor }}
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  /* ── Theme-aware colors ── */
  const defaultBg  = isDark ? "#111111" : "#ffffff";
  const activeBg   = isDark ? "#f5f5f5" : "#000000";
  const titleColor = hovered ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#ffffff" : "#000000");
  const labelColor = hovered ? (isDark ? "#404040" : "#e5e5e5") : (isDark ? "#737373" : "#737373");
  const labelBorder= hovered ? (isDark ? "#525252" : "#737373") : (isDark ? "#2a2a2a" : "#e5e5e5");
  const techColor  = hovered ? (isDark ? "#525252" : "#e5e5e5") : (isDark ? "#525252" : "#737373");
  const btnBg      = hovered ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#ffffff" : "#000000");
  const btnText    = hovered ? (isDark ? "#ffffff" : "#000000") : (isDark ? "#000000" : "#ffffff");
  const btnBorder  = hovered ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#ffffff" : "#000000");

  /* ── Hover transition shared config ── */
  const hoverT = { duration: 0.42, ease: EASE };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ backgroundColor: hovered ? activeBg : defaultBg }}
      transition={hoverT}
      className="border-b border-black dark:border-neutral-800 px-5 py-5 flex flex-col gap-4 font-sans"
    >
      {/* ── Title + Tech ── */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <motion.p
            animate={{ color: titleColor }}
            transition={hoverT}
            className="font-sans text-base font-bold tracking-tight leading-tight"
          >
            {project.title}
          </motion.p>

          {project.label && (
            <motion.span
              animate={{
                color: labelColor,
                borderColor: labelBorder,
              }}
              transition={hoverT}
              className="text-[9px] font-semibold tracking-widest uppercase border px-1.5 py-0.5 rounded-sm shrink-0"
            >
              {project.label}
            </motion.span>
          )}
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-0.5">
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              animate={{ color: techColor }}
              transition={hoverT}
              className="text-xs tracking-wide"
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
              color: btnText,
              backgroundColor: btnBg,
              borderColor: btnBorder,
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
      className="font-sans px-6 md:px-10 py-16 md:py-20 border-t border-neutral-100 dark:border-neutral-800 overflow-x-hidden"
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
            className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight leading-tight"
          >
            Things I&apos;ve built.
          </motion.h2>
        </div>

        {/* ── Top border of list ── */}
        <div className="border-t border-black dark:border-neutral-700">
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

          <div className="border-t border-black dark:border-neutral-700 grid grid-cols-1 sm:grid-cols-2 gap-x-12">
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
