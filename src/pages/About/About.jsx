// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode, FaServer, FaBasketballBall,
  FaMapMarkerAlt, FaGraduationCap, FaDownload,
  FaChessKnight,
} from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiNodedotjs } from "react-icons/si";

/* ─── Animation helpers ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const slideIn = (dir = -1) => ({
  hidden: { opacity: 0, x: 40 * dir },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

/* ─── Data ──────────────────────────────────────────────── */
const stats = [
  { value: "2+",   label: "Years\nCoding",       color: "text-primary"   },
  { value: "15+",  label: "Projects\nShipped",    color: "text-secondary" },
  { value: "10+",  label: "Tech\nMastered",       color: "text-accent"    },
  { value: "100%", label: "Dedication",           color: "text-primary"   },
];

const stack = [
  { icon: <SiReact />,     label: "React",    color: "#61dafb" },
  { icon: <SiNextdotjs />, label: "Next.js",  color: null      },
  { icon: <SiTailwindcss />,label:"Tailwind", color: "#38bdf8" },
  { icon: <SiNodedotjs />, label: "Node.js",  color: "#68a063" },
  { icon: <SiMongodb />,   label: "MongoDB",  color: "#4db33d" },
];

const cards = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Craft",
    text: "I build responsive, pixel-perfect interfaces using React & Tailwind — with smooth animations and a relentless focus on user experience.",
    accent: "primary",
  },
  {
    icon: <FaServer />,
    title: "Backend Integration",
    text: "I connect apps to robust backends using Node.js, Express, and MongoDB — making data flow seamlessly from server to screen.",
    accent: "secondary",
  },
  {
    icon: <FaChessKnight />, // Swapped to a chess icon
    title: "Beyond the Screen",
    text: "When I'm not debugging, you'll find me strategizing over a game of chess, playing carrom board, or enjoying cricket. This mix of tactical thinking and active play keeps my problem-solving sharp.",
    accent: "accent",
  },
];

/* ─── Component ─────────────────────────────────────────── */
const About = () => {
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
      <div className="pointer-events-none absolute -top-32 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -translate-x-1/3" />
      <div className="pointer-events-none absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl translate-x-1/3" />

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
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            The Person{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Behind the Code</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/15 rounded-sm -z-0" />
            </span>
          </h2>
          <p className="max-w-lg text-sm md:text-base text-base-content/50 leading-relaxed">
            A developer who cares deeply about craft, quality, and the human experience at the other end of every interface.
          </p>
        </motion.div>

        {/* ── Main two-column ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">

          {/* LEFT: Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn(-1)}
            className="flex flex-col gap-6"
          >
            {/* Identity badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-base-content/50 bg-base-200 border border-base-content/8 px-3 py-1.5 rounded-full">
                <FaMapMarkerAlt className="text-primary text-[10px]" />
                Dinajpur, Bangladesh
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-base-content/50 bg-base-200 border border-base-content/8 px-3 py-1.5 rounded-full">
                <FaGraduationCap className="text-secondary text-[10px]" />
                3rd Year · CSE Student
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to Opportunities
              </span>
            </div>

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4 text-sm text-base-content/60 leading-relaxed">
              <p>
                Hello! I'm{" "}
                <span className="text-base-content font-semibold">Nur Hossain</span>
                {" "}— a passionate{" "}
                <span className="text-primary font-semibold">Full-Stack Web Developer</span>
                {" "}from Bangladesh. I bridge the gap between complex backend logic and intuitive frontend design, always keeping the end user in mind.
              </p>
              <p>
                My journey started with simple HTML & CSS, but curiosity pushed me deep into the modern stack. Today I build{" "}
                <span className="text-primary font-medium">production-grade applications</span>
                {" "}using React, Next.js, Node.js, and MongoDB — with a focus on clean architecture and scalable code.
              </p>
              <p>
                I don't just ship features — I care about{" "}
                <span className="text-accent font-medium italic">software quality</span>,
                {" "}performance, and maintainability. My goal is to contribute to forward-thinking teams and eventually build my own tech startup.
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {stack.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2, scale: 1.04 }}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-base-200 border border-base-content/8 hover:border-primary/40 rounded-full text-xs font-semibold text-base-content/70 hover:text-base-content transition-all duration-200 cursor-default"
                >
                  <span style={{ color: s.color ?? "var(--color-base-content)" }} className="text-sm">
                    {s.icon}
                  </span>
                  {s.label}
                </motion.div>
              ))}
            </div>

            {/* Resume CTA */}
            <div className="pt-2">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-bold text-primary border border-primary/30 hover:bg-primary hover:text-base-100 px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-primary/20"
              >
                <FaDownload className="text-xs" />
                Download Résumé
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Stats bento grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn(1)}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-base-200 border border-base-content/8 hover:border-primary/30 transition-all duration-300 overflow-hidden ${
                  i === 3 ? "col-span-2" : ""
                }`}
              >
                {/* Big value */}
                <span className={`text-5xl md:text-6xl font-extrabold leading-none mb-2 ${s.color}`}>
                  {s.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-base-content/40 whitespace-pre-line leading-relaxed">
                  {s.label}
                </span>

                {/* Hover bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom feature cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative flex flex-col gap-4 p-7 rounded-2xl bg-base-200 border border-base-content/8 hover:border-${card.accent}/40 transition-all duration-300 overflow-hidden`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-${card.accent}/10 text-${card.accent} text-xl group-hover:bg-${card.accent} group-hover:text-base-100 transition-all duration-300`}>
                {card.icon}
              </div>

              <div>
                <h3 className="text-base font-extrabold tracking-tight mb-1.5">
                  {card.title}
                </h3>
                <p className="text-sm text-base-content/50 leading-relaxed">
                  {card.text}
                </p>
              </div>

              {/* Watermark number */}
              <span className="absolute bottom-3 right-4 text-6xl font-black text-base-content/[0.035] select-none leading-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Hover bottom line */}
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-${card.accent} group-hover:w-full transition-all duration-500 ease-out`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;