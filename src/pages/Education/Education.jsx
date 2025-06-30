// src/pages/Education.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 bg-base-100 text-base-content font-poppins">
      <div>
        <h2
          className="text-3xl md:text-4xl font-bold text-center  mb-12"
          data-aos="fade-up"
        >
          Education Timeline
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-primary pl-6 space-y-10">
          {/* BSc in CSE - HSTU */}
          <div className="relative" data-aos="fade-up" data-aos-delay="100">
            {/* Timeline Dot */}
            <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
              <FaGraduationCap size={14} />
            </span>

            <div className="bg-base-200 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-secondary">
                BSc in Computer Science & Engineering
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hajee Mohammad Danesh Science & Technology University (HSTU)
              </p>
              <p className="text-sm text-gray-500">2022 - Present</p>
              <p className="text-xs text-success font-medium mt-1">
                Currently Studying
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
