const SKILLS: { category: string; items: string[] }[] = [
  {
    category: "Core",
    items: ["TypeScript", "Next.js", "React.js"],
  },
  {
    category: "UI",
    items: ["Tailwind CSS", "Shadcn", "Radix UI", "MUI"],
  },
  {
    category: "Tools",
    items: ["Docker", "GitHub Actions", "Vercel", "Ubuntu"],
  },
  {
    category: "State / Forms",
    items: ["Zustand", "React Hook Form", "Yup"],
  },
];

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
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
            01 — About
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight">
            A developer who cares about
            <br />
            the details.
          </h2>

          {/* Bio */}
          <div className="space-y-3 text-base md:text-lg text-neutral-500 leading-relaxed max-w-prose">
            <p>
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
            </p>
            <p>
              I thrive in{" "}
              <span className="text-black font-semibold">
                agile environments
              </span>
              , moving fast without cutting corners — focusing on clean
              component architecture, type-safe codebases, and delivering
              high-quality user experiences from first commit to production.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════
            Right — Skills Grid
        ════════════════════════════════ */}
        <div className="space-y-5">

          {/* Section label (hidden on mobile, keeps columns aligned) */}
          <p className="hidden lg:block text-xs font-semibold tracking-widest uppercase text-transparent select-none">
            —
          </p>

          <h3 className="text-xl font-bold text-black tracking-tight">
            Technical Arsenal
          </h3>

          <div className="space-y-4">
            {SKILLS.map(({ category, items }) => (
              <div key={category} className="space-y-2">

                {/* Category label */}
                <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
                  {category}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-black border border-black/20 rounded-sm tracking-wide hover:border-black hover:bg-black hover:text-white transition-all duration-150 cursor-default select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
