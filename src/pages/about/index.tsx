import React from "react";
import { motion } from "framer-motion";
import { workExperiences } from "../../utils/index";

const colors = [
  "bg-indigo-600",
  "bg-green-600",
  "bg-pink-600",
  "bg-yellow-600",
];

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-slate-900 text-white py-24 px-6">
      {/* Başlık */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 pt-6">
          What I Have Done So Far
        </h1>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          My work experience in logistics, ERP, and supply chain software development.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-neutral-700"></div>

        {/* Work Experiences */}
        <div className="space-y-24">
          {workExperiences.map((work, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, rotate: -2 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className="w-5/12">
                <div className={`${colors[index % colors.length]} rounded-2xl p-8 shadow-lg hover:scale-105 transform transition-all`}>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {work.role}
                  </h2>
                  <h3 className="text-lg text-neutral-100 mb-4">
                    {work.company}
                  </h3>
                  <ul className="space-y-2 text-neutral-100">
                    {work.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center Circle with Logo */}
              <div className="w-2/12 flex justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-slate-900">
                  {/* Logo placeholder */}
                  <div className="w-12 h-12 bg-neutral-800 rounded-full"></div>
                </div>
              </div>

              {/* Date */}
              <div className="w-5/12">
                <div className={`${index % 2 === 0 ? "text-left pl-8" : "text-right pr-8"}`}>
                  <p className="text-neutral-300 text-lg font-medium">
                    {work.duration}
                  </p>
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;