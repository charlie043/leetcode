// https://leetcode.com/problems/peak-index-in-a-mountain-array/
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] < arr[i]) {
      return i
    }
  }
  return arr.length = 1
};
