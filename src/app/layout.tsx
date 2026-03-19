import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black selection:bg-black selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
