// https://leetcode.com/problems/minimum-absolute-difference/
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    const count = []
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i]
        if (count[diff]) {
            count[diff].push([arr[i], arr[i+1]])
        } else {
            count[diff] = [[arr[i], arr[i+1]]]            
        }
    }
    return count.find(val => !!val)
};
