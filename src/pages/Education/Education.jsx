// src/pages/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaBookOpen, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Education Data
  const educationData = [
    {
      id: 1,
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Hajee Mohammad Danesh Science & Technology University (HSTU)",
      location: "Dinajpur, Bangladesh",
      period: "2022 - Present",
      status: "current", // Used for styling
      description: "Focusing on Software Engineering, Algorithms, and System Design. Building a strong foundation in computer science principles while actively developing web applications.",
      courses: ["Data Structures", "Algorithms", "DBMS", "OOP", "Operating Systems"],
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dinajpur Govt. College", // Replace with your actual college
      location: "Dinajpur, Bangladesh",
      period: "2019 - 2021",
      status: "completed",
      description: "Science Group. Excelled in Mathematics and Physics, sparking my interest in computational logic.",
      courses: ["Physics", "Higher Math", "ICT"],
    },
  ];

  return (
    <section className="relative min-h-screen py-20 bg-base-100 text-base-content font-poppins overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education <span className="text-primary">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500">My academic path and qualifications.</p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {educationData.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Desktop: Center, Mobile: Left) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-700 -translate-x-1/2"></div>
              
              {/* Mobile Line */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gray-700"></div>

              <div className={`md:flex items-center justify-between gap-10 ${item.id % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* 1. Date Side (Desktop) */}
                <div className="hidden md:block w-1/2 text-right">
                  {item.id % 2 !== 0 && (
                     <div className="pr-10">
                        <span className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium border ${
                          item.status === 'current' 
                            ? 'border-primary text-primary bg-primary/10' 
                            : 'border-gray-600 text-gray-400'
                        }`}>
                          <FaCalendarAlt /> {item.period}
                        </span>
                     </div>
                  )}
                  {item.id % 2 === 0 && (
                     <div className="pl-10 text-left">
                        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium border border-gray-600 text-gray-400">
                          <FaCalendarAlt /> {item.period}
                        </span>
                     </div>
                  )}
                </div>

                {/* 2. Timeline Dot */}
                <div className="absolute left-[-5px] md:left-[50%] md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full ring-4 ring-base-100 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] z-20"></div>

                {/* 3. Card Content */}
                <div className="w-full md:w-1/2 mt-2 md:mt-0">
                   <div className={`relative p-6 rounded-2xl border border-gray-700/50 bg-base-200/40 backdrop-blur-md hover:border-primary/50 transition-all duration-300 shadow-lg group ${
                     item.id % 2 !== 0 ? "md:mr-10" : "md:ml-10"
                   }`}>
                      
                      {/* Mobile Date (Visible only on mobile) */}
                      <div className="md:hidden mb-3">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
                          item.status === 'current' 
                            ? 'border-primary text-primary bg-primary/10' 
                            : 'border-gray-600 text-gray-400'
                        }`}>
                          <FaCalendarAlt /> {item.period}
                        </span>
                      </div>

                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors">
                            {item.degree}
                          </h3>
                          <p className="text-secondary font-medium text-sm flex items-center gap-2 mt-1">
                             <FaUniversity /> {item.institution}
                          </p>
                        </div>
                        <div className="p-2 bg-base-300 rounded-lg text-primary">
                           <FaGraduationCap size={20} />
                        </div>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Coursework Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs px-2 py-1 rounded bg-base-300 text-gray-400 border border-gray-700 flex items-center gap-1"
                          >
                            <FaBookOpen size={10} /> {course}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;