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

eval("\nfunction Animate(game, context) {\n  this.game = game;\n  this.context = context;\n  this.player = this.game.addPlayer();\n\n  const render = () => {\n    context.clearRect(0, 0, innerWidth, innerHeight);\n    this.game.draw(context);\n    requestAnimationFrame(render);\n  };\n\n  render();\n}\n\nmodule.exports = Animate;\n\n\n//# sourceURL=webpack:///./lib/animate.js?");

/***/ }),

/***/ "./lib/firework.js":
/*!*************************!*\
  !*** ./lib/firework.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Particle = __webpack_require__(/*! ./particle.js */ \"./lib/particle.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n\n\nclass Firework extends Particle {\n  constructor(options) {\n    super(options);\n    this.pos = this.pos || [innerWidth / 2, innerHeight];\n    this.target = options.target;\n    this.speed = 100;\n    this.radius = 5;\n    this.game = options.game;\n    this.vel = [(this.target[0] - this.pos[0]) / this.speed, (this.target[1] - this.pos[1]) / this.speed]\n\n\n  }\n\n  update(ctx) {\n    // ctx.clearRect(0, 0, innerWidth, innerHeight)\n    // const lastPos = this.pos;\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n    if (this.pos[1] <= this.target[1]) {\n      this.remove();\n    } else {\n      this.draw(ctx);\n    }\n\n  }\n\n\n  remove() {\n    this.game.remove(this);\n  }\n\n}\n\nmodule.exports = Firework;\n\n\n//# sourceURL=webpack:///./lib/firework.js?");

/***/ }),

/***/ "./lib/fireworks.js":
/*!**************************!*\
  !*** ./lib/fireworks.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate.js */ \"./lib/animate.js\");\n/* harmony import */ var _animate_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_animate_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('game-canvas');\n  const context = canvas.getContext(\"2d\");\n\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_1___default.a(canvas, context);\n  const animate = _animate_js__WEBPACK_IMPORTED_MODULE_0___default.a;\n  animate(game, context);\n\n})\n\n\n//# sourceURL=webpack:///./lib/fireworks.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Firework = __webpack_require__(/*! ./firework.js */ \"./lib/firework.js\");\nconst Player = __webpack_require__(/*! ./human.js */ \"./lib/human.js\");\nconst Particle = __webpack_require__(/*! ./particle.js */ \"./lib/particle.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n\nclass Game {\n  constructor(canvas, context) {\n    this.canvas = canvas;\n    this.context = context;\n    this.fireworks = [];\n    this.particles = [];\n    this.player = [];\n\n    this.addPlayer();\n  }\n\n  addFirework(firework) {\n    this.fireworks.push(firework);\n  }\n\n  addParticle(particle) {\n    this.particles.push(particle);\n  }\n\n\n  addPlayer() {\n    let player = new Player(this.canvas, this);\n    this.player.push(player);\n  }\n\n  draw(context) {\n    // requestAnimationFrame(this.draw)\n    console.log(this.particles.slice(0, 5));\n    this.fireworks.forEach((firework) => {\n\n      firework.update(context)\n    });\n    this.particles.forEach(particle => particle.update(context));\n  }\n\n  remove(firework) {\n    this.fireworks.splice(this.fireworks.indexOf(firework), 1);\n    this.explode(firework);\n  }\n\n  removeParticle(particle) {\n    this.particles.splice(this.particles.indexOf(particle), 1)\n  }\n\n  explode(firework) {\n    // debugger;\n    for (let i = 0; i < 200; i++) {\n      let newPos = [firework.pos[0] + (Util.getRandomInteger(-50, 50) * Math.PI), firework.pos[1] + (Util.getRandomInteger(-50, 50) * Math.PI)];\n      // debugger;\n      let particle = new Particle({pos: newPos, game: this, startPos: firework.pos});\n      this.addParticle(particle);\n    }\n  }\n\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/human.js":
/*!**********************!*\
  !*** ./lib/human.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Firework = __webpack_require__(/*! ./firework */ \"./lib/firework.js\");\nclass Player {\n  constructor(canvas, game) {\n    this.canvas = canvas;\n    this.game = game;\n    this.pos = (canvas.width / 2, canvas.height);\n    this.mouseLoc = [0, 0];\n    this.target = [];\n\n    addEventListener('mousemove', (event) => {\n      let x = event.clientX;\n      let y = event.clientY;\n      this.mouseLoc = [x, y];\n    })\n\n    this.shoot()\n\n  }\n\n  shootFirework(target, game) {\n    const firework = new Firework({target: target, game: game});\n    this.game.addFirework(firework);\n  }\n\n  shoot() {\n    let that = this;\n    that.canvas.addEventListener('click', (e) => {\n      e.preventDefault();\n      let x = e.clientX;\n      let y = e.clientY;\n      that.shootFirework([x, y], that.game);\n    })\n  }\n\n\n}\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack:///./lib/human.js?");

/***/ }),

/***/ "./lib/particle.js":
/*!*************************!*\
  !*** ./lib/particle.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n\nclass Particle {\n  constructor(options) {\n    this.pos = options.pos;\n    this.startPos = options.startPos;\n    this.game = options.game;\n    this.vel = Util.getRandomInteger(-1, 1);\n    this.radius = 2;\n\n    this.gravity = 0.5\n    // this.path = options.path;\n    this.lifespan = 40;\n    if (options.startPos !== undefined) {\n      // debugger;\n      this.setColor(options.startPos[0])\n    } else {\n      this.color = \"#ffffff\"\n    };\n  }\n\n  setColor(pos) {\n    const section = innerWidth / 6;\n    // debugger;\n\n    if (pos >= 0 && pos < section) {\n      console.log(\"red\")\n      this.color = \"#F03D17\";\n    } else if (pos >= section && pos < section * 2) {\n      console.log(\"orange\")\n      this.color = \"#F08D17\";\n    } else if (pos >= section * 2 && pos < section * 3) {\n      console.log(\"yellow\")\n      this.color = \"#F6EF09\";\n    } else if (pos >= section * 3 && pos < section * 4) {\n      console.log(\"green\")\n      this.color = \"#09F61B\";\n    } else if (pos >= section * 4 && pos < section * 5) {\n      console.log(\"blue\")\n      this.color = \"#09E0F6\";\n    } else if (pos >= section * 5 && pos < section * 6) {\n      console.log(\"pink\")\n      this.color = \"#F209F6\";\n    } else {\n      console.log(\"white\")\n      this.color = \"#ffffff\";\n    }\n  }\n\n  draw(ctx) {\n    ctx.beginPath();\n    // ctx.strokeStyle = this.color;\n    // ctx.lineWidth = this.radius;\n    // ctx.moveTo(lastPos[0], lastPos[1]);\n\n    ctx.fillStyle = this.color;\n\n\n    ctx.arc(\n      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n    );\n\n    ctx.fill();\n    // ctx.lineTo(pos[0], pos[1]);\n    // ctx.stroke();\n    ctx.closePath()\n    // requestAnimationFrame(this.draw);\n  }\n\n  update(ctx) {\n    const lastPos = this.pos;\n    if (this.lifespan <= 0)\n      this.remove();\n    else {\n      this.pos[0] /= this.vel;\n      this.pos[1] -= this.vel;\n      // this.vel *= this.gravity;\n      this.lifespan -= 1\n    }\n\n    // this.vel *= this.gravity;\n\n    this.draw(ctx);\n  }\n\n  remove() {\n    this.game.removeParticle(this)\n  }\n\n}\n\n\nmodule.exports = Particle;\n\n// requestAnimationFrame\n\n\n//# sourceURL=webpack:///./lib/particle.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  // dist(pos1, pos2) {\n  //   return Math.sqrt(\n  //     Math.pow(pos2[0] - pos1[0], 2) + Math.pow(pos2[1] - pos1[1], 2)\n  //   );\n  // },\n  //\n  // norm(vec) {\n  //   return Util.dist([500, 750], vec);\n  // },\n  //\n  // angle(startPos, targetPos) {\n  //   return Math.atan2((targetPos[1] - startPos[1]), (targetPos[0] - startPos[0]));\n  // },\n\n\n  getRandomInteger(min, max) {\n    return Math.floor(Math.random() * (max - min) + min) ;\n  }\n\n}\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });