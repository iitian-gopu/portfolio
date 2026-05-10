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
