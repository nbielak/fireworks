const Util = require('./util.js');

class Particle {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.acc = options.acc;
    this.exploded = false;
    this.radius = options.radius;
    this.color = options.color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();

    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );

    ctx.fill();
  }

  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offSetX = this.vel[0] * velocityScale,
      offSetY = this.vel[1] * velocityScale;

    let newPos = [(this.pos[0] + offSetX), (this.pos[1] + offSetY)];
    this.pos = newPos;
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

module.exports = Particle;
