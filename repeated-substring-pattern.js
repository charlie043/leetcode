// https://leetcode.com/problems/repeated-substring-pattern/
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (s.length < 2) return false
  let pattern = ''
  for (let i = 0; i < s.length / 2; i++) {
    pattern += s[i]
    if (!s.split(pattern).join('').length) {
      return true
    } 
  }
  return false
};
