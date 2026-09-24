"use client";

import { useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  Bot,
  Briefcase,
  ChartCandlestick,
  ChevronDown,
  MessageCircle,
  MessagesSquare,
  PenTool,
  Play,
  Rocket,
} from "lucide-react";
import { Github } from "./Icons";
import VideoModal from "./VideoModal";
import { projects, site, type Project } from "@/data/site";

const ICONS = {
  bot: Bot,
  chart: ChartCandlestick,
  pen: PenTool,
  rocket: Rocket,
  message: MessageCircle,
  threads: MessagesSquare,
  briefcase: Briefcase,
} as const;

/** Card artwork: gradient + large icon + a mini architecture pipeline. */
function ProjectArt({ project, index, onPlay }: { project: Project; index: number; onPlay: () => void }) {
  const Icon = project.icon ? ICONS[project.icon] : null;
  return (
    <div className="project-art">
      {project.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="project-image" src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
      )}
      <span className="art-index">{String(index + 1).padStart(2, "0")}</span>
      {Icon && <Icon className="art-icon" strokeWidth={1.4} aria-hidden="true" />}
      {project.demoVideo && (
        <button type="button" className="art-play" onClick={onPlay} aria-label={`Watch ${project.title} demo`}>
          <Play size={22} fill="currentColor" />
        </button>
      )}
    </div>
  );
}

function ProjectLinks({ project, onPlay }: { project: Project; onPlay: () => void }) {
  return (
    <div className="project-links">
      {project.demoVideo && (
        <button type="button" className="btn btn-primary" onClick={onPlay}>
          <Play size={14} fill="currentColor" /> Watch demo
        </button>
      )}
      {project.liveUrl && (
        <a className={`btn${project.demoVideo ? "" : " btn-primary"}`} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          Live <ArrowUpRight size={15} />
        </a>
      )}
      {project.codeUrl && (
        <a className="btn" href={project.codeUrl} target="_blank" rel="noopener noreferrer">
          <Github size={15} /> Source
        </a>
      )}
    </div>
  );
}

const COLLAPSED_HIGHLIGHTS = 2;
const COLLAPSED_CHIPS = 6;

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  const toggle = (title: string) => setOpen((o) => ({ ...o, [title]: !o[title] }));

  return (
    <section className="section container" id="work">
      <div className="section-head reveal">
        <span className="eyebrow">Selected work</span>
        <h2>Things I&rsquo;ve built.</h2>
        <p>
          Two platforms I built from the ground up — a multi-agent AI workspace and a systematic
          trading stack — plus the products I rebuilt from scratch to learn how they really work.
        </p>
      </div>

      <div className="projects-featured">
        {featured.map((project, i) => (
          <article
            key={project.title}
            className={`card project featured reveal${project.image ? " has-image" : ""}`}
            style={{ "--art": project.art } as CSSProperties}
          >
            <ProjectArt project={project} index={i} onPlay={() => setActive(project)} />
            <div className="project-body">
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {(() => {
                const expanded = !!open[project.title];
                const hidden = project.highlights.length - COLLAPSED_HIGHLIGHTS;
                const chips = expanded ? project.stack : project.stack.slice(0, COLLAPSED_CHIPS);
                const moreChips = project.stack.length - chips.length;
                return (
                  <>
                    <ul>
                      {(expanded ? project.highlights : project.highlights.slice(0, COLLAPSED_HIGHLIGHTS)).map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <div className="project-stack">
                      {chips.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                      {moreChips > 0 && (
                        <button type="button" className="chip chip-more" onClick={() => toggle(project.title)}>
                          +{moreChips} more
                        </button>
                      )}
                    </div>
                    {(hidden > 0 || moreChips > 0) && (
                      <button
                        type="button"
                        className={`project-toggle${expanded ? " open" : ""}`}
                        onClick={() => toggle(project.title)}
                        aria-expanded={expanded}
                      >
                        {expanded ? "Less details" : `More details`}
                        <ChevronDown size={14} aria-hidden="true" />
                      </button>
                    )}
                  </>
                );
              })()}
              <ProjectLinks project={project} onPlay={() => setActive(project)} />
            </div>
          </article>
        ))}
      </div>

      {more.length > 0 && (
        <>
          <div className="projects-more-head reveal">
            <span className="eyebrow">More builds</span>
          </div>
          <div className="projects-more">
            {more.map((project, i) => {
              const Icon = project.icon ? ICONS[project.icon] : null;
              return (
                <article
                  key={project.title}
                  className="card project compact reveal"
                  style={{ "--art": project.art } as CSSProperties}
                >
                  <div className="compact-head">
                    <span className="compact-icon">{Icon && <Icon size={20} strokeWidth={1.8} aria-hidden="true" />}</span>
                    <span className="art-index">{String(featured.length + i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="project-body">
                    <span className="project-tag">{project.tag}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-stack">
                      {project.stack.slice(0, 6).map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <ProjectLinks project={project} onPlay={() => setActive(project)} />
                  </div>
                </article>
              );
            })}
          </div>
        </>
      )}

      <div className="github-cta reveal">
        <a className="btn" href={site.github} target="_blank" rel="noopener noreferrer">
          <Github size={16} /> More on GitHub <ArrowUpRight size={15} />
        </a>
      </div>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
