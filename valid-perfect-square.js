// https://leetcode.com/problems/valid-perfect-square/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let n = 1
  let s = n*n
  while(s <= num) {
    if (s === num) return true
    n++
    s = n*n
  }
  return false
};
