const Util = require('./util.js');

class Particle {
  constructor(options) {
    this.pos = options.pos;
    this.startPos = options.startPos;
    this.game = options.game;
    this.vel = Util.getRandomInteger(-1, 1);
    this.radius = 2;

    this.gravity = 0.5
    // this.path = options.path;
    this.lifespan = 40;
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
      console.log("red")
      this.color = "#F03D17";
    } else if (pos >= section && pos < section * 2) {
      console.log("orange")
      this.color = "#F08D17";
    } else if (pos >= section * 2 && pos < section * 3) {
      console.log("yellow")
      this.color = "#F6EF09";
    } else if (pos >= section * 3 && pos < section * 4) {
      console.log("green")
      this.color = "#09F61B";
    } else if (pos >= section * 4 && pos < section * 5) {
      console.log("blue")
      this.color = "#09E0F6";
    } else if (pos >= section * 5 && pos < section * 6) {
      console.log("pink")
      this.color = "#F209F6";
    } else {
      console.log("white")
      this.color = "#ffffff";
    }
  }

  draw(ctx) {
    ctx.beginPath();
    // ctx.strokeStyle = this.color;
    // ctx.lineWidth = this.radius;
    // ctx.moveTo(lastPos[0], lastPos[1]);

    ctx.fillStyle = this.color;


    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );

    ctx.fill();
    // ctx.lineTo(pos[0], pos[1]);
    // ctx.stroke();
    ctx.closePath()
    // requestAnimationFrame(this.draw);
  }

  update(ctx) {
    const lastPos = this.pos;
    if (this.lifespan <= 0)
      this.remove();
    else {
      this.pos[0] /= this.vel;
      this.pos[1] -= this.vel;
      // this.vel *= this.gravity;
      this.lifespan -= 1
    }

    // this.vel *= this.gravity;

    this.draw(ctx);
  }

  remove() {
    this.game.removeParticle(this)
  }

}


module.exports = Particle;

// requestAnimationFrame
