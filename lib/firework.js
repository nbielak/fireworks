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
    this.trail = [[innerWidth / 2, innerHeight]];
    if (this.pos !== undefined) {
      this.setColor(options.target[0])
    } else {
      this.color = "#ffffff"
    };

  }

  draw(ctx, trail) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.radius;
    ctx.moveTo(trail[0][0], trail[0][1]);

    ctx.fillStyle = this.color;
    //
    //
    // ctx.arc(
    //   this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    // );
    //
    // ctx.fill();
    ctx.lineTo(trail[1][0], trail[1][1]);
    ctx.lineTo(trail[2][0], trail[2][1]);
    ctx.stroke();
    // ctx.closePath()
    // requestAnimationFrame(this.draw);
  }

  update(ctx) {
    if (this.trail.length >= 9) {
      this.trail.shift();
      this.trail.shift();
      this.trail.shift();
    }
    // else if (this.trail.length >= 3) {
    //   this.trail.shift();
    // }
    this.trail.push(this.pos);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1]

    if (this.pos[1] <= this.target[1]) {
      this.remove();
    }
    this.trail.push([this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]);
    // this.setColor(this.trail[0][0])
    this.draw(ctx, this.trail);


  }


  remove() {
    this.game.remove(this);
  }

}

module.exports = Firework;
