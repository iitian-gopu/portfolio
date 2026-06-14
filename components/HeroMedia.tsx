"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";

export default function HeroMedia() {
  if (site.photo) return <HeroPhoto />;
  return <HeroVideo />;
}

/**
 * Video variant: a short generated clip played as a seamless ping-pong loop
 * (forward, then scrubbed backwards) so a 2–4 s clip never visibly jumps.
