// https://leetcode.com/problems/maximum-number-of-balloons/
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const arr = text.split('')
    const count = {b: 0, a: 0, l: 0, o: 0, n: 0}
    const keys = Object.keys(count)
    arr.forEach(s => {
        if (keys.includes(s)) {
            count[s]++
        }
    })
    return Math.min(count.b, count.a, Math.floor(count.l/2), Math.floor(count.o/2), count.n)
};
