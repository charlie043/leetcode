// https://leetcode.com/problems/reverse-bits/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let b = n.toString(2)
  b = b.padStart(32, '0')
  return parseInt(b.split("").reverse().join(""), 2)
};
