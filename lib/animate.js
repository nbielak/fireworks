const Particle = require('./particle.js');
const Firework = require('./firework.js');

let firework = new Firework();

function Animate(context) {


  const render = () => {
    firework.update(context);
    requestAnimationFrame(render);
  };

  render();
}

module.exports = Animate;
