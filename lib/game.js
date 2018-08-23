const Firework = require('./firework.js');
const Player = require('./human.js');

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.fireworks = [];
    this.player = [];
  }

  addFirework(firework) {
    this.fireworks.push(firework);
  }


  addPlayer() {
    let player = new Player(this.canvas, this);
    this.player.push(player);
  }

  draw(context) {
    console.log(this.fireworks);
    this.fireworks.forEach((firework, idx) => {
      if (firework.pos[1] <= firework.target[1]) {
        debugger;
        firework.remove();
      }
      firework.update(context)
    });
  }

  remove(firework) {
    this.fireworks.splice(this.fireworks.indexOf(firework), 1);
  }

}

module.exports = Game;
