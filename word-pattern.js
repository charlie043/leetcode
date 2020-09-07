// https://leetcode.com/problems/word-pattern/
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const map = {}
  const set = new Set()
  const words = str.split(' ')
  if (pattern.length !== words.length) {
    return false
  }
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const p = pattern[i]
    if (map[p]) {
      if (map[p] !== word) {
        return false
      }
    } else {
      if (set.has(word)) {
        return false
      }
      map[p] = word
      set.add(word)
    }
  }
  return true
};
