// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import {
  FaGithub, FaExternalLinkAlt, FaServer,
  FaInfoCircle, FaRocket,
} from "react-icons/fa";

// ── your images ──────────────────────────────────────────
import garden1 from '../../../public/project/gardenhub1.PNG';
import garden2 from '../../../public/project/gardenhub2.PNG';
import garden3 from '../../../public/project/garedenhub3.PNG';
import garden4 from '../../../public/project/gardenhub4.PNG';
import garden5 from '../../../public/project/gardenhub5.PNG';

/* ─── Project data ──────────────────────────────────────── */
const projectData = [
  {
      id: 1, // Set this as your #1 project
      title: "Avijatra EdTech Platform",
      categoryLabel: "Full Stack · SaaS Platform",
      filterTags: ["All", "Full Stack", "Backend"],
      accentColor: "#00c896", // Using your primary brand color
      description: "Engineered a production-scale EdTech ecosystem facilitating model tests and school management. Integrated Gemini API and Qdrant vector databases for AI-driven question generation, optimizing the assessment workflow for educators.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Gemini API", "Qdrant", "VPS"],
      images: [
        "/project/avijatra1.PNG", 
        "/project/avijatra2.PNG", 
        "/project/avijatra3.PNG",
        "/project/avijatra4.PNG",
        "/project/avijatra5.PNG",
        "/project/avijatra6.PNG",
      ], // Replace with your actual image paths
      live: "https://app.avijatra.com",
      gitClient: null, // Private Repo
      gitServer: null, // Private Repo
  },
  {
    id: 2,
    title: "GardenHub Community",
    categoryLabel: "Full Stack · Social Platform",
    filterTags: ["All", "Full Stack"],
    accentColor: "#fb923c",
    description:
      "A comprehensive social platform for gardening enthusiasts. Users can share tips, follow expert gardeners, and engage through likes and comments. Includes a robust dashboard for managing posts and user profiles.",
    tech: ["React", "Tailwind", "Firebase", "MongoDB", "Express"],
    images: [garden1, garden2, garden3, garden4, garden5],
    live: "https://garden-hub-f812a.web.app",
    gitClient: "https://github.com/NurHossain-nur/garden-hub-client",
    gitServer: "https://github.com/NurHossain-nur/garden-hub-server",
  },
  // {
  //   id: 3,
  //   title: "GTA 6 GameBox",
  //   categoryLabel: "Frontend · Subscription",
  //   filterTags: ["All", "Frontend"],
  //   accentColor: "#fb923c",
  //   description:
  //     "A high-performance landing page and subscription platform for a fictional game service. Features protected routes, smooth Framer Motion animations, and a dynamic user review system.",
  //   tech: ["React", "DaisyUI", "Firebase", "Framer Motion"],
  //   images: ["/project/gta1.PNG", "/project/gta2.PNG", "/project/gta3.PNG"],
  //   live: "https://sublygta6.netlify.app/",
  //   gitClient: "https://github.com/NurHossain-nur/subly",
  //   gitServer: "https://github.com/NurHossain-nur/gta6-server",
  // },
  {
      id: 3,
      title: "FreeToolShop Utility Hub",
      categoryLabel: "Full Stack · Web Utilities",
      filterTags: ["All", "Full Stack", "Frontend"],
      accentColor: "#38bdf8", // A clean, utility-focused blue
      description: "Developed and rapidly scaled a comprehensive web utility platform featuring over 50 individual tools. Engineered with a heavy focus on Search Engine Optimization (SEO) and organic traffic growth, successfully indexing the platform for monetization via Google AdSense.",
      tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "SEO"], // Assumed Next.js for SEO benefits; adjust if necessary
      images: [
        "/project/freetoolshop1.PNG", 
        "/project/freetoolshop2.PNG", 
        "/project/freetoolshop3.PNG"
      ],
      live: "https://freetoolshop.com",
      gitClient: "https://github.com/NurHossain-nur/free-tool-shop", 
      gitServer: null, 
  },
  {
    id: 4,
    title: "Service Review System",
    categoryLabel: "Full Stack · Marketplace",
    filterTags: ["All", "Full Stack", "Backend"],
    accentColor: "#fbbf24",
    description:
      "A secure review management system where users can add services and leave feedback. Implements JWT authentication and features real-time UI updates for all CRUD operations.",
    tech: ["React", "MongoDB", "Express", "JWT", "Node.js"],
    images: ["/project/srv1.PNG", "/project/srv2.PNG", "/project/srv3.PNG"],
    live: "https://service-revew.web.app/",
    gitClient: "https://github.com/NurHossain-nur/service-review-client",
    gitServer: "https://github.com/NurHossain-nur/service-review-server",
  },
];

const FILTERS = ["All", "Full Stack", "Backend", "Frontend"];

/* ─── Animations ────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Component ─────────────────────────────────────────── */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projectData.filter((p) =>
    p.filterTags.includes(activeFilter)
  );

  return (
    <section className="relative py-24 bg-base-100 font-poppins overflow-hidden">

      {/* ── Background ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -translate-x-1/2" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Featured{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Projects</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/15 rounded-sm -z-0" />
            </span>
          </h2>
          <p className="max-w-lg text-sm md:text-base text-base-content/50 leading-relaxed">
            A curated selection of things I've built — each one solving a real problem with clean code and thoughtful design.
          </p>
        </motion.div>

        {/* ── Filters ── */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeFilter === f
                  ? "bg-primary border-primary text-base-100 shadow-lg shadow-primary/20"
                  : "bg-base-200 border-base-content/8 text-base-content/50 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* ── Projects list ── */}
        <div className="flex flex-col gap-24 md:gap-32">
          <AnimatePresence mode="wait">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24, transition: { duration: 0.2 } }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center group ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* ── Image: Mac window Swiper ── */}
                <div className="relative">
                  {/* Glow behind card */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none scale-95"
                    style={{ backgroundColor: project.accentColor }}
                  />

                  <div className="relative rounded-2xl overflow-hidden border border-base-content/8 bg-base-200 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">

                    {/* Mac titlebar */}
                    <div className="flex items-center gap-1.5 px-4 h-9 bg-base-300/80 backdrop-blur-sm border-b border-base-content/8">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-auto font-mono text-[10px] text-base-content/30 tracking-wider">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                      </span>
                    </div>

                    {/* Swiper */}
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
                  </div>

                  {/* Project index watermark */}
                  <span className="absolute -bottom-5 -right-3 text-8xl font-black text-base-content/[0.04] select-none leading-none pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* ── Text content ── */}
                <div className="flex flex-col gap-5">

                  {/* Category + title */}
                  <div>
                    <span
                      className="text-[10px] font-black uppercase tracking-[3px] mb-2 block"
                      style={{ color: project.accentColor }}
                    >
                      {project.categoryLabel}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight text-base-content">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-base-content/55 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-base-200 border border-base-content/8 text-base-content/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-base-content/8" />

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3">

                    {/* Details — primary CTA */}
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-base-100 bg-primary hover:brightness-110 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                    >
                      <FaInfoCircle className="text-xs" />
                      Case Study
                    </Link>

                    {/* Live demo — ghost */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/70 hover:text-primary border border-base-content/10 hover:border-primary/40 px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>

                    {/* GitHub icons */}
                    <div className="flex gap-2 ml-auto">
                      {project.gitClient && (
                      <a
                        href={project.gitClient}
                        target="_blank"
                        rel="noreferrer"
                        title="Client Repo"
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-base-200 border border-base-content/8 text-base-content/50 hover:text-primary hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 text-base"
                      >
                        <FaGithub />
                      </a>
                      )}
                      {project.gitServer && (
                      <a
                        href={project.gitServer}
                        target="_blank"
                        rel="noreferrer"
                        title="Server Repo"
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-base-200 border border-base-content/8 text-base-content/50 hover:text-primary hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 text-base"
                      >
                        <FaServer />
                      </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Bottom GitHub CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mt-28 rounded-3xl bg-base-200 border border-base-content/8 hover:border-primary/30 transition-colors duration-500 p-12 md:p-16 flex flex-col items-center text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/8 blur-3xl rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-5">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary text-2xl group-hover:bg-primary group-hover:text-base-100 transition-all duration-300">
              <FaRocket />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                Want to see more?
              </h3>
              <p className="text-sm text-base-content/45 max-w-md leading-relaxed">
                I'm constantly building and experimenting. Check out my GitHub for all repositories, open-source contributions, and utility tools.
              </p>
            </div>
            <a
              href="https://github.com/NurHossain-nur"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary border border-primary/30 hover:bg-primary hover:text-base-100 px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaGithub />
              View GitHub Profile
            </a>
          </div>

          {/* Hover bottom line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;