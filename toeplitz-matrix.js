// https://leetcode.com/problems/toeplitz-matrix/
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const min = Math.min(i, j)
      const r = i - min
      const c = j - min
      if (matrix[i][j] !== matrix[r][c]) {
        return false
      }
    }
  }
  return true
};
