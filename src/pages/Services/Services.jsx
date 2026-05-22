// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    tag: "Full-Stack",
    desc: "Building fast, SEO-friendly websites and apps using React, Next.js, and the MERN stack — clean architecture, optimized performance.",
    highlights: ["React / Next.js", "Node.js & Express", "MongoDB & REST APIs"],
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Implementation",
    tag: "Pixel-Perfect",
    desc: "Converting Figma and Adobe XD designs into precise, interactive interfaces with smooth animations and accessible markup.",
    highlights: ["Figma → Code", "Framer Motion", "Tailwind & DaisyUI"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    tag: "All Devices",
    desc: "Crafting layouts that feel native on every screen — from compact mobile viewports to ultra-wide desktops.",
    highlights: ["Mobile-First", "Cross-Browser", "Fluid Layouts"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const Services = () => {
  return (
    <section className="relative py-24 bg-base-100 overflow-hidden font-poppins">

      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow orb */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            What I{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Build</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/15 rounded-sm -z-0" />
            </span>
            {" "}for You
          </h2>
          <p className="max-w-xl text-sm md:text-base text-base-content/50 leading-relaxed">
            From concept to deployment — I craft digital experiences that are fast, beautiful, and built to last.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative flex flex-col bg-base-200 border border-base-content/8 hover:border-primary/40 rounded-2xl p-7 transition-colors duration-300 overflow-hidden"
            >
              {/* Card number watermark */}
              <span className="absolute top-4 right-5 text-6xl font-black text-base-content/5 select-none leading-none group-hover:text-primary/10 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Title & desc */}
              <h3 className="text-lg font-bold mb-2 tracking-tight">{item.title}</h3>
              <p className="text-sm text-base-content/50 leading-relaxed mb-6">{item.desc}</p>

              {/* Highlights */}
              <ul className="mt-auto flex flex-col gap-2">
                {item.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-base-content/60">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 ease-out rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            Let's work together
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;