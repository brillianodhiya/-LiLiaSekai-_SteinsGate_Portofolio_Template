import React from "react";
import Particles from "react-particles-js";

const Particle = () => {
  return (
    <Particles
      height={window.outerHeight}
      params={{
        particles: {
          color: "#E3872D",
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 700,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 40,
              size_min: 0.1,
              sync: true,
            },
          },
          lineLinked: {
            color: "#000",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particle;
