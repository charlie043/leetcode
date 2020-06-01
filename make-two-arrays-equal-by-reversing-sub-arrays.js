// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  if (target.length !== arr.length) return false
  target.sort((a,b) => a-b)
  arr.sort((a,b) => a-b)
  for (let i = 0; i < target.length; i++) {
    if (target[i] !== arr[i]) return false
  }
  return true
};
