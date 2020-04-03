// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = 0
  let sub = 0
  for (let i = 0; i < nums.length; i++) {
    sub += nums[i]
    
    if (sub > max) max = sub
    if (sub < 0) sub = 0
  }
  return max === 0 ? Math.max(...nums) : max
};
