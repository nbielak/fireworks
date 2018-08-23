import Animate from './animate.js';
import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const context = canvas.getContext("2d");

  canvas.width = innerWidth;
  canvas.height = innerHeight;
  const game = new Game(canvas, context);
  const animate = Animate;
  animate(game, context);

})
