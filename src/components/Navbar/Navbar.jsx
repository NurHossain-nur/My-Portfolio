// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from '/nurlogo.png';

const links = [
  { name: "Home",     path: "/"        },
  { name: "About",    path: "/about"   },
  { name: "Projects", path: "/projects"},
  { name: "Contact",  path: "/contact" },
];

const socials = [
  { icon: FaGithub,   href: "https://github.com/NurHossain-nur",            label: "GitHub"   },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nur-hossain-nur/", label: "LinkedIn" },
];

const Navbar = () => {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [theme,           setTheme]           = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const location = useLocation();

  /* ── Theme ── */
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  /* ── Scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile on navigate ── */
  useEffect(() => { setMobileOpen(false); }, [location]);

  /* ── Lock body scroll when mobile open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 font-poppins transition-all duration-500 ${
          scrolled
            ? "bg-base-100/80 backdrop-blur-xl border-b border-base-content/8 py-3 shadow-lg shadow-base-content/5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">

          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            <div className="w-18 h-9 rounded-xl overflow-hidden border border-base-content/10 group-hover:border-primary/40 transition-colors duration-300 flex-shrink-0 ">
              <img src={logo} alt="Nur Hossain" className="w-full h-full object-cover " />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-extrabold tracking-tight text-base-content group-hover:text-primary transition-colors duration-300">
                Nur<span className="text-primary">.</span>
              </span>
              <span className="text-[9px] text-base-content/35 uppercase tracking-[2px] font-semibold">
                Developer
              </span>
            </div>
          </Link>

          {/* ── Desktop nav links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative flex items-center px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/8"
                        : "text-base-content/55 hover:text-base-content hover:bg-base-content/5"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="navPill"
                          className="absolute inset-0 rounded-xl bg-primary/8 -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-2 flex-shrink-0">

            {/* Social icons — desktop only */}
            <div className="hidden lg:flex items-center gap-1 mr-1">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-base-content/40 hover:text-primary hover:bg-primary/8 transition-all duration-200 text-sm"
                >
                  <s.icon />
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-5 bg-base-content/10" />

            {/* Theme toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              whileTap={{ scale: 0.88 }}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-base-200 border border-base-content/8 hover:border-primary/40 hover:bg-primary/8 transition-all duration-300 overflow-hidden relative"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.span
                    key="moon"
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0,  opacity: 1 }}
                    exit={{   y: -12, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute text-blue-400 text-sm"
                  >
                    <FaMoon />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0,  opacity: 1 }}
                    exit={{   y: -12, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute text-amber-400 text-sm"
                  >
                    <FaSun />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Resume button — desktop */}
            <motion.a
              href="/Nur_Hossain_Resume_Final.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-base-100 bg-primary hover:brightness-110 px-4 py-2 rounded-xl shadow-md shadow-primary/20 hover:shadow-primary/35 transition-all duration-300"
            >
              Résumé <FaDownload className="text-[10px]" />
            </motion.a>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.88 }}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-base-200 border border-base-content/8 hover:border-primary/40 transition-all duration-300 text-base-content/70 text-lg"
            >
              {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-base-100/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-base-100 border-l border-base-content/8 shadow-2xl flex flex-col md:hidden font-poppins"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-base-content/8">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl overflow-hidden border border-base-content/10">
                    <img src={logo} alt="Nur Hossain" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm font-extrabold tracking-tight">
                    Nur<span className="text-primary">.</span>
                  </span>
                </div>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.88 }}
                  className="w-8 h-8 flex items-center justify-center rounded-xl bg-base-200 border border-base-content/8 text-base-content/50 hover:text-primary text-base"
                >
                  <HiX />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? "text-primary bg-primary/8 border border-primary/15"
                            : "text-base-content/60 hover:text-base-content hover:bg-base-content/5"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.name}</span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="px-4 pb-8 flex flex-col gap-4"
              >
                {/* Availability badge */}
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/8 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-500">Open to opportunities</span>
                </div>

                {/* Resume CTA */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-bold text-base-100 bg-primary hover:brightness-110 px-5 py-3 rounded-xl shadow-md shadow-primary/20 transition-all duration-300"
                >
                  Download Résumé <FaDownload className="text-xs" />
                </a>

                {/* Socials */}
                <div className="flex items-center justify-center gap-3 pt-1">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-base-200 border border-base-content/8 text-base-content/40 hover:text-primary hover:border-primary/40 transition-all duration-200 text-base"
                    >
                      <s.icon />
                    </a>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;