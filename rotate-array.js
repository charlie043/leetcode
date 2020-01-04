/**
 * https://leetcode.com/problems/rotate-array
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const r = k % nums.length
    const sliced = nums.splice(0, nums.length - r)
    nums.splice(nums.length, 0, ...sliced)
};
