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
