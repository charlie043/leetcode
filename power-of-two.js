// https://leetcode.com/problems/power-of-two/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n < 1) return false
  let _n = n
  while (true) {
    if (_n === 1) return true
    if (_n % 2 === 1) return false
    _n /= 2
  }
};
