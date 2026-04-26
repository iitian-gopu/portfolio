"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { site } from "@/data/site";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
