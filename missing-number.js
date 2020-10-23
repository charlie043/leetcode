// https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const set = new Set(Array(nums.length + 1).fill(0).map((n, i) => i))
  nums.forEach((n) => {
    set.delete(n)
  })
  return [...set][0]
};
