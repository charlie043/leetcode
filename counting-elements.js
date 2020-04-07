// https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3289/
/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  const set = new Set(arr)
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i]+1)) {
      count++
    }
  }
  return count
};
