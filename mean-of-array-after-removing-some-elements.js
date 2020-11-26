// https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  const l = arr.length
  const i = l * 0.05
  arr.sort((a, b) => a - b)
  arr.splice(l - i, l)
  arr.splice(0, i)
  const sum = arr.reduce((s, n) => {
    return s + n
  }, 0)
  return sum / (l - 2*i)
};
