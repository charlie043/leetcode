// https://leetcode.com/problems/height-checker/
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const sorted = [...heights].sort((a, b) => a-b)
  let count = 0
  heights.forEach((h, i) => {
    if (h !== sorted[i]) count++
  })
  return count
};
