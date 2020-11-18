// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  const indices =  mat.map((row, index) => {
    const n = row.reduce((s, n) => s+n, 0)
    return [index, n]
  })
  .sort(([i1, n1], [i2, n2]) => (n1 - n2))
  .map(([i]) => {
    return i
  })
  return indices.splice(0, k)
};
