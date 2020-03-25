// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
  const a2 = a.toString(2)
  const b2 = b.toString(2)
  const c2 = c.toString(2)
  const len = Math.max(a2.length, b2.length, c2.length)
  const a2f = a2.padStart(len, '0')
  const b2f = b2.padStart(len, '0')
  const c2f = c2.padStart(len, '0')
  let count = 0
  for (let i = 0; i < len; i++) {
    const _a = a2f[i]
    const _b = b2f[i]
    const _c = c2f[i]
    if (_c === '0') {
      if (_a === '1') count++
      if (_b === '1') count++
    } else {
      if (_a === '0' && _b === '0') {
        count++
      }
    }
  }
  return count
};
