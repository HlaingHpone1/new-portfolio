import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { Project } from "@/data/projects";
import { useTheme } from "@/context/ThemeContext";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({
  project,
  index,
  expanded,
  onToggle,
}: {
  project: Project;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const isOpen = hovered || expanded;

  const defaultBg = isDark ? "#0a0a0a" : "#ffffff";
  const activeBg = isDark ? "#f5f5f5" : "#000000";
  const indexColor = isOpen
    ? isDark
      ? "#737373"
      : "#e5e5e5"
    : isDark
      ? "#404040"
      : "#a3a3a3";
  const titleColor = isOpen
    ? isDark
      ? "#000000"
      : "#ffffff"
    : isDark
      ? "#ffffff"
      : "#000000";
  const labelColor = isOpen
    ? isDark
      ? "#404040"
      : "#e5e5e5"
    : isDark
      ? "#737373"
      : "#737373";
  const labelBorder = isOpen
    ? isDark
      ? "#525252"
      : "#737373"
    : isDark
      ? "#2a2a2a"
      : "#d4d4d4";
  const techColor = isOpen
    ? isDark
      ? "#525252"
      : "#e5e5e5"
    : isDark
      ? "#525252"
      : "#737373";
  const arrowColor = isOpen
    ? isDark
      ? "#000000"
      : "#ffffff"
    : isDark
      ? "#ffffff"
      : "#000000";
  const descColor = isOpen
    ? isDark
      ? "#525252"
      : "#e5e5e5"
    : isDark
      ? "#525252"
      : "#737373";

  const hoverT = { duration: 0.45, ease: EASE };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ backgroundColor: isOpen ? activeBg : defaultBg }}
      transition={hoverT}
      className="border-b border-black dark:border-neutral-800 font-sans px-6 md:px-8"
    >
      <div
        className="flex items-start justify-between gap-6 py-5 md:py-6 md:cursor-default cursor-pointer"
        onClick={onToggle}
      >
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
            <div className="pb-6 pl-10 md:pl-12 max-w-2xl">
              {project.bullets && project.bullets.length > 0 ? (
                <ul className="space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      animate={{ color: descColor }}
                      transition={hoverT}
                      className="flex items-start gap-2.5 text-sm md:text-base font-sans leading-relaxed"
                    >
                      <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-current opacity-50" />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <motion.p
                  animate={{ color: descColor }}
                  transition={hoverT}
                  className="text-sm md:text-base font-sans leading-relaxed"
                >
                  {project.description}
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
