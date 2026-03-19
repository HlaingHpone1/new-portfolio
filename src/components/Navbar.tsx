"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-white"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between font-sans">
        {/* ── Logo ── */}
        <Link
          href="/"
          aria-label="Home"
          className="font-mono text-base font-bold tracking-tight text-black select-none hover:opacity-60 transition-opacity duration-500"
        >
          HH.
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm font-medium text-neutral-500 hover:text-black transition-colors duration-500 tracking-wide"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/cv.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-semibold tracking-wide rounded hover:bg-neutral-800 active:scale-95 transition-all duration-500 select-none"
        >
          <Download className="w-3.5 h-3.5" strokeWidth={2.5} />
          Download CV
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-1.5 p-1.5 rounded"
        >
          <span
            className={`block h-0.5 w-5 bg-black transition-all duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-black transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-black transition-all duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-neutral-100 ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 font-sans" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-neutral-600 hover:text-black transition-colors duration-500 tracking-wide"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2 border-t border-neutral-100">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-semibold tracking-wide rounded hover:bg-neutral-800 transition-colors duration-500"
            >
              <Download className="w-3.5 h-3.5" strokeWidth={2.5} />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
