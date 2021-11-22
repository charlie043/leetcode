// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  const minus = operations.filter((op) => op.includes('-')).length;
  return operations.length - minus * 2;
};
