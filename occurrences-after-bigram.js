// https://leetcode.com/problems/occurrences-after-bigram/
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const ret = []
  const words = text.split(' ')
  for (let i = 0; i < words.length - 2; i++) {
    const _first = words[i]
    const _second = words[i+1]
    const third = words[i+2]
    if (first === _first && second === _second) {
      ret.push(third)   
    }
  }
  return ret
};
