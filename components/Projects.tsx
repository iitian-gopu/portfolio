"use client";

import { useState, type CSSProperties } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Github } from "./Icons";
import VideoModal from "./VideoModal";
import { projects, site, type Project } from "@/data/site";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
