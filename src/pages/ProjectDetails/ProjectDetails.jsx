// src/pages/ProjectDetails.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import {
  FaGithub, FaExternalLinkAlt, FaArrowLeft,
  FaCheckCircle, FaLightbulb, FaExclamationTriangle,
  FaServer,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/* ─── Project data ──────────────────────────────────────── */
const projects = [
  {
      id: "1",
      title: "Avijatra EdTech Platform",
      tagline: "AI-Powered Assessment & School Management System",
      categoryLabel: "Full Stack · SaaS Platform",
      accentColor: "#00c896",
      description: "A comprehensive EdTech ecosystem designed to streamline school administration and student assessments. Engineered with the MERN stack and hosted on a dedicated Hostinger VPS, the platform leverages RAG (Retrieval-Augmented Generation) via the Gemini API to dynamically generate context-aware exam questions. Built to handle complex administrative roles, secure data processing, and seamless test generation.",
      images: [
        "/project/avijatra1.PNG", 
        "/project/avijatra2.PNG", 
        "/project/avijatra3.PNG",
        "/project/avijatra4.PNG",
        "/project/avijatra5.PNG",
        "/project/avijatra6.PNG",
      ], // Replace with your actual image paths
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Gemini API", "Qdrant", "Hostinger VPS"],
      live: "https://app.avijatra.com",
      gitClient: null,
      gitServer: null,
      features: [
        "AI-driven question generation utilizing Gemini API and vector embeddings.",
        "Comprehensive school management and tiered student dashboard modules.",
        "Dynamic model test creation with precise Target URL processing.",
        "Role-based access control (RBAC) securing admin, teacher, and student data.",
        "Optimized production deployment on Hostinger VPS for high availability.",
      ],
      challenges: [
        "Architecting a reliable RAG pipeline to ensure the AI generated accurate, curriculum-aligned questions.",
        "Managing complex database migrations and ensuring zero-downtime DNS propagation during the server transition from Render to a dedicated VPS.",
      ],
      improvements: [
        "Implement real-time WebSocket analytics for live student performance tracking.",
        "Expand AI capabilities to include automated essay grading and personalized feedback.",
        "Develop a dedicated parent portal for real-time progress monitoring.",
      ],
  },
  {
    id: "2",
    title: "GardenHub Community",
    tagline: "Cultivating Connections Among Gardeners",
    categoryLabel: "Full Stack · Social Platform",
    accentColor: "#34d399",
    description:
      "A complete gardening hub for tip-sharing, reviewing, and connecting with fellow gardeners. Built with the MERN stack, it includes comprehensive dashboards, a dark/light theme toggle, and secure authentication flows.",
    images: [
      "/project/gardenhub1.PNG", "/project/gardenhub2.PNG",
      "/project/garedenhub3.PNG", "/project/gardenhub4.PNG", "/project/gardenhub5.PNG",
    ],
    tech: ["React", "Tailwind", "Firebase", "MongoDB", "Express", "Node.js"],
    live: "https://garden-hub-f812a.web.app/",
    gitClient: "https://github.com/NurHossain-nur/garden-hub-client",
    gitServer: "https://github.com/NurHossain-nur/garden-hub-server",
    features: [
      "Role-based User Authentication (Firebase)",
      "Interactive Dashboard with CRUD operations",
      "Real-time Like & Review system",
      "Persisted Dark/Light mode preference",
      "Fully Responsive Mobile-First Design",
    ],
    challenges: [
      "Managing complex state for different user roles (Admin vs User).",
      "Optimizing image loading within the Swiper component.",
    ],
    improvements: [
      "Implement threaded comment replies.",
      "Add a real-time notification system using Socket.io.",
      "Integrate AI for plant disease identification.",
    ],
  },
  // {
  //   id: "3",
  //   title: "GTA 6 GameBox",
  //   tagline: "Next-Gen Gaming Subscription Interface",
  //   categoryLabel: "Frontend · Subscription",
  //   accentColor: "#fb923c",
  //   description:
  //     "A high-fidelity fictional game subscription platform. Features include secure routing, complex animations, and dynamic pricing plans — demonstrating the ability to build immersive, production-grade UIs.",
  //   images: ["/project/gta1.PNG", "/project/gta2.PNG", "/project/gta3.PNG"],
  //   tech: ["React", "DaisyUI", "Firebase", "Framer Motion", "AOS"],
  //   live: "https://sublygta6.netlify.app/",
  //   gitClient: "https://github.com/NurHossain-nur/subly",
  //   gitServer: "https://github.com/NurHossain-nur/gta6-server",
  //   features: [
  //     "High-performance animated Hero section",
  //     "Google & Email/Password Authentication",
  //     "Protected Routes for Premium Content",
  //     "Dynamic User Review System",
  //   ],
  //   challenges: [
  //     "Synchronizing AOS animations with React component mounting.",
  //     "Handling secure redirection logic after login.",
  //   ],
  //   improvements: [
  //     "Integrate Stripe for real payment processing.",
  //     "Build an Admin Dashboard for user management.",
  //   ],
  // },
  {
      id: "3",
      title: "FreeToolShop Utility Hub",
      tagline: "High-Traffic SEO Utility & Monetization Platform",
      categoryLabel: "Full Stack · Web Utilities",
      accentColor: "#38bdf8",
      description: "A large-scale web utility platform designed to provide immediate value to users through quick, accessible web tools. Successfully developed and deployed 50+ distinct tools—including specialized calculators like the US Freelance Tax Calculator—within a highly compressed timeline. The architecture prioritizes performance, technical SEO, and organic reach, establishing a solid foundation for Google AdSense monetization.",
      images: [
        "/project/freetoolshop1.PNG", 
        "/project/freetoolshop2.PNG",
        "/project/freetoolshop3.PNG", 
        "/project/freetoolshop4.PNG",
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "Google AdSense", "Google Search Console"],
      live: "https://freetoolshop.com",
      gitClient: "https://github.com/NurHossain-nur/free-tool-shop",
      gitServer: null,
      features: [
        "Rapid deployment architecture supporting 50+ distinct web utilities.",
        "Specialized financial and productivity tools, including a US Freelance Tax Calculator.",
        "Advanced technical SEO implementation to maximize organic search indexing.",
        "Integrated monetization strategy utilizing Google AdSense.",
        "High-performance, content-rich tool pages designed to meet indexing length and quality requirements.",
      ],
      challenges: [
        "Strategizing and executing mass-indexing for 50+ separate tool routes to capture long-tail search traffic.",
        "Balancing high-speed application performance with the necessary content length required for effective SEO and AdSense approval.",
      ],
      improvements: [
        "Implement user accounts to allow visitors to save favorite tools and computation history.",
        "Introduce premium, gated utilities for a freemium subscription model.",
        "Develop a community blog section to further drive organic, keyword-targeted traffic.",
      ],
  },
  {
    id: "4",
    title: "Service Review System",
    tagline: "Trust-Based Service Marketplace",
    categoryLabel: "Full Stack · Marketplace",
    accentColor: "#fbbf24",
    description:
      "A secure platform where users can list services and receive community feedback. Security is handled via JWT tokens, ensuring that only authorized users can modify their specific data.",
    images: ["/project/srv1.PNG", "/project/srv2.PNG", "/project/srv3.PNG", "/project/srv4.PNG"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://service-revew.web.app/",
    gitClient: "https://github.com/NurHossain-nur/service-review-client",
    gitServer: "https://github.com/NurHossain-nur/service-review-server",
    features: [
      "JWT-protected API endpoints",
      "Private User Dashboards",
      "Cascading Deletes (Service + Reviews)",
      "Dynamic Search and Filter functionality",
    ],
    challenges: [
      "Implementing Axios interceptors for token refresh.",
      "Securing backend routes against unauthorized access.",
    ],
    improvements: [
      "Add advanced analytics for service providers.",
      "Implement social login (Google/GitHub).",
    ],
  },
];

/* ─── Animation helpers ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Component ─────────────────────────────────────────── */
const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 font-poppins bg-base-100">
      <span className="text-5xl">🔍</span>
      <p className="text-xl font-bold text-base-content/50">Project not found</p>
      <button onClick={() => navigate(-1)} className="text-sm text-primary underline underline-offset-4">
        Go back
      </button>
    </div>
  );

  return (
    <section className="relative min-h-screen bg-base-100 text-base-content font-poppins overflow-hidden">

      {/* ── Background ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 opacity-30"
        style={{ backgroundColor: project.accentColor }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">

        {/* ── Back button ── */}
        <motion.button
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate(-1)}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-base-content/50 hover:text-primary border border-base-content/10 hover:border-primary/40 px-4 py-2 rounded-full transition-all duration-300 mb-12"
        >
          <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Projects
        </motion.button>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* ══ LEFT (2/3): Slider + Detail cards ══ */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Mobile title */}
            <motion.div
              className="block lg:hidden"
              initial="hidden" animate="visible" variants={fadeUp} custom={0}
            >
              <span
                className="text-[10px] font-black uppercase tracking-[3px] mb-2 block"
                style={{ color: project.accentColor }}
              >
                {project.categoryLabel}
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight">{project.title}</h1>
              <p className="text-sm text-base-content/45 mt-1">{project.tagline}</p>
            </motion.div>

            {/* Mac window Swiper */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl overflow-hidden border border-base-content/8 bg-base-200 shadow-2xl"
            >
              {/* Mac titlebar */}
              <div className="flex items-center gap-1.5 px-4 h-9 bg-base-300/80 backdrop-blur-sm border-b border-base-content/8">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-auto font-mono text-[10px] text-base-content/30 tracking-wider">
                  {project.live.replace("https://", "")}
                </span>
              </div>
              <Swiper
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                effect="fade"
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                className="w-full aspect-video"
              >
                {project.images.map((img, i) => (
                  <SwiperSlide key={i} className="bg-base-100">
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Key Features card */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              className="group relative rounded-2xl bg-base-200 border border-base-content/8 hover:border-primary/30 transition-colors duration-300 p-7 overflow-hidden"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-sm">
                  <FaCheckCircle />
                </div>
                <h3 className="text-base font-extrabold tracking-tight">Key Features</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-base-content/60">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>

            {/* Challenges + Future Plans grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Challenges */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={1}
                className="group relative rounded-2xl bg-base-200 border border-base-content/8 hover:border-red-500/30 transition-colors duration-300 p-6 overflow-hidden"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-red-500/10 text-red-500 text-sm">
                    <FaExclamationTriangle />
                  </div>
                  <h3 className="text-sm font-extrabold tracking-tight">Challenges</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-base-content/55 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500/60 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-500/50 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>

              {/* Future Plans */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={2}
                className="group relative rounded-2xl bg-base-200 border border-base-content/8 hover:border-blue-500/30 transition-colors duration-300 p-6 overflow-hidden"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 text-sm">
                    <FaLightbulb />
                  </div>
                  <h3 className="text-sm font-extrabold tracking-tight">Future Plans</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {project.improvements.map((imp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-base-content/55 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/60 flex-shrink-0" />
                      {imp}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500/50 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>

            </div>
          </div>

          {/* ══ RIGHT (1/3): Sticky sidebar ══ */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:sticky lg:top-28"
          >
            <div className="group relative rounded-2xl bg-base-200 border border-base-content/8 hover:border-primary/25 transition-colors duration-500 p-7 overflow-hidden">
              {/* Accent glow */}
              <div
                className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-20"
                style={{ backgroundColor: project.accentColor }}
              />

              {/* Desktop title */}
              <div className="hidden lg:block mb-6">
                <span
                  className="text-[10px] font-black uppercase tracking-[3px] mb-2 block"
                  style={{ color: project.accentColor }}
                >
                  {project.categoryLabel}
                </span>
                <h1 className="text-2xl font-extrabold tracking-tight leading-tight mb-1">
                  {project.title}
                </h1>
                <p className="text-xs text-base-content/40 leading-relaxed">{project.tagline}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-base-content/55 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-base-content/8 mb-6" />

              {/* Tech stack */}
              <div className="mb-7">
                <p className="text-[10px] font-bold uppercase tracking-widest text-base-content/35 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-base-100 border border-base-content/8 text-base-content/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-base-content/8 mb-6" />

              {/* Action buttons */}
              <div className="flex flex-col gap-3">
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 text-sm font-bold text-base-100 bg-primary hover:brightness-110 px-5 py-3 rounded-xl transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-primary/40"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Visit Live Site
                </motion.a>

                <div className="grid grid-cols-2 gap-3">
                  {project.gitClient && (
                  <a
                    href={project.gitClient}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold text-base-content/60 hover:text-primary border border-base-content/10 hover:border-primary/40 py-2.5 rounded-xl transition-all duration-300"
                  >
                    <FaGithub /> Client
                  </a>
                  )}
                  {project.gitServer && (
                    <a
                      href={project.gitServer}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 text-xs font-semibold text-base-content/60 hover:text-primary border border-base-content/10 hover:border-primary/40 py-2.5 rounded-xl transition-all duration-300"
                    >
                      <FaServer /> Server
                    </a>
                  )}
                </div>
              </div>

              {/* Hover bottom line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
            </div>

            {/* Project index pill */}
            <div className="mt-4 flex items-center justify-between px-1">
              <span className="text-xs text-base-content/25 font-semibold">
                Project {id} of {projects.length}
              </span>
              <div className="flex gap-1.5">
                {projects.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      String(i + 1) === id
                        ? "w-6 bg-primary"
                        : "w-2 bg-base-content/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;