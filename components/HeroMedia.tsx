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
      timer = undefined;
    };

    const onEnded = () => {
      stopReverse();
      last = performance.now();
      timer = setInterval(() => {
        const now = performance.now();
        const dt = (now - last) / 1000;
        last = now;
        if (video.currentTime <= 0.06) {
          stopReverse();
          // wait for the seek to settle before playing, or play() gets interrupted
          video.addEventListener("seeked", () => void video.play().catch(() => {}), { once: true });
          video.currentTime = 0;
          return;
        }
        video.currentTime = Math.max(0, video.currentTime - dt);
      }, 33);
    };

    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("ended", onEnded);
