<script lang="ts">
  import Particles from 'svelte-particles';

  let particlesConfig = {
  "background": {
    "color": {
      "value": "#fff"
    },
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "fullScreen": {
    "zIndex": -1
  },
  "interactivity": {
    "events": {
      "onHover": {
        "enable": true,
        "mode": "bubble",
        "parallax": {
          "force": 64
        }
      }
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 40
      },
      "grab": {
        "distance": 400
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "links": {
      "color": {
        "value": "#000"
      },
      "distance": 150,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      }
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 50
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0.2
      }
    },
    "rotate": {
      "random": {
        "enable": true
      },
      "animation": {
        "enable": true,
        "speed": 2
      },
      "direction": "random"
    },
    "shape": {
      "options": {
        "image": [
          { "src": "/img/covers/0.jfif" },
          { "src": "/img/covers/1.jfif" },
          { "src": "/img/covers/2.jfif" },
          { "src": "/img/covers/3.jfif" },
          { "src": "/img/covers/4.jfif" },
          { "src": "/img/covers/5.jfif" },
          { "src": "/img/covers/6.jfif" },
          { "src": "/img/covers/7.jfif" },
          { "src": "/img/covers/8.jfif" },
          { "src": "/img/covers/9.jfif" },
          { "src": "/img/covers/10.jfif" },
          { "src": "/img/covers/11.jfif" },
          { "src": "/img/covers/12.jfif" },
          { "src": "/img/covers/13.jfif" },
          { "src": "/img/covers/14.jfif" },
          { "src": "/img/covers/15.jfif" },
          { "src": "/img/covers/16.jfif" },
          { "src": "/img/covers/17.jfif" },
          { "src": "/img/covers/18.jfif" },
          { "src": "/img/covers/19.jfif" },
          { "src": "/img/covers/20.jfif" },
          { "src": "/img/covers/21.jfif" },
          { "src": "/img/covers/22.jfif" },
          { "src": "/img/covers/23.jfif" },
          { "src": "/img/covers/24.jfif" },
          { "src": "/img/covers/25.jfif" },
          { "src": "/img/covers/26.jfif" },
          { "src": "/img/covers/27.jfif" },
          { "src": "/img/covers/28.jfif" },
          { "src": "/img/covers/29.jfif" },
          { "src": "/img/covers/30.jfif" },
        ]
      },
      "type": "image"
    },
    "size": {
      "value": 32,
      "animation": {
        "speed": 40,
        "minimumValue": 0.1
      }
    },
  }
};
</script>

<Particles
  id="tsparticles"
  options={particlesConfig}
/>