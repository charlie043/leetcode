// https://leetcode.com/problems/shuffle-string/
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  return indices.map((index, i) => {
    return [index, s[i]]
  }).sort(([a], [b]) => {
    return a-b
  }).map(([i, s]) => s).join('')
};
