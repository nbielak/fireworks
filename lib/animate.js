
function Animate(game, context) {
  this.game = game;
  this.context = context;
  this.player = this.game.addPlayer();

  const render = () => {
    context.clearRect(0, 0, innerWidth, innerHeight);
    requestAnimationFrame(render);

    this.game.draw();
  };
  render();
}

module.exports = Animate;
