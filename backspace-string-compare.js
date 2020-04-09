// https://leetcode.com/problems/backspace-string-compare/
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaced = (str) => {
  let s = str.split('')
  while (true) {
    if (!/#/.test(s)) {
      return s.join('')
    }
    const index = s.indexOf('#')
    if (index > 0) {
      s.splice(index-1, 2)
    } else {
      s.splice(index, 1)
    }
  }
}
var backspaceCompare = function(S, T) {
  return backspaced(S) === backspaced(T)
};
