// src/pages/ProjectDetails.jsx
import { useParams, Link, useNavigate } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    id: "1",
    title: "GardenHub Community",
    description:
      "A complete gardening hub for tip-sharing, reviewing, and connecting with fellow gardeners. Built with MERN stack, includes dashboards, dark/light toggle, and full authentication.",
    images: ["/project/gardenhub1.PNG", "/project/gardenhub2.PNG", "/project/garedenhub3.PNG", "/project/gardenhub4.PNG", "/project/gardenhub5.PNG"],
    tech: ["React", "Tailwind", "Firebase", "MongoDB"],
    live: "https://garden-hub-f812a.web.app/",
    gitClient: "https://github.com/NurHossain-nur/garden-hub-client",
    gitServer: "https://github.com/NurHossain-nur/garden-hub-server",
    features: [
      "User authentication (Firebase)",
      "Dashboard with CRUD",
      "Like & review system",
      "Dark/Light toggle",
      "Mobile responsive",
    ],
    challenges: [
      "Handling conditional rendering for different user roles",
      "Optimizing Firebase auth flow",
    ],
    improvements: [
      "Add comment replies and notification system",
      "Implement role-based access control",
    ],
  },
  {
    id: "2",
    title: "GTA 6 GameBox",
    description:
      "A fictional game subscription platform for GTA lovers. Includes secure routing, animated sections, and dynamic plan selection. Firebase used for auth and hosting.",
    images: ["/project/gta1.PNG", "/project/gta2.PNG", "/project/gta3.PNG"],
    tech: ["React", "DaisyUI", "Firebase", "AOS"],
    live: "https://sublygta6.netlify.app/",
    gitClient: "https://github.com/NurHossain-nur/subly",
    gitServer: "https://github.com/NurHossain-nur/gta6-server",
    features: [
      "Animated hero and pricing cards",
      "Google/email login",
      "Protected detail pages",
      "User reviews and rating",
    ],
    challenges: [
      "Firebase auth integration with AOS animation",
      "Handling secure routes with React Router",
    ],
    improvements: ["Add Stripe payments", "Admin dashboard to manage users"],
  },
  {
    id: "3",
    title: "Service Review System",
    description:
      "A secure platform to add services and post reviews. Includes JWT-based API protection, CRUD dashboard, and personalized review management.",
    images: ["/project/srv1.PNG", "/project/srv2.PNG", "/project/srv3.PNG", "/project/srv4.PNG"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://service-revew.web.app/",
    gitClient: "https://github.com/NurHossain-nur/service-review-client",
    gitServer: "https://github.com/NurHossain-nur/service-review-server",
    features: [
      "Add/Update/Delete services",
      "JWT auth-protected routes",
      "Separate user dashboards",
      "Review-based system",
    ],
    challenges: [
      "Setting up JWT token interceptor",
      "Building secure update/delete flows",
    ],
    improvements: ["Add search/filter", "Add admin analytics section"],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ once: true, duration: 600, offset: 100 });
  }, []);

  if (!project) return <p className="text-center text-error">Project not found</p>;

  return (
    <div className=" max-w-7xl mx-auto px-6 md:px-8 py-16 bg-base-100 text-base-content font-poppins mt-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary" data-aos="fade-up">
          {project.title}
        </h1>

        {/* Swiper Images */}
        <Swiper navigation modules={[Navigation]} className="rounded-xl" data-aos="fade-up">
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-[350px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Description */}
        <p className="text-base text-slate-600" data-aos="fade-up" data-aos-delay="100">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="150">
          {project.tech.map((tech, i) => (
            <span key={i} className="badge badge-outline border-primary text-primary text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-semibold mt-6">🔹 Key Features:</h3>
          <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
            {project.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-semibold mt-6">🔸 Challenges Faced:</h3>
          <ul className="list-disc list-inside text-sm mt-2 text-gray-700 ">
            {project.challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-lg font-semibold mt-6">🛠️ Future Improvements:</h3>
          <ul className="list-disc list-inside text-sm mt-2 text-gray-700 ">
            {project.improvements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-6" data-aos="fade-up" data-aos-delay="500">
          <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            Live Site
          </a>
          <a href={project.gitClient} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm btn-primary">
            GitHub Client
          </a>
          {project.gitServer && (
            <a href={project.gitServer} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm btn-primary">
              GitHub Server
            </a>
          )}
          <button
      onClick={() => navigate(-1)}
      className="btn btn-secondary btn-sm"
    >
      ⬅ Back to Projects
    </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
