// https://leetcode.com/problems/find-the-duplicate-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const set = new Set()
  for (const num of nums) {
    if (set.has(num)) return num
    set.add(num)
  }
  return null
};
