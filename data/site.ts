/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE to personalise the portfolio.
 *  Everything on the site (text, links, projects, timeline)
 *  is driven from here. Items marked TODO need your input.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Gopal Jaiswal",
  firstName: "Gopal",
  initials: "GJ",
  role: "Software Engineer",
  // Words that rotate in the hero headline
  roles: ["Full-Stack Engineer", "Backend Engineer", "Systems Builder", "Problem Solver"],
  tagline: "I build fast, reliable software for the web — from real-time UIs to distributed backends.",
  intro:
    "Software Engineer at Goldman Sachs and a 2023 graduate of IIT (BHU) Varanasi. I like turning ambiguous problems into clean, scalable systems — and shipping them.",
  location: "Bengaluru, India", // TODO: confirm
  timezone: "Asia/Kolkata",
  availability: "Open to interesting conversations",
  email: "gopaljaiswal20192023@gmail.com",
  github: "https://github.com/iitian-gopu",
  linkedin: "https://www.linkedin.com/in/gopal-jaiswal-97775518b",
  resumeUrl: "/resume.pdf", // TODO: drop your resume at public/resume.pdf (or set to "")
  siteUrl: "https://gopaljaiswal.vercel.app", // TODO: update after deploy
  // Hero animation (plays once, muted). Swap for your own MP4 + poster image.
  heroVideo: "/media/gopal-desk.mp4",
  heroPoster: "/media/gopal-desk.jpg",
  // YOUR PHOTO: drop it at public/media/gopal.jpg and set photo: "/media/gopal.jpg".
  // When set, the hero shows your photo instead of the video.
  photo: "",
};

export const stats = [
  { value: "3+", label: "Years building software" },
  { value: "3", label: "Companies, startup → Wall St." },
  { value: "10+", label: "Production systems shipped" },
  { value: "IIT", label: "(BHU) Varanasi, Class of 2023" },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
  /** Optional screenshot for the card (public/projects/...). Falls back to the gradient. */
  image?: string;
  /** Optional demo MP4 (public/demos/...). Adds a "Watch demo" button + modal. */
  demoVideo?: string;
  /** CSS gradient used as the card artwork when there is no image */
  art: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "VisionAI",
    tag: "Multi-agent GenAI platform",
    description:
      "A production-style AI workspace that routes each request to a specialized agent — chat, web search, coding, PDF RAG, PDF/PPT generation, image generation and image analysis — orchestrated with LangGraph.",
    highlights: [
      "LLM-classified routing across 8 agents; Qdrant-backed RAG over uploaded PDFs",
      "Monaco code artifacts with a sandboxed live HTML/CSS/JS preview",
      "Firebase auth, Redis sessions & memory, Razorpay credits, per-agent rate limiting",
      "Dockerized Node microservices on AWS ECS/ECR, React on S3 + CloudFront via GitHub Actions",
    ],
    stack: ["React", "Node.js", "Express", "LangGraph", "LangChain", "Qdrant", "Redis", "MongoDB", "Docker", "AWS"],
    liveUrl: "https://visionai-frontend-hvi0.onrender.com",
    codeUrl: "https://github.com/iitian-gopu/visionai",
    art: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #0ea5e9 100%)",
    featured: true,
  },
  {
    title: "Algo Platform",
    tag: "Algorithmic trading stack",
    description:
      "A multi-asset, India-first algorithmic trading platform for mid-frequency strategies (1-minute to daily) — one monorepo covering the full path from raw market data to live orders, with backtest and live guaranteed to see identical data.",
    highlights: [
      "11 Python packages: data ingest, feature engineering, event-driven backtest, research & walk-forward, risk, paper/live trading",
      "Risk layer with refusal gates, position/exposure limits, VaR and a kill-switch wired to operator alerts",
      "Cron-dispatched orchestrator with run journal, run locks, retry ladders and evidence gates — no external scheduler",
      "Spec-driven engineering: per-package SPEC.md, ADRs, pre-commit + duplication checks, generated status board",
    ],
    stack: ["Python", "pandas", "Parquet", "Streamlit", "uv", "pytest", "Docker"],
    codeUrl: "https://github.com/iitian-gopu/algo-platform",
    art: "linear-gradient(135deg, #16a34a 0%, #0d9488 50%, #0f172a 100%)",
    featured: true,
  },
  {
    title: "FigForge",
    tag: "Real-time collaboration",
    description:
      "A minimal Figma clone with live multiplayer cursors, cursor chat, reactions, comment threads and a full drawing canvas.",
    highlights: [
      "Live presence, cursor chat & reactions via Liveblocks",
      "Fabric.js canvas: shapes, freeform drawing, images, undo/redo",
      "Keyboard shortcuts, history panel and export",
    ],
    stack: ["Next.js", "TypeScript", "Liveblocks", "Fabric.js", "Tailwind", "shadcn/ui"],
