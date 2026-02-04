import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "/images/html5.svg", color: "#E34F26" },
  { name: "CSS", icon: "/images/css.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "/images/javascript.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "/images/typescript.svg", color: "#3178C6" },
  { name: "React", icon: "/images/react.svg", color: "#61DAFB" },
  { name: "Redux", icon: "/images/redux.svg", color: "#764ABC" },
  { name: "Next.js", icon: "/images/nextdotjs.svg", color: "#000000" },
  { name: "Jest", icon: "/images/jest.svg", color: "#C21325" },
  { name: "PostgreSQL", icon: "/images/postgresql.svg", color: "#4169E1" },
  { name: "Tailwind", icon: "/images/tailwindcss (1).svg", color: "#06B6D4" },
  { name: "Git", icon: "/images/git.svg", color: "#F05032" },
  { name: "Docker", icon: "/images/docker.svg", color: "#2496ED" },
  { name: "Node.js", icon: "/images/nodedotjs.svg", color: "#339933" },
  { name: "Nest.js", icon: "/images/nestjs.svg", color: "#E0234E" },
  { name: "MongoDB", icon: "/images/mongodb.svg", color: "#47A248" },
];

const Skills: React.FC = () => {
  return (
    <section className="min-h-screen bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 pt-5">
            Skills & Technologies
          </h2>
          <p className="text-neutral-400 text-lg">
            Technologies I work with to build amazing products
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-12 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.15, 
                rotate: 360,
                transition: { duration: 0.6 }
              }}
              className="relative group cursor-pointer"
            >
              {/* Hexagon Shape */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ backgroundColor: skill.color }}
                />
                
                {/* Hexagon SVG Background */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full drop-shadow-xl"
                >
                  <defs>
                    <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#e5e7eb', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#d1d5db', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                 <polygon
  points="50 1 95 25 95 75 50 99 5 75 5 25"
  fill={`url(#grad-${index})`}
  className="group-hover:fill-white group-hover:stroke-2 transition-all duration-300"
  stroke={skill.color}
  strokeWidth="0"
  style={{ stroke: skill.color }}
/>
                </svg>

                {/* Icon */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="relative z-10 w-14 h-14 object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="relative">
                  <span 
                    className="text-sm font-semibold text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-2xl"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.name}
                  </span>
                  {/* Arrow */}
                  <div 
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;