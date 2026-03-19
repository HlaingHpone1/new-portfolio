"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const SKILLS: { category: string; items: string[] }[] = [
  { category: "Core", items: ["TypeScript", "Next.js", "React.js"] },
  { category: "UI", items: ["Tailwind CSS", "Shadcn", "Radix UI", "MUI"] },
  {
    category: "Tools",
    items: ["Docker", "GitHub Actions", "Vercel", "Ubuntu"],
  },
  { category: "State / Forms", items: ["Zustand", "React Hook Form", "Yup"] },
];

/* ── Shared viewport config ── */
const VP = { once: false, margin: "-80px" } as const;

/* ── Reusable animation props ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VP,
  transition: { duration: 0.65, ease: EASE, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: VP,
  transition: { duration: 0.55, ease: EASE, delay },
});

/* ── Container / stagger for skill categories ── */
const categoryContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const categoryItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/* ── Tag stagger ── */
const tagContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0 } },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

export default function About() {
  return (
    <section
      id="about"
      className="font-sans px-6 md:px-10 py-16 md:py-20 border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
        {/* ════════════════════════════════
            Left — Section label + Bio
        ════════════════════════════════ */}
        <div className="space-y-5">
          {/* Section label */}
          <motion.p
            {...fadeIn(0)}
            className="text-xs font-semibold tracking-widest uppercase text-neutral-400"
          >
            01 — About
          </motion.p>

          {/* Heading */}
          <motion.h2
            {...fadeUp(0.08)}
            className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight"
          >
            A developer who cares about
            <br />
            the details.
          </motion.h2>

          {/* Bio paragraphs */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12, delayChildren: 0.2 },
              },
            }}
            className="space-y-3 text-base md:text-lg text-neutral-500 leading-relaxed max-w-prose"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: EASE },
                },
              }}
            >
              With{" "}
              <span className="text-black font-semibold">
                1+ year of hands-on experience
              </span>{" "}
              specialising in{" "}
              <span className="text-black font-semibold">
                React.js and Next.js
              </span>
              , I build performant, accessible interfaces that users actually
              enjoy.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: EASE },
                },
              }}
            >
              I thrive in{" "}
              <span className="text-black font-semibold">
                agile environments
              </span>
              , moving fast without cutting corners — focusing on clean
              component architecture, type-safe codebases, and delivering
              high-quality user experiences from first commit to production.
            </motion.p>
          </motion.div>
        </div>

        {/* ════════════════════════════════
            Right — Skills Grid
        ════════════════════════════════ */}
        <div className="space-y-5">
          {/* Spacer label (keeps columns aligned) */}
          <p className="hidden lg:block text-xs font-semibold tracking-widest uppercase text-transparent select-none">
            —
          </p>

          <motion.h3
            {...fadeUp(0.05)}
            className="text-xl font-bold text-black tracking-tight"
          >
            Technical Arsenal
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={categoryContainer}
            className="space-y-4"
          >
            {SKILLS.map(({ category, items }) => (
              <motion.div
                key={category}
                variants={categoryItem}
                className="space-y-2"
              >
                {/* Category label */}
                <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
                  {category}
                </p>

                {/* Tags */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={VP}
                  variants={tagContainer}
                  className="flex flex-wrap gap-2"
                >
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={tagItem}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-black border border-black/20 rounded-sm tracking-wide hover:border-black hover:bg-black hover:text-white transition-all duration-500 cursor-default select-none"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
