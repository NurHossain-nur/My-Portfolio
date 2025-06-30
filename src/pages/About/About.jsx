import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaCodeBranch,
  FaBasketballBall,
} from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 80, duration: 600 });
  }, []);

  const sections = [
    {
      icon: <FaLaptopCode className="text-primary" />,
      title: "Development Passion",
      text: `I love turning ideas into real, working products. Whether it's building UI components, integrating APIs, or optimizing performance, I enjoy the full process of web development.`,
    },
    {
      icon: <FaBasketballBall className="text-secondary" />,
      title: "Beyond Code",
      text: `Outside of coding, I enjoy playing basketball, watching tech videos, and exploring new gadgets. I’m also passionate about helping others by sharing what I’ve learned.`,
    },
    {
      icon: <FaCodeBranch className="text-accent" />,
      title: "My Goals",
      text: `My goal is to work with forward-thinking teams, contribute to meaningful projects, and eventually build my own tech platform or startup.`,
    },
  ];

  return (
    <section className="bg-base-100 text-base-content px-6 md:px-8 py-20 font-poppins max-w-7xl mx-auto">
      <h2
        className="text-4xl font-bold text-center mb-12"
        data-aos="fade-up"
      >
        About Me
      </h2>

      <div className="space-y-6 max-w-7xl mx-auto text-lg leading-relaxed text-gray-700">
        <p data-aos="fade-up" data-aos-delay="100">
          Hi, I'm <span className="font-semibold text-primary">Nur Hossain</span>, a passionate
          <span className="text-secondary font-medium"> Frontend Web Developer</span> from Dinajpur, Bangladesh. I specialize in building
          responsive, modern web apps using React, Tailwind, and Firebase.
        </p>

        <p data-aos="fade-up" data-aos-delay="200">
          My coding journey began with HTML/CSS, and has grown into building full-stack apps using modern tools like React, Node.js, and MongoDB. I'm driven by curiosity and the desire to solve real-world problems through code.
        </p>
      </div>

      {/* Section Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {sections.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-5 p-6 bg-base-200 rounded-xl shadow-md"
            data-aos="fade-up"
            data-aos-delay={300 + i * 100}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-base-300 text-2xl">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 ">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
