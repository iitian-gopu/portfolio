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
          <article
            key={project.title}
            className={`card project reveal${project.featured ? " featured" : ""}${project.image ? " has-image" : ""}`}
            style={{ "--art": project.art } as CSSProperties}
          >
            <div className="project-art">
              {project.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="project-image" src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
              )}
              <span className="art-index">{String(i + 1).padStart(2, "0")}</span>
