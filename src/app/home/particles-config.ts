export const ParticlesConfig = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        color: '#00AFFF',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 1,
          color: '#00AFFF',
        },
        polygon: {
          nb_sides: 6
        },
        image:{
          src: 'assets/orb.jpg',
          width: 100,
          height: 100
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 0.8,
          opacity_min: 0.25,
          sync: true
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 1.25,
          sync: true
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#00AFFF',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 8,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: true,
        attract: {
          enable: true,
          rotateX: 2000,
          rotateY: 2000
        }
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: false,
          mode: 'bubble'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 3
          }
        },
        repulse: {
          distance: 150,
          duration: 2
        }
      }
    },
    retina_detect: true
 };