// https://leetcode.com/problems/non-decreasing-array/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  const check = (nums, modified = false) => {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i+1]) {
        if (modified) return false
        const nums0 = [...nums]
        const nums1 = [...nums]
        nums0[i] = nums[i+1]
        nums1[i+1] = nums[i]
        return check(nums0, true) || check(nums1, true)
      }
    }
    return true
  }
  return check(nums)
};
