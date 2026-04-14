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
            <span>
              Currently <strong>Software Engineer @ Goldman Sachs</strong> &middot; IIT (BHU) &rsquo;23
            </span>
          </div>

          <h1 className="reveal is-visible">
            {first} <span className="muted">{rest.join(" ")}</span>
          </h1>

          <div className="hero-role reveal is-visible">
            <span>I&rsquo;m a</span>
            <RoleRotator words={site.roles} />
          </div>

          <p className="hero-tagline reveal is-visible">{site.tagline}</p>


          <div className="hero-actions reveal is-visible">
            <a className="btn btn-primary" href="#work">
              See my work <ArrowUpRight size={16} />
            </a>
            <a className="btn" href="#contact">
              Get in touch
            </a>
            <div className="hero-socials">
              <a className="btn btn-icon" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a className="btn btn-icon" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a className="btn btn-icon" href={`mailto:${site.email}`} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {(site.photo || site.heroVideo) && (
          <div className="hero-media-col reveal is-visible">
            <HeroMedia />
          </div>
        )}
      </div>

      <div className="hero-meta reveal is-visible" aria-label="Highlights">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
