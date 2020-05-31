// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  const reach = new Set()
  let countChange = 0
  reach.add(0)
  for (let i = 0; i < n; i++) {
    if (reach.size === n) {
      break
    }
    connections.forEach(([from, to]) => {
      if (reach.has(from) && !reach.has(to)) {
        countChange++
        reach.add(to)
      }
      if (reach.has(to)) {
        reach.add(from)
      }
    })   
  }
  return countChange
};
