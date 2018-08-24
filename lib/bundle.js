/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/fireworks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/animate.js":
/*!************************!*\
  !*** ./lib/animate.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction Animate(game, context) {\n  this.game = game;\n  this.context = context;\n  this.player = this.game.addPlayer();\n\n  const render = () => {\n    context.clearRect(0, 0, innerWidth, innerHeight);\n    this.game.draw(this.context);\n    requestAnimationFrame(render)\n  };\n\n  render();\n}\n\nmodule.exports = Animate;\n\n\n//# sourceURL=webpack:///./lib/animate.js?");

/***/ }),

/***/ "./lib/firework.js":
/*!*************************!*\
  !*** ./lib/firework.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Particle = __webpack_require__(/*! ./particle.js */ \"./lib/particle.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n\n\nclass Firework extends Particle {\n  constructor(options) {\n    super(options);\n    this.pos = this.pos || [innerWidth / 2, innerHeight];\n    this.target = options.target;\n    this.speed = 100;\n    this.radius = 5;\n    this.game = options.game;\n    this.vel = [(this.target[0] - this.pos[0]) / this.speed, (this.target[1] - this.pos[1]) / this.speed]\n    this.trail = [[innerWidth / 2, innerHeight]];\n    if (this.pos !== undefined) {\n      // debugger;\n      this.setColor(options.target[0])\n    } else {\n      this.color = \"#ffffff\"\n    };\n\n  }\n\n  draw(ctx, trail) {\n    // debugger;\n    ctx.beginPath();\n    ctx.strokeStyle = this.color;\n    ctx.lineWidth = this.radius;\n    ctx.moveTo(trail[0][0], trail[0][1]);\n\n    ctx.fillStyle = this.color;\n    //\n    //\n    // ctx.arc(\n    //   this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n    // );\n    //\n    // ctx.fill();\n    ctx.lineTo(trail[1][0], trail[1][1]);\n    ctx.lineTo(trail[2][0], trail[2][1]);\n    ctx.stroke();\n    // ctx.closePath()\n    // requestAnimationFrame(this.draw);\n  }\n\n  update(ctx) {\n    if (this.trail.length >= 9) {\n      // debugger;\n      this.trail.shift();\n      this.trail.shift();\n      this.trail.shift();\n    }\n    // else if (this.trail.length >= 3) {\n    //   this.trail.shift();\n    // }\n    this.trail.push(this.pos);\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    // debugger;\n\n    if (this.pos[1] <= this.target[1]) {\n      this.remove();\n    }\n    this.trail.push([this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]);\n    // this.setColor(this.trail[0][0])\n    this.draw(ctx, this.trail);\n\n\n  }\n\n\n  remove() {\n    this.game.remove(this);\n  }\n\n}\n\nmodule.exports = Firework;\n\n\n//# sourceURL=webpack:///./lib/firework.js?");

/***/ }),

/***/ "./lib/fireworks.js":
/*!**************************!*\
  !*** ./lib/fireworks.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate.js */ \"./lib/animate.js\");\n/* harmony import */ var _animate_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_animate_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('game-canvas');\n  const context = canvas.getContext(\"2d\");\n\n  addEventListener('resize', () => {\n        canvas.width = innerWidth;\n        canvas.height = innerHeight;\n    });\n\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_1___default.a(canvas, context);\n  const animate = _animate_js__WEBPACK_IMPORTED_MODULE_0___default.a;\n  animate(game, context);\n\n})\n\n\n//# sourceURL=webpack:///./lib/fireworks.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Firework = __webpack_require__(/*! ./firework.js */ \"./lib/firework.js\");\nconst Player = __webpack_require__(/*! ./human.js */ \"./lib/human.js\");\nconst Particle = __webpack_require__(/*! ./particle.js */ \"./lib/particle.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n\nclass Game {\n  constructor(canvas, context) {\n    this.canvas = canvas;\n    this.context = context;\n    this.fireworks = [];\n    this.particles = [];\n    this.player = this.addPlayer();\n    this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'pink'];\n\n\n    this.colorCoords = this.setColorCoords();\n    this.gameOver = false;\n    this.sequence = [];\n    this.computer = new Player(this.canvas, this);\n    this.draw = this.draw.bind(this);\n\n  }\n\n  play() {\n    if (!this.gameOver) {\n      debugger;\n      this.takeTurn();\n    }\n\n    this.resetGame()\n  }\n\n  takeTurn() {\n    debugger;\n    this.showSequence();\n    this.requireSequence()\n  }\n\n  showSequence() {\n    debugger;\n    this.addToSequence();\n    this.sequence.forEach(color => {\n      let coords = this.colorCoords[color];\n      this.computer.shootFirework(coords, this);\n      setTimeout(function(){}, 1000);\n    })\n  }\n\n  requireSequence() {\n    debugger;\n    const seq = this.player.inputSequence();\n    if (seq !== this.sequence) {\n      this.gameOver = true;\n    }\n\n    this.player.playerSequence = [];\n  }\n\n  setColorCoords() {\n    const sectionWidth = innerWidth / 6;\n    const halfSection = innerWidth / 12;\n    const sectionHeight = innerHeight / 2;\n\n    const colorCoords = {\n      red: [sectionWidth - halfSection, sectionHeight],\n      orange: [(sectionWidth * 2) - halfSection, sectionHeight],\n      yellow: [(sectionWidth * 3) - halfSection, sectionHeight],\n      green: [(sectionWidth * 4) - halfSection, sectionHeight],\n      blue: [(sectionWidth * 5) - halfSection, sectionHeight],\n      pink: [(sectionWidth * 6) - halfSection, sectionHeight]\n    };\n\n    return colorCoords;\n  }\n\n  addFirework(firework) {\n    this.fireworks.push(firework);\n  }\n\n  addParticle(particle) {\n    this.particles.push(particle);\n  }\n\n\n  addPlayer() {\n    this.player = new Player(this.canvas, this);\n  }\n\n  addToSequence() {\n    // debugger;\n    let col = this.colors[Math.floor(Math.random() * 6)];\n    this.sequence.push(col);\n  }\n\n  draw() {\n    // requestAnimationFrame(this.draw)\n    // console.log(this.particles.slice(0, 5));\n    // requestAnimationFrame(this.draw);\n    this.fireworks.forEach((firework) => {\n\n      firework.update(this.context)\n    });\n    this.particles.forEach(particle => particle.update(this.context));\n    // this.draw = this.draw.bind(this);\n  }\n\n  remove(firework) {\n    this.fireworks.splice(this.fireworks.indexOf(firework), 1);\n    this.explode(firework);\n  }\n\n  removeParticle(particle) {\n    this.particles.splice(this.particles.indexOf(particle), 1)\n    this.explode(particle);\n  }\n\n  resetGame() {\n    this.gameOver = false;\n    this.sequence = [];\n  }\n  setN(firework) {\n    if (firework instanceof Firework){\n      return 10;\n    } else if (firework instanceof Particle) {\n      return 10;\n    } else {\n      return 0;\n    }\n  }\n\n  explode(firework) {\n    // debugger;\n    if (firework.gunPowder > 0){\n      for (let i = 0; i < this.setN(firework); i++) {\n        // makeCircle\n        let rad = Util.makeCircle(Util.getRandomInteger(-50, 50));\n        let newPos = [firework.pos[0] + rad[0], firework.pos[1] + rad[1]];\n        // debugger;\n        let particle = new Particle({pos: newPos, game: this, startPos: firework.pos, gunPowder: firework.gunPowder - 1});\n        this.addParticle(particle);\n      }\n      firework.gunPowder -= 1;\n    }\n  }\n\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/human.js":
/*!**********************!*\
  !*** ./lib/human.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Firework = __webpack_require__(/*! ./firework */ \"./lib/firework.js\");\nclass Player {\n  constructor(canvas, game) {\n    this.canvas = canvas;\n    this.game = game;\n    this.pos = (canvas.width / 2, canvas.height);\n    this.target = [];\n    this.playerSequence = [];\n    this.shoot()\n  }\n\n  shootFirework(target, game) {\n    const firework = new Firework({target: target, game: game});\n    this.playerSequence.push(firework.colorName);\n    this.game.addFirework(firework);\n  }\n\n  shoot() {\n    let that = this;\n    that.canvas.addEventListener('mousedown', (e) => {\n      e.preventDefault();\n      let x = e.clientX;\n      let y = e.clientY;\n      that.shootFirework([x, y], that.game);\n    })\n  }\n\n  inputSequence() {\n    while (this.playerSequence < this.game.sequence) {\n      this.shoot()\n    }\n\n    return this.playerSequence;\n  }\n\n\n}\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack:///./lib/human.js?");

/***/ }),

/***/ "./lib/particle.js":
/*!*************************!*\
  !*** ./lib/particle.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n\nclass Particle {\n  constructor(options) {\n    this.pos = options.pos;\n    this.startPos = options.startPos;\n    this.game = options.game;\n    this.vel = Util.getRandomInteger(-5, 5);\n    this.radius = 3;\n    this.trail = [options.startPos];\n\n    if (options.gunPowder >= 0) {\n      this.gunPowder = options.gunPowder;\n    } else {\n      this.gunPowder = 3;\n    }\n    this.gravity = 0.5;\n    // this.path = options.path;\n    this.lifespan = 1;\n    if (options.startPos !== undefined) {\n      // debugger;\n      this.setColor(options.startPos[0])\n    } else {\n      this.color = \"#ffffff\"\n    };\n  }\n\n  setColor(pos) {\n    const section = innerWidth / 6;\n    // debugger;\n\n    if (pos >= 0 && pos < section) {\n      this.color = \"#F03D17\";\n      this.colorName = 'red';\n    } else if (pos >= section && pos < section * 2) {\n      this.color = \"#F08D17\";\n      this.colorName = 'orange';\n    } else if (pos >= section * 2 && pos < section * 3) {\n      this.color = \"#F6EF09\";\n      this.colorName = 'yellow';\n    } else if (pos >= section * 3 && pos < section * 4) {\n      this.color = \"#09F61B\";\n      this.colorName = 'green';\n    } else if (pos >= section * 4 && pos < section * 5) {\n      this.color = \"#09E0F6\";\n      this.colorName = 'blue';\n    } else if (pos >= section * 5 && pos < section * 6) {\n      this.color = \"#F209F6\";\n      this.colorName = 'pink';\n    } else {\n      this.color = \"#ffffff\";\n    }\n  }\n\n  draw(ctx, trail) {\n    // debugger;\n    // debugger;\n    let grd = ctx.createLinearGradient(trail[0][0], trail[0][1], trail[2][0], trail[2][1]);\n    grd.addColorStop(0, this.color);\n    grd.addColorStop(0.99, \"#ffffff\")\n    grd.addColorStop(1, \"transparent\");\n\n    ctx.beginPath();\n\n    ctx.strokeStyle = grd;\n    ctx.lineWidth = this.radius;\n    ctx.moveTo(trail[0][0], trail[0][1]);\n\n    // ctx.fillStyle = this.color;\n\n\n    // ctx.arc(\n    //   this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n    // );\n\n    // ctx.fill();\n    ctx.lineTo(trail[1][0], trail[1][1]);\n    ctx.lineTo(trail[2][0], trail[2][1]);\n    ctx.stroke();\n    // ctx.closePath()\n    // requestAnimationFrame(this.draw);\n  }\n\n  update(ctx) {\n\n    if (this.trail.length >= 3) {\n      this.trail.shift();\n    }\n    this.trail.push(this.pos);\n\n    if (this.lifespan <= 0){\n      this.remove();\n    }\n    this.pos[0] += this.vel;\n    this.pos[1] += this.vel;\n    this.vel *= this.gravity;\n    this.trail.push([this.pos[0] + this.vel, this.pos[1] + this.vel]);\n    this.lifespan -= 1;\n\n\n    // this.vel *= this.gravity;\n\n    this.draw(ctx, this.trail);\n  }\n\n  remove() {\n    this.game.removeParticle(this)\n  }\n\n}\n\n\nmodule.exports = Particle;\n\n// requestAnimationFrame\n\n\n//# sourceURL=webpack:///./lib/particle.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nconst Util = {\n  // dist(pos1, pos2) {\n  //   return Math.sqrt(\n  //     Math.pow(pos2[0] - pos1[0], 2) + Math.pow(pos2[1] - pos1[1], 2)\n  //   );\n  // },\n  // //\n  // // norm(vec) {\n  // //   return Util.dist([500, 750], vec);\n  // // },\n  // //\n  // angle(startPos, targetPos) {\n  //   return Math.atan2((targetPos[1] - startPos[1]), (targetPos[0] - startPos[0]));\n  // },\n  //\n  // getRandomAngle() {\n  //   return Math.floor(Math.random() * 360) ;\n  // },\n\n  makeCircle(rad) {\n    let r = 2 * (rad * Math.sqrt(Math.random()));\n    let theta = Math.random() * 2 * Math.PI;\n\n    return [(r * Math.cos(theta)), (r * Math.sin(theta))];\n  },\n\n\n  getRandomInteger(min, max) {\n    return Math.floor(Math.random() * (max - min) + min);\n  }\n\n}\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });