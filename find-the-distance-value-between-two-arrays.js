// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  let count = 0
  arr1.forEach((d1) => {
    let isDistanceValue = true
    arr2.forEach((d2) => {
      if (Math.abs(d1 - d2) <= d) {
        isDistanceValue = false
      }
    })
    if (isDistanceValue) {
      count++
    }
  })
  return count
};
