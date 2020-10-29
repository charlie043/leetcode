// https://leetcode.com/problems/excel-sheet-column-title/
/**
 * @param {number} n
 * @return {string}
 */
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const len = alphabets.length
var convertToTitle = function(n) {
  let str = ''
  while (n > 0) {
    const m = (n - 1) % len
    n = (n - 1 - m) / len
    str = alphabets[m] + str
  }
  return str
};
