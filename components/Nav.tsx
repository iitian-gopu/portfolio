"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems, site } from "@/data/site";

type Theme = "dark" | "light";

function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode etc. */
    }
  };

  return { theme, toggle };
}

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Nav() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
