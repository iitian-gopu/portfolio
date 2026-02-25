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
