const Firework = require('./firework');
class Player {
  constructor(canvas, game) {
    this.canvas = canvas;
    this.game = game;
    this.pos = (canvas.width / 2, canvas.height);
    this.mouseLoc = [0, 0];
    this.target = [];

    addEventListener('mousemove', (event) => {
      let x = event.clientX;
      let y = event.clientY;
      this.mouseLoc = [x, y];
    })

    this.shoot()

  }

  shootFirework(target, game) {
    const firework = new Firework({target: target, game: game});
    this.game.addFirework(firework);
  }

  shoot() {
    let that = this;
    that.canvas.addEventListener('click', (e) => {
      e.preventDefault();
      let x = e.clientX;
      let y = e.clientY;
      that.shootFirework([x, y], that.game);
    })
  }


}

module.exports = Player;
