// https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const count = {}
  nums.forEach((n) => {
    count[n] = count[n] ? count[n]+1 : 1
  })
  for (let key of nums) {
    if (count[key] === 1) return key
  }
};
