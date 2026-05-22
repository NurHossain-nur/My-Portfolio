import React from "react";

const Marquee = () => {
  // Array of your skills to keep the JSX clean
  const skills = [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "REST API",
    "JWT Auth",
    "Firebase",
    "Tailwind CSS",
    "Web Security",
  ];

  return (
    <section className="marquee-wrapper border-y border-base-content/10 py-[18px] overflow-hidden relative z-10 bg-base-200 cursor-pointer">
      
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          /* Bulletproof pure CSS pause on hover */
          .marquee-wrapper:hover .animate-marquee {
            animation-play-state: paused !important;
          }
        `}
      </style>

      {/* Removed the Tailwind arbitrary hover class, relying on the CSS above */}
      <div className="flex gap-[60px] whitespace-nowrap w-max animate-marquee">
        
        {/* === First Set of Skills === */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-[13px] font-semibold text-base-content/60 tracking-[1px] uppercase"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-primary shrink-0 shadow-[0_0_8px_var(--color-primary)]"></span>
            {skill}
          </div>
        ))}

        {/* === Duplicated Set for Seamless Infinite Loop === */}
        {skills.map((skill, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex items-center gap-3 text-[13px] font-semibold text-base-content/60 tracking-[1px] uppercase"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-primary shrink-0 shadow-[0_0_8px_var(--color-primary)]"></span>
            {skill}
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Marquee;