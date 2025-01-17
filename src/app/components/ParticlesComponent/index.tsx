import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version to reduce bundle size

export function ParticlesComponent() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="absolute w-full h-full -z-20">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 75, // Limit the FPS to 120 for better performance
            interactivity: {
             
              modes: {
                push: {
                  quantity: 4, // Number of particles added on click
                },
                repulse: {
                  distance: 200, // Repulse distance
                  duration: 0.4, // Duration of repulsion effect
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff", // Particle color
              },
              links: {
                color: "#ffffff", // Line color
                distance: 150, // Line distance
                enable: true, // Enable line linking
                opacity: 0.5, // Line opacity
                width: 1, // Line width
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce", // Bounce particles when hitting edges
                },
                random: false,
                speed: 3, // Particle speed
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 160, // Total number of particles
              },
              opacity: {
                value: 0.5, // Particle opacity
              },
              shape: {
                type: "circle", // Shape of the particles
              },
              size: {
                value: { min: 1, max: 5 }, // Random size range for particles
              },
            },
            detectRetina: true, // Enable retina detection
          }}
        />
      )}
    </div>
  );
}
