// https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/
/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
  return Math.max(...left, ...right.map(m => n - m))
};
