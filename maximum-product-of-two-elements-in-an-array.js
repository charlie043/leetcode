// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const max1 = Math.max(...nums)
  const index1 = nums.indexOf(max1)
  nums.splice(index1, 1)
  const max2 = Math.max(...nums)
  return (max1-1)*(max2-1)
};
