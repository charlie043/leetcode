// https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
/**
 * @param {number[]} chips
 * @return {number}
 */
const getCost = (chips) => {
  const map = {} 
  let max = 0
  chips.forEach((chip) => {
    map[chip] = map[chip] ? map[chip] + 1 : 1
    if (map[chip] > (map[max] || 0)) max = chip
  }) 
  
  let cost = 0
  Object.keys(map).forEach((chip) => {
    if (chip === max) return
    cost += map[chip]
  })
  return cost
}
var minCostToMoveChips = function(chips) {
  if (!chips.length) {
    return 0
  }
  const odd = chips.filter(n => n % 2 === 1)
  const event = chips.filter(n => n % 2 === 0)
  return Math.min(getCost(odd), getCost(event))
};
