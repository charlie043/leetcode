// https://leetcode.com/problems/smallest-range-i/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  const max = Math.max(...A) - K
  const min = Math.min(...A) + K
  return max - min > 0 ? max - min : 0
};
