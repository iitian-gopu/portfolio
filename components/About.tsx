"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, GraduationCap, Mail } from "lucide-react";
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
            <div className="label">Full-stack × Backend × Systems</div>
            <p>{site.intro}</p>
            <p>
              I care about the whole path from idea to production: clear APIs, sensible data models,
              code that&rsquo;s easy to change, and the tooling that lets a team move fast without breaking things.
              Outside work I rebuild products I admire — a Figma clone, a Vercel clone, a Twitter clone —
              to learn how they really work under the hood.
            </p>
          </article>

          <article className="card b-now reveal">
            <div className="b-label">Now</div>
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
