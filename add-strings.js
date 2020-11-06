// https://leetcode.com/problems/add-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const n1 = num1.split('').reverse()
  const n2 = num2.split('').reverse()
  const len = Math.max(n1.length, n2.length)
  let carry = false
  const ret = []
  for (let i = 0; i < len; i++) {
    let n = parseInt(n1[i] || 0) + parseInt(n2[i] || 0)
    if (carry) {
      n++
      carry = false
    }
    if (n > 9) {
      carry = true
      ret.push(n - 10)
    } else {
      ret.push(n)
    }
  }
  if (carry) {
    ret.push(1)
  }
  return ret.reverse().join('')
};
