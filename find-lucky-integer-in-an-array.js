// https://leetcode.com/problems/find-lucky-integer-in-an-array/
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const freq = {}
  arr.forEach((n) => {
    freq[n] = (freq[n] || 0) + 1
  })
  const keys = Object.keys(freq).sort((a, b) => b - a)
  for (let i = 0; i < keys.length; i++) {
    const n = parseInt(keys[i])
    if (freq[n] === n) {
      return n
    }
  }
  return -1
};
