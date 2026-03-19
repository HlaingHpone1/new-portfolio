export type ExperienceProject = {
  id: string;
  title: string;
  techStack: readonly string[];
  description: string;
  bullets?: readonly string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  current: boolean;
  highlights: readonly { title: string; body: string }[];
  projects?: readonly ExperienceProject[];
};

export const EXPERIENCES: readonly Experience[] = [
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
    projects: [
      {
        id: "hr-master",
        title: "HR Master",
        techStack: ["React", "TypeScript", "Zustand", "MUI", "Formik", "REST APIs"],
        description: "",
        bullets: [
          "Architected a high-performance HRMS handling 1,000+ employee records using Zustand for global state management and MUI for a consistent design language.",
          "Reduced re-render cycles by 40% in complex data tables by implementing React.memo and custom hooks for debounced search.",
          "Streamlined payroll and leave workflows by integrating complex CRUD operations with Formik and Yup for robust client-side validation.",
        ],
      },
      {
        id: "ghg-tracking",
        title: "GHG Emission Tracking Platform",
        techStack: ["Next.js", "TypeScript", "Shadcn", "Zod", "WebSockets"],
        description: "",
        bullets: [
          "Engineered a real-time environmental data dashboard utilizing Next.js and WebSockets for live emission monitoring and status updates.",
          "Developed a dynamic drag-and-drop workflow builder using @dnd-kit, allowing users to customize reporting pipelines intuitively.",
          "Enforced strict type safety and data integrity across the platform by implementing Zod schemas for API response validation and form handling.",
        ],
      },
      {
        id: "dealer-claim",
        title: "Dealer Claim Management",
        techStack: ["Next.js", "TypeScript", "Shadcn", "Zod"],
        description: "",
        bullets: [
          "Architected a centralized warranty claim portal utilizing WebSockets for real-time status updates and a robust message queue system to manage high-volume claim processing, resulting in a 25% reduction in turnaround time.",
          "Optimized historical data retrieval by implementing Server-side Rendering (SSR) and efficient caching strategies in Next.js.",
          "Designed a responsive, accessible interface using Shadcn UI, ensuring a seamless experience for dealers across mobile and desktop devices.",
        ],
      },
      {
        id: "user-service",
        title: "User Service",
        techStack: ["Next.js", "TypeScript", "Zustand", "Shadcn", "Formik", "REST APIs"],
        description: "",
        bullets: [
          "Developed a modular Authentication Service implementing JWT-based security and Role-Based Access Control (RBAC) for granular user permissions.",
          "Created reusable authentication logic and protected route wrappers to secure sensitive administrative modules.",
          "Integrated Zustand persisted state to manage user sessions and preferences across the entire micro-frontend ecosystem.",
        ],
      },
      {
        id: "ticket-management",
        title: "Ticket Management",
        techStack: ["Next.js", "TypeScript", "MUI", "Formik", "REST APIs"],
        description: "",
        bullets: [
          "Led the development of a full-lifecycle ticketing system featuring multi-format attachment support and automated assignment logic.",
          "Improved form performance and user feedback loops by utilizing Formik's asynchronous submission handling and MUI snackbar notifications.",
          "Collaborated with backend teams to design optimized REST endpoints for tracking ticket history and audit logs.",
        ],
      },
      {
        id: "ghg-maintenance",
        title: "GHG Platform (Maintenance)",
        techStack: ["Next.js", "TypeScript", "MUI", "React Hook Form"],
        description:
          "Maintained and refactored an existing environmental tracking application.",
      },
    ],
  },
] as const;

export type Experiences = typeof EXPERIENCES;
