// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
  let sum = 0
  piles.sort((a, b) => b - a)
  while (piles.length) {
    piles.shift()
    sum += piles.shift()
    piles.pop()
  }
  return sum
};
