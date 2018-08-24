const Firework = require('./firework');
class Player {
  constructor(canvas, game) {
    this.canvas = canvas;
    this.game = game;
    this.pos = (canvas.width / 2, canvas.height);
    this.target = [];
    this.playerSequence = [];
    this.dragStart;
    this.dragEnd;
    this.drag = false;
    this.single = true;

    this.shoot()

  }

  shootFirework(target, game, single) {
    const firework = new Firework({target: target, game: game});
    this.playerSequence.push(firework.colorName);
    if (single) {
      firework.gunPowder += 1;
    }
    this.game.addFirework(firework);
  }

  shoot() {
    let that = this;
    that.canvas.addEventListener('mousedown', (e) => {
      e.preventDefault();
      let x = e.clientX;
      let y = e.clientY;
      this.dragStart = [x, y];
      this.drag = true;
      that.shootFirework(this.dragStart, that.game, that.single);
    })

    that.canvas.addEventListener('mousemove', e => {
      if (this.drag) {
        let x = e.clientX;
        let y = e.clientY;
        this.dragEnd = [x, y];
        this.single = false;
        that.shootFirework(this.dragEnd, that.game, this.single);
      }
    })

    that.canvas.addEventListener('mouseup', e => {
      this.drag = false;
      this.single = true;
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
