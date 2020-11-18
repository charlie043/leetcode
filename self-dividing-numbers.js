// https://leetcode.com/problems/self-dividing-numbers/
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const ret = []
  for (let i = left; i <= right; i++) {
    const s = i.toString()
    if (s.length === 1) {
      ret.push(i)
    } else {
      const nums = s.split('').map((n) => parseInt(n))
      const isSelfDividing = nums.reduce((sd, n) => {
        return sd && i % n === 0
      }, true)
      if (isSelfDividing) {
        ret.push(i)
      }
    }
  }
  return ret
};
