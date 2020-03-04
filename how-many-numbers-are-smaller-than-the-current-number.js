// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const counts = {}
  return nums.map((n) => {
    if (counts[n]) return counts[n]
    let c = 0
    nums.forEach((_n) => {
      if (n > _n) {
        c++
      }
    })
    counts[n] = c
    return c
  })   
};
