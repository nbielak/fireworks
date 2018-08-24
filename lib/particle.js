const Util = require('./util.js');

class Particle {
  constructor(options) {
    this.pos = options.pos;
    this.startPos = options.startPos;
    this.game = options.game;
    this.vel = Util.getRandomInteger(-5, 5);
    this.radius = 3;
    this.trail = [options.startPos];

    if (options.gunPowder >= 0) {
      this.gunPowder = options.gunPowder;
    } else {
      this.gunPowder = 3;
    }
    this.gravity = 0.5;
    // this.path = options.path;
    this.lifespan = 1;
    if (options.startPos !== undefined) {
      // debugger;
      this.setColor(options.startPos[0])
    } else {
      this.color = "#ffffff"
    };
  }

  setColor(pos) {
    const section = innerWidth / 6;
    // debugger;

    if (pos >= 0 && pos < section) {
      this.color = "#F03D17";
      this.colorName = 'red';
    } else if (pos >= section && pos < section * 2) {
      this.color = "#F08D17";
      this.colorName = 'orange';
    } else if (pos >= section * 2 && pos < section * 3) {
      this.color = "#F6EF09";
      this.colorName = 'yellow';
    } else if (pos >= section * 3 && pos < section * 4) {
      this.color = "#09F61B";
      this.colorName = 'green';
    } else if (pos >= section * 4 && pos < section * 5) {
      this.color = "#09E0F6";
      this.colorName = 'blue';
    } else if (pos >= section * 5 && pos < section * 6) {
      this.color = "#F209F6";
      this.colorName = 'pink';
    } else {
      this.color = "#ffffff";
    }
  }

  draw(ctx, trail) {
    // debugger;
    // debugger;
    let grd = ctx.createLinearGradient(trail[0][0], trail[0][1], trail[2][0], trail[2][1]);
    grd.addColorStop(0, this.color);
    grd.addColorStop(0.99, "#ffffff")
    grd.addColorStop(1, "transparent");

    ctx.beginPath();

    ctx.strokeStyle = grd;
    ctx.lineWidth = this.radius;
    ctx.moveTo(trail[0][0], trail[0][1]);

    // ctx.fillStyle = this.color;


    // ctx.arc(
    //   this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    // );

    // ctx.fill();
    ctx.lineTo(trail[1][0], trail[1][1]);
    ctx.lineTo(trail[2][0], trail[2][1]);
    ctx.stroke();
    // ctx.closePath()
    // requestAnimationFrame(this.draw);
  }

  update(ctx) {

    if (this.trail.length >= 3) {
      this.trail.shift();
    }
    this.trail.push(this.pos);

    if (this.lifespan <= 0){
      this.remove();
    }
    this.pos[0] += this.vel;
    this.pos[1] += this.vel;
    this.vel *= this.gravity;
    this.trail.push([this.pos[0] + this.vel, this.pos[1] + this.vel]);
    this.lifespan -= 1;


    // this.vel *= this.gravity;

    this.draw(ctx, this.trail);
  }

  remove() {
    this.game.removeParticle(this)
  }

}


module.exports = Particle;

// requestAnimationFrame
