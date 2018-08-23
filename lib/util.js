const Util = {
  dist(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos2[0] - pos1[0], 2) + Math.pow(pos2[1] - pos1[1], 2)
    );
  },

  norm(vec) {
    return Util.dist([500, 750], vec);
  },

  angle(startPos, targetPos) {
    return Math.atan2((targetPos[1] - startPos[1]), (targetPos[0] - startPos[0]));
  },


}

module.exports = Util;
