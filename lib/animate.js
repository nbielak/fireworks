
function Animate(game, context) {
  this.game = game;
  this.context = context;
  this.player = this.game.addPlayer();

  const render = () => {
    context.clearRect(0, 0, innerWidth, innerHeight);
    requestAnimationFrame(render);

    // this.game.play();
    // if (!this.game.gameOver) {

      // this.game.takeTurn();
      // this.game.showSequence();
      // this.game.requireSequence()
    // }
    this.game.draw();
    // this.game.takeTurn();
  };
  // this.game.takeTurn();
  render();
  // game.play();
}

module.exports = Animate;
