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
      stopReverse();
    };
  }, []);

  return (
    <div className="hero-media" aria-label="Animated developer workspace">
      <video
        ref={videoRef}
        className="hero-video"
        src={site.heroVideo}
        poster={site.heroPoster}
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
      />
      <div className="hero-media-vignette" aria-hidden="true" />
    </div>
  );
}

/**
 * Photo variant (site.photo): a still image turned into a "living" clip —
 * slow Ken Burns zoom/pan, cursor parallax and a light sweep, under the same
 * soft mask as the video so it blends into the page.
 */
function HeroPhoto() {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--px", `${x * -14}px`);
    el.style.setProperty("--py", `${y * -10}px`);
    el.style.setProperty("--rx", `${y * -4}deg`);
    el.style.setProperty("--ry", `${x * 6}deg`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    ["--px", "--py", "--rx", "--ry"].forEach((v) => el.style.removeProperty(v));
  }

  return (
    <div className="hero-photo-scene" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="hero-media hero-photo" aria-label={`Photo of ${site.name}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-photo-img" src={site.photo} alt={site.name} />
        <div className="hero-photo-sweep" aria-hidden="true" />
        <div className="hero-media-vignette" aria-hidden="true" />
      </div>
      <span className="hero-badge hero-badge-a">IIT (BHU) &rsquo;23</span>
      <span className="hero-badge hero-badge-b">Goldman Sachs</span>
    </div>
  );
}
