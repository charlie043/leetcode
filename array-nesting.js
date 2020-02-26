// https://leetcode.com/problems/array-nesting/
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  const checks = new Array(nums.length).fill(false)
  let max = 0
  for (let n of nums) {
    if (checks[n]) continue
    let next = n
    const set = new Set()
    while (!set.has(next)) {
      set.add(next)
      next = nums[next]
      checks[next] = true
    }
    max = Math.max(max, set.size)
  }
  return max
};
