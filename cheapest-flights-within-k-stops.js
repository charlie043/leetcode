// https://leetcode.com/problems/cheapest-flights-within-k-stops/
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */

const M = 99999
var findCheapestPrice = function(n, flights, src, dst, K) {
  let minPrice = M
  const next = (from, totalCost, totalStop) => {
    if (from === dst) {
      if (totalCost < minPrice) {
        minPrice = totalCost
      }
      return
    }
    if (totalStop > K || totalStop > n - 1) {
      return 
    }
    const ways =  flights.filter(([f, t, p]) => {
      return f === from
    })
    ways.forEach(([f, t, p]) => {
      if (totalCost + p < minPrice) {
        next(t, totalCost + p, totalStop + 1)
      }
    })
  }
  next(src, 0, 0)
  return minPrice === 99999 ? -1 : minPrice
};
