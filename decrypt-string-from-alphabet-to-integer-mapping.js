// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
const chars = " abcdefghijklmnopqrstuvwxyz"

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const ret = []
    const array = s.split('')
    while (!!array.length) {
        const p = array.pop()
        if (p === '#') {
            const s = array.splice(array.length - 2, 2).join('')
            ret.unshift(chars[s])
        } else {
            ret.unshift(chars[p])
        }
    }
    return ret.join('')
};
