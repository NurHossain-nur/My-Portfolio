import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,

} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiVite,
  SiC,
  SiCplusplus,
//   SiCsharp,
//   SiJava,
  SiPython,
} from "react-icons/si";

// import { DiCsharp } from "react-icons/di";
import { FaJava } from "react-icons/fa";

const Skills = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 80, duration: 600 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto bg-base-100 text-base-content px-6 md:px-8 py-20 font-poppins">
      <h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        data-aos="fade-up"
      >
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {/* Frontend */}
        <div
          className="card bg-base-200 shadow-md"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="card-body">
            <h3 className="text-xl font-bold text-primary">Frontend</h3>
            <p className="text-sm text-slate-500 mt-1">
              Frameworks and tools I use to build fast, modern interfaces.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4 text-4xl text-center text-secondary">
              <FaHtml5 title="HTML5" tabIndex={0} />
              <FaCss3Alt title="CSS3" tabIndex={0} />
              <FaJs title="JavaScript" tabIndex={0} />
              <FaReact title="React" tabIndex={0} />
              <SiTailwindcss title="Tailwind CSS" tabIndex={0} />
              <SiRedux title="Redux" tabIndex={0} />
            </div>
          </div>
        </div>

        {/* Backend */}
        <div
          className="card bg-base-200 shadow-md"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="card-body">
            <h3 className="text-xl font-bold text-primary">Backend</h3>
            <p className="text-sm text-slate-500 mt-1">
              Technologies I use for data handling, authentication, and APIs.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4 text-4xl text-center text-secondary">
              <FaNodeJs title="Node.js" tabIndex={0} />
              <SiFirebase title="Firebase" tabIndex={0} />
              <SiMongodb title="MongoDB" tabIndex={0} />
            </div>
          </div>
        </div>

        {/* Tools */}
        <div
          className="card bg-base-200 shadow-md"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="card-body">
            <h3 className="text-xl font-bold text-primary">Tools</h3>
            <p className="text-sm text-slate-500 mt-1">
              Essential tools that support my development workflow.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4 text-4xl text-center text-secondary">
              <FaGithub title="GitHub" tabIndex={0} />
              <FaFigma title="Figma" tabIndex={0} />
              <SiVite title="Vite" tabIndex={0} />
            </div>
          </div>
        </div>

        {/* Languages */}
        <div
          className="card bg-base-200 shadow-md"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="card-body">
            <h3 className="text-xl font-bold text-primary">Languages</h3>
            <p className="text-sm text-slate-500 mt-1">
              Programming languages I know.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4 text-4xl text-center text-secondary">
              <SiC title="C" tabIndex={0} />
              <SiCplusplus title="C++" tabIndex={0} />
              {/* <DiCsharp   title="C#" tabIndex={0} /> */}
              <FaJava  title="Java" tabIndex={0} />
              <SiPython title="Python" tabIndex={0} />
              <FaJs title="JavaScript" tabIndex={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
