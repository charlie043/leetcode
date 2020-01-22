// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    const num = n*m
    const matrix = Array(num).fill(0)
    indices.forEach((indice) => {
        const ri = indice[0] * m
        for (let i = 0; i < m; i++) {
            matrix[ri+i]++
        }
        const ci = indice[1]
        for (let i = 0; i < n; i++) {
            matrix[ci+i*m]++
        }
    })
    return matrix.reduce((ret, n) => {
        return n % 2 === 0 ? ret : ret+1 
    }, 0)
};
