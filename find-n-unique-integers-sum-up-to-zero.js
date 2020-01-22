// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if (n === 1) {
        return [0]
    } else if (n % 2 === 0) {
        const ret = []
        let i = - n / 2
        while (n) {
            if (i === 0) {
                i++
                continue
            }
            ret.push(i)
            i++
            n--
        }
        return ret
    } else {
        const ret = []
        let i = - Math.floor(n / 2)
        while (n) {
            ret.push(i)
            i++
            n--
        }
        return ret
    }
};
