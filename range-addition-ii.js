// https://leetcode.com/problems/range-addition-ii/
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  if (!ops.length) {
    return m * n
  }
  const minX = Math.min(...ops.map(([x, y]) => x))
  const minY = Math.min(...ops.map(([x, y]) => y))
  return minX * minY
};
