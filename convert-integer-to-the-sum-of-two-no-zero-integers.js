// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
const hasZero = (num) => {
    return num.toString().includes('0')
}

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let n1 = 0, n2 = n
    while (hasZero(n1) || hasZero(n2)) {
        n1++
        n2--
    }
    return [n1, n2]
};
