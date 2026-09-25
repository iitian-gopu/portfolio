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
  /** Shown in the hero status pill */
  currentRole: "Analyst @ Goldman Sachs",
  // Words that rotate in the hero headline
  roles: ["Full-Stack Engineer", "AI Engineer", "Quant Systems Builder", "Backend Engineer"],
  tagline: "I build fast, reliable software — from real-time UIs and distributed backends to LLM agents and algorithmic trading systems.",
  intro:
    "Analyst at Goldman Sachs, IIT (BHU) Varanasi ’23. I build production systems where AI meets finance — multi-agent LLM platforms and systematic trading infrastructure — and take ambiguous problems all the way to something that runs reliably.",
  location: "Bengaluru, India", // TODO: confirm
  timezone: "Asia/Kolkata",
  availability: "Open to interesting conversations",
  email: "gopaljaiswal20192023@gmail.com",
  github: "https://github.com/iitian-gopu",
  linkedin: "https://www.linkedin.com/in/gopal-jaiswal-97775518b",
  resumeUrl: "/resume.pdf",
  siteUrl: "https://portfolio-gopal-jaiswals-projects.vercel.app",
  // Hero animation (plays once, muted). Swap for your own MP4 + poster image.
  heroVideo: "/media/gopal-hero.mp4",
  heroPoster: "/media/gopal-hero-poster.jpg",
  // YOUR PHOTO: drop it at public/media/gopal.jpg and set photo: "/media/gopal.jpg".
  // When set, the hero shows your photo instead of the video.
  photo: "",
};

export const stats = [
  { value: "3+", label: "Years building software" },
  { value: "8", label: "LLM agents orchestrated in VisionAI" },
  { value: "11", label: "Packages in my quant trading platform" },
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
  /** Icon key rendered on the card artwork (see components/Projects.tsx) */
  icon?: "bot" | "chart" | "pen" | "rocket" | "message" | "threads" | "briefcase" | "mic" | "plug" | "play";
};

export const projects: Project[] = [
  {
    title: "VisionAI",
    tag: "Multi-agent GenAI platform · LangGraph",
    description:
      "A production-style AI workspace that routes every request to the right specialist — chat, web search, coding, PDF RAG, document generation, image generation and vision — orchestrated with LangGraph.",
    highlights: [
      "LangGraph state machine with an LLM classifier routing across 8 specialized agents",
      "RAG pipeline: PDF parsing → chunking → Gemini embeddings → Qdrant vector search",
      "Multi-provider LLM layer (Gemini 2.5, Groq, OpenRouter) + Tavily search + multimodal vision",
      "Firebase auth, Redis memory, Razorpay credits; Dockerized microservices on AWS ECS via GitHub Actions",
    ],
    stack: ["LangGraph", "LangChain", "Gemini", "Groq", "Qdrant", "React", "Node.js", "Redis", "AWS"],
    icon: "bot",
    liveUrl: "https://visionai-frontend-hvi0.onrender.com",
    codeUrl: "https://github.com/iitian-gopu/visionai",
    image: "/projects/visionai.jpg",
    demoVideo: "/demos/visionai.mp4",
    art: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #0ea5e9 100%)",
    featured: true,
  },
  {
    title: "Algo Platform",
    tag: "Quant platform · Python monorepo",
    description:
      "A multi-asset, India-first systematic trading platform (1-minute to daily) — one monorepo from raw market data to live orders, with backtest and live guaranteed to see identical data.",
    highlights: [
      "11 Python packages: REST/WebSocket market-data ingest, feature engineering, event-driven backtest, research, risk, paper & live trading",
      "Parquet / PyArrow data layer with DuckDB queries; Pydantic + pandera schema contracts at every boundary",
      "Walk-forward research with Optuna sweeps; risk layer with exposure limits, VaR and a kill-switch wired to alerts",
      "Spec-driven: per-package SPEC.md, 60+ ADRs, Hypothesis property tests, mypy/ruff and pre-commit gates",
    ],
    stack: ["Python", "pandas", "NumPy", "PyArrow", "DuckDB", "Pydantic", "scikit-learn", "Optuna", "Streamlit"],
    icon: "chart",
    codeUrl: "https://github.com/iitian-gopu/algo-platform",
    art: "linear-gradient(135deg, #16a34a 0%, #0d9488 50%, #0f172a 100%)",
    featured: true,
  },
  {
    title: "AI HireBooster",
    tag: "GenAI mock-interview platform",
    description:
      "A full-stack AI interview coach: upload a resume, get a role-specific technical or HR interview with voice answering, per-answer evaluation and a downloadable performance report.",
    highlights: [
      "PDF resume parsing feeds role, skills and project-aware question generation via OpenRouter",
      "Voice-enabled timed interview with per-answer scoring across multiple dimensions",
      "Analytics dashboard with history, downloadable PDF reports and a credit system",
      "Firebase Google auth, MongoDB persistence and Razorpay payments",
    ],
    stack: ["React", "Vite", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Firebase", "OpenRouter", "Razorpay"],
    liveUrl: "https://ai-hire-booster.onrender.com",
    codeUrl: "https://github.com/iitian-gopu/ai-hire-booster",
    icon: "mic",
    art: "linear-gradient(135deg, #f43f5e 0%, #f97316 55%, #facc15 100%)",
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
    icon: "pen",
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
    icon: "rocket",
    art: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 55%, #1e1b4b 100%)",
    featured: true,
  },
  {
    title: "PageChat",
    tag: "Chrome extension · RAG",
    description:
      "A Chrome extension and FastAPI backend that answers questions about the page you are on — retrieval over the page content, with a live web-search fallback when the answer is not there.",
    highlights: [
      "Per-tab retrieval pipeline over extracted page content",
      "Automatic web-search fallback when the page lacks the answer",
      "Rate limiting and a lightweight index tuned for free-tier hosting",
    ],
    stack: ["Python", "FastAPI", "Chrome Extension", "RAG", "Render"],
    codeUrl: "https://github.com/iitian-gopu/pagechat",
    icon: "plug",
    art: "linear-gradient(135deg, #14b8a6 0%, #0ea5e9 55%, #1e1b4b 100%)",
  },
  {
    title: "MagicStream",
    tag: "Streaming platform · Go",
    description:
      "A movie streaming platform with a React client and a Go/Gin API — catalog browsing, JWT refresh-token auth in HttpOnly cookies, and an LLM that classifies admin reviews into ranking categories.",
    highlights: [
      "Go + Gin REST API over MongoDB with protected and unprotected route groups",
      "Access/refresh JWT flow with HttpOnly cookies and guarded frontend routes",
      "LangChainGo + OpenAI classify reviews into ranking buckets for recommendations",
    ],
    stack: ["Go", "Gin", "React", "MongoDB", "JWT", "LangChainGo", "OpenAI"],
    codeUrl: "https://github.com/iitian-gopu/magic-stream",
    icon: "play",
    art: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #0f172a 100%)",
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
    icon: "message",
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
    icon: "threads",
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
    icon: "briefcase",
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

export const experience: Experience[] = [
  {
    company: "Goldman Sachs",
    role: "Analyst",
    period: "Jun 2025 — Present",
    location: "Bengaluru",
    url: "https://www.goldmansachs.com",
    summary:
      "Engineering across Investment Banking and Equity Derivatives — agentic AI research tooling and ML-driven options analytics.",
    points: [
      "Banker Copilot: built a full-stack agentic AI platform (React, TypeScript, FastAPI, LangGraph, LangChain, AWS Bedrock) for multi-agent financial research, secure semantic retrieval over PostgreSQL/pgvector, peer analysis and cited report generation.",
      "Moved document ingestion and long-running research execution onto Celery + Redis, so agent runs never block the request path.",
      "Equity Derivatives: built ML-driven options trading analytics in C++, Golang and Python — real-time market data over Kafka, volatility forecasting with XGBoost, Greeks-based risk calculations and historical strategy simulation.",
      "Shipped the analytics services as containers on Docker and Kubernetes.",
    ],
    stack: ["Python", "TypeScript", "C++", "Golang", "FastAPI", "LangGraph", "AWS Bedrock", "pgvector", "Kafka", "XGBoost", "Kubernetes"],
  },
  {
    company: "Casahealth Tech",
    role: "Software Engineer II",
    period: "Feb 2025 — Jun 2025",
    summary:
      "Healthcare workflow engine — a multi-tenant EMR platform for clinical operations.",
    points: [
      "Built a multi-tenant EMR platform (Java, Spring Boot, PostgreSQL) automating appointment scheduling, clinical workflows and patient record management.",
      "Event-driven processing over RabbitMQ with configurable state transitions, idempotent execution and retry ladders.",
      "Audit logging across clinical actions, Redis caching and Dockerised deployment.",
    ],
    stack: ["Java", "Spring Boot", "RabbitMQ", "Redis", "PostgreSQL", "Docker"],
  },
  {
    company: "Edfora Infotech",
    role: "Software Engineer",
    period: "Jun 2023 — Feb 2025",
    summary:
      "Assessment, semantic search and recommendation systems for a high-scale ed-tech platform.",
    points: [
      "Assessment Engine: scalable online/offline platform in C++, Rust and Node.js with Kafka, Redis, MongoDB and AWS SQS — 100K+ concurrent users and 80K+ exam responses; cut latency 40% and raised throughput 35%.",
      "AI Knowledge Engine: semantic question-processing across 2M+ questions (Python, FastAPI, LangChain, Sentence Transformers, FAISS/Pinecone) with OCR/LaTeX extraction and NLP classification — reduced duplicates by 95%.",
      "Personalized Learning Engine: ML recommendation system (XGBoost, scikit-learn, spaCy) combining performance analytics with semantic question metadata to surface learning gaps — improved engagement by 20%.",
    ],
    stack: ["C++", "Rust", "Node.js", "Python", "FastAPI", "Kafka", "MongoDB", "FAISS / Pinecone", "XGBoost", "AWS SQS"],
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

export type SkillGroup = {
  title: string;
  skills: string[];
  /** Spotlight card with a blurb and a link to the related project */
  focus?: { blurb: string; href: string; cta: string };
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & LLM Engineering",
    focus: {
      blurb: "Multi-agent systems with LangGraph, RAG over vector stores, multi-provider LLM routing and multimodal agents — shipped to production in VisionAI.",
      href: "#work",
      cta: "See VisionAI",
    },
    skills: ["LangGraph", "LangChain", "Multi-agent systems", "RAG", "Qdrant", "Gemini", "Groq", "OpenRouter", "Multimodal LLMs"],
  },
  {
    title: "Quant & Trading Systems",
    focus: {
      blurb: "Market-data pipelines, event-driven backtesting, walk-forward research, risk gates and live execution — an 11-package Python platform for systematic trading.",
      href: "#work",
      cta: "See Algo Platform",
    },
    skills: ["Backtesting", "Walk-forward validation", "Risk & kill-switch", "Market-data feeds", "pandas", "NumPy", "PyArrow / Parquet", "DuckDB", "Optuna"],
  },
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "Go"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "GraphQL", "Spring Boot", "Prisma", "REST APIs", "WebSockets"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "React Query", "shadcn/ui"],
  },
  {
    title: "Data & Infra",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "AWS (ECS, S3, EC2)", "CI/CD"],
  },
  {
    title: "Practices",
    skills: ["System Design", "Low-Level Design", "Microservices", "Property-based testing", "Observability", "Spec-driven development"],
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
  "LangGraph",
  "RAG",
  "Qdrant",
  "Backtesting",
  "pandas",
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

