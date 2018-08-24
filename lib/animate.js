
function Animate(game, context) {
  this.game = game;
  this.context = context;
  this.player = this.game.addPlayer();

  const render = () => {
    context.clearRect(0, 0, innerWidth, innerHeight);
    this.game.draw(this.context);
    requestAnimationFrame(render)
  };

  render();
}

module.exports = Animate;
