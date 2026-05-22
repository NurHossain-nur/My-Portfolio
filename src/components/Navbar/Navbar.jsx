// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router"; 
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload, FaSun, FaMoon } from "react-icons/fa";
import logo from '/nur-logo1.png'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const location = useLocation();

  // 1. Handle Theme Toggle
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // 2. Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-base-100/80 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6  flex items-center justify-between">
          
          {/* --- Logo --- */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-transparent group-hover:border-primary transition-all duration-300">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
             <span className="text-xl font-bold tracking-wide hidden sm:block group-hover:text-primary transition-colors">Nur Hossain</span>
          </Link>

          {/* --- Desktop Navigation --- */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-gray-400 hover:text-base-content"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeDot"
                          className="absolute -bottom-2 left-1/2 w-1.5 h-1.5 bg-primary rounded-full transform -translate-x-1/2"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* --- Right Actions --- */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle Button (Desktop & Mobile) */}
            <button 
              onClick={toggleTheme} 
              className="btn btn-ghost btn-circle btn-sm text-xl transition-transform active:scale-90"
              aria-label="Toggle Theme"
            >
              <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
                {/* Sun Icon */}
                <motion.div
                  initial={false}
                  animate={{ y: theme === "dark" ? 30 : 0, opacity: theme === "dark" ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <FaSun className="text-yellow-500" />
                </motion.div>
                
                {/* Moon Icon */}
                <motion.div
                   initial={false}
                   animate={{ y: theme === "dark" ? 0 : -30, opacity: theme === "dark" ? 1 : 0 }}
                   transition={{ duration: 0.3 }}
                   className="absolute"
                >
                  <FaMoon className="text-blue-400" />
                </motion.div>
              </div>
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 btn btn-primary btn-sm rounded-full px-5 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              Resume <FaDownload size={12} />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl text-base-content focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-base-100/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <NavLink
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-3xl font-bold ${
                      isActive ? "text-primary" : "text-base-content"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 items-center"
            >
                {/* Resume in Mobile Menu */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-primary px-8 text-lg"
                >
                  Download Resume
                </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;