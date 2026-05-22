import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="relative z-10 py-[80px] md:py-[110px] px-6 md:px-[50px] bg-base-100 text-base-content font-['Outfit',sans-serif] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        
        {/* --- Header & Action Bar --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
        >
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-[11px] tracking-[3px] text-primary font-bold uppercase mb-3 after:content-[''] after:flex-1 after:max-w-[40px] after:h-[1px] after:bg-primary">
              00
            </div>
            <h2 className="font-['Clash_Display',sans-serif] text-[clamp(30px,4vw,56px)] font-bold tracking-[-1.5px] leading-[1.1] text-base-content">
              My <span className="text-primary">Resume</span>
            </h2>
          </div>

          {/* Download Button */}
          <a 
            href="/Nur_Hossain_Resume_Final.pdf" 
            download="Nur_Hossain_Resume_Final.pdf"
            className="flex items-center gap-3 bg-primary text-black px-[28px] py-[14px] rounded-[50px] text-[14px] font-bold tracking-[0.5px] transition-all duration-300 hover:bg-[#00e0a8] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,200,150,0.3)]"
          >
            <FaDownload size={16} /> Download PDF
          </a>
        </motion.div>

        {/* --- Resume Paper Preview --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full bg-white text-[#111827] p-8 md:p-14 rounded-[12px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] mx-auto relative overflow-hidden selection:bg-primary/30"
          style={{ fontFamily: "'Inter', sans-serif" }} // Using a standard clean font for the paper look
        >
          {/* Top Border Accent */}
          <div className="absolute top-0 left-0 w-full h-[6px] bg-primary"></div>

          {/* Resume Header */}
          <div className="border-b-2 border-primary/20 pb-6 mb-6">
            <h1 className="text-[32px] md:text-[42px] font-extrabold text-[#111827] uppercase tracking-tight leading-none mb-2">
              Nur Hossain
            </h1>
            <h2 className="text-[18px] font-semibold text-primary uppercase tracking-widest mb-4">
              Full-Stack MERN Developer
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#4b5563] font-medium">
              <span className="flex items-center gap-2"><FaEnvelope className="text-primary"/> nur.hossain.dev@email.com</span>
              <span className="flex items-center gap-2"><FaPhoneAlt className="text-primary"/> +880 1701-593102</span>
              <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary"/> Dinajpur, Bangladesh</span>
              <span className="flex items-center gap-2"><FaGithub className="text-primary"/> github.com/NurHossain-nur</span>
              <span className="flex items-center gap-2"><FaLinkedin className="text-primary"/> linkedin.com/in/nur-hossain-nur</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <p className="text-[14px] text-[#374151] leading-[1.7] text-justify">
              Junior MERN Stack Developer specializing in highly scalable backend architecture, secure authentication flows, and AI-integrated platforms. Actively pursuing a B.Sc. in Computer Science & Engineering (3rd Year). Proven track record of developing production-ready SaaS applications, optimizing MongoDB aggregation pipelines, and driving organic growth through technical SEO. Focused on delivering performant, user-centric web solutions.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-[16px] font-bold text-primary uppercase border-b border-[#e5e7eb] pb-2 mb-4">Technical Skills</h3>
            <div className="grid grid-cols-[1fr_2.5fr] gap-y-2 text-[14px]">
              <div className="font-bold text-[#111827]">Frontend:</div>
              <div className="text-[#4b5563]">React.js, Next.js, Tailwind CSS, Redux, JavaScript (ES6+), HTML5, CSS3</div>
              <div className="font-bold text-[#111827]">Backend & DB:</div>
              <div className="text-[#4b5563]">Node.js, Express.js, MongoDB, RESTful APIs, JWT Auth, Firebase</div>
              <div className="font-bold text-[#111827]">Tools & DevOps:</div>
              <div className="text-[#4b5563]">Git / GitHub, Postman, Linux (Ubuntu), VPS (Hostinger), Vite, Figma, Vercel</div>
              <div className="font-bold text-[#111827]">CS Fundamentals:</div>
              <div className="text-[#4b5563]">C, C++, Java, Python, Data Structures & Algorithms, OOP</div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-[16px] font-bold text-primary uppercase border-b border-[#e5e7eb] pb-2 mb-4">Featured Projects</h3>
            
            {/* Project 1 */}
            <div className="mb-5">
              <div className="flex justify-between items-end mb-1">
                <div className="text-[15px] font-bold text-[#111827]">Avijatra EdTech Platform <span className="font-medium text-primary mx-1">|</span> <span className="text-[14px] font-semibold text-primary">Full Stack · SaaS Platform</span></div>
                <div className="text-[13px] font-semibold text-[#6b7280]">Live: app.avijatra.com</div>
              </div>
              <ul className="list-disc pl-5 text-[14px] text-[#374151] leading-[1.6] mb-1">
                <li>Architected a Retrieval-Augmented Generation (RAG) pipeline utilizing the <strong>Gemini API</strong> and <strong>Qdrant</strong> to generate context-aware exam questions.</li>
                <li>Implemented strict Role-Based Access Control (RBAC) securing admin, teacher, and student data layers.</li>
                <li>Managed complete deployment and database migration from Render to a dedicated Hostinger VPS ensuring high availability.</li>
              </ul>
              <div className="text-[12px] font-semibold text-[#6b7280]">Tech Stack: <span className="text-primary font-medium">React, Node.js, MongoDB, Express, Gemini API, Qdrant, VPS</span></div>
            </div>

            {/* Project 2 */}
            <div className="mb-5">
              <div className="flex justify-between items-end mb-1">
                <div className="text-[15px] font-bold text-[#111827]">FreeToolShop Utility Hub <span className="font-medium text-primary mx-1">|</span> <span className="text-[14px] font-semibold text-primary">Full Stack · Web Utilities</span></div>
                <div className="text-[13px] font-semibold text-[#6b7280]">Live: freetoolshop.com</div>
              </div>
              <ul className="list-disc pl-5 text-[14px] text-[#374151] leading-[1.6] mb-1">
                <li>Developed and rapidly scaled a utility platform featuring 50+ distinct web tools within a highly compressed timeline.</li>
                <li>Strategized and executed mass-indexing for separate tool routes, focusing heavily on technical SEO and organic traffic generation.</li>
              </ul>
              <div className="text-[12px] font-semibold text-[#6b7280]">Tech Stack: <span className="text-primary font-medium">React, Next.js, Tailwind CSS, Node.js, SEO, AdSense</span></div>
            </div>

          </div>

          {/* Education */}
          <div>
            <h3 className="text-[16px] font-bold text-primary uppercase border-b border-[#e5e7eb] pb-2 mb-4">Education</h3>
            
            <div className="mb-4">
              <div className="flex justify-between items-end mb-1">
                <div className="text-[15px] font-bold text-[#111827]">B.Sc. in Computer Science & Engineering</div>
                <div className="text-[13px] font-semibold text-[#6b7280]">2022 — Present</div>
              </div>
              <div className="text-[14px] font-semibold text-primary mb-1">Hajee Mohammad Danesh Science & Technology University (HSTU)</div>
              <ul className="list-disc pl-5 text-[14px] text-[#374151]">
                <li>Currently in 3rd Year (Level 3).</li>
                <li>Core Coursework: Data Structures, Algorithms, DBMS, OOP, Operating Systems.</li>
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;