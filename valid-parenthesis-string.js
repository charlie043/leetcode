// https://leetcode.com/problems/valid-parenthesis-string/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (['(', '*'].includes(c)) {
      count++;
    } else if (c === ')') {
      if (count < 1) {
        return false
      } else {
        count--
      }
   }
  }
    
  count = 0;
  for (let i = s.length - 1; i >= 0; i --) {
    let c = s[i]
    if ([')', '*'].includes(c)) {
      count++
    } else if (c === '(') {
      if (count < 1) {
        return false
      } else {
        count--
      }
    }
  }
  return true
};
