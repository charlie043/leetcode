// https://leetcode.com/problems/n-th-tribonacci-number/
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const m = [0, 1, 1]
    for (let i = 3 ; i <= n; i++) {
        m[i] = m[i-1] + m[i-2] + m[i-3]
    }
    return m[n]
};
