// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let nZero = 0
  let totalExceptZero = 1
  let total = 1
  nums.forEach((n) => { 
    if (n) {
      total *= n
      totalExceptZero *= n
    } else {
      nZero++
      total *= n
    }
  })
  return nums.map((n) => {
    if (n === 0) {
      if (nZero === 1) {
        return totalExceptZero
      } else {
        return 0
      }
    }
    return total/n
  })
};
