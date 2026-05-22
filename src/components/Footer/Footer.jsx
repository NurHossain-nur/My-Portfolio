// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaHeart, FaCode } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { motion } from "framer-motion";

const YEAR = new Date().getFullYear();

const navLinks = [
  { label: "About",    href: "/about"    },
  // { label: "Services", href: "#services" },
  { label: "Projects", href: "/projects" },
  // { label: "GitHub",   href: "#github"   },
  { label: "Contact",  href: "/contact"  },
];

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/NurHossain-nur",
    label: "GitHub",
    hover: "hover:bg-base-content/10 hover:text-base-content",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/nur-hossain-nur/",
    label: "LinkedIn",
    hover: "hover:bg-blue-500/15 hover:text-blue-500",
  },
  {
    icon: <FaFacebook />,
    href: "https://facebook.com/Mr.NuR07",
    label: "Facebook",
    hover: "hover:bg-sky-500/15 hover:text-sky-500",
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-base-200 border-t border-base-content/8 font-poppins overflow-hidden">

      {/* ── Background dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14 pb-8">

        {/* ── Top row ── */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 pb-10 border-b border-base-content/8">

          {/* Brand block */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-base-content">
                Nur<span className="text-primary">.</span>
              </span>
              <p className="text-xs text-base-content/40 mt-2 leading-relaxed">
                Full-stack developer crafting fast, beautiful, and purposeful digital experiences — one commit at a time.
              </p>
            </div>

            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 self-start text-xs font-semibold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to opportunities
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-base-content/35 mb-1">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-base-content/50 hover:text-primary transition-colors duration-200 w-fit relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Contact quick info */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-base-content/35 mb-1">
              Contact
            </p>
            <a
              href="mailto:nur.hossain.dev@email.com"
              className="text-sm text-base-content/50 hover:text-primary transition-colors duration-200"
            >
              nur.hossain.dev@email.com
            </a>
            <a
              href="tel:+8801701593102"
              className="text-sm text-base-content/50 hover:text-primary transition-colors duration-200"
            >
              +880 1701-593102
            </a>
            <span className="text-sm text-base-content/50">
              Dinajpur, Bangladesh
            </span>

            {/* Social icons */}
            <div className="flex gap-2 mt-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl border border-base-content/10 text-base-content/40 text-base transition-all duration-300 ${s.hover}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7">

          {/* Copyright */}
          <p className="text-xs text-base-content/35 flex items-center gap-1.5">
            © {YEAR} Nur Hossain. Built with
            <FaHeart className="text-red-500 animate-pulse text-[10px]" />
            &amp;
            <FaCode className="text-primary text-[10px]" />
            in Bangladesh.
          </p>

          {/* Stack badges */}
          <div className="hidden sm:flex items-center gap-2">
            {["React", "Tailwind", "Framer Motion"].map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-semibold text-base-content/30 border border-base-content/10 px-2.5 py-1 rounded-full uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-xs font-semibold text-primary border border-primary/30 hover:bg-primary hover:text-white px-3 py-1.5 rounded-full transition-all duration-300"
          >
            <HiArrowUp className="text-sm" />
            Back to top
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;