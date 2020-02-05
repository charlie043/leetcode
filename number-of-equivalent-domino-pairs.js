// https://leetcode.com/problems/number-of-equivalent-domino-pairs/
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let c = 0, i = 0, l = dominoes.length
    for (; i < l ; i++) {
        const d0 = dominoes[i]
        for (let j = i + 1; j < l ; j++) {
            const d1 = dominoes[j]
            if (
                d0[0] === d1[0] && d0[1] === d1[1] ||
                d0[0] === d1[1] && d0[1] === d1[0]
            ) {
                c++
            }
        }
    }
    return c
};
