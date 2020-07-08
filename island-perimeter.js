// https://leetcode.com/problems/island-perimeter/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const m = grid.length
  const n = grid[0].length
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        if (!grid[i-1] || grid[i-1][j] !== 1) count++
        if (!grid[i+1] || grid[i+1][j] !== 1) count++
        if (grid[i][j-1] !== 1) count++
        if (grid[i][j+1] !== 1) count++
      }
    }
  }
  return count
};
