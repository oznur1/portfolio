import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedBackground = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 70 },
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            opacity: 0.25,
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: { value: 0.3 },
          size: { value: 2 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
        },
      }}
    />
  );
};

export default AnimatedBackground;
