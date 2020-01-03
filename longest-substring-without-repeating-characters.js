/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

const hasCharactor = (str, charactor) => {
    return str.indexOf(charactor) >= 0
}

const splitWithIndex = (sArray, index = 0, ret = []) => {
    let i = index
    let str = ''
    while (i < sArray.length) {
        const charactor = sArray[i]
        if (hasCharactor(str, charactor)) {
            break;
        }
        str += charactor
        i++
    }
    ret.push(str.length)
    index++
    return index >= sArray.length ? ret : splitWithIndex(sArray, index, ret)
}


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const sArray = s.split('')
    const splitted = splitWithIndex(sArray)
    return splitted.reduce((max, v) => v > max ? v : max, 0)
};
