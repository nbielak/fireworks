const Util = {
  dist(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos2[0] - pos1[0], 2) + Math.pow(pos2[1] - pos1[1], 2)
    );
  },

  norm(vec) {
    return Util.dist([0, 0], vec);
  },

  angle(startPos, targetPos) {
    return Math.atan2((targetPos[1] - startPos[1]), (targetPos[0] - startPos[0])) * 180 / Math.PI;
  },

  getDirection(startPos, targetPos) {
    const angle = angle(startPos, targetPos);
    const dis = dist(startPos, targetPos);
    let x = startPos[0] * Math.cos(angle) / dist;
    let y = startPos[1] * Math.sin(angle) / dist;

    return [x, y]
  }

}

module.exports = Util;
