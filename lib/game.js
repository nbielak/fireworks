const Firework = require('./firework.js');
const Player = require('./human.js');
const Particle = require('./particle.js');
const Util = require('./util.js');

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.fireworks = [];
    this.particles = [];
    this.player = [];

    this.addPlayer();
  }

  addFirework(firework) {
    this.fireworks.push(firework);
  }

  addParticle(particle) {
    this.particles.push(particle);
  }


  addPlayer() {
    let player = new Player(this.canvas, this);
    this.player.push(player);
  }

  draw(context) {
    // requestAnimationFrame(this.draw)
    console.log(this.particles.slice(0, 5));
    this.fireworks.forEach((firework) => {

      firework.update(context)
    });
    this.particles.forEach(particle => particle.update(context));
  }

  remove(firework) {
    this.fireworks.splice(this.fireworks.indexOf(firework), 1);
    this.explode(firework);
  }

  removeParticle(particle) {
    this.particles.splice(this.particles.indexOf(particle), 1)
  }

  explode(firework) {
    // debugger;
    for (let i = 0; i < 200; i++) {
      let newPos = [firework.pos[0] + (Util.getRandomInteger(-50, 50) * Math.PI), firework.pos[1] + (Util.getRandomInteger(-50, 50) * Math.PI)];
      // debugger;
      let particle = new Particle({pos: newPos, game: this, startPos: firework.pos});
      this.addParticle(particle);
    }
  }

}

module.exports = Game;
