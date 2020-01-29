// https://leetcode.com/problems/unique-number-of-occurrences/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const countNum = arr.reduce((count, num) => {
        count[num] ? count[num]++ : count[num] = 1
        return count
    }, {})
    const count = {}
    for (const key in countNum) {
        count[countNum[key]] = 1
    }
    return Object.keys(countNum).length === Object.keys(count).length
};
