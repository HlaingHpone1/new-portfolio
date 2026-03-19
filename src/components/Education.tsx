const EDUCATION = [
  {
    degree: "Bachelor's Degree in Computing",
    institution: "University of Greenwich",
    period: "2026",
  },
  {
    degree: "Level 4 & 5 Diploma of Computing with Business Management",
    institution: "Strategy First University",
    period: "2020 – 2023",
  },
] as const;

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 md:px-10 py-20 md:py-28 border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-10">
          04 — Education
        </p>

        {/* ── Entries ── */}
        <div className="space-y-0 divide-y divide-neutral-100">
          {EDUCATION.map(({ degree, institution, period }) => (
            <div
              key={institution}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-5"
            >
              {/* Left */}
              <div className="space-y-0.5">
                <p className="text-base md:text-lg font-black text-black tracking-tight">
                  {degree}
                </p>
                <p className="text-sm text-neutral-500 font-medium">
                  {institution}
                </p>
              </div>

              {/* Right — period */}
              <span className="font-mono text-xs text-neutral-400 font-bold shrink-0 sm:text-right">
                {period}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
