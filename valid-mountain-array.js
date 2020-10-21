// https://leetcode.com/problems/valid-mountain-array/
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if (A.length < 3) return false
  if (A[0] >= A[1]) return false
  let peaked = false
  let prev = A[0]
  for (let j = 1; j < A.length; j++) {
    const i = A[j]
    if (peaked) {
      if (prev <= i) {
        return false
      }
    } else {
      if (prev > i) {
        peaked = true
        prev = i
        continue
      }
      if (prev >= i) {
        return false
      }
    }
    prev = i
  }
  return peaked
};
