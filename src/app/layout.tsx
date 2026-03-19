import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Hlaing Hpone — Frontend Developer",
  description:
    "Next.js & TypeScript Frontend Developer based in Yangon, Myanmar. Building scalable, responsive web applications with modern UI frameworks.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Yangon",
    "Myanmar",
    "Hlaing Hpone",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased bg-white text-black selection:bg-black selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
