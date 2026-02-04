import React from "react";
import {motion} from "framer-motion"



interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "UI & UX Design",
    description:
      "Designing intuitive, efficient, and user-centered interfaces for complex logistics systems.",
    image: "/images/s1.png",
  },
  {
    id: 2,
    title: "Web & Mobile Applications",
    description:
      "Building scalable web and mobile applications tailored for logistics workflows.",
    image: "/images/s2.png",
  },
  {
    id: 3,
    title: "Design & Creative",
    description:
      "Creating strong visual identities and creative solutions aligned with business goals.",
    image: "/images/s3.png",
  },
  {
    id: 4,
    title: "Development",
    description:
      "Developing high-performance, scalable software solutions for logistics platforms.",
    image: "/images/s4.png",
  },
];

const Services: React.FC = () => {
  return (
    <section className="min-h-screen bg-neutral-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}

<header className="max-w-4xl mx-auto text-center mb-16 pt-10">
  <motion.h1
    className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug text-neutral-100"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    I collaborate with brands and agencies in the logistics software
    domain to develop scalable and impactful digital solutions.
  </motion.h1>
</header>



        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group bg-neutral-900 border border-neutral-700 rounded-2xl p-8 transition-all duration-300 hover:border-indigo-500 hover:-translate-y-1"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-12 h-12 mb-6 opacity-80 transition group-hover:opacity-100"
              />

              <h3 className="text-lg font-semibold mb-3 text-neutral-100">
                {service.title}
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
