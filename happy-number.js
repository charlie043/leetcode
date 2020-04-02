// https://leetcode.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let num = n
  const set = new Set()
  while (true) {
    const digits = num.toString().split('')
    const sum = digits.reduce((s, _n) => {
      return s + Math.pow(_n, 2)
    }, 0)
    if (sum === 1) return true
    if (set.has(sum)) return false
    set.add(sum)
    num = sum
  }
};
