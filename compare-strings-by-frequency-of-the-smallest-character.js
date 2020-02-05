// https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/
const count = (str) => {
    if (str.length === 1) return 1
    const strCodes = str.split('').map((s) => s.charCodeAt(0))
    const target = Math.min(...strCodes)
    let c = 0
    strCodes.forEach((s) => {
        if (s === target) {
            c++
        }
    })
    return c
}

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    const ret = []
    const wordsCount = words.map(count)
    queries.forEach((q) => {
        let c = 0
        const qc = count(q)
        wordsCount.forEach((wc) => {
            if (qc < wc) {
                c++
            }
        })
        ret.push(c)
    })
    return ret
};
