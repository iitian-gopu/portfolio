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
              {!project.image && <span className="art-title">{project.title}</span>}
              {project.demoVideo && (
                <button type="button" className="art-play" onClick={() => setActive(project)} aria-label={`Watch ${project.title} demo`}>
                  <Play size={22} fill="currentColor" />
                </button>
              )}
            </div>

            <div className="project-body">
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.featured && (
                <ul>
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              <div className="project-stack">
                {project.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.demoVideo && (
                  <button type="button" className="btn btn-primary" onClick={() => setActive(project)}>
                    <Play size={14} fill="currentColor" /> Watch demo
                  </button>
                )}
                {project.liveUrl && (
                  <a className={`btn${project.demoVideo ? "" : " btn-primary"}`} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live <ArrowUpRight size={15} />
