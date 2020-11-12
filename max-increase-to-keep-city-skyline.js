// https://leetcode.com/problems/max-increase-to-keep-city-skyline/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const lineM = Array(m).fill(0)
  const lineN = Array(n).fill(0)
  let sumBefore = 0
  let sumAfter = 0
  for (let i = 0; i < m; i++) {
    lineM[i] = Math.max(...grid[i])
    for (let j = 0; j < n; j++) {
      lineN[j] = Math.max(lineN[j], grid[i][j])
      sumBefore += grid[i][j]
    }
  }
  const ret = []
  for (let i = 0; i < m; i++) {
    ret.push([])
    for (let j = 0; j < n; j++) {
      ret[i][j] = Math.min(lineM[i], lineN[j])
      sumAfter += ret[i][j]
    }
  }
  return sumAfter - sumBefore
};
