// https://leetcode.com/problems/kth-missing-positive-number/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  const set = new Set(arr)
  let c = 0
  let i = 1
  while (true) {
    if (!set.has(i)) {
      c++
      if (k === c) {
        return i
      }
    }
    i++
  }
};
