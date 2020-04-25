// https://leetcode.com/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const _canJump = (nums) => {
  const i = nums.lastIndexOf(0)
  if (i < 0) {
    return true
  } else {
    if (i === 0) return false
    let j = i
    while (j) {
      j--
      if (
        nums[j] > i - j
      ) {
        return canJump(nums.slice(0, j+1))
      }
    }
    return false
  }
}
var canJump = function(nums) {
  if (nums.length === 1) return true
  if (nums[0] === 0) return false
  
  nums.pop()
  return _canJump(nums)
};
