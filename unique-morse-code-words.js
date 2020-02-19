// https://leetcode.com/problems/unique-morse-code-words/
const alphabets ='abcdefghijklmnopqrstuvwxyz'
const morses = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const map = {}
    words.forEach((word) => {
        const digits = word.split('')
        const morse = digits.reduce((m, a) => {
            return m + morses[alphabets.indexOf(a)]
        }, '')
        map[morse] = 1
    })
    return Object.keys(map).length
};
