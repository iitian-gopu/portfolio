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

  return (
    <div className="nav-wrap">
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="#top" aria-label={`${site.name} — home`}>
          <span className="brand-mark">{site.initials}</span>
          <span>{site.firstName}</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={active === item.href ? "active" : ""}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {site.resumeUrl && (
            <a className="btn btn-primary nav-cta" href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          )}

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu" role="menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} role="menuitem">
              {item.label}
            </a>
          ))}
          {site.resumeUrl && (
            <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" role="menuitem">
              Resume ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}
