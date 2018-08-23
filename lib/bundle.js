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
/***/ (function(module, exports, __webpack_require__) {

eval("const Particle = __webpack_require__(/*! ./particle.js */ \"./lib/particle.js\");\nconst Firework = __webpack_require__(/*! ./firework.js */ \"./lib/firework.js\");\n\n\nfunction Animate(game, context) {\n  this.game = game;\n  this.context = context;\n  this.player = this.game.addPlayer();\n\n  const render = () => {\n    context.clearRect(0, 0, innerWidth, innerHeight);\n    this.game.draw(context)\n    requestAnimationFrame(render);\n  };\n\n  render();\n}\n\nmodule.exports = Animate;\n\n\n//# sourceURL=webpack:///./lib/animate.js?");

/***/ }),

/***/ "./lib/firework.js":
/*!*************************!*\
  !*** ./lib/firework.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Particle = __webpack_require__(/*! ./particle.js */ \"./lib/particle.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n\n\nclass Firework extends Particle {\n  constructor(options) {\n    super(options);\n    this.target = options.target;\n    this.speed = 100;\n    this.game = options.game;\n    this.vel = [(this.target[0] - this.pos[0]) / this.speed, (this.target[1] - this.pos[1]) / this.speed]\n\n  }\n\n  update(ctx) {\n    // ctx.clearRect(0, 0, innerWidth, innerHeight)\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n    this.draw(ctx);\n  }\n\n  exploded() {\n    if (this.pos === this.target) {\n      this.exploded = true;\n    }\n  }\n\n  remove() {\n    this.game.remove(this);\n  }\n\n}\n\nmodule.exports = Firework;\n\n\n//# sourceURL=webpack:///./lib/firework.js?");

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

eval("const Firework = __webpack_require__(/*! ./firework.js */ \"./lib/firework.js\");\nconst Player = __webpack_require__(/*! ./human.js */ \"./lib/human.js\");\n\nclass Game {\n  constructor(canvas, context) {\n    this.canvas = canvas;\n    this.context = context;\n    this.fireworks = [];\n    this.player = [];\n  }\n\n  addFirework(firework) {\n    this.fireworks.push(firework);\n  }\n\n\n  addPlayer() {\n    let player = new Player(this.canvas, this);\n    this.player.push(player);\n  }\n\n  draw(context) {\n    console.log(this.fireworks);\n    this.fireworks.forEach((firework, idx) => {\n      if (firework.pos[1] <= firework.target[1]) {\n        debugger;\n        firework.remove();\n      }\n      firework.update(context)\n    });\n  }\n\n  remove(firework) {\n    this.fireworks.splice(this.fireworks.indexOf(firework), 1);\n  }\n\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/human.js":
/*!**********************!*\
  !*** ./lib/human.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Firework = __webpack_require__(/*! ./firework */ \"./lib/firework.js\");\nclass Player {\n  constructor(canvas, game) {\n    this.canvas = canvas;\n    this.game = game;\n    this.pos = (canvas.width / 2, canvas.height);\n    this.mouseLoc = [0, 0];\n    this.target = [];\n\n    addEventListener('mousemove', (event) => {\n      let x = event.clientX;\n      let y = event.clientY;\n      this.mouseLoc = [x, y];\n    })\n\n    this.shoot()\n\n  }\n\n  shootFirework(target, game) {\n    const firework = new Firework({target: target, game: game});\n    this.game.addFirework(firework);\n  }\n\n  shoot() {\n    let that = this;\n    that.canvas.addEventListener('click', (e) => {\n      e.preventDefault();\n      let x = e.clientX;\n      let y = e.clientY;\n      that.shootFirework([x, y]), that.game;\n    })\n  }\n\n\n}\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack:///./lib/human.js?");

/***/ }),

/***/ "./lib/particle.js":
/*!*************************!*\
  !*** ./lib/particle.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n\nclass Particle {\n  constructor(options) {\n    this.pos = this.pos || [innerWidth / 2, innerHeight];\n    this.vel = [1,1];\n    this.radius = 10;\n    this.color = \"#ffffff\";\n    // this.path = options.path;\n  }\n\n  draw(ctx) {\n\n    ctx.beginPath();\n\n    ctx.arc(\n      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n    );\n    ctx.fillStyle = this.color;\n    ctx.fill();\n\n    ctx.closePath()\n  }\n\n  // update(ctx) {\n  //\n  //\n  //   let x = 1 + this.pos[0];\n  //   let y = 1 + this.pos[1];\n  //\n  //   this.pos = [x, y];\n  //\n  //   this.draw(ctx);\n  // }\n\n\n}\n\n\nmodule.exports = Particle;\n\n// requestAnimationFrame\n\n\n//# sourceURL=webpack:///./lib/particle.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  dist(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos2[0] - pos1[0], 2) + Math.pow(pos2[1] - pos1[1], 2)\n    );\n  },\n\n  norm(vec) {\n    return Util.dist([500, 750], vec);\n  },\n\n  angle(startPos, targetPos) {\n    return Math.atan2((targetPos[1] - startPos[1]), (targetPos[0] - startPos[0]));\n  },\n\n\n}\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });