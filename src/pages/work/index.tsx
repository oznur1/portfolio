import React from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cryptocurrency App",
    description: "A web app in which the user can search for and get info about thousands of different cryptocurrencies. With detailed charts, plots and information, Coinmania is a great app for cryptocurrency investors.",
    image: "/images/project1.png",
    tags: ["#nextjs", "#react", "#css"],
  },
  {
    id: 2,
    title: "Flight Radar App",
    description: "Flight Radar App lists many current flights from all over the world, it includes scheduled departure and arrival times as well as the routes of the flights, tailcodes, postponements and many other information too. Uses a complex API.",
    image: "/images/project5.png",
    tags: ["#nextjs", "#supabase", "#css"],
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "The only digital adoption platform offering personalized and no-code intro flows. Scale faster with comprehensive onboarding solutions.",
    image: "/images/project4.png",
    tags: ["#react", "#tailwind", "#typescript"],
  },
  {
    id: 4,
    title: "Portfolio Website for Creatives",
    description: "Create interactive content in minutes without limits. Transform your brand's growth with AI-powered quizzes and tools.",
    image: "/images/project3.png",
    tags: ["#nextjs", "#framer", "#tailwind"],
  },
];

const getTagColor = (tag: string): string => {
  if (tag.includes("nextjs")) return "#3b82f6";
  if (tag.includes("react")) return "#22c55e";
  if (tag.includes("css")) return "#ec4899";
  if (tag.includes("supabase")) return "#10b981";
  if (tag.includes("tailwind")) return "#06b6d4";
  if (tag.includes("typescript")) return "#f59e0b";
  if (tag.includes("framer")) return "#a855f7";
  return "#64748b";
};

const Work: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#0a0e27] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            A small selection of recent <span className="text-cyan-400">projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-[#1a1f3a] rounded-3xl overflow-hidden border border-[#2a2f4a] hover:border-cyan-500/50 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-48 md:h-56 overflow-hidden bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-sm font-medium"
                      style={{ color: getTagColor(tag) }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;