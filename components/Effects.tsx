"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Global client-side effects: background orbs, cursor spotlight,
 * scroll progress bar, reveal-on-scroll and the back-to-top button.
 *
 * Scroll/pointer handlers write straight to the affected elements (never to
 * <html>) and are rAF-throttled, so scrolling doesn't trigger a full-document
 * style recalculation on every event.
 */
export default function Effects() {
  const [showTop, setShowTop] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const fine = window.matchMedia("(pointer: fine)").matches;
    let scrollTicking = false;
    let moveTicking = false;
    let mx = -1000;
    let my = -1000;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (moveTicking) return;
      moveTicking = true;
      requestAnimationFrame(() => {
        moveTicking = false;
        spotRef.current?.style.setProperty("--mx", `${mx}px`);
        spotRef.current?.style.setProperty("--my", `${my}px`);
      });
    };

    const onScroll = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        scrollTicking = false;
        const max = root.scrollHeight - window.innerHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
        setShowTop(window.scrollY > 600);
      });
    };

    if (fine) window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="progress" ref={progressRef} aria-hidden="true" />
      <div className="bg-canvas" aria-hidden="true">
        <div className="bg-orb one" />
        <div className="bg-orb two" />
      </div>
      <div className="spotlight" ref={spotRef} aria-hidden="true" />
      <button
        type="button"
        className={`to-top${showTop ? " show" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
