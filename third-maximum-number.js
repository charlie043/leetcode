// https://leetcode.com/problems/third-maximum-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const sorted = Array.from(new Set(nums)).sort((a, b) => b - a).slice(0, 3)
  return sorted.length === 3 ? sorted.pop() : sorted.shift()
};
