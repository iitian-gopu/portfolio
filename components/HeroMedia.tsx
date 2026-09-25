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
    let raf = 0;
    let last = 0;
    let reversing = false;
    let visible = true;

    const stopReverse = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      reversing = false;
    };

    // Reverse by seeking backwards ~24 times a second. Seeking is the expensive
    // part, so it only runs while the hero is actually on screen.
    const step = (now: number) => {
      if (!reversing) return;
      const dt = (now - last) / 1000;
      if (dt >= 1 / 24) {
        last = now;
        if (video.currentTime <= 0.06) {
          stopReverse();
          video.addEventListener("seeked", () => void video.play().catch(() => {}), { once: true });
          video.currentTime = 0;
          return;
        }
        video.currentTime = Math.max(0, video.currentTime - dt);
      }
      raf = requestAnimationFrame(step);
    };

    const onEnded = () => {
      if (!visible) return;
      stopReverse();
      reversing = true;
      last = performance.now();
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (!visible) {
          stopReverse();
          video.pause();
        } else if (video.paused) {
          void video.play().catch(() => {});
        }
      },
      { threshold: 0.1 },
    );
    io.observe(video);

    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("ended", onEnded);
      io.disconnect();
      stopReverse();
    };
  }, []);

  return (
    <div className="hero-photo-scene">
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
      <span className="hero-badge hero-badge-a">IIT (BHU) &rsquo;23</span>
      <span className="hero-badge hero-badge-b">Goldman Sachs</span>
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
