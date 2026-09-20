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
  roles: ["Full-Stack Engineer", "AI Engineer", "Quant Systems Builder", "Backend Engineer"],
  tagline: "I build fast, reliable software — from real-time UIs and distributed backends to LLM agents and algorithmic trading systems.",
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
    tag: "Multi-agent GenAI platform · LangGraph",
    description:
      "A production-style AI workspace that routes each request to a specialized agent — chat, web search, coding, PDF RAG, PDF/PPT generation, image generation and image analysis — orchestrated with LangGraph.",
    highlights: [
      "LangGraph state machine with an LLM classifier routing across 8 specialized agents",
      "RAG pipeline: PDF parsing → text splitting → Gemini embeddings → Qdrant vector search",
      "Multi-provider LLM layer (Gemini 2.5, Groq, OpenRouter) with Tavily web search and multimodal image understanding",
      "Monaco code artifacts with a sandboxed live HTML/CSS/JS preview",
      "Firebase auth, Redis sessions & memory, Razorpay credits, per-agent rate limiting",
      "Dockerized Node microservices on AWS ECS/ECR, React on S3 + CloudFront via GitHub Actions",
    ],
    stack: ["LangGraph", "LangChain", "Gemini", "Groq", "OpenRouter", "Qdrant", "Tavily", "React", "Node.js", "Express", "Redis", "MongoDB", "Docker", "AWS"],
    liveUrl: "https://visionai-frontend-hvi0.onrender.com",
    codeUrl: "https://github.com/iitian-gopu/visionai",
    art: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #0ea5e9 100%)",
    featured: true,
  },
  {
    title: "Algo Platform",
    tag: "Quant platform · Python monorepo",
    description:
      "A multi-asset, India-first algorithmic trading platform for mid-frequency strategies (1-minute to daily) — one monorepo covering the full path from raw market data to live orders, with backtest and live guaranteed to see identical data.",
    highlights: [
      "11 Python packages: market-data ingest (REST + WebSocket broker feeds), feature engineering, event-driven backtest, research, risk, paper/live trading",
      "Columnar data layer on Parquet / PyArrow with DuckDB queries; Pydantic + pandera schema contracts at every boundary",
      "Research loop: strategy library, walk-forward validation and Optuna hyperparameter sweeps with scikit-learn models",
      "Risk layer with refusal gates, position/exposure limits, VaR and a kill-switch wired to operator alerts",
      "Cron-dispatched orchestrator with run journal, run locks, retry ladders and evidence gates — no external scheduler",
      "Spec-driven engineering: per-package SPEC.md, 60+ ADRs, Hypothesis property tests, mypy/ruff, pre-commit and duplication gates",
    ],
    stack: ["Python", "pandas", "NumPy", "SciPy", "PyArrow / Parquet", "DuckDB", "Pydantic", "scikit-learn", "Optuna", "websockets", "Streamlit", "pytest + Hypothesis", "uv"],
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
    liveUrl: "https://fig-forge.vercel.app",
    codeUrl: "https://github.com/iitian-gopu/FigForge",
    art: "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
    featured: true,
  },
  {
    title: "NanoVercel",
    tag: "Deployment platform",
    description:
      "A from-scratch Vercel clone: push a repo, get a live URL. Builds run in containers, artefacts land in S3 and a reverse proxy serves every project on its own subdomain.",
    highlights: [
      "api-server, build-server (Docker on ECS) and s3-reverse-proxy services",
      "Kafka-backed build logs streamed to the UI with Socket.IO",
      "Redis for state, S3 for static hosting, slug-based subdomains",
    ],
    stack: ["Node.js", "Express", "Next.js", "Docker", "AWS ECS", "S3", "Kafka", "Redis", "Socket.IO"],
    codeUrl: "https://github.com/iitian-gopu/vercel-clone",
    art: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 55%, #1e1b4b 100%)",
    featured: true,
  },
  {
    title: "Twitter Clone",
    tag: "Full-stack · GraphQL",
    description:
      "Type-safe Twitter clone with Google OAuth, tweets with images, likes and follows — GraphQL API on Node with Prisma + Postgres and a Next.js client.",
    highlights: [
      "GraphQL API with Prisma ORM on Supabase Postgres",
      "Redis query caching, JWT auth, Google Sign-In",
      "Codegen for typed queries, React Query on the client",
    ],
    stack: ["Next.js", "GraphQL", "Prisma", "PostgreSQL", "Redis", "AWS S3", "Fly.io"],
    codeUrl: "https://github.com/IITIAN-GOPU20/Twitter-Client",
    art: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
  },
  {
    title: "Threads Clone",
    tag: "MERN · Real-time chat",
    description:
      "Threads-style social app with posts, likes, comments, follows, dark mode and a real-time chat with image support and seen/unseen status.",
    highlights: [
      "JWT auth, Cloudinary image uploads",
      "Socket.io chat with message status & notification sounds",
      "Fully responsive Chakra UI",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Chakra UI"],
    codeUrl: "https://github.com/IITIAN-GOPU20/Threads",
    art: "linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #0f172a 100%)",
  },
  {
    title: "NaukriChowk",
    tag: "Job portal",
    description:
      "A job-listing portal with a separate backend service — search, post and apply for jobs.",
    highlights: ["Frontend + REST backend split", "Search and filtering of listings"],
    stack: ["HTML", "CSS", "JavaScript", "Node.js"],
    codeUrl: "https://github.com/IITIAN-GOPU20/NaukriChowk",
    art: "linear-gradient(135deg, #facc15 0%, #f97316 100%)",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  url?: string;
  summary: string;
  points: string[];
  stack: string[];
};

// TODO: replace the bullet points with your real impact numbers.
export const experience: Experience[] = [
  {
    company: "Goldman Sachs",
    role: "Software Engineer",
    period: "2024 — Present",
    location: "Bengaluru",
    url: "https://www.goldmansachs.com",
    summary:
      "Engineering in Global Markets — building low-latency, high-reliability systems that the trading floor depends on.",
    points: [
      "Design and ship backend services for global markets platforms, with strong emphasis on correctness, observability and resilience.",
      "Own features end-to-end: requirements with traders and quants, design reviews, implementation, testing and production support.",
      "Improve performance and reliability of critical data pipelines and APIs.",
    ],
    stack: ["Java", "Python", "Distributed Systems", "SQL", "Kafka"],
  },
  {
    company: "PocketPills",
    role: "SDE-2",
    period: "2023 — 2024",
    location: "Remote",
    url: "https://www.pocketpills.com",
    summary:
      "Full-stack engineer at a fast-growing digital pharmacy, owning customer-facing features across web and backend.",
    points: [
      "Built and scaled customer-facing features across the web app and backend services.",
      "Led modules end-to-end — API design, database schema, front-end and rollout.",
      "Improved reliability and performance of order and prescription flows.",
    ],
    stack: ["Node.js", "React", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    company: "Edfora",
    role: "SDE-1",
    period: "2022 — 2023",
    location: "Delhi NCR",
    url: "https://www.edfora.com",
    summary: "Ed-tech engineering — services and dashboards used by thousands of students every day.",
    points: [
      "Developed backend microservices and React dashboards for the learning platform.",
      "Worked on data-heavy analytics features and CI/CD pipelines.",
      "Collaborated with product and design to ship weekly.",
    ],
    stack: ["Java", "Spring Boot", "React", "MongoDB", "Docker"],
  },
];

export const education = [
  {
    school: "Indian Institute of Technology (BHU), Varanasi",
    short: "IIT (BHU) Varanasi",
    degree: "Bachelor of Technology", // TODO: add your branch, e.g. "B.Tech, Computer Science & Engineering"
    period: "2019 — 2023",
    detail:
      "Four years in Varanasi — coursework in algorithms, systems and software engineering, and a lot of late nights building things.",
    url: "https://iitbhu.ac.in",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "Go"],
  },
  {
    title: "AI & LLM Engineering",
    skills: [
      "LangGraph",
      "LangChain",
      "Multi-agent systems",
      "RAG",
      "Vector search (Qdrant)",
      "Embeddings",
      "Gemini",
      "Groq",
      "OpenRouter",
      "Prompt engineering",
      "Tool calling",
      "Multimodal LLMs",
    ],
  },
  {
    title: "Quant & Trading Systems",
    skills: [
      "Event-driven backtesting",
      "Walk-forward validation",
      "Feature engineering",
      "Risk management & kill-switch",
      "Market-data pipelines",
      "Broker APIs & WebSockets",
      "pandas",
      "NumPy",
      "SciPy",
      "scikit-learn",
      "Optuna",
      "Pydantic",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "React Query", "Chakra UI", "shadcn/ui"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "GraphQL", "Spring Boot", "Prisma", "REST APIs", "WebSockets"],
  },
  {
    title: "Data & Infra",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "DuckDB", "Parquet / Arrow", "Docker", "AWS (ECS, S3, EC2)", "CI/CD"],
  },
  {
    title: "Practices",
    skills: ["System Design", "Low-Level Design", "DSA", "Microservices", "Property-based testing", "Observability", "Spec-driven development"],
  },
];

/** Shown in the scrolling marquee strip */
export const marquee = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Docker",
  "AWS",
  "Java",
  "Spring Boot",
  "Python",
  "System Design",
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

