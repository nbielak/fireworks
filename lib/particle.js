const Util = require('./util.js');

class Particle {
  constructor(options) {
    this.pos = this.pos || [innerWidth / 2, innerHeight];
    this.vel = [1,1];
    this.radius = 10;
    this.color = "#ffffff";
    // this.path = options.path;
  }

  draw(ctx) {

    ctx.beginPath();

    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fillStyle = this.color;
    ctx.fill();

    ctx.closePath()
  }

  // update(ctx) {
  //
  //
  //   let x = 1 + this.pos[0];
  //   let y = 1 + this.pos[1];
  //
  //   this.pos = [x, y];
  //
  //   this.draw(ctx);
  // }


}


module.exports = Particle;

// requestAnimationFrame
