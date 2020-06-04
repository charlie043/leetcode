// https://leetcode.com/problems/consecutive-characters/
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  if (!s) return 0
  let max = 1
  let count = 1
  let word = ''
  for (let i = 0; i < s.length; i++) {
    const w = s[i]
    if (w === word) {
      count++
      if (max < count) {
        max = count
      }
    } else {
      count = 1
      word = w
    }
  }
  return max  
};
