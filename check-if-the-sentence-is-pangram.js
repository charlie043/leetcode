// https://leetcode.com/problems/check-if-the-sentence-is-pangram/
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  let chars = 'abcdefghijklmnopqrstuvwxyz'.split('')
  if (sentence.length < chars.length) {
    return false
  }
  sentence.split('').forEach((c) => {
    const i = chars.indexOf(c)
    if (i >= 0) {
      chars.splice(i, 1)
    }
  })
  return chars.length === 0
};
