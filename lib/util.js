

const Util = {

  makeCircle(rad) {
    let r = 2 * (rad * Math.sqrt(Math.random()));
    let theta = Math.random() * 2 * Math.PI;

    return [(r * Math.cos(theta)), (r * Math.sin(theta))];
  },


  getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

}

module.exports = Util;
