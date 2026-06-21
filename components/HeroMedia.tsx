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
 */
function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    let last = 0;

    const stopReverse = () => {
      if (timer) clearInterval(timer);
