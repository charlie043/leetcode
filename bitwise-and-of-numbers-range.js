// https://leetcode.com/problems/bitwise-and-of-numbers-range/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  let count = 0
  while(m!=n) {
    m >>= 1 
    n >>= 1
    count++
  }
  return m << count
};
