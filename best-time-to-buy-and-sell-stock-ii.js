// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let sum = 0
  let i = 1
  let f = 0
  while (i < prices.length) {
    const pa = prices[f]
    const pb = prices[i]
    const pc = i+1 === prices.length ? pb - 1 : prices[i+1]
    if (pa <= pb) {
      if (pb > pc) {
        sum += pb - pa
        f = i+1
        i = f+1
      } else {
        i++       
      }
    } else {
      f = i
      i++
    }
  }
  return sum
};
