const Particle = require('./particle.js');
const Util = require('./util.js');


class Firework extends Particle {
  constructor(options) {
    super(options);
    this.pos = this.pos || [innerWidth / 2, innerHeight];
    this.target = options.target;
    this.speed = 100;
    this.radius = 5;
    this.game = options.game;
    this.vel = [(this.target[0] - this.pos[0]) / this.speed, (this.target[1] - this.pos[1]) / this.speed]


  }

  update(ctx) {
    // ctx.clearRect(0, 0, innerWidth, innerHeight)
    // const lastPos = this.pos;
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    if (this.pos[1] <= this.target[1]) {
      this.remove();
    } else {
      this.draw(ctx);
    }

  }


  remove() {
    this.game.remove(this);
  }

}

module.exports = Firework;
