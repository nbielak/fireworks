const Particle = require('./particle.js');

let particle = new Particle({pos: [200, 200]});

function Animate(context) {


  const render = () => {
    particle.update(context);
    requestAnimationFrame(render);
  };

  render();
}

module.exports = Animate;
