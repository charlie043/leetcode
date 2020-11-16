// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let max = 0
  let count = 0
  for (let i = 0; i < s.length; i++) {
    const _s = s[i]
    if (_s === '(') count++
    if (_s === ')') count--
    if (count > max) {
      max = count
    }
  }
  return max
};
