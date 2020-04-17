// https://leetcode.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
const setIsland = (grid, i, j) => {
  if (grid[i] && grid[i][j] === '1') {
    grid[i][j] = '2'
    island(grid, i, j)
  } 
}
const island = (grid, i, j) => {
  setIsland(grid, i-1, j)
  setIsland(grid, i+1, j)
  setIsland(grid, i, j-1)
  setIsland(grid, i, j+1)
}

var numIslands = function(grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
        island(grid, i, j)
      } 
    }
  }
  return count
};
