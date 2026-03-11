"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Global client-side effects: background orbs, cursor spotlight,
 * scroll progress bar, reveal-on-scroll and the back-to-top button.
 */
export default function Effects() {
  const [showTop, setShowTop] = useState(false);

