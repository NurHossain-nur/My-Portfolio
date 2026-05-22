// src/components/Skills.jsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGithub, FaFigma, FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss, SiFirebase, SiMongodb, SiRedux,
  SiVite, SiC, SiCplusplus, SiPython, SiNextdotjs,
  SiPostman, SiVercel, SiExpress,
} from "react-icons/si";

/* ─── Skill categories (left) ───────────────────────────── */
const skillCategories = [
  {
    title: "Frontend",
    tag: "01",
    skills: [
      { name: "React.js",     icon: <FaReact />,       color: "#61dafb" },
      { name: "Next.js",      icon: <SiNextdotjs />,   color: null      },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
      { name: "Redux",        icon: <SiRedux />,       color: "#764abc" },
      { name: "JavaScript",   icon: <FaJs />,          color: "#f7df1e" },
      { name: "HTML5",        icon: <FaHtml5 />,       color: "#e34c26" },
      { name: "CSS3",         icon: <FaCss3Alt />,     color: "#264de4" },
    ],
  },
  {
    title: "Backend",
    tag: "02",
    skills: [
      { name: "Node.js",    icon: <FaNodeJs />,  color: "#68a063" },
      { name: "Express.js", icon: <SiExpress />, color: null      },
      { name: "MongoDB",    icon: <SiMongodb />, color: "#4db33d" },
      { name: "Firebase",   icon: <SiFirebase />,color: "#ff9800" },
      { name: "REST API",   icon: <span className="font-bold text-[11px] font-mono leading-none">{`{}`}</span>, color: "#e44d26" },
      { name: "JWT Auth",   icon: <span className="font-bold text-[11px] font-mono leading-none">JWT</span>,    color: "#ffd166" },
    ],
  },
  {
    title: "Tools & DevOps",
    tag: "03",
    skills: [
      { name: "Git / GitHub", icon: <FaGithub />,  color: null      },
      { name: "Postman",      icon: <SiPostman />, color: "#ff6c37" },
      { name: "Vite",         icon: <SiVite />,    color: "#646cff" },
      { name: "Figma",        icon: <FaFigma />,   color: "#f24e1e" },
      { name: "Vercel",       icon: <SiVercel />,  color: null      },
    ],
  },
  {
    title: "CS Fundamentals",
    tag: "04",
    skills: [
      { name: "C",      icon: <SiC />,        color: "#156ceb" },
      { name: "C++",    icon: <SiCplusplus />,color: "#00599c" },
      { name: "Java",   icon: <FaJava />,     color: "#f89820" },
      { name: "Python", icon: <SiPython />,   color: "#f5d04c" },
    ],
  },
];

/* ─── Core stack (right) — NO % or numbers ──────────────── */
const coreFocus = [
  { name: "React.js",    role: "UI Architecture & State",   color: "#61dafb", icon: <FaReact />,       tag: "Frontend"  },
  { name: "Node.js",     role: "Backend Runtime & APIs",    color: "#68a063", icon: <FaNodeJs />,      tag: "Backend"   },
  { name: "MongoDB",     role: "Database & Data Modeling",  color: "#4db33d", icon: <SiMongodb />,     tag: "Database"  },
  { name: "Next.js",     role: "Full-Stack & SSR",          color: "#a8a8b3", icon: <SiNextdotjs />,   tag: "Framework" },
  { name: "Tailwind CSS",role: "Styling & Design Systems",  color: "#38bdf8", icon: <SiTailwindcss />, tag: "CSS"       },
  { name: "Firebase",    role: "Auth & Realtime Services",  color: "#ff9800", icon: <SiFirebase />,    tag: "BaaS"      },
];

/* ─── Animation helpers ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

/* ─── Component ─────────────────────────────────────────── */
const Skills = () => {


  return (
    <section className="relative py-24 bg-base-100 font-poppins overflow-hidden">

      {/* ── Background ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl translate-x-1/3 -translate-y-1/4" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl -translate-x-1/3 translate-y-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Skills &{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Stack</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/15 rounded-sm -z-0" />
            </span>
          </h2>
          <p className="max-w-lg text-sm md:text-base text-base-content/50 leading-relaxed">
            Technologies I use to build robust, scalable, and delightful products — from pixel to production.
          </p>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 items-start">

          {/* ══ LEFT: Skill pills ══ */}
          <motion.div
            className="flex flex-col gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {skillCategories.map((cat, ci) => (
              <motion.div key={ci} variants={fadeUp} custom={ci}>
                {/* Category label */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] font-black text-primary/60 font-mono tracking-widest">
                    {cat.tag}
                  </span>
                  <div className="w-px h-4 bg-base-content/15" />
                  <span className="text-xs font-bold uppercase tracking-[3px] text-base-content/40">
                    {cat.title}
                  </span>
                  <div className="flex-1 h-px bg-base-content/8" />
                </div>

                {/* Pills */}
                <motion.div className="flex flex-wrap gap-2.5" variants={stagger}>
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={si}
                      variants={fadeUp}
                      custom={si}
                      whileHover={{ y: -3, scale: 1.04, transition: { duration: 0.2 } }}
                      className="group relative flex items-center gap-2 bg-base-200 border border-base-content/8 hover:border-primary/40 rounded-full px-4 py-2 text-sm font-medium text-base-content/75 hover:text-base-content transition-all duration-300 cursor-default overflow-hidden"
                    >
                      <span
                        className="text-base flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{ color: skill.color ?? "var(--color-base-content)" }}
                      >
                        {skill.icon}
                      </span>
                      {skill.name}
                      <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-full" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* ══ RIGHT: Clean cards, zero numbers ══ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="sticky top-24 flex flex-col gap-5"
          >

            {/* ── Core Stack card ── */}
            <div className="group relative rounded-2xl bg-base-200 border border-base-content/8 hover:border-primary/30 transition-colors duration-500 p-7 overflow-hidden">
              <div className="pointer-events-none absolute -top-8 -right-8 w-28 h-28 rounded-full bg-primary/10 blur-2xl" />

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-extrabold tracking-tight">Core Stack</h3>
                  <p className="text-[11px] text-base-content/35 mt-0.5">Technologies in production use</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                  In Use
                </span>
              </div>

              {/* Tech rows — icon + name + role + tag badge only */}
              <div className="flex flex-col divide-y divide-base-content/5">
                {coreFocus.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="group/row flex items-center justify-between py-3.5 hover:bg-primary/3 -mx-7 px-7 transition-colors duration-200 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      {/* Colored icon box */}
                      <div
                        className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-base-100 border border-base-content/8 text-[17px] transition-transform duration-300 group-hover/row:scale-110"
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-tight text-base-content">
                          {tech.name}
                        </p>
                        <p className="text-[11px] text-base-content/40 mt-0.5">{tech.role}</p>
                      </div>
                    </div>

                    {/* Tag badge — replaces % completely */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-base-content/35 border border-base-content/10 px-2 py-0.5 rounded-md bg-base-100/60">
                      {tech.tag}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;