const EXPERIENCES = [
  {
    role: "React Developer",
    company: "Ace Plus Solutions",
    period: "April 2024 — Present",
    current: true,
    highlights: [
      {
        title: "Scalable Architecture",
        body: "Developed and maintained highly scalable frontend applications utilising Next.js and TypeScript.",
      },
      {
        title: "Design Systems",
        body: "Built reusable UI components and comprehensive design systems to guarantee UI/UX consistency across multiple platforms.",
      },
      {
        title: "API & Security",
        body: "Integrated complex REST APIs for dynamic data rendering and implemented secure role-based access control using JWT.",
      },
      {
        title: "Performance Optimisation",
        body: "Significantly improved application load times by executing memoization, code splitting, and debouncing techniques.",
      },
      {
        title: "Agile Collaboration",
        body: "Worked closely with backend teams in a fast-paced Agile environment to consistently deliver feature-rich application updates.",
      },
    ],
  },
] as const;

export default function Experience() {
  return (
    <section
      id="experience"
      className="font-sans px-6 md:px-10 py-16 md:py-20 border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <div className="mb-10 md:mb-12 space-y-2">
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
            02 — Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight">
            Where I&apos;ve worked.
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Vertical rail */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp) => (
              <div key={`${exp.company}-${exp.role}`} className="relative pl-10 md:pl-14">

                {/* Dot marker */}
                <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-black border-2 border-white ring-1 ring-black" />

                {/* Entry header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-neutral-500 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-sm border shrink-0 ${
                      exp.current
                        ? "bg-black text-white border-black"
                        : "bg-transparent text-neutral-400 border-neutral-200"
                    }`}
                  >
                    {exp.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                    )}
                    {exp.period}
                  </span>
                </div>

                {/* Highlight bullets */}
                <ul className="space-y-3">
                  {exp.highlights.map((item) => (
                    <li key={item.title} className="flex items-center gap-3 group">
                      {/* Bullet dash */}
                      <span className="shrink-0 w-4 h-px bg-black/30 group-hover:bg-black transition-colors duration-150" />

                      <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                        <span className="font-semibold text-black">
                          {item.title}:{" "}
                        </span>
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

          {/* Timeline end cap */}
          <div className="absolute left-0 bottom-0 -translate-x-1/2 w-2 h-2 rounded-full bg-black/20" />
        </div>

      </div>
    </section>
  );
}
