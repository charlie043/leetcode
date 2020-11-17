// https://leetcode.com/problems/special-positions-in-a-binary-matrix/
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  let count = 0
  const m = mat.length
  const n = mat[0].length
  const skipM = []
  const skipN = []
  const isSpecial = ([x, y], [dx, dy]) => {
    while (
      0 <= x &&
      x < m &&
      0 <= y &&
      y < n
    ) {
      x += dx
      y += dy
      if (mat[x] && mat[x][y] === 1) {
        skipM[x] = true
        skipN[y] = true
        return false
      }
    }
    return true
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (skipM[i] || skipN[j]) continue
      if (mat[i][j] === 1) {
        if (
          isSpecial([i, j], [-1, 0]) &&
          isSpecial([i, j], [1, 0]) &&
          isSpecial([i, j], [0, 1]) &&
          isSpecial([i, j], [0, -1])
        ) {
          skipM[i] = true
          skipN[j] = true
          count++
        }
      }
    }
  }
  return count
};
