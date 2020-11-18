// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  const s = S.split('')
  let i = 1
  while (i < s.length) {
    if (s[i-1] === s[i]) {
      s.splice(i-1, 2)
      i--
    } else {
      i++
    }
  }
  return s.join('')
};
