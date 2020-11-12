// https://leetcode.com/problems/next-greater-element-i/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const ret = []
  for (let i = 0; i < nums1.length; i++) {
    const n1 = nums1[i]
    const n2Index = nums2.indexOf(n1)
    if (n2Index < 0) {
      ret.push(-1)
      continue
    }
    for (let j = n2Index + 1; j < nums2.length; j++) {
      if (nums2[j] > n1) {
        ret.push(nums2[j])
        break
      }
    }
    if (i + 1 !== ret.length) {
      ret.push(-1)
    }
  }
  return ret
};
