// https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.unshift(0)
            count++
        }
    }
    nums.splice(0, count)
    nums.splice(nums.length, count, ...Array(count).fill(0))
};
