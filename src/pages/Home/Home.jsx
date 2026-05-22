// src/components/Home.jsx
import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaDownload, FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import heroImg from "../../assets/nurrrrr.png";
import CodeEditorIntro from "./CodeEditorIntro ";

const socials = [
  { icon: FaGithub,   href: "https://github.com/NurHossain-nur",            label: "GitHub"   },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nur-hossain-nur/", label: "LinkedIn" },
  { icon: FaTwitter,  href: "https://x.com/2202002Nur",                     label: "Twitter"  },
  { icon: FaFacebook, href: "https://facebook.com/Mr.NuR07",                label: "Facebook" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Home = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imgY  = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imgOp = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-base-100 text-base-content font-poppins overflow-hidden pt-28 pb-24 px-6"
    >

      {/* ── Background layers ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <div className="pointer-events-none absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/8 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(135deg, var(--color-primary) 0px, var(--color-primary) 1px, transparent 1px, transparent 60px)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto p-6 w-full flex flex-col gap-12">

        {/* ══ TOP: Two-column hero ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* ── LEFT: Text content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Pill */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                MERN Stack Developer · Open to Work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} className="mb-7">
              <h1 className="text-[clamp(40px,5vw,72px)] font-extrabold leading-[1.06] tracking-tight">
                <span className="block text-base-content">Full Stack</span>
                <span className="block text-primary relative w-fit">
                  Developer
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 320 12" fill="none" aria-hidden="true">
                    <path d="M2 9 C60 3, 160 1, 318 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary opacity-40" />
                  </svg>
                </span>
              </h1>

              {/* Outline typewriter */}
              <div
                className="mt-4 text-[clamp(20px,2.8vw,34px)] font-extrabold leading-tight flex gap-2 opacity-20 dark:opacity-15"
                style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "2px var(--color-base-content)" }}
              >
                <span>&</span>
                <Typewriter
                  options={{
                    strings: ["Builder.", "Problem Solver.", "Innovator.", "Maker."],
                    autoStart: true, loop: true, delay: 50, deleteSpeed: 30,
                  }}
                />
              </div>
            </motion.div>

            {/* Bio line */}
            <motion.p variants={item} className="text-sm text-base-content/50 leading-relaxed mb-7 max-w-md">
              I build fast, beautiful, and scalable web apps using React, Next.js, Node.js & MongoDB — pixel to production.
            </motion.p>

            {/* Social icons */}
            <motion.div variants={item} className="flex gap-2.5 mb-8">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-base-200 border border-base-content/8 text-base-content/50 hover:text-primary hover:border-primary/40 transition-colors duration-300 text-base"
                >
                  <s.icon />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 text-sm font-bold text-base-100 bg-primary px-7 py-3.5 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:brightness-110 transition-all duration-300"
              >
                View Projects <FaArrowRight className="text-xs" />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/70 hover:text-primary border border-base-content/10 hover:border-primary/40 px-7 py-3.5 rounded-full transition-all duration-300"
              >
                <FaDownload className="text-xs" /> Résumé
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Image ── */}
          <motion.div
            style={{ y: imgY, opacity: imgOp }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-primary/15"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-secondary/10"
            />

            {/* Glow */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-primary/15 blur-[60px]" />

            {/* Photo */}
            <div className="relative z-10 w-[300px] h-[300px] lg:w-[340px] lg:h-[340px] rounded-2xl overflow-hidden border border-base-content/10 shadow-2xl">
              <img src={heroImg} alt="Nur Hossain" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-base-100/20 via-transparent to-transparent" />
            </div>

            {/* Badge: Open to Work */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 z-20 flex items-center gap-2.5 px-4 py-2.5 bg-base-200 border border-primary/20 rounded-2xl shadow-xl backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <p className="text-[10px] text-base-content/40 uppercase tracking-wider font-semibold leading-none mb-0.5">Status</p>
                <p className="text-xs font-bold text-base-content leading-none">Open to Work</p>
              </div>
            </motion.div>

            {/* Badge: Web Security */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2.5 px-4 py-2.5 bg-base-200 border border-secondary/20 rounded-2xl shadow-xl backdrop-blur-sm"
            >
              <span className="text-lg">🔐</span>
              <div>
                <p className="text-[10px] text-base-content/40 uppercase tracking-wider font-semibold leading-none mb-0.5">Also into</p>
                <p className="text-xs font-bold text-base-content leading-none">Web Security</p>
              </div>
            </motion.div>

            {/* Badge: Techs */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-8 z-20 -translate-y-1/2 flex flex-col items-center justify-center w-16 h-16 bg-base-200 border border-accent/20 rounded-2xl shadow-xl backdrop-blur-sm"
            >
              <span className="text-lg font-extrabold text-accent leading-none">20+</span>
              <span className="text-[9px] text-base-content/40 font-semibold uppercase tracking-wider leading-none mt-0.5">Techs</span>
            </motion.div>
          </motion.div>
        </div>

        {/* ══ BOTTOM: Code editor — full width ══ */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="w-full"
        >
          {/* Label above editor */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 h-px bg-base-content/8" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-base-content/25">
              developer.js — live preview
            </span>
            <div className="flex-1 h-px bg-base-content/8" />
          </div>

          <CodeEditorIntro />
        </motion.div>

      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-[10px] uppercase tracking-[3px] text-base-content/25 font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent rounded-full"
        />
      </motion.div>

    </section>
  );
};

export default Home;