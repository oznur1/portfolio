import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import AnimatedBackground from "../animatedBackground";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0b0d2b] overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">

        {/* Avatar */}
          <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-32 h-36 rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)] mb-8 overflow-hidden"
        >
          <img
            src="/images/project.png"
            alt="Öznur"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* TYPEWRITER TITLE */}
       <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
  Creating smart logistics solutions with
  <br />
  <span className="text-cyan-400">
    Full-Stack Development.
  </span>
</h1>

        {/* Subtitle */}
      <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="mt-6 text-gray-300 text-lg"
>
  Hi! I'm Oznur —{" "}
  <span className="text-cyan-400 font-semibold">
    <Typewriter
      words={[
        "Frontend Developer",
        "Backend Developer",
        "Mobile Developer",
        "Full-Stack Developer",
      ]}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={60}
      deleteSpeed={35}
      delaySpeed={1600}
    />
  </span>
</motion.p>

        {/* Button */}
      <Link to="/work">
  <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="mt-10 px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
  >
    See my work →
  </motion.button>
</Link>

      </div>
    </section>
  );
};

export default Hero;
