// https://leetcode.com/problems/xor-operation-in-an-array/
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let ret = 0
  for (let i = 0; i < n; i++) {
    ret ^= (start + 2*i)
  }
  return ret
};
