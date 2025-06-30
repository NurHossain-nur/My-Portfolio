import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import heroImg from "../../assets/nurrrrr.png"; // Replace with your actual image
import Typewriter from "typewriter-effect";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeEditorIntro from "./CodeEditorIntro ";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 80,
      duration: 600,
    });
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-8  bg-base-100 text-base-content font-poppins max-w-7xl mx-auto mt-20">

      {/* Left Section */}
      <div className="space-y-6 w-full md:w-1/2">
        <p data-aos="fade-up" data-aos-delay="50" className="text-lg md:text-xl text-base-content mb-1">
  Hello, I'm
</p>

        <h1
          className="text-4xl md:text-6xl font-bold text-neutral"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Nur Hossain
        </h1>

        <h2
          className="text-2xl md:text-3xl font-semibold text-primary"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          And I'm a{" "}
          <span className="text-secondary">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "Web Developer", "React Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>

        {/* <p
          className="text-base md:text-lg text-slate-600  max-w-md leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I build clean, modern, and responsive web apps using React, Tailwind, and Firebase.
          I'm passionate about solving real-world problems through code.
        </p> */}

        {/* Description in Code Editor Style */}
{/* Description in Code Editor Style with Typewriter */}
{/* <div
  className="bg-gray-900 border border-gray-700 rounded-lg shadow-md overflow-hidden max-w-lg"
  data-aos="fade-up"
  data-aos-delay="300"
>
  <div className="bg-gray-800 px-4 py-2 flex justify-between items-center text-white">
    <span className="text-sm font-semibold">intro.js</span>
    <div className="space-x-1">
      <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
      <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
      <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
    </div>
  </div>

  <div className="px-6 py-4 font-mono text-green-300 text-sm whitespace-pre-wrap leading-relaxed">
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(`const aboutMe = {\n`)
          .pauseFor(300)
          .typeString(`  focus: "Clean, modern & responsive web apps",\n`)
          .pauseFor(300)
          .typeString(`  stack: ["React", "Tailwind", "Firebase"],\n`)
          .pauseFor(300)
          .typeString(`  passion: "Solving real-world problems through code"\n`)
          .typeString(`};`)
          .start();
      }}
      options={{
        delay: 30,
        cursor: "_",
        loop: false,
      }}
    />
  </div>
</div> */}

<CodeEditorIntro></CodeEditorIntro>



        {/* Social Icons */}
        <div
          className="flex gap-4 text-2xl mt-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a href="https://github.com/NurHossain-nur" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/nur-hossain-nur/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-primary transition-colors" />
          </a>
          <a href="https://x.com/2202002Nur" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter className="hover:text-primary transition-colors" />
          </a>
          <a href="https://facebook.com/Mr.NuR07" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook className="hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Action Buttons */}
        <div
          className="mt-6 flex flex-wrap gap-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <a
            href="https://your-resume-link.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Download Resume
          </a>
          <a
            href="/contact"
            className="btn btn-outline btn-secondary"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right: Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <img
          src={heroImg}
          alt="Nur Hossain"
          className="rounded-2xl shadow-xl w-full max-w-sm md:max-w-md transition-transform hover:scale-105 duration-300"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default Home;
