export type Skill = {
  category: string;
  items: readonly string[];
};

export const SKILLS: readonly Skill[] = [
  { category: "Core",           items: ["TypeScript", "Next.js", "React.js"] },
  { category: "UI",             items: ["Tailwind CSS", "Shadcn", "Radix UI", "MUI"] },
  { category: "Tools",          items: ["Docker", "GitHub Actions", "Vercel", "Ubuntu"] },
  { category: "State / Forms",  items: ["Zustand", "React Hook Form", "Yup"] },
];
