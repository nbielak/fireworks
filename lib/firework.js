const Particle = require('./particle.js');
const Util = require('./util.js');


class Firework extends Particle {
  constructor(options) {
    super(options);
    this.target = options.target;
    this.speed = 100;
    this.game = options.game;
    this.vel = [(this.target[0] - this.pos[0]) / this.speed, (this.target[1] - this.pos[1]) / this.speed]

  }

  update(ctx) {
    // ctx.clearRect(0, 0, innerWidth, innerHeight)
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    this.draw(ctx);
  }

  exploded() {
    if (this.pos === this.target) {
      this.exploded = true;
    }
  }

  remove() {
    this.game.remove(this);
  }

}

module.exports = Firework;
