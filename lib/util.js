const Util = {
  dist(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },

  norm(vec) {
    return Util.dist([0, 0], vec);
  },

  angle(startPos, targetPos) {
    return Math.atan2((targetPos[1] - startPos[1]), (targetPos[0] - startPos[0])) * 180 / Math.PI;
  }

}

module.exports = Util;
