// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) {
    return nums.length
  }
  let count = 1;
  while (true) {
    if (count === nums.length) {
      break;
    }    
    if (nums[count] === nums[count - 1]) {
      nums.splice(count, 1);  
    } else {
      count++;
    }
  }
  return count;
};
