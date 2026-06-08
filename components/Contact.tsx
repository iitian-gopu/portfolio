"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { site } from "@/data/site";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  const year = new Date().getFullYear();

  return (
    <section className="section container" id="contact">
      <div className="card contact-card reveal">
        <span className="eyebrow">Contact</span>
        <h2>Let&rsquo;s build something together.</h2>
        <p>
          Hiring, collaborating or just want to talk systems? My inbox is open — I reply to every
          message.
        </p>

        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${site.email}?subject=Hello%20Gopal`}>
            <Mail size={16} /> Say hello <ArrowUpRight size={15} />
          </a>
          <a className="btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a className="btn" href={site.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} /> GitHub
          </a>
        </div>

        <button type="button" className={`copy-email${copied ? " copied" : ""}`} onClick={copyEmail}>
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "Copied to clipboard" : site.email}
        </button>
      </div>

      <footer className="footer">
        <span>
          © {year} {site.name}. Built with Next.js, deployed on Vercel.
        </span>
        <div className="links">
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>Email</a>
        </div>
      </footer>
    </section>
  );
}
