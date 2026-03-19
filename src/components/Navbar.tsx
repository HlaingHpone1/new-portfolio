import { Download } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollableHeader from "@/components/Navbar/ScrollableHeader";
import MobileMenu from "@/components/Navbar/MobileMenu";
import { NAV_LINKS } from "@/components/Navbar/nav-links";
import Link from "next/link";

export default function Navbar() {
  return (
    <ScrollableHeader>
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between font-sans">
        {/* ── Logo ── */}
        <Link
          href="/"
          aria-label="Home"
          className="font-mono text-base font-bold tracking-tight text-black dark:text-white select-none hover:opacity-60 transition-opacity duration-500"
        >
          Hlaing Hpone
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm font-medium text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors duration-500 tracking-wide"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right controls ── */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 transition-all duration-500 select-none"
          >
            <Download className="w-3.5 h-3.5" strokeWidth={2.5} />
            Download CV
          </Link>
        </div>

        {/* ── Mobile: ThemeToggle + Hamburger + Dropdown ── */}
        <MobileMenu />
      </nav>
    </ScrollableHeader>
  );
}
