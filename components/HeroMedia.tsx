"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { site } from "@/data/site";

export default function HeroMedia() {
  if (site.photo) return <HeroPhoto />;
  return <HeroVideo />;
}

/**
 * Video variant: the intro clip. It autoplays muted (browsers block autoplay
 * with sound), loops, pauses when scrolled off-screen, and exposes a sound
 * toggle so a visitor can choose to hear it.
 */
function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) video.pause();
        else void video.play().catch(() => {});
      },
      { threshold: 0.1 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (!next) void video.play().catch(() => {});
  }

  return (
    <div className="hero-photo-scene">
      <div className="hero-media hero-video-frame" aria-label="Video introduction">
        <video
          ref={videoRef}
          className="hero-video"
          src={site.heroVideo}
          poster={site.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
        />
        <div className="hero-media-vignette" aria-hidden="true" />
      </div>
      <button
        type="button"
        className="hero-sound"
        onClick={toggleSound}
        aria-label={muted ? "Unmute the intro" : "Mute the intro"}
      >
        {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        <span>{muted ? "Sound on" : "Mute"}</span>
      </button>
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
