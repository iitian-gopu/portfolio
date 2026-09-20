"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Briefcase, Clock, FileText, GraduationCap, Link2, Mail, Sparkles } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { education, experience, marquee, site } from "@/data/site";

function LocalClock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: site.timezone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return <div className="time">{time}</div>;
}

export default function About() {
  const current = experience[0];
  const edu = education[0];

  return (
    <>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section container" id="about">
        <div className="section-head reveal">
          <span className="eyebrow">About</span>
          <h2>Engineer by training, builder by habit.</h2>
        </div>

        <div className="bento">
          <article className="card b-story reveal">
            <div className="label">
              <Sparkles size={13} aria-hidden="true" /> AI systems × Quant trading × Full-stack
            </div>
            <p>{site.intro}</p>
            <p>
              Two threads run through my work: <b>VisionAI</b>, a LangGraph multi-agent platform with
              RAG, web search, code/document generation and vision agents; and a <b>Python quant
              platform</b> covering market-data ingest, event-driven backtesting, risk gates and live
              execution. At Goldman Sachs I work on global-markets systems where correctness and
              latency actually matter.
            </p>
          </article>

          <article className="card b-now reveal">
            <div className="b-label"><Briefcase size={13} aria-hidden="true" /> Now</div>
            <div>
              <div className="company">{current.company}</div>
              <div className="role">
                {current.role} · {current.period}
              </div>
            </div>
            <div className="timeline-mini">
              {experience.slice(1).map((job) => (
                <div key={job.company}>
                  <b>
                    {job.role}, {job.company}
                  </b>
                  <span>{job.period}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="card b-edu reveal">
            <span className="badge">Class of 2023</span>
            <GraduationCap size={26} />
            <div className="school">{edu.short}</div>
            <div className="sub">{edu.degree}</div>
          </article>

          <article className="card b-clock reveal">
            <div className="b-label"><Clock size={13} aria-hidden="true" /> Local time</div>
            <LocalClock />
            <div className="place">{site.location}</div>
          </article>

          <article className="card b-links reveal">
            <div className="b-label"><Link2 size={13} aria-hidden="true" /> Find me</div>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <Github size={18} /> GitHub <ArrowUpRight size={16} />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} />
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={18} /> Email <ArrowUpRight size={16} />
            </a>
            {site.resumeUrl && (
              <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText size={18} /> Resume <ArrowUpRight size={16} />
              </a>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
