// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
  return word1.reduce((c, w) => c+w, '') === word2.reduce((c, w) => c+w, '')
};
