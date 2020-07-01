// https://leetcode.com/problems/arranging-coins/
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  if (n===0) return 0
  if (n===1) return 1
  let i = 1
  while (true) {
    if (n < i) {
      return i - 1
    }
    n -= i
    i++
  }
};
