"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import HeroMedia from "./HeroMedia";
import { site, stats } from "@/data/site";

function RoleRotator({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
