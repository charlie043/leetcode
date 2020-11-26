// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let min = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum < min) {
      min = sum
    }
  }
  return -min + 1
};
