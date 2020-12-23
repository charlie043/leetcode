// https://leetcode.com/problems/count-the-number-of-consistent-strings/
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const r = new RegExp(`^[${allowed}]*$`)
  return words.filter((word) => r.test(word)).length
};
