// https://leetcode.com/problems/duplicate-zeros/
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  const n = arr.length
  let i = 0
  let index = 0
  while (i < n) {
    for (let j = index; j < n; j++) {
      if (arr[j] === 0) {
        arr.splice(j, 0, 0)
        index = j + 2
        break
      }
    }
    i++
  }
  arr.splice(n, arr.length-n)
};
