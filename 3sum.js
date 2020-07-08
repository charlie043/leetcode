// https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3 || nums === null) return []
  
  const ret = []
  nums.sort((a,b) => a-b)
  
  for (let i = 0; i < nums.length; i++) {
    
    // skip same number
    if (i > 0 && nums[i] === nums[i-1]) continue
    
    // -a === b + c
    const target = 0 - nums[i]
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      if (nums[j] + nums[k] === target) {
        ret.push([nums[i], nums[j], nums[k]])
        
        // skip same number j, k
        while (j < k && nums[j] === nums[j+1]) j++
        while (j < k && nums[k] === nums[k-1]) k--

        j++
        k--
      } else if (nums[j] + nums[k] < target) {
        j++
      } else {
        k--
      }
    }
  }
  return ret
};
