// src/components/Navbar.jsx
import { Link, NavLink } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '/nur-logo1.png';

const Navbar = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 0 });
  }, []);

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
    isActive
      ? "border-b-2 border-primary pb-1 text-primary transition-all duration-300"
      : "hover:text-primary pb-1"
  }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
    isActive
      ? "border-b-2 border-primary pb-1 text-primary transition-all duration-300"
      : "hover:text-primary pb-1"
  }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
    isActive
      ? "border-b-2 border-primary pb-1 text-primary transition-all duration-300"
      : "hover:text-primary pb-1"
  }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
    isActive
      ? "border-b-2 border-primary pb-1 text-primary transition-all duration-300"
      : "hover:text-primary pb-1"
  }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className="bg-base-100 shadow-sm fixed top-0 z-50 w-full"
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="800"
    >
      <div className="navbar px-4 md:px-8 mx-auto max-w-7xl">
        {/* Left: Logo */}
        <div className="flex-1 w-6 h-6">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-primary tracking-wide"
          >
            {/* Nur<span className="text-secondary">Dev</span> */}
            <img className="w-fit h-full " src={logo} alt="" />
          </Link>
        </div>

        {/* Center: Navigation */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal px-1 text-sm font-medium gap-2">
            {navLink}
          </ul>
        </div>

        {/* Right: Resume Button & Mobile Menu */}
        <div className="flex-none gap-2">
          <a
            href="https://your-resume-link.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary hidden md:inline-flex"
          >
            Download Resume
          </a>

          {/* Mobile Dropdown */}
          <div className="dropdown dropdown-end lg:hidden">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle hover:bg-primary border-none ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
              <li>
                <a
                  href="https://your-resume-link.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
