"use client";

import { useState, type CSSProperties } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Github } from "./Icons";
import VideoModal from "./VideoModal";
import { projects, site, type Project } from "@/data/site";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="section container" id="work">
      <div className="section-head reveal">
        <span className="eyebrow">Selected work</span>
        <h2>Things I&rsquo;ve built.</h2>
        <p>
          Side projects where I rebuild products I admire from scratch — the fastest way I know to
          learn how real systems are put together.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
