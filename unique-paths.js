// https://leetcode.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const map = []
  for (let i = 0; i < m; i++) {
    map.push(Array(n))
  }
  map[0][0] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j] = map[i][j] || (map[i-1] && map[i-1][j] || 0) + (map[i][j-1] || 0)
    }   
  }
  return map[m-1][n-1]
};
