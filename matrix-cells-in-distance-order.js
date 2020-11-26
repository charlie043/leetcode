// https://leetcode.com/problems/matrix-cells-in-distance-order/
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  const ret = []
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      ret.push([i, j])
    }   
  }
  return ret.sort(([r1, c1], [r2, c2]) => {
    return (
      (Math.abs(r1 - r0) + Math.abs(c1 - c0))
      -
      (Math.abs(r2 - r0) + Math.abs(c2 - c0))
    )
  })
};
