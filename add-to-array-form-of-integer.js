// https://leetcode.com/problems/add-to-array-form-of-integer/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  const a = A.reverse()
  const k = K.toString().split('').map((n) => parseInt(n)).reverse()
  const ret = []
  let carry = false
  const len = Math.max(a.length, k.length)
  for (let i = 0; i < len; i++) {
    let sum = (a[i] || 0) + (k[i] || 0)
    if (carry) sum++
    if (sum > 9) {
      carry = true
      ret.push(sum - 10)
    } else {
      ret.push(sum)
      carry = false
    }
  }
  if (carry) ret.push(1)
  return ret.reverse()
};
