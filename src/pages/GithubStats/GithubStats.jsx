// src/components/GithubStats.jsx
import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import {
  FaCodeBranch,
  FaStar,
  FaFire,
  FaTerminal,
} from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

/* ─── GitHub username ───────────────────────────────────── */
const USERNAME = "NurHossain-nur";

/* ─── Static showcase stats (edit freely) ──────────────── */
const STATS = [
  { icon: <FaFire />,       label: "Total Commits",   value: "1,200+" },
  { icon: <FaCodeBranch />, label: "Repositories",    value: "40+"    },
  { icon: <FaStar />,       label: "Stars Earned",    value: "120+"   },
  { icon: <FaTerminal />,   label: "Pull Requests",   value: "85+"    },
];

/* ─── Card animation variants ───────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const GithubStats = () => {
  const [colorMode, setColorMode] = useState("dark");

  useEffect(() => {
    const check = () => {
      const t = document.documentElement.getAttribute("data-theme");
      setColorMode(t === "light" ? "light" : "dark");
    };
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-24 bg-base-100 overflow-hidden font-poppins">

      {/* ── Background texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow blob */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl translate-x-1/4 translate-y-1/4" />
      <div className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl -translate-x-1/3 -translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6">

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
            Open Source
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            My{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">GitHub</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/15 rounded-sm -z-0" />
            </span>{" "}
            Journey
          </h2>

          <p className="max-w-lg text-sm md:text-base text-base-content/50 leading-relaxed">
            Every square tells a story — consistency, curiosity, and code shipped every single day.
          </p>

          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/80 hover:text-primary transition-colors duration-200"
          >
            @{USERNAME}
            <HiOutlineExternalLink className="text-base" />
          </a>
        </motion.div>

        {/* ── Stat cards ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col items-center justify-center gap-2 py-6 px-4 rounded-2xl bg-base-200 border border-base-content/8 hover:border-primary/40 transition-colors duration-300 overflow-hidden text-center"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-base-content">
                {s.value}
              </span>
              <span className="text-xs font-medium text-base-content/45 uppercase tracking-wider">
                {s.label}
              </span>

              {/* Hover bottom line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Contribution calendar card ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="group relative rounded-2xl bg-base-200 border border-base-content/8 hover:border-primary/30 transition-colors duration-300 overflow-hidden p-6 md:p-8"
        >
          {/* Card header */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-base-content/70 uppercase tracking-widest">
                Contribution Graph
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-base-content/40">Less</span>
              {["bg-base-content/10", "bg-primary/25", "bg-primary/50", "bg-primary/75", "bg-primary"].map((c, i) => (
                <span key={i} className={`w-3 h-3 rounded-sm ${c}`} />
              ))}
              <span className="text-xs text-base-content/40">More</span>
            </div>
          </div>

          {/* Calendar */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[600px]">
              <GitHubCalendar
                username={USERNAME}
                blockSize={14}
                blockMargin={5}
                fontSize={14}
                colorScheme={colorMode}
                theme={{
                  light: [
                    "#ebedf0",
                    "#9be9a8",
                    "#40c463",
                    "#30a14e",
                    "#216e39",
                  ],
                  dark: [
                    "#1a1a2e",
                    "#0e4429",
                    "#006d32",
                    "#26a641",
                    "#34d399",
                  ],
                }}
                style={{ width: "100%" }}
              />
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-10 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={6}
        >
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            View Full Profile on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default GithubStats;