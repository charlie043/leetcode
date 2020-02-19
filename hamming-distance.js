// https://leetcode.com/problems/hamming-distance/
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const _x = x.toString(2)
    const _y = y.toString(2)
    const pad = Math.max(_x.length, _y.length)
    
    const __x = _x.padStart(pad, '0').split('')
    const __y = _y.padStart(pad, '0').split('')
    
    let count = 0
    __x.forEach((n, i) => {
        if (n !== __y[i]) {
            count++
        }
    })
    return count
};
