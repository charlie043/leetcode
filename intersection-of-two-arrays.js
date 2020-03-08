// https://leetcode.com/problems/intersection-of-two-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const a1 = Array.from(new Set(nums1))
  const set2 = new Set(nums2)
  const ret = []
  a1.forEach((n) => {
    if (set2.has(n)) {
      ret.push(n)
    }
  })
  return ret
}
