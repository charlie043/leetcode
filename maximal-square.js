// https://leetcode.com/problems/maximal-square/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const square = (i, j, matrix) => {
  if (matrix[i][j] === '0') return 0
  let s = 1
  while(true) {
    const _i = i + s
    const _j = j + s
    if (_i >= matrix.length || _j >= matrix[0].length) {
      return s
    }
    
    let t = s
    while (t) {
      if (
        matrix[_i-t][_j] !== '1' ||
        matrix[_i][_j-t] !== '1' ||
        matrix[_i][_j]   !== '1'
      ) {
        return s
      }
      t--
    }

    s++
  }
}

var maximalSquare = function(matrix) {
  let max = 0
  const n = matrix.length
  if (!n) return max
  
  const m = matrix[0].length
  for (let i = 0; i < n; i++) {
    if (n-i <= max) continue
    for (let j = 0; j < m; j++) {
      if (m-j <= max) continue
      const s = square(i, j, matrix)
      if (s > max) {
        max = s
      }
    }
  }
  return Math.pow(max, 2)
};
