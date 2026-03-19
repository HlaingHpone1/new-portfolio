export type Project = {
  id: string;
  title: string;
  label?: string;
  techStack: readonly string[];
  description: string;
  bullets?: readonly string[];
  url?: string;
};

export const featuredProjects: Project[] = [
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
  {
    id: "quotation-management",
    title: "Quotation Management",
    label: "Personal",
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

export const otherProjects: Project[] = [];
