// https://leetcode.com/problems/find-pivot-index/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let l = 0
  let r = nums.reduce((r, n) => r+n, 0) - nums[0]
  if (l === r) return 0
  
  for (let i = 1; i < nums.length; i++) {
    l += nums[i-1]
    r -= nums[i]
    if (l === r) {
      return i
    }
  }
  return -1
};
