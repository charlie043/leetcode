// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let sum = 0
  let len = 1
  while (len <= arr.length) {
    let s = 0
    while (s <= arr.length - len) {
      for (let i = s; i < len + s; i++) {
        sum += arr[i]
      }
      s++
    }
    len += 2
  }
  return sum
};
