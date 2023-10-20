import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -20,
          },
          particles: {
            number: {
              value: 10,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "polygon",
              options: {
                sides: 10,
              },
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: false,
              anim: {
                enable: false,
                speed: 100,
                size_min: 1,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 600,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: ["grab"],
              },
              onclick: {
                enable: false,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 100,
                size: 40,
                duration: 20,
                opacity: 8,
                speed: 6,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 8,
              },
              remove: {
                particles_nb: 12,
              },
            },
          },
          retina_detect: true,
          background: {
            color: "#000000",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </div>
  );
}

export default ParticlesBg;
