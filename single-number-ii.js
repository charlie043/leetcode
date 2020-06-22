// https://leetcode.com/problems/single-number-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let p = null
  const possible = new Set(nums)
  const set = new Set()
  for (const n of nums) {
    if (set.has(n)) { 
      possible.delete(n)
    } else {
      set.add(n)
    }
  }
  return Array.from(possible)[0]
};
