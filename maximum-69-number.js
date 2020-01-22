// https://leetcode.com/problems/maximum-69-number/
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const str = num.toString().split('')
    for (let i = 0 ; i < str.length ; i++ ) {
        const s = str[i]
        if (s === '6') {
            str.splice(i, 1, '9')
            break;
        }
    }
    return parseInt(str.join(''), 10)
};
