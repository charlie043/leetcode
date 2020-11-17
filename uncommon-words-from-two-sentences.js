// https://leetcode.com/problems/uncommon-words-from-two-sentences/
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  const list = [...A.split(' '), ...B.split(' ')]
  const ret = new Set(list)
  const check = new Set()
  for (let i = 0; i < list.length; i++) {
    const word = list[i]
    if (check.has(word)) {
      ret.delete(word)
    } else {
      check.add(word)
    }
  }
  return Array.from(ret)
};
