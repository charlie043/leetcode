// https://leetcode.com/problems/array-partition-i/
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  let count = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i+=2) {
    count += nums[i]
  }
  return count
};
