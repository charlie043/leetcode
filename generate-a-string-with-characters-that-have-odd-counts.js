// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  if (n % 2) {
    return Array(n).fill('a').join('')
  } else {
    return Array(n-1).fill('a').join('') + 'b'
  }
};
