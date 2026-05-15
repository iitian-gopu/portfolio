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
