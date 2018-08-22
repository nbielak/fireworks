const Particle = require('./particle.js');

class Firework extends Particle {
  constructor(options) {
    super(options);
    this.target = options.target;
  }

  exploded() {
    if (this.pos === this.target) {
      this.exploded = true;
    }
  }

}

Firework.SPEED = 8;
