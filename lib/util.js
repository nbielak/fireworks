

const Util = {
  // dist(pos1, pos2) {
  //   return Math.sqrt(
  //     Math.pow(pos2[0] - pos1[0], 2) + Math.pow(pos2[1] - pos1[1], 2)
  //   );
  // },
  // //
  // // norm(vec) {
  // //   return Util.dist([500, 750], vec);
  // // },
  // //
  // angle(startPos, targetPos) {
  //   return Math.atan2((targetPos[1] - startPos[1]), (targetPos[0] - startPos[0]));
  // },
  //
  // getRandomAngle() {
  //   return Math.floor(Math.random() * 360) ;
  // },

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
