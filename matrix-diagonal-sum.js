// https://leetcode.com/problems/matrix-diagonal-sum/
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  const m = mat.length
  let sum = 0
  for (let i = 0; i < m; i++) {
    sum += mat[i][i]
    const r = m-i-1
    if (i !== r) {
      sum += mat[r][i]
    }
  }
  return sum
};
