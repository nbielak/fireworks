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

eval("const Particle = __webpack_require__(/*! ./particle.js */ \"./lib/particle.js\");\nconst Firework = __webpack_require__(/*! ./firework.js */ \"./lib/firework.js\");\n\nlet firework = new Firework();\n\nfunction Animate(context) {\n\n\n  const render = () => {\n    firework.update(context);\n    requestAnimationFrame(render);\n  };\n\n  render();\n}\n\nmodule.exports = Animate;\n\n\n//# sourceURL=webpack:///./lib/animate.js?");

/***/ }),

/***/ "./lib/firework.js":
/*!*************************!*\
  !*** ./lib/firework.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Particle = __webpack_require__(/*! ./particle.js */ \"./lib/particle.js\");\n\nclass Firework extends Particle {\n  constructor(options) {\n    super(options);\n    // this.target = options.target;\n  }\n\n  exploded() {\n    if (this.pos === this.target) {\n      this.exploded = true;\n    }\n  }\n\n}\n\nmodule.exports = Firework;\n\n\n//# sourceURL=webpack:///./lib/firework.js?");

/***/ }),

/***/ "./lib/fireworks.js":
/*!**************************!*\
  !*** ./lib/fireworks.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate.js */ \"./lib/animate.js\");\n/* harmony import */ var _animate_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_animate_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('game-canvas');\n  const context = canvas.getContext(\"2d\");\n  const animate = _animate_js__WEBPACK_IMPORTED_MODULE_0___default.a;\n  animate(context);\n\n})\n\n\n//# sourceURL=webpack:///./lib/fireworks.js?");

/***/ }),

/***/ "./lib/particle.js":
/*!*************************!*\
  !*** ./lib/particle.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n\nclass Particle {\n  constructor(options) {\n    this.pos = this.pos || [500, 750];\n    this.vel = [1,1];\n    this.radius = 10;\n    this.color = \"#ffffff\";\n    // this.path = options.path;\n  }\n\n  draw(ctx) {\n\n\n    ctx.beginPath();\n\n    ctx.arc(\n      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n    );\n    ctx.fillStyle = this.color;\n    ctx.fill();\n\n    ctx.closePath()\n  }\n\n  update(ctx) {\n    ctx.clearRect(0, 0, innerWidth, innerHeight);\n\n    let x = 1 + this.pos[0];\n    let y = -1 + this.pos[1];\n\n    this.pos = [x, y];\n\n    this.draw(ctx);\n  }\n\n\n}\n\n\nmodule.exports = Particle;\n\n// requestAnimationFrame\n\n\n//# sourceURL=webpack:///./lib/particle.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  dist(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos2[0] - pos1[0], 2) + Math.pow(pos2[1] - pos1[1], 2)\n    );\n  },\n\n  norm(vec) {\n    return Util.dist([0, 0], vec);\n  },\n\n  angle(startPos, targetPos) {\n    return Math.atan2((targetPos[1] - startPos[1]), (targetPos[0] - startPos[0])) * 180 / Math.PI;\n  },\n\n  getDirection(startPos, targetPos) {\n    const angle = angle(startPos, targetPos);\n    const dis = dist(startPos, targetPos);\n    let x = startPos[0] * Math.cos(angle) / dist;\n    let y = startPos[1] * Math.sin(angle) / dist;\n\n    return [x, y]\n  }\n\n}\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });