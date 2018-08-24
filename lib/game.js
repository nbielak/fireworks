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
    this.player = this.addPlayer();
    this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'pink'];


    this.colorCoords = this.setColorCoords();
    this.gameOver = false;
    this.sequence = [];
    this.computer = new Player(this.canvas, this);



  }

  play() {
    if (!this.gameOver) {
      // this.draw();

      this.takeTurn();
    }

    this.resetGame()
  }

  takeTurn() {
    this.showSequence();
    this.requireSequence()
  }

  showSequence() {
    this.addToSequence();
    this.sequence.forEach(color => {
      let coords = this.colorCoords[color];
      this.computer.shootFirework(coords, this);
    })
  }

  requireSequence() {
    const seq = this.player.inputSequence();
    if (seq !== this.sequence) {
      this.gameOver = true;
    }

    this.player.playerSequence = [];
  }

  setColorCoords() {
    const sectionWidth = innerWidth / 6;
    const halfSection = innerWidth / 12;
    const sectionHeight = innerHeight / 2;

    const colorCoords = {
      red: [sectionWidth - halfSection, sectionHeight],
      orange: [(sectionWidth * 2) - halfSection, sectionHeight],
      yellow: [(sectionWidth * 3) - halfSection, sectionHeight],
      green: [(sectionWidth * 4) - halfSection, sectionHeight],
      blue: [(sectionWidth * 5) - halfSection, sectionHeight],
      pink: [(sectionWidth * 6) - halfSection, sectionHeight]
    };

    return colorCoords;
  }

  addFirework(firework) {
    this.fireworks.push(firework);
  }

  addParticle(particle) {
    this.particles.push(particle);
  }


  addPlayer() {
    this.player = new Player(this.canvas, this);
  }

  addToSequence() {
    let col = this.colors[Math.floor(Math.random() * 6)];
    this.sequence.push(col);
  }

  draw() {
    // requestAnimationFrame(this.draw)
    // console.log(this.particles.slice(0, 5));
    // requestAnimationFrame(this.draw);
    // requestAnimationFrame(this.draw());
    // this.context.clearRect(0, 0, innerWidth, innerHeight);
    // this.play();
    // this.player.draw()
    this.fireworks.forEach((firework) => {

      firework.update(this.context)
    });
    this.particles.forEach(particle => particle.update(this.context));
    // this.draw = this.draw.bind(this);
  }

  remove(firework) {
    this.fireworks.splice(this.fireworks.indexOf(firework), 1);
    this.explode(firework);
  }

  removeParticle(particle) {
    this.particles.splice(this.particles.indexOf(particle), 1)
    this.explode(particle);
  }

  resetGame() {
    this.gameOver = false;
    this.sequence = [];
  }

  setN(firework) {
    if (firework instanceof Firework){
      return 7;
    } else if (firework instanceof Particle) {
      return 4;
    } else {
      return 0;
    }
  }

  explode(firework) {
    if (firework.gunPowder > 0){
      for (let i = 0; i < this.setN(firework); i++) {
        // makeCircle
        let rad = Util.makeCircle(Util.getRandomInteger(-50, 50));
        let newPos = [firework.pos[0] + rad[0], firework.pos[1] + rad[1]];
        let particle = new Particle({pos: newPos, game: this, startPos: firework.pos, gunPowder: firework.gunPowder - 1});
        this.addParticle(particle);
      }
      firework.gunPowder -= 1;
    }
  }

}

module.exports = Game;
