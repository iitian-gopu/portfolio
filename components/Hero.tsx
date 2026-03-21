"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import HeroMedia from "./HeroMedia";
import { site, stats } from "@/data/site";

function RoleRotator({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="rotator" aria-live="polite">
      {words.map((word, i) => (
        <span key={word} className={i === index ? "on" : ""} aria-hidden={i !== index}>
          {word}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [first, ...rest] = site.name.split(" ");

  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-pill reveal is-visible">
            <span className="dot" />
