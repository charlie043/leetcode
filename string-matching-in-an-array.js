// https://leetcode.com/problems/string-matching-in-an-array/
/**
 * @param {string[]} words
 * @return {string[]}
 */
const isIncludes = (s, sArray) => {
  for (let _s of sArray) {
    if (_s.indexOf(s) > -1) return true
  }
  return false
}
var stringMatching = function(words) {
  const ret = []
  words.sort((a, b) => a.length - b.length)
  words.forEach((str, i) => {
    if (isIncludes(str, words.slice(i+1, words.length))) {
      ret.push(str)
    }
  })
  return ret
};
