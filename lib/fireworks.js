import Animate from './animate.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const context = canvas.getContext("2d");
  const animate = Animate;
  animate(context);

})
