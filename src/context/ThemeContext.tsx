"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

interface ThemeCtx {
  theme: Theme;
  toggle: (btn?: HTMLButtonElement | null) => void;
}

const Ctx = createContext<ThemeCtx>({ theme: "light", toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  /* ── Read from localStorage or system preference on mount ── */
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  /* ── Sync class + localStorage whenever theme changes ── */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* ── Toggle with View Transition circular reveal ── */
  function toggle(btn?: HTMLButtonElement | null) {
    const next: Theme = theme === "light" ? "dark" : "light";

    if (btn) {
      const { left, top, width, height } = btn.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--vt-x",
        `${left + width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--vt-y",
        `${top + height / 2}px`
      );
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const vt = (document as any).startViewTransition;
    if (vt) {
      vt.call(document, () => {
        flushSync(() => setTheme(next));
      });
    } else {
      setTheme(next);
    }
  }

  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
