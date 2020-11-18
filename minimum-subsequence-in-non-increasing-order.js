// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  const h = nums.reduce((sum, n) => sum + n, 0) / 2
  nums.sort((a, b) => b - a)
  const ret = []
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    ret.push(nums[i])
    if (sum > h) {
      return ret
    }
  }
  return ret
};
