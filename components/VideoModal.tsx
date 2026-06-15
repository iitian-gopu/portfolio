"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { Project } from "@/data/site";

type Props = { project: Project | null; onClose: () => void };

export default function VideoModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
