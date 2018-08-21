const Util = {
  dist(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },

  norm(vec) {
    return Util.dist([0, 0], vec);
  }

  angle(startPos, targetPos) {
    return 1 / Math.tan((targetPos[1] - startPos[1]) / (targetPos[0] - startPos[0]))
  }
}

module.exports = Util;
