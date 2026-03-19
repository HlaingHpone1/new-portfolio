export const EXPERIENCES = [
  {
    role:    "React Developer",
    company: "Ace Plus Solutions",
    period:  "April 2024 — Present",
    current: true,
    highlights: [
      {
        title: "Scalable Architecture",
        body:  "Developed and maintained highly scalable frontend applications utilising Next.js and TypeScript.",
      },
      {
        title: "Design Systems",
        body:  "Built reusable UI components and comprehensive design systems to guarantee UI/UX consistency across multiple platforms.",
      },
      {
        title: "API & Security",
        body:  "Integrated complex REST APIs for dynamic data rendering and implemented secure role-based access control using JWT.",
      },
      {
        title: "Performance Optimisation",
        body:  "Significantly improved application load times by executing memoization, code splitting, and debouncing techniques.",
      },
      {
        title: "Agile Collaboration",
        body:  "Worked closely with backend teams in a fast-paced Agile environment to consistently deliver feature-rich application updates.",
      },
    ],
  },
] as const;

export type Experiences = typeof EXPERIENCES;
