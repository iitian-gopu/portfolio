"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Global client-side effects: background orbs, cursor spotlight,
 * scroll progress bar, reveal-on-scroll and the back-to-top button.
 */
export default function Effects() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const onMove = (e: PointerEvent) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
    };

    const onScroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--p", String(max > 0 ? window.scrollY / max : 0));
