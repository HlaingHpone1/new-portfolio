export type Project = {
  id: string;
  title: string;
  label?: string; // e.g. "Freelance" | "Personal"
  techStack: string[];
  description: string;
  url?: string;
};

export const featuredProjects: Project[] = [
  {
    id: "hr-master",
    title: "HR Master",
    techStack: ["React", "TypeScript", "Zustand", "MUI", "Formik", "REST APIs"],
    description:
      "Scalable HR system handling employee CRUD, leave workflows, payroll, and attendance. Optimised with memoisation and pagination.",
  },
  {
    id: "ghg-tracking",
    title: "GHG Emission Tracking Platform",
    techStack: ["Next.js", "TypeScript", "Shadcn", "Zod", "WebSockets"],
    description:
      "Comprehensive tracking dashboard with interactive drag-and-drop workflows using Dnd Kit and robust data integrity via Zod.",
  },
  {
    id: "dealer-claim",
    title: "Dealer Claim Management",
    techStack: ["Next.js", "TypeScript", "Shadcn", "Zod"],
    description:
      "Centralised warranty claim portal with automated real-time status notifications and optimised historical data retrieval.",
  },
  {
    id: "clinic-management",
    title: "Clinic Management",
    label: "Freelance",
    techStack: ["React", "TypeScript", "MUI", "Formik", "REST APIs", "Dnd Kit"],
    description:
      "Custom administration platform for medical records with complex form handling, validation, and drag-and-drop scheduling.",
  },
  {
    id: "learning-management",
    title: "Learning Management",
    label: "Personal",
    techStack: [
      "React",
      "TypeScript",
      "Shadcn",
      "Zod",
      "REST APIs",
      "WebSockets",
    ],
    description:
      "Interactive educational platform using WebSockets for real-time messaging and instant teacher–student communication.",
  },
];

export const otherProjects: Project[] = [
  {
    id: "user-service",
    title: "User Service",
    techStack: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Shadcn",
      "Formik",
      "REST APIs",
    ],
    description:
      "Modular user management with registration, login, role assignment, and access control.",
  },
  {
    id: "ticket-management",
    title: "Ticket Management",
    techStack: ["Next.js", "TypeScript", "MUI", "Formik", "REST APIs"],
    description:
      "Full ticket lifecycle system — create, assign, track, and close with attachment support.",
  },
  {
    id: "ghg-maintenance",
    title: "GHG Platform (Maintenance)",
    techStack: ["Next.js", "TypeScript", "MUI", "React Hook Form"],
    description:
      "Maintained and refactored an existing environmental tracking application.",
  },
  {
    id: "quotation-management",
    title: "Quotation Management",
    techStack: ["React", "TypeScript", "Shadcn", "Zod", "REST APIs"],
    description:
      "Digital quotation system for proposal creation and pricing calculations with strict financial validation.",
  },
  {
    id: "perfume-ecommerce",
    title: "Perfume E-Commerce",
    label: "Personal",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Zustand"],
    description:
      "Modern, minimalist e-commerce platform for boutique perfumes featuring seamless checkout, global cart state via Zustand, and dynamic product routing.",
    // url: "https://your-perfume-link.com",
  },
  {
    id: "shadcn-form-builder",
    title: "Shadcn Form Builder",
    label: "Personal",
    techStack: [
      "React",
      "TypeScript",
      "Shadcn",
      "React Hook Form",
      "Zod",
      "Dnd Kit",
    ],
    description:
      "Dynamic drag-and-drop form builder that auto-generates accessible React forms with strict Zod validation schemas from visual user inputs.",
    url: "https://form.hlainghpone.com",
  },
];
