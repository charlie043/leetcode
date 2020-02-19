// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let c = 0
    while (num / 2 > 0) {
        c++
        if (num % 2) {
            num -= 1
        } else {
            num /= 2
        }
    }
    return c
};
