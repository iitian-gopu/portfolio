"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { Project } from "@/data/site";

type Props = { project: Project | null; onClose: () => void };

export default function VideoModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project?.demoVideo) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="video-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="video-modal-head">
