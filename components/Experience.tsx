import { ArrowUpRight } from "lucide-react";
import { education, experience } from "@/data/site";

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <div className="section-head reveal">
        <span className="eyebrow">Experience</span>
        <h2>Where I&rsquo;ve worked.</h2>
        <p>From an ed-tech startup to a health-tech scale-up to Goldman Sachs.</p>
      </div>

      <div className="timeline">
        {experience.map((job, i) => (
          <div className="job reveal" key={`${job.company}-${job.period}`}>
            <div className="job-dot">{String(i + 1).padStart(2, "0")}</div>
            <article className="card job-card">
              <div className="job-top">
                <h3>{job.role}</h3>
                {job.url ? (
                  <a className="company" href={job.url} target="_blank" rel="noopener noreferrer">
                    @ {job.company} <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="company">@ {job.company}</span>
                )}
