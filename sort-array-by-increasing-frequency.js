// https://leetcode.com/problems/sort-array-by-increasing-frequency/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const freq = {}
  nums.forEach((n) => {
    freq[n] = (freq[n] || 0) + 1
  })
  return nums.sort((n1, n2) => 
    freq[n1] === freq[n2] ? n2 - n1 : freq[n1] - freq[n2]
  )
};
