const Firework = require('./firework');
class Player {
  constructor(canvas, game) {
    this.canvas = canvas;
    this.game = game;
    this.pos = (canvas.width / 2, canvas.height);
    this.target = [];
    this.playerSequence = [];
    this.shoot()
  }

  shootFirework(target, game) {
    const firework = new Firework({target: target, game: game});
    this.playerSequence.push(firework.colorName);
    this.game.addFirework(firework);
  }

  shoot() {
    let that = this;
    that.canvas.addEventListener('mousedown', (e) => {
      e.preventDefault();
      let x = e.clientX;
      let y = e.clientY;
      that.shootFirework([x, y], that.game);
    })
  }

  inputSequence() {
    while (this.playerSequence < this.game.sequence) {
      this.shoot()
    }

    return this.playerSequence;
  }


}

module.exports = Player;
