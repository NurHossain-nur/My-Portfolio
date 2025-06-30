// src/pages/Projects.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import garden1 from '../../../public/project/gardenhub1.PNG'
import garden2 from '../../../public/project/gardenhub2.PNG'
import garden3 from '../../../public/project/garedenhub3.PNG'
import garden4 from '../../../public/project/gardenhub4.PNG'
import garden5 from '../../../public/project/gardenhub5.PNG'
// import { image } from "framer-motion/client";

const projectData = [
  {
    id: 1,
    title: "GardenHub Community",
    description:
      "A complete gardening platform where users can share tips, follow gardeners, and like or comment on posts. Features authentication, dashboard, CRUD operations, and dark/light mode.",
    tech: ["React", "Tailwind", "Firebase", "MongoDB"],
    // images: ["/project/gardenhub1.png", "/projects/garden2.png", "/projects/garden3.png"],
    images: [garden1, garden2, garden3, garden4, garden5 ],
    live: "https://garden-hub-f812a.web.app",
    gitClient: "https://github.com/NurHossain-nur/garden-hub-client",
    gitServer: "https://github.com/NurHossain-nur/garden-hub-server",
  },
  {
    id: 2,
    title: "GTA 6 GameBox",
    description:
      "A fictional GTA subscription platform offering protected routes, user login, animated cards, and user reviews. Firebase used for auth and hosting.",
    tech: ["React", "DaisyUI", "Firebase", "AOS"],
    images: ["/project/gta1.PNG", "/project/gta2.PNG", "/project/gta3.PNG"],
    live: "https://sublygta6.netlify.app/",
    gitClient: "https://github.com/NurHossain-nur/subly",
    gitServer: "https://github.com/NurHossain-nur/gta6-server",
  },
  {
    id: 3,
    title: "Service Review System",
    description:
      "Users can add services and reviews. Features include login with Firebase, JWT-protected routes, update/delete options, and animated UI components.",
    tech: ["React", "MongoDB", "Express", "JWT"],
    images: ["/project/srv1.PNG", "/project/srv2.PNG", "/project/srv3.PNG", "/project/srv4.PNG"],
    live: "https://service-revew.web.app/",
    gitClient: "https://github.com/NurHossain-nur/service-review-client",
    gitServer: "https://github.com/NurHossain-nur/service-review-server",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 80, duration: 600 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto bg-base-100 text-base-content px-6 md:px-8 py-20 font-poppins mt-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">
        My Projects
      </h2>

      <div className="space-y-16  max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row gap-8 items-center bg-base-200 shadow-lg rounded-xl overflow-hidden p-6"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Left: Image Slider */}
            <div className="w-full md:w-1/2">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="rounded-xl overflow-hidden"
              >
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`Slide ${i}`}
                      className="w-full h-64 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right: Project Info */}
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
              <p className="text-sm text-gray-600 ">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="badge badge-outline text-sm border-secondary text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.gitClient}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm text-primary"
                >
                  GitHub Client
                </a>
                <a
                  href={project.gitServer}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm text-primary"
                >
                  GitHub Server
                </a>
                <Link to={`/projects/${project.id}`} className="btn btn-secondary btn-sm">
                  View Full Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
