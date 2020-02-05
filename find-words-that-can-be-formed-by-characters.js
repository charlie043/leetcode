// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
const count = (str) => {
    const map = {}
    str.split('').forEach((s) => {
        if (!map[s]) map[s] = 0
        map[s]++
    })
    return map
}
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let ret = 0
    const charsMap = count(chars)
    words.forEach((word) => {
        const wordMap = count(word)
        let c = 0
        let l = 0
        Object.keys(wordMap).forEach((key) => {
            l++
            if (charsMap[key] && charsMap[key] >= wordMap[key]) {
                c++
            }
        })
        if (c === l) {
            ret += word.length
        }
    })
    return ret
};
