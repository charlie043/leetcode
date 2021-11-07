// https://leetcode.com/problems/build-array-from-permutation/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  return nums.map((n, i) => {
    return nums[nums[i]];
  });
};
