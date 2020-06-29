// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  if (!salary || !salary.length) return 0
  salary.sort((a, b) => a - b)
  salary.pop()
  salary.shift()
  return salary.reduce((sum, s) => sum + s, 0) / salary.length
};
