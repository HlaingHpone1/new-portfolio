"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = {
  project: Project;
};

export function OtherCard({ project }: Props) {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const defaultBg   = isDark ? "#111111" : "#ffffff";
  const activeBg    = isDark ? "#f5f5f5" : "#000000";
  const titleColor  = hovered ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#ffffff" : "#000000");
  const labelColor  = hovered ? (isDark ? "#404040" : "#e5e5e5") : (isDark ? "#737373" : "#737373");
  const labelBorder = hovered ? (isDark ? "#525252" : "#737373") : (isDark ? "#2a2a2a" : "#e5e5e5");
  const techColor   = hovered ? (isDark ? "#525252" : "#e5e5e5") : (isDark ? "#525252" : "#737373");
  const btnBg       = hovered ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#ffffff" : "#000000");
  const btnText     = hovered ? (isDark ? "#ffffff" : "#000000") : (isDark ? "#000000" : "#ffffff");
  const btnBorder   = hovered ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#ffffff" : "#000000");

  const hoverT = { duration: 0.42, ease: EASE };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ backgroundColor: hovered ? activeBg : defaultBg }}
      transition={hoverT}
      className="border-b border-black dark:border-neutral-800 px-6 md:px-8 py-5 flex flex-col gap-4 font-sans"
    >
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
              animate={{ color: labelColor, borderColor: labelBorder }}
              transition={hoverT}
              className="text-[9px] font-semibold tracking-widest uppercase border px-1.5 py-0.5 rounded-sm shrink-0"
            >
              {project.label}
            </motion.span>
          )}
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-0.5">
          {project.techStack.map((tech: string) => (
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

      {project.url && (
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="self-start"
        >
          <motion.span
            animate={{ color: btnText, backgroundColor: btnBg, borderColor: btnBorder }}
            transition={hoverT}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide rounded-sm border select-none"
          >
            <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
            View Project
          </motion.span>
        </Link>
      )}
    </motion.div>
  );
}
