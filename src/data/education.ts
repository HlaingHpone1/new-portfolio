export const EDUCATION = [
  {
    degree:      "Bachelor's Degree in Computing",
    institution: "University of Greenwich",
    period:      "2026",
  },
  {
    degree:      "Level 4 & 5 Diploma of Computing with Business Management",
    institution: "Strategy First University",
    period:      "2020 – 2023",
  },
] as const;

export type Education = typeof EDUCATION;
